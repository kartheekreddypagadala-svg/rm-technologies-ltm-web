
"use client";

import Link from "next/link";
import { useState } from "react";

export type Entry = { href: string; title: string; text: string; tag: string; meta?: string };

export default function Filterable({ items }: { items: Entry[] }) {
  const [tag, setTag] = useState("All");
  const tags = ["All", ...Array.from(new Set(items.map((i) => i.tag)))];
  const shown = tag === "All" ? items : items.filter((i) => i.tag === tag);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`border px-4 py-2 text-[13px] font-bold transition-colors ${
              tag === t
                ? "border-[#071536] bg-[#071536] text-white"
                : "border-[#DDE3EC] bg-white text-[#071536] hover:border-[#B28B36] hover:text-[#B28B36]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="group block min-h-[200px] border border-[#DDE3EC] bg-white p-7 transition hover:-translate-y-[5px] hover:border-[#B28B36] hover:shadow-[0_18px_45px_#07153618]"
          >
            <div className="text-[11px] font-extrabold uppercase tracking-[1px] text-[#B28B36]">
              {i.tag}{i.meta ? ` · ${i.meta}` : ""}
            </div>

            <h3 className="my-3 font-display text-xl font-bold text-[#071536] transition-colors group-hover:text-[#B28B36]">
              {i.title}
            </h3>

            <p className="text-sm leading-[1.7] text-[#374151]">
              {i.text}
            </p>

            <span className="more text-[#B28B36]">
              Read more ↗
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
