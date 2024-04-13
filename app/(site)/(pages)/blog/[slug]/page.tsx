import { Metadata } from "next";
import { draftMode } from "next/headers";
import { client } from '@/sanity/config/sanity.client';
import { getPostBySlug } from '@/sanity/lib/sanity.fetch'
import { postPathsQuery } from '@/sanity/lib/sanity.queries';

// components
import Post from '@/components/pages/blog/post';
import PostPreview from "@/components/preview/post-preview";
import PreviewProvider from "@/components/preview/preview-provider";

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {

  const post = await getPostBySlug(params.slug)

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
  }
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function PostPage({ params }: PostPageProps) {

  const post = await getPostBySlug(params.slug)

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <PostPreview post={post} />
      </PreviewProvider>
    );
  }
  
  return (
    <Post post={post} />
  )
}