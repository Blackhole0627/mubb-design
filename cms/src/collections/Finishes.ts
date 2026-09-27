import type { CollectionConfig } from 'payload'

export const Finishes: CollectionConfig = {
  slug: 'finishes',
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'supplier', type: 'text' },
    { name: 'category', type: 'text' },
    { name: 'swatchImage', type: 'upload', relationTo: 'media', required: true },
    { name: 'featured', type: 'checkbox', defaultValue: false },
  ],
}
