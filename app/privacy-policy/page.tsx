import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import CookieSettingsButton from "@/components/cookies/CookieSettingsButton";

import {
  GRIEVANCE_OFFICER,
  PRIVACY_EMAIL,
  PRIVACY_LAST_UPDATED
} from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How RulingMindTech collects, uses and protects your personal data, and the rights you have."
};

const h =
  "font-display text-[24px] font-bold text-[#071536] md:text-[28px]";

const p =
  "text-[16px] leading-[1.85] text-[#374151]";

const li =
  "list-disc pl-1 marker:text-[#071536]";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        crumb="Privacy Notice"
        eyebrow="Legal"
        title="Privacy Notice"
        text={`How we handle your personal data. Last updated ${PRIVACY_LAST_UPDATED}.`}
      />

      <section className="section-block">
        <div className="wrap grid max-w-[820px] gap-10">

          <div className="grid gap-3">
            <h2 className={h}>Who we are</h2>

            <p className={p}>
              RulingMindTech (“we”, “us”) decides why and how your
              personal data is used when you visit this website,
              contact us or apply for a job with us. This notice
              explains, in plain words, what we collect, why,
              who sees it, how long we keep it and how you can
              control it. Under India&apos;s Digital Personal Data
              Protection Act, 2023 (the &ldquo;DPDP Act&rdquo;)
              we are the &ldquo;Data Fiduciary&rdquo; and you are
              the &ldquo;Data Principal&rdquo;.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>What personal data we collect</h2>

            <ul className={`${p} grid gap-2 pl-5`}>
              <li className={li}>
                <strong>Contact enquiries:</strong> name, email
                address, company, job title, country, enquiry
                type and your message.
              </li>

              <li className={li}>
                <strong>Job applications:</strong> name, contact
                details, location, résumé, optional photograph,
                current salary details and the declarations you
                make in the application form.
              </li>

              <li className={li}>
                <strong>Cookies and similar technologies:</strong>
                a record of your cookie choice and, only if you
                allow them, analytics or marketing cookies.
                See our{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#071536] underline underline-offset-2"
                >
                  Cookie Policy
                </Link>.
              </li>

              <li className={li}>
                <strong>Technical data:</strong> your IP address,
                browser type and the pages requested are processed
                by our hosting provider only to keep the website
                secure and working. We do not use them to profile you.
              </li>

              <li className={li}>
                <strong>Your consent record:</strong> an anonymous
                ID, the time and the version of the notice you
                agreed to, so we can show when and how consent
                was given. When you submit a form we also keep
                what you agreed to, the time, and the notice version.
              </li>
            </ul>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>Why we use your data</h2>

            <ul className={`${p} grid gap-2 pl-5`}>
              <li className={li}>
                To reply to your enquiry and provide the services
                you ask about.
              </li>

              <li className={li}>
                To assess your job application and contact you
                about the recruitment process.
              </li>

              <li className={li}>
                To send updates about our services and events,
                <strong> only if you tick the optional box</strong>
                {" "}for it.
              </li>

              <li className={li}>
                To keep the website secure and, only if you allow
                it, to understand how it is used so we can improve it.
              </li>

              <li className={li}>
                To meet legal and regulatory duties.
              </li>
            </ul>

            <p className={p}>
              We ask for your consent before using your data for
              these purposes. We ask only for the data needed for
              the purpose, and consent is never a condition for
              using parts of the website that do not need your data.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>Who we share it with</h2>

            <p className={p}>
              We do not sell your personal data. We share it only
              with service providers who help us run our business,
              under confidentiality and security obligations:
              cloud hosting and database services (Amazon Web
              Services), email delivery (Amazon SES) and our
              customer relationship management tool (HubSpot).
              We may also share data where the law requires it.
            </p>

            <p className={p}>
              Some of these providers (for example HubSpot) may
              store or process data on servers outside India.
              We transfer data abroad only to countries that the
              Government of India has not restricted under the
              DPDP Act, and only to providers bound by contract
              to protect it. Website pictures are delivered
              through our own domain, so your browser does not
              contact a third-party image service.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>How long we keep it</h2>

            <p className={p}>
              We keep your data only for as long as it is needed
              for the purpose it was collected for, or as the law
              requires. After that we erase it or make it anonymous.
              In practice:
            </p>

            <ul className={`${p} grid gap-2 pl-5`}>
              <li className={li}>
                <strong>Contact enquiries:</strong> up to 24 months
                after our last communication, unless we begin
                working together.
              </li>

              <li className={li}>
                <strong>Job applications:</strong> up to 12 months
                after the hiring decision, so we can consider you
                for other roles (you can ask for earlier erasure).
                If you are hired, the data moves to your employment
                record.
              </li>

              <li className={li}>
                <strong>Consent records:</strong> for as long as
                the related data is kept, and 3 years after, as proof.
              </li>

              <li className={li}>
                <strong>Cookie choice:</strong> 12 months, then
                we ask you again.
              </li>
            </ul>

            <p className={p}>
              If you withdraw consent and we have no other legal
              reason to keep the data, we erase it.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>How we protect it</h2>

            <p className={p}>
              We use reasonable security safeguards such as
              encrypted connections, access controls and secure
              cloud storage. If a personal data breach affects
              you, we will inform you and the authorities as the
              law requires.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>Your rights</h2>

            <ul className={`${p} grid gap-2 pl-5`}>
              <li className={li}>
                Ask for a summary of the personal data we hold
                about you and how it is used.
              </li>

              <li className={li}>
                Ask us to correct, complete or update your data.
              </li>

              <li className={li}>
                Ask us to erase your data when it is no longer needed.
              </li>

              <li className={li}>
                Withdraw your consent at any time. It is as easy
                to withdraw as to give. For cookies, use{" "}
                <CookieSettingsButton className="font-semibold text-[#071536] underline underline-offset-2" />.
                For anything else, write to us.
              </li>

              <li className={li}>
                Get your grievance heard and resolved.
              </li>

              <li className={li}>
                Nominate another person to exercise these rights
                for you if you cannot, for example in case of
                death or incapacity.
              </li>
            </ul>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>Children</h2>

            <p className={p}>
              This website is not meant for children. We do not
              knowingly collect personal data of anyone under
              18 years of age without verifiable consent of a
              parent or lawful guardian, and we never track or
              target children with advertising. Job applicants
              must be 18 or older, and the application form asks
              them to confirm this. If you believe a child has
              sent us data, please contact us and we will erase it.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>
              Questions, requests and complaints
            </h2>

            <p className={p}>
              {GRIEVANCE_OFFICER ? (
                <>
                  Grievance contact:{" "}
                  <strong>{GRIEVANCE_OFFICER}</strong>.
                </>
              ) : null}

              {PRIVACY_EMAIL ? (
                <>
                  {" "}Write to us at{" "}
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="font-semibold text-[#071536] underline underline-offset-2"
                  >
                    {PRIVACY_EMAIL}
                  </a>.
                </>
              ) : (
                <>
                  {" "}Please use our{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-[#071536] underline underline-offset-2"
                  >
                    Contact page
                  </Link>
                  {" "}and mention “Privacy request” in your message.
                </>
              )}

              {" "}We will respond within the time allowed by law.
              If you are not satisfied with our response, you may
              complain to the Data Protection Board of India.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>Changes to this notice</h2>

            <p className={p}>
              If we change this notice in a meaningful way we
              will update the date above and, where needed,
              ask for your consent again.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}