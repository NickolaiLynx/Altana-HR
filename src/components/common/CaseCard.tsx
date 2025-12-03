import { Card, CardContent } from "../ui/card";
import { RedButton } from "./RedButton";
import { ServiceBadge } from "./ServiceBadge";

interface CaseCardProps {
  id: string;
  title: string;
  task: string;
  shortMetric: string;
  shortMetricLabel: string;
  services: string[];
  variant?: "grid" | "list";
  className?: string;
  style?: React.CSSProperties;
}

export function CaseCard({ 
  id, 
  title, 
  task, 
  shortMetric, 
  shortMetricLabel, 
  services,
  variant = "grid",
  className = "",
  style
}: CaseCardProps) {
  if (variant === "list") {
    // Для секции Results - горизонтальная компоновка
    return (
      <Card className={`p-6 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col ${className}`} style={style}>
        <div className="text-xs text-[#D32F2F] mb-3">
          {services.map((service, idx) => (
            <span key={service}>
              {idx > 0 && ", "}
              {service}
            </span>
          ))}
        </div>
        <h4 className="text-gray-900 mb-3 font-bold">{title}</h4>
        <p className="text-gray-600 text-sm mb-6">{task}</p>
        
        <div className="pt-6 border-t border-gray-100 mt-auto flex items-center justify-between gap-4">
          <div>
            <div className="text-[#D32F2F]">{shortMetric}</div>
            <div className="text-gray-500 text-sm">{shortMetricLabel}</div>
          </div>
          <RedButton 
            variant="outline" 
            href={`#/cases/${id}`}
            showArrow
            className="flex-shrink-0 text-sm h-9 px-3"
          >
            Подробнее
          </RedButton>
        </div>
      </Card>
    );
  }

  // Для страницы CasesPage - grid с subgrid
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow grid grid-rows-subgrid row-span-5 ${className}`} style={style}>
      <CardContent className="p-6 grid grid-rows-subgrid row-span-5">
        {/* Badges */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {services.map((service) => (
            <ServiceBadge key={service} service={service as any} size="sm" />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-gray-900 mb-2 text-[18px] font-medium">
          {title}
        </h3>

        {/* Task excerpt */}
        <p className="text-gray-600 mb-3 line-clamp-3 text-[14px]">
          {task}
        </p>

        {/* Metric */}
        <div className="mb-3 p-4 bg-gray-50 rounded-lg border border-[#E5E7EB]">
          <div className="text-[#D32F2F] font-semibold">{shortMetric}</div>
          <div className="text-gray-500 text-sm">{shortMetricLabel}</div>
        </div>

        {/* Button */}
        <RedButton 
          variant="outline" 
          href={`#/cases/${id}`}
          fullWidth
          showArrow
        >
          Подробнее
        </RedButton>
      </CardContent>
    </Card>
  );
}
