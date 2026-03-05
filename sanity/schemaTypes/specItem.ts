import { defineField, defineType } from 'sanity'

export const specItem = defineType({
  name: 'specItem',
  title: 'Spec Item',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: '標題',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: '內容',
      type: 'string',
    }),
    defineField({
      name: 'notes',
      title: '備註（可選）',
      type: 'string',
    }),
    defineField({
      name: 'children',
      title: '子項目（可選）',
      type: 'array',
      of: [{ type: 'specItem' }],
    }),
  ],
})