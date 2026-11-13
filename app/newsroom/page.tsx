
import type { Metadata } from "next";
import { Block, DarkHero } from "@/components/ltm";
import NewsList from "@/components/NewsList";
import { contactInfo } from "@/lib/content";
import { newsItems } from "@/lib/company";

export const metadata: Metadata = { title: "Newsroom" };

export default function Newsroom() {
  return (
    <>
      <DarkHero
        title={<>Newsroom</>}
        text="Press releases, company news, awards and events from RulingMindTech."
        cta={{
          label: "Media enquiries",
          href: `mailto:${contactInfo.email}?subject=Media`,
        }}
      />

      <Block grey title="Latest news" text="Sample items: replace with real announcements in lib/company.ts.">
        <NewsList items={newsItems} />
      </Block>

      <Block title="Media contact">
        <p className="text-lg">
          For interviews and press questions, write to{" "}
          <a className="text-brand" href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </a>.
        </p>
      </Block>
    </>
  );
}
