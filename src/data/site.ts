import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Agapetus Omar",
  role: "Civil engineer and community advocate",
  place: "Kilifi North",
  summary:
    "Civil engineer, entrepreneur, and community advocate aspiring to represent Kilifi North. Building dreams. Building Kilifi North.",
  subCounties: [
    "Kilifi North",
    "Kilifi South",
    "Kaloleni",
    "Rabai",
    "Ganze",
    "Malindi",
    "Magarini",
  ],
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Biography", href: "/about" },
        { label: "Leadership journey", href: "/about#journey" },
        { label: "Values", href: "/about#values" },
      ],
    },
    {
      label: "Vision",
      href: "/vision",
      children: [
        { label: "Leadership vision", href: "/vision" },
        { label: "Priorities", href: "/vision#priorities" },
      ],
    },
    { label: "Community", href: "/community" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    officeName: "County liaison office",
    addressLines: ["Address placeholder", "Kilifi County, Kenya"],
    phone: "0790 323 693",
    email: "office@agapetusomar.example",
    hours: "Monday to Friday, 8:00–17:00 EAT",
    note: "The phone number is the one printed on the Manifesto 2027 poster. Email, office address, and hours are still placeholders and do not connect to a live office.",
  },
  social: [
    { label: "Facebook", href: "https://example.com", icon: "facebook" },
    { label: "Instagram", href: "https://example.com", icon: "instagram" },
    { label: "YouTube", href: "https://example.com", icon: "youtube" },
    { label: "LinkedIn", href: "https://example.com", icon: "linkedin" },
  ],
};
