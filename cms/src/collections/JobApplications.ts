import type { CollectionConfig } from 'payload'

export const JobApplications: CollectionConfig = {
  slug: 'job-applications',
  admin: { useAsTitle: 'name' },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'position', type: 'text' },
    { name: 'resume', type: 'upload', relationTo: 'media' },
    { name: 'message', type: 'textarea' },
    { name: 'status', type: 'select', options: ['new', 'reviewing', 'closed'], defaultValue: 'new' },
  ],
}
