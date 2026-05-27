-- ═══════════════════════════════════════════════════════
--  MyStore — Supabase Database Schema
--  Run this in: Supabase Dashboard → SQL Editor → New query
-- ═══════════════════════════════════════════════════════

-- 1. USERS
create table if not exists public.users (
   id          uuid        default gen_random_uuid() primary key,
   name        text        not null,
   email       text        unique not null,
   password    text        not null,
   role        text        default 'customer',
   phone       text        default '',
   store_name  text        default '',
   store_type  text        default '',
   blocked     boolean     default false,
   is_admin    boolean     default false,
   created_at  timestamptz default now()
);

-- 2. STORE OWNER PRODUCTS
create table if not exists public.products (
   id              text        primary key,
   name            text        not null,
   price           numeric     default 0,
   description     text        default '',
   image           text        default '',
   category        text        not null,
   badge           text        default '',
   store_id        text        default null,
   store_name      text        default '',
   variants        jsonb       default null,
   price_per_litre numeric     default null,
   item_type       text        default null,
   created_at      timestamptz default now()
);

-- 3. ADMIN PRODUCT OVERRIDES
create table if not exists public.product_overrides (
   item_id     text        primary key,
   name        text,
   price       numeric,
   description text,
   badge       text,
   image       text,
   store_id    text,
   store_name  text,
   variants    jsonb,
   updated_at  timestamptz default now()
);

-- 4. ORDERS
create table if not exists public.orders (
   id             uuid        default gen_random_uuid() primary key,
   order_id       text        unique not null,
   customer_name  text        default '',
   customer_email text        default '',
   customer_phone text        default '',
   date           text        default '',
   timestamp      bigint      default 0,
   items          jsonb       not null default '[]',
   total          numeric     default 0,
   status         text        default 'Pending Pickup',
   store_id       text        default null,
   store_name     text        default '',
   method         text        default 'Pickup',
   created_at     timestamptz default now()
);

-- 5. ADDRESSES
create table if not exists public.addresses (
   id          uuid        default gen_random_uuid() primary key,
   user_email  text        not null,
   name        text        default '',
   phone       text        default '',
   line        text        default '',
   city        text        default '',
   state       text        default '',
   pin         text        default '',
   created_at  timestamptz default now()
);

-- 6. CARDS  (CVV is never stored)
create table if not exists public.cards (
   id          uuid        default gen_random_uuid() primary key,
   user_email  text        not null,
   number      text        default '',
   expiry      text        default '',
   card_name   text        default '',
   created_at  timestamptz default now()
);

-- 7. WISHLIST
create table if not exists public.wishlist (
   id          uuid        default gen_random_uuid() primary key,
   user_email  text        not null,
   item_id     text        not null,
   created_at  timestamptz default now(),
   unique(user_email, item_id)
);

-- 8. APPOINTMENTS
create table if not exists public.appointments (
   id            uuid        default gen_random_uuid() primary key,
   apt_id        text        unique not null,
   user_email    text        not null,
   provider_id   text        default '',
   provider_name text        default '',
   doctor_id     text        default '',
   doctor_name   text        default '',
   speciality    text        default '',
   category      text        default '',
   date          text        default '',
   slot          text        default '',
   fee           numeric     default 0,
   status        text        default 'Confirmed',
   created_at    timestamptz default now()
);

-- 9. SETTINGS
create table if not exists public.settings (
   id                  int         primary key default 1,
   store_name          text        default 'MyStore',
   announcement        text        default '',
   announcement_active boolean     default false,
   whatsapp_admin      text        default '',
   whatsapp_shop       text        default '',
   show_customer_phone boolean     default true,
   updated_at          timestamptz default now()
);

-- Default settings row
insert into public.settings (id) values (1) on conflict (id) do nothing;

-- ═══════════════════════════════════════════════════════
--  Disable RLS for development
--  (Enable & configure rules before going live)
-- ═══════════════════════════════════════════════════════
alter table public.users             disable row level security;
alter table public.products          disable row level security;
alter table public.product_overrides disable row level security;
alter table public.orders            disable row level security;
alter table public.addresses         disable row level security;
alter table public.cards             disable row level security;
alter table public.wishlist          disable row level security;
alter table public.appointments      disable row level security;
alter table public.settings          disable row level security;
