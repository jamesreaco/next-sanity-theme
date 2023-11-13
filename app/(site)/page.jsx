import { draftMode } from "next/headers";
import { getHomePage, getLatestCaseStudies, getLatestPosts } from '@/sanity/lib/sanity.fetch'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

// preview components
import PreviewProvider from "@/components/preview/preview-provider"
import HomePreview from "@/components/preview/home-preview"

export const dynamic = 'force-dynamic'

export default async function Home() {

  const pageData = await getHomePage()
  const caseStudiesData = await getLatestCaseStudies()
  const postsData = await getLatestPosts()

  const [page, caseStudies, posts] = await Promise.all([pageData, caseStudiesData, postsData])

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
