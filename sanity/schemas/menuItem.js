import { MenuIcon } from '@sanity/icons'

export default {
  name: 'menuItem',
  title: 'Menu Items',
  type: 'document',
  icon: MenuIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ]
}