import { defineField, defineType } from "sanity";

export default defineType({
  name: 'postCategory',
  title: 'Post Categories',
  type: 'document',
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
  ]
})