import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import AltanaLogoWhite from "../imports/AltanaLogoWhite";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { ApplicantDialog } from "./ApplicantDialog";
import { SectionHeader } from "./common/SectionHeader";
import { toast } from "sonner@2.0.3";

export function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchorId: string) => {
    e.preventDefault();
    const currentPath = window.location.hash.slice(1) || "/";
    
    if (currentPath === "/") {
      // Если на главной странице - скроллим сразу
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Если на другой странице - сохраняем якорь и переходим на главную
      sessionStorage.setItem("scrollToAnchor", anchorId);
      window.location.hash = "/";
    }
  };
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });
  const [isApplicantDialogOpen, setIsApplicantDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast.error("Необходимо согласие на обработку персональных данных");
      return;
    }
    
    // In production: send data to backend
    console.log("Form submitted:", formData);
    
    toast.success("Заявка отправлена!", {
      description: "Мы свяжемся с вами в течение 24 часов."
    });
  };

  return (
    <footer className="relative text-white">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#101828]" style={{ zIndex: 0 }} />
      
      {/* Contact Form Section */}
      <div className="container mx-auto py-16 md:py-24 relative" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Давайте решим кадровый вопрос в срок"
            description="Оставьте заявку — за 24 часа пришлем план работ и персональный расчет стоимости"
            titleColor="light"
          />

          <div className="bg-white rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="footer-name" className="text-gray-700">Ваше имя *</Label>
                  <Input
                    id="footer-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footer-company" className="text-gray-700">Компания *</Label>
                  <Input
                    id="footer-company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ООО «Компания»"
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footer-phone" className="text-gray-700">Телефон *</Label>
                  <Input
                    id="footer-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="footer-email" className="text-gray-700">E-mail *</Label>
                  <Input
                    id="footer-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@company.ru"
                    className="border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="footer-message" className="text-gray-700">Комментарий</Label>
                <Textarea
                  id="footer-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Опишите вашу задачу или вопрос"
                  rows={4}
                  className="border-gray-300"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white py-6"
              >
                Отправить заявку
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#/privacy" className="text-[#D32F2F] hover:underline">
                  политикой обработки персональных данных
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto py-12 md:py-16 border-t border-gray-600 relative" style={{ zIndex: 2 }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div className="text-center md:text-left">
            <div className="mb-4 w-32 h-10 mx-auto md:mx-0">
              <AltanaLogoWhite />
            </div>
            <p className="text-gray-400 text-sm">
              HR-решения для горнодобывающей отрасли. Подбор, аудит, миграционный учет.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, "services")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Подбор персонала
                </a>
              </li>
              <li>
                <a 
                  href="#/hr-audit"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Кадровый аудит
                </a>
              </li>
              <li>
                <a 
                  href="#/migration"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Миграционный учет
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#/cases" className="text-gray-400 hover:text-white transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#/blog" className="text-gray-400 hover:text-white transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a 
                  href="#contacts" 
                  onClick={(e) => handleAnchorClick(e, "contacts")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="text-center md:text-left">
            <h4 className="mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+79991234567" className="hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@altana-hr.ru" className="hover:text-white transition-colors">
                  info@altana-hr.ru
                </a>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>г. Благовещенск</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} АЛТАНА. Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <button
                onClick={() => setIsApplicantDialogOpen(true)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Соискателям
              </button>
            </div>
          </div>
        </div>
      </div>

      <ApplicantDialog
        open={isApplicantDialogOpen}
        onOpenChange={setIsApplicantDialogOpen}
      />
    </footer>
  );
}