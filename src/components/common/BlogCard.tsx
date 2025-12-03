import { Card, CardContent } from "../ui/card";
import { RedButton } from "./RedButton";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export function BlogCard({ 
  slug, 
  title, 
  excerpt, 
  image,
  className = "",
  style
}: BlogCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow grid grid-rows-subgrid row-span-4 ${className}`} style={style}>
      <div className="aspect-video bg-gray-200 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 grid grid-rows-subgrid row-span-3">
        <h3 className="text-gray-900 mb-2 text-[18px] font-medium">
          {title}
        </h3>
        <p className="text-gray-600 mb-3 line-clamp-3 text-[14px]">
          {excerpt}
        </p>
        <RedButton 
          variant="outline" 
          href={`#/blog/${slug}`}
          fullWidth
          showArrow
        >
          Читать статью
        </RedButton>
      </CardContent>
    </Card>
  );
}
