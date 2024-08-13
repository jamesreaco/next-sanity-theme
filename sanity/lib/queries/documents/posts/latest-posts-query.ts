import { groq } from "next-sanity";

export const latestPostsQuery = groq`*[_type == 'post'][0...5] | order(_createdAt desc) {
  _id,
  title,
  category->{
    title,
    'slug': slug.current,
  },
  readTime,
  'image': image.asset->url,
  'slug': slug.current,
}`