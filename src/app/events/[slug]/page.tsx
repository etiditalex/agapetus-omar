import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailArticle } from "@/components/content/DetailArticle";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { formatEventWhen, isUpcoming } from "@/lib/format";
import { getEvent, getEvents, getRelatedEvents } from "@/lib/content";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  return { title: event?.title ?? "Event", description: event?.summary };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [event, related] = await Promise.all([getEvent(slug), getRelatedEvents(slug)]);
  if (!event) notFound();
  const when = formatEventWhen(event.date);

  return (
    <>
      <PageHero
        eyebrow={isUpcoming(event.date) ? "Upcoming" : "Past"}
        title={event.title}
        description={event.summary}
        image={event.image}
        imageAlt={event.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <DetailArticle
            eyebrow="Event"
            summary={`${when.full} at ${when.time}.`}
            paragraphs={event.paragraphs}
            image={event.image}
            imageAlt={event.imageAlt}
            points={event.runningOrder}
            pointsLabel="Running order"
            meta={[
              { label: "When", value: `${when.full}, ${when.time}` },
              { label: "Where", value: event.venue },
              { label: "Town", value: event.town },
              { label: "Category", value: event.category },
            ]}
          />
          <div className="mt-14">
            <h2 className="text-3xl font-bold text-ink">Other events</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/events/${item.slug}`} className="block py-4 text-lg font-semibold text-ink hover:text-teal">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
