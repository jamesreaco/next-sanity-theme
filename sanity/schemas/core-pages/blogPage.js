import { fieldGroups } from "../utils/fieldGroups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seoFields"

export default {
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fieldsets: [
    ...fieldsets
  ],
  groups: [
    ...fieldGroups
  ],
  fields: [
    ...seoFields,
  ]
}