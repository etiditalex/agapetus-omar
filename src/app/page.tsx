import { HomeSections } from "@/components/home/HomeSections";
import { HeroSlider } from "@/components/home/HeroSlider";
import { getBiography, getGalleryItems, getHeroSlides, getPriorities, getSiteConfig } from "@/lib/content";

export default async function HomePage() {
  const [slides, biography, site, priorities, gallery] = await Promise.all([
    getHeroSlides(),
    getBiography(),
    getSiteConfig(),
    getPriorities(),
    getGalleryItems(),
  ]);

  return (
    <>
      <HeroSlider slides={slides} />
      <HomeSections biography={biography} priorities={priorities} portrait={gallery[0]} site={site} />
    </>
  );
}
