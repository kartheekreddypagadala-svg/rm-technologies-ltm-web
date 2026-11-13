import OfferingDetail, { offeringMetadata } from "@/components/OfferingDetail";
import { services } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return offeringMetadata("services", slug);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <OfferingDetail kind="services" slug={slug} />;
}
