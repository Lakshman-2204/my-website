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

-- 7. APPOINTMENTS — save patient details collected on the booking form
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS patient_name   text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_phone  text DEFAULT '',
   ADD COLUMN IF NOT EXISTS patient_reason text DEFAULT '';

-- 8. APPOINTMENTS — track who cancelled so all parties see context
--    values: 'customer' | 'hospital' | 'admin'  (empty for non-cancelled rows)
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS cancelled_by text DEFAULT '';

-- 8b. APPOINTMENTS — free-text reason captured when the booking is cancelled
ALTER TABLE public.appointments
   ADD COLUMN IF NOT EXISTS cancellation_reason text DEFAULT '';

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

-- 5d. APT_PROVIDERS — phone number for "call to book" CTA when online slots are full
ALTER TABLE public.apt_providers
   ADD COLUMN IF NOT EXISTS phone text DEFAULT '';

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
