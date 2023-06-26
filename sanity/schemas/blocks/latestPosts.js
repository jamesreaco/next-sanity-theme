import { DocumentTextIcon } from '@sanity/icons'
import { defaultGroups } from '../utils/defaultGroups'
import { defaultFieldsets } from '../utils/defaultFieldsets'
import { defaultLayoutFields } from '../utils/defaultLayoutFields'

export default {
  name: 'latestPosts',
  title: 'Latest Posts',
  type: 'object',
  icon: DocumentTextIcon,
  groups: [
    ...defaultGroups
  ],
  fieldsets: [
    ...defaultFieldsets
  ],
  fields: [
    {
      name: 'heading',
      type: 'string'
    },
    {
      name: 'postLimit',
      title: 'Post Limit',
      description: 'Choose the amount of recent posts you want to display.',
      type: 'number',
      group: 'content',
      options: {
        list: [
          1, 2, 3, 4, 5
        ]
      },
      group: 'settings',
      fieldset: 'settings',
    },
    ...defaultLayoutFields
  ]
}