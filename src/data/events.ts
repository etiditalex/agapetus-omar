import { portraits } from "@/data/images";
import type { CalendarEvent } from "@/types/content";

export const calendarEvents: CalendarEvent[] = [
  {
    slug: "malindi-youth-forum",
    title: "Malindi youth listening forum",
    summary:
      "A public conversation on skills, shift work in tourism, and first jobs.",
    date: "2026-11-21T09:00:00+03:00",
    venue: "Malindi",
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
      "Young people in Malindi are invited to talk about skills, tourism shift work, and first jobs.",
      "The public note will list what was asked and which items still need an answer.",
      "Attendance is recorded only when the room agrees to a count.",
    ],
    placeholder: true,
  },
  {
    slug: "kilifi-water-dialogue",
    title: "Kilifi water dialogue",
    summary:
      "A discussion about dry-season water points.",
    date: "2026-12-04T10:00:00+03:00",
    venue: "Kilifi town",
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
      "The dialogue is about named water points in and around Kilifi town.",
      "The topic is the water point, not a family’s private circumstances.",
      "The note will separate a broken pump from a dry source.",
    ],
    placeholder: true,
  },
  {
    slug: "kaloleni-producers-market-day",
    title: "Kaloleni producers’ market day",
    summary:
      "A growers’ meeting on coconut, cashew, and the road to market.",
    date: "2026-12-12T08:30:00+03:00",
    venue: "Kaloleni",
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
      "Growers in Kaloleni meet on coconut, cashew, and the road to market.",
      "The running order keeps price and storage in view.",
      "The note is read back before the meeting closes.",
    ],
    placeholder: true,
  },
  {
    slug: "rabai-education-roundtable",
    title: "Rabai education roundtable",
    summary:
      "A roundtable on school costs and how bursary dates are explained in public.",
    date: "2027-01-16T09:30:00+03:00",
    venue: "Rabai",
    town: "Rabai",
    category: "Education",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    runningOrder: [
      "What this meeting will not collect",
      "School costs parents have named",
      "How a date is published",
      "Corrections from head teachers and parents",
    ],
    paragraphs: [
      "Parents and head teachers in Rabai discuss school costs and how bursary dates are published.",
      "The meeting does not collect identity documents.",
      "No learner is named in the public note.",
    ],
    placeholder: true,
  },
  {
    slug: "ganze-community-baraza",
    title: "Ganze community baraza",
    summary:
      "A ward meeting archived as what was asked, what was answered, and what remains open.",
    date: "2026-10-18T14:00:00+03:00",
    venue: "Ganze",
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
      "The Ganze baraza is recorded under three headings: asked, answered, and still open.",
      "Residents are quoted only with consent.",
      "The public note stays with those three lists.",
    ],
    placeholder: true,
  },
  {
    slug: "magarini-fisheries-session",
    title: "Magarini fisheries listening session",
    summary:
      "A shoreline conversation with fishers and fish traders.",
    date: "2026-09-05T07:30:00+03:00",
    venue: "Magarini",
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
      "The session covers safety at the landing site, ice and shade, and the trader’s side of the catch.",
      "Early morning is when the landing site is at work.",
      "The note keeps the fisher’s points and the trader’s points separate.",
    ],
    placeholder: true,
  },
  {
    slug: "kilifi-south-health-outreach",
    title: "Kilifi South health outreach",
    summary:
      "A conversation about referral paths. It is not a medical camp.",
    date: "2026-08-22T11:00:00+03:00",
    venue: "Kilifi South",
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
      "This outreach explains where to ask official health questions. It is not a clinic.",
      "It does not examine patients or collect symptoms.",
      "Questions that need a health office stay with that office.",
    ],
    placeholder: true,
  },
  {
    slug: "mariakani-traders-meeting",
    title: "Mariakani traders’ meeting",
    summary:
      "A meeting about stalls, storage, and market mornings.",
    date: "2026-07-11T16:00:00+03:00",
    venue: "Mariakani",
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
      "Traders in Mariakani discuss stalls, storage, the wholesale run, and security after dusk.",
      "The meeting is held when the stalls are open.",
      "The public note stays short enough to read at the market.",
    ],
    placeholder: true,
  },
];

export const eventCategories = ["All", "Community", "Youth", "Livelihoods", "Health", "Education"];
