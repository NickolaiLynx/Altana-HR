import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function HowWeWork() {
  const { ref, isInView } = useInView();
  const processes = {
    recruitment: [
      {
        step: "1",
        title: "Бриф и договор",
        description:
          "Обсуждаем требования к кандидату, условия работы, заключаем договор с фиксацией сроков",
      },
      {
        step: "2",
        title: "Поиск и интервью",
        description:
          "Активный поиск в базе 5000+ специалистов, проведение первичных интервью",
      },
      {
        step: "3",
        title: "Шорт-лист",
        description:
          "Формируем список проверенных кандидатов с детальными характеристиками",
      },
      {
        step: "4",
        title: "Собеседования",
        description:
          "Организуем интервью кандидатов с представителями вашей компании",
      },
      {
        step: "5",
        title: "Оффер и выход",
        description:
          "Сопровождаем согласование условий и выход специалиста на работу",
      },
      {
        step: "6",
        title: "Гарантия",
        description:
          "Предоставляем гарантию замены в течение испытательного срока",
      },
    ],
    audit: [
      {
        step: "1",
        title: "Заявка",
        description:
          "Получаем заявку, обсуждаем объем проверки и формат работы",
      },
      {
        step: "2",
        title: "Предоплата 50%",
        description: "Заключаем договор, вносится предоплата",
      },
      {
        step: "3",
        title: "Аудит",
        description:
          "Проверяем документы, процессы, собираем данные на месте или удаленно",
      },
      {
        step: "4",
        title: "Отчет + план",
        description:
          "Предоставляем детальный отчет с выявленными нарушениями и планом исправлений",
      },
      {
        step: "5",
        title: "Сопровождение",
        description:
          "Консультируем при внедрении рекомендаций до закрытия критичных нарушений",
      },
      {
        step: "6",
        title: "Доплата",
        description:
          "После сдачи работ производится финальный расчет",
      },
    ],
    migration: [
      {
        step: "1",
        title: "Заявка",
        description:
          "Получаем данные о иностранных работниках и требуемых услугах",
      },
      {
        step: "2",
        title: "Предоплата 50%",
        description:
          "Заключаем договор на миграционное сопровождение",
      },
      {
        step: "3",
        title: "Оформление",
        description:
          "Подготовка документов, подача уведомлений, получение патентов и разрешений",
      },
      {
        step: "4",
        title: "Календарь",
        description:
          "Создаем персональный календарь с датами уведомлений и продлений",
      },
      {
        step: "5",
        title: "Акт",
        description:
          "Подписываем акт выполненных работ по каждому специалисту",
      },
      {
        step: "6",
        title: "Доплата",
        description:
          "Производится финальный расчет за оказанные услуги",
      },
    ],
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
      
      <div ref={ref} className="container mx-auto relative" style={{ zIndex: 2 }}>
        <SectionHeader
          title="Как мы работаем"
          description="Прозрачный процесс с четкими этапами и контрольными точками"
          titleColor="light"
          animated={true}
          isInView={isInView}
        />

        <div className={`max-w-5xl mx-auto transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <Tabs defaultValue="recruitment" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 h-auto bg-transparent border border-white/30 p-1 text-white">
              <TabsTrigger 
                value="recruitment" 
                className="py-3 text-white data-[state=active]:bg-[#D32F2F] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
              >
                Подбор персонала
              </TabsTrigger>
              <TabsTrigger 
                value="audit" 
                className="py-3 text-white data-[state=active]:bg-[#D32F2F] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
              >
                Кадровый аудит
              </TabsTrigger>
              <TabsTrigger 
                value="migration" 
                className="py-3 text-white data-[state=active]:bg-[#D32F2F] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-white"
              >
                Миграционный учет
              </TabsTrigger>
            </TabsList>

            {Object.entries(processes).map(([key, steps]) => (
              <TabsContent key={key} value={key}>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {steps.map((item, index) => (
                    <div key={index}>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-full">
                        <div className="w-10 h-10 bg-[#D32F2F] text-white rounded-lg flex items-center justify-center mb-4">
                          {item.step}
                        </div>
                        <h4 className="text-gray-900 mb-2 font-bold">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}