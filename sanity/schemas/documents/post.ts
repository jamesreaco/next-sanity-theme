import { defineField, defineType } from 'sanity'
import { BlockContentIcon } from '@sanity/icons'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'

export default defineType({
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    }),
    defineField({
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: { type: 'postCategory' }
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' }
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      name: 'readTime',
      title: 'Read Time - Minutes',
      type: 'number'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ], 
        },
        { type: 'postImageBlock' },
        { type: 'postQuoteBlock' },
      ]
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [
        { 
          type: 'reference', 
          to: { type: 'post' } 
        }
      ]
    }),
    ...seoFields
  ]
})