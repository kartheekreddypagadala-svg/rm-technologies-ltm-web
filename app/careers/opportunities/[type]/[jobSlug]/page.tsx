
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Clock,
  Users,
} from "lucide-react";

import JobShare from "@/components/careers/JobShare";
import {
  careerJobs,
  careerCategories,
  getCareerJob,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Job Details | RulingMindTech",
  description: "Explore job details and career opportunities at RulingMindTech.",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return careerJobs.map((job) => ({
    type: job.category,
    jobSlug: job.slug,
  }));
}

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{
    type: string;
    jobSlug: string;
  }>;
}) {
  const { type, jobSlug } = await params;

  const job = getCareerJob(type, jobSlug);

  if (!job) {
    notFound();
  }

  const category = careerCategories[job.category];

  const globalIndex = careerJobs.findIndex(
    (item) => item.slug === job.slug
  );

  const jobId = `RMT-${String(globalIndex + 1).padStart(3, "0")}`;

  const applyHref =
    `/contact?service=Other` +
    `&role=${encodeURIComponent(job.title)}` +
    `&category=${encodeURIComponent(category.title)}`;

  return (
    <main className="min-h-screen bg-white text-[#172333]">

      {/* HEADER */}
      <header className="bg-[#171717] px-6 py-5 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/careers" className="text-2xl font-extrabold">
            <span className="text-[#ff6254]">RULINGMIND</span>
            <span className="ml-2 text-[10px] tracking-[3px]">TECH</span>
          </Link>

          <span className="text-xs tracking-widest text-white/60">
            CAREERS PORTAL
          </span>
        </div>
      </header>

      {/* JOB HERO */}
      <section className="relative overflow-hidden bg-[#111111] px-6 py-16 text-white md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#f2553f 1.2px, transparent 1.6px)",
            backgroundSize: "8px 8px",
            clipPath:
              "polygon(0 30%,30% 5%,60% 35%,100% 0,100% 100%,0 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1450px]">
          <Link
            href={`/careers/opportunities/${job.category}`}
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to job listings
          </Link>

          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#ff7167]">
            {category.title}
          </p>

          <h1 className="max-w-[1000px] font-display text-[clamp(38px,6vw,70px)] font-medium leading-[1.1]">
            {job.title}
          </h1>

          <p className="mt-6 max-w-[750px] text-lg leading-8 text-white/70">
            {job.summary}
          </p>

          {/* JOB ACTIONS */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={applyHref}
              className="inline-flex items-center gap-3 bg-[#f2553f] px-7 py-4 font-semibold text-white transition hover:bg-[#d94030]"
            >
              Apply now
              <ArrowUpRight size={18} />
            </Link>

            <JobShare title={job.title} />

          </div>
        </div>
      </section>

      {/* JOB INFORMATION */}
      <section className="border-b border-[#e5e8ed] bg-white px-6 py-10 md:px-16">
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8993a1]">
              Job ID
            </p>
            <p className="mt-3 font-semibold">{jobId}</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8993a1]">
              Experience
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold">
              <Clock size={16} />
              {job.experience}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8993a1]">
              Openings
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold">
              <Users size={16} />
              {job.openings}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#8993a1]">
              Location
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold">
              <MapPin size={16} />
              {job.location}
            </p>
          </div>

        </div>
      </section>

      {/* DESCRIPTION AND SKILLS */}
      <section className="px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-[1fr_340px]">

          {/* MAIN DESCRIPTION */}
          <div className="space-y-14">

            {/* ROLE DESCRIPTION */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
                Role description
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                About this opportunity
              </h2>

              <p className="mt-6 max-w-[850px] text-[17px] leading-8 text-[#586575]">
                {job.description}
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
                What you will do
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                Key roles and responsibilities
              </h2>

              <ul className="mt-7 space-y-5">
                {job.responsibilities.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-[#e8ebef] pb-5"
                  >
                    <span className="text-sm font-bold text-[#f2553f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="leading-7 text-[#586575]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* MANDATORY SKILLS */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
                Skills
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                Mandatory skills
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {job.mandatorySkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 border border-[#e3e8ee] p-4"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#f2553f]" />
                    <span className="text-[15px]">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* GOOD TO HAVE */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
                Additional qualifications
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium md:text-4xl">
                Good to have skills
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">
                {job.goodToHave.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#f0f2f5] px-5 py-3 text-sm text-[#344254]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="h-fit border border-[#e2e6eb] p-7 lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#f2553f]">
              Job overview
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold">
              {job.title}
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs text-[#8993a1]">Department</p>
                <p className="mt-2 font-semibold">{job.team}</p>
              </div>

              <div>
                <p className="text-xs text-[#8993a1]">Employment type</p>
                <p className="mt-2 font-semibold">{job.employmentType}</p>
              </div>

              <div>
                <p className="text-xs text-[#8993a1]">Experience</p>
                <p className="mt-2 font-semibold">{job.experience}</p>
              </div>

              <div>
                <p className="text-xs text-[#8993a1]">Location</p>
                <p className="mt-2 font-semibold">{job.location}</p>
              </div>

              <div>
                <p className="text-xs text-[#8993a1]">Number of openings</p>
                <p className="mt-2 font-semibold">{job.openings}</p>
              </div>

            </div>

            <Link
              href={applyHref}
              className="mt-9 flex w-full items-center justify-center gap-3 bg-[#f2553f] px-5 py-4 font-semibold text-white transition hover:bg-[#d94030]"
            >
              Apply for this position
              <ArrowUpRight size={18} />
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-[#8993a1]">
              Interested in this opportunity? Contact our recruitment team.
            </p>
          </aside>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#171717] px-6 py-16 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#ff7167]">
              YOUR NEXT CHAPTER
            </p>

            <h2 className="mt-4 font-display text-3xl font-medium">
              Ready to join RulingMindTech?
            </h2>
          </div>

          <Link
            href={applyHref}
            className="inline-flex items-center gap-3 rounded-full bg-[#f6f3a8] px-7 py-4 font-semibold text-black"
          >
            Apply now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-black px-6 py-7 text-center text-sm text-white/50">
        © {new Date().getFullYear()} RulingMindTech. All rights reserved.
      </footer>

    </main>
  );
}
