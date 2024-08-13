import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const homePageQuery = groq`*[_type == 'homePage'][0]{
  _id,
  heading,
  paragraph,
  'image': image.asset->url,
  btnText,
  btnDestination,
  ${seo}
}`