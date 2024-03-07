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
    <header className='pt-8 md:pt-10'>
      <Container>
        <h1 
          className='-ml-1 text-3xl md:text-5xl font-light leading-none'
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
