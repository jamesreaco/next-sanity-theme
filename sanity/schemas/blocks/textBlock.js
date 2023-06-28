import { DocumentTextIcon } from '@sanity/icons'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'
import { defaultFieldsets } from '../utils/defaultFieldsets'

export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  icon: DocumentTextIcon,
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'columnOne',
      title: 'Column One',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'columnTwo',
      title: 'Column Two',
      type: 'array',
      of: [{ type: 'block' }]
    },
    ...defaultLayoutFields
  ]
}

