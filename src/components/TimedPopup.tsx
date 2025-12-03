import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Clock, X } from "lucide-react";
import { useCloseOnRouteChange } from "../hooks/useCloseOnRouteChange";

// Константы для настройки
const POPUP_DELAY_MS = 40_000; // 40 секунд
const HERO_SCROLL_THRESHOLD = 0.8; // 80% от высоты hero-секции

interface TimedPopupProps {
  onOpenQuiz: () => void;
  quizIsOpen?: boolean;
}

export function TimedPopup({ onOpenQuiz, quizIsOpen }: TimedPopupProps) {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    // Проверяем, показывали ли уже попап в этой сессии
    const wasShown = sessionStorage.getItem('timedPopupShown');
    // Проверяем, был ли когда-либо открыт QuizDialog
    const quizWasOpened = sessionStorage.getItem('quizWasOpened');
    
    if (wasShown || quizWasOpened) {
      setHasShown(true);
      return;
    }

    // Отслеживаем скролл для определения, находится ли пользователь на hero
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsOnHero(scrollPosition < heroHeight * HERO_SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);

    // Функция проверки условий для показа попапа
    const checkAndShowPopup = () => {
      // Проверяем все условия:
      // 1. QuizDialog не открыт в данный момент
      // 2. Пользователь не на hero-секции
      // 3. Нет других открытых диалогов
      // 4. Попап еще не показывали
      const otherDialogOpen = document.querySelector('[role="dialog"][data-state="open"]');
      const quizWasOpened = sessionStorage.getItem('quizWasOpened');
      
      if (!quizIsOpen && 
          !isOnHero && 
          !otherDialogOpen && 
          !hasShown && 
          !quizWasOpened) {
        setOpen(true);
        sessionStorage.setItem('timedPopupShown', 'true');
        setHasShown(true);
      }
    };

    // Таймер на показ попапа
    const timer = setTimeout(checkAndShowPopup, POPUP_DELAY_MS);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [quizIsOpen, isOnHero, hasShown]);

  // Закрываем диалог при изменении маршрута
  useCloseOnRouteChange(() => setOpen(false));

  const handleGetCalculation = () => {
    setOpen(false);
    onOpenQuiz();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[700px] p-0 gap-0 bg-white rounded-2xl">
        <DialogTitle className="sr-only">Персональный расчет за 24 часа</DialogTitle>
        <DialogDescription className="sr-only">
          Оставьте заявку, и мы подготовим индивидуальное коммерческое предложение с учетом специфики вашего бизнеса
        </DialogDescription>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none z-10">
          <X className="h-4 w-4 text-gray-900" />
          <span className="sr-only">Закрыть</span>
        </DialogClose>
        
        <div className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 bg-[#D32F2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-7 h-7 text-[#D32F2F]" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-3 text-[18px] font-medium">Персональный расчет за 24 часа</h3>
            <p className="text-gray-700 mb-6">
              Оставьте заявку, и мы подготовим индивидуальное коммерческое предложение с учетом специфики вашего бизнеса
            </p>
            <Button 
              onClick={handleGetCalculation}
              className="bg-[#D32F2F] hover:bg-[#B71C1C] font-semibold"
              data-quiz-trigger
            >
              Получить расчет
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}