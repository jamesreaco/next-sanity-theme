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
  ],
}