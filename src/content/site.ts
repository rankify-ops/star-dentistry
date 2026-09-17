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
 * REVIEWS — real, from the STAR dentistry Google Business profile (captured
 * 18 Sep 2026). Wording is verbatim: don't tidy, trim or reword it. Only
 * reviews whose full text was visible are used — anything Google truncated
 * with "… More" is left out rather than cut mid-sentence.
 *
 * Display names are as Google shows them, with an all-caps one title-cased.
 */
export type Review = { name: string; role: string; quote: string; placeholder?: boolean };

export const rating = { score: "4.9", count: "200+", source: "Google" };

const GOOGLE = "Google review";

// The three that best show the service: the result, the unhurried care, and
// turning a bad past experience around. Each gets its own band on the page.
export const highlights: Review[] = [
  {
    name: "Brendon Clark",
    role: GOOGLE,
    quote:
      "I love my teeth! They look amazing. After doing a lot of research I couldn’t be happier with my choice. Highly recommend Dr Tippett. He was spot on with his advice and work. The process has been seamless. He got straight to the point and got the job done. I confidently smile now.",
  },
  {
    name: "Michaelangelo Francis Setiawan",
    role: GOOGLE,
    quote:
      "The team here doesn’t rush you through appointments just to fit more patients in, they take their time to do things properly which shows in the quality of work you end up with",
  },
  {
    name: "Burcu Vachan",
    role: GOOGLE,
    quote:
      "Dr Tippett was excellent in helping extract my infected wisdom tooth roots without pain or discomfort. His professionalism and expertise as well as the support of his team really helped turn my previous negative experience into a positive one. Would highly recommend.",
  },
];

export const reviews: Review[] = [
  {
    name: "Emily",
    role: GOOGLE,
    quote:
      "I am so happy with my experience and results with Dr Tippet at Star Dentistry in Pyrmont. He has designed my treatment with so much attention to detail so my teeth are perfection. Best value for my investment and the whole team are so kind, professional and organised, so impressed and highly recommend.",
  },
  {
    name: "Josh Matthews",
    role: GOOGLE,
    quote:
      "Had a surprisingly amazing experience here! The staff was extremely welcoming and the dentist did a great job of explaining exactly what was wrong and how to fix it. I came in for a wisdom tooth extraction and the process was lightning fast and completely painless. Highly recommend!",
  },
  {
    name: "Kierra Morris",
    role: GOOGLE,
    quote: "Dr Richard Tippett’s precision with my crown work meant zero adjustments needed, fit was perfect immediately.",
  },
  {
    name: "AV",
    role: GOOGLE,
    quote:
      "This is the best clinic to visit for dental treatment. The dentist performs the work with great cleanliness, care, and professionalism. Both the dentist and the staff are polite, friendly, and helpful, offering excellent service. Thank you again.",
  },
  {
    name: "yaelah Gi",
    role: GOOGLE,
    quote: "Clinic runs on time every visit. EVERY visit. Still surprises me honestly",
  },
  {
    name: "Kulander C",
    role: GOOGLE,
    quote: "Dr Richard is amazing, my smile after the work completely exceeded my expectations. Highly recommend.",
  },
  {
    name: "Niswatun Khoiroh",
    role: GOOGLE,
    quote:
      "The flexible payment plans available at STAR dentistry Pyrmont made it possible for me to proceed with my dental implants without financial strain, and the outstanding results have been well worth the investment.",
  },
  {
    name: "Patrik Vachan",
    role: GOOGLE,
    quote: "Dr Tippett is very knowledgeable and professional. He takes great care in his work. I highly recommend him.",
  },
  {
    name: "Nathaniel Colby",
    role: GOOGLE,
    quote: "The composite bonding on my front teeth looks so seamless that even my closest friends cannot tell where the work was done",
  },
  {
    name: "Tina Oli",
    role: GOOGLE,
    quote:
      "STAR dentistry is a definite destination for all your dental concerns. All the team members ensures you are taken good care of. Reception follow up well with all the appointments. Highly recommend!",
  },
  {
    name: "Chellin Meilani",
    role: GOOGLE,
    quote: "Reception staff booked my emergency visit without any fuss, made a stressful situation feel completely manageable from the first call.",
  },
  {
    name: "Rifki Raihanul",
    role: GOOGLE,
    quote: "Root canal treatment was performed expertly. The procedure was much more comfortable than expected.",
  },
  {
    name: "kris tina",
    role: GOOGLE,
    quote:
      "I highly recommend Star dentistry. All the team from reception staff to doctor are very professional and knowledgeable and procedure done was very thorough. Moreover, educative session at the end was an eye opener.",
  },
  {
    name: "Shreya Upadhaya",
    role: GOOGLE,
    quote:
      "STAR dentistry is very well equipped and a clean practice. Everything is systematic and of course treatment was very painless and well-explained. Highly recommend!",
  },
  {
    name: "Alfin Septiawan",
    role: GOOGLE,
    quote: "Emergency dental visit handled professionally. From reception to treatment, the team was efficient while maintaining a calm atmosphere.",
  },
  {
    name: "JB Barcelon",
    role: GOOGLE,
    quote: "Highly recommend this clinic. Friendly staff, excellent service, and a comfortable experience every time.",
  },
  {
    name: "Jayla Griffin",
    role: GOOGLE,
    quote: "Been coming here for two years now and it’s been consistent every single time",
  },
  {
    name: "Reid Bevan",
    role: GOOGLE,
    quote: "This was my second visit to STAR and Dr Grace. Her and the staff were knowledgeable, calming and personable. This is a dentist I actually enjoy visiting!!",
  },
];
