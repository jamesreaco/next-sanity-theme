import BlogCard from '@/components/shared/blog-card'

export default function PostArchive({ posts }) {
  return (
    <div className='mt-16 mb-28 grid grid-cols-1 md:grid-cols-2 gap-16'>
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  )
}
