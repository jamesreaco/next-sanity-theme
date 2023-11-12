import { DocumentTextIcon } from '@sanity/icons'
import { fieldsets } from '../../utils/fieldsets'

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
    ...fieldsets
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
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      description: 'Enter a hex code (1D40AF)'
    },
    {
      name: 'iconColor',
      title: 'Icon Color',
      type: 'string',
      description: 'Enter a hex code (000000)'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'Enter a hex code (FFFFFF)'
    },
  ]
}