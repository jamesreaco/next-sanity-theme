import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const contactPageQuery = groq`*[_type == 'contactPage'][0]{
  _id,
  heading,
  ${seo}
}`