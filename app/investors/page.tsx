
import type { Metadata } from "next";
import Link from "next/link";
import { Block, DarkHero, ExploreMore, InfoGrid } from "@/components/ltm";
import { contactInfo } from "@/lib/content";
import { filings, investorPoints } from "@/lib/company";

export const metadata: Metadata = { title: "Investors" };

export default function Investors() {
  return (
    <>
      <DarkHero
        title={<>Investors</>}
        text="Clear, honest information about RulingMindTech, how we are run and where we are heading."
        cta={{ label: "Contact investor relations", href: `mailto:${contactInfo.email}` }}
      />

      <Block grey title="Why RulingMindTech" text="A young technology company with a focused offer and a long-term view.">
        <InfoGrid items={investorPoints} cols={4} />
      </Block>

      <Block title="Reports and filings" text="Documents will be published here as the company grows. Sample entries below: replace before launch.">
        <div className="grid gap-3">
          {filings.map((f) => (
            <div key={f.title} className="flex flex-col gap-2 rounded-2xl border border-[#e3e3e3] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-medium">{f.title}</h3>
                <p className="text-[#555]">{f.text}</p>
              </div>
              <span className="self-start rounded-full bg-[#f7ffc8] px-4 py-1.5 text-sm font-semibold">{f.status}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block grey title="Investor contact">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7">
            <h3 className="font-display text-2xl font-medium">Investor relations</h3>
            <p className="mt-3">
              <a className="text-brand" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p>{contactInfo.phone}</p>
            <p className="mt-2 text-[#555]">{contactInfo.address}</p>
          </div>
          <div className="rounded-3xl bg-white p-7">
            <h3 className="font-display text-2xl font-medium">Governance</h3>
            <p className="mt-3 text-[#555]">Read how we approach privacy, security and responsible business.</p>
            <Link href="/esg" className="more">Environment, Sustainability and Governance ↗</Link>
          </div>
        </div>
      </Block>

      <ExploreMore items={[
        { title: "About us", text: "Who we are and the values that guide us.", href: "/about" },
        { title: "Newsroom", text: "Announcements and company news.", href: "/newsroom" },
        { title: "Partners", text: "Our ecosystem of technology and delivery partners.", href: "/partners" },
      ]} />
    </>
  );
}
