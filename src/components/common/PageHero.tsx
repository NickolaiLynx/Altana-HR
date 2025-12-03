import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ReactNode } from "react";

interface PageHeroProps {
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
  description?: string | ReactNode;
  className?: string;
  ctaButton?: ReactNode;
}

export function PageHero({ breadcrumbs, title, description, className = "", ctaButton }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pb-16 pt-24 ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
      
      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="contents">
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink href={crumb.href} className="text-white/80 hover:text-white">
                      {crumb.label}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-white">{crumb.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator className="text-white/60" />
                )}
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <div>
          <h1 className="text-white mb-4 text-[32px] font-bold">
            {title}
          </h1>
          {description && (
            typeof description === 'string' ? (
              <p className="text-white/90 max-w-3xl">{description}</p>
            ) : (
              description
            )
          )}
          {ctaButton && (
            <div className="mt-8">
              {ctaButton}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}