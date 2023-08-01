import { fieldGroups } from "../utils/fieldGroups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seoFields"

export default {
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
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    },
    {
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    },
    {
      name: 'btnDestination',
      title: 'Button Link',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    },
    ...seoFields,
  ]
}