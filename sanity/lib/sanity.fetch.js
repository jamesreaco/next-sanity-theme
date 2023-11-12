import { client } from "../config/sanity.client";
import { allCaseStudiesQuery, allPostsQuery, blogPageQuery, caseStudyBySlugQuery, caseStudyPageQuery, contactPageQuery, homePageQuery, latestCaseStudiesQuery, latestPostsQuery, pageBySlugQuery, postBySlugQuery, settingsQuery } from "./sanity.queries";

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

export async function getPageBySlug(slug) {
  return client.fetch(
    pageBySlugQuery, { slug: slug }
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
