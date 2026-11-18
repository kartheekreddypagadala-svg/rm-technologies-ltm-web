"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import { Cookie, X } from "lucide-react";

import {
  ALL_OFF,
  ALL_ON,
  OPEN_SETTINGS_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoices,
  type CookieCategory
} from "@/lib/cookie-consent";

const TEXT = {
  title: "Your privacy matters to us",

  body:
    "We use essential cookies to keep this website working. With your permission, we also use cookies to understand how the site is used and to improve our services.",

  bodyExtra:
    "Choose what you allow. You can change or withdraw your choice any time using the cookie button at the bottom-right.",

  accept: "Accept All",
  reject: "Reject All",
  customise: "Customise",

  modalTitle: "Cookie preferences",

  modalIntro:
    "Cookies are small files saved on your device. Strictly necessary cookies are always on because the site cannot work without them. Every other category is off until you switch it on.",

  save: "Save my choices",

  withdraw:
    "You can change or withdraw your consent at any time using the cookie button at the bottom-right of any page. Withdrawing consent does not affect cookies used earlier with your permission."
};

type Category = {
  key: CookieCategory | "necessary";
  title: string;
  purpose: string;
  examples: string;
};

const CATEGORIES: Category[] = [
  {
    key: "necessary",
    title: "Strictly necessary",
    purpose:
      "Needed for security, for remembering your cookie choice and for basic site features. These cannot be switched off.",
    examples:
      "Cookie choice record (rmt_consent), kept for 12 months."
  },
  {
    key: "functional",
    title: "Functional",
    purpose:
      "Remember choices you make on the site, such as preferences, so you do not have to repeat them.",
    examples:
      "Preference settings stored on your device."
  },
  {
    key: "analytics",
    title: "Analytics",
    purpose:
      "Help us understand which pages are visited and how the site performs, so we can improve it. Data is used in aggregated form.",
    examples:
      "Website analytics cookies (for example _ga)."
  },
  {
    key: "marketing",
    title: "Marketing",
    purpose:
      "Used to measure the reach of our communications and to show relevant information about our services.",
    examples:
      "Advertising and campaign measurement cookies."
  }
];

const CSS = `
@keyframes rmt-cookie-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes rmt-cookie-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes rmt-cookie-pop {
  from {
    transform: translateY(24px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.cookie-banner {
  animation: rmt-cookie-up .45s cubic-bezier(.22,1,.36,1) both;
}

.cookie-fade {
  animation: rmt-cookie-fade .25s ease both;
}

.cookie-pop {
  animation: rmt-cookie-pop .35s cubic-bezier(.22,1,.36,1) both;
}

@media (prefers-reduced-motion: reduce) {
  .cookie-banner,
  .cookie-fade,
  .cookie-pop {
    animation: none;
  }
}
`;

let bannerAnimated = false;

function Toggle({
  checked,
  onChange,
  label,
  disabled = false
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-7 w-[50px] shrink-0 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071536] focus-visible:ring-offset-2 ${
        checked ? "bg-[#071536]" : "bg-[#DDE3EC]"
      } ${
        disabled
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer"
      }`}
    >
      <span
        className={`absolute left-[3px] top-[3px] h-[22px] w-[22px] rounded-full bg-white shadow transition-transform duration-200 ${
          checked
            ? "translate-x-[22px]"
            : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const [choices, setChoices] =
    useState<ConsentChoices>(ALL_OFF);

  const [animate] = useState(() => !bannerAnimated);

  useEffect(() => {
    if (showBanner) bannerAnimated = true;
  }, [showBanner]);

  const panelRef = useRef<HTMLDivElement>(null);

  const lastFocused = useRef<HTMLElement | null>(null);

  // Check existing cookie choice.
  useEffect(() => {
    const existing = readConsent();

    if (existing) {
      setChoices(existing.choices);
    }

    setShowBanner(!existing);
    setMounted(true);
  }, []);

  const openPanel = useCallback(() => {
    lastFocused.current =
      document.activeElement as HTMLElement | null;

    const existing = readConsent();

    setChoices(
      existing ? existing.choices : ALL_OFF
    );

    setShowPanel(true);
  }, []);

  const closePanel = useCallback(() => {
    setShowPanel(false);
    lastFocused.current?.focus?.();
  }, []);

  // Footer Cookie Settings link.
  useEffect(() => {
    window.addEventListener(
      OPEN_SETTINGS_EVENT,
      openPanel
    );

    return () =>
      window.removeEventListener(
        OPEN_SETTINGS_EVENT,
        openPanel
      );
  }, [openPanel]);

  // Modal keyboard and accessibility behaviour.
  useEffect(() => {
    if (!showPanel) return;

    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePanel();
        return;
      }

      if (e.key !== "Tab") return;

      const items = focusables();

      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (
        e.shiftKey &&
        document.activeElement === first
      ) {
        e.preventDefault();
        last.focus();
      } else if (
        !e.shiftKey &&
        document.activeElement === last
      ) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [showPanel, closePanel]);

  function acceptAll() {
    saveConsent(ALL_ON, "accept_all");

    setChoices(ALL_ON);
    setShowBanner(false);
    setShowPanel(false);
  }

  function rejectAll() {
    saveConsent(ALL_OFF, "reject_all");

    setChoices(ALL_OFF);
    setShowBanner(false);
    setShowPanel(false);
  }

  function saveCustom() {
    saveConsent(choices, "custom");

    setShowBanner(false);
    setShowPanel(false);
  }

  if (!mounted) return null;

  const btnBase =
    "inline-flex h-10 min-w-0 items-center justify-center rounded-full px-2 text-[13px] font-bold md:h-11 md:min-w-[128px] md:px-6 md:text-[14px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071536] focus-visible:ring-offset-2";

  const btnSolid =
    `${btnBase} border border-[#071536] bg-[#071536] text-white hover:bg-[#0d2350]`;

  const btnOutline =
    `${btnBase} border border-[#071536] bg-white text-[#071536] hover:bg-[#F3F6FA]`;

  return (
    <>
      <style>{CSS}</style>

      {/* Cookie settings floating button */}
      {!showBanner && !showPanel && (
        <button
          type="button"
          onClick={openPanel}
          aria-label="Cookie Settings"
          title="Cookie Settings"
          className="fixed bottom-4 right-4 z-[150] grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-[#071536] text-white shadow-[0_6px_20px_rgba(7,21,54,0.35)] transition-colors hover:bg-[#0d2350] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071536] focus-visible:ring-offset-2"
        >
          <Cookie size={20} />
        </button>
      )}

      {/* Bottom cookie banner */}
      {showBanner && !showPanel && (
        <section
          role="region"
          aria-label="Cookie consent"
          className={`${
            animate ? "cookie-banner" : ""
          } fixed inset-x-0 bottom-0 z-[200] w-full border-t-4 border-[#071536] bg-white shadow-[0_-10px_40px_rgba(7,21,54,0.18)]`}
        >
          <div className="mx-auto flex min-h-[3cm] max-w-[1650px] flex-col justify-center gap-2.5 px-4 py-2.5 sm:px-6 md:flex-row md:items-center md:gap-8 md:py-4 lg:px-10">
            <div className="flex flex-1 items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-[#071536] text-white sm:grid"
              >
                <Cookie size={24} />
              </span>

              <div className="min-w-0">
                <h2 className="font-display text-[16px] font-bold leading-tight text-[#071536] md:text-[18px]">
                  {TEXT.title}
                </h2>

                <p className="mt-1 text-[12.5px] leading-[1.45] text-[#374151] md:text-[14px] md:leading-[1.55]">
                  {TEXT.body}{" "}
                  <span className="hidden md:inline">
                    {TEXT.bodyExtra}{" "}
                  </span>

                  <Link
                    href="/cookie-policy"
                    className="whitespace-nowrap font-semibold text-[#071536] underline underline-offset-2 hover:text-[#0d2350]"
                  >
                    Cookie Policy
                  </Link>

                  {" · "}

                  <Link
                    href="/privacy-policy"
                    className="whitespace-nowrap font-semibold text-[#071536] underline underline-offset-2 hover:text-[#0d2350]"
                  >
                    Privacy Notice
                  </Link>
                </p>
              </div>
            </div>

            <div className="grid shrink-0 grid-cols-3 items-center gap-2 md:flex md:flex-nowrap md:gap-2.5">
              <button
                type="button"
                onClick={openPanel}
                className={btnOutline}
              >
                {TEXT.customise}
              </button>

              <button
                type="button"
                onClick={rejectAll}
                className={btnSolid}
              >
                {TEXT.reject}
              </button>

              <button
                type="button"
                onClick={acceptAll}
                className={btnSolid}
              >
                {TEXT.accept}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Cookie preferences modal */}
      {showPanel && (
        <div
          className="cookie-fade fixed inset-0 z-[210] flex items-end justify-center bg-[#071536]/60 p-0 sm:items-center sm:p-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closePanel();
            }
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-panel-title"
            className="cookie-pop flex max-h-[92dvh] w-full max-w-[680px] flex-col overflow-hidden rounded-t-[24px] border border-[#DDE3EC] bg-white shadow-[0_30px_80px_rgba(7,21,54,0.35)] sm:rounded-[24px]"
          >
            <div className="flex items-start justify-between gap-4 bg-[#071536] px-6 py-5 text-white">
              <div>
                <h2
                  id="cookie-panel-title"
                  className="font-display text-[22px] font-bold !text-white"
                >
                  {TEXT.modalTitle}
                </h2>

                <p className="mt-1 text-[13px] leading-[1.6] text-[#DDE3EC]">
                  {TEXT.modalIntro}
                </p>
              </div>

              <button
                type="button"
                onClick={closePanel}
                aria-label="Close cookie preferences"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-[#071536] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-2">
              {CATEGORIES.map((cat) => {
                const necessary =
                  cat.key === "necessary";

                const checked = necessary
                  ? true
                  : choices[cat.key as CookieCategory];

                return (
                  <div
                    key={cat.key}
                    className="flex items-start justify-between gap-5 border-b border-[#DDE3EC] py-5 last:border-b-0"
                  >
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-bold text-[#071536]">
                        {cat.title}

                        {necessary && (
                          <span className="ml-2 rounded-full bg-[#F3F6FA] px-2.5 py-0.5 align-middle text-[11px] font-bold text-[#071536]">
                            Always active
                          </span>
                        )}
                      </h3>

                      <p className="mt-1.5 text-[13.5px] leading-[1.6] text-[#374151]">
                        {cat.purpose}
                      </p>

                      <p className="mt-1 text-[12.5px] leading-[1.5] text-[#374151]/80">
                        {cat.examples}
                      </p>
                    </div>

                    <Toggle
                      checked={checked}
                      disabled={necessary}
                      label={`${cat.title} cookies`}
                      onChange={(v) =>
                        setChoices((c) => ({
                          ...c,
                          [cat.key as CookieCategory]: v
                        }))
                      }
                    />
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[#DDE3EC] bg-[#F3F6FA] px-6 py-5">
              <p className="mb-4 text-[12.5px] leading-[1.6] text-[#374151]">
                {TEXT.withdraw}{" "}

                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#071536] underline underline-offset-2"
                >
                  Cookie Policy
                </Link>

                {" · "}

                <Link
                  href="/privacy-policy"
                  className="font-semibold text-[#071536] underline underline-offset-2"
                >
                  Privacy Notice
                </Link>
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={rejectAll}
                  className={btnSolid}
                >
                  {TEXT.reject}
                </button>

                <button
                  type="button"
                  onClick={saveCustom}
                  className={btnOutline}
                >
                  {TEXT.save}
                </button>

                <button
                  type="button"
                  onClick={acceptAll}
                  className={btnSolid}
                >
                  {TEXT.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}