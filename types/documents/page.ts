import type { PortableTextBlock } from '@portabletext/types'

export type Page = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  content: PortableTextBlock
}