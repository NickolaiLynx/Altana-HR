import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FileText, Download, Mail } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";

export function Resources() {
  const { ref, isInView } = useInView();
  const downloads = [
    {
      icon: FileText,
      title: "Чек-лист по кадровому аудиту",
      description: "15 ключевых пунктов для самостоятельной проверки документов",
      size: "PDF, 2.4 МБ",
    },
    {
      icon: FileText,
      title: "Памятка по работе с ЕАЭС",
      description: "Особенности найма граждан стран Евразийского союза",
      size: "PDF, 1.8 МБ",
    },
    {
      icon: FileText,
      title: "Памятка по штрафам",
      description: "Узнайте реальную стоимость кадровых ошибок",
      size: "PDF, 0.5 МБ",
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0 }} />
      
      <div className="container mx-auto relative" style={{ zIndex: 2 }}>
        <SectionHeader
          title="Материалы и полезное"
          description="Бесплатные инструменты и материалы для HR-специалистов"
          titleColor="light"
          animated={true}
          isInView={isInView}
        />

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-6 md:gap-y-1 mb-24 max-w-5xl mx-auto items-start">
          {downloads.map((download, index) => {
            const Icon = download.icon;
            return (
              <div 
                key={index} 
                className={`bg-white px-6 py-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-700 grid grid-rows-subgrid row-span-5 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center mb-1.5">
                  <Icon className="w-6 h-6 text-[#D32F2F]" />
                </div>
                <h4 className="text-gray-900 mb-1">{download.title}</h4>
                <p className="text-gray-600 text-sm mb-1.5">{download.description}</p>
                <div className="text-gray-400 text-xs mb-1.5">{download.size}</div>
                <Button variant="outlineRed" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать
                </Button>
              </div>
            );
          })}
        </div>

        {/* Newsletter */}
        <div className={`max-w-3xl mx-auto relative bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] text-white p-8 md:p-12 rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative z-10">
          {/* Мобильная вертикальная версия */}
          <div className="flex md:hidden flex-col items-center text-center mb-6">
            <Mail className="w-8 h-8 mb-4" />
            <h3 className="mb-3 text-[18px] font-medium">Подписка на обновления</h3>
            <p className="opacity-90">
              Получайте актуальную информацию по кадровому и миграционному законодательству. Только важное, без «воды».
            </p>
          </div>

          {/* Десктопная горизонтальная версия */}
          <div className="hidden md:flex items-start gap-4 mb-6">
            <Mail className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-3 text-[18px] font-medium">Подписка на обновления</h3>
              <p className="opacity-90">
                Получайте актуальную информацию по кадровому и миграционному законодательству. Только важное, без «воды».
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Ваш e-mail"
              className="flex-1"
            />
            <Button className="bg-white text-[#D32F2F] hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}