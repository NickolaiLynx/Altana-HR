import { Badge } from "../ui/badge";
import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  titleColor?: "dark" | "light";
  animated?: boolean;
  isInView?: boolean;
}

export function SectionHeader({
  title,
  description,
  badge,
  titleColor = "dark",
  animated = false,
  isInView = true,
}: SectionHeaderProps) {
  const titleClass = titleColor === "light" ? "text-white" : "text-gray-900";
  const descriptionClass = titleColor === "light" ? "text-white/90" : "text-gray-600";
  
  const animationClass = animated
    ? `transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`
    : '';

  return (
    <div className={`text-center mb-12 ${animationClass}`}>
      {badge && (
        <Badge className="mb-4 bg-[#D32F2F] hover:bg-[#D32F2F]">{badge}</Badge>
      )}
      <h2 className={`${titleClass} mb-4 text-[24px] font-semibold`}>
        {title}
      </h2>
      {description && (
        <p className={`${descriptionClass} max-w-2xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
}
