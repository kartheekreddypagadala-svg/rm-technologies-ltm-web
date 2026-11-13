import Link from "next/link";

import Icon from "@/components/Icon";
import { CORAL } from "@/components/WhatWeDoParts";
import type { Offering } from "@/lib/content";
import type { OfferingExtra } from "@/lib/whatwedo-extra";

// Grid of picture cards used on the main Services and Solutions pages.
export default function OfferingCards({
  items,
  base,
  extra,
}: {
  items: Offering[];
  base: string;
  extra: Record<string, OfferingExtra>;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => {
        const x = extra[s.slug];
        return (
          <Link
            key={s.slug}
            href={`${base}/${s.slug}`}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div
              role="img"
              aria-label=""
              className="h-[190px] bg-[#1b1b1b] bg-cover bg-center transition group-hover:brightness-110"
              style={x ? { backgroundImage: `url('${x.image}')` } : undefined}
            />
            <div className="flex flex-1 flex-col p-7">
              <span style={{ color: CORAL }}>
                <Icon name={s.icon} size={30} />
              </span>
              <h3 className="mt-4 font-display text-[26px] font-medium leading-tight">{s.title}</h3>
              <p className="mt-3 flex-1 leading-[1.6] text-[#444]">{s.summary}</p>
              <span className="mt-6 text-[15px] font-semibold transition group-hover:text-[#f2553f]">
                →&nbsp; Explore {s.title}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
