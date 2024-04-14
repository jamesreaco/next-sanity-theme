import 'server-only'

import { groq } from 'next-sanity'
import { client } from '../sanity/config/sanity.client'
import { readToken } from '../sanity/config/sanity.api'

export function generateStaticSlugs(type: string) {
  return client
    .withConfig({ token: readToken, perspective: 'published' })
    .fetch<string[]>(
      groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
      { type },
      { 
        next: { 
          tags: [type] 
        } 
      },
    )
}