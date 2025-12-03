import { Target, Users, Award, TrendingUp, CheckCircle2, Shield, Clock, Globe } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { PageHero } from "./common/PageHero";
import { SectionHeader } from "./common/SectionHeader";
import { useInView } from "../hooks/useInView";
import { usePageMeta } from "../hooks/usePageMeta";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dir1Image from "figma:asset/fe0d53ef2df1aecd3231f659c30a203bcd95db65.png";
import team1Image from "figma:asset/39ef2491a7e061ee8a838d9a623d925275094347.png";
import team2Image from "figma:asset/3cee41ac29b373a7bd10cf7f32d4b75c53a144e3.png";
import team3Image from "figma:asset/e02265a69b62bf05b05edb2a527c703f5214a3d7.png";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function AboutPage() {
  // SEO meta tags for about page
  usePageMeta({
    title: "О компании — Алтана | Кадровое агентство для горнодобычи",
    description: "Алтана — кадровое агентство с 15+ летним опытом работы в горнодобывающей отрасли Дальнего Востока. База из 5000+ специалистов, 89% успешного прохождения испытательного срока",
    keywords: "о компании Алтана, кадровое агентство опыт, команда рекрутеров, подбор персонала Дальний Восток",
    ogImage: ogImage,
    type: "website",
  });
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: valuesRef, isInView: valuesInView } = useInView();
  const { ref: teamRef, isInView: teamInView } = useInView();
  const { ref: achievementsRef, isInView: achievementsInView } = useInView();
  const { ref: directorRef, isInView: directorInView } = useInView();

  const values = [
    {
      icon: Target,
      title: "Точность подбора",
      description: "Мы не просто закрываем вакансию — мы находим того, кто останется и принесет результат. 89% наших специалистов проходят испытательный срок."
    },
    {
      icon: Clock,
      title: "Скорость без потери качества",
      description: "Прогноз сроков закрытия за 48 часов, первые кандидаты — через 3-5 дней. Понимаем, то простой — это убытки."
    },
    {
      icon: Shield,
      title: "Юридическая защита",
      description: "Все процессы построены с учетом требований ТК РФ и миграционного законодательства. Защищаем от штрафов и рисков."
    },
    {
      icon: Globe,
      title: "Знание отрасли",
      description: "Специализируемся на горнодобыче: знаем специфику вахт, требования к допускам, особенности работы в отдаленных регионах."
    }
  ];

  const team = [
    {
      name: "Оксана Мирсанова",
      role: "Основатель, CEO",
      experience: "25 лет в подборе для горнодобывающей отрасли",
      description: "Начала карьеру в внутреннем рекрутменте крупной золотодобывающей компании. Создала «Алтана» для решения кадрового голода в отрасли через системный подход.",
      image: team1Image
    },
    {
      name: "Команда рекрутеров",
      role: "6 специалистов",
      experience: "Средний стаж в отрасли — 7 лет",
      description: "Каждый специализируется на своем направлении: рабочие специальности, ИТР, топ-менеджмент. Говорят на языке заказчика.",
      image: team2Image
    },
    {
      name: "Юридический отдел",
      role: "2 эксперта",
      experience: "Кадровое право и миграционный учет",
      description: "Проводят аудиты, консультируют по спорным ситуациям, ведут сложные миграционные кейсы.",
      image: team3Image
    }
  ];

  const achievements = [
    {
      value: "850+",
      label: "Закрытых вакансий",
      period: "с 2018 года"
    },
    {
      value: "89%",
      label: "Проходят испытательный срок",
      period: "средний показатель"
    },
    {
      value: "5000+",
      label: "Специалистов в базе",
      period: "РФ и ЕАЭС"
    },
    {
      value: "47",
      label: "Компаний-клиентов",
      period: "постоянное сотрудничество"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Основание агентства",
      description: "Запустили первые проекты по подбору для золотодобывающих компаний Дальнего Востока"
    },
    {
      year: "2020",
      title: "Расширение услуг",
      description: "Добавили кадровый аудит и миграционное сопровождение — клиенты просили комплексные решения"
    },
    {
      year: "2022",
      title: "Региональная экспертиза",
      description: "Стали работать по всей РФ и ЕАЭС. Открыли партнерские отношения с профильными вузами"
    },
    {
      year: "2024",
      title: "Цифровизация процессов",
      description: "Внедрили CRM-систему и автоматизацию отчетности. Сократили время на административне задачи на 40%"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden">
        <PageHero
          breadcrumbs={[
            { label: "Главная", href: "#/" },
            { label: "О нас" }
          ]}
          title="О компании Алтана"
          description={
            <div className={`max-w-3xl transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="text-white/90 text-lg mb-4">
                HR-агентство полного цикла для горнодобывающей отрасли. С 2018 года помогаем компаниям решать кадровые задачи: от массового подбора рабочих специальностей до поиска топ-менеджеров.
              </p>
              <p className="text-white/90 text-lg">
                Мы не просто рекрутеры — мы партнеры, которые понимают специфику отрасли и говорят на одном языке с заказчиком.
              </p>
            </div>
          }
          className="py-16 md:py-24"
        />
      </section>

      {/* Director Section */}
      <section ref={directorRef} className="py-16 md:py-24 bg-[#F2F2F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4 text-[24px] font-semibold">Давайте познакомимся!</h2>
            <p className="text-gray-700 text-[18px] font-medium">
              Я - Мирсанова Оксана Олеговна, генеральный директор агентства Алтана.
            </p>
          </div>

          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 items-start">
            {/* Text content */}
            <div className={`space-y-6 text-gray-700 transition-all duration-700 ${
              directorInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p>
                Более 30 лет осуществляла управление персоналом в крупных золотодобывающих компаниях таких, как «Лензолото», «Петропавловск», «ХАС ГРУПП», занимая должности от заместителя начальника отдела кадров до директора по персоналу.
              </p>
              
              <p>
                Моя специализация охватывала широкий круг задач, начиная от формирования кадровой политики и заканчивая реализацией мероприятий по повышению эффективности и мотивации сотрудников. За весь период моей трудовой деятельности, непосредственно под моим руководством, были закрыты более 70 000 вакансий, укомплектованность персоналом составляла более 95 процентов.
              </p>
              
              <p>
                Постоянно проводился внутренний кадровый аудит, благодаря которому совершенствовались и разрабатывались методы управления персоналом, системы мотивации и оплаты труда, реализовывались различные проекты по автоматизации HR процессов. Грамотное ведение кадрового документооборота и постоянный аудит документов способствовали минимизации рисков судебных разбирательств и успешного прохождения проверок инспекции по труду.
              </p>
              
              <p>
                В совершенстве владею современными инструментами оценки, обучения, мотивации персонала, HR аналитики, ведения кадрового делопроизводства, проведения кадрового аудита, оценки рисков.
              </p>
              
              <p>
                Владею нюансами в знаниях трудового законодательства и эффективно применяю нормы трудового права в вопросах защиты персональных данных, приёма на работу, заключения трудовых договоров и договоров гражданско-правового характера, организации рабочего времени, режима труда и отдыха, предоставления всех видов отпусков, организации оплаты труда, охраны труда и техники безопасности на производстве, дисциплины труда и ответственности сторон, особенностй отдельных категорий работников, ведения воинского учёта и работы с иностранными сотрудниками, разработки и подготовки внутренних нормативных актов и локальных документов и т.д.
              </p>
              
              <p>
                Открывая свое кадровое агентство, моей целью является стать надежным партнером для компаний, гарантирующим быстрый и оптимальный подбор профессионалов для успешного развития Вашего бизнеса.
              </p>
            </div>

            {/* Fixed photo */}
            <div className="sticky top-24 hidden lg:block">
              <div className="w-full aspect-[3/4]">
                <ImageWithFallback 
                  src={dir1Image}
                  alt="Директор Оксана Мирсанова" 
                  className="w-full h-full object-cover rounded-[14px] border-[6px] border-white" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-[#D32F2F] hover:bg-[#D32F2F]">Наша миссия</Badge>
            <h2 className="text-gray-900 mb-6 text-[24px] font-semibold">
              Закрывать кадровый голод в горнодобыче через системный подход и глубокое понимание отрасли
            </h2>
            <p className="text-gray-600 text-lg">
              Мы знаем, что каждый день простоя из-за нехватки людей — это прямые убытки. Поэтому строим процессы так, чтобы вакансии закрывались быстро, а люди оставались надолго.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <SectionHeader
            title="Наши ценности"
            description="Принципы, на которых строится наша работа"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className={`p-8 border-gray-200 hover:shadow-lg transition-all duration-700 ${
                    valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#D32F2F]" />
                  </div>
                  <h3 className="text-gray-900 mb-3 text-[18px] font-medium">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader
            title="История развития"
            description="От первых проектов до комплексного HR-партнера"
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#D32F2F] text-white rounded-full flex items-center justify-center">
                      <span className="font-medium">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-gray-900 mb-2 text-[18px] font-medium">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                    {index < milestones.length - 1 && (
                      <Separator className="mt-8 bg-gray-200" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <SectionHeader
            title="Команда"
            description="Профессионалы с глубоким пониманием отрасли"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index}
                className={`p-8 border-gray-200 hover:shadow-lg transition-all duration-700 ${
                  teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-gray-900 mb-2 text-[18px] font-medium">{member.name}</h3>
                <p className="text-[#D32F2F] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                <Separator className="mb-4 bg-gray-200" />
                <p className="text-gray-600 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader
            title="Цифры и достижения"
            description="Результаты нашей работы в цифрах"
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${
                  achievementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-[#D32F2F] mb-2 text-[40px] md:text-[48px] font-semibold">
                  {achievement.value}
                </div>
                <div className="text-gray-900 mb-1 font-medium">{achievement.label}</div>
                <div className="text-gray-600 text-sm">{achievement.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Почему с нами работают"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Узкая специализация: горнодобывающая отрасль — это всё, чем мы занимаемся",
                "Прозрачность: прогноз сроков за 48 часов, еженедельные отчеты по воронке",
                "Гарантии: замена в течение испытательного срока без доплат",
                "Полный цикл: от массового подбора до юридического соповождения",
                "География: работаем по всей России и странам ЕАЭС",
                "Скорость: первые резюме через 3-5 дней после согласования профиля"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#D32F2F] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}