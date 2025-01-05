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
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
      {/* Left Section */}
      <div className="p-6 py-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 hover:text-accent transition-colors">
            <a href={`/blog/${slug}`}>{title}</a>
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-3 h-20">{description}</p>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {formatDate(publishedDate)}
        </p>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/3 h-48 md:h-auto">
        <a href={`/blog/${slug}`}>
          {imageUrl && (
            <Image
              src={`https:${imageUrl}`}
              alt={title}
              //   width={16}
              //   height={9}
              layout="fill"
              className="object-cover w-full h-full"
              quality={100}
              objectFit="cover"
              unoptimized
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
