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
  order?: string;
  limit?: number;
  page?: number;
  searchTerm?: string;
}

export const fetchBlogPosts = async (
  options: FetchBlogPostsOptions = {}
): Promise<BlogPost[]> => {
  const {
    order = "content.publishedDate:desc",
    limit = 100,
    page = 0,
    searchTerm,
  } = options;

  const response = await client.get("cdn/stories", {
    starts_with: blogPostsContentName,
    version: "published",
    sort_by: order,
    page: page,
    per_page: limit,
    search_term: searchTerm ?? "",
  });

  return response.data.stories.map((item: any) => ({
    id: item.id,
    title: item.name,
    description: item.content.description,
    slug: item.content.slug,
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
