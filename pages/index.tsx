import { GetStaticProps } from "next";
import { BlogPost, fetchBlogPosts } from "../lib/storyblok";
import BlogPostList from "../components/blogPostList";
import { useRouter } from "next/router";

interface HomePageProps {
  posts: BlogPost[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <div className="w-full bg-background-secondary text-foreground border-b-4 border-secondary">
        <div className="max-w-screen-lg mx-auto w-full px-4 py-16">
          <h1 className="text-4xl font-bold mb-4">
            Mastering <span className="text-accent">Code</span>, <br />
            <span className="text-accent">Data</span>, and{" "}
            <span className="text-accent">Productivity</span>
          </h1>
          <p className="text-lg">
            Exploring the art of software engineering, the power of data-driven
            <br />
            solutions, and strategies to work smarter every day.
          </p>
        </div>
      </div>

      {/* Recent posts section */}
      <div className="max-w-screen-lg mx-auto w-full p-4 bg-background text-foreground">
        <h2 className="text-3xl my-8">Recent posts</h2>
        <BlogPostList posts={posts}></BlogPostList>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/blog")}
            className="px-4 py-2 bg-accent text-foreground-secondary rounded hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent hover:bg-accent-secondary"
          >
            See all posts
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchBlogPosts({
    limit: 3,
  });
  return { props: { posts } };
};

export default HomePage;
