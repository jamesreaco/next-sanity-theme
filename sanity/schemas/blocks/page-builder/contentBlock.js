import { DocumentTextIcon } from '@sanity/icons'
import { fieldsets } from '../../utils/fieldsets'

export default {
  name: 'contentBlock',
  title: 'Content Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Content',
      }
    }
  },
  fieldsets: [
    ...fieldsets
  ],
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string' 
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string' 
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