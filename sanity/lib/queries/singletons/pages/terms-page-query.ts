import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const termsPageQuery = groq`*[_type == 'termsPage'][0]{
  _id,
  heading,
  content,
  ${seo}
}`