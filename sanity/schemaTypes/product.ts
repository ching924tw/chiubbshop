import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '商品名稱',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'brand',
      title: '品牌',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'texture',
      title: '質地',
      description: '例如：凝露 / 乳液 / 油 / 皂 / 錠…',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'expiry',
      title: '保存期限',
      description: '建議填 YYYY-MM 或 YYYY-MM-DD',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: '網址 Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: '商品描述',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
  name: "price",
  title: "售價",
  type: "number",
  validation: (Rule) => Rule.required().min(0),
}),

defineField({
  name: "compareAtPrice",
  title: "原價（可選）",
  type: "number",
}),

    defineField({
      name: 'sku',
      title: '商品貨號（可選）',
      type: 'string',
    }),

    // ✅ 規格（支援子分類往下填）
    defineField({
      name: 'specs',
      title: '規格（可子分類）',
      type: 'array',
      of: [{ type: 'specGroup' }],
    }),

    defineField({
      name: 'images',
      title: '商品圖片',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'published',
      title: '是否上架',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})