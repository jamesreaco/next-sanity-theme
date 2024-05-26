"use client";
import { useParams } from 'next/navigation'
import { useLiveQuery } from "@sanity/preview-kit";
import { postBySlugQuery } from "@/sanity/lib/sanity.queries";
import Post from "../pages/post";
import { Post as PostType } from '@/types';

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