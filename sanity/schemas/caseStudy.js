import { CaseIcon } from '@sanity/icons'
import { fieldsets } from './utils/fieldsets'
import { fieldGroups } from './utils/fieldGroups'
import { seoFields } from './utils/seoFields'

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: CaseIcon,
  fieldsets: [
    {
      name: 'cta',
      title: 'Call To Action',
      description: 'Add a unique call to action at the end of every case study.'
    },
    ...fieldsets
  ],
  groups: [
    {
      name: 'cta',
      title: 'Call To Action'
    },
    ...fieldGroups
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Project Overview',
      type: 'array',
      of: [{ type: 'block' }]
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
      name: 'url',
      title: 'URL',
      type: 'url'
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
      options: { hotspot: true },
    },
    {
      name: 'caseStudyCtaHeading',
      title: 'Heading',
      type: 'string',
      group: 'cta',
      fieldset: 'cta'
    },
    {
      name: 'caseStudyCtaText',
      title: 'Text',
      type: 'string',
      group: 'cta',
      fieldset: 'cta'
    },
    {
      name: 'caseStudyCtaButtonText',
      title: 'Button Text',
      type: 'string',
      group: 'cta',
      fieldset: 'cta'
    },
    {
      name: 'caseStudyCtaButtonDestination',
      title: 'Button Link',
      type: 'string',
      group: 'cta',
      fieldset: 'cta'
    },
    ...seoFields
  ]
}