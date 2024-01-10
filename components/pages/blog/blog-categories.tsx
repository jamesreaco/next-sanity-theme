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
    <div className='mt-[20px] md:mt-0 flex flex-wrap gap-[12px] text-[16px]'>
      <Link
        href="/blog"
        className='px-[10px] md:px-[10px] md:py-[4px] border'
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
          className='px-[10px] md:px-[10px] md:py-[4px] border'
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
