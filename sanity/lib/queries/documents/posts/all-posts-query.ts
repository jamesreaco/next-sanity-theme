import { groq } from "next-sanity";

export const allPostsQuery = groq`*[_type == 'post'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  category->{
    title,
    'slug': slug.current,
  },
  readTime,
  'image': image.asset->url,
}`