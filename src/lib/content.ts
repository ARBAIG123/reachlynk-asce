// ---------------------------------------------------------------------------
// Central copy + data for the Reachlynk marketing site.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Reachlynk",
  email: "hello@reachlynk.studio",
  domain: "reachlynk.studio",
  blurb:
    "A small web studio building clean, fast, conversion-focused websites for businesses that care how they're seen.",
};

export const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
] as const;

// --- Services ---------------------------------------------------------------

export interface Service {
  num: string;
  title: string;
  description: string;
  bullets: string[];
  note: string;
}

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Website design & build",
    description:
      "A custom marketing website designed and built from scratch — no templates, no bloated page builders. One page or thirty, it will load fast, look sharp, and steer visitors toward the one action that matters.",
    bullets: [
      "Custom layouts in your brand language",
      "Built on modern, hand-written code",
      "Mobile-first, accessibility-checked",
      "CMS so your team can edit content",
    ],
    note: "Most projects start here — from $1,900.",
  },
  {
    num: "02",
    title: "E-commerce websites",
    description:
      "Clean storefronts that make buying feel effortless. We set up the catalog, the checkout, and the product pages so the design doesn't fight the sale — it finishes it.",
    bullets: [
      "Catalog, product & checkout design",
      "Payments, shipping & tax configured",
      "Product photography direction",
      "Conversion-focused PDPs",
    ],
    note: "Built on platforms you can run yourself.",
  },
  {
    num: "03",
    title: "Website redesigns",
    description:
      "Your current site is slow, dated, or just not converting. We audit what's dragging it down, keep what works, and rebuild the rest into something you're proud to send people to.",
    bullets: [
      "Full conversion & performance audit first",
      "Content migration, zero downtime",
      "SEO preserved — often improved",
      "Before/after performance report",
    ],
    note: "The fastest way to more customers from the traffic you already have.",
  },
  {
    num: "04",
    title: "Brand & identity",
    description:
      "A website is only as strong as the identity behind it. We refine logos, type, color, and voice into a small system that makes every page feel intentional.",
    bullets: [
      "Logo & wordmark refinement",
      "Type, color & spacing system",
      "Launch-ready brand guidelines",
      "Social & pitch-deck templates",
    ],
    note: "Often paired with a new build.",
  },
  {
    num: "05",
    title: "Conversion copy & SEO foundation",
    description:
      "Words that sell and structure search engines understand. We write the headlines, the proof, and the calls to action — and make sure the technical SEO is in place from day one.",
    bullets: [
      "Messaging & page structure",
      "Copywriting across every page",
      "Technical SEO + schema setup",
      "Google Search Console handover",
    ],
    note: "Included with most builds, offered standalone too.",
  },
  {
    num: "06",
    title: "Care plans",
    description:
      "Websites are living things. We keep yours updated, secure, and fast with a monthly plan — new sections, seasonal campaigns, performance checks, and a real human on call.",
    bullets: [
      "Monthly edits & new pages",
      "Speed & uptime monitoring",
      "Updates, backups & security",
      "Quarterly strategy call",
    ],
    note: "From $190/month, cancel anytime.",
  },
];

// --- Case studies -----------------------------------------------------------

export type MockLayout = "commerce" | "editorial" | "saas" | "local";

export interface Colorway {
  /** page background */
  paper: string;
  /** card / media fills */
  surface: string;
  /** text color */
  ink: string;
  /** brand accent */
  accent: string;
  /** faint wash */
  wash: string;
}

export interface Project {
  slug: string;
  name: string;
  domain: string;
  industry: string;
  category: string;
  year: string;
  tagline: string;
  headline: string;
  summary: string;
  metric: string;
  metricLabel: string;
  services: string[];
  layout: MockLayout;
  colors: Colorway;
}

export const PROJECTS: Project[] = [
  {
    slug: "nord-and-oak",
    name: "Nord & Oak",
    domain: "nordandoak.com",
    industry: "Homeware e-commerce",
    category: "E-commerce",
    year: "2026",
    tagline: "A homeware store that finally feels like home.",
    headline: "Warmer shelves, faster carts",
    summary:
      "Nord & Oak sells handmade homeware — but their old store felt cold and took 6 seconds to load. We rebuilt the catalog around a calmer, editorial layout, cut the bloat, and made the checkout feel like part of the brand.",
    metric: "+41%",
    metricLabel: "online sales in the first 90 days",
    services: ["E-commerce build", "Brand refresh", "Copywriting"],
    layout: "commerce",
    colors: {
      paper: "#f4efe3",
      surface: "#e9e0c9",
      ink: "#2a2418",
      accent: "#a97948",
      wash: "#efe7d3",
    },
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    domain: "fieldnote.app",
    industry: "B2B SaaS",
    category: "SaaS",
    year: "2026",
    tagline: "A SaaS site that sells the product, not the jargon.",
    headline: "Clarity that compounds",
    summary:
      "Fieldnote's platform was excellent and their site was unreadable. We turned a feature dump into a story: one clear value proposition, honest product shots, and pricing pages built to answer the question before it's asked.",
    metric: "0.8s",
    metricLabel: "LCP — and a 98 Lighthouse score",
    services: ["Website build", "Messaging", "CMS"],
    layout: "saas",
    colors: {
      paper: "#eef3ef",
      surface: "#dbe6de",
      ink: "#1f2e26",
      accent: "#46796b",
      wash: "#e2ebe4",
    },
  },
  {
    slug: "lumen-legal",
    name: "Lumen Legal",
    domain: "lumenlegal.co",
    industry: "Law firm",
    category: "Services",
    year: "2025",
    tagline: "Serious law, without the legalese.",
    headline: "A firm that speaks human",
    summary:
      "Lumen Legal had a site that read like a filing cabinet. We introduced calm editorial layouts, plain-language case summaries, and an intake path so clear that potential clients stopped emailing and started booking.",
    metric: "3.2×",
    metricLabel: "more consultation requests",
    services: ["Website redesign", "Copywriting", "SEO"],
    layout: "editorial",
    colors: {
      paper: "#f2f1ec",
      surface: "#e2e3dd",
      ink: "#22292f",
      accent: "#4c6280",
      wash: "#e9eae4",
    },
  },
  {
    slug: "basalt-coffee",
    name: "Basalt Coffee",
    domain: "basaltcoffee.com",
    industry: "Local café",
    category: "Local business",
    year: "2025",
    tagline: "A neighborhood café, open online too.",
    headline: "Local warmth, digital reach",
    summary:
      "Basalt needed an online ordering channel without losing its neighborhood soul. We built a warm, honest site with a two-tap ordering flow, a menu that updates itself, and a loyalty hook that brings regulars back.",
    metric: "1.9×",
    metricLabel: "weekly online orders in month one",
    services: ["Website build", "Online ordering", "Photography direction"],
    layout: "local",
    colors: {
      paper: "#f1e9de",
      surface: "#e5d8c5",
      ink: "#2c1f17",
      accent: "#bf5a2c",
      wash: "#eadfd1",
    },
  },
  {
    slug: "atelier-aura",
    name: "Atelier Aura",
    domain: "atelieraura.studio",
    industry: "Beauty studio",
    category: "Services",
    year: "2025",
    tagline: "Calm booking for a calm studio.",
    headline: "Beauty in the booking flow",
    summary:
      "Atelier Aura's bookings lived on a phone line and a spreadsheet. We designed a serene, image-led site with a booking flow that matches the studio's tone — and cut the admin work that was eating their evenings.",
    metric: "+27%",
    metricLabel: "bookings with zero extra ad spend",
    services: ["Website design", "Booking integration"],
    layout: "editorial",
    colors: {
      paper: "#f3ecef",
      surface: "#e6d8dd",
      ink: "#33252d",
      accent: "#8d6580",
      wash: "#ecdfe3",
    },
  },
  {
    slug: "pivot-health",
    name: "Pivot Health",
    domain: "pivothealth.co",
    industry: "Physiotherapy",
    category: "Local business",
    year: "2024",
    tagline: "A clinic site patients actually read.",
    headline: "Healthier pages, fuller diary",
    summary:
      "Three clinics, one outdated site, and a reception team drowning in calls. We rebuilt Pivot's site around trust — clear services, real answers to common worries — and routed every inquiry into a simple self-service form.",
    metric: "-43%",
    metricLabel: "admin phone calls in two months",
    services: ["Website redesign", "Multi-location SEO"],
    layout: "local",
    colors: {
      paper: "#eef1ee",
      surface: "#dde4de",
      ink: "#21302a",
      accent: "#5f8578",
      wash: "#e4e9e4",
    },
  },
];

// --- Pricing -----------------------------------------------------------------

export interface Plan {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  icon: "rocket" | "star" | "crown";
  popular: boolean;
  note: string;
}

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$1,900",
    cadence: "one-time",
    tagline: "A polished single page that gets you online properly.",
    features: [
      "One high-converting page",
      "Clean, custom design — no template",
      "Mobile-first & accessibility checked",
      "Contact form + analytics setup",
      "2 weeks to launch",
      "Two revision rounds",
    ],
    icon: "rocket",
    popular: false,
    note: "Great for launches, events & MVPs.",
  },
  {
    name: "Business",
    price: "$4,900",
    cadence: "one-time",
    tagline: "A full website built to turn visitors into customers.",
    features: [
      "Up to 7 custom pages",
      "Editable CMS for your team",
      "Conversion copywriting included",
      "Technical SEO + schema",
      "4 weeks to launch",
      "Unlimited revisions during build",
      "30 days of post-launch support",
      "Priority email support",
    ],
    icon: "star",
    popular: true,
    note: "The sweet spot for growing businesses.",
  },
  {
    name: "Premium",
    price: "$9,900",
    cadence: "one-time",
    tagline: "Design, development and strategy with nothing left out.",
    features: [
      "Everything in Business",
      "Unlimited pages & advanced layouts",
      "Integrations: booking, payments, CRM",
      "Custom motion & interactions",
      "Brand refinement included",
      "6 weeks to launch",
      "60 days of post-launch support",
      "Quarterly performance review",
    ],
    icon: "crown",
    popular: false,
    note: "For brands that want it unforgettable.",
  },
];

export const ADDONS = [
  { name: "Care plan", price: "from $190/mo", desc: "Monthly edits, speed & security." },
  { name: "E-commerce setup", price: "from $1,500", desc: "Store, checkout, payments." },
  { name: "Blog & content engine", price: "from $900", desc: "CMS + writing workflow." },
];

export const PRICING_FAQS = [
  {
    q: "What happens after I send an inquiry?",
    a: "You'll hear from a human — usually within one business day — for a short call about your goals. Within a week you'll receive a fixed proposal: scope, price, and dates. No hourly surprises, no sales scripts.",
  },
  {
    q: "Are the prices really fixed?",
    a: "Yes. Every plan has a fixed scope and a fixed price. If we discover something genuinely out of scope mid-build, we'll tell you before we do it, with a quote — not after, on an invoice.",
  },
  {
    q: "How long does a project take?",
    a: "A Starter page ships in about two weeks, a Business site in about four, and Premium projects typically land within six. You'll get a launch date in your proposal — we treat it as a promise.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle the hosting, the domain, the analytics, and the handover. You'll get a short training call and a CMS you can edit without touching code.",
  },
  {
    q: "Will my site work with my existing tools?",
    a: "Almost certainly. Booking systems, CRMs, payment providers, email tools — we integrate with the services you already use and recommend better ones when it makes sense.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Design feedback is part of the process — Business and Premium plans include unlimited revision rounds until launch. We iterate in the open, so there are no big surprises at the end.",
  },
];

// --- Process -----------------------------------------------------------------

export interface ProcessStep {
  num: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const PROCESS: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    duration: "Week 1",
    description:
      "We start with your business, not your website. A short call, a look at your current site (or competitors'), and honest questions about what success looks like in numbers.",
    deliverables: ["Goals & audience map", "Free website audit", "Fixed proposal & timeline"],
  },
  {
    num: "02",
    title: "Structure",
    duration: "Week 2",
    description:
      "Before any pixels, we agree on what every page needs to do. We map the sitemap, the messaging, and the calls to action — so the design has a job, not just a look.",
    deliverables: ["Sitemap & wireframes", "Messaging outline", "Content checklist"],
  },
  {
    num: "03",
    title: "Design",
    duration: "Weeks 2–3",
    description:
      "We design in your brand, on real content, starting with the pages that matter most. You review in the browser, leave comments, and watch the site take shape — no abstract PDFs.",
    deliverables: ["High-fidelity page designs", "Interactive prototype", "Revisions until it's right"],
  },
  {
    num: "04",
    title: "Build",
    duration: "Weeks 3–5",
    description:
      "Design becomes clean, hand-written code — fast by default, not as an afterthought. Copy, images and integrations all land here, and you see a live staging link from day one.",
    deliverables: ["Live staging site", "CMS training", "Speed & SEO tune-up"],
  },
  {
    num: "05",
    title: "Launch",
    duration: "Week 6",
    description:
      "We test on real devices, wire up analytics, point your domain over, and celebrate. Launch day is calm because everything was checked twice — with a support window after.",
    deliverables: ["QA on 20+ device sizes", "Analytics & Search Console", "30–60 day support window"],
  },
];

// --- Social proof ------------------------------------------------------------

export const STATS = [
  { value: 140, suffix: "+", label: "sites launched since 2019" },
  { value: 98, suffix: "", label: "average Lighthouse score" },
  { value: 2.4, suffix: "×", label: "average lift in conversions", decimals: 1 },
  { value: 6, suffix: " wks", label: "average time from brief to launch" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Reachlynk rebuilt our site in four weeks and sales went up 41% in the first quarter. The process was calm, the communication was instant, and the design still turns heads.",
    name: "Maren Ellison",
    role: "Founder, Nord & Oak",
  },
  {
    quote:
      "They asked better questions than agencies three times their size. The site they delivered is the reason our trial signups doubled — visitors finally understand what we do.",
    name: "Dev Okafor",
    role: "CEO, Fieldnote",
  },
  {
    quote:
      "Our old site was an embarrassment that we paid a lot for. Reachlynk made the whole thing feel easy — and for the first time, clients tell us they found us online.",
    name: "Priya Raman",
    role: "Partner, Lumen Legal",
  },
];

export const CLIENT_MARQUEE = [
  "Nord & Oak",
  "Lumen Legal",
  "Fieldnote",
  "Basalt Coffee",
  "Atelier Aura",
  "Pivot Health",
  "Solace Architecture",
  "Meridian Labs",
  "Kite & Co.",
  "Foundry Works",
];

// --- About -------------------------------------------------------------------

export const VALUES = [
  {
    title: "Performance is respect",
    desc: "A fast site respects your visitors' time. We treat every kilobyte as a decision — your site should feel instant, everywhere.",
  },
  {
    title: "Clarity over clever",
    desc: "Trends fade; clear communication doesn't. We design so a first-time visitor understands what you do within seconds.",
  },
  {
    title: "Honest by default",
    desc: "Fixed prices, real timelines, no mystery invoices. If something isn't right for you, we'll say so — even when it costs us the job.",
  },
  {
    title: "Built to be kept",
    desc: "We hand over sites you can run. Clean code, an editable CMS, and documentation a non-technical person can actually follow.",
  },
];

export const TIMELINE = [
  {
    year: "2019",
    title: "Two designers, one laptop",
    desc: "Reachlynk starts as a two-person studio building launch pages for friends' startups — and learning that most agencies overcharge and under-deliver.",
  },
  {
    year: "2021",
    title: "The 40-site year",
    desc: "Word of mouth outsells our own site. We formalize the fixed-price model after hearing the same horror stories about hourly billing.",
  },
  {
    year: "2023",
    title: "E-commerce & beyond",
    desc: "A dedicated commerce practice launches. We ship our 100th site and finally hire someone to keep our own website updated.",
  },
  {
    year: "2026",
    title: "A studio, not a factory",
    desc: "A deliberately small team of eight. We still take on a limited number of projects each quarter — quality over volume, every time.",
  },
];

export const TEAM = [
  { initials: "EM", name: "Elena Marsh", role: "Founder & Creative Director" },
  { initials: "TO", name: "Tomás Okafor", role: "Design Lead" },
  { initials: "SL", name: "Sofia Lindqvist", role: "Head of Development" },
  { initials: "JC", name: "Jonas Chen", role: "Strategy & Copy" },
];

export const BUDGETS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export const BUSINESS_TYPES = [
  "SaaS / tech company",
  "E-commerce / retail",
  "Professional services",
  "Local business",
  "Healthcare / wellness",
  "Nonprofit / community",
  "Other",
];
