import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseBySlug } from "@/data/cases";
import CaseDetailClient from "@/components/CaseDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug, "en") || getCaseBySlug(slug, "pt");

  if (!caseStudy) {
    return {
      title: "Case Study | Sibelius Claussen",
    };
  }

  return {
    title: `${caseStudy.title} | Sibelius Claussen`,
    description: caseStudy.subtitle,
    openGraph: {
      title: `${caseStudy.title} | Sibelius Claussen`,
      description: caseStudy.subtitle,
      images: [caseStudy.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug, "pt");

  if (!caseStudy) {
    notFound();
  }

  return <CaseDetailClient slug={slug} />;
}
