import { GetStaticPaths, GetStaticProps } from "next";
import { fetchBlogPosts } from "../../lib/storyblok";
import { BlogPost } from "../../lib/storyblok";
import Image from "next/image";
import BlogPostContent from "../../components/blogPostContent";
import { formatDate } from "../../lib/utils";

interface BlogPostPageProps {
  post: BlogPost;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  return (
    <article className="max-w-screen-lg mx-auto w-full p-4 bg-background text-foreground">
      <div className="max-w-screen-md mt-8 mb-8">
        <p className="text-sm text-foreground-300 mb-2 underline">
          Published on: {formatDate(post.publishedDate)}
        </p>
        <h1 className="text-3xl font-semibold text-foreground">{post.title}</h1>
      </div>

      {post.image && (
        <div className="relative h-auto mb-8">
          <Image
            src={post.image.file.url}
            alt={post.title}
            width={1920}
            height={1280}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}

      <div className="max-w-screen-md text-lg text-foreground-200 justified-text">
        <BlogPostContent content={post.body}></BlogPostContent>
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
