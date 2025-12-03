import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { ContactFormDialog } from "../ContactFormDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface BlogLayoutProps {
  article: {
    slug: string;
    title: string;
    image: string;
    intro: string;
    sections: {
      title: string;
      items: {
        subtitle: string;
        content: string;
      }[];
    }[];
    errors?: {
      title: string;
      items: string[];
    };
    conclusion: string;
  };
}

export function BlogLayout({ article }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-24">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
        
        <div className="container mx-auto relative" style={{ zIndex: 2 }}>
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#/" className="text-white/80 hover:text-white">
                  Главная
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbLink href="#/blog" className="text-white/80 hover:text-white">
                  Блог
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white line-clamp-1">
                  {article.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-8">
            <h1 className="text-white mb-4 text-[32px] font-bold max-w-4xl">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Featured Image */}
            <div className="aspect-video bg-gray-200 rounded-2xl relative overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Intro */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {article.intro}
              </p>
            </div>

            {/* Sections */}
            {article.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="mb-6 text-[24px] font-semibold">{section.title}</h2>
                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-6 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="mb-2 text-[18px] font-medium">
                            {item.subtitle}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Errors Section */}
            {article.errors && (
              <div>
                <h2 className="mb-6 text-[24px] font-semibold">{article.errors.title}</h2>
                <div className="space-y-4">
                  {article.errors.items.map((error, index) => (
                    <div key={index} className="bg-red-50 rounded-lg p-6 border border-red-200">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed">
                          {error}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conclusion CTA */}
            <div className="relative bg-gradient-to-br from-[#D32F2F] via-[#C62828] to-[#B71C1C] rounded-2xl p-8 md:p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-white mb-4 text-[24px] font-semibold">Итог</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  {article.conclusion}
                </p>
                <ContactFormDialog 
                  trigger={
                    <Button className="bg-white text-[#D32F2F] hover:bg-white/90">
                      Получить консультацию
                    </Button>
                  }
                  source={`Блог - ${article.title}`}
                />
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <a href="#/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к блогу
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
