
import Link from "next/link";
import {
  articles,
  caseStudies,
  industries,
  services,
  solutions,
} from "@/lib/content";

const basePages = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Investors", href: "/investors" },
  { title: "Brand", href: "/brand" },
  { title: "Newsroom", href: "/newsroom" },
  { title: "Partners", href: "/partners" },
  { title: "Insights", href: "/insights" },
  { title: "ESG", href: "/esg" },
  { title: "DEI", href: "/dei" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Solutions", href: "/solutions" },
  { title: "Our Work", href: "/our-work" },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];

export default function SiteMapPage() {
  const sections = [
    {
      title: "Main Pages",
      links: basePages,
    },
    {
      title: "Services",
      links: services.map((item) => ({
        title: item.title,
        href: `/services/${item.slug}`,
      })),
    },
    {
      title: "Industries",
      links: industries.map((item) => ({
        title: item.title,
        href: `/industries/${item.slug}`,
      })),
    },
    {
      title: "Solutions",
      links: solutions.map((item) => ({
        title: item.title,
        href: `/solutions/${item.slug}`,
      })),
    },
    {
      title: "Case Studies",
      links: caseStudies.map((item) => ({
        title: item.title,
        href: `/our-work/${item.slug}`,
      })),
    },
    {
      title: "Insights Articles",
      links: articles.map((item) => ({
        title: item.title,
        href: `/insights/${item.slug}`,
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <section className="bg-[#071b36] px-6 py-20 text-white md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f26a4b]">
            Explore RulingMindTech
          </p>
          <h1 className="text-4xl font-semibold md:text-6xl">
            Website Sitemap
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
            Explore our website and discover our services, industries,
            solutions, insights and opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="border-t-2 border-[#f26a4b] pt-6"
            >
              <h2 className="mb-6 text-2xl font-semibold">
                {section.title}
              </h2>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-[#f26a4b]"
                    >
                      <span>{link.title}</span>
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
