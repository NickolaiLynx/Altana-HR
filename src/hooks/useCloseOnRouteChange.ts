import { useEffect } from "react";

/**
 * Хук для автоматического закрытия диалогов при изменении маршрута
 * @param onClose - Функция, которая будет вызвана при изменении маршрута
 */
export function useCloseOnRouteChange(onClose: () => void) {
  useEffect(() => {
    const handleHashChange = () => {
      onClose();
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [onClose]);
}
