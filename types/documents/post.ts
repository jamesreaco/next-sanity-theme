import type { PortableTextBlock } from '@portabletext/types'

export type Post = {
  _id: string
  slug: string
  title: string
  image: string
  readTime: number
  author: PostAuthor
  content: PortableTextBlock
  category: PostCategory
  relatedPosts: Post[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type PostCategory = {
  title: string
  slug: string
}

export type PostAuthor = {
  name: string
  description: string
  image: string
}