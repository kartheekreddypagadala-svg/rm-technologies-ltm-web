"use client"; // This file runs in the browser because it reacts to button clicks.

import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// One card in the carousel (we pass these in from the careers page).
export type CarouselItem = { href: string; title: string; tag: string; image: string };

export default function CareersCarousel({ items }: { items: CarouselItem[] }) {
  // "ref" gives us direct access to the scrolling row so buttons can move it.
  const row = useRef<HTMLDivElement>(null);

  // Scroll the row left (-1) or right (+1) by roughly one card.
  const slide = (direction: -1 | 1) => {
    const el = row.current;
    if (!el) return;
    el.scrollBy({ left: direction * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  // Round arrow button used on both sides.
  const arrow = "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full md:grid";

  return (
    <div className="relative">
      <button aria-label="Previous" onClick={() => slide(-1)} className={`${arrow} -left-4 bg-white/20 text-white hover:bg-white/30`}>
        <ChevronLeft size={22} />
      </button>

      {/* snap-x + snap-start = cards "click" into place while scrolling */}
      <div ref={row} className="flex snap-x gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((c) => (
          <Link key={c.href} href={c.href} className="group w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[30%]">
            <h3 className="min-h-[64px] font-display text-[22px] font-bold leading-snug text-white">{c.title}</h3>
            <span className="mt-4 inline-block rounded-full bg-[#f2553f] px-3 py-1 text-[11px] font-extrabold uppercase text-white">{c.tag}</span>
            <div
              role="img"
              aria-label={c.title}
              className="mt-4 h-[300px] rounded-[20px] bg-cover bg-center transition group-hover:brightness-110"
              style={{ backgroundImage: `url('${c.image}')` }}
            />
          </Link>
        ))}
      </div>

      <button aria-label="Next" onClick={() => slide(1)} className={`${arrow} -right-4 bg-[#f6f3a8] text-ink hover:bg-[#fffbb8]`}>
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
