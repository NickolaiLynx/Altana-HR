import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { toast } from "sonner@2.0.3";
import { useState, ReactNode, useEffect, useRef } from "react";
import { RedButton } from "./common/RedButton";
import { useCloseOnRouteChange } from "../hooks/useCloseOnRouteChange";

interface ContactFormDialogProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  source?: string;
}

export function ContactFormDialog({ 
  trigger, 
  title = "Оставить заявку",
  description = "Заполните форму, и мы свяжемся с вами в ближайшее время",
  source = "Общая форма"
}: ContactFormDialogProps) {
  const [open, setOpen] = useState(false);
  const scrollPositionRef = useRef(0);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  // Закрываем диалог при изменении маршрута
  useCloseOnRouteChange(() => setOpen(false));

  // Сохраняем позицию скролла при открытии/закрытии диалога
  useEffect(() => {
    if (open) {
      // Сохраняем текущую позицию при открытии
      scrollPositionRef.current = window.scrollY;
    } else if (scrollPositionRef.current > 0) {
      // Восстанавливаем позицию при закрытии
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      source: source // Источник вызова формы
    });
    
    toast.success("Заявка отправлена!", {
      description: "Мы свяжемся с вами в ближайшее время."
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={false}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Ваше имя *</Label>
            <Input
              id="contact-name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Иван Иванов"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-company">Компания *</Label>
            <Input
              id="contact-company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="ООО «Компания»"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">Телефон *</Label>
            <Input
              id="contact-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+7 (999) 123-45-67"
              pattern="[+]?[0-9\s\-\(\)]+"
              title="Введите корректный номер телефона"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">E-mail *</Label>
            <Input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@company.ru"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-service">Интересующая услуга</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger id="contact-service">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recruitment">Подбор персонала</SelectItem>
                <SelectItem value="audit">Кадровый аудит</SelectItem>
                <SelectItem value="migration">Миграционный учет</SelectItem>
                <SelectItem value="complex">Комплексное решение</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-message">Сообщение</Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Введите ваше сообщение"
            />
          </div>

          <RedButton type="submit" className="w-full">
            Отправить заявку
          </RedButton>

          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a 
              href="#/privacy" 
              className="text-[#D32F2F] hover:underline"
              onClick={() => setOpen(false)}
            >
              политикой обработки персональных данных
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}