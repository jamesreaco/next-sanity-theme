import { defaultGroups } from "../utils/defaultGroups"
import { defaultFieldsets } from "../utils/defaultFieldsets"
import { defaultSeoFields } from "../utils/defaultSeoFields"

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fieldsets: [
    ...defaultFieldsets
  ],
  groups: [
    ...defaultGroups
  ],
  fields: [
    ...defaultSeoFields,
  ]
}