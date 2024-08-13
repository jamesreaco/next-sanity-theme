import 'server-only'

import { sanityFetch } from './utils/sanity-fetch';

import { Settings } from '@/types/singletons/settings';
import { Page } from '@/types/documents/page';
import { HomePage } from '@/types/singletons/home-page';
import { CaseStudy } from '@/types/documents/case-study';
import { Post, PostCategory } from '@/types/documents/post';

import { settingsQuery } from '../queries/singletons/settings-query';
import { homePageQuery } from '../queries/singletons/pages/home-page-query';
import { blogPageQuery } from '../queries/singletons/pages/blog-page-query';
import { caseStudyPageQuery } from '../queries/singletons/pages/case-study-page-query';
import { contactPageQuery } from '../queries/singletons/pages/contact-page-query';
import { privacyPageQuery } from '../queries/singletons/pages/privacy-page-query';
import { termsPageQuery } from '../queries/singletons/pages/terms-page-query';
import { allPostsQuery } from '../queries/documents/posts/all-posts-query';
import { latestPostsQuery } from '../queries/documents/posts/latest-posts-query';
import { postBySlugQuery } from '../queries/documents/posts/posts-by-slug-query';
import { allPostCategoriesQuery } from '../queries/documents/posts/all-post-categories-query';
import { latestCaseStudiesQuery } from '../queries/documents/case-studies/latest-case-studies-query';
import { allCaseStudiesQuery } from '../queries/documents/case-studies/all-case-studies-query';
import { caseStudyBySlugQuery } from '../queries/documents/case-studies/case-study-by-slug-query';


export async function fetchSettings() {
  return sanityFetch<Settings>({
    query: settingsQuery,
    tags: ['settings']
  })
}

export async function fetchHomePage() {
  return sanityFetch<HomePage>({
    query: homePageQuery,
    tags: ['homePage']
  })
}

export async function fetchBlogPage() {
  return sanityFetch<Page>({
    query: blogPageQuery,
    tags: ['blogPage']
  })
}

export async function fetchCaseStudyPage() {
  return sanityFetch<Page>({
    query: caseStudyPageQuery,
    tags: ['caseStudyPage']
  })
}

export async function fetchContactPage() {
  return sanityFetch<Page>({
    query: contactPageQuery,
    tags: ['contactPage']
  })
}

export async function fetchPrivacyPage() {
  return sanityFetch<Page>({
    query: privacyPageQuery,
    tags: ['privacyPage']
  })
}

export async function fetchTermsPage() {
  return sanityFetch<Page>({
    query: termsPageQuery,
    tags: ['termsPage']
  })
}

export async function fetchAllPosts() {
  return sanityFetch<Post[]>({
    query: allPostsQuery,
    tags: ['post']
  })
}

export async function fetchLatestPosts() {
  return sanityFetch<Post[]>({
    query: latestPostsQuery,
    tags: ['post']
  })
}

export async function fetchPostBySlug(slug: string) {
  return sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function fetchAllPostCategories() {
  return sanityFetch<PostCategory[]>({
    query: allPostCategoriesQuery,
    tags: ['postCategory'],
  })
}

export async function fetchLatestCaseStudies() {
  return sanityFetch<CaseStudy[]>({
    query: latestCaseStudiesQuery,
    tags: ['caseStudy']
  })
}

export async function fetchAllCaseStudies() {
  return sanityFetch<CaseStudy[]>({
    query: allCaseStudiesQuery,
    tags: ['caseStudy']
  })
}

export async function fetchCaseStudyBySlug(slug: string) {
  return sanityFetch<CaseStudy>({
    query: caseStudyBySlugQuery,
    params: { slug: slug },
    tags: ['caseStudy'],
  })
}