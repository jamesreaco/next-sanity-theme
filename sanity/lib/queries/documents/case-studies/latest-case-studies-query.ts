import { groq } from "next-sanity";

export const latestCaseStudiesQuery = groq`*[_type == 'caseStudy'][0...3] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`