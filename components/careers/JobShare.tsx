
"use client";

import { useEffect, useState } from "react";
import {
  Share2,
  ChevronDown,
  Facebook,
  Mail,
  Copy,
  Check,
} from "lucide-react";

type Props = {
  title: string;
  href: string;
};

export default function JobShare({ title, href }: Props) {
  const [open, setOpen] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

 useEffect(() => {
  setPageUrl(`${window.location.origin}${href}`);
}, [href]);

  const shareText = `Explore this career opportunity at RulingMindTech: ${title}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(shareText);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this job link:", pageUrl);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-[#d9dfe6] px-5 py-3 font-semibold text-[#172333] transition hover:border-[#f2553f] hover:text-[#f2553f]"
      >
        <Share2 size={17} />
        Share
        <ChevronDown
          size={16}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <button
            aria-label="Close share menu"
            className="fixed inset-0 z-30 cursor-default"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 top-full z-40 mt-3 w-60 rounded-xl border border-[#e5e7eb] bg-white p-2 text-[#172333] shadow-xl">
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#87909d]">
              Share this opportunity
            </p>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[#f3f4f6]"
            >
              <Facebook size={18} />
              Share on Facebook
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[#f3f4f6]"
            >
              <span className="text-lg font-bold text-green-600">◉</span>
              Share on WhatsApp
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[#f3f4f6]"
            >
              <span className="text-base font-bold">𝕏</span>
              Share on X
            </a>

            <a
              href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodedText}%0A${encodedUrl}`}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[#f3f4f6]"
            >
              <Mail size={18} />
              Share by Email
            </a>

            <div className="my-1 border-t border-[#e5e7eb]" />

            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm hover:bg-[#f3f4f6]"
            >
              {copied ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
              {copied ? "Link copied" : "Copy job link"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
