
import type { Metadata } from "next";
import Link from "next/link";
import CareersCarousel from "@/components/CareersCarousel";
import Reveal from "@/components/Reveal";
import { Cards, Intro } from "@/components/ui";
import { articles, positions, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers | RulingMindTech",
  description:
    "Explore career opportunities, internships and professional growth at RulingMindTech.",
};

/* -------------------------------------------------------
   CAREER CATEGORIES
------------------------------------------------------- */

const CORAL = "#B28B36";

const ways = [
  { title: "Full-time roles", slug: "full-time-roles" },
  { title: "Internships", slug: "internships" },
  { title: "Fresher programme", slug: "fresher-programme" },
  { title: "Remote and hybrid", slug: "remote-and-hybrid" },
  { title: "Freelance and contract", slug: "freelance-and-contract" },
];

/* -------------------------------------------------------
   LIFE AT RULINGMINDTECH
------------------------------------------------------- */

const highlights = [
  {
    year: "Learn",
    text: "Time every week to study new tools and share what you find.",
  },
  {
    year: "Build",
    text: "Real customer projects and opportunities to solve meaningful challenges.",
  },
  {
    year: "Grow",
    text: "Clear paths from fresher to experienced technology professional.",
  },
];

/* -------------------------------------------------------
   BLOG IMAGES
------------------------------------------------------- */

const insightImages = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
];

/* -------------------------------------------------------
   DOTTED BACKGROUND
------------------------------------------------------- */

const dots = (color: string) => ({
  backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.6px)`,
  backgroundSize: "7px 7px",
});

/* -------------------------------------------------------
   CAREERS PAGE
------------------------------------------------------- */

export default function Careers() {
  const insightItems = articles.map((article, index) => ({
    href: `/insights/${article.slug}`,
    title: article.title,
    tag: "Blog",
    image: insightImages[index % insightImages.length],
  }));

  return (
    <>
      {/* =================================================
          1. HERO SECTION
      ================================================= */}

      <section className="relative overflow-hidden bg-[#071536] text-white">
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-[75%] w-[85%] opacity-90 md:w-[70%]"
          style={{
            ...dots(CORAL),
            clipPath:
              "polygon(0 100%, 30% 55%, 55% 70%, 100% 10%, 100% 100%)",
          }}
        />

        <div className="wrap relative py-16 md:py-24">
          <h1 className="font-display text-[clamp(48px,8vw,96px)] font-bold leading-[1.02] tracking-[-3px]">
            Grow with
            <br />
            <span className="mr-3 inline-block h-[0.7em] w-[0.7em] rounded-[50%_50%_50%_10%] bg-white align-baseline" />
            RulingMind
          </h1>

          <p className="mt-24 text-lg font-medium md:mt-36">
            Your first big project could start here.
          </p>

          <Link
            href="#open-positions"
            className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
            style={{ background: CORAL }}
          >
            See open roles
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* =================================================
          2. CAREER CATEGORIES
          Each category opens a separate tab.
      ================================================= */}

      <section className="block bg-white">
        <div className="wrap grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-[clamp(34px,4.5vw,56px)] font-medium leading-[1.1] tracking-[-1.5px] text-[#071536]">
              Work the way
              <br />
              you work best.
            </h2>

            <p className="mt-8 max-w-[460px] text-lg leading-[1.7] text-[#374151]">
              Whether you want a first job, an internship or a flexible
              contract, there is a place to start. Explore opportunities
              and find the right path for your career.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul>
              {ways.map((item, index) => (
                <li
                  key={item.slug}
                  className="border-b border-[#DDE3EC] first:border-t"
                >
                  <Link
                    href={`/careers/opportunities/${item.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-6 transition hover:text-[#B28B36]"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="text-lg text-[#6B7280]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-[clamp(26px,3vw,38px)] font-medium text-[#071536] transition group-hover:text-[#B28B36]">
                        {item.title}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-2xl text-[#071536] transition group-hover:translate-x-1 group-hover:text-[#B28B36]"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* =================================================
          5. LIFE AT RULINGMINDTECH
      ================================================= */}

      <section className="relative overflow-hidden bg-[#F3F6FA] py-20">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[18%] opacity-60"
          style={{
            ...dots(CORAL),
            clipPath: "polygon(0 0, 100% 0, 40% 100%, 0 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[18%] opacity-60"
          style={{
            ...dots(CORAL),
            clipPath: "polygon(60% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="wrap relative text-center">
          <h2 className="font-display text-[clamp(30px,4vw,48px)] font-medium tracking-[-1px] text-[#071536]">
            Life at RulingMindTech
          </h2>

          <div className="mt-10 grid gap-5 text-left md:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.year}
                className="rounded-3xl border border-[#DDE3EC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B28B36] hover:shadow-lg"
              >
                <div className="text-sm font-bold text-[#071536]">
                  {highlight.year}
                </div>

                <div className="mt-2 text-[17px] text-[#374151]">
                  {highlight.text}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-full px-6 py-3 text-[15px] font-semibold text-white transition hover:brightness-110"
            style={{ background: CORAL }}
          >
            Meet the company
          </Link>
        </div>
      </section>

      {/* =================================================
          6. INSIGHTS HUB
      ================================================= */}

      <section className="bg-[#071536] py-20 text-white">
        <div className="wrap">
          <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
            <h2 className="font-display text-[clamp(36px,5vw,60px)] font-medium tracking-[-1.5px]">
              From our blog
            </h2>

            <Link
              href="/insights"
              className="rounded-full bg-[#B28B36] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white hover:text-[#071536]"
            >
              See all articles →
            </Link>
          </div>

          <CareersCarousel items={insightItems} />
        </div>
      </section>

      {/* =================================================
          7. EXPLORE MORE
      ================================================= */}

      <section className="relative overflow-hidden bg-[#F3F6FA] py-20">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-[45%] opacity-70"
          style={{
            ...dots(CORAL),
            clipPath:
              "polygon(30% 0, 100% 0, 100% 80%, 60% 100%, 0 20%)",
          }}
        />

        <div className="wrap relative">
          <h2 className="font-display text-[clamp(34px,4.5vw,56px)] font-medium tracking-[-1.5px] text-[#071536]">
            More about us
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Who we are",
                text: "A technology company building cloud, AI and software that helps businesses grow.",
                href: "/about",
              },
              {
                title: "Talk to us",
                text: "Questions about a role or the hiring process? Our team is happy to help.",
                href: "/contact",
              },
              {
                title: "Projects",
                text: "See the kind of work you could be part of, from web platforms to AI workflows.",
                href: "/our-work",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-[#DDE3EC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B28B36] hover:shadow-lg"
              >
                <div>
                  <h3 className="font-display text-[32px] font-medium text-[#071536]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-[1.6] text-[#374151]">
                    {item.text}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="mt-6 text-[15px] font-medium text-[#071536] transition hover:text-[#B28B36]"
                >
                  → Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          8. FINAL CAREERS CTA
      ================================================= */}

      <section className="relative overflow-hidden bg-[#071536] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[30%]"
          style={{
            ...dots(CORAL),
            clipPath:
              "polygon(0 40%, 40% 10%, 70% 30%, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="wrap relative grid items-center gap-10 py-20 md:grid-cols-[1fr_1.6fr]">
          <div
            role="img"
            aria-label="Team discussing ideas"
            className="h-[300px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/hero-innovation.png')",
            }}
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
              YOUR NEXT CHAPTER
            </p>

            <h2 className="mt-4 font-display text-[clamp(28px,3.5vw,42px)] font-medium">
              Your next chapter starts here.
            </h2>

            <p className="mt-4 max-w-[640px] text-lg leading-[1.6] text-[#DDE3EC]">
              Starting out or bringing years of experience, you will
              find colleagues who share what they know and projects
              that matter.
            </p>

            <Link
              href="/contact?service=Careers"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#B28B36] px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071536]"
            >
              Contact our team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
