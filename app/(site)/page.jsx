import { draftMode } from "next/headers";
import { getHomePage, getLatestCaseStudies, getLatestPosts } from '@/sanity/lib/sanity.fetch'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

// preview components data
import PreviewProvider from "@/components/preview/preview-provider";
import HomeHeroPreview from "@/components/preview/home-hero-preview";
import HomeCaseStudiesPreview from "@/components/preview/home-case-studies-preview";
import HomePostsPreview from "@/components/preview/home-posts-preview";

export const dynamic = 'force-dynamic'

export default async function Home() {

  const pageData = await getHomePage()
  const caseStudiesData = await getLatestCaseStudies()
  const postsData = await getLatestPosts()

  const [
    page,
    caseStudies, 
    posts, 
  ] = await Promise.all([
    pageData,
    caseStudiesData, 
    postsData, 
  ])

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <HomeHeroPreview page={page} />
        <HomeCaseStudiesPreview caseStudies={caseStudies} />
        <HomePostsPreview posts={posts} />
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
