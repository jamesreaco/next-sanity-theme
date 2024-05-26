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
  relatedPosts: Post[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
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
  metaTitle: string
  metaDescription: string
  metaKeywords: string
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

export type HomePagePayload = {
  _id: string
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type BlogPagePayload = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type CaseStudyPagePayload = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type TermsPagePayload = {
  _id: string
  heading: string
  content: PortableTextBlock
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type PrivacyPagePayload = {
  _id: string
  heading: string
  content: PortableTextBlock
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type ContactPagePayload = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type Quote = {
  quote: string
  author: string
  bgColor: string
  iconColor: string 
  textColor: string
}