import { DocumentTextIcon } from '@sanity/icons'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'
import { defaultFieldsets } from '../utils/defaultFieldsets'

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
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Text Align',
      name: 'textAlign',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right',  value: 'right' },
        ],
      }
  },
    ...defaultLayoutFields
  ]
}