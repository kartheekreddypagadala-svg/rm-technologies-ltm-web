
export const aboutLinks = [
  { href: "/about", label: "Company" },
  { href: "/investors", label: "Investors" },
  { href: "/brand", label: "Brand" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/partners", label: "Partners" },
  { href: "/insights", label: "Insights" },
  { href: "/esg", label: "Environment, Sustainability and Governance" },
  { href: "/dei", label: "Diversity, Equity and Inclusion" },
];

export const aboutValues = [
  { icon: "purpose", title: "Purpose first", text: "Every project starts with the problem it should solve for the people who will use it." },
  { icon: "people", title: "People matter", text: "Respect and honest conversation, with customers and with each other." },
  { icon: "future", title: "Always learning", text: "We try new tools early so our customers can use them with confidence." },
  { icon: "impact", title: "Results you can see", text: "We aim for outcomes customers can measure and trust." },
];

export const investorPoints = [
  { title: "A focused offer", text: "Cloud, AI, software engineering, data and security, delivered end to end for growing businesses." },
  { title: "Built secure from day one", text: "Privacy and security are designed in, with the DPDP Act in mind." },
  { title: "Customer-first delivery", text: "Small senior teams, clear communication and outcomes we can stand behind." },
  { title: "Room to grow", text: "A young company with a clear roadmap across services, industries and solutions." },
];

export const filings = [
  { title: "Company profile", text: "Overview of RulingMindTech, services and leadership.", status: "Available on request" },
  { title: "Annual report", text: "Published after our first full financial year.", status: "Coming soon" },
  { title: "Corporate governance policies", text: "Code of conduct, privacy and security policies.", status: "Coming soon" },
];

export const palette = [
  { name: "Navy", hex: "#081725", dark: true },
  { name: "Brand blue", hex: "#1f6bff", dark: true },
  { name: "Coral", hex: "#f2553f", dark: true },
  { name: "Sky", hex: "#8ab8ff", dark: false },
  { name: "Spark", hex: "#ffc83d", dark: false },
  { name: "Soft grey", hex: "#f3f6f9", dark: false },
];

export const voice = [
  { title: "Clear", text: "Plain words over jargon. If a sentence needs a dictionary, we rewrite it." },
  { title: "Warm", text: "We talk like a trusted colleague, not a brochure." },
  { title: "Confident", text: "We say what we can do and what we have done, with no hype." },
];

export const brandRules = [
  "Keep clear space around the logo equal to the height of the letter M.",
  "Use the white logo on dark backgrounds and the dark logo on light ones.",
  "Do not stretch, rotate, recolour or add effects to the logo.",
  "Use the tagline Innovate. Transform. Grow. exactly as written.",
];

export type NewsItem = {
  title: string;
  summary: string;
  type: "Press release" | "Award" | "Event" | "Company news";
  date: string;
};

export const newsItems: NewsItem[] = [
  { title: "RulingMindTech opens for business", summary: "Our new technology company launches with services in cloud, AI, software and security.", type: "Press release", date: "2026-11-01" },
  { title: "Website launch and DPDP-ready contact form", summary: "Our new website goes live with privacy and security built in.", type: "Company news", date: "2026-11-10" },
  { title: "We are hiring our first engineering team", summary: "Full-stack, cloud and design roles are open now.", type: "Company news", date: "2026-11-12" },
  { title: "Meet us at the next local tech meet-up", summary: "Details of upcoming events will be posted here.", type: "Event", date: "2026-12-05" },
];

export const partnerTypes = [
  { title: "Technology partners", text: "Platform and tool providers we build with. Co-create solutions and share what we learn." },
  { title: "Delivery partners", text: "Agencies and specialists who work alongside our teams on larger customer projects." },
  { title: "Academic partners", text: "Colleges and training groups helping fresh talent get real project experience." },
];

export const techGroups = [
  { title: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
  { title: "Web", items: ["Next.js", "React", "Node.js", "TypeScript"] },
  { title: "Data and AI", items: ["Python", "FastAPI", "PostgreSQL", "MongoDB"] },
  { title: "Enterprise", items: [".NET", "REST APIs", "CI/CD"] },
];

export const esgPillars = [
  { title: "Environment", text: "We aim to keep our footprint small.", points: ["Efficient cloud use and right-sized infrastructure", "Paperless way of working", "Remote-friendly teams to cut travel"] },
  { title: "Social", text: "We care about the people we work with.", points: ["Fair hiring and a respectful workplace", "Learning time for every team member", "Giving freshers a real first project"] },
  { title: "Governance", text: "We run the company openly and securely.", points: ["DPDP Act aware data handling", "Security reviews built into delivery", "A clear code of conduct and grievance contact"] },
];

export const deiPrinciples = [
  { title: "Skills first", text: "We hire for curiosity and ability, not for pedigree." },
  { title: "Every voice counts", text: "Ideas are judged on merit, whoever shares them." },
  { title: "Accessible by design", text: "We build our websites and tools so more people can use them." },
  { title: "Room to grow", text: "Fresh graduates and experienced engineers learn side by side." },
];
