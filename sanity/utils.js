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

export async function getAllPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post'] | order(_createdAt desc) {
      _id,
      title,
      slug->{
        current
      },
      category->{
        title
      },
      content
    }`,
  )
}

export async function getLatestPosts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'post'] | order(_createdAt desc) {
      _id,
      title,
      category->{
        title
      },
      slug->{
        current
      }
    }`,
  )
}

export async function getLatestCaseStudies() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'caseStudy'] | order(_createdAt desc) {
      _id,
      title,
      slug->{
        current
      },
      url,
      'image': image.asset->url,
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
      pageBuilder
    }`,
  )
}