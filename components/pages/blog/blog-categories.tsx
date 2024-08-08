"use client"
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { PostCategory } from '@/types/post'
import { usePathname } from 'next/navigation'

export default function BlogCategories({ categories }: {
  categories: PostCategory[]
}) {

  const pathname = usePathname()

  return (
    <ul className='flex flex-wrap gap-3 mt-2 lg:mt-0'>
      <li>
        <Link
          href="/blog"
          className={cn('px-2.5 md:py-1 transition border rounded-md hover:border-zinc-300 bg-[#F6F6F1]', {
            'bg-white': pathname === '/blog'
          })}
        >
          All Posts
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            href={`/blog/category/${category.slug}`}
            className={cn('px-2.5 md:py-1 transition border rounded-md hover:border-zinc-300 bg-[#F6F6F1]', {
              'bg-white': pathname === `/blog/category/${category.slug}`
            })}
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul> 
  )
}
