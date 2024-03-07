"use client"
import { PostCategory } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BlogCategoriesProps {
  categories: PostCategory[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {

  const pathname = usePathname()

  return (
    <div className='mt-2 lg:mt-0 flex flex-wrap gap-3'>
      <Link
        href="/blog"
        className='px-2.5 md:py-1 border rounded-md transition hover:border-zinc-300'
        style={{
          backgroundColor: pathname === '/blog' ? '#fff' : '#F6F6F1',
        }}
      >
        All Posts
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className='px-2.5 md:py-1 border rounded-md transition hover:border-zinc-300'
          style={{
            backgroundColor: pathname === `/blog/category/${category.slug}` ? '#fff' : '#F6F6F1',
          }}
        >
          {category.title}
        </Link>
      ))}
    </div> 
  )
}
