
import type { Metadata } from "next";
import { Block, CORAL, DarkHero, InfoGrid, Pill } from "@/components/ltm";
import { partnerTypes, techGroups } from "@/lib/company";

export const metadata: Metadata = { title: "Partners" };

export default function Partners() {
  return (
    <>
      <DarkHero
        title={<>Better<br />together</>}
        text="We build with trusted platforms and welcome partners who share our focus on practical, secure technology."
        cta={{ label: "Become a partner", href: "/contact?service=Other" }}
      />

      <Block grey title="Ways to partner">
        <InfoGrid items={partnerTypes} />
      </Block>

      <Block
        title="Technologies we work with"
        text="These are the platforms and tools our engineers use every day. They are not formal partnerships."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-[#e3e3e3] p-6">
              <h3 className="font-display text-2xl font-medium">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span key={t} className="rounded-full px-3 py-1 text-sm font-semibold text-white" style={{ background: CORAL }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Block>

      <Block
        grey
        title="Interested in collaborating?"
        text="If you would like to co-create, refer customers or explore new opportunities with us, we would love to hear from you."
      >
        <Pill href="/contact?service=Other">Connect with us <span aria-hidden>→</span></Pill>
      </Block>
    </>
  );
}
