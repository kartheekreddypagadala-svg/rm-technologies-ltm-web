
import Link from "next/link";
import type { ReactNode } from "react";
import type { Item, Status } from "@/lib/content";
import Icon from "./Icon";

// Badge styles
const badge: Record<Status, string> = {
  "Available Now": "bg-[#F3F6FA] text-[#071536]",
  Pilot: "bg-[#B28B36]/15 text-[#071536]",
  Planned: "bg-[#DDE3EC] text-[#374151]",
};

// Badge component
export const Badge = ({ status }: { status: Status }) => (
  <span
    className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${badge[status]}`}
  >
    {status}
  </span>
);

// Page Hero
export function PageHero({
  crumb,
  eyebrow,
  title,
  text,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section
      className="bg-cover bg-center py-20 text-white md:py-[105px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg,#071536f5,#071536a6),url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85')",
      }}
    >
      <div className="wrap">
        <div className="mb-[22px] text-xs text-[#DDE3EC]">
          Home / {crumb}
        </div>

        <div className="eyebrow !text-[#B28B36]">{eyebrow}</div>

        <h1 className="h1 max-w-[820px]">{title}</h1>

        <p className="max-w-[620px] text-[17px] leading-[1.8] text-[#DDE3EC]">
          {text}
        </p>
      </div>
    </section>
  );
}

// Intro component
export function Intro({
  eyebrow,
  title,
  text,
  dark,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: ReactNode;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 max-w-[720px]">
      <div className="eyebrow">{eyebrow}</div>

      <h2 className="h2">{title}</h2>

      {text && (
        <p
          className={`leading-[1.8] ${
            dark ? "text-[#DDE3EC]" : "text-[#374151]"
          }`}
        >
          {text}
        </p>
      )}

      {children}
    </div>
  );
}

// Cards component
export function Cards({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => {
        const card = (
          <div className="h-full min-h-[230px] border border-[#DDE3EC] bg-white p-7 text-[#071536] transition hover:-translate-y-[5px] hover:border-[#B28B36] hover:shadow-[0_18px_45px_#07153618]">
            {c.num && (
              <div className="text-[11px] font-extrabold tracking-[1px] text-[#B28B36]">
                {c.num}
              </div>
            )}

            <div className="flex items-start justify-between">
              {c.icon ? (
                <div className="my-[22px] text-[#B28B36]">
                  <Icon name={c.icon} size={26} />
                </div>
              ) : (
                <span />
              )}

              {c.badge && <Badge status={c.badge} />}
            </div>

            <h3 className="mb-2.5 font-display text-xl font-bold">
              {c.title}
            </h3>

            <p className="text-sm leading-[1.7] text-[#374151]">
              {c.text}
            </p>

            {c.href && (
              <span className="more text-[#B28B36]">Learn more ↗</span>
            )}
          </div>
        );

        return c.href ? (
          <Link key={c.title} href={c.href} className="block">
            {card}
          </Link>
        ) : (
          <div key={c.title}>{card}</div>
        );
      })}
    </div>
  );
}

// Photo component
export function Photo({ src }: { src: string }) {
  return (
    <div
      role="img"
      aria-label=""
      className="min-h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
}

// ======================================
// ARE YOU READY - REDESIGNED CTA SECTION
// ======================================

export function Cta({
  title,
  text,
  service,
}: {
  title?: ReactNode;
  text: string;
  service?: string;
}) {
  const contactHref = service
    ? `/contact?service=${encodeURIComponent(service)}`
    : "/contact";

  return (
    <section className="w-full bg-[#071536] px-5 py-16 text-white sm:px-8 md:px-12 md:py-24">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0D2045]">

        {/* Gold particle wave */}
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
              <stop offset="0%" stopColor="#D9B86A" />
              <stop offset="55%" stopColor="#B28B36" />
              <stop offset="100%" stopColor="#8A6928" />
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
            stroke="#D9B86A"
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
              {title ?? (
                <>
                  Are you
                  <br />
                  ready?
                </>
              )}
            </h2>
          </div>

          {/* Right description */}
          <div className="md:pl-4">
            <p className="max-w-[550px] text-[18px] font-medium leading-[1.55] text-[#F3F6FA] md:text-[23px]">
              {text}
            </p>

            {/* Contact button */}
            <Link
              href={contactHref}
              className="mt-9 inline-flex items-center gap-4 rounded-full bg-[#B28B36] px-7 py-3 text-[17px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#071536]"
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
