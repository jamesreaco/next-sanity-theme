import { getHomePage } from '@/sanity/lib/sanity.queries'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

export const dynamic = 'force-dynamic'

export default async function Home() {

  const page = await getHomePage()

  return (
    <>
      <HomeHero 
        heading={page.heading}
        paragraph={page.paragraph}
        image={page.image}
        btnText={page.btnText}
        btnDestination={page.btnDestination}
      />
      <HomeCaseStudies />
      <HomeLatestPosts />
    </>
  )
}
