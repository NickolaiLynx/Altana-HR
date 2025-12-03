import { PageHero } from "./common/PageHero";
import { SectionHeader } from "./common/SectionHeader";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, FileCheck, Target, AlertTriangle, Lightbulb } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { usePageMeta } from "../hooks/usePageMeta";
import { RedButton } from "./common/RedButton";
import { ContactFormDialog } from "./ContactFormDialog";
import { Button } from "./ui/button";
import { QuizDialog } from "./QuizDialog";
import { createServiceSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";
import { useEffect } from "react";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function HRAuditPage() {
  // SEO meta tags for HR audit page
  usePageMeta({
    title: "Кадровый аудит — Алтана | Проверка кадровых документов и процессов",
    description: "Проводим комплексный кадровый аудит: проверка документов, оценка процессов, выявление нарушений и консультации по трудовому законодательству",
    keywords: "кадровый аудит, проверка кадровых документов, аудит кадрового делопроизводства, трудовое законодательство",
    ogImage: ogImage,
    type: "service",
  });

  // Add service structured data
  useEffect(() => {
    const serviceSchema = createServiceSchema({
      name: "Кадровый аудит",
      description: "Комплексная проверка кадровой документации и процессов управления персоналом",
      provider: "Алтана",
      serviceType: "Кадровый аудит",
      areaServed: "Дальний Восток",
    });
    addStructuredData(serviceSchema, "service-schema-hr-audit");
    
    return () => removeStructuredData("service-schema-hr-audit");
  }, []);
  const { ref: servicesRef, isInView: servicesInView } = useInView();
  const { ref: whenRef, isInView: whenInView } = useInView();

  const services = [
    {
      icon: FileCheck,
      title: "Проверка кадровых документов",
      description: "Проводим анализ наличия, правильности оформления и соответствия трудовому законодательству РФ, а именно трудовых договоров, договоров гражданско-правового характера, приказов, ЛНА, персональных данных, личных дел, документов воинского учета и других кадровых документов."
    },
    {
      icon: Target,
      title: "Оценка процессов",
      description: "Оцениваем, насколько эффективно выстроены процессы кадрового делопроизводства и управления персоналом."
    },
    {
      icon: AlertTriangle,
      title: "Выявление нарушений",
      description: "Определяем несоответствия требованиям трудового законодательства РФ и внутренней политике организации."
    },
    {
      icon: Lightbulb,
      title: "Рекомендации",
      description: "Предлагаем конкретные меры для исправления выявленных нарушений и оптимизации кадровых процессов."
    }
  ];

  const whenToApply = [
    "При внедрении новых кадровых систем или изменений в законодательстве",
    "Перед проверкой со стороны трудовой инспекции или налоговой",
    "Для предотвращения и разрешения трудовых споров"
  ];

  return (
    <div className="min-h-screen bg-white relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <PageHero
          breadcrumbs={[
            { label: "Главная", href: "#/" },
            { label: "Услуги", href: "#/services" },
            { label: "Кадровый аудит" }
          ]}
          title="Кадровый аудит"
          description="Предоставляем услуги по проверке и оценке организации ведения кадрового делопроизводства, на соответствие трудовому законодательству РФ и внутренним нормам компании. Помогаем выявить и устранить недочеты, минимизировать риски трудовых споров и оптимизировать работу с персоналом, предлагая услуги кадрового аудита."
          className="py-16 md:py-24"
          ctaButton={
            <QuizDialog
              initialStep={2}
              preselectedBranch="audit"
              trigger={
                <Button 
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8"
                >
                  Получить экспресс-аудит
                </Button>
              }
            />
          }
        />
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container mx-auto">
          <SectionHeader
            badge="Что входит в аудит"
            title="Комплексная проверка кадровых процессов"
            description="Четыре ключевых направления для обеспечения соответствия законодательству и оптимизации работы с персоналом"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className={`p-8 border-gray-200 hover:shadow-lg transition-all duration-700 bg-white ${
                    servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-gray-900 mb-3 text-[18px] font-medium">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* When to Apply Section */}
      <section ref={whenRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Когда обратиться"
              title="В каких ситуациях нужен кадровый аудит"
              description="Своевременная проверка поможет избежать штрафов и юридических проблем"
            />

            <div className="space-y-4">
              {whenToApply.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 p-6 bg-gray-50 rounded-lg transition-all duration-700 ${
                    whenInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Что вы получите"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Полный отчет о состоянии кадровой документации",
                "Перечень выявленных нарушений с указанием рисков",
                "Конкретные рекомендации по устранению недочетов",
                "Образцы документов для приведения в соответствие",
                "Консультацию по внедрению изменений",
                "Снижение рисков штрафов и трудовых споров"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-6 text-[24px] font-semibold">
              Готовы провести кадровый аудит?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей и сроков проведения аудита
            </p>
            <QuizDialog
              initialStep={2}
              preselectedBranch="audit"
              trigger={
                <Button 
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8"
                >
                  Получить экспресс-аудит
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}