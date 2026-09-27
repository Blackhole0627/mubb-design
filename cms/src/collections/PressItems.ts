import type { CollectionConfig } from 'payload'

export const PressItems: CollectionConfig = {
  slug: 'press-items',
  admin: { useAsTitle: 'outlet', defaultColumns: ['outlet', 'year'] },
  access: { read: () => true },
  fields: [
    { name: 'year', type: 'number', required: true },
    { name: 'outlet', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'quote', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'url', type: 'text' },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
  ],
}
