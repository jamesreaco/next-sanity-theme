import { getHomePage } from '@/sanity/utils'
import Layout from '@/components/global/layout'
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

export default function Home({ page }) {

  const { 
    heading,
    paragraph,
    image,
    btnText,
    btnDestination,
    metaTitle,
    metaDescription,
    metaKeywords
  } = page

  return (
    <Layout 
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      metaKeywords={metaKeywords}
    >
      <HomeHero 
        heading={heading}
        paragraph={paragraph}
        image={image}
        btnText={btnText}
        btnDestination={btnDestination}
      />
      <HomeCaseStudies />
      <HomeLatestPosts />
    </Layout>
  )
}

export async function getServerSideProps() {

  const page = await getHomePage()
  
  return {
    props: {
      page: page,
    }
  }
}
