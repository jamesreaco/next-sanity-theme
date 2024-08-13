import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == 'settings' && _id == 'settings'][0]{
  _id,
  logoText,
  main_heading,
  hide_testimonials,
  recent_posts,
  enableBottomBar,
  bottomBarMessage,
  enableBottomBarLink,
  bottomBarLinkUrl,
  bottomBarLinkText,
  bottomBarLinkColor,
  navbarMenuItems[]-> {
    _id,
    title,
    link
  },
  navbarButtonText,
  navbarButtonLink,
  footerTagline,
  enableSubscribeForm,
  subscribeFormTitle,
  subscribeFormPlaceholder,
  footerCopyright,
  footerQuickLinks[]-> {
    _id,
    title,
    link
  },
  footerSocialLinks[]-> {
    _id,
    title,
    link
  },
  footerLegalLinks[]-> {
    _id,
    title,
    link
  },
  enableFootnote,
  footerFootnoteText,
  enableFootnoteLink,
  footerFootnoteLinkText,
  footerFootnoteLink
}` 