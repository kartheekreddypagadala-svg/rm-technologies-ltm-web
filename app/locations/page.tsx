import type { Metadata } from "next";
import { Cards, Cta, PageHero } from "@/components/ui";
import { locations } from "@/lib/more";
export const metadata: Metadata = { title: "Locations" };
export default function Locations() {
  return (<>
    <PageHero crumb="Locations" eyebrow="Locations" title="Where we work." text="Teams close to our customers." />
    <section className="block"><div className="wrap"><Cards items={locations.map((l) => ({ num: l.role.toUpperCase(), title: `${l.city}, ${l.country}`, text: l.text }))} /></div></section>
    <Cta title="Visit or call us" text="Find the right team for your region." />
  </>);
}
