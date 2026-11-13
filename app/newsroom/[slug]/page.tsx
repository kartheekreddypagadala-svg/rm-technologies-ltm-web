import { notFound } from "next/navigation";
import { Cta, PageHero } from "@/components/ui";
import { news } from "@/lib/more";
export const generateStaticParams = () => news.map((n) => ({ slug: n.slug }));
export default function Item({ params }: { params: { slug: string } }) {
  const n = news.find((x) => x.slug === params.slug); if (!n) notFound();
  return (<>
    <PageHero crumb={`Newsroom / ${n.title}`} eyebrow={n.date} title={n.title} text={n.summary} />
    <section className="block"><div className="wrap max-w-[760px] grid gap-5 text-[17px] leading-[1.9] text-muted">{n.body.map((p) => <p key={p}>{p}</p>)}</div></section>
    <Cta title="Want to know more?" text="Talk to our team." />
  </>);
}
