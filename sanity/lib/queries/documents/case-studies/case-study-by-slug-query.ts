import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const caseStudyBySlugQuery = groq`*[_type == 'caseStudy' && slug.current == $slug][0]{
  _id,
  title,
  shortDescription,
  overview,
  'slug': slug.current,
  url,
  'image': image.asset->url,
  imageGallery[] {
    'alt': alt,
    'url': asset->url
  },
  ${seo}
}`