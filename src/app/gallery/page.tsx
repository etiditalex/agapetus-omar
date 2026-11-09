import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media gallery",
  description: "Photographs and video from Agapetus Omar.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();
  const hero = items[0];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo gallery"
        description="Open any item for a closer look."
        image={hero.image}
        imageAlt={hero.imageAlt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <GalleryBrowser items={items} />
        </Container>
      </section>
    </>
  );
}
