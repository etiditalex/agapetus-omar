import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { NewsExplorer } from "@/components/news/NewsExplorer";
import { Container } from "@/components/ui/Container";
import { getGalleryItems, getNewsArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "News and updates",
  description: "News and updates from Agapetus Omar for Kilifi North.",
};

export default async function NewsPage() {
  const [articles, gallery] = await Promise.all([getNewsArticles(), getGalleryItems()]);
  const hero = gallery[1] ?? gallery[0];

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Updates"
        description="Updates on community, youth, livelihoods, health, and education."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "News" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={<p className="text-muted">Loading stories…</p>}>
            <NewsExplorer articles={articles} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
