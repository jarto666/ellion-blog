import { BlogPost } from "../lib/contentful";
import BlogPostCard from "./blogPostCard";

interface BlogPostListProps {
  posts: BlogPost[];
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts }) => {
  return (
    <>
      <div>
        {posts.map((post) => (
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
        ))}
      </div>
    </>
  );
};

export default BlogPostList;
