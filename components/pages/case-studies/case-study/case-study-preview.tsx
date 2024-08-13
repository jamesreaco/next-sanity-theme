"use client";
import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseStudyBySlugQuery } from "@/sanity/lib/queries";

import CaseStudyHeader from "./case-study-header";
import CaseStudyOverview from "./case-study-overview";
import CaseStudyImageGallery from "./case-study-image-gallery";
import { CaseStudy } from "@/types/documents/case-study";

interface CaseStudyPreviewProps {
  caseStudy: CaseStudy
}

export default function CaseStudyPreview({ caseStudy }: CaseStudyPreviewProps) {

  const params = useParams()
  const [data] = useLiveQuery(caseStudy, caseStudyBySlugQuery, params)

  return (
    <>
      <CaseStudyHeader caseStudy={data} />
      <CaseStudyOverview caseStudy={data} />
      <CaseStudyImageGallery caseStudy={data} />
    </>
  )
}

