import { getAllPosts } from '@/sanity/lib/sanity.fetch'

// components
import Header from '@/components/shared/header'
import PostArchive from '@/components/pages/blog/post-archive'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {

  const posts = await getAllPosts()

  return (
    <> 
      <Header heading="Blog" />
      <PostArchive posts={posts} />
    </>
  )
}