import { seoFields } from "../utils/seo-fields"
import { fieldGroups } from "../utils/field-groups"
import { fieldsets } from "../utils/fieldsets"
import { pageBuilderFields } from "../utils/page-builder-fields"
import { InsertBelowIcon } from '@sanity/icons'

export default {
  name: 'page',
  title: 'Page Builder',
  type: 'document',
  icon: InsertBelowIcon,
  fieldsets: [
    ...fieldsets
  ],
  groups: [
    ...fieldGroups
  ],
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    ...pageBuilderFields,
    ...seoFields
  ]
}