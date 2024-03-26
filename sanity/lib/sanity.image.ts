import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../config/sanity.api'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: SanityImageSource) => {
  return imageBuilder?.image(source).auto('format')
}