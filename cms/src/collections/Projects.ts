import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'location', 'typology', 'status'] },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, admin: { description: 'URL-friendly, e.g. skorpios' } },
    { name: 'subtitle', type: 'text' },
    { name: 'coverImage', type: 'upload', relationTo: 'media', required: true },
    { name: 'heroMedia', type: 'upload', relationTo: 'media' },
    { name: 'heroIsVideo', type: 'checkbox', defaultValue: false },
    { name: 'description', type: 'textarea' },
    { name: 'location', type: 'text' },
    { name: 'typology', type: 'text' },
    { name: 'year', type: 'number' },
    { name: 'materials', type: 'text', hasMany: true },
    { name: 'gallery', type: 'array', fields: [
      { name: 'image', type: 'upload', relationTo: 'media', required: true },
      { name: 'caption', type: 'text' },
    ]},
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'sortOrder', type: 'number', defaultValue: 0 },
    { name: 'status', type: 'select', options: ['draft', 'published'], defaultValue: 'draft' },
    { name: 'seoTitle', type: 'text' },
    { name: 'seoDescription', type: 'textarea' },
  ],
}
