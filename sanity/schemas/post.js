import { BlockContentIcon } from '@sanity/icons'

export default {
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  icon: BlockContentIcon,
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
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}