import { portraitCutouts } from "@/data/images";
import type { HeroSlide } from "@/types/content";

export const heroSlides: HeroSlide[] = [
  {
    id: "dignity",
    kicker: "Sample quote",
    quote: "A coastline should be able to feed its children, school them, and keep them.",
    emphasis: "Dignity in daily work",
    image: portraitCutouts.studio,
    imageAlt: "Agapetus Omar",
  },
  {
    id: "listen",
    kicker: "Sample quote",
    quote:
      "Leadership in Kilifi begins where people already gather: the landing site, the market, and the school gate.",
    emphasis: "Listen before you promise",
    image: portraitCutouts.green,
    imageAlt: "Agapetus Omar",
  },
  {
    id: "shared",
    kicker: "Sample quote",
    quote: "The harvest, the tide, and the classroom are one economy.",
    emphasis: "Shared prosperity",
    image: portraitCutouts.stripes,
    imageAlt: "Agapetus Omar",
  },
];
