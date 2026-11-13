import IndustryDetail, { industryMetadata } from "@/components/IndustryDetail";
import { industries } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return industryMetadata(slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <IndustryDetail slug={slug} />;
}
