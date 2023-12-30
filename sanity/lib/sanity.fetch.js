import { client } from "../config/sanity.client";
import { allCaseStudiesQuery, allPostCategoriesQuery, allPostsQuery, blogPageQuery, caseStudyBySlugQuery, caseStudyPageQuery, contactPageQuery, homePageQuery, latestCaseStudiesQuery, latestPostsQuery, pageBySlugQuery, postBySlugQuery, postCategoryBySlugQuery, postsByCategoryQuery, settingsQuery } from "./sanity.queries";

export async function getSettings() {
  return client.fetch(
    settingsQuery
  )
}

export async function getHomePage() {
  return client.fetch(
    homePageQuery
  )
}

export async function getBlogPage() {
  return client.fetch(
    blogPageQuery
  )
}

export async function getCaseStudyPage() {
  return client.fetch(
    caseStudyPageQuery
  )
}

export async function getContactPage() {
  return client.fetch(
    contactPageQuery
  )
}

export async function getAllPosts() {
  return client.fetch(
    allPostsQuery
  )
}

export async function getLatestPosts() {
  return client.fetch(
    latestPostsQuery
  )
}

export async function getPostBySlug(slug) {
  return client.fetch(
    postBySlugQuery, { slug: slug }
  )
}

export async function getAllPostsByCategory(slug) {
  return client.fetch(
    postsByCategoryQuery, { slug: slug }
  )
}

export async function getAllPostCategories() {
  return client.fetch(
    allPostCategoriesQuery
  )
}

export async function getPostCategoryBySlug(slug) {
  return client.fetch(
    postCategoryBySlugQuery, { slug: slug }
  )
}

export async function getLatestCaseStudies() {
  return client.fetch(
    latestCaseStudiesQuery
  )
}

export async function getAllCaseStudies() {
  return client.fetch(
    allCaseStudiesQuery
  )
}

export async function getCaseStudyBySlug(slug) {
  return client.fetch(
    caseStudyBySlugQuery, { slug: slug }
  )
}
