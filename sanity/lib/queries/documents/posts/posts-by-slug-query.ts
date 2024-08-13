import { groq } from "next-sanity";
import { seo } from "../../fragments/seo";

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  title,
  'slug': slug.current,
  category->{
    title,
    'slug': slug.current,
  },
  author->{
    name,
    description,
    'image': image.asset->url,
  },
  'image': image.asset->url,
  readTime,
  content,
  relatedPosts[]->{
    title,
    'image': image.asset->url,
    'slug': slug.current,
    readTime,
    category->{
      title,
      'slug': slug.current,
    },
  },
  ${seo}
}`