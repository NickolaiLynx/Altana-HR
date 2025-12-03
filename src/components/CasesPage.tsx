import { PageHero } from "./common/PageHero";
import { CaseCard } from "./common/CaseCard";
import { casesData, serviceNames } from "../data/cases";
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function CasesPage() {
  // SEO meta tags for cases page
  usePageMeta({
    title: "Кейсы — Алтана | Успешные проекты по подбору персонала",
    description: "Реальные истории работы с клиентами — от постановки задачи до конкретных результатов. Кейсы подбора персонала для горнодобывающих компаний",
    keywords: "кейсы подбора персонала, истории успеха, проекты кадрового агентства, горнодобывающая отрасль",
    ogImage: ogImage,
    type: "website",
  });

  // Собираем все кейсы в один массив
  const allCases = [
    ...casesData.recruitment.map(c => ({ ...c, category: 'recruitment' })),
    ...casesData.audit.map(c => ({ ...c, category: 'audit' })),
    ...casesData.migration.map(c => ({ ...c, category: 'migration' })),
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "#/" },
          { label: "Кейсы" }
        ]}
        title="Кейсы"
        description="Реальные истории работы с клиентами — от постановки задачи до конкретных результатов"
      />

      {/* Cases Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {allCases.map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                id={caseItem.id}
                title={caseItem.title}
                task={caseItem.task}
                shortMetric={caseItem.shortMetric}
                shortMetricLabel={caseItem.shortMetricLabel}
                services={caseItem.services}
                variant="grid"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}