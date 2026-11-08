import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy note",
  description: "Privacy note for the Agapetus Omar design preview.",
};

export default async function PrivacyPage() {
  const gallery = await getGalleryItems();
  const hero = gallery[0];

  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy note"
        description="A short explanation of what this preview does with information. It is not a legal policy for a live office."
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
            This website is a frontend design preview. It does not create accounts, and it does not send the contact form to an inbox or a database.
          </p>
          <p>
            The demonstration form checks entries in your browser. If the check passes, it shows those entries back to you on the same page. Closing or refreshing the page clears them. Do not type passwords, identity numbers, medical details, or documents into the form.
          </p>
          <p>
            Search and filters also stay in the page address so a view can be revisited. They do not build a profile.
          </p>
          <p>
            Portraits of Agapetus Omar are used across this preview. Other photographs, where they remain, are illustrative and are not a record of private meetings. The site asks search engines not to index this preview while the biography remains unverified.
          </p>
        </Container>
      </section>
    </>
  );
}
