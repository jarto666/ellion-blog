import { GetStaticPaths, GetStaticProps } from "next";
import { fetchBlogPosts } from "../../lib/contentful";
import { BlogPost } from "../../lib/contentful"; // Import the BlogPost interface
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  const content = documentToReactComponents(post.content);

  return (
    <article className="max-w-screen-lg mx-auto w-full p-4">
      {/* <article className="max-w-3xl mx-auto p-6 space-y-6"> */}
      <div className="max-w-screen-md mt-8 mb-8">
        <p className="text-sm text-gray-500 mb-2 underline">
          Published on: {new Date(post.publishedDate).toDateString()}
        </p>
        <h1 className="text-3xl font-semibold text-gray-900">{post.title}</h1>
      </div>

      {post.image && (
        <div className="relative h-96 mb-8">
          {/* <div>{post.image.fields.file.url}</div> */}
          <Image
            src={`https:${post.image.fields.file.url}`}
            alt={post.title}
            layout="fill"
            // objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="max-w-screen-md text-lg justified-text">
        <div className="">{content}</div>
      </div>
    </article>
  );
};

// Get all slugs for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchBlogPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking", // Set to 'blocking' for on-demand generation
  };
};

// Get static props for each post
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await fetchBlogPosts();
  const post = posts.find((post) => post.slug === params?.slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
};

export default BlogPostPage;
