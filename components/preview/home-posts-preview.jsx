"use client";
import { useLiveQuery } from "@sanity/preview-kit";
import { latestPostsQuery } from "@/sanity/lib/sanity.queries";
import HomeLatestPosts from "../pages/home/home-latest-posts";

export default function HomePostsPreview({ posts }) {

  const [data] = useLiveQuery(posts, latestPostsQuery);
  
  return (
    <HomeLatestPosts 
      posts={data} 
    />
  )
}