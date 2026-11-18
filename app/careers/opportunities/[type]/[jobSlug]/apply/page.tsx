import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CareerApplicationForm from "@/components/careers/CareerApplicationForm";

import {
  careerJobs,
  getCareerJob,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Apply for a Position | RulingMindTech",
  description: "Submit your career application to RulingMindTech.",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return careerJobs.map((job) => ({
    type: job.category,
    jobSlug: job.slug,
  }));
}

export default async function ApplyPage({
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

  const jobIndex = careerJobs.findIndex(
    (item) => item.slug === job.slug
  );

  const jobId = `RMT-${String(jobIndex + 1).padStart(3, "0")}`;

  return (
    <CareerApplicationForm
      job={job}
      jobId={jobId}
    />
  );
}