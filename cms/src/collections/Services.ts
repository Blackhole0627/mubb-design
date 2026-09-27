import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'sortOrder'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', unique: true },
    { name: 'tagline', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'textSide', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
    { name: 'body', type: 'textarea' },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
  ],
}
