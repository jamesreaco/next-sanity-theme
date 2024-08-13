"use client"
import { cn } from '@/utils/cn';
import { PortableText } from '@portabletext/react';
import { portableTextComponents } from './components';
import type { PortableTextBlock } from '@portabletext/types'

interface PortableTextEditorProps {
  data: PortableTextBlock
}

export default function PortableTextEditor({ data }: PortableTextEditorProps) {
  return (
    <div className={cn(
      'prose max-w-full prose-img:mt-14 tracking-tight prose-p:text-sm',
      'prose-headings:font-medium prose-h2:text-3xl prose-h3:text-2xl prose-headings:antialiased prose-headings:mt-8 prose-headings:mb-4',
    )}>
      <PortableText 
        value={data} 
        components={portableTextComponents}
      />
    </div>
  )
}