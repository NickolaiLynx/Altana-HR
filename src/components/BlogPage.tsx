import { PageHero } from "./common/PageHero";
import { BlogCard } from "./common/BlogCard";
import { blogArticles } from "../data/blog-articles";
import { usePageMeta } from "../hooks/usePageMeta";
import ogImage from "figma:asset/a517b9ade2ca696c966796682c963a0d724ddaf3.png";

export function BlogPage() {
  // SEO meta tags for blog page
  usePageMeta({
    title: "Блог — Алтана | Экспертные статьи о подборе персонала",
    description: "Практические материалы и экспертные советы по подбору персонала, кадровому аудиту и миграционному учету в горнодобывающей отрасли",
    keywords: "блог кадрового агентства, статьи о подборе персонала, кадровый учет, миграционный учет, горнодобывающая отрасль",
    ogImage: ogImage,
    type: "website",
  });

  return (
    <div className="min-h-screen bg-gray-50 relative" style={{ zIndex: 2 }}>
      {/* Hero Section */}
      <PageHero
        breadcrumbs={[
          { label: "Главная", href: "#/" },
          { label: "Блог" }
        ]}
        title="Блог"
        description="Практические материалы и экспертные советы по подбору персонала, кадровому аудиту и миграционному учету в горнодобывающей отрасли"
      />

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <BlogCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}