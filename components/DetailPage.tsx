
import Link from "next/link";

import {
  DarkHero,
  Block,
  ExploreMore,
  Pill,
} from "@/components/ltm";

import Icon from "@/components/Icon";
import type { Offering } from "@/lib/content";

type Props = {
  kind: string;
  base: string;
  item: Offering;
  all: Offering[];
  prefillService?: boolean;
};

const serviceImage =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85";

export default function DetailPage({
  kind,
  base,
  item,
  all,
  prefillService,
}: Props) {
  const related = all
    .filter((entry) => entry.slug !== item.slug)
    .slice(0, 3);

  const contactHref = prefillService
    ? `/contact?service=${encodeURIComponent(item.title)}`
    : "/contact";

  return (
    <>
      {/* LTM STYLE HERO */}
      <DarkHero
        title={item.title}
        text={item.summary}
        cta={{
          label: "Talk to our team",
          href: contactHref,
        }}
        image={serviceImage}
      />

      {/* INTRODUCTION */}
      <Block
        title="Technology that creates new possibilities."
        text={`Discover how RulingMindTech brings ${item.title.toLowerCase()} together with business strategy, engineering and innovation to help organisations move forward.`}
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-[17px] leading-[1.9] text-[#444]">
              We believe technology should do more than solve
              immediate problems. It should create new opportunities,
              simplify the way people work and prepare businesses
              for what comes next.
            </p>

            <p className="mt-5 text-[17px] leading-[1.9] text-[#444]">
              Our approach combines practical expertise, modern
              technology and a focus on measurable business outcomes.
            </p>

            <div className="mt-8">
              <Pill href={contactHref}>
                Discuss your requirements →
              </Pill>
            </div>
          </div>

          <div className="relative min-h-[330px] overflow-hidden rounded-3xl bg-[#1b1b1b] p-8 text-white md:p-10">
            <div
              className="absolute right-0 top-0 h-full w-2/3 opacity-70"
              style={{
                backgroundImage:
                  "radial-gradient(#f2553f 1.2px, transparent 1.6px)",
                backgroundSize: "8px 8px",
                clipPath:
                  "polygon(35% 0,100% 0,100% 100%,0 100%)",
              }}
            />

            <div className="relative z-10">
              <div className="mb-8 text-[#ff7167]">
                <Icon name={item.icon} size={42} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[2px] text-[#ff7167]">
                RulingMindTech
              </p>

              <h3 className="mt-5 max-w-[380px] font-display text-3xl font-medium leading-tight">
                Innovate. Transform. Grow.
              </h3>

              <p className="mt-5 max-w-[350px] leading-7 text-white/70">
                Technology and people working together to create
                lasting business impact.
              </p>
            </div>
          </div>
        </div>
      </Block>

      {/* CONTENT FROM YOUR EXISTING CONTENT FILE */}
      {item.points.map((point, index) => (
        <section
          key={point.heading}
          className={`relative overflow-hidden py-20 md:py-24 ${
            index % 2 === 0 ? "bg-[#e9e9e9]" : "bg-white"
          }`}
        >
          {index % 2 === 0 && (
            <div
              aria-hidden
              className="absolute right-0 top-0 h-full w-[35%] opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(#f2553f 1.2px, transparent 1.6px)",
                backgroundSize: "8px 8px",
                clipPath:
                  "polygon(45% 0,100% 0,100% 100%,0 100%)",
              }}
            />
          )}

          <div className="wrap relative">
            <div className="mb-12 max-w-[760px]">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[2px] text-[#f2553f]">
                {kind} / {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="font-display text-[clamp(34px,4.5vw,58px)] font-medium leading-[1.1] tracking-[-1.5px]">
                {point.heading}
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {point.items.map((value, itemIndex) => (
                <article
                  key={value}
                  className="group flex min-h-[210px] flex-col justify-between rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <span className="text-xs font-extrabold tracking-[2px] text-[#f2553f]">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-7 font-display text-[23px] font-medium leading-tight">
                      {value}
                    </h3>
                  </div>

                  <div className="mt-7 h-[2px] w-10 bg-[#f2553f] transition-all group-hover:w-20" />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* OUR APPROACH */}
      <section className="relative overflow-hidden bg-[#1b1b1b] py-20 text-white md:py-24">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-[45%] opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(#f2553f 1.2px, transparent 1.6px)",
            backgroundSize: "8px 8px",
            clipPath:
              "polygon(40% 0,100% 0,100% 100%,0 100%)",
          }}
        />

        <div className="wrap relative">
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#ff7167]">
            Our approach
          </p>

          <h2 className="mt-5 max-w-[760px] font-display text-[clamp(36px,5vw,60px)] font-medium leading-tight">
            Turning your vision into meaningful outcomes.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              ["01", "Discover", "Understand your goals and challenges."],
              ["02", "Design", "Create the right strategy and architecture."],
              ["03", "Deliver", "Build, integrate, test and launch."],
              ["04", "Evolve", "Improve and optimise continuously."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="border-t border-white/30 pt-6"
              >
                <p className="text-sm font-bold text-[#ff7167]">
                  {number}
                </p>

                <h3 className="mt-5 font-display text-2xl font-medium">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      {related.length > 0 && (
        <ExploreMore
          title={`Explore more ${kind.toLowerCase()}`}
          items={related.map((entry) => ({
            title: entry.title,
            text: entry.summary,
            href: `${base}/${entry.slug}`,
          }))}
        />
      )}

      {/* ARE YOU READY - LTM STYLE CTA */}
      <section className="w-full bg-black px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[30px] bg-[#1b1b1b]">

          {/* Orange-red particle wave */}
          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-[68%]"
            viewBox="0 0 1000 450"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <filter
                id="particle-wave"
                x="-20%"
                y="-30%"
                width="150%"
                height="170%"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018 0.035"
                  numOctaves="3"
                  seed="8"
                  result="noise"
                />

                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="42"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>

              <linearGradient
                id="ribbon-color"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#ff725b" />
                <stop offset="55%" stopColor="#fa503c" />
                <stop offset="100%" stopColor="#c93628" />
              </linearGradient>
            </defs>

            <path
              d="M-80 300 C120 230 230 210 370 185 C520 150 640 105 770 65 C850 40 930 10 1080 -35 L1080 25 C900 105 800 135 690 190 C570 250 500 300 480 365 C465 420 425 395 390 360 C330 300 250 360 170 420 L-80 500 Z"
              fill="url(#ribbon-color)"
              filter="url(#particle-wave)"
              opacity="0.95"
            />

            <path
              d="M-50 280 C160 220 290 200 430 165 C600 120 760 70 1030 -20"
              stroke="#ff6a51"
              strokeWidth="30"
              strokeLinecap="round"
              opacity="0.55"
              filter="url(#particle-wave)"
            />
          </svg>

          {/* CTA content */}
          <div className="relative z-10 grid min-h-[390px] grid-cols-1 items-center gap-10 px-8 py-16 md:grid-cols-2 md:px-16 md:py-20 lg:px-20">

            {/* Left heading */}
            <div>
              <h2 className="max-w-[430px] text-[58px] font-semibold leading-[1.05] tracking-[-2px] text-white md:text-[76px] lg:text-[82px]">
                Are you
                <br />
                ready?
              </h2>
            </div>

            {/* Right description and button */}
            <div className="md:pl-4">
              <p className="max-w-[550px] text-[18px] font-medium leading-[1.55] text-white md:text-[23px]">
                The most forward-thinking leaders aren't just
                adopting new tools. They are taking Business
                Creativity to the next level. To not simply
                outperform the market, but to Outcreate it.
              </p>

              <Link
                href={contactHref}
                className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#f6f9b9] px-7 py-3 text-[17px] font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Contact us

                <span aria-hidden="true" className="text-xl">
                  →
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
