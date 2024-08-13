import { Metadata } from "next";
import { draftMode } from "next/headers";
import { fetchCaseStudyBySlug } from '@/sanity/lib/fetches'
import { generateStaticSlugs } from "@/utils/generate-static-slugs";
import CaseStudy from '@/components/pages/case-studies/case-study'
import CaseStudyPreview from '@/components/preview/case-study-preview';
import PreviewProvider from "@/components/preview/preview-provider";

interface CaseStudyPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {

  const caseStudy = await fetchCaseStudyBySlug(params.slug)

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

  const caseStudy = await fetchCaseStudyBySlug(params.slug)
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