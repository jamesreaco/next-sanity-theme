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
  overview: PortableTextBlock
  imageGallery: CaseStudyGalleryImage[]
}

export interface SettingsPayload {
  enableBottomBar: boolean
  bottomBarMessage: string
  enableBottomBarLink: boolean
  bottomBarLinkUrl: string
  bottomBarLinkText: string
  bottomBarLinkColor: string
  navbarButtonText: string
  navbarButtonLink: string
  logoText: string
  navbarMenuItems: {
    _id: string
    title: string
    link: string
  }[]
  footerTagline: string
  enableSubscribeForm: boolean
  subscribeFormTitle: string
  subscribeFormPlaceholder: string
  footerQuickLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerSocialLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerCopyright: string
  footerLegalLinks: {
    _id: string
    title: string
    link: string
  }[]
  enableFootnote: boolean
  enableFootnoteLink: boolean
  footerFootnoteText: string
  footerFootnoteLinkText: string
  footerFootnoteLink: string
}