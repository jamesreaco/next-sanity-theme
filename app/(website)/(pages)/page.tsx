import { Metadata } from "next";
import { draftMode } from "next/headers";

import { 
  fetchHomePage, 
  fetchLatestCaseStudies, 
  fetchLatestPosts 
} from '@/sanity/lib/sanity.fetch'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

// preview components
import PreviewProvider from "@/components/preview/preview-provider"
import HomePreview from "@/components/preview/home-preview"

export async function generateMetadata(): Promise<Metadata> {

  const page = await fetchHomePage()
  
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function Home() {

  const pageData = await fetchHomePage()
  const caseStudiesData = await fetchLatestCaseStudies()
  const postsData = await fetchLatestPosts()

  const [ 
    page, 
    caseStudies, 
    posts 
  ] = await Promise.all([pageData, caseStudiesData, postsData])

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <HomePreview page={page} caseStudies={caseStudies} posts={posts} />
      </PreviewProvider>
    )
  }

  return (
    <>
      <HomeHero 
        heading={page.heading}
        paragraph={page.paragraph}
        image={page.image}
        btnText={page.btnText}
        btnDestination={page.btnDestination}
      />
      <HomeCaseStudies caseStudies={caseStudies} />
      <HomeLatestPosts posts={posts} />
    </>
  )
}
