import React, { ReactNode } from 'react';
import Container from '@/components/global/container';

interface BlogArchiveHeaderProps {
  children?: ReactNode
  heading: string
}

export default function BlogArchiveHeader(props: BlogArchiveHeaderProps) {

  const { children, heading } = props

  return (
    <header className='pt-[30px] md:pt-[40px]'>
      <Container classNames="flex flex-col lg:flex-row lg:items-center justify-between">
        <h1 className='-ml-1 text-[26px] md:text-[48px] font-light leading-none'>
          {heading}
        </h1>
        {children}
      </Container>
    </header>
  )
}
