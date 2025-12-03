import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Search, ClipboardCheck, Globe } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { ContactFormDialog } from "./ContactFormDialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionHeader } from "./common/SectionHeader";
import imgPodbor from "figma:asset/012309a8f718373ca710c7c77587b48df162ad7c.png";
import imgAudit from "figma:asset/6df535769b12d782f2ba137165bc33d65b5b7155.png";
import imgMigration from "figma:asset/03b21bfdc284b04af50d24a9fc6318c36213669b.png";

export function Services() {
  const { ref, isInView } = useInView();
  const services = [
    {
      icon: Search,
      image: imgPodbor,
      title: "Подбор для горнодобычи",
      description: "Полная оценка, проверка и сопровождение кандидатов до выхода на работу на вахте или на сезон.",
      features: [
        "Прогноз сроков закрытия за 7 рабочих дней",
        "Гарантия замены в течение испытательного срока",
        "База 5000+ специалистов РФ и ЕАЭС",
      ],
      cta: "Заполнить бриф",
      gradient: "from-red-50 to-white",
      action: "brief",
    },
    {
      icon: ClipboardCheck,
      image: imgAudit,
      title: "Кадровый аудит",
      description: "Проверим ведение документооборота, найдем нарушения, дадим план исправлений (договоры, приказы, ЛНА).",
      features: [
        "Минимизация штрафов ГИТ",
        "Готовность к проверкам",
        "План исправлений с конкретными шагами",
      ],
      cta: "Читать подробнее",
      gradient: "from-orange-50 to-white",
      action: "page",
      pageUrl: "#/hr-audit",
    },
    {
      icon: Globe,
      image: imgMigration,
      title: "Миграционный учет",
      description: "Постановка и снятие с учета, медосмотры, уведомления, отчетность.",
      features: [
        "Без штрафов и срывов сроков",
        "Персональный календарь событий",
        "Полное сопровождение иностранных работников",
      ],
      cta: "Читать подробнее",
      gradient: "from-amber-50 to-white",
      action: "page",
      pageUrl: "#/migration",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white" style={{ zIndex: 2 }}>
      <div className="container mx-auto">
        <SectionHeader
          title="Ключевые услуги"
          description="Комплексные решения для HR-задач горнодобывающих компаний"
          animated={true}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-1 items-start">
          {services.map((service, index) => {
            
            // Кнопка для первой карточки (бриф)
            if (service.action === "brief") {
              return (
                <Card 
                  key={index} 
                  className={`overflow-hidden bg-gradient-to-br ${service.gradient} border-gray-200 hover:shadow-xl transition-all duration-700 grid grid-rows-subgrid row-span-6 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-full aspect-[16/9]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="px-8 py-4 grid grid-rows-subgrid row-span-5">
                    <h3 className="text-gray-900 mb-1 text-[18px] font-medium">{service.title}</h3>
                    <Separator className="mb-1.5 bg-gray-200" />
                    <p className="text-gray-600 mb-1.5">{service.description}</p>

                    <ul className="space-y-1 mb-1.5">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outlineRed" 
                      className="w-full"
                      onClick={() => {
                        window.location.hash = "#/brief";
                      }}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </Card>
              );
            }
            
            // Кнопка для второй карточки (страница)
            if (service.action === "page") {
              return (
                <Card 
                  key={index} 
                  className={`overflow-hidden bg-gradient-to-br ${service.gradient} border-gray-200 hover:shadow-xl transition-all duration-700 grid grid-rows-subgrid row-span-6 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-full aspect-[16/9]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="px-8 py-4 grid grid-rows-subgrid row-span-5">
                    <h3 className="text-gray-900 mb-1 text-[18px] font-medium">{service.title}</h3>
                    <Separator className="mb-1.5 bg-gray-200" />
                    <p className="text-gray-600 mb-1.5">{service.description}</p>

                    <ul className="space-y-1 mb-1.5">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant="outlineRed" 
                      className="w-full"
                      onClick={() => {
                        window.location.hash = service.pageUrl;
                      }}
                    >
                      {service.cta}
                    </Button>
                  </div>
                </Card>
              );
            }
            
            // Кнопки для третьей карточки (диалоги)
            return (
              <Card 
                key={index} 
                className={`overflow-hidden bg-gradient-to-br ${service.gradient} border-gray-200 hover:shadow-xl transition-all duration-700 grid grid-rows-subgrid row-span-6 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full aspect-[16/9]">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="px-8 py-4 grid grid-rows-subgrid row-span-5">
                  <h3 className="text-gray-900 mb-1 text-[18px] font-medium">{service.title}</h3>
                  <Separator className="mb-1.5 bg-gray-200" />
                  <p className="text-gray-600 mb-1.5">{service.description}</p>

                  <ul className="space-y-1 mb-1.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ContactFormDialog
                    trigger={
                      <Button 
                        variant="outlineRed" 
                        className="w-full"
                      >
                        {service.cta}
                      </Button>
                    }
                    title={service.dialogTitle}
                    description={service.dialogDescription}
                    source={service.source}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}