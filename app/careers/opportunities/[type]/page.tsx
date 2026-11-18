
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
  const jobs = getCareerJobs(type as CareerCategory);

  return (
    <main className="min-h-screen bg-white text-[#071536]">

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#071536] px-6 py-5 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/careers" className="text-2xl font-extrabold">
            <span className="text-[#B28B36]">RULINGMIND</span>
            <span className="ml-2 text-[10px] tracking-[3px] text-white">
              TECH
            </span>
          </Link>

          <span className="text-xs tracking-widest text-white/70">
            CAREERS PORTAL
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071536] px-6 py-20 text-white md:px-16 md:py-28">

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(#B28B36 1.2px, transparent 1.6px)",
            backgroundSize: "8px 8px",
            clipPath:
              "polygon(0 35%,25% 5%,50% 35%,75% 0,100% 35%,100% 100%,0 100%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[-30%] -z-0 h-[400px] w-[400px] rounded-full bg-[#B28B36]/10 blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-[1450px]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
            Careers at RulingMindTech
          </p>

          <h1 className="max-w-[850px] font-display text-[clamp(42px,6vw,76px)] font-semibold leading-tight text-white">
            Find your next opportunity.
          </h1>

          <p className="mt-7 max-w-[700px] text-lg leading-8 text-[#DDE3EC]">
            {category.description}
          </p>

          <div className="mt-8 h-[3px] w-20 rounded-full bg-[#B28B36]" />
        </div>
      </section>

      {/* JOBS */}
      <section className="bg-[#F3F6FA] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1450px]">

          <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
            Open positions
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display text-[clamp(34px,4vw,52px)] font-semibold text-[#071536]">
              {category.title}
            </h2>

            <p className="text-sm text-[#374151]">
              {jobs.length} opportunities found
            </p>
          </div>

          {/* JOB LIST CONTAINER */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#DDE3EC] bg-white shadow-sm">

            {/* OPENINGS HEADER */}
            <div className="flex items-center justify-between border-b border-[#DDE3EC] bg-[#071536] px-6 py-5 text-white">
              <span className="text-sm text-white/80">
                Total openings
              </span>

              <strong className="text-lg font-semibold text-[#B28B36]">
                {jobs.reduce((total, job) => total + job.openings, 0)}
                {" "}opening(s) listed
              </strong>
            </div>

            {/* JOB LIST */}
            {jobs.map((job, index) => {

              const detailHref =
                `/careers/opportunities/${type}/${job.slug}`;

              // Dedicated application page
              const applyHref =
                `/careers/opportunities/${type}/${job.slug}/apply`;

              return (
                <article
                  key={job.slug}
                  className="flex flex-col justify-between gap-5 border-b border-[#DDE3EC] px-6 py-7 transition duration-300 last:border-0 hover:bg-[#F3F6FA]/70 md:flex-row md:items-center"
                >

                  <div className="flex min-w-0 items-start gap-5">

                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B28B36]/40 bg-[#B28B36]/10 text-[#B28B36]">
                      <BriefcaseBusiness size={20} />
                    </div>

                    <div>

                      <Link
                        href={detailHref}
                        className="text-lg font-semibold text-[#071536] underline-offset-4 transition hover:text-[#B28B36] hover:underline md:text-xl"
                      >
                        {job.title}
                      </Link>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#374151]">

                        <span>
                          {`Job ID: RMT-${String(index + 1).padStart(3, "0")}`}
                        </span>

                        <span className="flex items-center gap-1">
                          <BriefcaseBusiness
                            size={14}
                            className="text-[#B28B36]"
                          />
                          {job.experience}
                        </span>

                        <span>
                          {job.openings} Opening(s)
                        </span>

                        <span className="flex items-center gap-1">
                          <MapPin
                            size={14}
                            className="text-[#B28B36]"
                          />
                          {job.location}
                        </span>

                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#374151]">
                        {job.summary}
                      </p>

                    </div>
                  </div>

                  {/* JOB ACTIONS */}
                  <div className="flex shrink-0 items-center gap-3 pl-16 md:pl-0">

                    <Link
                      href={applyHref}
                      className="inline-flex items-center gap-2 rounded-full border border-[#B28B36] bg-white px-6 py-3 text-sm font-semibold text-[#071536] transition duration-300 hover:bg-[#B28B36] hover:text-[#071536]"
                    >
                      Apply
                      <ArrowUpRight size={16} />
                    </Link>

                    <JobShare
                      title={job.title}
                      href={detailHref}
                    />

                  </div>

                </article>
              );
            })}

            {/* EMPTY STATE */}
            {jobs.length === 0 && (
              <div className="px-6 py-16 text-center">

                <BriefcaseBusiness
                  size={36}
                  className="mx-auto text-[#B28B36]"
                />

                <p className="mt-4 font-semibold text-[#071536]">
                  No open positions currently available.
                </p>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#071536] px-6 py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} RulingMindTech. All rights reserved.
      </footer>

    </main>
  );
}
