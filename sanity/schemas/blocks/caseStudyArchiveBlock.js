import { DocumentTextIcon } from '@sanity/icons'
import { defaultGroups } from '../utils/defaultGroups'
import { defaultFieldsets } from '../utils/defaultFieldsets'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'

export default {
  name: 'caseStudyArchiveBlock',
  title: 'Case Study Archive',
  type: 'object',
  icon: DocumentTextIcon,
  groups: [
    ...defaultGroups
  ],
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    ...defaultLayoutFields,
    {
      name: 'gridGap',
      type: 'string',
      fieldset: 'layout'
    }
  ],
  preview: {
    select: {
      title: 'caseStudyArchiveBlock.title',
    }
  }
}