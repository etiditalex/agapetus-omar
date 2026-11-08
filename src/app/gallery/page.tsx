import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/gallery/GalleryBrowser";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getGalleryItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Media gallery",
  description: "Illustrative photo and video gallery for the Agapetus Omar leadership preview.",
};

export default async function GalleryPage() {
  const items = await getGalleryItems();
  const hero = items[0];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Photo gallery"
        description="Open any item for a closer look. Photographs are illustrative. Video files are not hosted in this phase."
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
