import {DocumentTextIcon} from '@sanity/icons'
import { defaultFieldsets } from '../utils/defaultFieldsets'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'

export default {
  name: 'latestCaseStudies',
  title: 'Latest Case Studies',
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