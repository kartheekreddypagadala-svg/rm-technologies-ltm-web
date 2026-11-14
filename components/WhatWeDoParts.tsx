
import Link from "next/link";
import type { ReactNode } from "react";

// Building blocks shared by every Services and Solutions page.
// Colours match the RULINGMIND Technologies brand palette.

export const CORAL = "#B28B36";

// Dotted texture made with CSS.
export const dots = (color: string = CORAL) => ({
  backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.6px)`,
  backgroundSize: "7px 7px",
});

// Gold pill button.
export function Pill({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-[#B28B36] px-6 py-3 text-[15px] font-semibold text-[#071536] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071536]"
    >
      {children}
    </Link>
  );
}

// Big hero. If "image" is given it fills the background under a dark overlay.
export function OfferingHero({
  crumb,
  title,
  text,
  image,
  cta,
}: {
  crumb: string;
  title: ReactNode;
  text: string;
  image?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#071536] text-white">

      {/* BACKGROUND IMAGE */}
      {image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      )}

      {/* STRONG NAVY OVERLAY FOR READABILITY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071536]/95 via-[#071536]/85 to-[#071536]/55"
      />

      {/* SUBTLE GOLD LIGHT EFFECT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#B28B36]/10 blur-[120px]"
      />

      {/* GOLD DOTTED PATTERN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-0 h-[60%] w-[55%] opacity-40"
        style={{
          ...dots("#B28B36"),
          clipPath:
            "polygon(0 100%, 35% 55%, 60% 70%, 100% 0, 100% 100%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="wrap relative z-10 flex min-h-[460px] flex-col justify-end py-14 md:min-h-[540px] md:py-20">

        {/* BREADCRUMB */}
        <div className="mb-5 text-sm font-semibold text-white/85">
          {crumb}
        </div>

        {/* HEADING */}
        <h1 className="max-w-[820px] font-display text-[clamp(40px,6vw,80px)] font-medium leading-[1.04] tracking-[-2px] text-white">
          {title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-[620px] text-lg leading-[1.6] text-[#DDE3EC]">
          {text}
        </p>

        {/* CTA */}
        {cta && (
          <div className="mt-8">
            <Pill href={cta.href}>
              {cta.label} <span aria-hidden="true">→</span>
            </Pill>
          </div>
        )}
      </div>
    </section>
  );
}

// Section wrapper with a big heading.
export function Section({
  title,
  text,
  grey,
  children,
}: {
  title: ReactNode;
  text?: string;
  grey?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className={`block ${grey ? "bg-[#F3F6FA]" : "bg-white"}`}>
      <div className="wrap">
        <div className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(30px,4.2vw,52px)] font-medium leading-[1.1] tracking-[-1.5px] text-[#071536]">
            {title}
          </h2>

          {text && (
            <p className="mt-5 text-lg leading-[1.7] text-[#374151]">
              {text}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}

// Numbered rows (01, 02, 03 ...).
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((t, i) => (
        <li
          key={t}
          className="flex items-baseline gap-6 border-b border-[#DDE3EC] py-5 first:border-t"
        >
          <span className="text-lg font-medium text-[#B28B36]">
            {String(i + 1).padStart(2, "0")}
          </span>

          <span className="font-display text-[clamp(22px,2.6vw,32px)] font-medium text-[#071536]">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Shared gold-accent CTA section.
export function CoralCta({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <section className="w-full bg-[#071536] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[30px] bg-[#071536]">

        {/* Gold particle ribbon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 450"
          preserveAspectRatio="none"
          className="pointer-events-none absolute left-0 top-0 h-full w-[68%]"
        >
          <defs>
            <linearGradient
              id="cta-ribbon-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#D8B76C" />
              <stop offset="55%" stopColor="#B28B36" />
              <stop offset="100%" stopColor="#80601F" />
            </linearGradient>

            <filter
              id="cta-ribbon-grain"
              x="-20%"
              y="-30%"
              width="150%"
              height="170%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.7"
                numOctaves="2"
                seed="8"
                result="noise"
              />

              <feColorMatrix
                in="noise"
                type="saturate"
                values="0"
                result="monoNoise"
              />

              <feComponentTransfer in="monoNoise" result="grain">
                <feFuncA type="table" tableValues="0 0.65" />
              </feComponentTransfer>

              <feComposite
                in="grain"
                in2="SourceGraphic"
                operator="in"
                result="clippedGrain"
              />

              <feBlend
                in="SourceGraphic"
                in2="clippedGrain"
                mode="screen"
              />
            </filter>
          </defs>

          <path
            d="M-100 300
               C80 245 190 220 330 190
               C490 155 620 115 770 65
               C870 35 960 5 1100 -40
               L1100 20
               C940 100 820 130 700 185
               C570 245 500 290 480 365
               C465 420 430 400 390 360
               C330 300 250 355 160 430
               L-100 500 Z"
            fill="url(#cta-ribbon-gradient)"
            filter="url(#cta-ribbon-grain)"
            opacity="0.98"
          />

          <path
            d="M-80 330 C150 245 290 205 450 160 C640 105 820 65 1080 -30"
            stroke="#D8B76C"
            strokeWidth="24"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>

        {/* Main content */}
        <div className="relative z-10 grid min-h-[418px] grid-cols-1 items-center gap-10 px-8 py-16 md:grid-cols-2 md:px-16 md:py-20 lg:px-20">

          {/* Left heading */}
          <div>
            <h2 className="max-w-[430px] text-[58px] font-semibold leading-[1.05] tracking-[-2px] text-white md:text-[76px] lg:text-[82px]">
              Are you
              <br />
              ready?
            </h2>
          </div>

          {/* Right description */}
          <div className="md:pl-4">
            <p className="max-w-[550px] text-[18px] font-medium leading-[1.55] text-white md:text-[23px]">
              The most forward-thinking leaders aren't just
              adopting new tools. They are taking Business
              Creativity to the next level. To not simply
              outperform the market, but to Outcreate it.
            </p>

            <Link
              href={href}
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#B28B36] px-7 py-3 text-[17px] font-semibold text-[#071536] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071536]"
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
  );
}
