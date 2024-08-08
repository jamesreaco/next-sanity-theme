export type Settings = {
  enableBottomBar: boolean
  bottomBarMessage: string
  enableBottomBarLink: boolean
  bottomBarLinkUrl: string
  bottomBarLinkText: string
  bottomBarLinkColor: string
  navbarButtonText: string
  navbarButtonLink: string
  logoText: string
  navbarMenuItems: {
    _id: string
    title: string
    link: string
  }[]
  footerTagline: string
  enableSubscribeForm: boolean
  subscribeFormTitle: string
  subscribeFormPlaceholder: string
  footerQuickLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerSocialLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerCopyright: string
  footerLegalLinks: {
    _id: string
    title: string
    link: string
  }[]
  enableFootnote: boolean
  enableFootnoteLink: boolean
  footerFootnoteText: string
  footerFootnoteLinkText: string
  footerFootnoteLink: string
}