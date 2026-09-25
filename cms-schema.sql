-- MUBB Design content model (Step 1). Mirrors the collections we will build in the CMS.
-- Editors compose pages from blocks; styles are never editable.

CREATE TABLE project (
  id serial PRIMARY KEY, slug text UNIQUE NOT NULL,
  title text NOT NULL,                 -- "Residencia SM"
  subtitle text,
  cover_image text NOT NULL,           -- portrait card image
  hero_media text, hero_is_video boolean DEFAULT false,
  description text,                    -- long text of the project page
  location text, typology text, year int,
  materials text[],
  featured boolean DEFAULT false, sort_order int DEFAULT 0,
  status text DEFAULT 'draft',         -- draft | published
  seo_title text, seo_description text
);
CREATE TABLE project_image (
  id serial PRIMARY KEY, project_id int REFERENCES project(id) ON DELETE CASCADE,
  url text NOT NULL, alt text, caption text, sort_order int DEFAULT 0,
  is_ai_generated boolean DEFAULT false  -- decision: tag AI renders (e.g. "CASA PC/nuevos") so they're excluded
                                          -- from the public site by default until the client confirms; see
                                          -- copy-and-content.md. Filter `WHERE is_ai_generated = false` on render.
);
CREATE TABLE service (                   -- 6 services confirmed from the client's doc (the screens only showed 5)
  id serial PRIMARY KEY, slug text UNIQUE, title text NOT NULL,   -- "Diseño de interiores" ... "Mobiliario a medida"
  tagline text, image text NOT NULL, text_side text DEFAULT 'left', -- left | right (band layout)
  body text, sort_order int DEFAULT 0
);
CREATE TABLE blog_post (                 -- decision: simple editorial blog, since the client's doc gives no spec
  id serial PRIMARY KEY, slug text UNIQUE NOT NULL, title text NOT NULL,
  cover_image text, excerpt text, body text, category text,
  published_at timestamptz, status text DEFAULT 'draft',
  seo_title text, seo_description text
);
CREATE TABLE finish (                  -- the "+2.000 acabados"
  id serial PRIMARY KEY, name text NOT NULL,            -- "LUSSO - OYSTER"
  supplier text, category text, swatch_image text NOT NULL, featured boolean DEFAULT false
);
CREATE TABLE team_member (
  id serial PRIMARY KEY, name text NOT NULL, role text, photo text NOT NULL,
  bio text, sort_order int DEFAULT 0, show_on_home boolean DEFAULT true
);
CREATE TABLE press_item (
  id serial PRIMARY KEY, year int NOT NULL, outlet text NOT NULL,
  logo text, quote text, image text, url text, sort_order int DEFAULT 0
);
CREATE TABLE ally_brand (
  id serial PRIMARY KEY, name text NOT NULL, logo text NOT NULL, url text, sort_order int DEFAULT 0
);
CREATE TABLE page (                    -- Home, Studio, Servicios, Prensa, any new page
  id serial PRIMARY KEY, slug text UNIQUE NOT NULL, title text NOT NULL,
  seo_title text, seo_description text, og_image text,
  blocks jsonb NOT NULL DEFAULT '[]'   -- ordered list of blocks (see types below)
);
-- block types: hero, band, text, project_carousel, project_grid, video, team, finishes_carousel,
--              services_list, press_timeline, ally_brands, cta, contact_form
CREATE TABLE site_settings (
  id int PRIMARY KEY DEFAULT 1, logo text, nav jsonb, footer jsonb,   -- showrooms, links, email, social
  whatsapp text, notify_email text, analytics_id text, pixel_ids jsonb
);
CREATE TABLE appointment_request (     -- "Solicitar cita" / contact form (our own route, not a 3rd-party service)
  id serial PRIMARY KEY, name text NOT NULL, email text NOT NULL, phone text,
  city_country text,                   -- client's form asks Ciudad / País
  project_type text,                   -- residencial | hotelero | comercial | corporativo | nautico | otro
  message text, preferred_date date, source_page text,
  status text DEFAULT 'new', created_at timestamptz DEFAULT now()
);
CREATE TABLE job_application (         -- "Trabaja con nosotros" (footer link, per client's doc)
  id serial PRIMARY KEY, name text NOT NULL, email text NOT NULL, phone text,
  position text, resume_url text, message text,
  status text DEFAULT 'new', created_at timestamptz DEFAULT now()
);
CREATE TABLE supplier_inquiry (        -- "¿Eres proveedor?" (new form from client's doc)
  id serial PRIMARY KEY, company text NOT NULL, contact_name text, email text NOT NULL, phone text,
  category text, message text,
  status text DEFAULT 'new', created_at timestamptz DEFAULT now()
);
