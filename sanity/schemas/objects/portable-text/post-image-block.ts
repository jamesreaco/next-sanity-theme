import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export default defineType({
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
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    }),
  ]
})