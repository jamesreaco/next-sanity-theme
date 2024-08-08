import type { PortableTextBlock } from '@portabletext/types'

export type CaseStudy = {
  _id: string
  title: string
  slug: string
  image: string
  shortDescription: string
  url: string
  overview: PortableTextBlock
  imageGallery: CaseStudyGalleryImage[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type CaseStudyGalleryImage = {
  url: string
  alt: string
}