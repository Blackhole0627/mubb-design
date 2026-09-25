# MUBB Design — client copy and asset inventory

Source: `wetransfer_mubb-design_2026-09-24_2258/mubb design/` (full doc dump in `docx_dump.txt` at project root) and `WEB MUBB DESIGN STUDIO.docx`. This replaces guesses with the client's own text. Bilingual: ES and EN required (nav given in both).

## Final sitemap (confirmed by the client's nav)
```
ES: Inicio · Studio · Servicios · Portafolio · Prensa · Blog · Contacto
EN: Home  · Studio · Services  · Portfolio  · Press  · Blog · Contact
```
"Blog" is in the nav on both languages but has **no content or structure written** — pending question to the client (see below).

## Studio — full copy (ES)
- Intro: "MUBB Design Studio es un equipo de diseñadores de interiores, arquitectos y artesanos de alto nivel… Con más de 20 años de trayectoria… opera a nivel global creando entornos residenciales, hoteleros, comerciales y corporativos… acceso a más de 2000 acabados exclusivos… Un solo resultado: que el espacio sea inconfundiblemente tuyo."
- Team bios (full paragraphs, 3 each) for **Joel Dávalos** (Fundador · Director General · Director Creativo), **Adrián Quishpe** (Director de Producción), **Brinny Dávalos** (Directora Comercial). Full text in `docx_dump.txt` lines 25-39.
- CTA: "¿Estás listo para crear algo extraordinario?" → **Solicitar cita**

## Servicios — 6 services with full copy (client's doc has one more than the screens showed)
1. **Diseño de interiores** — "el alma de MUBB DESIGN STUDIO"
2. **Residencias** — "Tu hogar es la declaración más íntima de quién eres."
3. **Proyectos hoteleros y de hospitalidad** — "El diseño que convierte una estadía en una experiencia que no se olvida."
4. **Espacios comerciales y corporativos** — "Un espacio que comunica antes de que alguien hable."
5. **Yates y espacios náuticos** — "El mar como extensión de tu mundo."
6. **Mobiliario a medida** — NEW, not in the screens. "En MUBB el mobiliario nunca es genérico." Custom furniture, made to order, from the same 2,000+ finishes.

Update the Servicios wireframe/sitemap to 6 bands, not 5.

## Portfolio — projects (name, location, typology, body copy where given)
| Project | Location | Typology | Copy status |
|---|---|---|---|
| **Skorpios** (shown as the portfolio page) | Manta, Ecuador | Residencial · Penthouse | Full copy (long, evocative) |
| **Oficina SG** | Ambato, Ecuador | Corporativo / Oficinas | Full copy (short) |
| Residencia SM | — | — | Name only |
| Residencia MA | — | — | Name only |
| Residencia HA | — | — | Name only |
| Residencia BF | — | — | Name only |
| Residencia G | — | — | Name only |

Real photo/render folders exist for more projects than the screens named: `CASA MB`, `CASA PC`, `DEPARTAMENTO GM`, `PENTHOUSE SK` (= Skorpios), `PROYECTO BY-PB`, `RESIDENCIA MA`, `RESIDENCIA SG`, `departamento ML`. Match these to the final project list with the client; names don't line up 1:1 yet (e.g. is "RESIDENCIA SG" the same as "Oficina SG"? они share a code but SG project folder is residential planta alta/baja, likely a different project reusing initials).

**Important quality note:** several project folders (`CASA PC/EXTERIOR/nuevos`, `departamento ML`) contain files literally named "ChatGPT Image …" — these are AI-generated renders, not photos of built work. They look convincing, but flag this to the client before publishing: a portfolio for a studio built on "más de 20 años de trayectoria" and real craftsmanship should probably not mix in AI renders without saying so, or should keep them out of the finished-project narrative (e.g. use only for a "conceptual" or "coming soon" project, if used at all).

## Prensa
Confirmed: Forbes (2023, with a video `forbes 4.mp4`), Clave! (2024, 5-image spread + covers), Casas Project (10-image carousel). Allied brands: **Pedral**, **Dekton**, **Aglomerados Cotopaxi**.

## Contacto — new page, full copy given
- Headline: "Todo proyecto extraordinario comienza con una conversación."
- Subhead: "¿Tienes un proyecto en mente?"
- Form fields: Nombre completo, Correo electrónico, Ciudad/País, Tipo de proyecto (Residencial · Hotelero · Comercial · Corporativo · Náutico · Otro), Cuéntanos sobre tu proyecto, Enviar.
- Locations (4, not 3 — Miami is new):
  - Quito — Av. Orellana y González Suárez
  - Manta — Barbasquillo, Vía Umiña Tenis Club
  - Guayaquil — Moderna Plaza, Samborondón, Local 31
  - **Miami — "Por invitación privada"**, sales@mubb.store (separate email from the Ecuador showrooms' ventas@mubb.store)
- Phone (all Ecuador locations): **+593 93 939 4576**
- Social: Instagram, Facebook, TikTok, YouTube

**Two more forms mentioned at the end of the doc, not yet designed:**
- "Trabaja con nosotros" — careers / job application
- "¿Eres proveedor y quieres comunicarte con nosotros?" — supplier inquiry

These need their own lightweight forms (see updated `cms-schema.sql`), probably reachable from the footer link "Trabaja con nosotros" (already in the footer per the client's screens) plus a new supplier link.

## Legal pages — client provided full drafts
Complete **Términos de Uso** and **Política de Privacidad**, dated "Vigente desde: Mayo 2025", covering Ecuador (LOPDP) and Florida/US (FIPA) jurisdiction — confirms the Miami expansion is real and already legally anticipated. The client's own note says to have a lawyer validate them before publishing; treat as content-ready but not final until they confirm. Full text in `docx_dump.txt` lines 100-166.

## Brand assets received
- `Logo design studio.ai` — vector logo (Illustrator; can't preview here, but it's the real vector file, better than the screen crops).
- `tipografia recomendada/` — actual font files: Montserrat Medium/Regular/SemiBold, and Century Gothic (Regular + Bold). Confirms Montserrat as primary; Century Gothic is a secondary/alternate seen faintly in the MUBB store CSS too.
- `ACABADOS/` — over 50 real finish images (Durango, Dekton, Porcelains, Quarzite, special edition marbles, etc.), enough to fully populate the "+2.000 acabados" carousel with real swatches instead of placeholders.
- `HOME/`, `STUDIO/`, `servicios/` — background and section images matching the screens.
- `VIDEO DE PROYECTOS/` — 5 real project videos, including `SKORPIOSHORIZTL.mp4` (the Home/Portfolio hero video) and two office reels.
- `PRENSA/FORBES/forbes 4.mp4` — the Forbes video.

## Decisions taken (not blocking on the client; revisit anytime)
1. **Blog:** built as a simple editorial collection (`blog_post` in `cms-schema.sql`): cover, excerpt, body, category, publish date. Reachable from the footer, not the primary nav emphasis. No categories/authors beyond a single free-text `category` field, to keep it light until the client says otherwise.
2. **AI-generated renders:** tagged, not deleted. Added `project_image.is_ai_generated`; the site query filters `WHERE is_ai_generated = false` by default, so they're built into the schema but hidden from the public portfolio until the client confirms whether to show them (e.g. as "concept" pieces) or replace them.
3. **Missing project copy** (Residencia SM, MA, HA, BF, G): built as draft entries with the real photos we have, title only, and a `status = 'draft'` flag so they don't publish empty. Copy gets filled in later without touching structure.
4. **"Trabaja con nosotros" and the supplier form:** each gets its own lightweight page (`/trabaja-con-nosotros`, `/proveedores`) linked from the footer, next to the existing footer links — simplest to build, easy to promote later if the client wants them more prominent.
5. **Miami:** treated as private/by-invitation with its own `sales@mubb.store` contact, no public address, exactly as written. If wrong, it's a one-line edit in `site_settings.footer`.
