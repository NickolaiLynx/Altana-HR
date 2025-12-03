import { Badge } from "../ui/badge";
import { Users, FileCheck, Globe, LucideIcon } from "lucide-react";

export const serviceIcons = {
  recruitment: Users,
  audit: FileCheck,
  migration: Globe,
};

export const serviceNames = {
  recruitment: "Подбор персонала",
  audit: "Кадровый аудит",
  migration: "Миграционный учет",
};

interface ServiceBadgeProps {
  service: keyof typeof serviceIcons;
  size?: "sm" | "md";
}

export function ServiceBadge({ service, size = "md" }: ServiceBadgeProps) {
  const Icon = serviceIcons[service];
  const iconSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <Badge
      variant="outline"
      className="bg-[#D32F2F]/10 text-[#D32F2F] border-[#D32F2F]/20"
    >
      <Icon className={`mr-1.5 ${iconSize}`} />
      {serviceNames[service]}
    </Badge>
  );
}
