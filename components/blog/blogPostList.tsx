import { BlogPost } from "../../lib/storyblok";
import BlogPostCard from "./blogPostCard";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <BlogPostCard
              id={post.id}
              title={post.title}
              description={post.description}
              slug={post.slug}
              imageUrl={post.image?.file.url}
              publishedDate={post.publishedDate}
            ></BlogPostCard>
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPostList;
