
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "Singapore",
  "United Arab Emirates",
  "Other",
];

export default function ContactReadySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Connect this form to your backend/API to deliver enquiries.
    setSubmitted(true);
  }

  const fieldClass =
    "h-[72px] w-full rounded-full border border-white/35 bg-white/5 px-7 text-[16px] text-white outline-none transition-colors placeholder:text-white/65 focus:border-[#B28B36] focus:ring-1 focus:ring-[#B28B36]";

  return (
    <section className="bg-[#071536] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1450px] gap-14 lg:grid-cols-[0.85fr_1.35fr] lg:gap-20">

        {/* Left content */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#B28B36]">
            Let's create something meaningful
          </p>

          <h2 className="font-display text-[clamp(48px,6vw,78px)] font-semibold leading-[1.02] tracking-tight text-white">
            Are you
            <br />
            ready?
          </h2>

          <p className="mt-8 max-w-[570px] text-[17px] font-medium leading-[1.65] text-white/85 md:text-[19px]">
            The most forward-thinking businesses aren't just adopting new
            technologies. They are using innovation to move ahead, solve
            complex challenges and create what's next.
          </p>

          <p className="mt-6 text-sm leading-7 text-white/65">
            Tell us about your goals. Let's explore how RulingMind
            Technologies can help your business move forward.
          </p>
        </div>

        {/* Right form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* Name fields */}
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="firstName"
                type="text"
                placeholder="First Name*"
                aria-label="First Name"
                autoComplete="given-name"
                required
                className={fieldClass}
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last Name*"
                aria-label="Last Name"
                autoComplete="family-name"
                required
                className={fieldClass}
              />
            </div>

            {/* Email and company */}
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                aria-label="Email Address"
                autoComplete="email"
                required
                className={fieldClass}
              />

              <input
                name="company"
                type="text"
                placeholder="Company*"
                aria-label="Company"
                autoComplete="organization"
                required
                className={fieldClass}
              />
            </div>

            {/* Job title and country */}
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="jobTitle"
                type="text"
                placeholder="Job Title*"
                aria-label="Job Title"
                autoComplete="organization-title"
                required
                className={fieldClass}
              />

              <select
                name="country"
                aria-label="Country"
                defaultValue=""
                required
                className={`${fieldClass} appearance-none`}
              >
                <option value="" disabled className="bg-[#071536]">
                  Country*
                </option>

                {countries.map((country) => (
                  <option
                    key={country}
                    value={country}
                    className="bg-[#071536] text-white"
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Let us know how we can help you*"
              aria-label="Message"
              required
              rows={4}
              className="min-h-[130px] w-full resize-y rounded-[34px] border border-white/35 bg-white/5 px-7 py-6 text-[16px] text-white outline-none transition-colors placeholder:text-white/65 focus:border-[#B28B36] focus:ring-1 focus:ring-[#B28B36]"
            />

            {/* Consent */}
            <div className="space-y-6">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  className="mt-1 h-6 w-6 shrink-0 accent-[#B28B36]"
                />
                <span className="text-[15px] font-medium leading-6 text-white/90">
                  I agree to RulingMind Technologies collecting and
                  processing my personal data to respond to my request
                  and provide related services.*
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  className="mt-1 h-6 w-6 shrink-0 accent-[#B28B36]"
                />
                <span className="text-[15px] font-medium leading-6 text-white/90">
                  I agree to receive updates about services, events and
                  marketing communications from RulingMind Technologies.
                </span>
              </label>
            </div>

            {/* Privacy information */}
            <p className="text-sm leading-6 text-white/65">
              To learn more about how we protect your information,
              please refer to our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-[#B28B36] underline underline-offset-4 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>.
            </p>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-4 rounded-full bg-[#B28B36] px-9 py-4 font-bold text-white transition-colors hover:bg-white hover:text-[#071536]"
            >
              Submit enquiry
              <ArrowRight size={19} />
            </button>

            {submitted && (
              <p role="status" className="text-sm text-[#B28B36]">
                Form validated successfully. Connect your backend to receive
                and process enquiries.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
