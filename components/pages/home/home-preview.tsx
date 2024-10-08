"use client";
import { Post } from "@/types/documents/post";
import { CaseStudy } from "@/types/documents/case-study";
import { useLiveQuery } from "@sanity/preview-kit";

// sanity queries
import { homePageQuery } from "@/sanity/lib/queries/singletons/pages/home-page-query";
import { latestCaseStudiesQuery } from "@/sanity/lib/queries/documents/case-studies/latest-case-studies-query";
import { latestPostsQuery } from "@/sanity/lib/queries/documents/posts/latest-posts-query";

// components
import HomeHero from "./home-hero";
import HomeCaseStudies from "./home-case-studies";
import HomeLatestPosts from "./home-latest-posts";

interface Page {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}

interface HomePreviewProps {
  page: Page
  caseStudies: CaseStudy[]
  posts: Post[]
}

export default function HomePreview({ 
  page, 
  caseStudies, 
  posts 
}: HomePreviewProps) {
  return (
    <>
      <HomeHeroPreview page={page} />
      <HomeCaseStudiesPreview caseStudies={caseStudies} />
      <HomePostsPreview posts={posts} />
    </>
  )
}

interface HomeHeroPreviewProps {
  page: Page
}

function HomeHeroPreview({ page }: HomeHeroPreviewProps) {

  const [data] = useLiveQuery(page, homePageQuery);
  
  return (
    <HomeHero 
      heading={data.heading}
      paragraph={data.paragraph}
      image={data.image}
      btnText={data.btnText}
      btnDestination={data.btnDestination}
    />
  )
}

interface HomeCaseStudiesPreviewProps {
  caseStudies: CaseStudy[]
}

function HomeCaseStudiesPreview({ caseStudies }: HomeCaseStudiesPreviewProps) {

  const [data] = useLiveQuery(caseStudies, latestCaseStudiesQuery);
  
  return (
    <HomeCaseStudies 
      caseStudies={data} 
    />
  )
}

interface HomePostsPreviewProps {
  posts: Post[]
}

function HomePostsPreview({ posts }: HomePostsPreviewProps) {

  const [data] = useLiveQuery(posts, latestPostsQuery);
  
  return (
    <HomeLatestPosts 
      posts={data} 
    />
  )
}