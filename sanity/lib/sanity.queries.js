import { groq } from "next-sanity";

export const pageBySlugQuery = groq`*[_type == 'page' && slug.current == $slug][0] {
  _id,
  title,
  slug->{
    current
  },
  metaTitle,
  metaDescription,
  metaKeywords,
  pageBuilder,
}`
export const homePageQuery = groq`*[_type == 'homePage'][0]{
  _id,
  heading,
  paragraph,
  'image': image.asset->url,
  btnText,
  btnDestination,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const blogPageQuery = groq`*[_type == 'blogPage'][0]{
  _id,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const caseStudyPageQuery = groq`*[_type == 'caseStudyPage'][0]{
  _id,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const contactPageQuery = groq`*[_type == 'contactPage'][0]{
  _id,
  metaTitle,
  metaDescription,
  metaKeywords,
}`
  
export const allPostsQuery = groq`*[_type == 'post'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  category->{
    title
  },
  readTime,
  'image': image.asset->url,
  postBuilder
}`

export const latestPostsQuery = groq`*[_type == 'post'][0...5] | order(_createdAt desc) {
  _id,
  title,
  category->{
    title
  },
  readTime,
  'image': image.asset->url,
  'slug': slug.current,
  postBuilder
}`

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  title,
  'slug': slug.current,
  'category': category->title,
  author->{
    name,
    description,
    'image': image.asset->url,
  },
  'image': image.asset->url,
  readTime,
  postBuilder,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  'params': { 'slug': slug.current }
}`;

export const latestCaseStudiesQuery = groq`*[_type == 'caseStudy'][0...3] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`
 
 export const allCaseStudiesQuery = groq`*[_type == 'caseStudy'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`

export const caseStudyBySlugQuery = groq`*[_type == 'caseStudy' && slug.current == $slug][0]{
  _id,
  title,
  shortDescription,
  overview,
  'slug': slug.current,
  url,
  'image': image.asset->url,
  imageGallery[] {
    'alt': alt,
    'url': asset->url
  },
  metaTitle,
  metaDescription,
  metaKeywords,
}`
  
export const settingsQuery = groq`*[_type == 'settings' && _id == 'settings'][0]{
  _id,
  logoText,
  main_heading,
  hide_testimonials,
  recent_posts,
  enableTopbar,
  topbarMessage,
  enableTopbarLink,
  topbarLinkUrl,
  topbarLinkText,
  topbarLinkColor,
  navbarMenuItems[]-> {
    _id,
    title,
    link
  },
  navbarButtonText,
  navbarButtonLink,
  footerTagline,
  footerCopyright,
  footerQuickLinks[]-> {
    _id,
    title,
    link
  },
  footerSocialLinks[]-> {
    _id,
    title,
    link
  },
  footerLegalLinks[]-> {
    _id,
    title,
    link
  },
  enableFootnote,
  footerFootnoteText,
  enableFootnoteLink,
  footerFootnoteLink
}`  