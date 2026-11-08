import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { PhotoTile } from "@/components/ui/PhotoTile";
import { formatEventWhen } from "@/lib/format";
import { getInitiatives, getUpcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Community engagement",
  description: "Sample community initiatives and public participation formats for Kilifi County.",
};

const steps = [
  {
    title: "Hear it in the ward",
    copy: "A sample baraza, landing-site visit, or market morning. Nothing on this list has been convened.",
  },
  {
    title: "Write the note",
    copy: "Asked, answered, and still open. Quotes need consent. Numbers need a count that the room agreed.",
  },
  {
    title: "Bring the note back",
    copy: "The return is the point of the format. This preview has no notes to return yet.",
  },
];

export default async function CommunityPage() {
  const [initiatives, events] = await Promise.all([getInitiatives(), getUpcomingEvents(3)]);
  const hero = initiatives[0];

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Engagement"
        description="Illustrative ways to meet, listen, and publish what was heard. These are formats, not a record of attendance."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Community" },
        ]}
      />
      <section className="bg-sand py-16 sm:py-20">
        <Container className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title}>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-teal">0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-bold text-ink">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.copy}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <h2 className="text-center text-4xl font-bold tracking-tight text-ink">Initiatives</h2>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {initiatives.map((initiative) => (
              <PhotoTile
                key={initiative.slug}
                href={`/community/${initiative.slug}`}
                image={initiative.image}
                imageAlt={initiative.imageAlt}
                title={initiative.title}
              />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-sand py-16 sm:py-20">
        <Container>
          <h2 className="text-4xl font-bold tracking-tight text-ink">Sample diary</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {events.map((event) => {
              const when = formatEventWhen(event.date);
              return (
                <li key={event.slug}>
                  <Link href={`/events/${event.slug}`} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-2xl font-bold">{event.title}</span>
                    <span className="text-sm text-muted">
                      {when.full} · {event.town}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
