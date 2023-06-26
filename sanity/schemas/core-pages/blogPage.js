import { defaultGroups } from "../utils/defaultGroups"
import { defaultFieldsets } from "../utils/defaultFieldsets"
import { defaultSeoFields } from "../utils/defaultSeoFields"
import { defaultPageBuilderFields } from "../utils/defaultPageBuilderFields"

export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fieldsets: [
    ...defaultFieldsets
  ],
  groups: [
    ...defaultGroups
  ],
  fields: [
    ...defaultSeoFields,
    ...defaultPageBuilderFields,
  ]
}