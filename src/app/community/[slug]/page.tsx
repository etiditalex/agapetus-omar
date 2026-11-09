import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailArticle } from "@/components/content/DetailArticle";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getInitiative, getInitiatives } from "@/lib/content";

export async function generateStaticParams() {
  const initiatives = await getInitiatives();
  return initiatives.map((initiative) => ({ slug: initiative.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const initiative = await getInitiative(slug);
  return { title: initiative?.title ?? "Initiative", description: initiative?.summary };
}

export default async function InitiativePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [initiative, initiatives] = await Promise.all([getInitiative(slug), getInitiatives()]);
  if (!initiative) notFound();
  const related = initiatives.filter((item) => item.slug !== initiative.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Initiative"
        title={initiative.title}
        description={initiative.summary}
        image={initiative.image}
        imageAlt={initiative.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community", href: "/community" },
          { label: initiative.title },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <DetailArticle
            eyebrow="Community"
            summary={initiative.status}
            paragraphs={initiative.paragraphs}
            image={initiative.image}
            imageAlt={initiative.imageAlt}
            points={initiative.steps}
            pointsLabel="How it works"
            meta={[
              { label: "Area", value: initiative.area },
              { label: "Status", value: initiative.status },
            ]}
          />
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3">
            {related.map((item) => (
              <PhotoTile key={item.slug} href={`/community/${item.slug}`} image={item.image} imageAlt={item.imageAlt} title={item.title} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
