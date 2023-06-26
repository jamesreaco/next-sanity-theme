import { getBlogPage } from '@/sanity/utils'

// components
import Layout from '@/components/global/layout'
import Block from '@/components/page-builder/block'

export default function BlogPage({ page }) {

  const { pageBuilder } = page

  return (
    <Layout>
      {pageBuilder ?
        <>
          {pageBuilder?.map(block => (
            <Block block={block} />
          ))} 
        </>
      :
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks to this page in your Sanity Studio!
          </p>
        </>
      }
    </Layout>
  )
}

export async function getServerSideProps() {

  const page = await getBlogPage()
  
  return {
    props: {
      page: page,
    }
  }
  
}
