import { DocumentTextIcon } from '@sanity/icons'
import { fieldsets } from '../../utils/fieldsets'

export default {
  name: 'postContentBlock',
  title: 'Content Block',
  type: 'object',
  icon: DocumentTextIcon,
  preview: {
    prepare() {
      return {
        title: 'Content Block',
      }
    }
  },
  fieldsets: [
    ...fieldsets
  ],
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ]
}