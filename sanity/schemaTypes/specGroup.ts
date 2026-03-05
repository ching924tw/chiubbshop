import { defineField, defineType } from 'sanity'

export const specGroup = defineType({
  name: 'specGroup',
  title: 'Spec Group',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: '群組標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: '項目',
      type: 'array',
      of: [{ type: 'specItem' }],
    }),
  ],
})