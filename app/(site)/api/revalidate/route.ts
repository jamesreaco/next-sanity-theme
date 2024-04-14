import { revalidatePath, revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'
import { type NextRequest, NextResponse } from 'next/server'
import { revalidateSecret } from '@/sanity/config/sanity.api'

export async function POST(req: NextRequest) {

  try {

    const { body, isValidSignature } = await parseBody<{ 
      _type: string, slug?: string | undefined 
    }>(req, revalidateSecret)

    if (!isValidSignature) {
      const message = 'Invalid signature'
      return new Response(message, { status: 401 })
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    revalidateTag(body._type)

    if (body.slug) {
      revalidatePath(`/(pages)/blog/${body.slug}`, 'page')
      // revalidateTag(`${body._type}:${body.slug}`)
    }

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