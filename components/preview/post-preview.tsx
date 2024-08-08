"use client";
import Post from "../pages/post";
import { useParams } from 'next/navigation'
import { useLiveQuery } from "@sanity/preview-kit";
import { Post as PostType } from '@/types/documents/post';
import { postBySlugQuery } from "@/sanity/lib/sanity.queries";

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