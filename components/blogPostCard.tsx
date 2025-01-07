import Image from "next/image";
import { formatDate } from "../lib/utils";

interface BlogPostCardProps {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl?: string;
  publishedDate: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  description,
  slug,
  imageUrl,
  publishedDate,
}) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row bg-background-secondary 
    text-foreground rounded-lg overflow-hidden hover:shadow-md 
    hover:ring-opacity-50 hover:shadow-accent-secondary transition-shadow 
    duration-300 border-2 border-accent-secondary `}
    >
      {/* Left Section */}
      <div className="p-6 py-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
            <a href={`/blog/${slug}`}>{title}</a>
          </h2>
          <p className="text-foreground-200 mt-2 line-clamp-4 h-24">
            {description}
          </p>
        </div>
        <p className="text-sm text-foreground-300 mt-4">
          {formatDate(publishedDate)}
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <a href={`/blog/${slug}`}>
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              className="object-cover w-full h-full"
              quality={100}
              unoptimized
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
