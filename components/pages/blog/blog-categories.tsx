"use client"
import { cn } from '@/lib/utils'
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
        className={cn('px-2.5 md:py-1 border rounded-md transition hover:border-zinc-300 bg-[#F6F6F1]', {
          'bg-white': pathname === '/blog'
        })}
      >
        All Posts
      </Link>
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/category/${category.slug}`}
          className={cn('px-2.5 md:py-1 border rounded-md transition hover:border-zinc-300 bg-[#F6F6F1]', {
            'bg-white': pathname === `/blog/category/${category.slug}`
          })}
        >
          {category.title}
        </Link>
      ))}
    </div> 
  )
}
