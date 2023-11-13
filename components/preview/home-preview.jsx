"use client";
import { useLiveQuery } from "@sanity/preview-kit";

// sanity queries
import { homePageQuery } from "@/sanity/lib/sanity.queries";
import { latestCaseStudiesQuery } from "@/sanity/lib/sanity.queries";
import { latestPostsQuery } from "@/sanity/lib/sanity.queries";

// components
import HomeHero from "../pages/home/home-hero";
import HomeCaseStudies from "../pages/home/home-case-studies";
import HomeLatestPosts from "../pages/home/home-latest-posts";

export default function HomePreview({ page, caseStudies, posts }) {
  return (
    <>
      <HomeHeroPreview page={page} />
      <HomeCaseStudiesPreview caseStudies={caseStudies} />
      <HomePostsPreview posts={posts} />
    </>
  )
}

function HomeHeroPreview({ page }) {

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

function HomeCaseStudiesPreview({ caseStudies }) {

  const [data] = useLiveQuery(caseStudies, latestCaseStudiesQuery);
  
  return (
    <HomeCaseStudies 
      caseStudies={data} 
    />
  )
}

function HomePostsPreview({ posts }) {

  const [data] = useLiveQuery(posts, latestPostsQuery);
  
  return (
    <HomeLatestPosts 
      posts={data} 
    />
  )
}