import { DocumentTextIcon } from '@sanity/icons'

export default {
  name: 'postImageBlock',
  title: 'Image Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Image',
      }
    }
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
  ]
}