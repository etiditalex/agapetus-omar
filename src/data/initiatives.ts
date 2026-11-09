import { portraits } from "@/data/images";
import type { Initiative } from "@/types/content";

export const initiatives: Initiative[] = [
  {
    slug: "listening-circuit",
    title: "Ward listening circuit",
    summary:
      "Open conversations, written up and returned to the people who attended.",
    area: "All seven sub-counties",
    icon: "messages",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    status: "Open conversations across the sub-counties",
    steps: [
      "Announce the time and place in more than one language where needed.",
      "Take notes in public, not only in a private book.",
      "Return a short written account of what was asked.",
    ],
    paragraphs: [
      "The circuit is a round of open conversations across the sub-counties.",
      "The point is the return visit: a note that people can compare with what they remember saying.",
      "Each stop is announced in more than one language where that is needed.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "landing-site-notes",
    title: "Landing-site notes",
    summary:
      "Recording landing-site conditions with fishers and traders, then publishing the note.",
    area: "Coastal wards",
    icon: "fish",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    status: "Notes from coastal wards",
    steps: [
      "Visit with beach management representatives.",
      "Separate safety, water, shade, and price.",
      "Avoid publishing a number that was only estimated aloud.",
    ],
    paragraphs: [
      "Landing-site notes record safety, water, shade, and price with fishers and traders.",
      "If a count was not agreed in the meeting, the note says so.",
      "Women who trade fish are part of the method, because the beach economy does not end with the boat.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "harvest-conversations",
    title: "Harvest conversations",
    summary:
      "Producer meetings on coconut, cashew, and mango, focused on price and storage.",
    area: "Farming wards",
    icon: "sprout",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    status: "Price, storage, and the road to market",
    steps: [
      "Group the conversation by crop.",
      "Ask where the last harvest was sold.",
      "Write the obstacles in the farmers’ words.",
    ],
    paragraphs: [
      "The conversations follow coconut, cashew, and mango into price and storage.",
      "The useful outcome is a one-page public note, short enough to read at a market.",
      "The note uses the farmers’ own words for the obstacles.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "school-gate-explanations",
    title: "School-gate explanations",
    summary:
      "Explaining bursary timelines to parents without collecting private documents on this website.",
    area: "Schools",
    icon: "school",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    status: "Dates and offices, explained in public",
    steps: [
      "State the date a list opens and the date it closes.",
      "Say which office receives the paper.",
      "Do not ask families to upload identity documents to this website.",
    ],
    paragraphs: [
      "Parents are told when a list opens, when it closes, and which office receives the paper.",
      "This website is not an application portal and it does not store learner records.",
      "No bursary is awarded from this page.",
    ],
    featured: false,
    placeholder: true,
  },
  {
    slug: "water-walks",
    title: "Water walks",
    summary:
      "Recording which water points fail first in a dry spell, using places rather than slogans.",
    area: "Inland and rural wards",
    icon: "droplets",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    status: "One water point at a time",
    steps: [
      "Name the water point and the ward.",
      "Note who maintains it, if that is known.",
      "Distinguish a broken pump from a dry source.",
    ],
    paragraphs: [
      "Each note names the water point and the ward, and who maintains it when that is known.",
      "A broken pump and a dry source are written as different problems.",
      "Residents’ names are published only with consent.",
    ],
    featured: false,
    placeholder: true,
  },
  {
    slug: "market-morning",
    title: "Market-morning forums",
    summary:
      "Trader meetings about stalls, levies, opening hours, and the walk to a wholesale market.",
    area: "Market centres",
    icon: "landmark",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    status: "Forums held while the stalls are open",
    steps: [
      "Meet when traders are actually present.",
      "Ask about levies, storage, and security separately.",
      "Publish the forum note where stallholders can see it.",
    ],
    paragraphs: [
      "The forums are held when traders are present.",
      "Levies, storage, and security are discussed separately.",
      "The public note is short enough to read at the stall.",
    ],
    featured: false,
    placeholder: true,
  },
];
