-- ═══════════════════════════════════════════════════════
--  MyStore — Database Migration
--  Run this in: Supabase Dashboard → SQL Editor → New query
--  Purpose: Fix column names to match the application code
-- ═══════════════════════════════════════════════════════

-- 0. USERS — add gender column
ALTER TABLE public.users
   ADD COLUMN IF NOT EXISTS gender text DEFAULT '';

-- 1. ADDRESSES — add is_default column
ALTER TABLE public.addresses
   ADD COLUMN IF NOT EXISTS is_default boolean DEFAULT false;

-- 2. CARDS — replace old columns with correct ones
--    Old schema had: number, card_name
--    New schema needs: last4, brand, name_on_card
ALTER TABLE public.cards
   ADD COLUMN IF NOT EXISTS last4        text DEFAULT '';
ALTER TABLE public.cards
   ADD COLUMN IF NOT EXISTS brand        text DEFAULT '';
ALTER TABLE public.cards
   ADD COLUMN IF NOT EXISTS name_on_card text DEFAULT '';

-- (Old columns: number, card_name — kept for safety but no longer used)

-- 3. SETTINGS — add a 'data' JSONB column for the full settings blob
--    This replaces the fragmented column approach and avoids camelCase/snake_case mapping issues
ALTER TABLE public.settings
   ADD COLUMN IF NOT EXISTS data jsonb DEFAULT '{}'::jsonb;

-- Reset the default settings row so 'data' column is initialized
UPDATE public.settings SET data = '{}'::jsonb WHERE id = 1 AND data IS NULL;

-- 4. APT_PROVIDERS — Hospitals / Clinics for the Appointments feature
--    Each row is one provider. Its doctors (with per-doctor availability)
--    live in the JSONB column so the whole provider loads in a single query.
CREATE TABLE IF NOT EXISTS public.apt_providers (
   id          text         PRIMARY KEY,
   category    text         NOT NULL,                   -- 'hospital' | 'dental' | future categories
   name        text         NOT NULL,
   tagline     text         DEFAULT '',
   address     text         DEFAULT '',
   timing      text         DEFAULT '',
   icon        text         DEFAULT '🏥',
   doctors     jsonb        DEFAULT '[]'::jsonb,
   created_at  timestamptz  DEFAULT now()
);
ALTER TABLE public.apt_providers DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS apt_providers_category_idx ON public.apt_providers(category);

-- 5. APT_PROVIDERS — link each hospital/clinic to a store-owner user
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS owner_email text DEFAULT '';
CREATE INDEX IF NOT EXISTS apt_providers_owner_idx ON public.apt_providers(owner_email);

-- 5b. APT_PROVIDERS — commission settings per provider
--     commission_type:  'percent' (per-transaction %) | 'fixed_monthly' (flat ₹/month)
--     commission_value: numeric (e.g. 5 means 5% or ₹5 depending on type)
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS commission_type  text    DEFAULT 'percent',
   ADD COLUMN IF NOT EXISTS commission_value numeric DEFAULT 0;

-- 6. USERS — approval gate for Business Partners
--    is_approved=true for customers (no gate). New Business Partner signups
--    default false until admin approves them.
ALTER TABLE public.users
   ADD COLUMN IF NOT EXISTS is_approved boolean DEFAULT true;
-- Grandfather: any existing business partner you already trust is left approved.
-- New unapproved partners will only appear after the JS change ships.

-- 6b. USERS — per-partner commission rate override.
--     NULL means "use the global rate from settings.commissionRate".
ALTER TABLE public.users
   ADD COLUMN IF NOT EXISTS commission_rate numeric DEFAULT NULL;

-- 6b2. USERS — single free-text address (used on shop-owner profile page).
ALTER TABLE public.users
   ADD COLUMN IF NOT EXISTS address text DEFAULT '';

-- 6c. USERS — block-appeal workflow. When a customer is blocked (no-show cap),
--     they can submit an appeal. Admin reviews and approves/denies. Approval
--     sets appeal_approved_at — abuse check then ignores no-shows before that.
ALTER TABLE public.users
   ADD COLUMN IF NOT EXISTS block_appeal_reason text        DEFAULT '',
   ADD COLUMN IF NOT EXISTS block_appeal_at     timestamptz DEFAULT NULL,
   ADD COLUMN IF NOT EXISTS block_appeal_status text        DEFAULT '',
   ADD COLUMN IF NOT EXISTS appeal_approved_at  timestamptz DEFAULT NULL;

-- 7. APPOINTMENTS — save patient details collected on the booking form
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS patient_name    text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_phone   text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_reason  text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_age     text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_address text DEFAULT '';

-- 8. APPOINTMENTS — track who cancelled so all parties see context
--    values: 'customer' | 'hospital' | 'admin'  (empty for non-cancelled rows)
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS cancelled_by text DEFAULT '';

-- 8b. APPOINTMENTS — free-text reason captured when the booking is cancelled
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS cancellation_reason text DEFAULT '';

-- 8b2. APPOINTMENTS — timestamp of cancellation, used for cooldown + daily caps
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS cancelled_at timestamptz DEFAULT NULL;

-- 8c. APPOINTMENTS — sequential token within a slot (1, 2, 3…)
--     Owner calls patients in token order so first-booked is seen first.
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS token integer DEFAULT NULL;
CREATE INDEX IF NOT EXISTS appointments_doctor_date_idx ON public.appointments(doctor_id, date);

-- 8d. APPOINTMENTS — track booking origin so online/offline capacity can be split
--     'online'  = booked via customer website
--     'offline' = booked by owner via Schedule tab (phone/walk-in)
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS booking_source text DEFAULT 'online';

-- 8e. APPOINTMENTS — payment flag (independent of consultation completion).
--     Patient pays the fee at reception and gets a receipt before the doctor
--     visit, so payment status is tracked separately from status='Completed'.
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS is_paid boolean DEFAULT false;
-- Treat all historical Completed rows as paid (matches old behaviour).
UPDATE public.appointments SET is_paid = true WHERE status = 'Completed' AND is_paid IS NOT TRUE;

-- 8f. APPOINTMENTS — refund tracking. When a paid booking is cancelled, the
--     owner records the refund amount + timestamp. The receipt then prints
--     with a "REFUNDED" stamp and the refund details so the patient has proof.
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS is_refunded   boolean     DEFAULT false,
   ADD COLUMN IF NOT EXISTS refund_amount numeric     DEFAULT 0,
   ADD COLUMN IF NOT EXISTS refunded_at   timestamptz DEFAULT NULL;

-- 8g. APPOINTMENTS — free follow-up tracking. Follow-ups are booked from a
--     completed visit within the provider's free_followup_days window; they
--     have fee=0, get FT* tokens (separate counter from regular T*), and DON'T
--     consume regular slot capacity. followup_of links back to the original.
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS is_followup boolean DEFAULT false,
   ADD COLUMN IF NOT EXISTS followup_of text    DEFAULT '';
CREATE INDEX IF NOT EXISTS appointments_followup_of_idx ON public.appointments(followup_of);

-- 5d. APT_PROVIDERS — phone number for "call to book" CTA when online slots are full
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS phone text DEFAULT '';

-- 5e. APT_PROVIDERS — GSTIN (15-char tax ID) shown on the consultation receipt header
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS gstin text DEFAULT '';

-- 5f. APT_PROVIDERS — free follow-up window in days. Default 0 (no follow-up).
--     The number of days a patient can come back for a free review after the
--     original consultation. Printed on the receipt; line is hidden if 0.
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS free_followup_days integer DEFAULT 0;

-- 5g. APT_PROVIDERS — max number of free follow-ups allowed within that window.
--     Cancelled follow-ups don't count; Confirmed/Completed/No-show do.
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS free_followup_count integer DEFAULT 1;

-- 10. STORAGE — public bucket for doctor profile photos
INSERT INTO storage.buckets (id, name, public)
   VALUES ('doctor-photos', 'doctor-photos', true)
   ON CONFLICT (id) DO NOTHING;
DROP POLICY IF EXISTS "Public read doctor-photos"     ON storage.objects;
DROP POLICY IF EXISTS "Authenticated upload doctor-photos" ON storage.objects;
CREATE POLICY "Public read doctor-photos"     ON storage.objects FOR SELECT USING (bucket_id = 'doctor-photos');
CREATE POLICY "Authenticated upload doctor-photos" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'doctor-photos' AND auth.role() = 'authenticated');

-- 9. APT_CATEGORIES — admin-managed list of business categories for appointments
--    (hospitals, dental, beauty parlour, fitness, …). Used everywhere instead of
--    a hardcoded JS constant so new categories appear with no code change.
CREATE TABLE IF NOT EXISTS public.apt_categories (
   id           text         PRIMARY KEY,
   label        text         NOT NULL,
   description  text         DEFAULT '',
   icon         text         DEFAULT '🏥',
   staff_label  text         DEFAULT 'Staff',
   staff_icon   text         DEFAULT '👥',
   sort_order   int          DEFAULT 100,
   created_at   timestamptz  DEFAULT now()
);
ALTER TABLE public.apt_categories DISABLE ROW LEVEL SECURITY;

-- Seed the two we already use
INSERT INTO public.apt_categories (id, label, description, icon, staff_label, staff_icon, sort_order) VALUES
   ('hospital', 'Hospitals',      'General & multi-speciality hospitals',    '🏥', 'Doctors', '👨‍⚕️', 10),
   ('dental',   'Dental Clinics', 'Dentists, orthodontists & cosmetic care', '🦷', 'Doctors', '👨‍⚕️', 20)
ON CONFLICT (id) DO NOTHING;

-- 10. STORE_CATEGORIES — admin-managed list of retail store categories
--     (general, medical, wholesale, electronics, electrical, fancy, construction…).
--     Mirrors apt_categories but without the staff fields (stores don't have doctors).
CREATE TABLE IF NOT EXISTS public.store_categories (
   id           text         PRIMARY KEY,
   label        text         NOT NULL,
   description  text         DEFAULT '',
   icon         text         DEFAULT '🏪',
   sort_order   int          DEFAULT 100,
   created_at   timestamptz  DEFAULT now()
);
ALTER TABLE public.store_categories DISABLE ROW LEVEL SECURITY;

-- Seed common retail categories. Safe to re-run.
INSERT INTO public.store_categories (id, label, description, icon, sort_order) VALUES
   ('general',      'General Stores',          'Day-to-day groceries & essentials',     '🛒', 10),
   ('medical',      'Medical Stores',          'Pharmacies & medical supplies',         '💊', 20),
   ('wholesale',    'Wholesale Stores',        'Bulk purchase & wholesale traders',     '📦', 30),
   ('electronics',  'Mobiles & Electronics',   'Phones, gadgets & electronics',         '📱', 40),
   ('electrical',   'Electrical Stores',       'Wiring, switches, lighting & fittings', '💡', 50),
   ('fancy',        'Fancy Stores',            'Cosmetics, accessories & gift items',   '🎁', 60),
   ('construction', 'Construction Stores',     'Hardware, cement, paints & tools',      '🏗️', 70)
ON CONFLICT (id) DO NOTHING;

-- 11. STORE_PROVIDERS — each retail store is a "provider" (parity with apt_providers).
--     One owner_email can own many store_providers (e.g. a medical store AND a general store).
CREATE TABLE IF NOT EXISTS public.store_providers (
   id          text         PRIMARY KEY,
   category    text         NOT NULL,             -- FK into store_categories.id
   name        text         NOT NULL,
   tagline     text         DEFAULT '',
   address     text         DEFAULT '',
   phone       text         DEFAULT '',
   timing      text         DEFAULT '',
   icon        text         DEFAULT '🏪',
   image_url   text         DEFAULT '',
   gstin       text         DEFAULT '',
   owner_email text         DEFAULT '',
   created_at  timestamptz  DEFAULT now()
);
ALTER TABLE public.store_providers DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS store_providers_category_idx ON public.store_providers(category);
CREATE INDEX IF NOT EXISTS store_providers_owner_idx    ON public.store_providers(owner_email);

-- 11b. STORE_PROVIDERS — additional licence / commission / delivery fields.
--      Form 20 & Form 21 are drug-licence numbers for medical/pharmacy stores.
--      FSSAI is the food-business licence. All three are optional.
--      Commission mirrors apt_providers (percent OR fixed monthly fee).
--      door_delivery flags whether the store offers home delivery.
ALTER TABLE public.store_providers
   ADD COLUMN IF NOT EXISTS form20_no        text    DEFAULT '',
   ADD COLUMN IF NOT EXISTS form21_no        text    DEFAULT '',
   ADD COLUMN IF NOT EXISTS fssai_no         text    DEFAULT '',
   ADD COLUMN IF NOT EXISTS commission_type  text    DEFAULT 'percent',  -- 'percent' | 'fixed_monthly'
   ADD COLUMN IF NOT EXISTS commission_value numeric DEFAULT 0,
   ADD COLUMN IF NOT EXISTS door_delivery    boolean DEFAULT false,
   -- Owner-toggleable temporary pause for delivery (e.g., delivery boy off
   -- today). When true, NEW customer orders force Pickup even if the store
   -- normally delivers; in-flight delivery orders are NOT auto-converted —
   -- owner switches them per-order via the "🔄 Switch to pickup" button.
   ADD COLUMN IF NOT EXISTS delivery_paused  boolean DEFAULT false;

-- Realtime broadcasting: needed so customer/admin pages auto-refresh when an
-- owner pauses/resumes delivery (or admin edits any store). Idempotent — the
-- DO block silently skips if the table is already in the publication.
DO $$
BEGIN
   ALTER PUBLICATION supabase_realtime ADD TABLE public.store_providers;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- 13. CATALOG_ITEMS — admin-curated master list of items per store category.
--     Stores pick from this list when adding products (avoids duplicate entries
--     like "Paracetamol 500", "Para 500mg", "Crocin Tab" all meaning the same drug).
--     Common fields (name, brand, price, image, serial, batch) live as columns.
--     Per-category extras (salt, dose, units_per_strip for medical; model, warranty
--     for electronics; etc.) live in the `attrs` JSONB blob.
CREATE TABLE IF NOT EXISTS public.catalog_items (
   id          text         PRIMARY KEY,
   category    text         NOT NULL,                  -- FK store_categories.id
   name        text         NOT NULL,
   brand       text         DEFAULT '',
   price       numeric      DEFAULT 0,
   serial_no   text         DEFAULT '',
   batch_no    text         DEFAULT '',
   image_url   text         DEFAULT '',
   attrs       jsonb        DEFAULT '{}'::jsonb,
   created_at  timestamptz  DEFAULT now()
);
ALTER TABLE public.catalog_items DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS catalog_items_category_idx ON public.catalog_items(category);
CREATE INDEX IF NOT EXISTS catalog_items_name_idx     ON public.catalog_items(name);

-- Trigram index for fast substring search ("%dolo%") at 250K-row scale.
-- Without this an ilike on the full name column does a sequential scan.
-- The pg_trgm extension ships with Supabase by default.
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX IF NOT EXISTS catalog_items_name_trgm_idx
   ON public.catalog_items USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS catalog_items_brand_trgm_idx
   ON public.catalog_items USING gin (brand gin_trgm_ops);
-- Composition lives inside attrs JSONB. Functional trigram index so the
-- catalogue search also covers salts/compositions in O(log n).
CREATE INDEX IF NOT EXISTS catalog_items_composition_trgm_idx
   ON public.catalog_items USING gin ((attrs->>'composition') gin_trgm_ops);

-- 15. PRODUCTS — inventory-related columns. Stores how a product is sold and
-- when to flag low stock. units_per_pack tells us how many atomic units
-- (e.g. tablets) live in one strip — used to display "2 strips + 4 tabs".
ALTER TABLE public.products
   ADD COLUMN IF NOT EXISTS sell_unit       text    DEFAULT 'strip',  -- 'strip' | 'tablet' | 'bottle' | 'sachet' | 'ml' | 'pcs'
   ADD COLUMN IF NOT EXISTS units_per_pack  numeric DEFAULT 1,         -- tablets per strip, ml per bottle, etc.
   ADD COLUMN IF NOT EXISTS reorder_point   numeric DEFAULT 0;         -- 0 = disabled; otherwise low-stock threshold in atomic units

-- 16. INVENTORY_BATCHES — actual stock the store has, by batch.
-- Each shipment a pharmacy receives creates one row here. qty is stored in
-- atomic units (tablets, ml, single pieces). The bill flow auto-picks the
-- oldest-expiry batch first ("FEFO" — first expiry first out).
CREATE TABLE IF NOT EXISTS public.inventory_batches (
   id                  text         PRIMARY KEY,
   product_id          text         NOT NULL,                      -- FK products.id
   store_provider_id   text         NOT NULL,                      -- denormalized for fast filter
   batch_no            text         DEFAULT '',
   mfg_date            date,
   expiry_date         date,
   qty_received        numeric      DEFAULT 0,                     -- original count, atomic units
   qty_remaining       numeric      DEFAULT 0,                     -- current count, atomic units
   mrp                 numeric      DEFAULT 0,                     -- can differ from catalogue MRP (rare)
   purchase_price      numeric      DEFAULT 0,                     -- what the owner paid (for margin calc)
   notes               text         DEFAULT '',
   created_at          timestamptz  DEFAULT now(),
   updated_at          timestamptz  DEFAULT now()
);
ALTER TABLE public.inventory_batches DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS inventory_batches_product_idx  ON public.inventory_batches(product_id);
CREATE INDEX IF NOT EXISTS inventory_batches_store_idx    ON public.inventory_batches(store_provider_id);
CREATE INDEX IF NOT EXISTS inventory_batches_expiry_idx   ON public.inventory_batches(expiry_date);

-- 17. PRODUCTS — denormalized rx_required so customer cards don't have to
-- look up the catalog every time. Owner sets this when adding/editing item.
ALTER TABLE public.products
   ADD COLUMN IF NOT EXISTS rx_required boolean DEFAULT false;

-- 18. ORDERS — extra columns for medical-store / home-delivery flow:
--     store_provider_id  → which store-provider received this order (Phase 1+)
--     prescription_url   → public URL of the customer's Rx photo (one per order)
--     delivery_address   → snapshot of the chosen address (JSONB so we don't break
--                          if the customer edits/deletes the address later)
--     payment_mode       → 'COD' default; future: 'UPI_PREPAID' etc.
--     status fields already exist on orders from earlier work.
ALTER TABLE public.orders
   ADD COLUMN IF NOT EXISTS store_provider_id text,
   ADD COLUMN IF NOT EXISTS prescription_url  text,
   ADD COLUMN IF NOT EXISTS delivery_address  jsonb,
   ADD COLUMN IF NOT EXISTS payment_mode      text DEFAULT 'COD',
   ADD COLUMN IF NOT EXISTS discount_pct      numeric DEFAULT 0,
   ADD COLUMN IF NOT EXISTS bill_number       text,
   ADD COLUMN IF NOT EXISTS walk_in           boolean DEFAULT false,
   ADD COLUMN IF NOT EXISTS doctor_name       text DEFAULT '',
   -- Flips to true once inventory_batches.qty_remaining has been decremented
   -- for this order's items (on transition to status='Completed' for customer
   -- orders, or at insert time for walk-in counter sales). Prevents double-
   -- deduction if status is toggled back and forth.
   ADD COLUMN IF NOT EXISTS stock_deducted    boolean DEFAULT false,
   -- Owner used "🔄 Switch to pickup" on a delivery order. Without this flag,
   -- the customer/owner label fallback (which looks at store.door_delivery)
   -- would silently re-upgrade the display back to delivery. This flag forces
   -- the order to render as pickup regardless of the store's current setting.
   ADD COLUMN IF NOT EXISTS pickup_override   boolean DEFAULT false;
CREATE INDEX IF NOT EXISTS orders_store_provider_idx ON public.orders(store_provider_id);

-- 19. WALKIN_CUSTOMERS — lightweight directory of customers who walked in to a
-- pharmacy. Saved on first bill via phone number. Lets the owner recall a
-- repeat customer's name + phone next time (for loyalty / bill history).
-- No login required — the customer is anonymous from the website's POV.
CREATE TABLE IF NOT EXISTS public.walkin_customers (
   id          text         PRIMARY KEY,
   store_provider_id text,
   name        text         DEFAULT '',
   phone       text         DEFAULT '',
   created_at  timestamptz  DEFAULT now()
);
ALTER TABLE public.walkin_customers DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS walkin_customers_phone_idx ON public.walkin_customers(phone);
CREATE INDEX IF NOT EXISTS walkin_customers_store_idx ON public.walkin_customers(store_provider_id);

-- Fuzzy phone recall: store digits-only, last-10 form (strips +91 / spaces /
-- dashes / brackets) so "+91 98765 43210", "9876543210", "(987) 654-3210"
-- all resolve to the same customer when the cashier types any of them.
ALTER TABLE public.walkin_customers
   ADD COLUMN IF NOT EXISTS phone_normalized text;
UPDATE public.walkin_customers
   SET phone_normalized = right(regexp_replace(coalesce(phone, ''), '\D', '', 'g'), 10)
   WHERE phone_normalized IS NULL;
CREATE INDEX IF NOT EXISTS walkin_customers_phone_norm_idx
   ON public.walkin_customers(store_provider_id, phone_normalized);

-- 13b. STORE_CATEGORIES — per-category field schema (admin-editable).
--      Each row holds a JSONB array of field defs like:
--         [{key,label,type,placeholder}, ...]
--      where type ∈ ('text','number','checkbox'). Used by the catalogue
--      Add/Edit Item modal to render dynamic fields.
ALTER TABLE public.store_categories
   ADD COLUMN IF NOT EXISTS catalog_fields jsonb DEFAULT '[]'::jsonb;

-- Seed default schemas for the categories we shipped with. Safe to re-run
-- (only updates rows whose catalog_fields is still the empty default).
UPDATE public.store_categories SET catalog_fields = '[
   {"key":"composition","label":"Composition / Salt","type":"text","placeholder":"Paracetamol 650mg"},
   {"key":"dose","label":"Dose","type":"text","placeholder":"650mg"},
   {"key":"units_per_strip","label":"Units per Strip","type":"number","placeholder":"15"},
   {"key":"mfr","label":"Manufacturer","type":"text","placeholder":"Micro Labs"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":"3004"},
   {"key":"rx_required","label":"Prescription required","type":"checkbox"}
]'::jsonb WHERE id = 'medical' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"model","label":"Model","type":"text","placeholder":"Galaxy A35"},
   {"key":"warranty_months","label":"Warranty (months)","type":"number","placeholder":"12"},
   {"key":"specs","label":"Key Specs","type":"text","placeholder":"6GB / 128GB / 5G"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":"8517"}
]'::jsonb WHERE id = 'electronics' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"voltage","label":"Voltage (V)","type":"number","placeholder":"230"},
   {"key":"wattage","label":"Power (W)","type":"number","placeholder":"60"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":"8541"}
]'::jsonb WHERE id = 'electrical' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"pack_size","label":"Pack Size","type":"text","placeholder":"500g / 1L / 1 pc"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":"1006"}
]'::jsonb WHERE id = 'general' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"pack_size","label":"Pack Size","type":"text","placeholder":"Box of 12"},
   {"key":"min_qty","label":"Min Order Qty","type":"number","placeholder":"10"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":""}
]'::jsonb WHERE id = 'wholesale' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"color","label":"Colour","type":"text","placeholder":"Red"},
   {"key":"material","label":"Material","type":"text","placeholder":"Plastic"}
]'::jsonb WHERE id = 'fancy' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

UPDATE public.store_categories SET catalog_fields = '[
   {"key":"unit","label":"Unit","type":"text","placeholder":"bag / m³ / piece"},
   {"key":"weight","label":"Weight (kg)","type":"number","placeholder":"50"},
   {"key":"hsn","label":"HSN Code","type":"text","placeholder":"2523"}
]'::jsonb WHERE id = 'construction' AND (catalog_fields = '[]'::jsonb OR catalog_fields IS NULL);

-- 14. PRODUCTS — back-link a per-store product to a catalogue entry (Phase 5.4b).
--     When a shop owner picks an item from the master catalogue, this column
--     stores its catalog_items.id. Lets customers compare same-item-multiple-stores.
ALTER TABLE public.products
   ADD COLUMN IF NOT EXISTS catalog_item_id text DEFAULT NULL;
CREATE INDEX IF NOT EXISTS products_catalog_item_id_idx ON public.products(catalog_item_id);

-- 12. PRODUCTS — link a product to a specific store_provider (not just an owner email).
--     Legacy products (store_id = owner_email, store_provider_id IS NULL) stay in the
--     table but are hidden from the new Stores flow. Customer Stores page filters
--     where store_provider_id IS NOT NULL.
ALTER TABLE public.products
   ADD COLUMN IF NOT EXISTS store_provider_id text DEFAULT NULL;
CREATE INDEX IF NOT EXISTS products_store_provider_id_idx ON public.products(store_provider_id);

-- 20. ADMISSIONS — inpatient tracking (Phase 7). Each row = one admitted
--     patient currently occupying a bed at a hospital. status flips to
--     'Discharged' when the patient is sent home. Drives the Admissions tab
--     on the hospital owner dashboard.
CREATE TABLE IF NOT EXISTS public.admissions (
   id                 text         PRIMARY KEY,
   provider_id        text         NOT NULL,    -- FK apt_providers.id (hospital)
   patient_name       text         NOT NULL,
   patient_phone      text         DEFAULT '',
   patient_ref        text         DEFAULT '',  -- optional patient ID / chart no
   ward               text         DEFAULT '',  -- e.g. 'Ward B', 'ICU'
   room_bed           text         DEFAULT '',  -- e.g. 'Rm 104', 'Bed A'
   admit_date         date         NOT NULL,
   target_discharge   date,                     -- expected discharge (nullable)
   status             text         DEFAULT 'Admitted',  -- 'Admitted' | 'Discharged'
   rounds_status      text         DEFAULT 'pending',   -- 'pending' | 'complete'
   notes              text         DEFAULT '',
   created_at         timestamptz  DEFAULT now(),
   updated_at         timestamptz  DEFAULT now()
);
ALTER TABLE public.admissions DISABLE ROW LEVEL SECURITY;
CREATE INDEX IF NOT EXISTS admissions_provider_idx ON public.admissions(provider_id);
CREATE INDEX IF NOT EXISTS admissions_status_idx   ON public.admissions(status);

-- Realtime broadcast — needed so multiple owner tabs / admin views auto-refresh
DO $$ BEGIN
   ALTER PUBLICATION supabase_realtime ADD TABLE public.admissions;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
