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
      const message = "Invalid Signature"
      return new Response(message, { status: 401 });
    }

    if (!body?._type) {
      const message = "Bad Request"
      return new Response(message, { status: 400 })
    }

    revalidateTag(body._type)

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })

  } catch (err: any) {
    return new Response(err.message, { status: 500 })
  }
}