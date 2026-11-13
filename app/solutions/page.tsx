import type { Metadata } from "next";

import OfferingCards from "@/components/OfferingCards";
import { CORAL, CoralCta, OfferingHero, Section } from "@/components/WhatWeDoParts";
import { solutions } from "@/lib/content";
import { solutionExtra, whyUs } from "@/lib/whatwedo-extra";

export const metadata: Metadata = {
  title: "Solutions | RulingMindTech",
  description:
    "Explore RulingMindTech digital transformation, cloud, AI, automation and enterprise solutions.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* 1. Hero */}
      <OfferingHero
        crumb="What we do / Solutions"
        title={<>Turning complex challenges<br />into clear opportunities.</>}
        text="Solutions that connect technology, people and business strategy to help organisations create their next advantage."
        cta={{ label: "Talk to an expert", href: "/contact" }}
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. All solutions: cards with a picture */}
      <Section
        grey
        title="Choose your solution"
        text="Every organisation has a different challenge. Pick a solution to see what we deliver and the outcomes you can expect."
      >
        <OfferingCards items={solutions} base="/solutions" extra={solutionExtra} />
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

      <CoralCta
        title="Let’s talk about your goals."
        text="Our team will respond to your enquiry."
        href="/contact"
      />
    </>
  );
}
