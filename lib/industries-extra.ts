// ---------------------------------------------------------------
// EXTRA text and pictures for the Industries pages.
// The main list (titles, challenges, solutions, benefits) is still in lib/content.ts.
// Here we only add: a short headline, an overview, typical projects and a picture.
// To add a new industry: add it in content.ts, then add one entry here with the SAME slug.
// ---------------------------------------------------------------

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

// Pictures (swap any of these for your own images later).
const pics = {
  bank: photo("photo-1556742049-0cfed4f6a45d"),
  health: photo("photo-1576091160399-112ba8d25d1d"),
  retail: photo("photo-1441986300917-64674bd600d8"),
  factory: photo("photo-1565793298595-6a879b1d9492"),
  school: photo("photo-1503676260728-1c00da094a0b"),
  telecom: photo("photo-1558494949-ef010cbdcc31"),
  energy: photo("photo-1473341304170-971dccb5ac1e"),
  travel: photo("photo-1436491865332-7a61a109cc05"),
  gov: photo("photo-1555848962-6e79363ec58f"),
  tech: photo("photo-1451187580459-43490279c0fa"),
  data: photo("photo-1460925895917-afdab827c52f"),
  office: photo("photo-1497366811353-6870744d04b2"),
  circuit: photo("photo-1518770660439-4636190af475"),
  team: photo("photo-1522071820081-009f0129c71c"),
  people: photo("photo-1524758631624-e2822e304c36"),
};

export type IndustryExtra = { headline: string; overview: string; projects: string[]; image: string };

export const industryExtra: Record<string, IndustryExtra> = {
  "banking-financial-services": {
    headline: "Trusted technology for money that matters",
    overview: "Banks, lenders and fintech teams need systems that are fast, secure and easy to audit. We help modernise older platforms step by step and build new customer journeys on top.",
    projects: ["Customer onboarding portal", "Payments and API integration", "Fraud and risk dashboards"],
    image: pics.bank,
  },
  "healthcare-life-sciences": {
    headline: "Care runs better when information flows",
    overview: "Clinics, labs and health-tech teams handle sensitive data every day. We build secure portals and data platforms that save staff time and protect privacy.",
    projects: ["Patient and appointment portal", "Secure records platform", "Admin workflow automation"],
    image: pics.health,
  },
  "retail-ecommerce": {
    headline: "Shops that stay fast on the busiest day",
    overview: "Online and in-store sales need one clear picture of customers and stock. We build scalable storefronts, analytics and helpful AI assistants.",
    projects: ["Online store and checkout", "Inventory and sales analytics", "AI customer support assistant"],
    image: pics.retail,
  },
  manufacturing: {
    headline: "Factory data that people can actually use",
    overview: "Plants produce huge amounts of data that often stays locked in machines. We connect it, clean it and turn it into dashboards that help teams act sooner.",
    projects: ["Machine data pipeline", "Production dashboards", "Managed IT for multiple sites"],
    image: pics.factory,
  },
  education: {
    headline: "Learning platforms that work for everyone",
    overview: "Schools, colleges and training providers need simple tools for students and staff. We build accessible portals and move records to the cloud.",
    projects: ["Student and staff portal", "Online admissions", "Learning analytics reports"],
    image: pics.school,
  },
  "telecom-media": {
    headline: "Built for millions of requests",
    overview: "Telecom and media services must stay up while demand moves quickly. We design cloud-native platforms and data pipelines that scale on demand.",
    projects: ["Streaming and content platform", "Real-time usage pipeline", "Monitoring and automation"],
    image: pics.telecom,
  },
  "energy-utilities": {
    headline: "Reliable operations for critical infrastructure",
    overview: "Energy and utility companies manage spread-out assets that cannot fail. We build monitoring platforms and tighten security so crews see problems early.",
    projects: ["Asset monitoring platform", "Predictive maintenance reports", "Security hardening review"],
    image: pics.energy,
  },
  "travel-logistics": {
    headline: "See every journey from start to finish",
    overview: "Travel and logistics teams juggle bookings, vehicles and deliveries. We build tracking and planning tools that cut manual coordination.",
    projects: ["Booking and tracking app", "Route and demand planning", "Dispatch workflow automation"],
    image: pics.travel,
  },
  "government-public-services": {
    headline: "Public services that are simple and secure",
    overview: "Citizens expect digital services that are easy to use and safe. We help public bodies replace paperwork with accessible, well-protected online services.",
    projects: ["Citizen service portal", "Secure cloud hosting", "Identity and access management"],
    image: pics.gov,
  },
};

// Three steps shown on every industry page.
export const howWeWork = [
  { title: "Listen", text: "We learn how your teams work today and what a good result looks like." },
  { title: "Build", text: "Small senior teams deliver in short steps, so you see progress early." },
  { title: "Support", text: "We stay on after launch to monitor, secure and improve what we built." },
];

// "Why customers choose us" cards on the main Industries page.
export const whyUs = [
  { title: "One team, many skills", text: "Cloud, AI, software, data and security are handled together." },
  { title: "Secure from day one", text: "Privacy and security checks are part of every project." },
  { title: "Plain-spoken partners", text: "Clear plans, honest timelines and regular updates." },
];
