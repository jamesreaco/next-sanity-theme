import { CogIcon } from '@sanity/icons'

export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fieldsets: [
    {
      name: 'topbar',
      title: 'Topbar',
    },
    {
      name: 'navbar',
      title: 'Navbar',
    },
    {
      name: 'footer',
      title: 'Footer'
    }
  ],
  groups: [
    {
      name: 'topbar',
      title: 'Topbar',
    },
    {
      name: 'navbar',
      title: 'Navbar',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Brand Name',
      type: 'string',
    },
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
    },
    {
      name: 'enableTopbar',
      title: 'Enable Topbar',
      type: 'boolean',
      fieldset: 'topbar',
      group: 'topbar',
    },
    {
      name: 'topbarMessage',
      title: 'Topbar Message',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbar === false
    },
    {
      name: 'enableTopbarLink',
      title: 'Enable Topbar Link',
      type: 'boolean',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbar === false
    },
    {
      name: 'topbarLinkUrl',
      title: 'Topbar Link Url',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    },
    {
      name: 'topbarLinkColor',
      title: 'Topbar Link Color',
      description: 'Add the full hexcode (#1AC1DE). You can find inspiration on www.colorhunt.co.',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    },
    {
      name: 'topbarLinkText',
      title: 'Topbar Link Text',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    },
    {
      name: 'navbarMenuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'menuItem' },
        },
      ],
      fieldset: 'navbar',
      group: 'navbar',
    },
    {
      name: 'navbarButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'navbar',
      group: 'navbar',
    },
    {
      name: 'navbarButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'navbar',
      group: 'navbar',
    },
    {
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
    },
    {
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
    },
    {
      name: 'enableFootnote',
      title: 'Enable Footnote',
      type: 'boolean',
      fieldset: 'footer',
      group: 'footer',
    },
    {
      name: 'footerFootnoteText',
      title: 'Footer Footnote Text',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnote === false
    },
    {
      name: 'enableFootnoteLink',
      title: 'Enable Footnote Link',
      type: 'boolean',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnote === false
    },
    {
      name: 'footerFootnoteLink',
      title: 'Footer Footnote Link',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnoteLink === false || document?.enableFootnote === false
    },
    {
      name: 'footerQuickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'menuItem' },
        },
      ],
      fieldset: 'footer',
      group: 'footer',
    },
    {
      name: 'footerSocialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'menuItem' },
        },
      ],
      fieldset: 'footer',
      group: 'footer',
    },
    {
      name: 'footerLegalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'menuItem' },
        },
      ],
      fieldset: 'footer',
      group: 'footer',
    },
  ],
}