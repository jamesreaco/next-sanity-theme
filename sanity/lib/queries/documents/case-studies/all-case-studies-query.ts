import { groq } from "next-sanity";

export const allCaseStudiesQuery = groq`*[_type == 'caseStudy'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`