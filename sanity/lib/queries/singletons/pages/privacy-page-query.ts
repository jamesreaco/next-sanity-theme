import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const privacyPageQuery = groq`*[_type == 'privacyPage'][0]{
  _id,
  heading,
  content,
  ${seo}
}`