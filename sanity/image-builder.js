import { createClient } from "next-sanity";
import clientConfig from './config/client-config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(createClient(clientConfig))

export function urlFor(source) {
  return builder.image(source)
}