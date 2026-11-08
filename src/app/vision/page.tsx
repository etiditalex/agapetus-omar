import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { getPriorities } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vision and priorities",
  description: "Manifesto 2027 commitments for Kilifi North: education, health, fishing, tourism, roads, water, and small enterprise.",
};

export default async function VisionPage() {
  const priorities = await getPriorities();
  const hero = priorities[0];

  return (
    <>
      <PageHero
        eyebrow="Vision"
        title="Agenda"
        description="Six commitments from the Manifesto 2027 poster for Kilifi North. They are the agenda being offered, not a record of completed projects."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Agenda" },
        ]}
      />
      <section className="bg-sand py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Our commitment to Kilifi North</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted">
            <p>
              The agenda on this site is the one printed on the Manifesto 2027 poster: education and youth empowerment, healthcare access, the blue economy and fishing, tourism and jobs, roads and water, and women and small enterprises.
            </p>
            <p>
              The line under the name on that poster is “Change we can believe in.” These pages set out those commitments for Kilifi North. They do not report projects already delivered.
            </p>
          </div>
        </Container>
      </section>
      <section id="priorities" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">Pillars of the agenda</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            The six commitments from the Manifesto 2027 poster. These are the agenda, not a record of completed projects.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {priorities.map((priority) => (
              <PhotoTile
                key={priority.slug}
                href={`/vision/${priority.slug}`}
                image={priority.image}
                imageAlt={priority.imageAlt}
                title={priority.title}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
