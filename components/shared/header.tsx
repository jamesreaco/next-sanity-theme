import React, { ReactNode } from 'react';
import Container from '../global/container'

interface HeaderProps {
  children?: ReactNode
  heading: string
  centerText?: boolean
}

export default function Header(props: HeaderProps) {

  const { children, heading, centerText } = props

  return (
    <header className='pt-[32px] md:pt-[40px]'>
      <Container>
        <h1 
          className='-ml-1 text-[26px] md:text-[48px] font-light leading-none'
          style={{
            textAlign: centerText ? 'center' : 'left'
          }}
        >
          {heading}
        </h1>
        {children}
      </Container>
    </header>
  )
}
