import { portraits } from "@/data/images";
import type { NewsArticle } from "@/types/content";

const author = "Communications desk (placeholder)";

export const newsArticles: NewsArticle[] = [
  {
    slug: "youth-work-along-the-coast",
    title: "A sample briefing on youth work along the Kilifi coast",
    excerpt:
      "How this preview would write about skills, first jobs, and the difference between a photograph and a placement.",
    category: "Youth",
    date: "2026-11-02",
    readMinutes: 3,
    location: "Kilifi County",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "This briefing is sample newsroom copy. It does not report a programme launch, a budget, or a number of young people placed in work.",
      "The layout assumes a reader who is tired of announcements. The opening says what is being proposed, the middle says what is still unknown, and the close says where a later verified note would appear.",
      "On this site, youth work is grouped under livelihoods: a skill, a place to practise it, and a written follow-up. Those three pieces are a standard for future stories, not a claim that they already exist.",
    ],
    placeholder: true,
  },
  {
    slug: "fisheries-listening-note",
    title: "What a fisheries listening session could publish",
    excerpt:
      "A model story about landing sites, women traders, and the discipline of leaving a number out when it was only a guess.",
    category: "Livelihoods",
    date: "2026-10-26",
    readMinutes: 4,
    location: "Coastal wards",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Imagine a morning at a landing site. Fishers want to talk about night safety. Traders want to talk about where the ice goes. A useful story separates those points instead of folding them into “the blue economy”.",
      "This article demonstrates that structure. It names no beach management unit as having endorsed Agapetus Omar, because no such endorsement has been recorded for the preview.",
      "Photographs of boats are illustrative. They should be replaced with consented pictures from actual visits before the site is treated as an official record.",
    ],
    placeholder: true,
  },
  {
    slug: "cashew-coconut-market-conversation",
    title: "Cashew, coconut, and the market conversation",
    excerpt:
      "Sample copy on how a harvest story can follow the crop into price, storage, and the road to market.",
    category: "Livelihoods",
    date: "2026-10-18",
    readMinutes: 3,
    location: "Farming wards",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Kilifi grows crops the coast is known for: coconut, cashew, mango, and the food that fills a weekly market. A fair story asks who bought the last harvest and what spoiled before it could be sold.",
      "Nothing here announces a factory, a cooperative registration, or a county purchase. Those are the kinds of facts that need documents.",
      "The article exists so the news listing can show a livelihoods category beside youth, schools, and health.",
    ],
    placeholder: true,
  },
  {
    slug: "clinics-and-rural-wards",
    title: "Keeping clinics within reach of rural wards",
    excerpt:
      "A placeholder health story about distance, referrals, and why this website will not collect medical details.",
    category: "Health",
    date: "2026-10-09",
    readMinutes: 3,
    location: "Rural wards",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Health stories on a political site can do harm if they invite diagnoses or promise medicine. This sample does neither. It talks about the journey to a clinic as a public issue: road, hours, and referral.",
      "Readers with a medical emergency should use local emergency services. The contact form is a demonstration and is not monitored.",
      "No facility is ranked and no patient is described. That restraint is part of the design.",
    ],
    placeholder: true,
  },
  {
    slug: "bursary-dates-in-plain-language",
    title: "School costs, bursaries, and a public register",
    excerpt:
      "How a future education note could publish dates and offices without asking families to upload documents here.",
    category: "Education",
    date: "2026-09-28",
    readMinutes: 4,
    location: "Schools",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Parents usually ask a simple question: when does the list open, and where does the paper go? This sample story is written to answer that kind of question. It cannot answer it yet, because the dates are not verified.",
      "The preview site will not accept copies of identity cards, birth certificates, or result slips. A bursary portal would be a different product, with a security review.",
      "Until real dates exist, the honest sentence is the one in the notice at the top of every page: this is a design preview.",
    ],
    placeholder: true,
  },
  {
    slug: "water-points-after-a-dry-season",
    title: "Water points after a long dry season",
    excerpt:
      "A model briefing that would name one water point at a time instead of offering a county-wide percentage.",
    category: "Community",
    date: "2026-09-14",
    readMinutes: 3,
    location: "Inland wards",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "After a delayed rain, the argument is rarely abstract. It is a pump, a queue, and the hour a household loses. A careful public note names the place.",
      "This story does not name a broken borehole, because the preview has not surveyed one. The paragraph shows the slot where that name would sit.",
      "Shoreline households are part of the same water priority, but they are not the same story. Salt and erosion need their own note.",
    ],
    placeholder: true,
  },
  {
    slug: "how-a-baraza-is-written-up",
    title: "How a ward baraza is written up",
    excerpt:
      "The sample rule for meeting notes: what was asked, what was answered, and what remains open.",
    category: "Community",
    date: "2026-08-30",
    readMinutes: 3,
    location: "Ward meetings",
    image: portraits.studio,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "A baraza that is only a photograph has not been accounted for. The sample newsroom style is a short note with three headings: asked, answered, still open.",
      "Names of speakers are omitted in this preview. A real note would need consent before quoting a resident.",
      "Events on this website use the same three headings so the public record, when it exists, will look familiar.",
    ],
    placeholder: true,
  },
  {
    slug: "homes-nearest-the-tide",
    title: "Shoreline care and the homes nearest the tide",
    excerpt:
      "Sample language for erosion, salt, and housing that refuses to outrun what residents have actually said.",
    category: "Community",
    date: "2026-08-12",
    readMinutes: 3,
    location: "Shoreline wards",
    image: portraits.green,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "The Indian Ocean is Kilifi’s horizon and, for some homes, a risk. This placeholder article is about tone: specific, local, and unwilling to announce a seawall that has not been designed.",
      "A future story could pair a resident’s question with the office responsible for answering it. This one stops before inventing either.",
      "The image is a generic tropical shore, chosen for the layout, and should be swapped for a consented Kilifi photograph later.",
    ],
    placeholder: true,
  },
  {
    slug: "traders-and-a-fairer-market-morning",
    title: "Traders, stalls, and a fairer market morning",
    excerpt:
      "A sample markets story about levies, storage, and meeting traders when their stalls are open.",
    category: "Livelihoods",
    date: "2026-07-22",
    readMinutes: 3,
    location: "Market centres",
    image: portraits.stripes,
    imageAlt: "Agapetus Omar",
    author,
    paragraphs: [
      "Market policy is often written at an hour when traders cannot attend. The sample proposal is to hold the conversation during a market morning and to publish the note where the stalls are.",
      "No levy has been cut or raised. The article is a format, not a fiscal decision.",
      "It gives the news page a third livelihoods story so category filters have something to show.",
    ],
    placeholder: true,
  },
];

export const newsCategories = ["All", "Community", "Youth", "Livelihoods", "Health", "Education"];
