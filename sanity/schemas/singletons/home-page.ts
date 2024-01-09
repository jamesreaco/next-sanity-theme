import { defineField, defineType } from "sanity"
import { fieldGroups } from "../utils/field-groups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seo-fields"

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    defineField({
      name: 'btnDestination',
      title: 'Button Link',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    ...seoFields,
  ]
})