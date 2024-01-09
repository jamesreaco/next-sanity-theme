import { defineType } from "sanity"
import { fieldGroups } from "../utils/field-groups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seo-fields"

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
})