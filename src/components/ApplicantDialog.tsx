import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Upload } from "lucide-react";
import { useCloseOnRouteChange } from "../hooks/useCloseOnRouteChange";
import { toast } from "sonner@2.0.3";

interface ApplicantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicantDialog({ open, onOpenChange }: ApplicantDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    comment: "",
  });
  const [file, setFile] = useState<File | null>(null);

  // Закрываем диалог при изменении маршрута
  useCloseOnRouteChange(() => onOpenChange(false));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In production: send data to backend
    console.log("Applicant form submitted:", { ...formData, file: file?.name });
    
    toast.success("Отклик отправлен!", {
      description: "Мы свяжемся с вами в ближайшее время."
    });
    
    onOpenChange(false);
    
    // Сброс формы
    setFormData({
      name: "",
      phone: "",
      email: "",
      specialty: "",
      comment: "",
    });
    setFile(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Отклик на вакансию
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="applicant-name" className="text-gray-700">
                Ваше имя *
              </Label>
              <Input
                id="applicant-name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Иван Иванов"
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="applicant-phone" className="text-gray-700">
                Телефон *
              </Label>
              <Input
                id="applicant-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+7 (999) 123-45-67"
                className="border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicant-email" className="text-gray-700">
              E-mail *
            </Label>
            <Input
              id="applicant-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="email@example.ru"
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicant-specialty" className="text-gray-700">
              Специальность
            </Label>
            <Input
              id="applicant-specialty"
              value={formData.specialty}
              onChange={(e) =>
                setFormData({ ...formData, specialty: e.target.value })
              }
              placeholder="Например: геолог, машинист экскаватора"
              className="border-gray-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="applicant-comment" className="text-gray-700">
              Комментарий
            </Label>
            <Textarea
              id="applicant-comment"
              value={formData.comment}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 500) {
                  setFormData({ ...formData, comment: value });
                }
              }}
              placeholder="Опишите ваш опыт работы"
              rows={3}
              className="border-gray-300"
              maxLength={500}
            />
            <div className="text-sm text-gray-500 text-right">
              {formData.comment.length}/500
            </div>
          </div>

          <div>
            <Input
              id="applicant-file"
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
            <Button
              type="button"
              variant="outlineRed"
              className="w-full"
              onClick={() => document.getElementById('applicant-file')?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              {file ? file.name : "Прикрепить резюме (PDF, DOC, DOCX)"}
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white py-6 font-semibold"
          >
            Отправить отклик
          </Button>

          <p className="text-xs text-gray-500 text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a 
              href="#/privacy" 
              className="text-[#D32F2F] hover:underline"
              onClick={() => onOpenChange(false)}
            >
              политикой обработки персональных данных
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}