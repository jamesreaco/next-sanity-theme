import { getHomePage } from '@/sanity/utils'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

export const dynamic = 'force-dynamic'

export default async function Home() {

  const page = await getHomePage()

  const { 
    heading,
    paragraph,
    image,
    btnText,
    btnDestination,
  } = page

  return (
    <>
      <HomeHero 
        heading={heading}
        paragraph={paragraph}
        image={image}
        btnText={btnText}
        btnDestination={btnDestination}
      />
      <HomeCaseStudies />
      <HomeLatestPosts />
    </>
  )
}
