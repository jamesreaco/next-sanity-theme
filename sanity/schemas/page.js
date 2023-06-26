import { defaultFields } from "./utils/defaultFields"
import { defaultGroups } from "./utils/defaultGroups"
import { defaultFieldsets } from "./utils/defaultFieldsets"
import { defaultPageBuilderFields } from "./utils/defaultPageBuilderFields"

import {InsertBelowIcon} from '@sanity/icons'

export default {
  name: 'page',
  title: 'Page Builder',
  type: 'document',
  icon: InsertBelowIcon,
  fieldsets: [
    ...defaultFieldsets
  ],
  groups: [
    ...defaultGroups
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    ...defaultPageBuilderFields,
    ...defaultFields,
  ]
}