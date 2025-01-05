import { GetStaticProps } from "next";
import { fetchBlogPosts } from "../../lib/contentful";
import { BlogPost } from "../../lib/contentful"; // Import the BlogPost interface
import Link from "next/link";

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts();
  return { props: { posts } };
};

export default BlogPage;
