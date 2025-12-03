import { PageHero } from "./common/PageHero";
import { SectionHeader } from "./common/SectionHeader";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2, MessageSquare, FileText, Stethoscope, Users, Globe2, Shield } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { usePageMeta } from "../hooks/usePageMeta";
import { Button } from "./ui/button";
import { QuizDialog } from "./QuizDialog";
import { createServiceSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";
import { useEffect } from "react";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function MigrationPage() {
  // SEO meta tags for migration page
  usePageMeta({
    title: "Миграционный учет — Алтана | Оформление документов для иностранных работников",
    description: "Полный спектр услуг по миграционному учету: консультации, оформление документов, организация медосмотров, патенты и разрешения на работу",
    keywords: "миграционный учет, оформление документов иностранцев, патент на работу, разрешение на работу, миграционное законодательство",
    ogImage: ogImage,
    type: "service",
  });

  // Add service structured data
  useEffect(() => {
    const serviceSchema = createServiceSchema({
      name: "Миграционный учет",
      description: "Полный спектр услуг по миграционному учету иностранных работников",
      provider: "Алтана",
      serviceType: "Миграционный учет",
      areaServed: "Дальний Восток",
    });
    addStructuredData(serviceSchema, "service-schema-migration");
    
    return () => removeStructuredData("service-schema-migration");
  }, []);
  const { ref: servicesRef, isInView: servicesInView } = useInView();
  const { ref: whenRef, isInView: whenInView } = useInView();

  const services = [
    {
      icon: MessageSquare,
      title: "Консультации по вопросам миграции",
      description: "Различные аспекты миграционного законодательства, разрешение на работу, патенты и регистрацию иностранного гражданина. Эти консультации помогают избежать ошибок и штрафов, связанных с нарушением закона."
    },
    {
      icon: FileText,
      title: "Оформление документов",
      description: "Процесс оформления документов для иностранных граждан является достаточно сложным и требует знания всех нюансов российского законодательства. Мы берём на себя всю бумажную работу, начиная от подготовки необходимых заявлений и заканчивая подачей документов в соответствующие органы власти."
    },
    {
      icon: Stethoscope,
      title: "Организация медицинского освидетельствования",
      description: "Для получения разрешения на работу иностранным гражданам необходимо пройти медицинское обследование. Мы организуем процесс прохождения медосмотра и получение соответствующих заключений."
    }
  ];

  const benefits = [
    "Легальное пребывание иностранных работников на территории РФ",
    "Минимизация рисков штрафов за нарушение миграционного законодательства",
    "Полное сопровождение процесса оформления документов",
    "Регулярный мониторинг изменений в законодательстве",
    "Своевременное информирование о новых требованиях",
    "Организация всех необходимых медицинских обследований"
  ];

  const whenToApply = [
    "При найме иностранных специалистов из стран ЕАЭС и дальнего зарубежья",
    "Для оформления разрешений на работу и патентов",
    "При необходимости постановки/снятия с миграционного учета",
    "Для организации медосмотров иностранных работников"
  ];

  return (
    <div className="min-h-screen bg-white relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <PageHero
          breadcrumbs={[
            { label: "Главная", href: "#/" },
            { label: "Услуги", href: "#/services" },
            { label: "Миграционный учет" }
          ]}
          title="Миграционный учет"
          description="Предоставляем услуги в области миграционного законодательства, обеспечивающие легальное пребывание и трудоустройство иностранных граждан на территории Российской Федерации. Работа с иностранными гражданами в процессе трудоустройства несет определенные риски, связанные с возможным нарушением миграционных норм. Наше агентство помогает минимизировать эти риски путем регулярного мониторинга изменений в законодательстве и своевременного информирования клиентов о новых требованиях."
          className="py-16 md:py-24"
          ctaButton={
            <QuizDialog
              initialStep={2}
              preselectedBranch="migration"
              trigger={
                <Button 
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8"
                >
                  Получить консультацию
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
            badge="Наши услуги"
            title="Комплексное сопровождение миграционных процессов"
            description="Три ключевых направления для обеспечения легальной работы иностранных граждан"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              title="В каких ситуациях нужна наша помощь"
              description="Своевременное обращение поможет избежать проблем с миграционным законодательством"
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
              {benefits.map((item, index) => (
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
              Готовы получить консультацию?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Оставьте заявку, и мы свяжемся с вами для обсуждения вашей ситуации и возможных решений
            </p>
            <QuizDialog
              initialStep={2}
              preselectedBranch="migration"
              trigger={
                <Button 
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8"
                >
                  Получить консультацию
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}