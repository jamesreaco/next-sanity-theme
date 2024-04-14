import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'
import { fieldsets } from '../../utils/fieldsets'

export default defineType({
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
    ...fieldsets
  ],
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter a hex code (1D40AF)'
    }),
    defineField({
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      description: 'Enter a hex code (000000)'
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Enter a hex code (FFFFFF)'
    }),
  ]
})