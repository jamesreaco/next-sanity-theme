import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children: ReactNode
  classNames?: string
  fullWidth?: boolean
}

export default function Container(props: ContainerProps) {

  const { fullWidth, classNames, children } = props
 
  const styles = fullWidth ? (
    'max-w-full mx-auto my-0 px-0 md:px-0'
  ) : (
    'max-w-8xl mx-auto my-0 px-6 md:px-12'
  )

  return (
    <div className={twMerge(`${styles} ${classNames}`)}>
      {children}
    </div>
  )
}
