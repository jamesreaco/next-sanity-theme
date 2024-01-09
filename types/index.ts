import type { PortableTextBlock } from '@portabletext/types'

export type PostCategory = {
  title: string
  slug: string
}

export type PostAuthor = {
  name: string
  description: string
  image: string
}

export type Post = {
  _id: string
  slug: string
  title: string
  image: string
  readTime: number
  author: PostAuthor
  content: PortableTextBlock
  category: PostCategory
}

export type CaseStudyGalleryImage = {
  url: string
  alt: string
}

export type CaseStudy = {
  _id: string
  title: string
  slug: string
  image: string
  shortDescription: string
  url: string
  overview: string
  imageGallery: CaseStudyGalleryImage[]
}