import { defaultGroups } from "../utils/defaultGroups"
import { defaultFieldsets } from "../utils/defaultFieldsets"
import { defaultSeoFields } from "../utils/defaultSeoFields"

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
    ...defaultSeoFields,
  ]
}