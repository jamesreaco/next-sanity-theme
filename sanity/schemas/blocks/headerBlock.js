import { DocumentTextIcon } from '@sanity/icons'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'
import { defaultFieldsets } from '../utils/defaultFieldsets'

export default {
  name: 'headerBlock',
  title: 'Header Block',
  type: 'object',
  icon: DocumentTextIcon,
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    ...defaultLayoutFields
  ]
}