import { Metadata } from "next";
import { draftMode } from "next/headers";
import { fetchPostBySlug } from '@/sanity/lib/sanity.fetch'
import PreviewProvider from "@/components/preview/preview-provider";
import { generateStaticSlugs } from "@/utils/generate-static-slugs";
import Post from "@/components/pages/post/post";
import PostPreview from "@/components/preview/post-preview";

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {

  const post = await fetchPostBySlug(params.slug)

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.metaKeywords,
  }
}

export async function generateStaticParams() {
  return generateStaticSlugs('post');
}

export default async function PostPage({ params }: PostPageProps) {

  const isDraftMode = draftMode().isEnabled
  const post = await fetchPostBySlug(params.slug)

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