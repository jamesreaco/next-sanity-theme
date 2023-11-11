import '../globals.css'

export const metadata = {
  title: 'Next + Sanity Starter | Admin',
}

export default function RootLayout({ children }) {
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