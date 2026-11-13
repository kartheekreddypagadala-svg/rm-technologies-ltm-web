// ---------------------------------------------------------------
// EXTRA text and pictures for the Services and Solutions pages.
// The main lists (titles, benefits, technologies...) are still in lib/content.ts.
// Here we only add: a short headline, an overview, typical projects and a picture.
// To add a new page: add it in content.ts, then add one entry here with the SAME slug.
// ---------------------------------------------------------------

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`;

// Pictures (swap any of these for your own images later).
const pics = {
  tech: photo("photo-1451187580459-43490279c0fa"),
  data: photo("photo-1460925895917-afdab827c52f"),
  office: photo("photo-1497366811353-6870744d04b2"),
  circuit: photo("photo-1518770660439-4636190af475"),
  team: photo("photo-1522071820081-009f0129c71c"),
  people: photo("photo-1524758631624-e2822e304c36"),
  servers: photo("photo-1558494949-ef010cbdcc31"),
  serverRoom: photo("photo-1544197150-b99a580bb7a8"),
  code: photo("photo-1555949963-ff9fe0c870eb"),
  laptop: photo("photo-1498050108023-c5249f4df085"),
  security: photo("photo-1550751827-4bd374c3f58b"),
  mobile: photo("photo-1512941937669-90a1b58e7e9c"),
  ai: photo("photo-1677442136019-21780ecad995"),
  robot: photo("photo-1485827404703-89b55fcc595e"),
  meeting: photo("photo-1552664730-d307ca884978"),
  consulting: photo("photo-1454165804606-c3d57bc86b40"),
  workspace: photo("photo-1519389950473-47ba0277781c"),
  desk: photo("photo-1504384308090-c894fdcc538d"),
  support: photo("photo-1553877522-43269d4ea984"),
};

export type OfferingExtra = { headline: string; overview: string; projects: string[]; image: string };

export const serviceExtra: Record<string, OfferingExtra> = {
  "cloud-computing-infrastructure": {
    headline: "Cloud foundations built to grow with you",
    overview: "A good cloud setup is secure, easy to scale and simple to run. We design and build the networks, platforms and automation your teams need, then keep them healthy.",
    projects: ["Cloud landing zone", "Data centre to cloud move", "Multi-region resilience plan"],
    image: pics.servers,
  },
  "aws-cloud-services": {
    headline: "Well-architected workloads on AWS",
    overview: "From first design to daily operations, we help teams use Amazon Web Services in a secure, cost-aware way, with clear ownership and good visibility.",
    projects: ["Application migration to AWS", "Serverless web platform", "Cost and security review"],
    image: pics.tech,
  },
  "azure-google-cloud": {
    headline: "The right cloud for each workload",
    overview: "Many organisations use more than one cloud. We help you choose well, connect them safely and govern them as one estate.",
    projects: ["Hybrid cloud design", "Data platform on Google Cloud", "Kubernetes across clouds"],
    image: pics.serverRoom,
  },
  "devops-automation": {
    headline: "Ship faster with fewer surprises",
    overview: "Automated pipelines, repeatable environments and good monitoring turn releases from a worry into a routine. We set them up and train your teams to run them.",
    projects: ["CI/CD pipeline rebuild", "Infrastructure as code", "Monitoring and alerting setup"],
    image: pics.code,
  },
  "ai-machine-learning": {
    headline: "AI that fits the way your teams work",
    overview: "We start with a narrow, useful task and a clear measure of success, connect AI to your own data, and keep people in control of important decisions.",
    projects: ["Customer support assistant", "Document processing", "Forecasting model"],
    image: pics.ai,
  },
  "software-development": {
    headline: "Custom software built to last",
    overview: "Small senior teams design, build and test software that is secure, easy to maintain and shaped around how your business really works.",
    projects: ["Internal business platform", "API-first product", "Legacy system rebuild"],
    image: pics.laptop,
  },
  "web-mobile-development": {
    headline: "Experiences people enjoy using",
    overview: "Fast, accessible web and mobile applications for customers and teams, designed to work well on every screen.",
    projects: ["Customer portal", "Field-service mobile app", "Progressive web app"],
    image: pics.mobile,
  },
  "data-analytics-bi": {
    headline: "Data you can trust, answers you can act on",
    overview: "We bring scattered data together and present it in dashboards people actually use, so decisions are faster and better informed.",
    projects: ["Executive dashboard", "Self-service reporting", "Data warehouse build"],
    image: pics.data,
  },
  "enterprise-application-development": {
    headline: "Applications that connect the whole business",
    overview: "We build scalable line-of-business applications and the integrations between them, with strong access control built in.",
    projects: ["ERP and CRM extension", "Workflow automation app", "Systems integration layer"],
    image: pics.office,
  },
  "iot-digital-engineering": {
    headline: "From device to dashboard",
    overview: "We connect devices, move their data securely and turn it into live views that help teams act sooner.",
    projects: ["Asset monitoring platform", "Smart facility dashboard", "Edge data pipeline"],
    image: pics.circuit,
  },
  cybersecurity: {
    headline: "Security built in, not bolted on",
    overview: "We help you protect people, platforms and data with practical controls, regular reviews and clear evidence for audits.",
    projects: ["Security assessment", "Access hardening", "Cloud security review"],
    image: pics.security,
  },
  "it-consulting": {
    headline: "Independent advice for clear decisions",
    overview: "We review where you are, set out where you want to be and give you a roadmap you can act on, without tying you to a vendor.",
    projects: ["Architecture review", "Cloud readiness assessment", "Technology roadmap"],
    image: pics.consulting,
  },
  "managed-it-services": {
    headline: "Reliable IT, run for you",
    overview: "Proactive monitoring and a friendly service desk keep your systems healthy so your teams can stay focused on the business.",
    projects: ["24x7 monitoring", "Service desk", "Patch and asset management"],
    image: pics.support,
  },
  "application-support-maintenance": {
    headline: "Keep critical applications healthy",
    overview: "We look after the applications your business depends on, fixing issues quickly and improving them steadily.",
    projects: ["L1 to L3 support", "Performance tuning", "Release management"],
    image: pics.desk,
  },
};

export const solutionExtra: Record<string, OfferingExtra> = {
  "enterprise-digital-transformation": {
    headline: "One roadmap from strategy to delivery",
    overview: "Transformation works when strategy, platforms and people move together. We help you set clear priorities and deliver them in steps.",
    projects: ["Digital strategy and roadmap", "Process and platform redesign", "Adoption and change support"],
    image: pics.tech,
  },
  "cloud-migration": {
    headline: "Move to the cloud with confidence",
    overview: "We assess what you have, plan the move and carry it out with minimal disruption, then tune the result so costs stay under control.",
    projects: ["Readiness assessment", "Workload migration", "Post-migration tuning"],
    image: pics.servers,
  },
  "cloud-modernization": {
    headline: "Make applications truly cloud-native",
    overview: "We re-architect applications to use containers, serverless and modern delivery pipelines, so they release faster and scale better.",
    projects: ["Containerisation", "Serverless redesign", "CI/CD and observability"],
    image: pics.serverRoom,
  },
  "ai-powered-business-solutions": {
    headline: "AI applied to real workflows",
    overview: "We find the tasks where AI saves real time, build assistants around your data and put monitoring in place so results stay trustworthy.",
    projects: ["Use-case discovery", "AI assistant", "Governance and monitoring"],
    image: pics.robot,
  },
  "enterprise-automation": {
    headline: "Automate the work that repeats",
    overview: "We map repeatable processes, automate them across teams and systems, and monitor them so they keep running well.",
    projects: ["Process analysis", "Workflow integration", "Automated reporting"],
    image: pics.workspace,
  },
  "data-engineering": {
    headline: "Pipelines that analytics and AI can rely on",
    overview: "We design the pipelines and warehouses that deliver clean, governed data to the people and models that need it.",
    projects: ["Data pipeline build", "Data warehouse design", "Data quality framework"],
    image: pics.data,
  },
  "application-modernization": {
    headline: "A secure future for ageing applications",
    overview: "We assess your older applications and modernise them step by step, so the business keeps running while the technology improves.",
    projects: ["Application assessment", "Incremental re-platforming", "Testing and rollout"],
    image: pics.laptop,
  },
  "infrastructure-management": {
    headline: "Healthy, secure, cost-efficient infrastructure",
    overview: "We monitor, patch and review your infrastructure so it stays available and costs stay predictable.",
    projects: ["Monitoring and incident response", "Patch management", "Capacity and cost review"],
    image: pics.circuit,
  },
  "cybersecurity-solutions": {
    headline: "Layered protection across your estate",
    overview: "We assess risk and put practical controls in place across identity, cloud and endpoints, with monitoring ready for when it matters.",
    projects: ["Risk assessment", "Identity and access controls", "Response readiness"],
    image: pics.security,
  },
  "digital-workplace": {
    headline: "A consistent, secure workplace for everyone",
    overview: "We set up devices, identity and collaboration tools so every employee gets the same smooth, secure experience from day one.",
    projects: ["Endpoint management", "Identity and collaboration setup", "Onboarding and support"],
    image: pics.team,
  },
};

// Three steps shown on every page.
export const howWeWorkServices = [
  { title: "Assess", text: "We learn how your teams work today and what a good result looks like." },
  { title: "Build", text: "Small senior teams deliver in short steps, so you see progress early." },
  { title: "Run", text: "We stay on after launch to monitor, secure and improve what we built." },
];
export const howWeWorkSolutions = [
  { title: "Discover", text: "We understand your goals, your systems and the constraints that matter." },
  { title: "Deliver", text: "We plan and deliver in clear stages, with regular progress updates." },
  { title: "Improve", text: "We measure results and keep refining so the benefits last." },
];

// "Why customers choose us" cards on the main Services and Solutions pages.
export const whyUs = [
  { title: "One team, many skills", text: "Cloud, AI, software, data and security are handled together." },
  { title: "Secure from day one", text: "Privacy and security checks are part of every project." },
  { title: "Plain-spoken partners", text: "Clear plans, honest timelines and regular updates." },
];
