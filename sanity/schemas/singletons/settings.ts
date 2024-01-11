import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
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
    defineField({
      name: 'title',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
    }),
    defineField({
      name: 'enableTopbar',
      title: 'Enable Topbar',
      type: 'boolean',
      fieldset: 'topbar',
      group: 'topbar',
    }),
    defineField({
      name: 'topbarMessage',
      title: 'Topbar Message',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbar === false
    }),
    defineField({
      name: 'enableTopbarLink',
      title: 'Enable Topbar Link',
      type: 'boolean',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbar === false
    }),
    defineField({
      name: 'topbarLinkUrl',
      title: 'Topbar Link Url',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    }),
    defineField({
      name: 'topbarLinkColor',
      title: 'Topbar Link Color',
      description: 'Add the full hexcode (#1AC1DE). You can find inspiration on www.colorhunt.co.',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    }),
    defineField({
      name: 'topbarLinkText',
      title: 'Topbar Link Text',
      type: 'string',
      fieldset: 'topbar',
      group: 'topbar',
      hidden: ({document}) => document?.enableTopbarLink === false || document?.enableTopbar === false
    }),
    defineField({
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
    }),
    defineField({
      name: 'navbarButtonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'navbar',
      group: 'navbar',
    }),
    defineField({
      name: 'navbarButtonLink',
      title: 'Button Link',
      type: 'string',
      fieldset: 'navbar',
      group: 'navbar',
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
    }),
    defineField({
      name: 'enableFootnote',
      title: 'Enable Footnote',
      type: 'boolean',
      fieldset: 'footer',
      group: 'footer',
    }),
    defineField({
      name: 'footerFootnoteText',
      title: 'Footer Footnote Text',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnote === false
    }),
    defineField({
      name: 'enableFootnoteLink',
      title: 'Enable Footnote Link',
      type: 'boolean',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnote === false
    }),
    defineField({
      name: 'footerFootnoteLink',
      title: 'Footer Footnote Link',
      type: 'string',
      fieldset: 'footer',
      group: 'footer',
      hidden: ({document}) => document?.enableFootnoteLink === false || document?.enableFootnote === false
    }),
    defineField({
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
    }),
    defineField({
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
    }),
    defineField({
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
    }),
  ],
})