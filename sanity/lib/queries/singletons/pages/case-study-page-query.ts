import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const caseStudyPageQuery = groq`*[_type == 'caseStudyPage'][0]{
  _id,
  heading,
  ${seo}
}`