import StoryblokClient from "storyblok-js-client";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: any;
  body: string;
  image?: {
    file: {
      url: string;
      alt: string;
    };
  };
  publishedDate: string;
}

const client = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN!,
});

const blogPostsContentName = "blog-posts/";

interface FetchBlogPostsOptions {
  order?: string; // Sorting order
  limit?: number; // Number of items per page
  page?: number; // Number of items to skip
}

export const fetchBlogPosts = async (
  options: FetchBlogPostsOptions = {}
): Promise<BlogPost[]> => {
  const {
    order = "content.publishedDate:desc",
    limit = 10,
    page = 0,
  } = options;

  const response = await client.get("cdn/stories", {
    starts_with: blogPostsContentName,
    version: "published",
    sort_by: order,
    page: page,
    per_page: limit,
  });

  // console.log(response.data.stories[0].content.content);
  // console.log(
  //   JSON.stringify(response.data.stories[0].content.content.content[1])
  // );
  // console.log(response.data.stories[0].content.body);

  return response.data.stories.map((item: any) => ({
    id: item.id,
    title: item.name,
    description: item.content.description,
    slug: item.slug,
    content: item.content.content,
    body: item.content.body,
    image: item.content.image
      ? {
          file: {
            url: item.content.image.filename,
            alt: item.content.image.alt || "",
          },
        }
      : undefined,
    publishedDate: item.content.publishedDate,
  })) as BlogPost[];
};
