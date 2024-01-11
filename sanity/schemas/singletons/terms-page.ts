import { defineField, defineType } from 'sanity'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'

export default defineType({
  name: 'termsPage',
  title: 'Terms Page',
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
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    }),
    ...seoFields
  ]
})