
import type { Metadata } from "next";
import Filterable from "@/components/Filterable";
import { Block, DarkHero } from "@/components/ltm";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Insights" };

export default function Insights() {
  const items = articles.map((a) => ({
    href: `/insights/${a.slug}`,
    title: a.title,
    text: a.summary,
    tag: a.category,
    meta: a.date,
  }));

  return (
    <>
      <DarkHero
        title={
          <>
            Insights
            <br />
            Hub
          </>
        }
        text="Short reads on cloud, AI, security and the web: practical ideas for growing businesses."
      />

      <Block grey title="Browse by topic">
        <Filterable items={items} />
      </Block>
    </>
  );
}
