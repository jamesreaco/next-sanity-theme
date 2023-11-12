import { getAllPosts } from '@/sanity/lib/sanity.fetch'

// components
import Page from '@/components/global/page'
import PostArchive from '@/components/pages/blog/post-archive'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {

  const posts = await getAllPosts()

  return (
    <Page heading="Blog">
      <PostArchive posts={posts} />
    </Page>
  )
}