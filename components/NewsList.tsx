
"use client";

import { useState } from "react";
import type { NewsItem } from "@/lib/company";

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [tab, setTab] = useState("All");
  const tabs = ["All", ...Array.from(new Set(items.map((i) => i.type)))];
  const shown = tab === "All" ? items : items.filter((i) => i.type === tab);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              tab === t
                ? "border-[#071536] bg-[#071536] text-white"
                : "border-[#DDE3EC] bg-white text-[#374151] hover:border-[#B28B36] hover:text-[#B28B36]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((n) => (
          <article
            key={n.title}
            className="flex min-h-[220px] flex-col justify-between rounded-3xl border border-[#DDE3EC] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#B28B36] hover:shadow-[0_18px_45px_#07153612]"
          >
            <div>
              <div className="text-sm font-semibold text-[#B28B36]">
                {n.type} · {n.date}
              </div>

              <h3 className="mt-3 font-display text-[26px] font-medium leading-tight text-[#071536]">
                {n.title}
              </h3>

              <p className="mt-3 text-[#374151]">{n.summary}</p>
            </div>
          </article>
        ))}

        {shown.length === 0 && (
          <p className="text-[#374151]">No items yet.</p>
        )}
      </div>
    </>
  );
}
