import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy note",
  description: "Privacy note for the Agapetus Omar website.",
};

export default async function PrivacyPage() {
  const gallery = await getGalleryItems();
  const hero = gallery[0];

  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy note"
        description="How this website handles information."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            This website does not create accounts. Do not type passwords, identity numbers, medical details, or documents into the contact form.
          </p>
          <p>
            The contact form checks entries in your browser and shows them back on the same page. Closing or refreshing the page clears them.
          </p>
          <p>
            Search and filters also stay in the page address so a view can be revisited. They do not build a profile.
          </p>
          <p>
            Portraits of Agapetus Omar are used across the site.
          </p>
        </Container>
      </section>
    </>
  );
}
