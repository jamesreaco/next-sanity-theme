import React, { ReactNode } from 'react';
import Header from '@/components/shared/ui/header';
import Container from '@/components/global/container';

export default function BlogArchiveHeader({ children, heading }: {
  children?: ReactNode
  heading: string
}) { 
  return (
    <Header className='pt-8 md:pt-10'>
      <Container className="flex flex-col lg:flex-row lg:items-center justify-between">
        <Heading>
          {heading}
        </Heading>
        {children}
      </Container>
    </Header>
  )
}

function Heading({ children }: { 
  children: ReactNode 
}) {
  return (
    <h1 className='-ml-1 text-3xl md:text-5xl font-light leading-none'>
      {children}
    </h1>
  )
}
