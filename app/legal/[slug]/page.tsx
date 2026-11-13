import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import { legal } from "@/lib/more";
export const generateStaticParams = () => Object.keys(legal).map((slug) => ({ slug }));
export default function Legal({ params }: { params: { slug: string } }) {
  const l = legal[params.slug]; if (!l) notFound();
  return (<>
    <PageHero crumb={l.title} eyebrow="Legal" title={l.title} text="RulingMindTech" />
    <section className="block"><div className="wrap max-w-[760px] grid gap-5 text-[16px] leading-[1.9] text-muted">{l.body.map((p) => <p key={p}>{p}</p>)}</div></section>
  </>);
}
