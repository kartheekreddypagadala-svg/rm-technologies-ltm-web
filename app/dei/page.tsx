
import type { Metadata } from "next";
import { Block, DarkHero, ExploreMore, InfoGrid } from "@/components/ltm";
import { deiPrinciples } from "@/lib/company";

export const metadata: Metadata = {
  title: "Diversity, Equity and Inclusion",
};

export default function Dei() {
  return (
    <>
      <DarkHero
        title={<>Everyone<br />belongs here</>}
        text="We want a team where different backgrounds and ideas make the work better."
        cta={{ label: "See open roles", href: "/careers#open-positions" }}
      />

      <Block
        grey
        title="What we stand for"
        text="Sample principles: replace with the company’s approved statements before launch."
      >
        <InfoGrid items={deiPrinciples} cols={4} />
      </Block>

      <Block
        title="Fair hiring"
        text="We describe roles clearly, use the same questions for every candidate and decide on skills and potential. If you need any adjustment during the process, tell us and we will make it happen."
      />

      <ExploreMore items={[
        {
          title: "Careers",
          text: "Open roles and life at RulingMindTech.",
          href: "/careers",
        },
        {
          title: "ESG",
          text: "Environment, sustainability and governance.",
          href: "/esg",
        },
        {
          title: "About us",
          text: "Our values and the people behind the company.",
          href: "/about",
        },
      ]} />
    </>
  );
}
