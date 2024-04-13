import 'server-only'

import type { QueryParams } from '@sanity/client'
import { client } from "../config/sanity.client";

import { 
  allCaseStudiesQuery, 
  allPostCategoriesQuery, 
  allPostsQuery, 
  blogPageQuery, 
  caseStudyBySlugQuery, 
  caseStudyPageQuery, 
  contactPageQuery, 
  homePageQuery, 
  latestCaseStudiesQuery, 
  latestPostsQuery, 
  postBySlugQuery, 
  postCategoryBySlugQuery, 
  postsByCategoryQuery, 
  privacyPageQuery, 
  settingsQuery, 
  termsPageQuery
} from "./sanity.queries";

import { 
  BlogPagePayload, 
  CaseStudyPagePayload, 
  ContactPagePayload, 
  HomePagePayload, 
  PrivacyPagePayload, 
  SettingsPayload, 
  TermsPagePayload 
} from '@/types';

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({ 
  query, 
  params = DEFAULT_PARAMS, 
  tags = DEFAULT_TAGS 
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
      cache: 'no-store',
      next: {
        tags
      }
  })
}

export async function getSettings() {
  return sanityFetch<SettingsPayload>({
    query: settingsQuery,
    tags: ['settings']
  })
}

export async function getHomePage() {
  return sanityFetch<HomePagePayload>({
    query: homePageQuery,
    tags: ['homePage']
  })
}

export async function getBlogPage() {
  return sanityFetch<BlogPagePayload>({
    query: blogPageQuery,
    tags: ['blogPage']
  })
}

export async function getCaseStudyPage() {
  return sanityFetch<CaseStudyPagePayload>({
    query: caseStudyPageQuery,
    tags: ['caseStudyPage']
  })
}

export async function getContactPage() {
  return sanityFetch<ContactPagePayload>({
    query: contactPageQuery,
    tags: ['contactPage']
  })
}

export async function getPrivacyPage() {
  return sanityFetch<PrivacyPagePayload>({
    query: privacyPageQuery,
    tags: ['privacyPage']
  })
}

export async function getTermsPage() {
  return sanityFetch<TermsPagePayload>({
    query: termsPageQuery,
    tags: ['termsPage']
  })
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

export async function getPostBySlug(slug: string) {
  return client.fetch(
    postBySlugQuery, { slug: slug }
  )
}

export async function getAllPostsByCategory(slug: string) {
  return client.fetch(
    postsByCategoryQuery, { slug: slug }
  )
}

export async function getAllPostCategories() {
  return client.fetch(
    allPostCategoriesQuery
  )
}

export async function getPostCategoryBySlug(slug: string) {
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

export async function getCaseStudyBySlug(slug: string) {
  return client.fetch(
    caseStudyBySlugQuery, { slug: slug }
  )
}
