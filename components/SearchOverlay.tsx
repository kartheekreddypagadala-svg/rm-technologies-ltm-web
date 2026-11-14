
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/lib/search";

export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    input.current?.focus();

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();

    if (t.length < 2) return [];

    return searchIndex
      .filter((i) =>
        `${i.title} ${i.text} ${i.type}`.toLowerCase().includes(t)
      )
      .slice(0, 8);
  }, [q]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-50 bg-[#071536]/95 p-4 pt-[12vh] backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-[640px] overflow-hidden rounded-sm border border-[#DDE3EC] bg-white text-[#374151] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-[#DDE3EC] px-4">
          <Search size={18} className="shrink-0 text-[#B28B36]" />

          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services, industries, solutions, insights..."
            className="h-14 w-full bg-transparent text-[15px] text-[#071536] outline-none placeholder:text-[#6B7280]"
          />

          <button
            onClick={onClose}
            aria-label="Close search"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#374151] transition-colors hover:bg-[#F3F6FA] hover:text-[#B28B36]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search results */}
        <ul className="max-h-[50vh] overflow-auto bg-white">
          {results.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                onClick={onClose}
                className="block border-b border-[#DDE3EC] px-4 py-3 transition-colors hover:bg-[#F3F6FA]"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#B28B36]">
                  {r.type}
                </span>

                <div className="font-semibold text-[#071536] transition-colors hover:text-[#B28B36]">
                  {r.title}
                </div>
              </Link>
            </li>
          ))}

          {q.trim().length >= 2 && results.length === 0 && (
            <li className="px-4 py-6 text-sm text-[#374151]">
              No results for “{q}”.
            </li>
          )}

          {q.trim().length < 2 && (
            <li className="px-4 py-6 text-sm text-[#374151]">
              Type at least 2 characters.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
