// ---------------------------------------------------------------------------
// Central copy + data for the Reachlynk marketing site.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Reachlynk",
  email: "hello.reachlynk@gmail.com",
  domain: "reachlynk.com",
  blurb:
    "A web studio building modern, high-performance websites that help restaurants, cafés, hotels, and local businesses grow online — from clicks to clients.",
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
      "A modern website designed and built from scratch for restaurants, cafés, hotels, shops, and local businesses — no templates, no bloated page builders. One page or thirty, it will load fast, look sharp, and steer visitors toward the one action that matters.",
    bullets: [
      "Custom layouts in your brand language",
      "Built on modern, hand-written code",
      "Mobile-first — most visitors arrive by phone",
      "CMS so your team can edit content",
    ],
    note: "Most projects start here — from $1,900.",
  },
  {
    num: "02",
    title: "Restaurant & café websites",
    description:
      "The menu is the hero, and the reservation is the goal. We design sites that load your menu in under a second, make hungry people book or order in two taps, and show up beautifully in search when guests are nearby.",
    bullets: [
      "Menu-first design, readable in seconds",
      "Reservations & online ordering set up",
      "Google Business & maps integration",
      "Food photography direction",
    ],
    note: "Built for real service — lunch rush included.",
  },
  {
    num: "03",
    title: "Hotels & direct booking",
    description:
      "Every booking made on an OTA costs you commission. We build calm, story-led hotel sites with a booking engine that guests actually finish — so more stays happen direct, where the margin is yours.",
    bullets: [
      "Live availability & direct booking engine",
      "Rooms, packages & local-guide pages",
      "Channel-manager friendly integration",
      "Direct-vs-OTA analytics dashboard",
    ],
    note: "Often pays for itself in the first season.",
  },
  {
    num: "04",
    title: "Local business redesigns",
    description:
      "Your current site is slow, dated, or just not bringing people through the door. We audit what's costing you customers, keep what works, and rebuild the rest — with local search handled properly this time.",
    bullets: [
      "Conversion & speed audit first",
      "Local SEO: maps, reviews & search presence",
      "Content migration, zero downtime",
      "Before/after performance report",
    ],
    note: "The fastest way to more customers from the traffic you already have.",
  },
  {
    num: "05",
    title: "Brand & identity",
    description:
      "A website is only as strong as the identity behind it. We refine logos, type, color, and voice into a small system that makes every page — and every menu, sign, and post — feel intentional.",
    bullets: [
      "Logo & wordmark refinement",
      "Type, color & spacing system",
      "Menu & print-ready brand files",
      "Social & campaign templates",
    ],
    note: "Often paired with a new build.",
  },
  {
    num: "06",
    title: "Care plans",
    description:
      "Websites are living things — especially in hospitality, where menus and seasons change. We keep yours updated, secure, and fast with a monthly plan and a real human on call.",
    bullets: [
      "Menu, seasonal & page updates",
      "Speed, uptime & review monitoring",
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
  /** optional label for the mockup's main call-to-action */
  mockCta?: string;
  /** optional labels for the "local" mockup tiles */
  mockTiles?: [string, string, string];
}

export const PROJECTS: Project[] = [
  {
    slug: "sable-and-thyme",
    name: "Sable & Thyme",
    domain: "sableandthyme.com",
    industry: "Neighbourhood restaurant",
    category: "Restaurants",
    year: "2026",
    tagline: "A menu that reads like a promise — and a reservation flow that keeps it.",
    headline: "Full tables, half the phone calls",
    summary:
      "Sable & Thyme serves exceptional seasonal food, but its menu hid behind PDFs and its phone rang all day. We rebuilt the site around what hungry people actually want — a menu that loads in under a second, photos that make you book, and a reservation flow that takes two taps.",
    metric: "+2.8×",
    metricLabel: "online reservation requests in the first quarter",
    services: ["Website design", "Reservations", "Copywriting"],
    layout: "local",
    colors: {
      paper: "#f4eee5",
      surface: "#e9dbc8",
      ink: "#2b2017",
      accent: "#a8552f",
      wash: "#ecdfcf",
    },
    mockCta: "Book a table",
    mockTiles: ["Seasonal menu", "Reservations", "Private dining"],
  },
  {
    slug: "the-marlowe",
    name: "The Marlowe",
    domain: "themarlowe.co",
    industry: "Boutique hotel",
    category: "Hotels",
    year: "2026",
    tagline: "A small hotel with a healthy direct-booking habit.",
    headline: "Guests who skip the middlemen",
    summary:
      "The Marlowe's guests found them on booking sites — then rebooked through them, paying commission every time. We built a calm, story-led site with live availability and a two-minute checkout, and made the direct stay feel like the upgrade it is.",
    metric: "−31%",
    metricLabel: "OTA commission as a share of bookings within six months",
    services: ["Hotel website", "Direct booking engine", "Content"],
    layout: "commerce",
    colors: {
      paper: "#f1efe9",
      surface: "#ddd8cb",
      ink: "#26221a",
      accent: "#7d6a4a",
      wash: "#e7e3d8",
    },
    mockCta: "Book your stay",
  },
  {
    slug: "basalt-coffee",
    name: "Basalt Coffee",
    domain: "basaltcoffee.com",
    industry: "Specialty café",
    category: "Cafés",
    year: "2026",
    tagline: "A neighborhood café, open online too.",
    headline: "Local warmth, digital reach",
    summary:
      "Basalt needed an online ordering channel without losing its neighborhood soul. We built a warm, honest site with a two-tap ordering flow, a menu that updates itself, and a loyalty hook that brings regulars back week after week.",
    metric: "1.9×",
    metricLabel: "weekly online orders in the first month",
    services: ["Website design", "Online ordering", "Photography direction"],
    layout: "local",
    colors: {
      paper: "#f1e9de",
      surface: "#e5d8c5",
      ink: "#2c1f17",
      accent: "#bf5a2c",
      wash: "#eadfd1",
    },
    mockCta: "Order online",
    mockTiles: ["Seasonal menu", "Merch", "Events"],
  },
  {
    slug: "atelier-aura",
    name: "Atelier Aura",
    domain: "atelieraura.studio",
    industry: "Beauty studio",
    category: "Local services",
    year: "2026",
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
    mockCta: "Book a visit",
  },
  {
    slug: "pivot-health",
    name: "Pivot Health",
    domain: "pivothealth.co",
    industry: "Physiotherapy clinic",
    category: "Local services",
    year: "2026",
    tagline: "A clinic website that patients actually read.",
    headline: "Healthier pages, fuller diary",
    summary:
      "Three clinics, one outdated site, and a reception team drowning in calls. We rebuilt Pivot's site around trust — clear treatments, honest answers to common worries — and routed every inquiry into a simple self-service booking form.",
    metric: "−43%",
    metricLabel: "admin phone calls within two months",
    services: ["Website redesign", "Local SEO"],
    layout: "local",
    colors: {
      paper: "#eef1ee",
      surface: "#dde4de",
      ink: "#21302a",
      accent: "#5f8578",
      wash: "#e4e9e4",
    },
    mockCta: "Book an appointment",
    mockTiles: ["Treatments", "The team", "Locations"],
  },
  {
    slug: "june-and-grove",
    name: "June & Grove",
    domain: "juneandgrove.com",
    industry: "Flower & plant studio",
    category: "Local shops",
    year: "2026",
    tagline: "Order flowers like you mean it.",
    headline: "A shopfront that works after closing time",
    summary:
      "June & Grove had a beautiful window and an invisible website. We gave the studio an equally beautiful shopfront online — a fast, image-led store with local delivery built in, so neighbors can order after the door is locked.",
    metric: "+64%",
    metricLabel: "more online orders within two months",
    services: ["Website build", "E-commerce setup", "Local SEO"],
    layout: "commerce",
    colors: {
      paper: "#f1f3ec",
      surface: "#dfe4d2",
      ink: "#23271d",
      accent: "#5f7d4f",
      wash: "#e8ebdb",
    },
    mockCta: "Shop now",
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
      "Contact or reservation form + analytics",
      "2 weeks to launch",
      "Two revision rounds",
    ],
    icon: "rocket",
    popular: false,
    note: "Great for openings, events & early ideas.",
  },
  {
    name: "Business",
    price: "$4,900",
    cadence: "one-time",
    tagline: "A full website built to turn visitors into regulars.",
    features: [
      "Up to 7 custom pages",
      "Editable CMS for your team",
      "Menu, booking or store integration",
      "Local SEO + Google Business setup",
      "4 weeks to launch",
      "Unlimited revisions during build",
      "30 days of post-launch support",
      "Priority email support",
    ],
    icon: "star",
    popular: true,
    note: "The sweet spot for growing venues.",
  },
  {
    name: "Premium",
    price: "$9,900",
    cadence: "one-time",
    tagline: "Design, development and strategy with nothing left out.",
    features: [
      "Everything in Business",
      "Unlimited pages & advanced layouts",
      "Reservations, ordering or booking engine",
      "Custom motion & interactions",
      "Brand refinement included",
      "6 weeks to launch",
      "60 days of post-launch support",
      "Quarterly performance review",
    ],
    icon: "crown",
    popular: false,
    note: "For venues that want it unforgettable.",
  },
];

export const ADDONS = [
  { name: "Care plan", price: "from $190/mo", desc: "Monthly updates, speed & security." },
  { name: "Reservations & ordering", price: "from $900", desc: "Bookings or orders wired in." },
  { name: "E-commerce setup", price: "from $1,500", desc: "Store, checkout, delivery zones." },
];

export const PRICING_FAQS = [
  {
    q: "What happens after I send an inquiry?",
    a: "You'll hear from a human — usually within one business day — for a short call about your venue and your goals. Within a week you'll receive a fixed proposal: scope, price, and dates. No hourly surprises, no sales scripts.",
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
    a: "Not at all. We handle the hosting, the domain, the analytics, and the handover. You'll get a short training call and a CMS you can edit without touching code — updating a menu takes minutes, not meetings.",
  },
  {
    q: "Will it work with my reservation or ordering tools?",
    a: "Almost certainly. OpenTable, Resy, SevenRooms, your booking engine, Toast, Shopify, delivery partners — we integrate with the tools you already use and recommend better ones when it makes sense.",
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
      "We start with your venue or business, not your website. A short call, a look at your current site (or competitors'), and honest questions about what success looks like in numbers — covers filled, orders placed, rooms booked.",
    deliverables: ["Goals & audience map", "Free website audit", "Fixed proposal & timeline"],
  },
  {
    num: "02",
    title: "Structure",
    duration: "Week 2",
    description:
      "Before any pixels, we agree on what every page needs to do — and what the visitor should do next. We map the pages, the message, and the calls to action, so the design has a job, not just a look.",
    deliverables: ["Sitemap & wireframes", "Messaging outline", "Menu & content checklist"],
  },
  {
    num: "03",
    title: "Design",
    duration: "Weeks 2–3",
    description:
      "We design in your brand, on real content, starting with the pages that matter most — usually the menu, the booking flow, or the store. You review in the browser, leave comments, and watch the site take shape.",
    deliverables: ["High-fidelity page designs", "Interactive prototype", "Revisions until it's right"],
  },
  {
    num: "04",
    title: "Build",
    duration: "Weeks 3–5",
    description:
      "Design becomes clean, hand-written code — fast by default, not as an afterthought. Reservations, ordering, payments and local search all land here, and you see a live staging link from day one.",
    deliverables: ["Live staging site", "Integrations & CMS training", "Speed & local SEO tune-up"],
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
  { value: 98, suffix: "", label: "average Lighthouse score across our projects" },
  { value: 2.4, suffix: "×", label: "average lift in bookings & orders", decimals: 1 },
  { value: 5, suffix: " wks", label: "average time from brief to launch" },
  { value: 100, suffix: "%", label: "fixed-price — no hourly surprises" },
];

export const TESTIMONIALS = [
  {
    quote:
      "The menu loads instantly, the reservation flow takes two taps, and our phone finally stopped ringing during service.",
    name: "A restaurant owner",
    role: "Sable & Thyme",
  },
  {
    quote:
      "We used to hand a fifth of every booking to the platforms. Now more than half our guests book direct.",
    name: "A hotel manager",
    role: "The Marlowe",
  },
  {
    quote:
      "Our regulars order online in seconds and new neighbors find us on a map that actually works.",
    name: "A café owner",
    role: "Basalt Coffee",
  },
];

export const CLIENT_MARQUEE = [
  "We build modern websites",
  "for restaurants & cafés",
  "for hotels & local businesses",
  "Design · Code · Strategy",
  "Clean, fast & human",
  "From clicks to clients",
  "Real results, honest pricing",
  "Mobile-first always",
  "Built to convert",
  "Reachlynk — Web Studio",
];

// --- About -------------------------------------------------------------------

export const VALUES = [
  {
    title: "Performance is respect",
    desc: "A hungry guest shouldn't wait for a menu to load, and a tired traveler shouldn't wrestle a booking form. We treat every kilobyte as a decision — your site should feel instant, everywhere.",
  },
  {
    title: "Clarity over clever",
    desc: "Trends fade; clear communication doesn't. We design so a first-time visitor understands what you offer, where you are, and how to book within seconds.",
  },
  {
    title: "Honest by default",
    desc: "Fixed prices, real timelines, no mystery invoices. If something isn't right for you, we'll say so — even when it costs us the job.",
  },
  {
    title: "Built to be kept",
    desc: "We hand over sites you can run. Clean code, an editable CMS, and training a busy owner can actually follow — menu changes take minutes, not meetings.",
  },
];

export const TIMELINE = [
  {
    year: "2026",
    title: "Founded this year",
    desc: "We started Reachlynk because restaurants, cafés, and local businesses deserve better websites — and honest pricing. One clean launch at a time.",
  },
  {
    year: "Now",
    title: "Building our portfolio",
    desc: "We're a small, focused team taking on a limited number of projects each quarter. Every launch matters to us because each one is a case study in the making.",
  },
  {
    year: "Next",
    title: "Growing by word of mouth",
    desc: "We don't have a decade of history to lean on — just honest work, real results, and the belief that a great website should be accessible to every local business.",
  },
];

export const TEAM = [
  { initials: "RL", name: "The Reachlynk Team", role: "Design, development & strategy" },
];

export const BUDGETS = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

export const BUSINESS_TYPES = [
  "Restaurant / café / bar",
  "Hotel / accommodation",
  "Retail / local shop",
  "Professional services",
  "Healthcare / wellness",
  "Nonprofit / community",
  "Other",
];
