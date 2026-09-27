import type { CollectionConfig } from 'payload'

export const SupplierInquiries: CollectionConfig = {
  slug: 'supplier-inquiries',
  admin: { useAsTitle: 'company' },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'company', type: 'text', required: true },
    { name: 'contactName', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'category', type: 'text' },
    { name: 'message', type: 'textarea' },
    { name: 'status', type: 'select', options: ['new', 'reviewing', 'closed'], defaultValue: 'new' },
  ],
}
