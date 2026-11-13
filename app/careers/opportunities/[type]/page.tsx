
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import JobShare from "@/components/careers/JobShare";
import {
  careerCategories,
  getCareerJobs,
  type CareerCategory,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Career Opportunities | RulingMindTech",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(careerCategories).map((type) => ({ type }));
}

export default async function CareerOpportunitiesPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  if (!Object.prototype.hasOwnProperty.call(careerCategories, type)) {
    notFound();
  }

  const category = careerCategories[type as CareerCategory];
  const jobs = getCareerJobs(type);

  return (
    <main className="min-h-screen bg-white text-[#172333]">

      {/* HEADER */}
      <header className="bg-[#171717] px-6 py-5 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/careers" className="text-2xl font-extrabold">
            <span className="text-[#ff6254]">RULINGMIND</span>
            <span className="ml-2 text-[10px] tracking-[3px]">
              TECH
            </span>
          </Link>

          <span className="text-xs tracking-widest text-white/60">
            CAREERS PORTAL
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111] px-6 py-20 text-white md:px-16 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#f2553f 1.2px, transparent 1.6px)",
            backgroundSize: "8px 8px",
            clipPath:
              "polygon(0 35%,25% 5%,50% 35%,75% 0,100% 35%,100% 100%,0 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1450px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#ff7167]">
            Careers at RulingMindTech
          </p>

          <h1 className="max-w-[850px] font-display text-[clamp(42px,6vw,76px)] font-medium leading-tight">
            Find your next opportunity.
          </h1>

          <p className="mt-7 max-w-[700px] text-lg leading-8 text-white/70">
            {category.description}
          </p>
        </div>
      </section>

      {/* JOBS */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
            Open positions
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display text-[clamp(34px,4vw,52px)] font-medium">
              {category.title}
            </h2>

            <p className="text-sm text-[#68778a]">
              {jobs.length} opportunities found
            </p>
          </div>

          <div className="mt-12 border border-[#e3e8ee]">
            <div className="border-b border-[#e3e8ee] px-6 py-5">
              <strong>
                {jobs.reduce((total, job) => total + job.openings, 0)}
              </strong>
              {" "}opening(s) listed
            </div>

            {jobs.map((job, index) => {
              const detailHref =
                `/careers/opportunities/${type}/${job.slug}`;

              const applyHref =
                `/contact?service=Other&role=${encodeURIComponent(job.title)}&category=${encodeURIComponent(category.title)}`;

              return (
                <article
                  key={job.slug}
                  className="flex flex-col justify-between gap-5 border-b border-[#e8edf2] px-6 py-7 last:border-0 md:flex-row md:items-center"
                >
                  <div className="flex min-w-0 items-start gap-5">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#dedede] text-[#f2553f]">
                      <BriefcaseBusiness size={20} />
                    </div>

                    <div>
                      <Link
                        href={detailHref}
                        className="text-lg font-semibold text-[#0866df] underline-offset-4 hover:underline md:text-xl"
                      >
                        {job.title}
                      </Link>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#68778a]">
                        <span>
                          {`Job ID: RMT-${String(index + 1).padStart(3, "0")}`}
                        </span>

                        <span className="flex items-center gap-1">
                          <BriefcaseBusiness size={14} />
                          {job.experience}
                        </span>

                        <span>{job.openings} Opening(s)</span>

                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68778a]">
                        {job.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3 pl-16 md:pl-0">
                    <Link
                      href={applyHref}
                      className="inline-flex items-center gap-2 border border-[#f2553f] px-5 py-3 text-sm font-semibold text-[#171717] transition hover:bg-[#f2553f] hover:text-white"
                    >
                      Apply
                      <ArrowUpRight size={16} />
                    </Link>

                    {/* FIX: Added the required href property */}
                    <JobShare
                      title={job.title}
                      href={detailHref}
                    />
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#171717] px-6 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} RulingMindTech. All rights reserved.
      </footer>

    </main>
  );
}
