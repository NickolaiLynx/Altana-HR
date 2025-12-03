import { FrownIcon, Home } from "lucide-react";
import { Button } from "./ui/button";
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function NotFoundPage() {
  // SEO meta tags for 404 page
  usePageMeta({
    title: "404 — Страница не найдена | Алтана",
    description: "К сожалению, страница, которую вы ищете, не существует или была перемещена",
    ogImage: ogImage,
    type: "website",
    noindex: true,
  });

  const handleGoHome = () => {
    window.location.hash = "#/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Sad Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D32F2F]/20 blur-3xl rounded-full" />
            <FrownIcon className="w-24 h-24 text-[#D32F2F] relative animate-in zoom-in duration-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-[120px] md:text-[160px] leading-none text-gray-300 mb-4 select-none">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-gray-900 mb-3">
          Страница не найдена
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          К сожалению, страница, которую вы ищете, не существует или была перемещена
        </p>

        {/* Home Button */}
        <Button
          onClick={handleGoHome}
          className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-6 gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Вернуться на главную
        </Button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse animate-bounce-delay-0" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse animate-bounce-delay-150" />
          <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse animate-bounce-delay-300" />
        </div>
      </div>
    </div>
  );
}
