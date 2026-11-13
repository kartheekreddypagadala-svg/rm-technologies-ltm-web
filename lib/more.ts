export const partners = [
  { name: "Amazon Web Services", text: "Cloud architecture, migration and operations on AWS.", href: "/services/aws-cloud-services" },
  { name: "Microsoft Azure", text: "Hybrid and multi-cloud delivery on Azure.", href: "/services/azure-google-cloud" },
  { name: "Google Cloud", text: "Data platforms and Kubernetes on Google Cloud.", href: "/services/azure-google-cloud" },
  { name: "HubSpot", text: "CRM integration for lead capture and follow-up.", href: "/contact" },
  { name: "GitHub", text: "CI/CD pipelines and secure software delivery.", href: "/services/devops-automation" },
  { name: "Terraform", text: "Infrastructure as code for repeatable environments.", href: "/services/cloud-computing-infrastructure" },
];
export const news = [
  { slug: "new-ai-pilot-practice", date: "2026-11-05", title: "RulingMindTech opens its AI & Software Development pilot", summary: "A pilot practice for practical AI solutions and custom software.", body: ["Our AI & Software Development pillar is now in pilot with selected customers.", "The focus is narrow, measurable use cases with people kept in control."] },
  { slug: "managed-it-services-expansion", date: "2026-10-20", title: "Managed IT Services expands monitoring coverage", summary: "Proactive 24x7 monitoring and service desk support.", body: ["Our managed IT team now covers monitoring, patching and asset management under clear SLAs."] },
  { slug: "new-website-launch", date: "2026-11-12", title: "A new rulingmindtech.com", summary: "A redesigned site with services, solutions, industries and insights.", body: ["The new site makes it easier to find services and start a conversation with our team."] },
];
export const locations = [
  { city: "Hyderabad", country: "India", role: "Headquarters", text: "Add the registered office address before launch." },
  { city: "Remote", country: "Global", role: "Delivery", text: "Distributed engineering and support teams." },
];
export const legal: Record<string, { title: string; body: string[] }> = {
  accessibility: { title: "Accessibility", body: ["We aim to make rulingmindtech.com usable by everyone, including people using assistive technology.", "If you find a barrier, write to us and we will work to fix it."] },
  privacy: { title: "Privacy Statement", body: ["We collect only the details you submit through our contact form, such as name, email and message.", "We use them to reply to you and do not sell personal information.", "TODO: have this statement reviewed by a legal professional before launch."] },
  terms: { title: "Terms of Use", body: ["Content on this site is provided for general information.", "TODO: add final terms reviewed by a legal professional."] },
  "ai-policy": { title: "AI Policy", body: ["We apply AI with human oversight, clear purpose and respect for customer data.", "AI outputs are reviewed before they reach customers."] },
  "responsible-disclosure": { title: "Responsible Disclosure", body: ["If you believe you have found a security issue, email us with details and give us reasonable time to respond before sharing it publicly."] },
};
