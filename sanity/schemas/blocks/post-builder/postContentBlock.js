import { DocumentTextIcon } from '@sanity/icons'
import { defaultFieldsets } from '../../utils/defaultFieldsets'

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
    ...defaultFieldsets
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