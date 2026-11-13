import OfferingDetail, { offeringMetadata } from "@/components/OfferingDetail";
import { solutions } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return offeringMetadata("solutions", slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <OfferingDetail kind="solutions" slug={slug} />;
}
