import { GetStaticProps } from "next";
import { fetchBlogPosts } from "../../lib/storyblok";
import { BlogPost } from "../../lib/storyblok"; // Import the BlogPost interface
import BlogPostList from "../../components/blogPostList";

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <div className="max-w-screen-lg mx-auto w-full p-4">
      <h1 className="text-3xl mt-4 mb-8">Articles</h1>
      <BlogPostList posts={posts}></BlogPostList>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts();
  return { props: { posts } };
};

export default BlogPage;
