
import type { Metadata } from "next";
import { Accessibility, Compass, Heart, TrendingUp } from "lucide-react";
import { Block, CORAL, DarkHero, ExploreMore, Pill, Swoosh, dots } from "@/components/ltm";
import { img, leadership, stats } from "@/lib/content";
import { aboutValues } from "@/lib/company";

export const metadata: Metadata = { title: "About Us" };

const icons = {
  purpose: Heart,
  people: Accessibility,
  future: Compass,
  impact: TrendingUp,
};

const statStyles = [
  "bg-[#374151] text-white",
  "text-white",
  "bg-[#B28B36] text-white",
  "bg-[#071536] text-white",
];

export default function About() {
  return (
    <>
      <DarkHero
        title={<>Technology<br />that makes<br />progress<br />possible</>}
        text="RulingMindTech is a technology company building cloud, AI and software for growing businesses, with people and outcomes at the centre."
        cta={{ label: "About our brand", href: "/brand" }}
        image="/assets/hero-innovation.png"
      />

      <section className="relative overflow-hidden bg-[#F3F6FA] py-24">
        <Swoosh side="left" />
        <div className="wrap relative">
          <div className="md:ml-[40%]">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-[-2px] text-[#071536]">
              Where engineering<br />
              <span style={{ color: CORAL }}>meets business</span>
            </h2>
            <p className="mt-8 max-w-[640px] text-lg leading-[1.7] text-[#374151]">
              We sit between the people who run a business and the tools that could help it grow. Our job is to listen first, then build technology that fits.
            </p>
            <p className="mt-4 max-w-[640px] text-lg leading-[1.7] text-[#374151]">
              Cloud, AI, software, data and security are all handled by one team, so you do not have to coordinate five suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6FA] pb-24">
        <div className="wrap grid gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-[clamp(34px,4vw,52px)] font-medium leading-[1.1] tracking-[-1.5px] text-[#071536]">
            What we<br />stand for
          </h2>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {aboutValues.map((v) => {
              const Icon = icons[v.icon as keyof typeof icons];
              return (
                <div key={v.title}>
                  <span style={{ color: CORAL }}>
                    <Icon size={44} strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-5 font-display text-[26px] font-medium text-[#071536]">{v.title}</h3>
                  <p className="mt-3 max-w-[360px] leading-[1.6] text-[#374151]">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071536] py-24 text-white">
        <div className="wrap">
          <h2 className="text-center font-display text-[clamp(34px,4.5vw,58px)] font-medium tracking-[-1.5px]">
            Leadership
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-center text-[#DDE3EC]">
            Add names, photos and short bios in lib/content.ts (leadership).
          </p>
          <div className="mx-auto mt-12 grid max-w-[1000px] gap-6 md:grid-cols-3">
            {leadership.map((p) => (
              <div key={p.text} className="rounded-3xl border border-white/10 bg-[#0D2045] p-4">
                <div className="grid h-[260px] place-items-center rounded-2xl bg-[#071536] font-display text-6xl text-[#B28B36]">
                  RM
                </div>
                <div className="px-2 pb-2 pt-5">
                  <div className="font-display text-xl font-medium text-white">{p.title}</div>
                  <div className="text-sm text-[#DDE3EC]">{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-[clamp(34px,4.5vw,58px)] font-medium leading-[1.05] tracking-[-2px] text-[#071536]">
              Small team. Big ambition.
            </h2>
            <p className="mt-8 max-w-[520px] text-lg leading-[1.75] text-[#374151]">
              We are a young company and we like it that way. Decisions are quick, everyone talks to customers, and every project gets senior attention. We pair modern cloud platforms with practical AI and careful security.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map(([big, small], i) => (
              <div
                key={big}
                className={`relative min-h-[230px] overflow-hidden rounded-3xl p-6 ${statStyles[i]}`}
                style={i === 1 ? { background: CORAL } : undefined}
              >
                {i === 0 && (
                  <div aria-hidden className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url('${img("photo-1522071820081-009f0129c71c")}')` }}
                  />
                )}
                {i === 3 && <div aria-hidden className="absolute inset-0 opacity-70" style={dots()} />}
                <div className="relative">
                  <div className="font-display text-[clamp(44px,5vw,68px)] font-medium leading-none">{big}</div>
                  <div className="mt-4 text-xl leading-snug">{small}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExploreMore title="Keep exploring" items={[
        { title: "Projects we deliver", text: "From web platforms to AI workflows, see what we build.", href: "/our-work" },
        { title: "Work with us", text: "Partner with RulingMindTech or start a project together.", href: "/partners" },
        { title: "Company information", text: "How we are run, and how to reach our team.", href: "/investors" },
      ]} />

      <section className="block">
        <div className="wrap grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div
            role="img"
            aria-label="Team collaborating"
            className="h-[360px] rounded-2xl bg-cover bg-center md:h-[480px]"
            style={{ backgroundImage: `url('${img("photo-1522071820081-009f0129c71c")}')` }}
          />
          <div>
            <h2 className="font-display text-[clamp(34px,4.5vw,58px)] font-medium leading-[1.08] tracking-[-1.5px] text-[#071536]">
              Good work starts with good people.
            </h2>
            <p className="mt-8 text-lg leading-[1.8] text-[#374151]">
              We are building a team where people share ideas freely, learn from each other and take pride in what they ship. If you like solving real problems with kind, curious colleagues, you will fit right in.
            </p>
            <div className="mt-8">
              <Pill href="/careers" dark>Explore our careers</Pill>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
