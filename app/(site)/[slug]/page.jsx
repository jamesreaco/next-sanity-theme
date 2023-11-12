import { getPageBySlug } from '@/sanity/lib/sanity.fetch'

// components
import Block from '@/components/page-builder/block'

export default async function Page({ params }) {

  const page = await getPageBySlug(params.slug)

  const { pageBuilder } = page

  return (
    <>
      {pageBuilder ?
        <>
          {pageBuilder?.map(block => (
            <Block key={block._key} block={block} />
          ))} 
        </>
      :
        <>
          <p className='mt-4 mb-12 p-10 rounded-lg bg-white'>
            Nothing to see here. Start adding some blocks to this page in your Sanity Studio!
          </p>
        </>
      }
    </>
  )
}