import { DocumentTextIcon } from '@sanity/icons'
import { fieldGroups } from '../../utils/field-groups'
import { fieldsets } from '../../utils/fieldsets'

export default {
  name: 'latestPostsBlock',
  title: 'Latest Posts',
  type: 'object',
  icon: DocumentTextIcon,
  groups: [
    ...fieldGroups
  ],
  fieldsets: [
    ...fieldsets
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
  ]
}