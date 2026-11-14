
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
  description:
    "Explore job details and career opportunities at RulingMindTech.",
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

  // URL used by the JobShare component
  const detailHref =
    `/careers/opportunities/${job.category}/${job.slug}`;

  return (
    <main className="min-h-screen bg-white text-[#071536]">
      {/* HEADER */}
      <header className="bg-[#071536] px-6 py-5 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/careers" className="text-2xl font-extrabold">
            <span className="text-[#B28B36]">RULINGMIND</span>
            <span className="ml-2 text-[10px] tracking-[3px]">
              TECH
            </span>
          </Link>

          <span className="text-xs tracking-widest text-white/70">
            CAREERS PORTAL
          </span>
        </div>
      </header>

      {/* JOB HERO */}
      <section className="relative overflow-hidden bg-[#071536] px-6 py-16 text-white md:px-16 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(#B28B36 1.2px, transparent 1.6px)",
            backgroundSize: "8px 8px",
            clipPath:
              "polygon(0 30%,30% 5%,60% 35%,100% 0,100% 100%,0 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1450px]">
          <Link
            href={`/careers/opportunities/${job.category}`}
            className="mb-10 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[#B28B36]"
          >
            <ArrowLeft size={17} />
            Back to job listings
          </Link>

          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
            {category.title}
          </p>

          <h1 className="max-w-[1000px] font-display text-[clamp(38px,6vw,70px)] font-medium leading-[1.1] text-white">
            {job.title}
          </h1>

          <p className="mt-6 max-w-[750px] text-lg leading-8 text-[#DDE3EC]">
            {job.summary}
          </p>

          {/* JOB ACTIONS */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={applyHref}
              className="inline-flex items-center gap-3 rounded-full bg-[#B28B36] px-7 py-4 font-semibold text-[#071536] transition hover:bg-white"
            >
              Apply now
              <ArrowUpRight size={18} />
            </Link>

            <JobShare
              title={job.title}
              href={detailHref}
            />
          </div>
        </div>
      </section>

      {/* JOB INFORMATION */}
      <section className="border-b border-[#DDE3EC] bg-[#F3F6FA] px-6 py-10 md:px-16">
        <div className="mx-auto grid max-w-[1450px] grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#374151]">
              Job ID
            </p>
            <p className="mt-3 font-semibold text-[#071536]">
              {jobId}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#374151]">
              Experience
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold text-[#071536]">
              <Clock size={16} className="text-[#B28B36]" />
              {job.experience}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#374151]">
              Openings
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold text-[#071536]">
              <Users size={16} className="text-[#B28B36]" />
              {job.openings}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#374151]">
              Location
            </p>
            <p className="mt-3 flex items-center gap-2 font-semibold text-[#071536]">
              <MapPin size={16} className="text-[#B28B36]" />
              {job.location}
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION AND SKILLS */}
      <section className="bg-white px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-[1fr_340px]">

          {/* MAIN DESCRIPTION */}
          <div className="space-y-14">

            {/* ROLE DESCRIPTION */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
                Role description
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[#071536] md:text-4xl">
                About this opportunity
              </h2>

              <p className="mt-6 max-w-[850px] text-[17px] leading-8 text-[#374151]">
                {job.description}
              </p>
            </section>

            {/* RESPONSIBILITIES */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
                What you will do
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[#071536] md:text-4xl">
                Key roles and responsibilities
              </h2>

              <ul className="mt-7 space-y-5">
                {job.responsibilities.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-[#DDE3EC] pb-5"
                  >
                    <span className="text-sm font-bold text-[#B28B36]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="leading-7 text-[#374151]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* MANDATORY SKILLS */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
                Skills
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[#071536] md:text-4xl">
                Mandatory skills
              </h2>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {job.mandatorySkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-xl border border-[#DDE3EC] bg-white p-4"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#B28B36]" />
                    <span className="text-[15px] text-[#374151]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* GOOD TO HAVE */}
            <section>
              <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
                Additional qualifications
              </p>

              <h2 className="mt-4 font-display text-3xl font-medium text-[#071536] md:text-4xl">
                Good to have skills
              </h2>

              <div className="mt-7 flex flex-wrap gap-3">
                {job.goodToHave.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#DDE3EC] bg-[#F3F6FA] px-5 py-3 text-sm text-[#374151]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* SIDEBAR */}
          <aside className="h-fit rounded-2xl border border-[#DDE3EC] bg-[#F3F6FA] p-7 lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
              Job overview
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold text-[#071536]">
              {job.title}
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs text-[#374151]">Department</p>
                <p className="mt-2 font-semibold text-[#071536]">
                  {job.team}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#374151]">Employment type</p>
                <p className="mt-2 font-semibold text-[#071536]">
                  {job.employmentType}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#374151]">Experience</p>
                <p className="mt-2 font-semibold text-[#071536]">
                  {job.experience}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#374151]">Location</p>
                <p className="mt-2 font-semibold text-[#071536]">
                  {job.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#374151]">Number of openings</p>
                <p className="mt-2 font-semibold text-[#071536]">
                  {job.openings}
                </p>
              </div>
            </div>

            <Link
              href={applyHref}
              className="mt-9 flex w-full items-center justify-center gap-3 rounded-full bg-[#071536] px-5 py-4 font-semibold text-white transition hover:bg-[#B28B36] hover:text-[#071536]"
            >
              Apply for this position
              <ArrowUpRight size={18} />
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-[#374151]">
              Interested in this opportunity? Contact our recruitment team.
            </p>
          </aside>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#071536] px-6 py-16 text-white md:px-16">
        <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B36]">
              YOUR NEXT CHAPTER
            </p>

            <h2 className="mt-4 font-display text-3xl font-medium text-white">
              Ready to join RulingMindTech?
            </h2>
          </div>

          <Link
            href={applyHref}
            className="inline-flex items-center gap-3 rounded-full bg-[#B28B36] px-7 py-4 font-semibold text-[#071536] transition hover:bg-white"
          >
            Apply now
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#071536] px-6 py-7 text-center text-sm text-white/60">
        © {new Date().getFullYear()} RulingMindTech. All rights reserved.
      </footer>
    </main>
  );
}
