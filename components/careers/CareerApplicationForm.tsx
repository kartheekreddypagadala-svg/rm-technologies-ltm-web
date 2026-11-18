"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import type { CareerJob } from "@/lib/careers";

type Props = {
  job: CareerJob;
  jobId: string;
};

const locations = [
  "Bengaluru",
  "Bhubaneswar",
  "Chennai",
  "Coimbatore",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Pune",
  "Noida",
  "Vadodara",
  "Warangal",
  "Indore",
  "Nagpur",
];

const inputClass =
  "w-full rounded-md border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#071536] outline-none transition focus:border-[#B28B36] focus:ring-2 focus:ring-[#B28B36]/20";

const labelClass =
  "block text-sm font-medium text-[#374151]";

export default function CareerApplicationForm({
  job,
  jobId,
}: Props) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    city: "",
    state: "",
    country: "India",
    salary: "",
    currency: "INR",
    previousEmployee: "",
    relativeWorking: "",
    noticePeriod: "",
    recordingConsent: false,
    careerUpdates: "",
    preferredLocations: [] as string[],
    source: "",
    privacyConsent: false,
  });

  const [resume, setResume] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);

  function updateField(
    field: string,
    value: string | boolean
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function toggleLocation(location: string) {
    setForm((previous) => ({
      ...previous,
      preferredLocations:
        previous.preferredLocations.includes(location)
          ? previous.preferredLocations.filter(
              (item) => item !== location
            )
          : [...previous.preferredLocations, location],
    }));
  }

  function validateStepOne() {
    if (
      !form.title ||
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.phone.trim() ||
      !form.email.trim()
    ) {
      setError("Please complete all required candidate details.");
      return false;
    }

    if (!/^\+?[0-9\s()-]{7,18}$/.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  }

  function validateStepTwo() {
    if (
      !form.gender ||
      !form.city.trim() ||
      !form.state.trim() ||
      !form.country.trim() ||
      !form.salary ||
      !resume
    ) {
      setError("Please complete all required personal details and upload your resume.");
      return false;
    }

    const allowedResume = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/rtf",
    ];

    if (!allowedResume.includes(resume.type)) {
      setError("Resume must be a PDF, DOC, DOCX or RTF file.");
      return false;
    }

    if (resume.size > 3 * 1024 * 1024) {
      setError("Resume size must not exceed 3 MB.");
      return false;
    }

    if (photo) {
      if (!["image/jpeg", "image/png"].includes(photo.type)) {
        setError("Photograph must be JPG, JPEG or PNG.");
        return false;
      }

      if (photo.size > 10 * 1024 * 1024) {
        setError("Photograph size must not exceed 10 MB.");
        return false;
      }
    }

    setError("");
    return true;
  }

  function validateStepThree() {
    if (
      !form.previousEmployee ||
      !form.relativeWorking ||
      !form.noticePeriod ||
      !form.source ||
      !form.privacyConsent
    ) {
      setError("Please complete all required declarations and accept the privacy notice.");
      return false;
    }

    setError("");
    return true;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateStepThree()) return;

    if (!resume) {
      setError("Please upload your resume.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_CAREERS_API_URL;

      if (!apiUrl) {
        throw new Error(
          "Application service is not configured yet. Please contact the recruitment team."
        );
      }

      const data = new FormData();

      data.append("jobId", jobId);
      data.append("jobSlug", job.slug);
      data.append("jobTitle", job.title);
      data.append("jobCategory", job.category);

      Object.entries(form).forEach(([key, value]) => {
        data.append(
          key,
          Array.isArray(value)
            ? JSON.stringify(value)
            : String(value)
        );
      });

      data.append("resume", resume);

      if (photo) {
        data.append("photo", photo);
      }

      const response = await fetch(
        `${apiUrl}/api/careers/applications`,
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error(
          "Application submission failed. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F3F6FA] px-5">
        <div className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
            ✓
          </div>

          <h1 className="mt-6 font-display text-3xl font-semibold text-[#071536]">
            Application Submitted!
          </h1>

          <p className="mt-4 text-[#64748B]">
            Thank you for applying to RulingMind Technologies.
            Your application for {job.title} has been received.
          </p>

          <p className="mt-3 text-sm font-semibold text-[#071536]">
            Job ID: {jobId}
          </p>

          <Link
            href="/careers"
            className="mt-8 inline-flex rounded-full bg-[#071536] px-7 py-3 font-semibold text-white hover:bg-[#B28B36] hover:text-[#071536]"
          >
            Back to Careers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3F6FA] text-[#071536]">

      {/* HEADER */}

      <header className="bg-[#071536] px-6 py-5 text-white md:px-12">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between">
          <Link href="/careers" className="text-xl font-bold">
            <span className="text-[#B28B36]">RULINGMIND</span>
            <span className="ml-2 text-xs tracking-[3px]">
              TECHNOLOGIES
            </span>
          </Link>

          <span className="text-xs tracking-widest text-white/70">
            CAREERS
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-[1250px] px-4 py-10 md:px-8">

        {/* JOB INFORMATION */}

        <section className="rounded-t-xl bg-white p-6 md:p-9">
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
            Career application
          </p>

          <h1 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            You are applying for {job.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#475569]">
            <span>Job ID: {jobId}</span>
            <span>Experience: {job.experience}</span>
            <span>Openings: {job.openings}</span>
            <span>Location: {job.location}</span>
          </div>
        </section>

        {/* PROGRESS */}

        <section className="border-y border-[#E2E8F0] bg-white px-6 py-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              "Candidate details",
              "Personal details",
              "Additional details",
            ].map((item, index) => (
              <div key={item}>
                <div
                  className={`h-1.5 rounded-full ${
                    step >= index + 1
                      ? "bg-[#B28B36]"
                      : "bg-[#E2E8F0]"
                  }`}
                />
                <p
                  className={`mt-3 text-xs md:text-sm ${
                    step === index + 1
                      ? "font-bold text-[#071536]"
                      : "text-[#64748B]"
                  }`}
                >
                  {index + 1}. {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="rounded-b-xl bg-white p-6 md:p-10"
        >

          {/* STEP 1 */}

          {step === 1 && (
            <section>
              <h2 className="mb-8 border-b border-[#E2E8F0] pb-4 text-xl font-semibold">
                Candidate Details
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className={labelClass}>
                    Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={inputClass}
                    value={form.title}
                    onChange={(e) => updateField("title", e.target.value)}
                    required
                  >
                    <option value="">Select...</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>
                    First name *
                  </label>
                  <input
                    className={inputClass}
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    required
                    maxLength={80}
                  />
                  <p className="mt-1 text-xs text-[#64748B]">
                    Enter your first name as per your official records.
                  </p>
                </div>

                <div>
                  <label className={labelClass}>
                    Middle name
                  </label>
                  <input
                    className={inputClass}
                    value={form.middleName}
                    onChange={(e) => updateField("middleName", e.target.value)}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Last name *
                  </label>
                  <input
                    className={inputClass}
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    required
                    maxLength={80}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="+91"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Email ID *
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                  />
                </div>

              </div>
            </section>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <section>
                <h2 className="mb-8 border-b border-[#E2E8F0] pb-4 text-xl font-semibold">
                  Personal Details
                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className={labelClass}>Gender *</label>
                    <select
                      className={inputClass}
                      value={form.gender}
                      onChange={(e) => updateField("gender", e.target.value)}
                      required
                    >
                      <option value="">Select</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Non-Binary</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>City *</label>
                    <input
                      className={inputClass}
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>State *</label>
                    <input
                      className={inputClass}
                      value={form.state}
                      onChange={(e) => updateField("state", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Country *</label>
                    <input
                      className={inputClass}
                      value={form.country}
                      onChange={(e) => updateField("country", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Currency
                    </label>
                    <select
                      className={inputClass}
                      value={form.currency}
                      onChange={(e) => updateField("currency", e.target.value)}
                    >
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="USD">USD - US Dollar</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Current annual salary *
                    </label>
                    <input
                      type="number"
                      min="0"
                      className={inputClass}
                      placeholder="Enter amount"
                      value={form.salary}
                      onChange={(e) => updateField("salary", e.target.value)}
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      Resume * (PDF, DOC, DOCX or RTF; maximum 3 MB)
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.rtf"
                      className={inputClass}
                      onChange={(e) =>
                        setResume(e.target.files?.[0] ?? null)
                      }
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      Upload photograph (Optional; JPG or PNG; maximum 10 MB)
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className={inputClass}
                      onChange={(e) =>
                        setPhoto(e.target.files?.[0] ?? null)
                      }
                    />
                  </div>

                </div>
              </section>
            </>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <>
              <section>
                <h2 className="mb-8 border-b border-[#E2E8F0] pb-4 text-xl font-semibold">
                  Professional Details
                </h2>

                <div className="space-y-7">

                  <div>
                    <p className={labelClass}>
                      Have you previously worked with RulingMindTech? *
                    </p>

                    <div className="mt-3 flex gap-6">
                      {["Yes", "No"].map((value) => (
                        <label key={value} className="flex gap-2">
                          <input
                            type="radio"
                            name="previousEmployee"
                            value={value}
                            checked={form.previousEmployee === value}
                            onChange={(e) =>
                              updateField("previousEmployee", e.target.value)
                            }
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={labelClass}>
                      Do you have a relative or close acquaintance working at RulingMindTech? *
                    </p>

                    <div className="mt-3 flex gap-6">
                      {["Yes", "No"].map((value) => (
                        <label key={value} className="flex gap-2">
                          <input
                            type="radio"
                            name="relativeWorking"
                            value={value}
                            checked={form.relativeWorking === value}
                            onChange={(e) =>
                              updateField("relativeWorking", e.target.value)
                            }
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Notice period *</label>
                    <select
                      className={inputClass}
                      value={form.noticePeriod}
                      onChange={(e) => updateField("noticePeriod", e.target.value)}
                      required
                    >
                      <option value="">Select...</option>
                      <option>Immediate</option>
                      <option>15 Days</option>
                      <option>30 Days</option>
                      <option>45 Days</option>
                      <option>60 Days</option>
                      <option>90 Days</option>
                      <option>Currently serving notice period</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 text-sm leading-6">
                      <input
                        type="checkbox"
                        checked={form.recordingConsent}
                        onChange={(e) =>
                          updateField("recordingConsent", e.target.checked)
                        }
                        className="mt-1"
                      />
                      I consent to interview recording if required, for which separate notice and consent will be provided.
                    </label>
                  </div>

                  <div>
                    <p className={labelClass}>
                      Would you like to hear about future career opportunities?
                    </p>

                    <div className="mt-3 flex gap-6">
                      {["Yes", "No"].map((value) => (
                        <label key={value} className="flex gap-2">
                          <input
                            type="radio"
                            name="careerUpdates"
                            value={value}
                            checked={form.careerUpdates === value}
                            onChange={(e) =>
                              updateField("careerUpdates", e.target.value)
                            }
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>

                </div>
              </section>

              <section className="mt-12">
                <h2 className="mb-8 border-b border-[#E2E8F0] pb-4 text-xl font-semibold">
                  Additional Details
                </h2>

                <p className={labelClass}>
                  Preferred Location *
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {locations.map((location) => (
                    <label
                      key={location}
                      className="flex items-center gap-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={form.preferredLocations.includes(location)}
                        onChange={() => toggleLocation(location)}
                      />
                      {location}
                    </label>
                  ))}
                </div>

                <div className="mt-8">
                  <label className={labelClass}>
                    How did you hear about this job? *
                  </label>

                  <select
                    className={inputClass}
                    value={form.source}
                    onChange={(e) => updateField("source", e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    <option>Company Website</option>
                    <option>LinkedIn</option>
                    <option>Indeed</option>
                    <option>Job Portal</option>
                    <option>Employee Referral</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <label className="mt-8 flex items-start gap-3 text-sm leading-6">
                  <input
                    type="checkbox"
                    checked={form.privacyConsent}
                    onChange={(e) =>
                      updateField("privacyConsent", e.target.checked)
                    }
                    className="mt-1"
                  />

                  <span>
                    I agree to the RulingMindTech Data Privacy Notice and consent to the processing of my personal information for recruitment purposes.
                  </span>
                </label>
              </section>
            </>
          )}

          {/* ERROR */}

          {error && (
            <div
              role="alert"
              className="mt-7 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-[#E2E8F0] pt-7">

            {step > 1 ? (
              <button
                type="button"
                onClick={() => {
                  setError("");
                  setStep((current) => current - 1);
                }}
                className="rounded-full border border-[#D1D5DB] px-7 py-3 font-semibold text-[#071536] hover:bg-[#F3F6FA]"
              >
                ← Previous
              </button>
            ) : (
              <Link
                href={`/careers/opportunities/${job.category}/${job.slug}`}
                className="rounded-full border border-[#D1D5DB] px-7 py-3 font-semibold text-[#071536]"
              >
                ← Back to job
              </Link>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => {
                  const valid =
                    step === 1
                      ? validateStepOne()
                      : validateStepTwo();

                  if (valid) setStep((current) => current + 1);
                }}
                className="rounded-full bg-[#B28B36] px-9 py-3 font-semibold text-[#071536] transition hover:bg-[#071536] hover:text-white"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-[#B28B36] px-9 py-3 font-semibold text-[#071536] transition hover:bg-[#071536] hover:text-white disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            )}

          </div>

        </form>
      </div>
    </main>
  );
}