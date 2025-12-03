import { useEffect } from "react";
import { Button } from "./ui/button";
import { blogArticles } from "../data/blog-articles";
import { BlogLayout } from "./layouts/BlogLayout";
import { usePageMeta } from "../hooks/usePageMeta";
import { createArticleSchema, addStructuredData, removeStructuredData } from "../utils/structuredData";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

interface BlogArticleProps {
  slug: string;
}

export function BlogArticle({ slug }: BlogArticleProps) {
  const article = blogArticles.find((a) => a.slug === slug);

  // SEO meta tags for article
  usePageMeta({
    title: article ? `${article.title} — Блог Алтана` : "Статья не найдена — Алтана",
    description: article?.excerpt || "Статья не найдена",
    keywords: article ? `${article.title}, блог Алтана, подбор персонала` : "блог",
    ogImage: article?.image || ogImage,
    type: "article",
  });

  // Add article structured data
  useEffect(() => {
    if (article) {
      const articleSchema = createArticleSchema({
        title: article.title,
        description: article.excerpt,
        image: article.image,
        datePublished: new Date().toISOString(), // В production использовать реальную дату
        author: "Алтана",
        publisher: "Алтана",
        url: window.location.href,
      });
      addStructuredData(articleSchema, "article-schema");
      
      return () => removeStructuredData("article-schema");
    }
  }, [article]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Статья не найдена</h1>
          <a href="#/blog">
            <Button>Вернуться к блогу</Button>
          </a>
        </div>
      </div>
    );
  }

  return <BlogLayout article={article} />;
}
