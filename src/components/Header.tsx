import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import AltanaLogoWhite from "../imports/AltanaLogoWhite";
import { ContactFormDialog } from "./ContactFormDialog";
import { RedButton } from "./common/RedButton";

interface HeaderProps {
  currentPath: string;
}

export function Header({ currentPath }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const viewportHeight = window.innerHeight;
          
          // Определяем, прокручена ли страница вниз от hero-секции (100vh)
          setIsScrolled(currentScrollY > viewportHeight);
          
          // Header всегда виден на hero-секции (до 100vh)
          if (currentScrollY < viewportHeight) {
            setIsVisible(true);
          } else {
            // После 100vh - показываем при скролле вверх, скрываем при скролле вниз
            setIsVisible(currentScrollY < lastScrollYRef.current);
          }
          
          lastScrollYRef.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = currentPath === "/";

  const navigation = [
    { name: "Услуги", href: "#services", type: "anchor" },
    { name: "О нас", href: "#/about", type: "route" },
    { name: "Кейсы", href: "#/cases", type: "route" },
    { name: "Блог", href: "#/blog", type: "route" },
    { name: "Стоимость", href: "#pricing", type: "anchor" },
    { name: "Контакты", href: "#contacts", type: "anchor" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: string) => {
    if (type === "anchor") {
      e.preventDefault();
      const anchorId = href.replace("#", "");
      
      if (isHomePage) {
        // Если на главной странице - скроллим сразу
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Если на другой странице - сохраняем якорь и переходим а главную
        sessionStorage.setItem("scrollToAnchor", anchorId);
        window.location.hash = "/";
      }
    }
  };

  // Вычисляем классы для header
  const getHeaderClasses = () => {
    // КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: position меняется!
    const positionClass = isScrolled ? "fixed" : "absolute";
    const baseClasses = `${positionClass} top-0 left-0 right-0 w-full`;
    const zIndexClass = "z-[9999]";
    const transitionClass = "transition-all duration-300";
    
    // Фон и границы - ТОЛЬКО когда header видим
    let backgroundClass = "";
    if (isScrolled && !isVisible) {
      // Когда скрыт - вообще без фона
      backgroundClass = "bg-transparent border-transparent";
    } else if (isScrolled) {
      // Когда виден после Hero - с фоном
      const borderClass = isMenuOpen ? "border-transparent" : "border-b border-white/20";
      backgroundClass = `bg-[#101828] ${borderClass} shadow-md`;
    } else {
      // Когда в Hero - прозрачный
      const borderClass = isMenuOpen ? "border-transparent" : "border-b border-white/20";
      backgroundClass = `bg-transparent ${borderClass}`;
    }
    
    // Видимость через opacity вместо transform
    const visibilityClass = isScrolled && !isVisible 
      ? "opacity-0 pointer-events-none -translate-y-full" 
      : "opacity-100 pointer-events-auto translate-y-0";
    
    return `${baseClasses} ${zIndexClass} ${transitionClass} ${backgroundClass} ${visibilityClass}`;
  };

  return (
    <header className={getHeaderClasses()}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#/" className="text-white w-32 h-8">
              <AltanaLogoWhite />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href, item.type)}
                className="text-white/90 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+79143997401" className="text-white flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm">+7 (914) 399 7401</span>
            </a>
            <ContactFormDialog 
              trigger={
                <RedButton>
                  Связаться
                </RedButton>
              }
              source="Header - кнопка Связаться"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-4 bg-[#101828] rounded-lg">
            <nav className="flex flex-col gap-4" aria-label="Мобильное меню">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors py-2"
                  onClick={(e) => {
                    handleAnchorClick(e, item.href, item.type);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a href="tel:+79143997401" className="text-white py-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                +7 (914) 399 7401
              </a>
              <ContactFormDialog 
                trigger={
                  <RedButton className="w-full">
                    Заявка
                  </RedButton>
                }
                source="Header - мобильное мню"
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}