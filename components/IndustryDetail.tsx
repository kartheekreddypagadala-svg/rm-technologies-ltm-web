
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

import { industries } from "@/lib/content";
import { howWeWork, industryExtra } from "@/lib/industries-extra";

// Page title and description for one industry.
export function industryMetadata(slug: string): Metadata {
  const s = industries.find((i) => i.slug === slug);

  return {
    title: s ? `${s.title} | RulingMindTech` : "Industries",
    description: s?.summary,
  };
}

// The one shared design used by EVERY industry page, so they all look the same.
export default function IndustryDetail({ slug }: { slug: string }) {
  const s = industries.find((i) => i.slug === slug);

  if (!s) notFound();

  const x = industryExtra[s.slug];

  // The three lists stored in content.ts, in this order: challenges, solutions, benefits.
  const [challenges, solutions, benefits] = s.points.map((p) => p.items);

  return (
    <>
      {/* 1. Hero with picture */}
      <OfferingHero
        crumb={`Industries we serve / ${s.title}`}
        title={x?.headline ?? s.title}
        text={s.summary}
        image={x?.image}
        cta={{ label: `Talk about ${s.title}`, href: "/contact" }}
      />

      {/* 2. Overview */}
      <Section grey title={<>What we see in<br />{s.title}</>}>
        <p className="max-w-[720px] text-xl leading-[1.7] text-[#374151]">
          {x?.overview ?? s.summary}
        </p>
      </Section>

      {/* 3. Challenges */}
      <Section title="Challenges we help with">
        <NumberedList items={challenges} />
      </Section>

      {/* 4. How we help */}
      <Section
        grey
        title="How we help"
        text="Practical technology, delivered in clear steps."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {solutions.map((t) => (
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

        {x && (
          <div className="mt-10 rounded-3xl border border-[#DDE3EC] bg-white p-7">
            <div className="text-sm font-bold" style={{ color: CORAL }}>
              Typical projects
            </div>

            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {x.projects.map((p) => (
                <li key={p} className="text-lg font-medium text-[#374151]">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* 5. How we work + what you gain (dark) */}
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
              {howWeWork.map((h, i) => (
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

                    <p className="mt-1 text-[#DDE3EC]">{h.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="font-display text-[clamp(30px,4vw,48px)] font-medium tracking-[-1.5px] text-white">
              What you gain
            </h2>

            <ul className="mt-8 grid gap-4">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-5 text-lg font-medium text-white transition-colors hover:border-[#B28B36]/60 hover:bg-white/15"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Other industries (3 columns, like the menu) */}
      <Section title="Other industries we serve">
        <div className="grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {industries
            .filter((o) => o.slug !== s.slug)
            .map((o) => (
              <Link
                key={o.slug}
                href={`/industries/${o.slug}`}
                className="border-b border-[#DDE3EC] py-4 text-lg font-semibold text-[#071536] transition-colors hover:text-[#B28B36]"
              >
                {o.title} <span aria-hidden>↗</span>
              </Link>
            ))}
        </div>
      </Section>

      <CoralCta
        title="Ready to talk?"
        text={`Tell us about your ${s.title.toLowerCase()} goals.`}
        href="/contact"
      />
    </>
  );
}
