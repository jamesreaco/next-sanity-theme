import { defineField, defineType } from "sanity"
import { fieldGroups } from "../utils/field-groups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seo-fields"

export default defineType({
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
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    ...seoFields,
  ]
})