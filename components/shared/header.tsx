import React, { ReactNode } from 'react';
import Container from '../global/container'
import { cn } from '@/utils/cn'

interface HeaderProps {
  children?: ReactNode
  heading: string
  centerText?: boolean
}

export default function Header(props: HeaderProps) {

  const { children, heading, centerText } = props

  return (
    <header className='pt-8 md:pt-10'>
      <Container>
        <h1 
          className={cn('-ml-1 text-3xl md:text-5xl font-light leading-none tracking-tight text-left', {
            'text-center': centerText
          })}
        >
          {heading}
        </h1>
        {children}
      </Container>
    </header>
  )
}
