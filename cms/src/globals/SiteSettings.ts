import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: { read: () => true },
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'whatsapp', type: 'text', admin: { description: 'e.g. 593939394576' } },
    { name: 'notifyEmail', type: 'email', admin: { description: 'Where appointment/job/supplier form notifications are sent' } },
    { name: 'analyticsId', type: 'text' },
    {
      name: 'showrooms', type: 'array', fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'address', type: 'text' },
      ],
    },
    {
      name: 'social', type: 'group', fields: [
        { name: 'instagram', type: 'text' },
        { name: 'facebook', type: 'text' },
        { name: 'tiktok', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
  ],
}
