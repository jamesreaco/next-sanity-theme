import { DocumentTextIcon } from '@sanity/icons'
import { fieldsets } from '../../utils/fieldsets'

export default {
  name: 'headerBlock',
  title: 'Header Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    }
  },
  fieldsets: [
    ...fieldsets
  ],
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Width',
      name: 'headerWidth',
      type: 'string',
      initialValue: 'wide',
      options: {
        list: [
          { title: 'Narrow', value: 'narrow' },
          { title: 'Wide', value: 'wide' },
        ],
      }
    },
  ]
}