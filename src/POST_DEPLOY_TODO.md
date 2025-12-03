# 📋 Чек-лист после деплоя

## ⚠️ КРИТИЧНО: Обновить после деплоя

### 1. Обновить домен в файлах

#### `/public/robots.txt`
Заменить `https://yourdomain.com` на реальный домен:
```
Sitemap: https://ВАSH-ДОМЕН.com/sitemap.xml
```

#### `/public/sitemap.xml`
Заменить все `https://yourdomain.com` на реальный домен во всех `<loc>` тегах.

**Быстрый способ (Find & Replace):**
- Найти: `https://yourdomain.com`
- Заменить на: `https://ВАШ-РЕАЛЬНЫЙ-ДОМЕН.com`

---

### 2. Подключить аналитику

#### Google Analytics 4
1. Создать аккаунт GA4
2. Получить Measurement ID (формат: G-XXXXXXXXXX)
3. Добавить в `App.tsx`:
```tsx
useEffect(() => {
  // Google Analytics
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}, []);
```

#### Яндекс.Метрика
1. Создать счетчик на https://metrika.yandex.ru
2. Получить ID счетчика
3. Добавить код счетчика в `App.tsx`

---

### 3. Отправить sitemap в поисковики

#### Google Search Console
1. Зарегистрироваться на https://search.google.com/search-console
2. Добавить сайт
3. Подтвердить владение (через DNS или файл)
4. Перейти в Sitemaps
5. Добавить URL: `https://ВАШ-ДОМЕН.com/sitemap.xml`

#### Яндекс.Вебмастер
1. Зарегистрироваться на https://webmaster.yandex.ru
2. Добавить сайт
3. Подтвердить владение
4. Перейти в Индексирование → Файлы Sitemap
5. Добавить URL: `https://ВАШ-ДОМЕН.com/sitemap.xml`

---

### 4. Настроить backend для форм

Заменить все `console.log` в формах на реальную отправку данных:

#### Формы, требующие интеграции:
- `ContactFormDialog.tsx` (строка 51)
- `QuizDialog.tsx` (строка 121)
- `BriefPage.tsx` (строка 34)
- `Footer.tsx` (строка 49)
- `ApplicantDialog.tsx` (строка 39)

**Пример интеграции:**
```tsx
const response = await fetch('https://ваш-backend.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

if (response.ok) {
  toast.success("Заявка отправлена!");
} else {
  toast.error("Ошибка отправки. Попробуйте позже.");
}
```

---

### 5. Добавить CAPTCHA

Рекомендуем использовать reCAPTCHA v3 для защиты от спама:

1. Получить ключи на https://www.google.com/recaptcha/admin
2. Установить пакет: `npm install react-google-recaptcha-v3`
3. Добавить в формы проверку CAPTCHA перед отправкой

---

### 6. Проверить SEO

#### Используйте инструменты:
- ✅ Google PageSpeed Insights: https://pagespeed.web.dev/
- ✅ Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- ✅ Schema.org Validator: https://validator.schema.org/
- ✅ Open Graph Debugger: https://www.opengraph.xyz/

#### Проверить индексацию:
- В Google: `site:ВАШ-ДОМЕН.com`
- В Яндекс: `site:ВАШ-ДОМЕН.com`

---

### 7. Настроить SSL

- Убедитесь, что сайт доступен по HTTPS
- Настройте редирект с HTTP на HTTPS
- Проверьте SSL сертификат: https://www.ssllabs.com/ssltest/

---

### 8. Настроить мониторинг ошибок

#### Рекомендуемые сервисы:
- **Sentry** - для отслеживания JS ошибок
- **UptimeRobot** - для мониторинга доступности сайта
- **LogRocket** - для session replay и debugging

---

### 9. Оптимизировать изображения

Если вы используете реальные изображения (не figma:asset):
1. Конвертировать в WebP формат
2. Использовать responsive images
3. Настроить lazy loading (уже реализовано через ImageWithFallback)

---

### 10. Обновить контент

#### Заменить тестовые данные:
- `/data/blog-articles.ts` - реальные статьи блога
- `/data/cases.ts` - реальные кейсы компании

#### Добавить даты публикации:
В `blog-articles.ts` добавьте поле `publishedDate` для правильной работы Article schema.

---

## ✅ Финальная проверка

- [ ] Домен обновлен в robots.txt
- [ ] Домен обновлен в sitemap.xml
- [ ] Google Analytics подключен
- [ ] Яндекс.Метрика подключена
- [ ] Sitemap отправлен в Google Search Console
- [ ] Sitemap отправлен в Яндекс.Вебмастер
- [ ] Формы отправляют данные на backend
- [ ] CAPTCHA добавлена
- [ ] SSL сертификат настроен
- [ ] Мониторинг ошибок подключен
- [ ] Реальный контент загружен
- [ ] SEO проверен инструментами
- [ ] Сайт протестирован на мобильных устройствах

---

**Готово! 🚀**

После выполнения всех пунктов ваш сайт готов к полноценной работе в production.
