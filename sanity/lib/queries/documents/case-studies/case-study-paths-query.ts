import { groq } from "next-sanity";

export const caseStudyPathsQuery = groq`*[_type == "caseStudy" && defined(slug.current)][]{
  'params': { 'slug': slug.current }
}`;