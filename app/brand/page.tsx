
import type { Metadata } from "next";
import { Block, CORAL, DarkHero, InfoGrid, Pill } from "@/components/ltm";
import { contactInfo } from "@/lib/content";
import { brandRules, palette, voice } from "@/lib/company";

export const metadata: Metadata = { title: "Brand" };

export default function Brand() {
  return (
    <>
      <DarkHero
        title={<>Our brand</>}
        text="Innovate. Transform. Grow. This is how we look, sound and show up for our customers."
        cta={{ label: "Request the brand kit", href: `mailto:${contactInfo.email}?subject=Brand%20kit` }}
      />

      <Block grey title="Our logo" text="Our wordmark is simple and confident. Use the right version for the background.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid h-[220px] place-items-center rounded-3xl bg-black font-display text-4xl font-extrabold tracking-[-1px]" style={{ color: CORAL }}>
            RULINGMIND<small className="ml-2 font-sans text-sm tracking-[3px] text-white">TECH</small>
          </div>
          <div className="grid h-[220px] place-items-center rounded-3xl bg-white font-display text-4xl font-extrabold tracking-[-1px]">
            RULING<b className="text-brand">MIND</b><small className="ml-2 font-sans text-sm tracking-[3px] text-[#666]">TECH</small>
          </div>
        </div>
      </Block>

      <Block title="Colour">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {palette.map((c) => (
            <div key={c.name} className={`flex h-[160px] flex-col justify-end rounded-2xl p-4 ${c.dark ? "text-white" : "text-ink"} ${c.hex === "#f3f6f9" ? "border border-[#ddd]" : ""}`} style={{ background: c.hex }}>
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm opacity-80">{c.hex}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block grey title="Typography" text="Two typefaces, used with a light touch.">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8">
            <div className="font-display text-6xl font-medium">Aa</div>
            <h3 className="mt-3 font-display text-2xl font-medium">Manrope</h3>
            <p className="text-[#555]">Headlines and display text.</p>
          </div>
          <div className="rounded-3xl bg-white p-8">
            <div className="font-sans text-6xl">Aa</div>
            <h3 className="mt-3 font-display text-2xl font-medium">DM Sans</h3>
            <p className="text-[#555]">Body copy and interface text.</p>
          </div>
        </div>
      </Block>

      <Block title="How we sound">
        <InfoGrid items={voice} />
      </Block>

      <Block grey title="Using the logo">
        <ul className="grid gap-3 md:grid-cols-2">
          {brandRules.map((r) => (
            <li key={r} className="rounded-2xl bg-white p-5 text-lg">{r}</li>
          ))}
        </ul>
        <div className="mt-8">
          <Pill href="/contact">Questions about the brand? Contact us <span aria-hidden>→</span></Pill>
        </div>
      </Block>
    </>
  );
}
