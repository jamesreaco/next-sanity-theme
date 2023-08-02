import React from 'react'

export default function Container({ 
  children,
  fullWidth
}) {

  const styles = fullWidth ? 'max-w-full mx-auto my-0 px-0 md:px-0' : 'max-w-7xl mx-auto my-0 px-6 md:px-12'

  return (
    <div className={`${styles}`}>
      {children}
    </div>
  )
}
