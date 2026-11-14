
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  CORAL,
  CoralCta,
  NumberedList,
  OfferingHero,
  Section,
  dots,
} from "@/components/WhatWeDoParts";

import { services, solutions, type Offering } from "@/lib/content";

import {
  howWeWorkServices,
  howWeWorkSolutions,
  serviceExtra,
  solutionExtra,
} from "@/lib/whatwedo-extra";

type Kind = "services" | "solutions";

const config = {
  services: {
    label: "Services",
    list: services,
    extra: serviceExtra,
    steps: howWeWorkServices,
  },
  solutions: {
    label: "Solutions",
    list: solutions,
    extra: solutionExtra,
    steps: howWeWorkSolutions,
  },
} as const;

// Nicer section titles for the list headings stored in content.ts.
const titles: Record<string, string> = {
  Benefits: "Benefits for your business",
  Technologies: "Technologies we work with",
  "Use cases": "Where it is used",
  "What we deliver": "What we deliver",
  Outcomes: "Outcomes you can expect",
};

const nice = (heading: string) => titles[heading] ?? heading;

// Page title and description (used by each [slug] page file).
export function offeringMetadata(kind: Kind, slug: string): Metadata {
  const item = config[kind].list.find((i: Offering) => i.slug === slug);

  return {
    title: item ? `${item.title} | RulingMindTech` : config[kind].label,
    description: item?.summary,
  };
}

// The one shared design used by EVERY Services and Solutions page, so they all look the same.
export default function OfferingDetail({
  kind,
  slug,
}: {
  kind: Kind;
  slug: string;
}) {
  const c = config[kind];

  const item = c.list.find((i: Offering) => i.slug === slug);

  if (!item) notFound();

  const x = c.extra[item.slug];

  const contactHref =
    kind === "services"
      ? `/contact?service=${encodeURIComponent(item.title)}`
      : "/contact";

  const [first, second, third] = item.points;

  // Services have 3 lists (benefits, technologies, use cases); solutions have 2 (deliver, outcomes).
  const cardsTitle =
    kind === "services" ? nice(second.heading) : "Typical engagements";

  const cardItems =
    kind === "services" ? second.items : x?.projects ?? [];

  const sideList = kind === "services" ? third : second;

  return (
    <>
      {/* 1. Hero with picture */}
      <OfferingHero
        crumb={`What we do / ${c.label} / ${item.title}`}
        title={x?.headline ?? item.title}
        text={item.summary}
        image={x?.image}
        cta={{
          label: `Talk about ${item.title}`,
          href: contactHref,
        }}
      />

      {/* 2. Overview */}
      <Section grey title={<>About<br />{item.title}</>}>
        <p className="max-w-[720px] text-xl leading-[1.7] text-[#374151]">
          {x?.overview ?? item.summary}
        </p>
      </Section>

      {/* 3. First list, numbered */}
      <Section title={nice(first.heading)}>
        <NumberedList items={first.items} />
      </Section>

      {/* 4. Cards (+ typical projects for services) */}
      {cardItems.length > 0 && (
        <Section
          grey
          title={cardsTitle}
          text="Practical technology, delivered in clear steps."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {cardItems.map((t) => (
              <div
                key={t}
                className="rounded-3xl border border-[#DDE3EC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B28B36]/50 hover:shadow-lg"
              >
                <span
                  className="block h-3 w-3 rounded-full"
                  style={{ background: CORAL }}
                />

                <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-[#071536]">
                  {t}
                </h3>
              </div>
            ))}
          </div>

          {kind === "services" && x && (
            <div className="mt-10 rounded-3xl border border-[#DDE3EC] bg-white p-7">
              <div
                className="text-sm font-bold"
                style={{ color: CORAL }}
              >
                Typical projects
              </div>

              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {x.projects.map((p) => (
                  <li
                    key={p}
                    className="text-lg font-medium text-[#374151]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Section>
      )}

      {/* 5. How we work + side list (dark) */}
      <section className="relative overflow-hidden bg-[#071536] py-20 text-white">
        <div
          aria-hidden
          className="absolute bottom-0 right-0 h-[50%] w-[40%] opacity-70"
          style={{
            ...dots(),
            clipPath: "polygon(0 100%, 50% 30%, 100% 0, 100% 100%)",
          }}
        />

        <div className="wrap relative grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-medium tracking-[-1.5px] text-white">
              How we work
            </h2>

            <ol className="mt-8 grid gap-6">
              {c.steps.map((h, i) => (
                <li key={h.title} className="flex gap-5">
                  <span
                    className="font-display text-3xl"
                    style={{ color: CORAL }}
                  >
                    {i + 1}
                  </span>

                  <div>
                    <div className="font-display text-2xl font-medium text-white">
                      {h.title}
                    </div>

                    <p className="mt-1 text-[#DDE3EC]">
                      {h.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {sideList && (
            <div>
              <h2 className="font-display text-[clamp(30px,4vw,48px)] font-medium tracking-[-1.5px] text-white">
                {nice(sideList.heading)}
              </h2>

              <ul className="mt-8 grid gap-4">
                {sideList.items.map((b) => (
                  <li
                    key={b}
                    className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-lg font-medium text-white transition-colors hover:border-[#B28B36]/60 hover:bg-white/15"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 6. Other pages (3 columns, like the menu) */}
      <Section title={`Other ${c.label.toLowerCase()} we offer`}>
        <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {c.list
            .filter((o: Offering) => o.slug !== item.slug)
            .map((o: Offering) => (
              <Link
                key={o.slug}
                href={`/${kind}/${o.slug}`}
                className="border-b border-[#DDE3EC] py-4 text-lg font-semibold text-[#071536] transition-colors hover:text-[#B28B36]"
              >
                {o.title} <span aria-hidden>↗</span>
              </Link>
            ))}
        </div>
      </Section>

      <CoralCta
        title="Ready to move your business forward?"
        text={`Talk to our team about your ${item.title.toLowerCase()} requirements.`}
        href={contactHref}
      />
    </>
  );
}
