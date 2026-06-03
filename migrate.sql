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
   ADD COLUMN IF NOT EXISTS door_delivery    boolean DEFAULT false;

-- 12. PRODUCTS — link a product to a specific store_provider (not just an owner email).
--     Legacy products (store_id = owner_email, store_provider_id IS NULL) stay in the
--     table but are hidden from the new Stores flow. Customer Stores page filters
--     where store_provider_id IS NOT NULL.
ALTER TABLE public.products
   ADD COLUMN IF NOT EXISTS store_provider_id text DEFAULT NULL;
CREATE INDEX IF NOT EXISTS products_store_provider_id_idx ON public.products(store_provider_id);
