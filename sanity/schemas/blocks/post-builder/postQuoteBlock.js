import { DocumentTextIcon } from '@sanity/icons'
import { defaultFieldsets } from '../../utils/defaultFieldsets'

export default {
  name: 'postQuoteBlock',
  title: 'Quote Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Quote Block',
      }
    }
  },
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
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