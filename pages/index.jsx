import { getHomePage } from '@/sanity/utils'
import Layout from '@/components/global/layout'
import Block from '@/components/page-builder/block'
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

export default function Home({ page }) {

  const { pageBuilder } = page

  return (
    <Layout>
      <HomeHero />
      <HomeCaseStudies />
      <HomeLatestPosts />
      {pageBuilder?.map(block => (
        <Block block={block} />
      ))} 
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
