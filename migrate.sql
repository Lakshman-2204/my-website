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
