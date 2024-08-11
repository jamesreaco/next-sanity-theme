"use client"
import { cn } from "@/utils/cn"
import { usePathname } from "next/navigation"

interface TagProps {
  text: string
  className?: string
}

export default function Tag(props: TagProps) {

  const pathname = usePathname()
  const { text, className } = props

  const baseStyles = "py-[0.1rem] px-2 text-[0.9rem] font-medium antialiased tracking-tighter text-black/80 border rounded-md bg-[#F6F6F1]/70"

  return (
    <span className={cn( baseStyles, className, {
      'bg-white': pathname === '/blog'
    })}>
      {text}
    </span>
  )
}