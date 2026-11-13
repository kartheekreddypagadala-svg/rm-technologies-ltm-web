
import type { Metadata } from "next";
import { Block, DarkHero, ExploreMore, InfoGrid } from "@/components/ltm";
import { esgPillars } from "@/lib/company";

export const metadata: Metadata = {
  title: "Environment, Sustainability and Governance",
};

export default function Esg() {
  return (
    <>
      <DarkHero
        title={<>Responsible<br />by design</>}
        text="How we think about the environment, our people and the way we run RulingMindTech."
        cta={{ label: "Talk to us", href: "/contact" }}
      />

      <Block
        grey
        title="Our approach"
        text="Sample commitments: replace with the company’s approved statements before launch."
      >
        <InfoGrid items={esgPillars} />
      </Block>

      <Block
        title="Privacy and security"
        text="We handle personal data with care and follow the Digital Personal Data Protection (DPDP) Act. Our contact form collects only what we need, and security checks are part of how we build."
      />

      <ExploreMore items={[
        {
          title: "Diversity, Equity and Inclusion",
          text: "How we build a fair and welcoming team.",
          href: "/dei",
        },
        {
          title: "About us",
          text: "Who we are and what we believe.",
          href: "/about",
        },
        {
          title: "Careers",
          text: "Join a team that cares about outcomes.",
          href: "/careers",
        },
      ]} />
    </>
  );
}
