# 🔍 SEO Руководство для Алтана

## Обзор SEO оптимизации

Лендинг Алтана полностью оптимизирован для поисковых систем с использованием современных практик SEO.

---

## 📋 Что реализовано

### 1. Динамические Meta-теги

Каждая страница имеет уникальные meta-теги:

- **Title** - уникальный для каждой страницы
- **Description** - краткое описание содержимого
- **Keywords** - релевантные ключевые слова
- **Open Graph** - для красивого отображения в соцсетях
- **Twitter Cards** - для Twitter
- **Canonical URL** - предотвращает дублирование контента

### 2. Структурированные данные (JSON-LD)

#### Organization Schema (главная страница)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Алтана",
  "description": "Кадровое агентство...",
  "address": {...}
}
```

#### Article Schema (статьи блога)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Заголовок статьи",
  "author": {...},
  "publisher": {...}
}
```

#### Service Schema (HR-аудит, Миграция)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Кадровый аудит",
  "provider": {...}
}
```

### 3. Управление индексацией

- **Индексируются:**
  - Главная страница
  - О компании
  - Блог и статьи
  - Кейсы
  - HR-аудит
  - Миграция

- **НЕ индексируются (noindex):**
  - Бриф (форма заявки)
  - Политика конфиденциальности
  - 404 страница

### 4. Файлы для поисковиков

#### robots.txt
```
User-agent: *
Allow: /
Disallow: /#/brief
Disallow: /#/privacy
```

#### sitemap.xml
Содержит все основные страницы с приоритетами и частотой обновления.

---

## 🛠️ Как использовать

### Добавление новой страницы

1. Импортируйте хук `usePageMeta`:
```tsx
import { usePageMeta } from "../hooks/usePageMeta";
```

2. Добавьте в компонент:
```tsx
export function MyNewPage() {
  usePageMeta({
    title: "Заголовок — Алтана",
    description: "Описание страницы",
    keywords: "ключевые, слова",
    ogImage: ogImage,
    type: "website",
    noindex: false, // true если не нужно индексировать
  });
  
  return <div>...</div>;
}
```

### Добавление структурированных данных

1. Импортируйте утилиты:
```tsx
import { createServiceSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";
import { useEffect } from "react";
```

2. Добавьте useEffect:
```tsx
useEffect(() => {
  const schema = createServiceSchema({
    name: "Название сервиса",
    description: "Описание",
    provider: "Алтана",
    serviceType: "Тип сервиса",
    areaServed: "Регион",
  });
  addStructuredData(schema, "unique-id");
  
  return () => removeStructuredData("unique-id");
}, []);
```

### Обновление sitemap.xml

После добавления новых страниц обновите `/public/sitemap.xml`:

```xml
<url>
  <loc>https://yourdomain.com/#/new-page</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 📊 SEO чек-лист для новых страниц

- [ ] Добавлен `usePageMeta` с уникальными meta-тегами
- [ ] Title содержит ключевые слова и название бренда
- [ ] Description от 120 до 160 символов
- [ ] Добавлен в sitemap.xml
- [ ] Структурированные данные (если нужно)
- [ ] Canonical URL корректный
- [ ] Semantic HTML (h1, h2, nav, main, section)
- [ ] Alt атрибуты для всех изображений
- [ ] Внутренние ссылки работают

---

## 🚀 После деплоя

### 1. Обновите домен в файлах:
- `/public/robots.txt` - строка `Sitemap:`
- `/public/sitemap.xml` - все `<loc>` URL'ы

### 2. Подключите инструменты:
- Google Search Console
- Яндекс.Вебмастер
- Google Analytics / Яндекс.Метрика

### 3. Отправьте sitemap:
- В Google Search Console
- В Яндекс.Вебмастер

### 4. Проверьте:
- Индексация страниц (site:yourdomain.com)
- Structured Data Testing Tool от Google
- PageSpeed Insights
- Mobile-Friendly Test

---

## 📈 Рекомендации по контенту

### Title (заголовок)
- **Длина:** 50-60 символов
- **Формат:** Ключевые слова — Название бренда
- **Пример:** "Кадровый аудит — Алтана | Проверка документов"

### Description (описание)
- **Длина:** 120-160 символов
- **Содержание:** Краткое описание + призыв к действию
- **Пример:** "Проводим комплексный кадровый аудит для горнодобывающих компаний. База 5000+ специалистов. Оставьте заявку!"

### Keywords (ключевые слова)
- 5-10 релевантных ключевых слов
- Через запятую
- Специфичные для страницы

### Заголовки (H1-H6)
- **H1:** Один на страницу, содержит главное ключевое слово
- **H2-H3:** Структурируют контент
- **Логичная иерархия:** H1 → H2 → H3 (не пропускайте уровни)

---

## 🔗 Полезные ссылки

- [Schema.org документация](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Яндекс.Вебмастер справка](https://yandex.ru/support/webmaster/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## 📞 Контакты разработки

При возникновении вопросов по SEO оптимизации обращайтесь к документации выше или к разработчику.

**Статус:** ✅ Все SEO оптимизации внедрены
**Дата:** 03 декабря 2025
