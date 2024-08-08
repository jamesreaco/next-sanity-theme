import { assertValue } from "@/utils/assert-value"

export const useCdn = false
export const studioUrl = '/studio'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
)

export const apiVersion = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-21',
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION',
)

export const readToken = process.env.SANITY_API_READ_TOKEN || ''
export const revalidateSecret = process.env.SANITY_REVALIDATE_SECRET