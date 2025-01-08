import MarkdownRenderer from "./markdownRenderer";

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <>
      <MarkdownRenderer markdown={content} />
    </>
  );
};

export default BlogPostContent;
