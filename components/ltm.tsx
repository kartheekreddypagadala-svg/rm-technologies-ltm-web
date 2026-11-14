
import Link from "next/link";
import type { ReactNode } from "react";

// RULINGMIND Technologies brand colours.
export const CORAL = "#B28B36";

export const dots = (color: string = CORAL) => ({
  backgroundImage: `radial-gradient(${color} 1.2px, transparent 1.6px)`,
  backgroundSize: "7px 7px",
});

export function Pill({
  href,
  children,
  dark,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition ${
        dark
          ? "border border-white text-white hover:bg-white hover:text-[#071536]"
          : "bg-[#B28B36] text-white hover:bg-[#071536]"
      }`}
    >
      {children}
    </Link>
  );
}

export function DarkHero({
  title,
  text,
  cta,
  image,
}: {
  title: ReactNode;
  text: string;
  cta?: { label: string; href: string };
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#071536] text-white">
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-[60%] opacity-90"
        style={{
          ...dots(),
          clipPath:
            "polygon(25% 0, 70% 0, 100% 40%, 100% 100%, 45% 100%, 12% 60%)",
        }}
      />

      <div className="wrap relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-24 lg:py-28">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
            RulingMindTech
          </p>

          <h1 className="font-display text-[clamp(44px,6.5vw,88px)] font-medium leading-[1.02] tracking-[-2.5px] text-white">
            {title}
          </h1>

          <p className="mt-9 max-w-[520px] text-lg font-medium leading-[1.6] text-white/85 md:mt-12">
            {text}
          </p>

          {cta && (
            <div className="mt-8">
              <Pill href={cta.href}>
                {cta.label}
                <span aria-hidden>→</span>
              </Pill>
            </div>
          )}
        </div>

        {image && (
          <div
            role="img"
            aria-label="RulingMindTech technology and digital transformation"
            className="relative z-10 h-[300px] rounded-3xl bg-cover bg-center shadow-2xl md:h-[460px]"
            style={{ backgroundImage: `url('${image}')` }}
          />
        )}
      </div>
    </section>
  );
}

export function Swoosh({
  side = "left",
}: {
  side?: "left" | "right";
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-y-0 ${
        side === "left" ? "left-0" : "right-0"
      } hidden w-[30%] opacity-70 md:block`}
      style={{
        ...dots(),
        clipPath:
          side === "left"
            ? "polygon(10% 0, 60% 0, 45% 55%, 70% 100%, 0 100%, 0 20%)"
            : "polygon(40% 0, 100% 0, 100% 100%, 30% 100%, 55% 45%)",
      }}
    />
  );
}

export function ExploreMore({
  items,
  title = "Explore more",
}: {
  items: {
    title: string;
    text: string;
    href: string;
  }[];
  title?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#F3F6FA] py-20 md:py-24">
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-[45%] opacity-70"
        style={{
          ...dots(),
          clipPath:
            "polygon(30% 0, 100% 0, 100% 80%, 60% 100%, 0 20%)",
        }}
      />

      <div className="wrap relative">
        <h2 className="font-display text-[clamp(34px,4.5vw,56px)] font-medium tracking-[-1.5px] text-[#071536]">
          {title}
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[260px] flex-col justify-between rounded-3xl border border-[#DDE3EC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B28B36]/50 hover:shadow-xl"
            >
              <div>
                <h3 className="font-display text-[27px] font-medium leading-tight text-[#071536]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-[1.7] text-[#374151]">
                  {item.text}
                </p>
              </div>

              <Link
                href={item.href}
                className="mt-6 text-[15px] font-medium text-[#071536] transition-colors hover:text-[#B28B36]"
              >
                → Find out more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InfoGrid({
  items,
  cols = 3,
}: {
  items: {
    title: string;
    text: string;
    points?: string[];
  }[];
  cols?: 2 | 3 | 4;
}) {
  const grid =
    cols === 4
      ? "lg:grid-cols-4"
      : cols === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${grid}`}>
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-[#DDE3EC] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B28B36]/50 hover:shadow-lg"
        >
          <h3 className="font-display text-[26px] font-medium leading-tight text-[#071536]">
            {item.title}
          </h3>

          <p className="mt-3 leading-[1.6] text-[#374151]">
            {item.text}
          </p>

          {item.points && (
            <ul className="mt-4 grid gap-2 text-[15px] text-[#374151]">
              {item.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span style={{ color: CORAL }}>●</span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function Block({
  title,
  text,
  children,
  grey,
}: {
  title: ReactNode;
  text?: string;
  children?: ReactNode;
  grey?: boolean;
}) {
  return (
    <section className={`block ${grey ? "bg-[#F3F6FA]" : "bg-white"}`}>
      <div className="wrap">
        <div className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] font-medium leading-[1.1] tracking-[-1.5px] text-[#071536]">
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
