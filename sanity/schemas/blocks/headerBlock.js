import { DocumentTextIcon } from '@sanity/icons'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'

export default {
  name: 'headerBlock',
  title: 'Header Block',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    ...defaultLayoutFields
  ]
}