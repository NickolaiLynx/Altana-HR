import { Shield, CheckCircle2, Clock } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function Guarantees() {
  const { ref, isInView } = useInView();
  const guarantees = [
    {
      icon: Shield,
      title: "Гарантия замены при подборе",
      description: "Если сотрудник не прошел испытательный срок по согласованным причинам, мы бесплатно подберем замену в течение 30 дней.",
    },
    {
      icon: CheckCircle2,
      title: "Сопровождение после аудита",
      description: "После проведения кадрового аудита консультируем и сопровождаем внедрение рекомендаций до полного закрытия критичных нарушений.",
    },
    {
      icon: Clock,
      title: "Контроль сроков миграционного учета",
      description: "Персональный менеджер контролирует все сроки уведомлений и регистраций. Несем ответственность за своевременность подачи документов.",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-[#F2F2F2]" style={{ zIndex: 2 }}>
      <div className="container mx-auto">
        <SectionHeader
          title="Гарантии и ответственность"
          description="Мы несем ответственность за результат и фиксируем гарантии в договоре"
          animated={true}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-[#D32F2F]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#D32F2F]" />
                </div>
                <h4 className="text-gray-900 mb-3 font-bold">{guarantee.title}</h4>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}