
"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/validate";

type Status = "idle" | "sending" | "sent" | "error";

type Props = {
  defaultService?: string;
  defaultMessage?: string;
};

const field =
  "h-[58px] w-full rounded-full border border-[#DDE3EC] bg-white px-5 text-[16px] text-[#071536] outline-none transition placeholder:text-[#374151] focus:border-[#B28B36] focus:ring-2 focus:ring-[#B28B36]/10";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Singapore",
  "Germany",
  "France",
  "Japan",
  "Netherlands",
  "New Zealand",
  "Saudi Arabia",
  "South Africa",
  "Other",
];

export default function ContactForm({
  defaultService = "Other",
  defaultMessage = "",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    setStatus("sending");
    setError("");

    try {
      const formData = new FormData(form);

      // Payload matching Spring Boot ContactRequest
      const payload = {
        firstName: String(formData.get("firstName") ?? ""),
        lastName: String(formData.get("lastName") ?? ""),
        email: String(formData.get("email") ?? ""),
        company: String(formData.get("company") ?? ""),
        jobTitle: String(formData.get("jobTitle") ?? ""),
        country: String(formData.get("country") ?? ""),
        message: String(formData.get("message") ?? ""),
        dataConsent: formData.get("dataConsent") === "true",
        marketingConsent:
          formData.get("marketingConsent") === "true",
        website: String(formData.get("website") ?? ""),
      };

      const apiUrl = process.env.NEXT_PUBLIC_SPRING_API_URL;

      if (!apiUrl) {
        throw new Error("Spring Boot API URL is not configured.");
      }

      const response = await fetch(
        `${apiUrl.replace(/\/$/, "")}/api/v1/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.message ||
            result.detail ||
            result.error ||
            "Unable to send your enquiry. Please try again."
        );
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );

      setStatus("error");
    }
  }

  const service = SERVICES.includes(defaultService)
    ? defaultService
    : "Other";

  return (
    <form onSubmit={onSubmit} className="grid gap-[26px]">
      {/* HONEYPOT */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <input type="hidden" name="service" value={service} />

      {/* FIRST NAME */}
      <input
        name="firstName"
        type="text"
        autoComplete="given-name"
        required
        maxLength={50}
        placeholder="First Name*"
        aria-label="First Name"
        className={field}
      />

      {/* LAST NAME */}
      <input
        name="lastName"
        type="text"
        autoComplete="family-name"
        required
        maxLength={50}
        placeholder="Last Name*"
        aria-label="Last Name"
        className={field}
      />

      {/* EMAIL */}
      <input
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
        placeholder="Email Address*"
        aria-label="Email Address"
        className={field}
      />

      {/* COMPANY */}
      <input
        name="company"
        type="text"
        autoComplete="organization"
        required
        maxLength={150}
        placeholder="Company*"
        aria-label="Company"
        className={field}
      />

      {/* JOB TITLE */}
      <input
        name="jobTitle"
        type="text"
        autoComplete="organization-title"
        required
        maxLength={100}
        placeholder="Job Title*"
        aria-label="Job Title"
        className={field}
      />

      {/* COUNTRY */}
      <select
        name="country"
        required
        defaultValue=""
        aria-label="Country"
        className={`${field} appearance-none cursor-pointer`}
      >
        <option value="" disabled>
          Country*
        </option>

        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* MESSAGE */}
      <textarea
        name="message"
        required
        minLength={5}
        maxLength={3000}
        rows={5}
        defaultValue={defaultMessage}
        placeholder="Let us know how we can help you*"
        aria-label="Message"
        className="min-h-[125px] w-full resize-y rounded-[30px] border border-[#DDE3EC] bg-white px-5 py-4 text-[16px] text-[#071536] outline-none transition placeholder:text-[#374151] focus:border-[#B28B36] focus:ring-2 focus:ring-[#B28B36]/10"
      />

      {/* REQUIRED DATA CONSENT */}
      <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-[1.4] text-[#374151]">
        <input
          type="checkbox"
          name="dataConsent"
          value="true"
          required
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#B28B36]"
        />

        <span>
          I agree to RulingMindTech collecting and processing my
          personal data to respond to my request and provide related
          services. <span className="font-semibold">*</span>
        </span>
      </label>

      {/* OPTIONAL MARKETING CONSENT */}
      <label className="flex cursor-pointer items-start gap-3 text-[15px] leading-[1.4] text-[#374151]">
        <input
          type="checkbox"
          name="marketingConsent"
          value="true"
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#B28B36]"
        />

        <span>
          I agree to receive details about services, events and
          marketing communications from RulingMindTech.
        </span>
      </label>

      {/* PRIVACY POLICY */}
      <p className="text-[14px] leading-6 text-[#374151]">
        To learn more about how we protect your data, please refer
        to the{" "}
        <a
          href="/privacy-policy"
          className="font-semibold text-[#B28B36] underline underline-offset-2 transition hover:text-[#071536]"
        >
          RulingMindTech Privacy Policy
        </a>.
      </p>

      {/* SECURITY NOTICE */}
      <p className="text-[14px] text-[#374151]">
        Your information is submitted securely through our contact form.
      </p>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#071536] px-12 py-4 text-[15px] font-bold text-white transition hover:bg-[#B28B36] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit"}
        <ArrowRight size={19} />
      </button>

      {/* SUCCESS */}
      {status === "sent" && (
        <div
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
        >
          Thank you! Your enquiry has been submitted successfully.
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          {error}
        </div>
      )}
    </form>
  );
}
