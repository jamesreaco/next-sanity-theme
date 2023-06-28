import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getSettings() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'settings' && _id == 'settings'][0]{
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
        title,
        link
      },
      navbarButtonText,
      navbarButtonLink,
      footerTagline,
      footerCopyright,
      footerQuickLinks[]-> {
        title,
        link
      },
      footerSocialLinks[]-> {
        title,
        link
      },
      footerLegalLinks[]-> {
        title,
        link
      },
    }`
  )
}

export async function getPageBySlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && slug.current == $slug][0] {
      _id,
      title,
      slug->{
        current
      },
      metaTitle,
      metaDescription,
      metaKeywords,
      pageBuilder,
    }`, { slug: slug }
  )
}

export async function getHomePage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'homePage'][0]{
      _id,
      heading,
      tagline,
      metaTitle,
      metaDescription,
      metaKeywords,
      pageBuilder
    }`,
  )
}

export async function getBlogPage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blogPage'][0]{
      _id,
      metaTitle,
      metaDescription,
      metaKeywords,
    }`,
  )
}

export async function getCaseStudyPage() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'caseStudyPage'][0]{
      _id,
      metaTitle,
      metaDescription,
      metaKeywords,
    }`,
  )
}

export async function getAllPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post'] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      category->{
        title
      },
      readTime,
      'image': image.asset->url,
      content
    }`,
  )
}

export async function getLatestPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post'][0...5] | order(_createdAt desc) {
      _id,
      title,
      category->{
        title
      },
      readTime,
      'image': image.asset->url,
      'slug': slug.current,
    }`,
  )
}

export async function getPostBySlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      'category': category->title,
      'image': image.asset->url,
      readTime,
      content
    }`, { slug: slug }
  )
}

export async function getLatestCaseStudies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'caseStudy'][0...2] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      url,
      'image': image.asset->url,
    }`,
  )
}

export async function getAllCaseStudies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'caseStudy'] | order(_createdAt desc) {
      _id,
      title,
      'slug': slug.current,
      url,
      'image': image.asset->url,
    }`,
  )
}

export async function getCaseStudyBySlug(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'caseStudy' && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      url,
      'image': image.asset->url,
    }`, { slug: slug }
  )
}