import { draftMode } from "next/headers";
import { client } from '@/sanity/config/sanity.client';
import { getCaseStudyBySlug } from '@/sanity/lib/sanity.fetch'
import { caseStudyPathsQuery } from "@/sanity/lib/sanity.queries";

// components
import CaseStudy from '@/components/pages/case-studies/case-study'
import CaseStudyPreview from '@/components/preview/case-study-preview';
import PreviewProvider from "@/components/preview/preview-provider";

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const caseStudies = await client.fetch(caseStudyPathsQuery);
  return caseStudies;
}

interface CaseStudyPageProps {
  params: { slug: string }
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