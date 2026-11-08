import type { Metadata } from "next";
import { Suspense } from "react";
import { EventsExplorer } from "@/components/events/EventsExplorer";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getEvents, getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past sample engagements for the Agapetus Omar leadership preview.",
};

export default async function EventsPage() {
  const [events, gallery] = await Promise.all([getEvents(), getGalleryItems()]);
  const hero = gallery[5] ?? gallery[0];

  return (
    <>
      <PageHero
        eyebrow="Diary"
        title="Events"
        description="Upcoming and past entries are samples. They do not confirm a booking, a host, or a seat."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Suspense fallback={<p className="text-muted">Loading the diary…</p>}>
            <EventsExplorer events={events} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
