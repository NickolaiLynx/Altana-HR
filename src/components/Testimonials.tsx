import { Card } from "./ui/card";
import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./common/SectionHeader";
import imgAvatar1 from "figma:asset/f4acc8c37b74693962185deedfd2e1f2f1d15001.png";
import imgAvatar2 from "figma:asset/ffb334aaf8a0014068f9783d8e898fa4ca100420.png";
import imgAvatar3 from "figma:asset/8ecd77df5a3bf29cd24c6c331f025615ec69e25c.png";
import imgAvatar4 from "figma:asset/886fff9ee068b36fde0894b327efdfbe3e25c988.png";
import imgAvatar5 from "figma:asset/1e41a915b0a03f512de5665f44247b61a9860726.png";
import imgAvatar6 from "figma:asset/d8bc45b2c1d3fc5bd8b3c204d57111b41fe58515.png";

export function Testimonials() {
  const { ref, isInView } = useInView();
  
  const testimonials = [
    {
      text: "Алтана помогла нам закрыть критичные позиции в разгар сезона. Профессиональный подход, понимание специфики отрасли и точность в сроках.",
      name: "Сергей Волков",
      position: "Директор по персоналу, ООО «СеверГеоЛогистика»",
      avatar: imgAvatar1,
    },
    {
      text: "Кадровый аудит помог избежать серьезных проблем перед проверкой. Все рекомендации были четкими и применимыми. Рекомендую!",
      name: "Евгений Морозов",
      position: "HR-директор, АО «ВостокЗолото»",
      avatar: imgAvatar2,
    },
    {
      text: "Работаем с Алтаной уже второй год. Подобрали нам целую смену механиков и водителей карьерной техники. Все специалисты прошли испытательный срок, работают до сих пор.",
      name: "Михаил Соколов",
      position: "Главный инженер, ЗАО «Амурзолоторазведка»",
      avatar: imgAvatar3,
    },
    {
      text: "Быстро и качественно провели миграционный учет для наших иностранных специалистов. Все документы оформлены правильно, никаких претензий от контролирующих органов.",
      name: "Анна Петрова",
      position: "Начальник отдела кадров, ООО «Колыма Майнинг»",
      avatar: imgAvatar4,
    },
    {
      text: "Обратились за комплексным решением по кадровому аудиту и подбору персонала. Результат превзошел ожидания - устранили все риски и закрыли 8 вакансий за месяц.",
      name: "Дмитрий Иванов",
      position: "Генеральный директор, ООО «ДальРесурс»",
      avatar: imgAvatar5,
    },
    {
      text: "Профессиональная команда, которая действительно понимает специфику горнодобывающей отрасли. Помогли организовать вахтовый метод работы с нуля, все легально и прозрачно.",
      name: "Ольга Кузнецова",
      position: "HR-менеджер, АО «Магаданолото»",
      avatar: imgAvatar6,
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-white" style={{ zIndex: 2 }}>
      <div className="container mx-auto">
        <SectionHeader
          title="Отзывы клиентов"
          description="Что говорят о нас наши клиенты"
          animated={true}
          isInView={isInView}
        />

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="px-4">
                    <Card className="p-6 md:p-8 bg-white border-gray-200 h-full">
                      {/* Мобильная вертикальная версия */}
                      <div className="flex md:hidden flex-col items-center text-center gap-4">
                        <Avatar className="w-16 h-16 border-2 border-gray-100">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <p className="text-gray-700">{testimonial.text}</p>
                        
                        <div className="border-t border-gray-100 pt-4 w-full">
                          <div className="text-gray-900 font-bold">{testimonial.name}</div>
                          <div className="text-gray-500 text-sm">{testimonial.position}</div>
                        </div>
                      </div>

                      {/* Десктопная горизонтальная версия */}
                      <div className="hidden md:grid grid-cols-[auto_1fr_auto] gap-6 items-start">
                        <Avatar className="w-16 h-16 border-2 border-gray-100">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex flex-col">
                          <p className="text-gray-700 mb-6">{testimonial.text}</p>
                          <div className="border-t border-gray-100 pt-4">
                            <div className="text-gray-900 font-bold">{testimonial.name}</div>
                            <div className="text-gray-500 text-sm">{testimonial.position}</div>
                          </div>
                        </div>
                        
                        <Quote className="w-8 h-8 text-[#D32F2F]/20 rotate-180 flex-shrink-0" />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}