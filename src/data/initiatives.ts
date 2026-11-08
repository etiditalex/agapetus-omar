import { portraits } from "@/data/images";
import type { Initiative } from "@/types/content";

export const initiatives: Initiative[] = [
  {
    slug: "listening-circuit",
    title: "Ward listening circuit",
    summary:
      "An illustrative round of open conversations, written up and returned to the people who attended.",
    area: "All seven sub-counties",
    icon: "messages",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    status: "Sample format — not scheduled as an official tour",
    steps: [
      "Announce the time and place in more than one language where needed.",
      "Take notes in public, not only in a private book.",
      "Return a short written account of what was asked.",
    ],
    paragraphs: [
      "This initiative shows how community engagement could be organised on the website. It is not a list of meetings that have already happened under this name.",
      "The point of the circuit, in the sample design, is the return visit: a note that people can compare with what they remember saying.",
      "Dates on the Events page that use similar titles are also placeholders.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "landing-site-notes",
    title: "Landing-site notes",
    summary:
      "A sample practice of recording landing-site conditions with fishers and traders, then publishing the note.",
    area: "Coastal wards",
    icon: "fish",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    status: "Sample format — no inspection has been filed",
    steps: [
      "Visit with beach management representatives.",
      "Separate safety, water, shade, and price.",
      "Avoid publishing a number that was only estimated aloud.",
    ],
    paragraphs: [
      "Landing-site notes are a proposed working method. They are not a government inspection report.",
      "The sample standard is deliberately strict about numbers. If a count was not agreed, the note says so.",
      "Women who trade fish are part of the method, because the beach economy does not end with the boat.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "harvest-conversations",
    title: "Harvest conversations",
    summary:
      "Illustrative producer meetings on coconut, cashew, and mango, focused on price and storage.",
    area: "Farming wards",
    icon: "sprout",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    status: "Sample format — no buyer agreement is implied",
    steps: [
      "Group the conversation by crop.",
      "Ask where the last harvest was sold.",
      "Write the obstacles in the farmers’ words.",
    ],
    paragraphs: [
      "These conversations are a layout for future agriculture briefings. They do not announce a purchase programme or a subsidy.",
      "The useful outcome in the sample design is a one-page public note, short enough to read at a market.",
      "Crop names are used because they are widely grown in Kilifi, not because a project has been funded.",
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "school-gate-explanations",
    title: "School-gate explanations",
    summary:
      "A placeholder format for explaining bursary timelines to parents without collecting private documents on this website.",
    area: "Schools",
    icon: "school",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    status: "Sample format — no bursary is awarded here",
    steps: [
      "State the date a list opens and the date it closes.",
      "Say which office receives the paper.",
      "Do not ask families to upload identity documents to this preview site.",
    ],
    paragraphs: [
      "School-gate explanations are a communication idea. This website is not an application portal and it does not store learner records.",
      "The sample copy exists so the community page can show a responsible pattern: clear dates, no false awards, no document uploads.",
      "Any future bursary tool would need its own security review. It is out of scope for this frontend phase.",
    ],
    featured: false,
    placeholder: true,
  },
  {
    slug: "water-walks",
    title: "Water walks",
    summary:
      "An illustrative way to record which water points fail first in a dry spell, using places rather than slogans.",
    area: "Inland and rural wards",
    icon: "droplets",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    status: "Sample format — no borehole is claimed",
    steps: [
      "Name the water point and the ward.",
      "Note who maintains it, if that is known.",
      "Distinguish a broken pump from a dry source.",
    ],
    paragraphs: [
      "Water walks are a proposed reporting habit. They are not evidence that repairs have been completed.",
      "The sample rule is to describe one place at a time. A county-wide percentage can wait until a real survey exists.",
      "Residents’ names would not be published without consent. This preview uses none.",
    ],
    featured: false,
    placeholder: true,
  },
  {
    slug: "market-morning",
    title: "Market-morning forums",
    summary:
      "Sample trader meetings about stalls, levies, opening hours, and the walk to a wholesale market.",
    area: "Market centres",
    icon: "landmark",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    status: "Sample format — levies have not been changed",
    steps: [
      "Meet when traders are actually present.",
      "Ask about levies, storage, and security separately.",
      "Publish the forum note where stallholders can see it.",
    ],
    paragraphs: [
      "Market mornings are offered as a participation format. They do not imply a change in county fees or a new market building.",
      "The design assumes traders have little time, so the public note is short.",
      "Photographs on this preview are portraits of Agapetus Omar.",
    ],
    featured: false,
    placeholder: true,
  },
];
