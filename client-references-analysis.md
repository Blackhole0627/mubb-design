# MUBB Design — analysis of the client's screens (`client screens/`)

The five screens are the client's "línea gráfica": the design to follow, not loose inspiration.

## Pages shown
| Screen | Page | Content |
|---|---|---|
| ARTE HOME | Home | Full-bleed hero ("Diseñamos experiencias"), intro band ("Espacios que inspiran" + Conoce más), Proyectos carousel (3 cards + arrows), full-width video with play button, Team MUBB Design (3 people), CTA "¿Listo para transformar tu espacio…?", footer |
| ARTE STUDIO | Studio | Hero with statement, "Más de 2.000 acabados" finishes carousel (swatch cards with names), "El origen de cada espacio" (3 founders with bios), CTA **Solicitar cita** |
| ARTE SERVICIOS | Servicios | Hero, then 5 full-width service bands: Diseño de interiores, Residencias, Proyectos hoteleros y de hospitalidad, Espacios comerciales, Yates y espacios náuticos, CTA "¿Cuál de nuestros servicios es ideal para ti?" |
| ARTE PORTAFOLIO | Portafolio (shown as a project page: "Skorpios") | Hero video, descriptive text, Ubicación + Tipología, "Proyectos" grid of 6 portrait cards (Residencia SM, Oficina SG, Residencia MA, HA, BF, G), CTA |
| ARTE PRENSA | Prensa | Timeline by year: Forbes Ecuador 2023, Clave! 2024, Casas Project 2026, each with quote and image; "Marcas aliadas de alto nivel" logos (Pedral, Dekton, Aglomerados Cotopaxi) |

Not shown: a contact/appointment page (the CTAs "Solicitar cita" imply one), a mobile version, the portfolio index, hover/transition behavior.

## Visual system (to extract into tokens)
- Palette: near-black `#000`, warm dark browns (textured brown background bands), white text. Photography is warm, amber-lit, dark interiors.
- Type: Montserrat, light weight, UPPERCASE, wide spacing; headings large and thin; small caps for labels.
- Logo: "MUBB DESIGN STUDIO" white lockup. Nav: HOME · STUDIO · SERVICIOS · PORTAFOLIO · PRENSA, active item bold.
- Cards: rounded corners (about 20 px), portrait 3:4 for projects and people, grayscale portraits for team.
- Controls: outline circle arrows for carousels, outline circle play button for video, text link with a thin arrow ("CONOCE MÁS ——>").
- Footer: same as MUBB (showrooms Quito, Manta, Guayaquil; Términos; Trabaja con nosotros; contact email; social; "M" mark).

## CMS content types this implies
- **Project**: name, cover, hero video or image, description, ubicación, tipología, year, gallery, related projects, featured flag.
- **Service**: title, tagline, image, order (5 today).
- **Finish/material**: name, swatch image, supplier or line (2,000+ items, carousel shows a selection).
- **Team member**: name, role, photo, bio.
- **Press item**: year, outlet, logo, quote, image, link.
- **Allied brand**: logo, link.
- **Page blocks**: hero, band, carousel, video, CTA, text, grid.
- **Appointment request** (form): name, email, phone, project type, message, preferred date.

## Sitemap
```
/                Home
/studio          Studio
/servicios       Servicios (5 bands, optional detail page per service)
/portafolio      Portafolio index (grid of projects)   <- not in screens
/portafolio/[slug]  Project page
/prensa          Prensa
/contacto        Solicitar cita                        <- not in screens
```

## Questions for later (do not block Step 1)
1. Is there a mobile design, or should mobile be derived from these screens?
2. Portfolio index page: same 6-card grid as the bottom of the project page?
3. Do the service bands open detail pages?
4. ES only, or ES/EN like the MUBB site?
5. Are the images final production photos or renders? Need original high-resolution files and videos.
