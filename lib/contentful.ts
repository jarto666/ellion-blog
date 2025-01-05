import { createClient, EntryCollection } from "contentful";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: any;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  publishedDate: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const blogPostsContentName = "someContent";

interface FetchBlogPostsOptions {
  order?: string | string[]; // Sorting order
  limit?: number; // Number of items per page
  skip?: number; // Number of items to skip
}

export const fetchBlogPosts = async (
  options: FetchBlogPostsOptions = {}
): Promise<BlogPost[]> => {
  const { order = "-fields.publishedDate", limit = 10, skip = 0 } = options;

  const response: EntryCollection<any> = await client.getEntries({
    content_type: blogPostsContentName,
    order: order as any,
    limit,
    skip,
  });

  return response.items.map((item) => ({
    id: item.sys.id,
    ...item.fields,
  })) as BlogPost[];
};
