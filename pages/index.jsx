import { getHomePage } from '@/sanity/utils'
import Layout from '@/components/global/layout'
import Block from '@/components/page-builder/block'

export default function Home({ page }) {

  const { pageBuilder } = page

  return (
    <Layout>
      {pageBuilder.map(block => (
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
