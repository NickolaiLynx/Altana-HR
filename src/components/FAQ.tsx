import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";
import faqImage from "figma:asset/24c34c55fc42d622ac490eb0f52dad6a54d9eca8.png";

export function FAQ() {
  const { ref, isInView } = useInView();
  const faqs = [
    {
      question: "Какие сроки закрытия типовых позиций?",
      answer: "Сроки зависят от специфики позиции. Для массовых позиций (водители, рабочие) — 7-14 дней. Для редких специалистов (маркшейдеры, геологи) — 21-45 дней. Точный прогноз дадим через 48 часов после получения брифа.",
    },
    {
      question: "Что именно входит в кадровый аудит?",
      answer: "Проверяем: трудовые договоры, должностные инструкции, приказы, штатное расписание, ПВТР, положения об оплате труда, охране труда, ЛНА, документооборот при приеме/увольнении, учет рабочего времени, миграционный учет (если применимо).",
    },
    {
      question: "Как работает гарантия замены сотрудика?",
      answer: "Если сотрудник не прошел испытательный срок по согласованным в договоре причинам (недостаточная квалификация, нарушение дисциплины), мы подбираем замену бесплатно в течение 30 дней. Гарантия не распространяется на форс-мажорные обстоятельства.",
    },
    {
      question: "Чем отличается работа с гражданами ЕАЭС от других стран?",
      answer: "Граждане ЕАЭС (Беларусь, Казахстан, Армения, Киргизия) имеют упрощенный режим: не требуется разрешение на работу, но нужно уведомление МВД. Для граждан других стран — патент или разрешение, более сложная процедура.",
    },
    {
      question: "Какие документы нужны на старте работы?",
      answer: "Для подбора: бриф с описанием вакансии, условия работы. Для аудита: доступ к кадровым документам (можно удаленно). Для миграционного учета: данные иностранных работников, копии паспортов, миграционных карт.",
    },
    {
      question: "Работаете ли вы по всей России или только на Дальнем Востоке?",
      answer: "Специализируемся на Дальнем Востоке, но работаем по всей РФ. Кадровый аудит и миграционное сопровождение проводим удаленно. Подбор персонала — по регионам присутствия наших партнеров.",
    },
    {
      question: "Возможно ли заключение NDA?",
      answer: "Да, мы заключаем соглашения о неразглашении (NDA) со всеми клиентами, которым это необходимо. Конфиденциальность данных — наш приоритет.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white" style={{ zIndex: 2 }}>
      <div className="container mx-auto">
        <SectionHeader
          title="Часто задаваемые вопросы"
          description="Ответы на популярные вопросы о наших услугах"
          animated={true}
          isInView={isInView}
        />

        {/* Layout: 33% image + 67% FAQ */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-start">
          {/* Fixed image */}
          <div className="sticky top-24 hidden lg:block">
            <div className="w-full aspect-square flex items-center justify-center">
              <img 
                src={faqImage} 
                alt="FAQ illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* FAQ column */}
          <div className={`transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 px-6 rounded-xl border border-gray-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}