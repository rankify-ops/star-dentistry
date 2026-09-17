/*
 * STAR dentistry — every word, link and image on the page comes from
 * stardentistry.com.au (home page + its navigation), captured 17 Sep 2026.
 * Nothing here is invented: when the client sends new copy or photos, this
 * file and assets-raw/ are the only places to change.
 */

export const site = {
  name: "STAR dentistry",
  url: "https://www.stardentistry.com.au",
  phone: "(02) 9518 9803",
  tel: "tel:0295189803",
  email: "info@stardentistry.com.au",
  address: "104 Pyrmont Street, Pyrmont, Sydney, NSW 2009",
  maps: "https://www.google.com/maps/search/?api=1&query=STAR+dentistry+104+Pyrmont+Street+Pyrmont+NSW+2009",
  booking: "https://bookings.gettimely.com/stardentistry/bb/book",
  facebook: "https://www.facebook.com/stardentistrypyrmont/",
  instagram: "https://www.instagram.com/stardentistry/",
  youtube: "https://www.youtube.com/c/STARdentistryPyrmont",
};

/** Pages this build doesn't have link to the live site. */
export const live = (path: string) => `${site.url}${path}`;

export type Treatment = { name: string; href: string };
export type Category = { name: string; href: string; items: Treatment[] };

// The live site's navigation, in its order.
export const categories: Category[] = [
  {
    name: "Dental Implants",
    href: "/dental-implants",
    items: [
      { name: "Dental Implant", href: "/dental-implant-sydney" },
      { name: "All on 'X' (Full Mouth Implants)", href: "/all-on-x-full-mouth-implants-sydney" },
    ],
  },
  {
    name: "Teeth Straightening",
    href: "/orthodonticsinvisalign",
    items: [
      { name: "Invisalign Clear Aligners", href: "/invisalign-clear-aligners-sydney" },
      { name: "Braces (Orthodontics)", href: "/braces-orthodontics-sydney" },
    ],
  },
  {
    name: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    items: [
      { name: "Porcelain Veneers", href: "/porcelain-veneers-sydney" },
      { name: "Teeth Whitening", href: "/teeth-whitening-sydney" },
      { name: "Composite Veneers & Bonding", href: "/composite-veneers-bonding-sydney" },
    ],
  },
  {
    name: "Dental Treatments",
    href: "/dental-treatments",
    items: [
      { name: "Emergency Dental Care", href: "/emergency-dental-care-sydney" },
      { name: "Check Up & Clean", href: "/check-up-clean-sydney" },
      { name: "Sedation & Nervous Patients", href: "/sedation-nervous-patients-sydney" },
      { name: "Dental Fillings", href: "/dental-fillings-sydney" },
      { name: "Tooth Extraction", href: "/tooth-extraction-sydney" },
      { name: "Dental Crown", href: "/dental-crown-sydney" },
      { name: "Full or Partial Dentures", href: "/full-or-partial-dentures-sydney" },
      { name: "Wisdom Teeth Extraction", href: "/wisdom-teeth-extraction-sydney" },
      { name: "Gum Disease (Periodontitis)", href: "/gum-disease-periodontitis-sydney" },
      { name: "Root Canal Treatment (Endodontics)", href: "/root-canal-treatment-endodontics-sydney" },
      { name: "Teeth Grinding", href: "/teeth-grinding-sydney" },
    ],
  },
];

export const about: Treatment[] = [
  { name: "Our Practice", href: "/our-practice" },
  { name: "Meet The Team", href: "/meet-the-team" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Blog", href: "/blog" },
  { name: "Offers", href: "/offers" },
];

// "Popular Services" — title, the live tagline, its illustration.
export const popular = [
  { title: "Dental Implant Surgery", line: "The Gold Standard Single Tooth Or Full Mouth Replacement Solution", href: "/dental-implant-sydney", icon: "svc-implant", alt: "Implant tooth", cat: "Dental Implants" },
  { title: "Handcrafted Porcelain Veneers", line: "Create Your Dream Smile With Bespoke Glass Ceramics", href: "/porcelain-veneers-sydney", icon: "svc-veneers", alt: "White teeth", cat: "Cosmetic Dentistry" },
  { title: "Invisalign Clear Aligners", line: "A Nearly Invisible Solution To Effectively Straighten Crooked Teeth", href: "/invisalign-clear-aligners-sydney", icon: "svc-invisalign", alt: "Clear aligner teeth", cat: "Teeth Straightening" },
  { title: "Zoom Teeth Whitening", line: "The Worlds #1 In-Office Teeth Whitening System created by Philips", href: "/teeth-whitening-sydney", icon: "svc-whitening", alt: "Whitened teeth", cat: "Cosmetic Dentistry" },
  { title: "Braces (Orthodontics)", line: "The Most Efficient Way To Straighten Severely Crowded Teeth", href: "/braces-orthodontics-sydney", icon: "svc-braces", alt: "White and metal braces", cat: "Teeth Straightening" },
  { title: "Wisdom Teeth Extractions", line: "Put Your Trust In Our Highly Trained Team Of Skilled Professionals", href: "/wisdom-teeth-extraction-sydney", icon: "svc-wisdom", alt: "Jaw pain", cat: "Dental Treatments" },
] as const;

export const faqs = [
  {
    q: "I am a nervous patient, can you help me?",
    a: "Absolutely, our kind and understanding dentists welcome nervous patients to our practice, as we really enjoy being able to carry out important work that may have been put off by a patient. We also have a visiting sedationist for patients that need to be put to sleep for their treatment, where they will wake up and remember absolutely nothing!",
  },
  { q: "Do you offer payment plans?", a: "Yes! We have partnered with Humm to offer interest free finance options for eligible patients." },
  {
    q: "Can I use my dental health fund?",
    a: "Absolutely, we have on site HICAPS claiming faculty meaning that you can use your valid dental health fund each time you visit our practice.",
  },
  {
    q: "Do you offer out of business hours appointments?",
    a: "Yes! Our clinical hours are until 7pm Monday to Thursday meaning that we have 8 hours per week of after hours dental appointments available.",
  },
  {
    q: "Do you offer regular dental treatments like check up & cleans?",
    a: "Yes absolutely! We are full service dental clinic offering everything from kids check ups, to fillings, extractions, root canal, all the way up to full mouth reconstructions!",
  },
];

// As listed in the live footer.
export const hours = [
  { d: "Monday", h: "9am – 6pm" },
  { d: "Tuesday", h: "9am – 6pm" },
  { d: "Wednesday", h: "9am – 6pm" },
  { d: "Thursday", h: "10am – 7pm" },
  { d: "Friday", h: "9am – 5pm" },
];

// Health funds, suppliers and memberships shown in the live logo strip.
export const logos = [
  { file: "logo-qantas", alt: "Qantas Insurance" },
  { file: "logo-straumann", alt: "Straumann Group" },
  { file: "logo-invisalign", alt: "Invisalign preferred provider" },
  { file: "logo-neodent", alt: "Neodent, a Straumann Group brand" },
  { file: "logo-hicaps", alt: "HICAPS" },
  { file: "logo-nib", alt: "nib" },
  { file: "logo-guhealth", alt: "GU Health" },
  { file: "logo-qip", alt: "QIP Quality Innovation Performance accredited" },
  { file: "logo-clearcorrect", alt: "ClearCorrect" },
  { file: "logo-ada", alt: "Australian Dental Association" },
  { file: "logo-humm", alt: "humm" },
];

export const suburbs =
  "Pyrmont, Sydney CBD, Glebe, Haymarket, Annandale, Rozelle, Balmain, Ultimo, Chippendale, Redfern, Surry Hills, Lilyfield, Newtown";

/*
 * REVIEWS — PLACEHOLDERS. Waiting on the client's real Google reviews.
 * Every entry is flagged `placeholder` and renders a visible "Placeholder" tag;
 * swap in the verbatim review text + reviewer name and delete the flag.
 * The 4.9 star rating is real (the live site's Google badge); the 200+ review
 * count is from the client, 17 Sep 2026.
 */
export type Review = { name: string; role: string; quote: string; placeholder?: boolean };

export const rating = { score: "4.9", count: "200+", source: "Google" };

// The two or three standouts, each given its own section as you scroll.
export const highlights: Review[] = [
  {
    name: "Patient name",
    role: "Google review",
    quote: "Placeholder review — a standout patient review about how calm and unhurried their appointment felt goes here.",
    placeholder: true,
  },
  {
    name: "Patient name",
    role: "Google review",
    quote: "Placeholder review — a standout review about a treatment result, like veneers, Invisalign or implants, goes here.",
    placeholder: true,
  },
  {
    name: "Patient name",
    role: "Google review",
    quote: "Placeholder review — a standout review from a nervous patient about Dr Richard and the team goes here.",
    placeholder: true,
  },
];

export const reviews: Review[] = Array.from({ length: 8 }, (_, i) => ({
  name: `Patient ${i + 1}`,
  role: "Google review",
  quote:
    i % 2
      ? "Placeholder review — the client's real Google review text goes here, word for word."
      : "Placeholder review — the client's real Google review text goes here, word for word. Longer reviews clamp to four lines and open with “Read more”, so one long review never stretches every card in the carousel.",
  placeholder: true,
}));
