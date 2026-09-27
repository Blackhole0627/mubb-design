/**
 * Seeds the CMS with the real MUBB Design content that's currently
 * hardcoded into the static site (team bios, services, press). Run with
 * `npm run seed`. Safe to re-run — it checks for existing records by a
 * unique field before creating.
 */
import 'dotenv/config'
import { getPayload } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'
import config from './payload.config'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const imgDir = path.resolve(dirname, '../../coded/img')

async function uploadImage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  filename: string,
  alt: string,
) {
  const existing = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1 })
  if (existing.docs.length) return existing.docs[0]
  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.join(imgDir, filename),
  })
  console.log(`  + media: "${alt}" uploaded from ${filename}`)
  return doc
}

async function upsert<T extends Record<string, unknown>>(
  payload: Awaited<ReturnType<typeof getPayload>>,
  collection: string,
  where: Record<string, unknown>,
  data: T,
) {
  const existing = await payload.find({ collection: collection as any, where: where as any, limit: 1 })
  if (existing.docs.length) {
    console.log(`  - ${collection}: "${(data as any).name || (data as any).title}" already exists, skipping`)
    return existing.docs[0]
  }
  const doc = await payload.create({ collection: collection as any, data: data as any })
  console.log(`  + ${collection}: "${(data as any).name || (data as any).title}" created`)
  return doc
}

async function run() {
  const payload = await getPayload({ config })

  console.log('Uploading real photos as Media...')
  const team1 = await uploadImage(payload, 'team1.jpg', 'Joel Dávalos')
  const team2 = await uploadImage(payload, 'team2.jpg', 'Brinny Dávalos')
  const team3 = await uploadImage(payload, 'team3.jpg', 'Adrián Quishpe')
  const serv1 = await uploadImage(payload, 'serv1.jpg', 'Diseño de interiores')
  const serv2 = await uploadImage(payload, 'serv2.jpg', 'Residencias')
  const serv3 = await uploadImage(payload, 'serv3.jpg', 'Proyectos hoteleros')
  const serv4 = await uploadImage(payload, 'serv4.jpg', 'Espacios comerciales')
  const serv5 = await uploadImage(payload, 'serv5.jpg', 'Yates y espacios náuticos')
  const serv6 = await uploadImage(payload, 'serv6.jpg', 'Mobiliario a medida')
  const forbes = await uploadImage(payload, 'forbes.jpg', 'Forbes Ecuador')
  const clave = await uploadImage(payload, 'clave.jpg', 'Clave!')
  const casasproject = await uploadImage(payload, 'casasproject.jpg', 'Casas Project')

  console.log('Seeding team members...')
  await upsert(payload, 'team-members', { name: { equals: 'Joel Dávalos' } }, {
    name: 'Joel Dávalos',
    role: 'Fundador · Director General · Director Creativo',
    bio: 'Joel Dávalos fundó MUBB Design Studio con una convicción simple y radical: que un espacio solo es extraordinario cuando refleja con precisión absoluta la identidad de quien lo habita.',
    photo: team1.id,
    sortOrder: 1,
    showOnHome: true,
  } as any)
  await upsert(payload, 'team-members', { name: { equals: 'Brinny Dávalos' } }, {
    name: 'Brinny Dávalos',
    role: 'Directora Comercial',
    bio: 'Brinny Dávalos es la persona que convierte el mundo creativo de MUBB en relaciones que duran toda la vida.',
    photo: team2.id,
    sortOrder: 2,
    showOnHome: true,
  } as any)
  await upsert(payload, 'team-members', { name: { equals: 'Adrián Quishpe' } }, {
    name: 'Adrián Quishpe',
    role: 'Director de Producción',
    bio: 'Detrás de cada espacio MUBB que cobra vida hay una mente que lo hizo posible: Adrián Quishpe.',
    photo: team3.id,
    sortOrder: 3,
    showOnHome: true,
  } as any)

  console.log('Seeding services...')
  const services = [
    { title: 'Diseño de interiores', slug: 'diseno-de-interiores', tagline: 'El alma de MUBB Design Studio', sortOrder: 1, image: serv1.id },
    { title: 'Residencias', slug: 'residencias', tagline: 'Tu hogar es la declaración más íntima de quién eres', sortOrder: 2, image: serv2.id },
    { title: 'Proyectos hoteleros y de hospitalidad', slug: 'hoteleria', tagline: 'El diseño que convierte una estadía en una experiencia', sortOrder: 3, image: serv3.id },
    { title: 'Espacios comerciales y corporativos', slug: 'comercial', tagline: 'Un espacio que comunica antes de que alguien hable', sortOrder: 4, image: serv4.id },
    { title: 'Yates y espacios náuticos', slug: 'nautico', tagline: 'El mar como extensión de tu mundo', sortOrder: 5, image: serv5.id },
    { title: 'Mobiliario a medida', slug: 'mobiliario', tagline: 'En MUBB el mobiliario nunca es genérico', sortOrder: 6, image: serv6.id },
  ]
  for (const s of services) {
    await upsert(payload, 'services', { slug: { equals: s.slug } }, s as any)
  }

  console.log('Seeding press items...')
  await upsert(payload, 'press-items', { outlet: { equals: 'Forbes Ecuador' } }, {
    year: 2023, outlet: 'Forbes Ecuador', image: forbes.id,
    quote: 'Una mirada al diseño contemporáneo donde la materia, el detalle y la arquitectura se encuentran.',
    sortOrder: 1,
  } as any)
  await upsert(payload, 'press-items', { outlet: { equals: 'Clave!' } }, {
    year: 2024, outlet: 'Clave!', image: clave.id,
    quote: 'Una interpretación del diseño como lenguaje visual, donde cada elemento se integra bajo una composición precisa.',
    sortOrder: 2,
  } as any)
  await upsert(payload, 'press-items', { outlet: { equals: 'Casas Project' } }, {
    year: 2026, outlet: 'Casas Project', image: casasproject.id,
    quote: 'El proyecto se define por una estética serena que pone en valor la luz, la armonía de las proporciones y la autenticidad de los materiales.',
    sortOrder: 3,
  } as any)

  console.log('Seeding site settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      whatsapp: '593939394576',
      notifyEmail: 'ventas@mubb.store',
      showrooms: [
        { name: 'Quito', address: 'Av. Orellana y González Suárez' },
        { name: 'Manta', address: 'Barbasquillo, Vía Umiña Tenis Club' },
        { name: 'Guayaquil', address: 'Moderna Plaza, Samborondón, Local 31' },
        { name: 'Miami', address: 'Por invitación privada' },
      ],
    } as any,
  })

  console.log('\nDone. (Projects, Finishes, and AllyBrands need real image uploads before')
  console.log('they can be seeded — add them through the admin UI, or extend this script')
  console.log('once the images are on hand.)')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
