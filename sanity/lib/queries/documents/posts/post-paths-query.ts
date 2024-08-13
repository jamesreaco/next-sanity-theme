import { groq } from "next-sanity";

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  'params': { 'slug': slug.current }
}`;