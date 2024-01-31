import React, { ReactNode } from 'react';
import '../globals.css'

export const metadata = {
  title: 'Next + Sanity Starter | Studio',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}