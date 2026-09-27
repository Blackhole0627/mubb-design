# MUBB Design CMS (Payload)

A real, working headless CMS — not a mockup, not a schema-only design. This is the thing that was promised in the Workana chat ("CMS headless tipo Sanity o Payload... para que puedan editar sin tocar código") and that was still missing from the project.

## What's real here, verified end to end
- A working Payload 3 install (Next.js 16 + Turbopack), building and running in production mode (`npm run build && npm run start`)
- Collections matching the exact content model from `../cms-schema.sql`: Projects, Services, Finishes, Team Members, Press Items, Ally Brands, Blog Posts, plus the "Solicitar cita" / careers / supplier form submissions as their own collections
- A `SiteSettings` global for logo, WhatsApp number, showrooms, and social links
- A real SQLite database (zero external services needed to run this locally)
- **A real admin user was created** and **real content was seeded** — team bios, all 6 services, and all 3 press items, each with their real photo uploaded as Media — via `npm run seed`
- Verified by querying the actual REST API afterward (`/api/team-members`, `/api/services`, etc.) and confirming the real seeded data, with correctly-encoded Spanish accents, comes back

## Running it yourself
```
npm install
npm run generate:importmap   # only needed if you change collections
npm run dev                  # http://localhost:3000/admin
npm run seed                 # populates real content (safe to re-run)
```
First visit to `/admin` prompts you to create the first user (there isn't one until you do). Everything after that — adding a project, editing a service's text, replacing a photo — happens in the browser, no code.

## What this proves vs. what's still needed for a real launch
This is a genuine CMS with a genuine database and a genuine admin UI. What's not yet true:

1. **Database.** SQLite here is for local development only. Production needs Postgres — swap `sqliteAdapter` for `@payloadcms/db-postgres` in `payload.config.ts` and point `DATABASE_URL` at a real instance. This is a config change, not a rewrite.
2. **File storage.** Uploaded media currently lands in `./media` on disk. Production should point at S3-compatible storage (`@payloadcms/storage-s3` or Vercel Blob) so uploads survive redeploys.
3. **Email.** No email adapter is configured (Payload just logs to console right now). Password resets and any transactional email need a real provider (Resend, Postgres, SES) plugged in.
4. **Hosting and ownership.** This needs to be deployed under an account in MUBB's name, not mine — that was promised explicitly. Deploying a Payload+Postgres app to Vercel needs a Postgres add-on (Vercel Postgres/Neon) provisioned under their account.
5. **Connecting it to the static site.** The site currently in `../coded/` still has all its content hardcoded in HTML. Wiring it to fetch from this CMS instead (so editing a service here actually changes the live site) is the next real step — a moderate amount of work, not started yet.
6. **The same treatment for MUBB Store and SACRUM.** This CMS only covers MUBB Design's content collections. The store/SACRUM data model (products, orders, stock) is already designed in `shared/store-schema.sql` and would follow the same pattern — scaffold, define collections, seed — but hasn't been built yet.

## Login used while seeding (local only — change before any real use)
`admin@mubb.design` / `MubbDesign2026!`
