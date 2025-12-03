import { Building2, Users } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function TargetAudience() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative pt-32 pb-16 md:pb-24 overflow-hidden bg-[#F2F2F2]">
      
      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <SectionHeader
          title="Для кого и какие задачи решаем"
          description="Помогаем компаниям горнодобывающей отрасли закрывать кадровые вопросы быстро и без рисков"
          animated={true}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Owners/Directors */}
          <div className={`bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}>
            <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h3 className="text-gray-900 mb-4 text-[18px] font-medium">Для собственников и директоров</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Соблюдение сроков запуска участков без кадровых задержек</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Снижение простоя производства из-за нехватки кадров</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Минимизация рисков штрафов и проверок ГИТ</span>
              </li>
            </ul>
          </div>

          {/* For HR and Production */}
          <div className={`bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}>
            <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h3 className="text-gray-900 mb-4 text-[18px] font-medium">Для HR и производства</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Оперативно закрываем вакансии, предлагая подходящие кандидатуры в кратчайшие сроки</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Снижение текучести кадров</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">Порядок в документах и легализация иностранцев без штрафов</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}