import Head from 'next/head'

export default function PageHead({ 
  title,
  description,
  keywords
}) {
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta
        key="description"
        name="description"
        content={description}
      />
      <meta
        key="keywords"
        name="keywords"
        content={keywords}
      />
    </Head>
  )
}
