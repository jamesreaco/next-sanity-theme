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

import { Settings } from '@/types/singletons/settings';
import { Page } from '@/types/documents/page';
import { HomePage } from '@/types/singletons/home-page';
import { CaseStudy } from '@/types/documents/case-study';
import { Post, PostCategory } from '@/types/documents/post';

export async function sanityFetch<QueryResponse>({ 
  query, 
  params = {} as QueryParams, 
  tags = [] as string[]
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { tags }
  })
}

export async function getSettings() {
  return sanityFetch<Settings>({
    query: settingsQuery,
    tags: ['settings']
  })
}

export async function getHomePage() {
  return sanityFetch<HomePage>({
    query: homePageQuery,
    tags: ['homePage']
  })
}

export async function getBlogPage() {
  return sanityFetch<Page>({
    query: blogPageQuery,
    tags: ['blogPage']
  })
}

export async function getCaseStudyPage() {
  return sanityFetch<Page>({
    query: caseStudyPageQuery,
    tags: ['caseStudyPage']
  })
}

export async function getContactPage() {
  return sanityFetch<Page>({
    query: contactPageQuery,
    tags: ['contactPage']
  })
}

export async function getPrivacyPage() {
  return sanityFetch<Page>({
    query: privacyPageQuery,
    tags: ['privacyPage']
  })
}

export async function getTermsPage() {
  return sanityFetch<Page>({
    query: termsPageQuery,
    tags: ['termsPage']
  })
}

export async function getAllPosts() {
  return sanityFetch<Post[]>({
    query: allPostsQuery,
    tags: ['post']
  })
}

export async function getLatestPosts() {
  return sanityFetch<Post[]>({
    query: latestPostsQuery,
    tags: ['post']
  })
}

export async function getPostBySlug(slug: string) {
  return sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getAllPostsByCategory(slug: string) {
  return sanityFetch<Post[]>({
    query: postsByCategoryQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getAllPostCategories() {
  return sanityFetch<PostCategory[]>({
    query: allPostCategoriesQuery,
    tags: ['postCategory'],
  })
}

export async function getPostCategoryBySlug(slug: string) {
  return sanityFetch<Post>({
    query: postCategoryBySlugQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getLatestCaseStudies() {
  return sanityFetch<CaseStudy[]>({
    query: latestCaseStudiesQuery,
    tags: ['caseStudy']
  })
}

export async function getAllCaseStudies() {
  return sanityFetch<CaseStudy[]>({
    query: allCaseStudiesQuery,
    tags: ['caseStudy']
  })
}

export async function getCaseStudyBySlug(slug: string) {
  return sanityFetch<CaseStudy>({
    query: caseStudyBySlugQuery,
    params: { slug: slug },
    tags: ['caseStudy'],
  })
}