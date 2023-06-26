import { defaultGroups } from "../utils/defaultGroups"
import { defaultFieldsets } from "../utils/defaultFieldsets"
import { defaultFields } from "../utils/defaultFields"
import { defaultPageBuilderFields } from "../utils/defaultPageBuilderFields"

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fieldsets: [
    ...defaultFieldsets
  ],
  groups: [
    ...defaultGroups
  ],
  fields: [
    ...defaultFields,
    ...defaultPageBuilderFields,
  ]
}