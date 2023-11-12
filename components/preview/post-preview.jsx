"use client";
import { useParams } from 'next/navigation'
import { useLiveQuery } from "@sanity/preview-kit";
import { postBySlugQuery } from "@/sanity/lib/sanity.queries";
import Post from "../pages/blog/post";

export default function PostPreview({ post }) {

  const params = useParams();
  const [data] = useLiveQuery(post, postBySlugQuery, params);
  
  return (
    <Post post={data} />
  )
}