import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailArticle } from "@/components/content/DetailArticle";
import { NewsCard } from "@/components/news/NewsCard";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/format";
import { getNewsArticle, getNewsArticles, getRelatedNews } from "@/lib/content";

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  return { title: article?.title ?? "Story", description: article?.excerpt };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [article, related] = await Promise.all([getNewsArticle(slug), getRelatedNews(slug)]);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: article.title },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <DetailArticle
            eyebrow="Placeholder briefing"
            summary={`${formatDate(article.date)} · ${article.location} · ${article.readMinutes} min read · ${article.author}`}
            paragraphs={article.paragraphs}
            image={article.image}
            imageAlt={article.imageAlt}
            meta={[
              { label: "Category", value: article.category },
              { label: "Location", value: article.location },
              { label: "Status", value: "Sample story — not an official statement" },
            ]}
          />
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-ink">Related sample stories</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <NewsCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
