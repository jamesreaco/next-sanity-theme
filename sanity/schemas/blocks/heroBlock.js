import { DocumentTextIcon } from '@sanity/icons'
import { defaultFieldsets } from '../utils/defaultFieldsets'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'

export default {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  icon: DocumentTextIcon,
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'heading',
      type: 'string',
    },
    {
      name: 'paragraph',
      type: 'string'
    },
    {
      name: 'buttonText',
      type: 'string'
    },
    {
      name: 'buttonUrl',
      type: 'string'
    },
    ...defaultLayoutFields
  ]
}