import React, { ReactNode } from 'react';
import Container from '../global/container'

interface HeaderProps {
  children?: ReactNode
  heading: string
}

export default function Header(props: HeaderProps) {

  const { children, heading } = props

  return (
    <header className='pt-[20px] md:pt-[40px]'>
      <Container classNames="flex flex-col md:flex-row md:items-center justify-between">
        <h1 className='-ml-1 text-[26px] md:text-[48px] font-light leading-none'>
          {heading}
        </h1>
        {children}
      </Container>
    </header>
  )
}
