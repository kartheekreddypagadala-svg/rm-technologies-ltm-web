
"use client";

import Link from "next/link";
import Image from "next/image";
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
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start justify-between gap-3 py-2.5 text-[15px] font-semibold leading-6 text-white/95 transition-colors hover:text-[#B28B36]"
    >
      <span>{children}</span>

      <ArrowUpRight
        size={14}
        className="mt-1 shrink-0 text-[#B28B36] opacity-0 transition group-hover:opacity-100"
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
      className={`flex h-[74px] items-center gap-2 border-b-2 px-0 text-[15px] font-semibold transition ${
        menu === key
          ? "border-[#B28B36] text-[#B28B36]"
          : "border-transparent text-white hover:border-[#B28B36] hover:text-[#B28B36]"
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
    "absolute left-1/2 top-full z-50 w-[min(1240px,calc(100vw-64px))] -translate-x-1/2 rounded-[20px] border border-[#DDE3EC] bg-[#071536] px-10 py-8 text-white shadow-[0_28px_80px_rgba(0,0,0,.3)] md:px-12 md:py-9";

  return (
    <header
      className="sticky top-0 z-50 bg-[#071536] text-white"
      onMouseLeave={() => setMenu(null)}
    >
      {/* TOP SEARCH BAR */}
      <div className="h-[34px] border-b border-white/10 bg-[#071536]">
        <div className="mx-auto flex h-full w-[min(1540px,calc(100%-48px))] items-center justify-end">
          <button
            onClick={() => {
              setSearch(true);
              setMenu(null);
            }}
            className="flex items-center gap-2 text-[13px] font-semibold text-white/90 transition hover:text-[#B28B36]"
          >
            <Search size={15} />
            Search
          </button>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex h-[94px] w-[min(1540px,calc(100%-48px))] items-center justify-between gap-8">

          {/* OFFICIAL BRAND LOGO */}
          <Link
            href="/"
            aria-label="RulingMind Technologies home"
            onMouseEnter={() => setMenu(null)}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/RULINGMIND_Technologies_Final_Locked_Logo.png"
              alt="RulingMind Technologies"
              width={300}
              height={100}
              priority
              className="h-auto w-[190px] object-contain brightness-0 invert sm:w-[235px] lg:w-[260px]"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            className="hidden h-full items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navButton("what", "Services")}

            {navButton("industries", "Industries")}

            {navButton("about", "About")}

            <Link
              href="/careers"
              onMouseEnter={() => setMenu(null)}
              className="flex h-[74px] items-center border-b-2 border-transparent text-[15px] font-semibold text-white transition hover:border-[#B28B36] hover:text-[#B28B36]"
            >
              Careers
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">

            <div className="hidden items-center gap-3 border-l border-white/25 pl-5 xl:flex">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[#B28B36] text-[11px] font-bold text-[#B28B36]">
                RM
              </span>

              <span className="max-w-[112px] text-[11px] leading-[1.35] text-white/80">
                RulingMind
                <br />
                Group Company
              </span>
            </div>

            {/* CONTACT BUTTON */}
            <Link
              href="/contact"
              onMouseEnter={() => setMenu(null)}
              className="rounded-full border border-[#B28B36] bg-[#B28B36] px-6 py-3 text-[14px] font-semibold text-[#071536] transition hover:border-white hover:bg-white hover:text-[#071536] sm:px-7"
            >
              Contact us
              <ArrowUpRight className="ml-1 inline-block" size={15} />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="p-2 text-white transition hover:text-[#B28B36] lg:hidden"
              aria-label={mobile ? "Close menu" : "Open menu"}
              onClick={() => {
                setMobile(!mobile);
                setMenu(null);
              }}
            >
              {mobile ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* WHAT WE DO MEGA MENU */}
        {menu === "what" && (
          <div
            className={panelClass}
            onMouseEnter={() => setMenu("what")}
          >
            <div className="grid gap-9 md:grid-cols-[1fr_1fr_1fr_250px]">

              {/* SERVICES */}
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

              {/* ENGINEERING AND DIGITAL */}
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

              {/* SOLUTIONS */}
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

              {/* CONSULTATION PANEL */}
              <div className="flex flex-col justify-between rounded-[15px] border border-[#DDE3EC]/20 bg-[#0B1D42] p-6">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#B28B36]">
                    Innovate. Transform. Grow.
                  </p>

                  <h3 className="mt-4 font-display text-[23px] font-bold leading-tight text-white">
                    Technology that moves your business forward.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Talk to our team about your next digital initiative.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-[#B28B36] px-5 py-3 text-sm font-bold text-[#071536] transition hover:bg-white hover:text-[#071536]"
                >
                  Talk to an expert
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* INDUSTRIES MEGA MENU */}
        {menu === "industries" && (
          <div
            className={panelClass}
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

        {/* ABOUT US MEGA MENU */}
        {menu === "about" && (
          <div
            className="absolute left-1/2 top-full z-50 w-[min(840px,calc(100vw-40px))] -translate-x-1/2 rounded-[20px] border border-[#DDE3EC] bg-[#071536] px-8 py-9 text-white shadow-[0_28px_80px_rgba(0,0,0,.3)] sm:px-11 sm:py-10"
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

      {/* MOBILE NAVIGATION */}
      {mobile && (
        <nav
          className="max-h-[calc(100vh-128px)] overflow-y-auto border-t border-white/10 bg-[#071536] px-5 pb-7 lg:hidden"
          aria-label="Mobile navigation"
        >
          {/* WHAT WE DO */}
          <details className="border-b border-white/10">
            <summary className="cursor-pointer py-4 text-sm font-semibold transition hover:text-[#B28B36]">
              What we do
            </summary>

            <div className="grid gap-5 pb-5 pl-3 sm:grid-cols-2">
              <div>
                <Link
                  href="/services"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#B28B36]"
                >
                  Services
                </Link>

                {services.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block py-2 text-sm text-white/75 transition hover:text-[#B28B36]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div>
                <Link
                  href="/solutions"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#B28B36]"
                >
                  Solutions
                </Link>

                {solutions.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/solutions/${item.slug}`}
                    className="block py-2 text-sm text-white/75 transition hover:text-[#B28B36]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </details>

          {/* INDUSTRIES */}
          <details className="border-b border-white/10">
            <summary className="cursor-pointer py-4 text-sm font-semibold transition hover:text-[#B28B36]">
              Industries we serve
            </summary>

            <div className="pb-4 pl-3">
              {industries.map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className="block py-2 text-sm text-white/75 transition hover:text-[#B28B36]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </details>

          {/* ABOUT US */}
          <details className="border-b border-white/10">
            <summary className="cursor-pointer py-4 text-sm font-semibold transition hover:text-[#B28B36]">
              About us
            </summary>

            <div className="pb-4 pl-3">
              {aboutLinks.map(([href, title]) => (
                <Link
                  key={href}
                  href={href}
                  className="block py-2.5 text-sm leading-6 text-white/75 transition hover:text-[#B28B36]"
                >
                  {title}
                </Link>
              ))}
            </div>
          </details>

          {/* CAREERS */}
          <Link
            href="/careers"
            className="block border-b border-white/10 py-4 text-sm font-semibold transition hover:text-[#B28B36]"
          >
            Careers
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#B28B36] bg-[#B28B36] px-6 py-3 text-sm font-semibold text-[#071536] transition hover:border-white hover:bg-white"
          >
            Contact us
            <ArrowUpRight size={15} />
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
