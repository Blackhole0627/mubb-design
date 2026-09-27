import type { CollectionConfig } from 'payload'

export const AppointmentRequests: CollectionConfig = {
  slug: 'appointment-requests',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'projectType', 'status', 'createdAt'] },
  access: {
    read: ({ req }) => Boolean(req.user), // only logged-in staff can read submissions
    create: () => true, // the public site can create one (no login needed to submit)
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'cityCountry', type: 'text' },
    { name: 'projectType', type: 'select', options: ['residencial', 'hotelero', 'comercial', 'corporativo', 'nautico', 'otro'] },
    { name: 'message', type: 'textarea' },
    { name: 'preferredDate', type: 'date' },
    { name: 'sourcePage', type: 'text' },
    { name: 'status', type: 'select', options: ['new', 'contacted', 'closed'], defaultValue: 'new' },
  ],
}
