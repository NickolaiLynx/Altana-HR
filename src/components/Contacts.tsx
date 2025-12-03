import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card } from "./ui/card";
import { useInView } from "../hooks/useInView";
import { RedButton } from "./common/RedButton";
import { SectionHeader } from "./common/SectionHeader";

export function Contacts() {
  const { ref, isInView } = useInView();
  const contactMethods = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+7 (914) 399 7401",
      link: "tel:+79143997401",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp / Telegram",
      value: "+7 (914) 399 7401",
      link: "https://wa.me/+79143997401",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "info@altana-hr.ru",
      link: "mailto:info@altana-hr.ru",
    },
    {
      icon: MapPin,
      label: "Адрес",
      value: "г. Благовещенск, ул. Примерная, д. 1",
      link: null,
    },
  ];

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-[#F2F2F2]" style={{ zIndex: 2 }}>
      <div className="container mx-auto">
        <SectionHeader
          title="Контакты"
          description="Свяжитесь с нами удобным способом"
          animated={true}
          isInView={isInView}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D32F2F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#D32F2F]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-500 text-sm mb-1">{method.label}</div>
                      {method.link ? (
                        <a href={method.link} className="text-gray-900 hover:text-[#D32F2F] transition-colors">
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-gray-900">{method.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <RedButton>
              <Send className="w-4 h-4 mr-2" />
              Написать в Telegram
            </RedButton>
            <RedButton variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Назначить встречу в Яндекс.Телемост
            </RedButton>
          </div>

          {/* Legal Info */}
          <div className={`bg-white p-8 rounded-xl border border-gray-200 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '500ms' }}>
            <h4 className="text-gray-900 mb-4">Юридическая информация</h4>
            <div className="text-gray-600 text-sm space-y-1">
              <p>ИП Алтана / ООО «Алтана Консалтинг»</p>
              <p>ОГРН: 1234567890123 | ИНН: 1234567890</p>
              <p>Юридический адрес: 690000, г. Благовещенск, ул. Примерная, д. 1, оф. 101</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}