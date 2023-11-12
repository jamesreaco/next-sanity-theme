import { BlockContentIcon } from '@sanity/icons'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'
import { postBuilderFields } from '../utils/post-builder-fields'

export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon: BlockContentIcon,
  fieldsets: [
    ...fieldsets
  ],
  groups: [
    ...fieldGroups
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: { type: 'postCategory' }
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' }
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'readTime',
      title: 'Read Time - Minutes',
      type: 'number'
    },
    ...postBuilderFields,
    ...seoFields
  ]
}