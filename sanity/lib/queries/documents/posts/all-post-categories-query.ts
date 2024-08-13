import { groq } from "next-sanity";

export const allPostCategoriesQuery = groq`*[_type == 'postCategory'] {
  _id,
  title,
  'slug': slug.current,
}`