import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getSettings() {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'settings' && _id == 'settings'][0]{
      _id,
      logoText,
      main_heading,
      hide_testimonials,
      recent_posts,
      enableTopbar,
      topbarMessage,
      enableTopbarLink,
      topbarLinkUrl,
      topbarLinkText,
      topbarLinkColor,
      navbarMenuItems[]-> {
        title,
        link
      },
      navbarButtonText,
      navbarButtonLink,
    }`
  )
}