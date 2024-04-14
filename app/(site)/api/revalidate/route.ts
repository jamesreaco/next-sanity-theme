import { revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest, NextResponse } from 'next/server'
import { revalidateSecret } from '@/sanity/config/sanity.api'

export const revalidate = true

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{ 
      _type: string, 
      slug?: string | undefined 
    }>(req, revalidateSecret)

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    revalidateTag(body._type)

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })

  } catch (err: any) {
    console.error(err)
    return new Response(err.message, { status: 500 })
  }
}