import type { Metadata } from "next";
import Link from "next/link";

import Icon from "@/components/Icon";
import { CORAL, CoralCta, OfferingHero, Section } from "@/components/WhatWeDoParts";
import { industries } from "@/lib/content";
import { industryExtra, whyUs } from "@/lib/industries-extra";

export const metadata: Metadata = { title: "Industries We Serve | RulingMindTech" };

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <OfferingHero
        crumb="Industries we serve"
        title={<>Industry insight.<br />Technology with purpose.</>}
        text="We build cloud, AI and software for the sectors that keep the world running, with a clear focus on security and results."
        cta={{ label: "Talk to an expert", href: "/contact" }}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. All industries: cards with a picture */}
      <Section
        grey
        title="Choose your industry"
        text="Every sector has its own rules and pressures. Pick yours to see the challenges we help with and how we work."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s) => {
            const x = industryExtra[s.slug];
            return (
              <Link
                key={s.slug}
                href={`/industries/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  role="img"
                  aria-label=""
                  className="h-[190px] bg-[#1b1b1b] bg-cover bg-center transition group-hover:brightness-110"
                  style={x ? { backgroundImage: `url('${x.image}')` } : undefined}
                />
                <div className="flex flex-1 flex-col p-7">
                  <span style={{ color: CORAL }}><Icon name={s.icon} size={30} /></span>
                  <h3 className="mt-4 font-display text-[26px] font-medium leading-tight">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-[1.6] text-[#444]">{s.summary}</p>
                  <span className="mt-6 text-[15px] font-semibold transition group-hover:text-[#f2553f]">
                    →&nbsp; Explore {s.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 3. Why customers choose us */}
      <Section title="Why customers choose us">
        <div className="grid gap-5 md:grid-cols-3">
          {whyUs.map((w, i) => (
            <div key={w.title} className="rounded-3xl border border-[#e3e3e3] p-7">
              <div className="font-display text-5xl font-medium" style={{ color: CORAL }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-2xl font-medium">{w.title}</h3>
              <p className="mt-3 text-[#444]">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CoralCta title="Let’s talk about your goals." text="Our team will respond to your enquiry." href="/contact" />
    </>
  );
}
