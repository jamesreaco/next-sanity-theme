"use client";
import { useLiveQuery } from "@sanity/preview-kit";
import { latestCaseStudiesQuery } from "@/sanity/lib/sanity.queries";
import HomeCaseStudies from "../pages/home/home-case-studies";

export default function HomeCaseStudiesPreview({ caseStudies }) {

  const [data] = useLiveQuery(caseStudies, latestCaseStudiesQuery);
  
  return (
    <HomeCaseStudies 
      caseStudies={data} 
    />
  )
}