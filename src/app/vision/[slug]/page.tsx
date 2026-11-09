import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailArticle } from "@/components/content/DetailArticle";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getPriorities, getPriority } from "@/lib/content";

export async function generateStaticParams() {
  const priorities = await getPriorities();
  return priorities.map((priority) => ({ slug: priority.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const priority = await getPriority(slug);
  return {
    title: priority?.title ?? "Priority",
    description: priority?.summary,
  };
}

export default async function PriorityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [priority, priorities] = await Promise.all([getPriority(slug), getPriorities()]);
  if (!priority) notFound();

  const related = priorities.filter((item) => item.slug !== priority.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title={priority.title}
        description={priority.summary}
        image={priority.image}
        imageAlt={priority.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Vision", href: "/vision" },
          { label: priority.title },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <DetailArticle
            eyebrow="Commitment"
            summary={priority.intent}
            paragraphs={priority.paragraphs}
            image={priority.image}
            imageAlt={priority.imageAlt}
            points={priority.proposals}
            pointsLabel="What this priority proposes"
            meta={[
              { label: "Status", value: "Manifesto 2027" },
              { label: "Area", value: "Kilifi North" },
            ]}
          />
          <div className="mt-16">
            <h2 className="text-center text-3xl font-bold text-ink">Other priorities</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
              {related.map((item) => (
                <PhotoTile key={item.slug} href={`/vision/${item.slug}`} image={item.image} imageAlt={item.imageAlt} title={item.title} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
