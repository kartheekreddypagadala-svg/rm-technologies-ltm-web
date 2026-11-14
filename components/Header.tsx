
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  Search,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { industries, services, solutions } from "@/lib/content";
import SearchOverlay from "./SearchOverlay";

type MenuKey = "what" | "industries" | "about" | null;

const aboutLinks = [
  ["/about", "Company"],
  ["/investors", "Investors"],
  ["/brand", "Brand"],
  ["/newsroom", "Newsroom"],
  ["/partners", "Partners"],
  ["/insights", "Insights"],
  ["/esg", "Environment, Sustainability and Governance"],
  ["/dei", "Diversity, Equity and Inclusion"],
] as const;

function MenuLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-start justify-between gap-3 py-2.5 text-[15px] font-semibold leading-6 text-white/95 transition-colors hover:text-[#B28B36]"
    >
      <span>{children}</span>
      <ArrowUpRight
        size={14}
        className="mt-1 shrink-0 opacity-0 transition group-hover:opacity-100"
      />
    </Link>
  );
}

export default function Header() {
  const path = usePathname();

  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setMenu(null);
    setMobile(false);
  }, [path]);

  const serviceGroups = useMemo(() => {
    const groups = new Map<string, typeof services>();

    services.forEach((item) => {
      const key = item.group || "Technology services";

      groups.set(key, [
        ...(groups.get(key) || []),
        item,
      ]);
    });

    return Array.from(groups.entries());
  }, []);

  const toggle = (key: Exclude<MenuKey, null>) => {
    setMenu((current) => (current === key ? null : key));
  };

  const closeMobile = () => {
    setMobile(false);
  };

  const navButton = (
    key: Exclude<MenuKey, null>,
    label: string
  ) => (
    <button
      type="button"
      aria-expanded={menu === key}
      aria-haspopup="true"
      onMouseEnter={() => setMenu(key)}
      onClick={() => toggle(key)}
      className={`flex h-[108px] shrink-0 items-center gap-2 whitespace-nowrap border-b-[3px] px-0 text-[15px] font-semibold transition ${
        menu === key
          ? "border-white text-white"
          : "border-transparent text-white hover:border-white hover:text-white/80"
      }`}
    >
      {label}

      <ChevronDown
        size={16}
        className={`transition-transform ${
          menu === key ? "rotate-180" : ""
        }`}
      />
    </button>
  );

  const panelClass =
    "absolute left-1/2 top-full z-[120] w-[min(1240px,calc(100vw-40px))] -translate-x-1/2 rounded-b-[18px] border border-white/10 bg-[#071536] px-8 py-8 text-white shadow-[0_28px_80px_rgba(0,0,0,.3)] md:px-12 md:py-9";

  return (
    <header
      className="sticky top-0 z-[100] w-full bg-[#071936] text-white"
      onMouseLeave={() => setMenu(null)}
    >
      {/* MAIN HEADER */}

      <div className="relative border-b border-white/10">

        <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-1.5 px-3 sm:h-[88px] sm:gap-3 sm:px-5 xl:h-[108px] xl:w-[calc(100%-64px)] xl:gap-5">

          {/* MAIN COMPANY LOGO */}

          <Link
            href="/"
            aria-label="RulingMind Technologies home"
            onMouseEnter={() => setMenu(null)}
            className="flex min-w-0 shrink-0 items-center"
          >
            <img
              src="/RULINGMIND_Technologies_Final_Locked_Logo.png"
              alt="RulingMind Technologies"
              className="h-auto w-[126px] object-contain sm:w-[190px] lg:w-[220px] xl:w-[245px] 2xl:w-[270px]"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="hidden h-full flex-1 items-center justify-center gap-5 xl:flex 2xl:gap-8"
            aria-label="Primary navigation"
          >
            {navButton("what", "Services")}

            {navButton("industries", "Industries")}

            {navButton("about", "About us")}

            <Link
              href="/careers"
              onMouseEnter={() => setMenu(null)}
              className="flex h-[108px] shrink-0 items-center whitespace-nowrap border-b-[3px] border-transparent text-[15px] font-semibold text-white transition hover:border-white hover:text-white/80"
            >
              Careers
            </Link>
          </nav>

          {/* RIGHT SIDE */}

          <div className="flex shrink-0 items-center gap-2 sm:gap-4 xl:gap-5">

            {/* GROUP COMPANY BRANDING */}

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">

              <img
                src="/assets/rm-monogram.png"
                alt="RulingMind RM"
                className="h-[25px] w-[36px] shrink-0 object-contain brightness-0 invert sm:h-[38px] sm:w-[58px] xl:h-[42px] xl:w-[65px]"
              />

              <span
                aria-hidden="true"
                className="h-[29px] w-px shrink-0 bg-white sm:h-[40px] sm:w-[2px] xl:h-[46px]"
              />

              <div className="flex min-w-0 shrink-0 flex-col items-start justify-center gap-0 whitespace-nowrap text-white sm:gap-[3px]">

                <span className="text-[8px] font-bold leading-[11px] sm:text-[11px] sm:leading-[15px] xl:text-[13px] xl:leading-[18px]">
                  A RULINGMIND
                </span>

                <span className="text-[8px] font-medium leading-[11px] sm:text-[11px] sm:leading-[15px] xl:text-[13px] xl:leading-[18px]">
                  Group company
                </span>

              </div>
            </div>

            {/* SEARCH BUTTON */}

            <button
              type="button"
              aria-label="Search"
              onClick={() => {
                setSearch(true);
                setMenu(null);
                setMobile(false);
              }}
              className="hidden h-10 w-10 shrink-0 items-center justify-center text-white transition hover:text-[#B28B36] 2xl:flex"
            >
              <Search size={20} />
            </button>

            {/* CONTACT BUTTON */}

            <Link
              href="/contact"
              onMouseEnter={() => setMenu(null)}
              className="hidden h-[42px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 border-white px-4 text-xs font-semibold text-white transition hover:bg-white hover:text-[#071936] xl:inline-flex xl:h-[50px] xl:px-7 xl:text-sm"
            >
              Contact us
            </Link>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center text-white transition hover:text-[#B28B36] xl:hidden"
              aria-label={mobile ? "Close menu" : "Open menu"}
              aria-expanded={mobile}
              aria-controls="mobile-navigation"
              onClick={() => {
                setMobile((current) => !current);
                setMenu(null);
              }}
            >
              {mobile ? (
                <X size={26} />
              ) : (
                <Menu size={26} />
              )}
            </button>

          </div>
        </div>

        {/* SERVICES MEGA MENU - DESKTOP */}

        {menu === "what" && (
          <div
            className={`${panelClass} hidden xl:block`}
            onMouseEnter={() => setMenu("what")}
          >
            <div className="grid gap-9 md:grid-cols-[1fr_1fr_1fr_250px]">

              <div>
                <p className="mb-6 text-[13px] font-semibold uppercase tracking-[1px] text-[#B28B36]">
                  Services
                </p>

                {serviceGroups[0]?.[1].map((item) => (
                  <MenuLink
                    key={item.slug}
                    href={`/services/${item.slug}`}
                  >
                    {item.title}
                  </MenuLink>
                ))}

                <MenuLink href="/services">
                  Explore all services
                </MenuLink>
              </div>

              <div>
                <p className="mb-6 text-[13px] font-semibold uppercase tracking-[1px] text-[#B28B36]">
                  Engineering & Digital
                </p>

                {serviceGroups
                  .slice(1)
                  .flatMap(([, items]) => items)
                  .slice(0, 7)
                  .map((item) => (
                    <MenuLink
                      key={item.slug}
                      href={`/services/${item.slug}`}
                    >
                      {item.title}
                    </MenuLink>
                  ))}
              </div>

              <div>
                <p className="mb-6 text-[13px] font-semibold uppercase tracking-[1px] text-[#B28B36]">
                  Solutions
                </p>

                {solutions.slice(0, 7).map((item) => (
                  <MenuLink
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                  >
                    {item.title}
                  </MenuLink>
                ))}

                <MenuLink href="/solutions">
                  Explore all solutions
                </MenuLink>
              </div>

              <div className="flex flex-col justify-between rounded-[15px] border border-white/20 bg-[#0B1D42] p-6">

                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#B28B36]">
                    Innovate. Transform. Grow.
                  </p>

                  <h3 className="mt-4 text-[23px] font-bold leading-tight text-white">
                    Technology that moves your business forward.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Talk to our team about your next digital initiative.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-[#B28B36] px-5 py-3 text-sm font-bold text-[#071536] transition hover:bg-white"
                >
                  Talk to an expert
                  <ArrowUpRight size={15} />
                </Link>

              </div>
            </div>
          </div>
        )}

        {/* INDUSTRIES MEGA MENU - DESKTOP */}

        {menu === "industries" && (
          <div
            className={`${panelClass} hidden xl:block`}
            onMouseEnter={() => setMenu("industries")}
          >
            <p className="mb-7 text-[13px] font-semibold uppercase tracking-[1px] text-[#B28B36]">
              Industries
            </p>

            <div className="grid gap-x-12 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item) => (
                <MenuLink
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                >
                  {item.title}
                </MenuLink>
              ))}
            </div>

            <Link
              href="/industries"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#B28B36] hover:text-white"
            >
              View all industries
              <ArrowUpRight size={15} />
            </Link>
          </div>
        )}

        {/* ABOUT US MEGA MENU - DESKTOP */}

        {menu === "about" && (
          <div
            className="absolute left-1/2 top-full z-[120] hidden w-[min(840px,calc(100vw-40px))] -translate-x-1/2 rounded-b-[18px] border border-white/10 bg-[#071536] px-8 py-9 text-white shadow-[0_28px_80px_rgba(0,0,0,.3)] sm:px-11 sm:py-10 xl:block"
            onMouseEnter={() => setMenu("about")}
          >
            <p className="mb-7 text-[13px] font-bold uppercase tracking-[1.5px] text-[#B28B36]">
              About us
            </p>

            <div className="grid grid-cols-1 gap-x-12 gap-y-1 sm:grid-cols-2">
              {aboutLinks.map(([href, title]) => (
                <MenuLink
                  key={href}
                  href={href}
                >
                  {title}
                </MenuLink>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* COMPLETE MOBILE NAVIGATION */}

      {mobile && (
        <nav
          id="mobile-navigation"
          className="absolute left-0 top-full z-[130] max-h-[calc(100dvh-72px)] w-full overflow-y-auto overscroll-contain border-t border-white/10 bg-[#071936] px-5 pb-8 pt-2 shadow-2xl sm:px-7 xl:hidden"
          aria-label="Mobile navigation"
        >

          <button
            type="button"
            onClick={() => {
              setSearch(true);
              setMobile(false);
            }}
            className="flex w-full items-center gap-3 border-b border-white/15 py-4 text-left text-sm font-medium text-white/80 hover:text-[#B28B36]"
          >
            <Search size={18} />
            Search
          </button>

          {/* SERVICES */}

          <details className="group border-b border-white/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-white">
              Services
              <ChevronDown
                size={19}
                className="transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="grid gap-1 pb-5 pl-3">
              {services.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  onClick={closeMobile}
                  className="block py-2.5 text-sm text-white/75 transition hover:text-[#B28B36]"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/services"
                onClick={closeMobile}
                className="mt-2 text-sm font-bold text-[#B28B36]"
              >
                Explore all services →
              </Link>
            </div>
          </details>

          {/* INDUSTRIES */}

          <details className="group border-b border-white/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-white">
              Industries
              <ChevronDown
                size={19}
                className="transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="grid gap-1 pb-5 pl-3">
              {industries.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  onClick={closeMobile}
                  className="block py-2.5 text-sm text-white/75 transition hover:text-[#B28B36]"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/industries"
                onClick={closeMobile}
                className="mt-2 text-sm font-bold text-[#B28B36]"
              >
                Explore all industries →
              </Link>
            </div>
          </details>

          {/* ABOUT US */}

          <details className="group border-b border-white/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-white">
              About us
              <ChevronDown
                size={19}
                className="transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="grid gap-1 pb-5 pl-3">
              {aboutLinks.map(([href, title]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className="block py-2.5 text-sm leading-6 text-white/75 transition hover:text-[#B28B36]"
                >
                  {title}
                </Link>
              ))}
            </div>
          </details>

          {/* SOLUTIONS */}

          <details className="group border-b border-white/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base font-semibold text-white">
              Solutions
              <ChevronDown
                size={19}
                className="transition-transform group-open:rotate-180"
              />
            </summary>

            <div className="grid gap-1 pb-5 pl-3">
              {solutions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/solutions/${item.slug}`}
                  onClick={closeMobile}
                  className="block py-2.5 text-sm text-white/75 transition hover:text-[#B28B36]"
                >
                  {item.title}
                </Link>
              ))}

              <Link
                href="/solutions"
                onClick={closeMobile}
                className="mt-2 text-sm font-bold text-[#B28B36]"
              >
                Explore all solutions →
              </Link>
            </div>
          </details>

          {/* CAREERS */}

          <Link
            href="/careers"
            onClick={closeMobile}
            className="block border-b border-white/15 py-5 text-base font-semibold text-white transition hover:text-[#B28B36]"
          >
            Careers
          </Link>

          {/* CONTACT */}

          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-white text-sm font-semibold text-white transition hover:bg-white hover:text-[#071936]"
          >
            Contact us
            <ArrowUpRight size={16} />
          </Link>

        </nav>
      )}

      {/* SEARCH OVERLAY */}

      <SearchOverlay
        open={search}
        onClose={() => setSearch(false)}
      />

    </header>
  );
}
