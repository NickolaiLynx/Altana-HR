import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TargetAudience } from "./components/TargetAudience";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Results } from "./components/Results";
import { Testimonials } from "./components/Testimonials";
import { HowWeWork } from "./components/HowWeWork";
import { Guarantees } from "./components/Guarantees";
import { Pricing } from "./components/Pricing";
import { Resources } from "./components/Resources";
import { FAQ } from "./components/FAQ";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { TimedPopup } from "./components/TimedPopup";
import { CookieConsent } from "./components/CookieConsent";
import { ChatWidget } from "./components/ChatWidget";
import { Toaster } from "./components/ui/sonner";
import { LoadingFallback } from "./components/LoadingFallback";
import { NotFoundPage } from "./components/NotFoundPage";
import { usePageMeta } from "./hooks/usePageMeta";
import { createOrganizationSchema, addStructuredData } from "./utils/structuredData";
import faviconImg from "figma:asset/9546cd84e1d0d3163b25020fbea4f9ca58e11ac6.png";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

// Lazy load pages for better performance
const CasesPage = lazy(() => import("./components/CasesPage").then(module => ({ default: module.CasesPage })));
const CaseDetail = lazy(() => import("./components/CaseDetail").then(module => ({ default: module.CaseDetail })));
const BlogPage = lazy(() => import("./components/BlogPage").then(module => ({ default: module.BlogPage })));
const BlogArticle = lazy(() => import("./components/BlogArticle").then(module => ({ default: module.BlogArticle })));
const BriefPage = lazy(() => import("./components/BriefPage").then(module => ({ default: module.BriefPage })));
const AboutPage = lazy(() => import("./components/AboutPage").then(module => ({ default: module.AboutPage })));
const PrivacyPolicyPage = lazy(() => import("./components/PrivacyPolicyPage").then(module => ({ default: module.PrivacyPolicyPage })));
const HRAuditPage = lazy(() => import("./components/HRAuditPage").then(module => ({ default: module.HRAuditPage })));
const MigrationPage = lazy(() => import("./components/MigrationPage").then(module => ({ default: module.MigrationPage })));

function HomePage() {
  // SEO meta tags for home page
  usePageMeta({
    title: "Алтана — Кадровое агентство для горнодобывающей отрасли",
    description: "Кадровое агентство Алтана специализируется на подборе персонала для горнодобывающей отрасли на Дальнем Востоке. Кадровый аудит, миграционный учет, база 5000+ специалистов.",
    keywords: "кадровое агентство, подбор персонала, горнодобывающая отрасль, кадровый аудит, миграционный учет, Дальний Восток, Алтана",
    ogImage: ogImage,
    type: "website",
  });

  return (
    <>
      <HeroSection />
      
      <main>
        <TargetAudience />
        
        <div id="services">
          <Services />
        </div>
        
        <div id="why-us">
          <WhyUs />
        </div>
        
        <div id="results">
          <Results />
        </div>
        
        <Testimonials />
        
        <HowWeWork />
        <Guarantees />
        
        <div id="pricing">
          <Pricing />
        </div>
        
        <Resources />
        
        <div id="faq">
          <FAQ />
        </div>
        
        <div id="contacts">
          <Contacts />
        </div>
      </main>
    </>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || "/");
  const [quizIsOpen, setQuizIsOpen] = useState(false);

  // Set global meta tags (favicon, viewport, author) and structured data
  useEffect(() => {
    // Favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImg;
    document.head.appendChild(link);

    // Meta tags helper
    const setMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || 
                 document.querySelector(`meta[name="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('twitter:')) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', property);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Global meta tags (don't depend on page)
    setMetaTag('author', 'Алтана');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('og:site_name', 'Алтана');
    setMetaTag('og:locale', 'ru_RU');
    setMetaTag('twitter:card', 'summary_large_image');

    // Add organization structured data (JSON-LD)
    const orgSchema = createOrganizationSchema({
      name: "Алтана",
      description: "Кадровое агентство специализирующееся на подборе персонала для горнодобывающей отрасли",
      url: window.location.origin,
      logo: ogImage,
      address: {
        addressLocality: "Дальний Восток",
        addressRegion: "Дальневосточный федеральный округ",
        addressCountry: "RU",
      },
    });
    addStructuredData(orgSchema, "organization-schema");
  }, [faviconImg, ogImage]);

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || "/";
      setCurrentPath(newPath);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Scroll to top when currentPath changes (except for anchor navigation)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPath]);

  // Обработка скролла к якорю после загрузки главной страницы
  useEffect(() => {
    if (currentPath === "/") {
      // Проверяем, есть ли сохраненный якорь для скролла
      const anchorToScroll = sessionStorage.getItem("scrollToAnchor");
      if (anchorToScroll) {
        sessionStorage.removeItem("scrollToAnchor");
        setTimeout(() => {
          const element = document.getElementById(anchorToScroll);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [currentPath]);

  const handleOpenQuiz = () => {
    setQuizIsOpen(true);
    // Trigger quiz dialog opening
    const quizButton = document.querySelector('[data-quiz-trigger]') as HTMLButtonElement;
    if (quizButton) {
      quizButton.click();
    }
  };

  const renderPage = () => {
    // Blog article route
    if (currentPath.startsWith("/blog/")) {
      const slug = currentPath.replace("/blog/", "");
      return (
        <Suspense fallback={<LoadingFallback />}>
          <BlogArticle slug={slug} />
        </Suspense>
      );
    }
    
    // Blog main page
    if (currentPath === "/blog") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <BlogPage />
        </Suspense>
      );
    }
    
    // Cases page
    if (currentPath === "/cases") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <CasesPage />
        </Suspense>
      );
    }
    
    // Case detail page
    if (currentPath.startsWith("/cases/")) {
      const caseId = currentPath.replace("/cases/", "");
      return (
        <Suspense fallback={<LoadingFallback />}>
          <CaseDetail caseId={caseId} />
        </Suspense>
      );
    }
    
    // Brief page
    if (currentPath === "/brief") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <BriefPage />
        </Suspense>
      );
    }
    
    // About page
    if (currentPath === "/about") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <AboutPage />
        </Suspense>
      );
    }
    
    // Privacy Policy page
    if (currentPath === "/privacy") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <PrivacyPolicyPage />
        </Suspense>
      );
    }
    
    // HR Audit page
    if (currentPath === "/hr-audit") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <HRAuditPage />
        </Suspense>
      );
    }
    
    // Migration page
    if (currentPath === "/migration") {
      return (
        <Suspense fallback={<LoadingFallback />}>
          <MigrationPage />
        </Suspense>
      );
    }
    
    // Home page
    if (currentPath === "/") {
      return <HomePage />;
    }
    
    // 404 - Not Found
    return <NotFoundPage />;
  };

  // Check if current page is 404
  const is404Page = currentPath !== "/" && 
                    currentPath !== "/blog" && 
                    !currentPath.startsWith("/blog/") &&
                    currentPath !== "/cases" && 
                    !currentPath.startsWith("/cases/") &&
                    currentPath !== "/brief" &&
                    currentPath !== "/about" &&
                    currentPath !== "/privacy" &&
                    currentPath !== "/hr-audit" &&
                    currentPath !== "/migration";

  return (
    <div className="min-h-screen bg-white">
      {!is404Page && <Header currentPath={currentPath} />}
      {renderPage()}
      {!is404Page && <Footer />}
      <Toaster />
      {!is404Page && <CookieConsent />}
      {!is404Page && <ChatWidget />}
      {currentPath === "/" && <TimedPopup onOpenQuiz={handleOpenQuiz} quizIsOpen={quizIsOpen} />}
    </div>
  );
}
