import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getCaseStudyBySlug } from '@/sanity/lib/sanity.fetch'
import { generateStaticSlugs } from "@/utils/generate-static-slugs";

// components
import CaseStudy from '@/components/pages/case-studies/case-study'
import CaseStudyPreview from '@/components/preview/case-study-preview';
import PreviewProvider from "@/components/preview/preview-provider";

interface CaseStudyPageProps {
  params: { slug: string }
}

export const revalidate = 30;

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {

  const caseStudy = await getCaseStudyBySlug(params.slug)

  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    keywords: caseStudy.metaKeywords,
  }
}

export async function generateStaticParams() {
  return generateStaticSlugs('caseStudy');
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {

  const caseStudy = await getCaseStudyBySlug(params.slug)
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <CaseStudyPreview caseStudy={caseStudy} />
      </PreviewProvider>
    );
  }

  return (
    <CaseStudy caseStudy={caseStudy} />
  )
}