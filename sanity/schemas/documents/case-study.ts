import { defineField, defineType } from 'sanity'
import { CaseIcon } from '@sanity/icons'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: CaseIcon,
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Project Overview',
      type: 'array',
      of: [{ type: 'block' }]
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
      name: 'url',
      title: 'URL',
      type: 'url'
    }),
    defineField({
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
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      description: "Reccommended image size: 600px (width) - 600px (height)",
      type: 'array',
      of: [{ 
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      }],
    }),
    ...seoFields
  ]
})