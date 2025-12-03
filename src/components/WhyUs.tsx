import { Target, Database, Award, BarChart } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function WhyUs() {
  const { ref, isInView } = useInView();
  const reasons = [
    {
      icon: Target,
      title: "Отраслевой фокус - горная добыча",
      description: "Специализируемся на золотодобыче и горнодобыче Дальнего Востока. Учитываем специфику вахтовой и сезонной работы в районах Крайнего Севера и приравненных местностях.",
    },
    {
      icon: Database,
      title: "База 5000+ кандидатов",
      description: "Специалисты РФ и ЕАЭС. Авторская система поиска и тестирования кандидатов.",
    },
    {
      icon: Award,
      title: "Совокупный опыт команды",
      description: "Команда с опытом работы более 25 лет. Закрыто более 5 000 вакансий. Более 1000 иностранных граждан оформлены для работы в РФ. Проведено более 40 кадровых аудитов",
    },
    {
      icon: BarChart,
      title: "Прозрачные процессы",
      description: "Четкие этапы, фиксированные сроки, детальная отчетность на каждом шаге работы.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
      
      <div ref={ref} className="container mx-auto relative" style={{ zIndex: 2 }}>
        <SectionHeader
          title="Почему «АЛТАНА»"
          description="Мы не просто кадровое агентство — мы эксперты в HR для горнодобывающей отрасли"
          titleColor="light"
          animated={true}
          isInView={isInView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className={`text-center p-6 bg-white rounded-xl flex flex-col hover:shadow-xl transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-[#D32F2F]" />
                </div>
                <h4 className="text-gray-900 mb-3 min-h-[3rem] font-bold">{reason.title}</h4>
                <p className="text-gray-600 text-sm text-[12px]">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}