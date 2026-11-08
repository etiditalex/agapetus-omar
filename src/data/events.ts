import { portraits } from "@/data/images";
import type { CalendarEvent } from "@/types/content";

export const calendarEvents: CalendarEvent[] = [
  {
    slug: "malindi-youth-forum",
    title: "Malindi youth listening forum",
    summary:
      "A sample public conversation on skills, shift work in tourism, and first jobs. The venue is not confirmed.",
    date: "2026-11-21T09:00:00+03:00",
    venue: "Venue placeholder, Malindi",
    town: "Malindi",
    category: "Youth",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "Welcome and explanation that the note will be published",
      "Skills and first jobs",
      "Tourism shift work",
      "What remains unanswered",
    ],
    paragraphs: [
      "This event is a calendar placeholder so the website can show an upcoming engagement. It has not been booked with a hall, a school, or a youth group.",
      "If it were real, the public note would list what young people asked and which items had no answer yet. Attendance would be published only if counting was agreed in the room.",
      "The date is illustrative and can be replaced when a genuine diary exists.",
    ],
    placeholder: true,
  },
  {
    slug: "kilifi-water-dialogue",
    title: "Kilifi water dialogue",
    summary:
      "A sample discussion about dry-season water points. No repair is announced.",
    date: "2026-12-04T10:00:00+03:00",
    venue: "Venue placeholder, Kilifi town",
    town: "Kilifi",
    category: "Community",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "How notes will be taken",
      "Named water points",
      "The difference between a broken pump and a dry source",
      "Next public note",
    ],
    paragraphs: [
      "The dialogue is fictional scheduling for the interface. It shows time, town, and a running order without pretending a county department has convened it.",
      "Residents would not be asked to share household registers. The topic is the water point, not a family’s private circumstances.",
      "Use the contact form only to test validation. It will not reserve a seat.",
    ],
    placeholder: true,
  },
  {
    slug: "kaloleni-producers-market-day",
    title: "Kaloleni producers’ market day",
    summary:
      "An illustrative growers’ meeting on coconut, cashew, and the road to market.",
    date: "2026-12-12T08:30:00+03:00",
    venue: "Market placeholder, Kaloleni",
    town: "Kaloleni",
    category: "Livelihoods",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "Crop-by-crop introductions",
      "Where the last harvest was sold",
      "Storage and transport",
      "Reading back the note",
    ],
    paragraphs: [
      "Market day is placed on the calendar to demonstrate an upcoming livelihood event. No producer group has been asked to host it.",
      "The sample running order keeps price and storage in view, which matches the farms priority.",
      "Photographs on this preview are portraits of Agapetus Omar.",
    ],
    placeholder: true,
  },
  {
    slug: "rabai-education-roundtable",
    title: "Rabai education roundtable",
    summary:
      "A placeholder roundtable on school costs and how bursary dates could be explained in public.",
    date: "2027-01-16T09:30:00+03:00",
    venue: "Venue placeholder, Rabai",
    town: "Rabai",
    category: "Education",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "What this meeting will not collect",
      "School costs parents named in earlier sample copy",
      "How a date would be published",
      "Corrections from head teachers and parents",
    ],
    paragraphs: [
      "This roundtable is not on any school’s official diary. It exists so the events archive can include education.",
      "The first agenda item is deliberate: the meeting would not collect identity documents.",
      "No learner is named anywhere in the sample record.",
    ],
    placeholder: true,
  },
  {
    slug: "ganze-community-baraza",
    title: "Ganze community baraza",
    summary:
      "A past-event layout showing how a ward meeting would be archived after the day.",
    date: "2026-10-18T14:00:00+03:00",
    venue: "Grounds placeholder, Ganze",
    town: "Ganze",
    category: "Community",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "Asked",
      "Answered",
      "Still open",
    ],
    paragraphs: [
      "This baraza did not take place under this website’s authority. The record is an example of a past event page.",
      "The three-part running order matches the sample rule used in the newsroom: asked, answered, still open.",
      "Because it is a placeholder, the three lists are described in the article body rather than filled with invented resident quotes.",
    ],
    placeholder: true,
  },
  {
    slug: "magarini-fisheries-session",
    title: "Magarini fisheries listening session",
    summary:
      "A sample archive page for a shoreline conversation with fishers and fish traders.",
    date: "2026-09-05T07:30:00+03:00",
    venue: "Landing site placeholder, Magarini",
    town: "Magarini",
    category: "Livelihoods",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "Safety at the landing site",
      "Ice, shade, and water",
      "The trader’s side of the catch",
    ],
    paragraphs: [
      "The session is a past-tense design sample. It should not be cited as a meeting that fishers attended.",
      "Early morning is used because that is when landing sites are at work. The clock time is illustrative.",
      "A real archive page would link to a note. This one links only to other sample events.",
    ],
    placeholder: true,
  },
  {
    slug: "kilifi-south-health-outreach",
    title: "Kilifi South health outreach",
    summary:
      "An archived sample page about explaining referral paths. It is not a medical camp.",
    date: "2026-08-22T11:00:00+03:00",
    venue: "Centre placeholder, Kilifi South",
    town: "Kilifi South",
    category: "Health",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "What the outreach is not",
      "The journey to a referral",
      "Questions that need a health office, not a campaign desk",
    ],
    paragraphs: [
      "This page is intentionally not a medical camp. A campaign website should not impersonate a clinic.",
      "The sample outreach would explain where to ask official health questions. It would not examine patients or collect symptoms.",
      "The contact form remains a demonstration and is not a helpline.",
    ],
    placeholder: true,
  },
  {
    slug: "mariakani-traders-meeting",
    title: "Mariakani traders’ meeting",
    summary:
      "A past sample meeting about stalls, storage, and market mornings.",
    date: "2026-07-11T16:00:00+03:00",
    venue: "Market placeholder, Mariakani",
    town: "Mariakani",
    category: "Livelihoods",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "Stalls and storage",
      "The wholesale run",
      "Security after dusk",
    ],
    paragraphs: [
      "Mariakani appears here as a known Kilifi market town, not as confirmation that traders hosted Agapetus Omar.",
      "The archive layout is what the page is for: town, hour, and a short account that refuses fake attendance figures.",
      "Replace this record, or delete it, when a real diary is ready.",
    ],
    placeholder: true,
  },
];

export const eventCategories = ["All", "Community", "Youth", "Livelihoods", "Health", "Education"];
