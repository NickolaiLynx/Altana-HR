import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";
import { QuizDialog } from "./QuizDialog";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function Pricing() {
  const { ref, isInView } = useInView();
  const pricingOptions = [
    {
      service: "Подбор персонала",
      description: "Фиксированная стоимость 40 000 - 80 000 ₽ за позицию",
      features: [
        "Пилотная вакансия — специальные условия",
        "Гарантия замены в течение испытательного срока",
        "Прогноз сроков закрытия за 48 часов",
        "Доступ к базе 5000+ кандидатов",
      ],
      cta: "Заказать подбор",
      branch: "recruitment" as const,
    },
    {
      service: "Кадровый аудит",
      description: "От 50 000 ₽ за экспресс-аудит, полный аудит — от 150 000 ₽",
      features: [
        "Зависит от численности штата и количества филиалов",
        "Бесплатный экспресс-чек-лист на 15 пунктов",
        "Детальный отчет с планом исправлений",
        "Консультации при внедрении рекомендаций",
      ],
      cta: "Заказать аудит",
      branch: "audit" as const,
    },
    {
      service: "Миграционный учет",
      description: "Пакеты «Старт» / «Стандарт» / «Под ключ»",
      features: [
        "Цены определяются после диагностики",
        "Персональный календарь миграционных событий",
        "Полное сопровождение всех процедур",
        "Контроль сроков и уведомлений",
      ],
      cta: "Заказать миг.учет",
      branch: "migration" as const,
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white" style={{ zIndex: 2 }}>
        <div className="container mx-auto">
        <SectionHeader
          title="Стоимость и форматы"
          description="Прозрачная система ценообразования. Персональный расчет за 24 часа"
          animated={true}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-1 mb-12 items-start">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`px-8 py-8 bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:shadow-lg transition-all duration-700 grid grid-rows-subgrid row-span-4 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-gray-900 mb-1 text-[18px] font-medium">{option.service}</h3>
              <p className="text-gray-600 text-sm mb-1.5">{option.description}</p>

              <ul className="space-y-1 mb-1.5">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <QuizDialog 
                initialStep={2}
                preselectedBranch={option.branch}
                trigger={
                  <Button 
                    className="w-full bg-[#D32F2F] hover:bg-[#B71C1C]"
                  >
                    {option.cta}
                  </Button>
                }
              />
            </Card>
          ))}
        </div>
        </div>
      </section>
  );
}
