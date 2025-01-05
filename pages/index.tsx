import { GetStaticProps } from "next";
import { BlogPost, fetchBlogPosts } from "../lib/contentful";
import BlogPostList from "../components/blogPostList";

interface HomePageProps {
  posts: BlogPost[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <div className="w-full bg-secondary-50 border-b-4">
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
      <div className="max-w-screen-lg mx-auto w-full p-4">
        <h2 className="text-3xl my-8">Recent posts</h2>
        <BlogPostList posts={posts}></BlogPostList>
        {/* {posts.map((post) => (
          <>
            <BlogPostCard
              id={post.id}
              title={post.title}
              description={post.description}
              slug={post.slug}
              imageUrl={post.image?.fields.file.url}
              publishedDate={post.publishedDate}
            ></BlogPostCard>
            <br />
          </>
        ))} */}

        <button className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          See all posts
        </button>
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
