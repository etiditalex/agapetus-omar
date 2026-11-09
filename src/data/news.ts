import { portraits } from "@/data/images";
import type { NewsArticle } from "@/types/content";

const author = "Agapetus Omar";

export const newsArticles: NewsArticle[] = [
  {
    slug: "youth-work-along-the-coast",
    title: "Youth work along the Kilifi coast",
    excerpt:
      "Skills, first jobs, and the difference between a photograph and a placement.",
    category: "Youth",
    date: "2026-11-02",
    readMinutes: 3,
    location: "Kilifi County",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Youth work along the Kilifi coast is about a skill, a place to practise it, and a written follow-up.",
      "A useful note says what is being proposed, what is still unknown, and where the next update will appear.",
      "The aim is practical work for young people: skills, first jobs, and a record of what was agreed.",
    ],
    placeholder: true,
  },
  {
    slug: "fisheries-listening-note",
    title: "A fisheries listening session",
    excerpt:
      "Landing sites, women traders, and leaving a number out when it was only a guess.",
    category: "Livelihoods",
    date: "2026-10-26",
    readMinutes: 4,
    location: "Coastal wards",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "At a landing site, fishers talk about night safety and traders talk about where the ice goes. Those points stay separate.",
      "Fishers, traders, and beach management each have a different part of the morning, and the note should keep them distinct.",
    ],
    placeholder: true,
  },
  {
    slug: "cashew-coconut-market-conversation",
    title: "Cashew, coconut, and the market conversation",
    excerpt:
      "How a harvest story follows the crop into price, storage, and the road to market.",
    category: "Livelihoods",
    date: "2026-10-18",
    readMinutes: 3,
    location: "Farming wards",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Kilifi grows crops the coast is known for: coconut, cashew, mango, and the food that fills a weekly market.",
      "Price, storage, and the road to market belong in the same conversation as the crop itself.",
    ],
    placeholder: true,
  },
  {
    slug: "clinics-and-rural-wards",
    title: "Keeping clinics within reach of rural wards",
    excerpt:
      "Distance, referrals, and why a campaign site should not collect medical details.",
    category: "Health",
    date: "2026-10-09",
    readMinutes: 3,
    location: "Rural wards",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "The journey to a clinic is a public issue: the road, the hours, and the referral.",
      "Anyone with a medical emergency should use local emergency services. This page does not collect symptoms or rank facilities.",
      "A campaign note can explain where to ask a health question. It should not try to be a clinic.",
    ],
    placeholder: true,
  },
  {
    slug: "bursary-dates-in-plain-language",
    title: "School costs, bursaries, and a public register",
    excerpt:
      "Publish dates and offices without asking families to upload documents here.",
    category: "Education",
    date: "2026-09-28",
    readMinutes: 4,
    location: "Schools",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Parents usually ask a simple question: when does the list open, and where does the paper go?",
      "This website will not accept copies of identity cards, birth certificates, or result slips.",
      "A public note should give the opening date, the closing date, and the office that receives the paper.",
    ],
    placeholder: true,
  },
  {
    slug: "water-points-after-a-dry-season",
    title: "Water points after a long dry season",
    excerpt:
      "Name one water point at a time instead of offering a county-wide percentage.",
    category: "Community",
    date: "2026-09-14",
    readMinutes: 3,
    location: "Inland wards",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "After a delayed rain, the argument is rarely abstract. It is a pump, a queue, and the hour a household loses. A careful public note names the place.",
      "A careful public note names the water point and the ward, and it separates a broken pump from a dry source.",
      "Shoreline households are part of the same water priority, but they are not the same story. Salt and erosion need their own note.",
    ],
    placeholder: true,
  },
  {
    slug: "how-a-baraza-is-written-up",
    title: "How a ward baraza is written up",
    excerpt:
      "Meeting notes should say what was asked, what was answered, and what remains open.",
    category: "Community",
    date: "2026-08-30",
    readMinutes: 3,
    location: "Ward meetings",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "A baraza that is only a photograph has not been accounted for. The note uses three headings: asked, answered, still open.",
      "A resident is quoted only with consent.",
      "The same three headings are used so a later public record is easy to follow.",
    ],
    placeholder: true,
  },
  {
    slug: "homes-nearest-the-tide",
    title: "Shoreline care and the homes nearest the tide",
    excerpt:
      "Erosion, salt, and housing, kept to what residents have actually said.",
    category: "Community",
    date: "2026-08-12",
    readMinutes: 3,
    location: "Shoreline wards",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "The Indian Ocean is Kilifi’s horizon and, for some homes, a risk. The note stays specific and local.",
      "A resident’s question belongs with the office responsible for answering it.",
      "No seawall is announced here. The point is to record what people living nearest the tide have said.",
    ],
    placeholder: true,
  },
  {
    slug: "traders-and-a-fairer-market-morning",
    title: "Traders, stalls, and a fairer market morning",
    excerpt:
      "Levies, storage, and meeting traders when their stalls are open.",
    category: "Livelihoods",
    date: "2026-07-22",
    readMinutes: 3,
    location: "Market centres",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Market policy is often written at an hour when traders cannot attend. The conversation belongs on a market morning, and the note belongs where the stalls are.",
      "Levies, storage, and security are separate questions.",
      "A short public note is more useful than a long statement written after the market has closed.",
    ],
    placeholder: true,
  },
];

export const newsCategories = ["All", "Community", "Youth", "Livelihoods", "Health", "Education"];
