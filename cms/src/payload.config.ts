import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Projects } from './collections/Projects'
import { Services } from './collections/Services'
import { Finishes } from './collections/Finishes'
import { TeamMembers } from './collections/TeamMembers'
import { PressItems } from './collections/PressItems'
import { AllyBrands } from './collections/AllyBrands'
import { BlogPosts } from './collections/BlogPosts'
import { AppointmentRequests } from './collections/AppointmentRequests'
import { JobApplications } from './collections/JobApplications'
import { SupplierInquiries } from './collections/SupplierInquiries'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Projects,
    Services,
    Finishes,
    TeamMembers,
    PressItems,
    AllyBrands,
    BlogPosts,
    AppointmentRequests,
    JobApplications,
    SupplierInquiries,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || 'file:./mubb-design.db',
    },
  }),
  sharp,
})
