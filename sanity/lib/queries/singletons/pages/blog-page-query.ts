import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const blogPageQuery = groq`*[_type == 'blogPage'][0]{
  _id,
  heading,
  ${seo}
}`