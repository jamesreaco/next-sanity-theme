import dynamic from "next/dynamic"

const HeaderBlock = dynamic(() => import('./blocks/header-block'))
const ContentBlock = dynamic(() => import('./blocks/content-block'))
const TextBlock = dynamic(() => import('./blocks/text-block'))
const LatestPostsBlock = dynamic(() => import('./blocks/latest-posts-block'))

export default function Block({ block }) {

  const type = block._type

  switch (type) {
    case 'headerBlock':
      return <HeaderBlock block={block} />
    case 'contentBlock':
      return <ContentBlock block={block} />
    case 'textBlock':
      return <TextBlock block={block} />
    case 'latestPostsBlock':
      return <LatestPostsBlock block={block} />
  }

}