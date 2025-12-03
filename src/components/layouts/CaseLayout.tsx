import { ArrowLeft, CheckCircle2, Quote } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ContactFormDialog } from "../ContactFormDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface CaseLayoutProps {
  caseItem: {
    id: number;
    title: string;
    category: string;
    client: string;
    task: string;
    actions: string[];
    challenges: string;
    solution: string;
    results: string[];
    shortMetric: string;
    shortMetricLabel: string;
    testimonial: {
      text: string;
      author: string;
    };
  };
}

export function CaseLayout({ caseItem }: CaseLayoutProps) {
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
                <BreadcrumbLink href="#/cases" className="text-white/80 hover:text-white">
                  Кейсы
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white line-clamp-1">
                  {caseItem.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
              {caseItem.category}
            </Badge>
          </div>

          <div className="mt-8">
            <h1 className="text-white mb-4 text-[32px] font-bold max-w-4xl">
              {caseItem.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Case Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl">
          
          <div className="space-y-12">
            {/* Key Metric Highlight */}
            <div className="bg-gradient-to-r from-[#D32F2F]/10 to-[#D32F2F]/5 rounded-2xl p-8 border border-[#D32F2F]/20">
              <div className="text-center">
                <div className="text-[#D32F2F] mb-2 text-[48px] font-bold">{caseItem.shortMetric}</div>
                <div className="text-gray-700">{caseItem.shortMetricLabel}</div>
              </div>
            </div>

            {/* Client */}
            <div>
              <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                Клиент и регион
              </h2>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {caseItem.client}
                </p>
              </div>
            </div>

            {/* Task */}
            <div>
              <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                Задача
              </h2>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {caseItem.task}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div>
              <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                Что сделали
              </h2>
              <div className="space-y-4">
                {caseItem.actions.map((action, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">
                        {action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges, Solution and Results - 3 columns */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Challenges */}
              <div className="flex flex-col">
                <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                  Сложности
                </h2>
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {caseItem.challenges}
                  </p>
                </div>
              </div>
              
              {/* Solution */}
              <div className="flex flex-col">
                <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                  Решение
                </h2>
                <div className="bg-white rounded-lg p-6 border border-gray-200 flex-1">
                  <p className="text-gray-700 leading-relaxed">
                    {caseItem.solution}
                  </p>
                </div>
              </div>
              
              {/* Results */}
              <div className="flex flex-col">
                <h2 className="mb-4 text-[24px] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full"></span>
                  Результаты
                </h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 flex-1">
                  <div className="space-y-3">
                    {caseItem.results.map((result, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {result}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <div className="bg-white rounded-lg p-8 border-l-4 border-[#D32F2F]">
                <div className="flex gap-3 mb-4">
                  <Quote className="w-8 h-8 text-[#D32F2F] flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed italic text-lg">
                    «{caseItem.testimonial.text}»
                  </p>
                </div>
                <p className="text-gray-500 pl-11">
                  — {caseItem.testimonial.author}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-gradient-to-br from-[#D32F2F] via-[#C62828] to-[#B71C1C] rounded-2xl p-8 md:p-12 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-white mb-4 text-[24px] font-semibold">Хотите такой же результат?</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Оставьте заявку — мы разберем вашу задачу и предложим решение с конкретными сроками и гарантиями
                </p>
                <ContactFormDialog 
                  trigger={
                    <Button className="bg-white text-[#D32F2F] hover:bg-white/90">
                      Получить консультацию
                    </Button>
                  }
                  source={`Кейс - ${caseItem.title}`}
                />
              </div>
            </div>
          </div>

          {/* Back to Cases */}
          <div className="mt-12 pt-12 border-t border-gray-200 text-center">
            <a href="#/cases">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к кейсам
              </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
