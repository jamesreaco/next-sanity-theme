import { CaseIcon } from '@sanity/icons'

export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  icon: CaseIcon,
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
      description: "Reccommended image size: 500px (width) - 500px (height)",
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
  ]
}