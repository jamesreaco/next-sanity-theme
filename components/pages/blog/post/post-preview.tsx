"use client";
import Post from "./post";
import { useParams } from 'next/navigation'
import { useLiveQuery } from "@sanity/preview-kit";
import { Post as PostType } from '@/types/documents/post';
import { postBySlugQuery } from "@/sanity/lib/queries/documents/posts/posts-by-slug-query";

interface PostPreviewProps {
  post: PostType
}

export default function PostPreview({ post }: PostPreviewProps) {

  const params = useParams()
  const [data] = useLiveQuery(post, postBySlugQuery, params)
  
  return (
    <Post post={data} />
  )
}