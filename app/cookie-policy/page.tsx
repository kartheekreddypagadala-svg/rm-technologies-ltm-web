import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import CookieSettingsButton from "@/components/cookies/CookieSettingsButton";
import { PRIVACY_LAST_UPDATED } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "The cookies RulingMindTech uses, why we use them and how you can control them."
};

const h =
  "font-display text-[24px] font-bold text-[#071536] md:text-[28px]";

const p =
  "text-[16px] leading-[1.85] text-[#374151]";

const rows = [
  {
    name: "rmt_consent",
    category: "Strictly necessary",
    purpose:
      "Remembers your cookie choice so we do not ask on every visit.",
    duration: "12 months",
    party: "First party"
  },
  {
    name: "_ga, _ga_*",
    category: "Analytics",
    purpose:
      "Counts visits and shows which pages are used. Set only if you allow analytics and analytics is switched on for the site.",
    duration: "Up to 13 months",
    party: "Third party (Google)"
  }
];

export default function CookiePolicy() {
  return (
    <>
      <PageHero
        crumb="Cookie Policy"
        eyebrow="Legal"
        title="Cookie Policy"
        text={`What cookies we use and how you stay in control. Last updated ${PRIVACY_LAST_UPDATED}.`}
      />

      <section className="section-block">
        <div className="wrap grid max-w-[900px] gap-10">

          <div className="grid gap-3">
            <h2 className={h}>What are cookies?</h2>

            <p className={p}>
              Cookies are small text files that a website saves
              on your device. They help a site work, remember
              your choices and, if you allow it, understand how
              it is used.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>How we use them</h2>

            <p className={p}>
              Strictly necessary cookies are always on because
              the site cannot work properly without them.
              Functional, analytics and marketing cookies are
              <strong> off until you switch them on</strong>.
              We never tick these boxes for you.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className={h}>Cookies on this website</h2>

            <div className="overflow-x-auto rounded-[16px] border border-[#DDE3EC]">
              <table className="w-full min-w-[640px] border-collapse text-left text-[14.5px]">
                <thead className="bg-[#071536] text-white">
                  <tr>
                    {[
                      "Cookie",
                      "Category",
                      "Purpose",
                      "Duration",
                      "Provider"
                    ].map((c) => (
                      <th
                        key={c}
                        className="px-4 py-3 font-bold"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="text-[#374151]">
                  {rows.map((r) => (
                    <tr
                      key={r.name}
                      className="border-t border-[#DDE3EC] align-top"
                    >
                      <td className="px-4 py-3 font-semibold text-[#071536]">
                        {r.name}
                      </td>

                      <td className="px-4 py-3">
                        {r.category}
                      </td>

                      <td className="px-4 py-3">
                        {r.purpose}
                      </td>

                      <td className="px-4 py-3">
                        {r.duration}
                      </td>

                      <td className="px-4 py-3">
                        {r.party}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>
              Manage or withdraw your choice
            </h2>

            <p className={p}>
              You can change your mind at any time. Open{" "}
              <CookieSettingsButton className="font-semibold text-[#071536] underline underline-offset-2" />
              {" "}(also in the footer of every page) to allow
              or block each category. When you switch a
              category off, we delete its cookies from your
              browser. You can also block or delete cookies
              in your browser settings, but some parts of the
              site may then not work as expected.
            </p>
          </div>

          <div className="grid gap-3">
            <h2 className={h}>More information</h2>

            <p className={p}>
              To learn how we handle personal data and what
              rights you have, read our{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold text-[#071536] underline underline-offset-2"
              >
                Privacy Notice
              </Link>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}