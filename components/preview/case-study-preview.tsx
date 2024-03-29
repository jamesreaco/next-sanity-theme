"use client";
import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseStudyBySlugQuery } from "@/sanity/lib/sanity.queries";

import CaseStudyHeader from "../pages/case-studies/case-study-header";
import CaseStudyOverview from "../pages/case-studies/case-study-overview";
import CaseStudyImageGallery from "../pages/case-studies/case-study-image-gallery";
import { CaseStudy } from "@/types";

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

