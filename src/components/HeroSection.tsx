import { Button } from "./ui/button";
import { MapPin, Users, FileCheck, Shield, Award, BarChart, Globe } from "lucide-react";
import { QuizDialog } from "./QuizDialog";
import { ContactFormDialog } from "./ContactFormDialog";
import { Card } from "./ui/card";
import { useInView } from "../hooks/useInView";
import MainPhoto from "../imports/MainPhoto";

export function HeroSection() {
  const { ref, isInView } = useInView();
  const stats = [
    {
      icon: Award,
      value: "25+ лет",
      description: "опыта команды",
    },
    {
      icon: BarChart,
      value: "40+ аудитов",
      description: "проведено",
    },
    {
      icon: Globe,
      value: "РФ и ЕАЭС",
      description: "география работы",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Gradient background */}
      <div className="absolute inset-0 hero-gradient z-0" />

      <div className="container mx-auto relative flex items-center min-h-screen z-[2]">
        <div className="w-full grid lg:grid-cols-[2fr_1fr] gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-10 py-16 lg:py-0">
            <div className="space-y-5">
              <h1 className="hero-h1 text-white leading-tight font-bold animate-fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Закрываем кадры <br />
                для горной добычи <br />
                и проводим аудит
              </h1>
              <div className="grid md:grid-cols-2 gap-3 max-w-2xl animate-fade-in-delay-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed tracking-wide text-base">
                    Дальний Восток и вся РФ.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Users className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed tracking-wide text-base">
                    База 5000+ специалистов.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <FileCheck className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed tracking-wide text-base">
                    Сроки и гарантии в договоре.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 leading-relaxed tracking-wide text-base">
                    Снижаем риски проверок.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <QuizDialog />
              
              <ContactFormDialog 
                trigger={
                  <Button 
                    className="border border-white bg-transparent text-white hover:bg-white hover:text-[#D32F2F] rounded-lg px-6 h-10"
                  >
                    Оставить заявку
                  </Button>
                }
                source="Hero Section - Оставить заявку"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="hidden lg:flex items-center justify-center animate-fade-in-delay-2">
            <MainPhoto />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div ref={ref} className="container mx-auto relative pb-20 z-[3]">
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className={`p-6 flex flex-row items-center gap-4 hover:shadow-xl transition-all duration-700 ${ 
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#D32F2F]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#D32F2F]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-900 text-[18px] font-medium">
                    {stat.value}
                  </h3>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
