import dynamic from "next/dynamic"

const HeroBlock = dynamic(() => import('./blocks/hero-block'))
const HeaderBlock = dynamic(() => import('./blocks/header-block'))
const TextBlock = dynamic(() => import('./blocks/text-block'))
const LatestPostsBlock = dynamic(() => import('./blocks/latest-posts-block'))
const LatestCaseStudiesBlock = dynamic(() => import('./blocks/latest-case-studies-block'))

export default function Block({ block }) {

  const type = block._type

  switch (type) {
    case 'heroBlock':
      return <HeroBlock block={block} />
    case 'headerBlock':
      return <HeaderBlock block={block} />
    case 'textBlock':
      return <TextBlock block={block} />
    case 'latestPostsBlock':
      return <LatestPostsBlock block={block} />
    case 'latestCaseStudiesBlock':
      return <LatestCaseStudiesBlock block={block} />
  }

}