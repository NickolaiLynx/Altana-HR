# ⚡ Быстрая справка для разработчиков

## 📝 Добавление новой страницы с SEO

### 1. Создайте компонент
```tsx
// /components/MyNewPage.tsx
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/YOUR_IMAGE.png";

export function MyNewPage() {
  usePageMeta({
    title: "Заголовок страницы — Алтана",
    description: "Описание страницы 120-160 символов",
    keywords: "ключевые, слова, через, запятую",
    ogImage: ogImage,
    type: "website", // или "article" для статей
    noindex: false, // true если не нужно индексировать
  });

  return <div>Ваш контент</div>;
}
```

### 2. Добавьте роут в App.tsx
```tsx
// Импорт
const MyNewPage = lazy(() => import("./components/MyNewPage").then(module => ({ default: module.MyNewPage })));

// В renderPage()
if (currentPath === "/my-new-page") {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <MyNewPage />
    </Suspense>
  );
}

// В is404Page добавьте ис��лючение
const is404Page = currentPath !== "/" && 
                  currentPath !== "/my-new-page" && // добавьте эту строку
                  // ... остальные проверки
```

### 3. Обновите sitemap.xml
```xml
<url>
  <loc>https://yourdomain.com/#/my-new-page</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 🏷️ Добавление структурированных данных

### Для сервиса
```tsx
import { createServiceSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";
import { useEffect } from "react";

useEffect(() => {
  const schema = createServiceSchema({
    name: "Название сервиса",
    description: "Описание сервиса",
    provider: "Алтана",
    serviceType: "Тип сервиса",
    areaServed: "Дальний Восток",
  });
  addStructuredData(schema, "service-schema-unique-id");
  
  return () => removeStructuredData("service-schema-unique-id");
}, []);
```

### Для статьи
```tsx
import { createArticleSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";

useEffect(() => {
  const schema = createArticleSchema({
    title: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: "Алтана",
    publisher: "Алтана",
    url: window.location.href,
  });
  addStructuredData(schema, "article-schema");
  
  return () => removeStructuredData("article-schema");
}, [article]);
```

---

## 🔍 SEO параметры

### Title (заголовок)
- **Длина:** 50-60 символов
- **Формат:** `Ключевые слова — Алтана`
- **Пример:** `"Кадровый аудит — Алтана | Проверка документов"`

### Description (описание)
- **Длина:** 120-160 символов
- **Формат:** Краткое описание + призыв к действию
- **Пример:** `"Проводим кадровый аудит. База 5000+ специалистов. Оставьте заявку!"`

### Keywords (ключевые слова)
- 5-10 релевантных слов через запятую
- Специфичные для страницы

### Priority в sitemap
- `1.0` - главная страница
- `0.9` - ключевые разделы (блог, кейсы)
- `0.8` - важные страницы (о компании, услуги)
- `0.7` - детальные страницы (статьи, кейсы)

---

## 🗂️ Структура файлов

```
/hooks/
  usePageMeta.ts          # Хук для SEO meta-тегов
  useInView.ts            # Хук для анимаций при скролле
  useCloseOnRouteChange.ts # Закрытие диалогов при смене роута

/utils/
  structuredData.ts       # Утилиты для JSON-LD схем

/public/
  robots.txt              # Правила для поисковых ботов
  sitemap.xml             # Карта сайта

/components/
  [Page].tsx              # Каждая страница использует usePageMeta

Документация:
  SEO_GUIDE.md           # Полное руководство по SEO
  POST_DEPLOY_TODO.md    # Чек-лист после деплоя
  DEPLOYMENT_CHECKLIST.md # Общий чек-лист
  SEO_OPTIMIZATION_SUMMARY.md # Сводка оптимизации
  QUICK_REFERENCE.md     # Эта справка
```

---

## 🚀 Команды для работы

### Development
```bash
npm run dev
```

### Build для production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

## ✅ Чек-лист для новой страницы

- [ ] Создан компонент с usePageMeta
- [ ] Добавлен lazy import в App.tsx
- [ ] Добавлен роут в renderPage()
- [ ] Добавлено исключение в is404Page
- [ ] Добавлена в sitemap.xml
- [ ] Добавлены структурированные данные (если нужно)
- [ ] Title уникальный и < 60 символов
- [ ] Description 120-160 символов
- [ ] Keywords релевантные
- [ ] Semantic HTML (h1, h2, nav, etc)
- [ ] Alt для всех изображений
- [ ] Проверено на мобильных

---

## 📞 Где искать помощь

- **Полное руководство:** `/SEO_GUIDE.md`
- **После деплоя:** `/POST_DEPLOY_TODO.md`
- **Общий чек-лист:** `/DEPLOYMENT_CHECKLIST.md`
- **Что сделано:** `/SEO_OPTIMIZATION_SUMMARY.md`

---

**Обновлено:** 03 декабря 2025
