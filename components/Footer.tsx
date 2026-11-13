
import Link from "next/link";
import {
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Cloud Computing", href: "/services/cloud-computing" },
      { label: "AWS Cloud Services", href: "/services/aws-cloud-services" },
      { label: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "DevOps & Automation", href: "/services/devops-automation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our capabilities", href: "/services" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banking & Finance", href: "/industries/banking-finance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & E-commerce", href: "/industries/retail" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Education", href: "/industries/education" },
    ],
  },
];

const legalLinks = [
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy Statement", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1650px]">

        {/* MAIN WHITE FOOTER PANEL */}
        <div className="overflow-hidden rounded-[28px] bg-white px-7 pb-7 pt-12 sm:px-10 sm:pt-16 lg:px-20 lg:pb-9 lg:pt-20">

          {/* MAIN CONTENT */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1.3fr] lg:gap-16">

            {/* LEFT HEADING */}
            <div>
              <h2 className="max-w-[570px] font-display text-[clamp(43px,5.5vw,76px)] font-semibold leading-[1.08] tracking-[-2px] text-black">
                It's time to
                <br />
                Build what's next.
              </h2>
            </div>

            {/* RIGHT NAVIGATION */}
            <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">

              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="mb-5 text-[16px] font-semibold text-black">
                    {column.title}
                  </h3>

                  <nav className="flex flex-col items-start gap-4">
                    {column.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-[15px] text-black transition-colors hover:text-[#ff6258]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}

            </div>
          </div>

          {/* LOGO AND SOCIAL ICONS */}
          <div className="mt-20 flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">

            {/* BRAND LOGO */}
            <Link
              href="/"
              aria-label="RulingMind Technologies home"
              className="inline-flex items-baseline gap-2"
            >
              <span className="font-display text-[35px] font-extrabold tracking-[-2px] text-[#ff6258]">
                RULINGMIND
              </span>

              <span className="text-[10px] font-bold tracking-[3px] text-black">
                TECH
              </span>
            </Link>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-4">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#ededed] text-black transition hover:bg-[#ff6258] hover:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#ededed] text-black transition hover:bg-[#ff6258] hover:text-white"
              >
                <Youtube size={20} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#ededed] text-black transition hover:bg-[#ff6258] hover:text-white"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#ededed] text-black transition hover:bg-[#ff6258] hover:text-white"
              >
                <Facebook size={20} />
              </a>

            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-7 h-px w-full bg-[#ff6258]/40" />

          {/* LEGAL LINKS */}
          <div className="flex flex-col justify-between gap-5 pt-7 md:flex-row md:items-center">

            <nav className="flex flex-wrap gap-x-7 gap-y-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-medium text-black transition-colors hover:text-[#ff6258]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="shrink-0 text-[12px] text-[#666]">
              © {new Date().getFullYear()} RulingMind Technologies.
              All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
