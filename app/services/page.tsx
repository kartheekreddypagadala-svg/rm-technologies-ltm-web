import type { Metadata } from "next";

import OfferingCards from "@/components/OfferingCards";
import { CORAL, CoralCta, OfferingHero, Section } from "@/components/WhatWeDoParts";
import { services } from "@/lib/content";
import { serviceExtra, whyUs } from "@/lib/whatwedo-extra";

export const metadata: Metadata = {
  title: "Our Services | RulingMindTech",
  description:
    "Discover cloud, software engineering, AI, data, cybersecurity and digital services from RulingMindTech.",
};

export default function ServicesPage() {
  const groups = Array.from(new Set(services.map((s) => s.group)));

  return (
    <>
      {/* 1. Hero */}
      <OfferingHero
        crumb="What we do / Services"
        title={<>Engineering the foundations<br />of what&apos;s next.</>}
        text="Fourteen connected technology capabilities to help you modernise, innovate and operate with confidence."
        cta={{ label: "Talk to an expert", href: "/contact" }}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. All services, grouped like the menu: cards with a picture */}
      {groups.map((group, i) => (
        <Section
          key={group}
          grey={i % 2 === 0}
          title={group ?? "Services"}
          text={i === 0 ? "Pick a service to see the benefits, technologies and typical projects." : undefined}
        >
          <OfferingCards
            items={services.filter((s) => s.group === group)}
            base="/services"
            extra={serviceExtra}
          />
        </Section>
      ))}

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
