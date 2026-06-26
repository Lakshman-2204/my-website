// ═══════════════════════════════════════════════════════
//  supabase.js — Database layer for MyStore
//  Replaces all localStorage data operations with Supabase
// ═══════════════════════════════════════════════════════

const SUPABASE_URL = 'https://ucajlkviekczflbsnzhw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_lnv0yTSC_hld4HC_ms_9xw_pXvkraeR';

const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ── Field mappers ────────────────────────────────────────
function _userFromDB(r) {
   if (!r) return null;
   return { id: r.id, name: r.name, email: r.email, password: r.password,
            role: r.role || 'customer', phone: r.phone || '',
            storeName: r.store_name || '', storeType: r.store_type || '',
            blocked: r.blocked || false, isAdmin: r.is_admin || false,
            isApproved: r.is_approved !== false,
            commissionRate: r.commission_rate != null ? Number(r.commission_rate) : null,
            gender: r.gender || '',
            address: r.address || '',
            block_appeal_reason: r.block_appeal_reason || '',
            block_appeal_at:     r.block_appeal_at     || null,
            block_appeal_status: r.block_appeal_status || '',
            appeal_approved_at:  r.appeal_approved_at  || null };
}
function _userToDB(u) {
   const row = { name: u.name, email: (u.email || '').toLowerCase(),
            password: u.password || '', role: u.role || 'customer',
            phone: u.phone || '', store_name: u.storeName || '',
            store_type: u.storeType || '', blocked: u.blocked || false,
            is_admin: u.isAdmin || false, gender: u.gender || '' };
   // Only write is_approved when explicitly set by the caller, so partial updates
   // (e.g. profile edits) don't accidentally re-approve a pending partner.
   if (typeof u.isApproved === 'boolean') row.is_approved = u.isApproved;
   // commissionRate: null = "use global rate from settings"; number = per-partner override.
   // Only write if explicitly provided so partial updates don't wipe an existing override.
   if (u.commissionRate === null || typeof u.commissionRate === 'number') {
      row.commission_rate = u.commissionRate;
   }
   return row;
}
function _orderFromDB(r) {
   if (!r) return null;
   return { orderId: r.order_id, order_id: r.order_id,
            date: r.date, timestamp: r.timestamp,
            customerName: r.customer_name, customerEmail: r.customer_email,
            customerPhone: r.customer_phone, items: r.items,
            total: r.total, status: r.status, method: r.method,
            storeId: r.store_id, storeName: r.store_name,
            // New columns (Phase 2/3/4) — must read these back for the owner UI:
            store_provider_id: r.store_provider_id || null,
            prescription_url:  r.prescription_url  || null,
            delivery_address:  r.delivery_address  || null,
            payment_mode:      r.payment_mode      || 'COD',
            discount_pct:      r.discount_pct      || 0,
            bill_number:       r.bill_number       || null,
            walk_in:           !!r.walk_in,
            doctor_name:       r.doctor_name       || '',
            stock_deducted:    !!r.stock_deducted,
            pickup_override:   !!r.pickup_override };
}
function _orderToDB(o) {
   const row = { order_id: o.orderId || o.order_id,
            customer_name: o.customerName || '', customer_email: o.customerEmail || '',
            customer_phone: o.customerPhone || '', date: o.date || '',
            timestamp: o.timestamp || 0, items: o.items || [],
            total: o.total || 0, status: o.status || 'Pending Pickup',
            method: o.method || 'Pickup',
            store_id: o.storeId || null, store_name: o.storeName || '',
            // New columns (Phase 2/3/4) — must persist these or the DB row
            // ends up with default/null values (which broke owner visibility):
            store_provider_id: o.store_provider_id || null,
            prescription_url:  o.prescription_url  || null,
            delivery_address:  o.delivery_address  || null,
            payment_mode:      o.payment_mode      || 'COD',
            discount_pct:      typeof o.discount_pct === 'number' ? o.discount_pct : 0,
            bill_number:       o.bill_number       || null,
            walk_in:           !!o.walk_in,
            doctor_name:       o.doctor_name       || '' };
   // Only include stock_deducted when it's explicitly set (walk-in inserts).
   // Customer orders shouldn't send it — if the migration hasn't been run yet,
   // sending the column would make Supabase reject the entire insert.
   if (o.stock_deducted) row.stock_deducted = true;
   if (o.pickup_override) row.pickup_override = true;
   return row;
}

window.AppDB = {

   // ── USERS ────────────────────────────────────────────
   async getUsers() {
      const { data, error } = await _sb.from('users').select('*').order('created_at');
      if (error) { console.error('getUsers:', error.message); return []; }
      return (data || []).map(_userFromDB);
   },

   async getUserByEmail(email) {
      const { data, error } = await _sb.from('users').select('*')
         .eq('email', email.toLowerCase()).maybeSingle();
      if (error) { console.error('getUserByEmail:', error.message); return null; }
      return _userFromDB(data);
   },

   async upsertUser(user) {
      const row = _userToDB(user);
      const { error } = await _sb.from('users').upsert(row, { onConflict: 'email' });
      if (error) { console.error('upsertUser:', error.message); return false; }
      return true;
   },

   async updateUser(email, updates) {
      // Build a true partial patch — only include columns the caller explicitly set.
      // (The previous version ran updates through _userToDB which filled DEFAULTS for every
      // column and silently overwrote role/phone/etc when callers only wanted to flip one flag.)
      const mapping = {
         name: 'name', role: 'role', password: 'password', phone: 'phone',
         storeName: 'store_name', storeType: 'store_type', blocked: 'blocked',
         isAdmin: 'is_admin', isApproved: 'is_approved', gender: 'gender',
         commissionRate: 'commission_rate',
         address: 'address',
         // Block-appeal workflow
         block_appeal_reason: 'block_appeal_reason',
         block_appeal_at:     'block_appeal_at',
         block_appeal_status: 'block_appeal_status',
         appeal_approved_at:  'appeal_approved_at'
      };
      const patch = {};
      for (const jsKey in mapping) {
         if (Object.prototype.hasOwnProperty.call(updates, jsKey) && updates[jsKey] !== undefined) {
            patch[mapping[jsKey]] = updates[jsKey];
         }
      }
      if (Object.keys(patch).length === 0) return true;
      const { error } = await _sb.from('users').update(patch).eq('email', email.toLowerCase());
      if (error) { console.error('updateUser:', error.message); return false; }
      return true;
   },

   async deleteUserByEmail(email) {
      const { error } = await _sb.from('users').delete().eq('email', email.toLowerCase());
      if (error) { console.error('deleteUserByEmail:', error.message); return false; }
      return true;
   },

   // ── PRODUCTS ─────────────────────────────────────────
   async getStoreProducts(storeId) {
      const { data, error } = await _sb.from('products').select('*').eq('store_id', storeId);
      if (error) { console.error('getStoreProducts:', error.message); return []; }
      return data || [];
   },

   async getAllStoreProducts() {
      // Paginate to fetch all rows (Supabase default limit is 1000)
      const all = [];
      const pageSize = 1000;
      let from = 0;
      while (true) {
         const { data, error } = await _sb.from('products').select('*').range(from, from + pageSize - 1);
         if (error) { console.error('getAllStoreProducts:', error.message); break; }
         if (!data || data.length === 0) break;
         all.push(...data);
         if (data.length < pageSize) break;
         from += pageSize;
      }
      return all;
   },

   async upsertProduct(product) {
      const { error } = await _sb.from('products').upsert(product, { onConflict: 'id' });
      if (error) { console.error('upsertProduct:', error.message); return false; }
      return true;
   },

   // Bulk-upsert variant — used by the shop-owner "Bulk Add from Catalogue"
   // flow so N selected items go in via a single network round-trip.
   async bulkUpsertProducts(products) {
      if (!Array.isArray(products) || !products.length) return true;
      const { error } = await _sb.from('products').upsert(products, { onConflict: 'id' });
      if (error) { console.error('bulkUpsertProducts:', error.message); return false; }
      return true;
   },

   // ── INVENTORY BATCHES (Phase 1) ──────────────────────────
   // List all batches for a single product (used in the "Manage Stock" modal)
   async getBatchesForProduct(productId) {
      const { data, error } = await _sb.from('inventory_batches')
         .select('*').eq('product_id', productId)
         .order('expiry_date', { ascending: true, nullsFirst: false });
      if (error) { console.error('getBatchesForProduct:', error.message); return []; }
      return data || [];
   },

   // List all batches for a whole store (used for stock summary / customer badges)
   async getBatchesForStore(storeProviderId) {
      const { data, error } = await _sb.from('inventory_batches')
         .select('*').eq('store_provider_id', storeProviderId);
      if (error) { console.error('getBatchesForStore:', error.message); return []; }
      return data || [];
   },

   async upsertInventoryBatch(batch) {
      const row = {
         id:                batch.id,
         product_id:        batch.product_id,
         store_provider_id: batch.store_provider_id,
         batch_no:          batch.batch_no       || '',
         mfg_date:          batch.mfg_date       || null,
         expiry_date:       batch.expiry_date    || null,
         qty_received:      Number(batch.qty_received)   || 0,
         qty_remaining:     Number(batch.qty_remaining)  || 0,
         mrp:               Number(batch.mrp)            || 0,
         purchase_price:    Number(batch.purchase_price) || 0,
         notes:             batch.notes || '',
         updated_at:        new Date().toISOString()
      };
      const { error } = await _sb.from('inventory_batches').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertInventoryBatch:', error.message); return false; }
      return true;
   },

   async deleteInventoryBatch(id) {
      const { error } = await _sb.from('inventory_batches').delete().eq('id', id);
      if (error) { console.error('deleteInventoryBatch:', error.message); return false; }
      return true;
   },

   // ── PRESCRIPTIONS (Phase 8.1 EMR) ──
   async insertPrescription(p) {
      const norm = (p.patient_phone || '').replace(/\D/g, '').slice(-10);
      const row = {
         id:                 p.id,
         provider_id:        p.provider_id,
         doctor_id:          p.doctor_id || '',
         doctor_name:        p.doctor_name || '',
         doctor_speciality:  p.doctor_speciality || '',
         doctor_reg_no:      p.doctor_reg_no || '',
         appointment_id:     p.appointment_id || null,
         patient_phone:      p.patient_phone || '',
         patient_phone_norm: norm,
         patient_name:       p.patient_name || '',
         patient_age:        p.patient_age != null ? Number(p.patient_age) : null,
         patient_sex:        p.patient_sex || '',
         weight_kg:          p.weight_kg != null ? Number(p.weight_kg) : null,
         bp_systolic:        p.bp_systolic != null ? Number(p.bp_systolic) : null,
         bp_diastolic:       p.bp_diastolic != null ? Number(p.bp_diastolic) : null,
         pulse_bpm:          p.pulse_bpm != null ? Number(p.pulse_bpm) : null,
         temp_f:             p.temp_f != null ? Number(p.temp_f) : null,
         spo2:               p.spo2 != null ? Number(p.spo2) : null,
         diagnosis:          p.diagnosis || '',
         medicines:          p.medicines || [],
         advice:             p.advice || '',
         allergies:          p.allergies || '',
         follow_up_date:     p.follow_up_date || null,
         updated_at:         new Date().toISOString()
      };
      const { error } = await _sb.from('prescriptions').upsert(row, { onConflict: 'id' });
      if (error) { console.error('insertPrescription:', error.message); return false; }
      return true;
   },
   // Patient history at one hospital, newest first. Keyed by (provider, phone, name)
   // so a family sharing one phone number doesn't collide — each person sees only
   // their own visits. Name is matched on a normalized form (lowercased, single-spaced).
   async getPatientPrescriptionHistory(providerId, phone, name) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      if (!providerId || norm.length !== 10) return [];
      const { data, error } = await _sb.from('prescriptions').select('*')
         .eq('provider_id', providerId)
         .eq('patient_phone_norm', norm)
         .order('created_at', { ascending: false });
      if (error) { console.error('getPatientPrescriptionHistory:', error.message); return []; }
      const rows = data || [];
      const nameNorm = this._normalizeName(name);
      if (!nameNorm) return rows;
      return rows.filter(r => this._normalizeName(r.patient_name) === nameNorm);
   },

   async getPatientAdmissions(providerId, phone, name) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      if (!providerId || norm.length !== 10) return [];
      const { data, error } = await _sb.from('admissions')
         .select('id, patient_name, patient_phone, admit_date, target_discharge, status, ward, room_bed, notes, created_at')
         .eq('provider_id', providerId)
         .order('admit_date', { ascending: false });
      if (error) { console.error('getPatientAdmissions:', error.message); return []; }
      const rows = data || [];
      const nameNorm = this._normalizeName(name);
      return rows.filter(r => {
         const phoneMatch = (r.patient_phone || '').replace(/\D/g, '').slice(-10) === norm;
         const nameMatch = !nameNorm || this._normalizeName(r.patient_name) === nameNorm;
         return phoneMatch && nameMatch;
      });
   },

   async getPatientCompletedAppointments(providerId, phone, name) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      if (!providerId || norm.length !== 10) return [];
      const { data, error } = await _sb.from('appointments').select('id, date, slot, created_at, status, doctor_name, patient_phone, patient_name')
         .eq('provider_id', providerId)
         .eq('status', 'Completed')
         .order('created_at', { ascending: false });
      if (error) { console.error('getPatientCompletedAppointments:', error.message); return []; }
      const rows = data || [];
      const nameNorm = this._normalizeName(name);
      return rows.filter(r => {
         const phoneMatch = (r.patient_phone || '').replace(/\D/g, '').slice(-10) === norm;
         const nameMatch = !nameNorm || this._normalizeName(r.patient_name) === nameNorm;
         return phoneMatch && nameMatch;
      });
   },

   // Look up the prescription linked to one appointment, if it exists.
   // Used by the prescription modal so re-opening an already-written Rx
   // pre-fills the form for editing instead of starting blank.
   async getPrescriptionForAppointment(aptId) {
      if (!aptId) return null;
      const { data, error } = await _sb.from('prescriptions').select('*')
         .eq('appointment_id', aptId)
         .order('created_at', { ascending: false })
         .limit(1)
         .maybeSingle();
      if (error) { console.error('getPrescriptionForAppointment:', error.message); return null; }
      return data;
   },
   async getPrescriptionById(id) {
      const { data, error } = await _sb.from('prescriptions').select('*').eq('id', id).maybeSingle();
      if (error) { console.error('getPrescriptionById:', error.message); return null; }
      return data;
   },
   // Most recent non-empty allergies entry for this patient at this hospital.
   // Pulls from both admissions (known_allergies) and prescriptions (allergies)
   // and returns whichever was updated last — so the latest doctor-entered
   // value wins regardless of which workflow recorded it. 'NIL' is treated as
   // an explicit "no allergies" answer and returned so the UI can show a
   // green tick rather than a missing-data warning.
   async getPatientAllergies(providerId, phone, name) {
      const phoneNorm = (phone || '').replace(/\D/g, '').slice(-10);
      const nameNorm  = this._normalizeName(name);
      if (!providerId || !phoneNorm || !nameNorm) return null;

      // Admissions: filtered by provider only, then JS-side match on phone+name.
      // Hospitals are small enough that pulling all admissions for a provider
      // is cheap; the SQL ilike on phone strings of varied formats is not
      // reliable (+91 vs spaces vs dashes). Prescriptions are already keyed
      // on a normalized phone column so we can filter server-side.
      const [admR, rxR] = await Promise.all([
         _sb.from('admissions')
            .select('known_allergies,updated_at,patient_phone,patient_name')
            .eq('provider_id', providerId)
            .order('updated_at', { ascending: false }).limit(200),
         _sb.from('prescriptions')
            .select('allergies,updated_at,patient_name')
            .eq('provider_id', providerId)
            .eq('patient_phone_norm', phoneNorm)
            .order('updated_at', { ascending: false }).limit(20)
      ]);

      const candidates = [];
      (admR.data || []).forEach(r => {
         const rPhoneNorm = (r.patient_phone || '').replace(/\D/g, '').slice(-10);
         if (rPhoneNorm !== phoneNorm) return;
         if (this._normalizeName(r.patient_name) !== nameNorm) return;
         if (r.known_allergies && r.known_allergies.trim()) {
            candidates.push({ value: r.known_allergies.trim(), at: r.updated_at, src: 'admission' });
         }
      });
      (rxR.data || []).forEach(r => {
         if (this._normalizeName(r.patient_name) !== nameNorm) return;
         if (r.allergies && r.allergies.trim()) {
            candidates.push({ value: r.allergies.trim(), at: r.updated_at, src: 'prescription' });
         }
      });
      if (!candidates.length) return null;
      candidates.sort((a, b) => new Date(b.at) - new Date(a.at));
      return candidates[0];
   },

   // Customer-side: all prescriptions across hospitals for a customer's phone.
   async getMyPrescriptions(phone) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      if (norm.length !== 10) return [];
      const { data, error } = await _sb.from('prescriptions').select('*')
         .eq('patient_phone_norm', norm)
         .order('created_at', { ascending: false });
      if (error) { console.error('getMyPrescriptions:', error.message); return []; }
      return data || [];
   },

   // ── PATIENT NOTES (Phase 8.2) — append-only doctor/staff journal ──
   async addPatientNote(n) {
      const phoneNorm = (n.patient_phone || '').replace(/\D/g, '').slice(-10);
      const nameNorm  = this._normalizeName(n.patient_name);
      if (!n.provider_id || !phoneNorm || !nameNorm || !n.note) return false;
      const row = {
         id:                 'pn_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
         provider_id:        n.provider_id,
         patient_phone_norm: phoneNorm,
         patient_name:       n.patient_name || '',
         patient_name_norm:  nameNorm,
         author_email:       n.author_email || '',
         author_name:        n.author_name || '',
         note:               n.note
      };
      const { error } = await _sb.from('patient_notes').insert(row);
      if (error) { console.error('addPatientNote:', error.message); return false; }
      return true;
   },
   async getPatientNotes(providerId, phone, name) {
      const phoneNorm = (phone || '').replace(/\D/g, '').slice(-10);
      const nameNorm  = this._normalizeName(name);
      if (!providerId || !phoneNorm || !nameNorm) return [];
      const { data, error } = await _sb.from('patient_notes').select('*')
         .eq('provider_id', providerId)
         .eq('patient_phone_norm', phoneNorm)
         .eq('patient_name_norm', nameNorm)
         .order('created_at', { ascending: false });
      if (error) { console.error('getPatientNotes:', error.message); return []; }
      return data || [];
   },

   // ── HOSPITAL PATIENT IDS (Phase 7.1) ──
   // Returns the existing ID for this (provider, phone, NAME), or mints +
   // persists a new one. Called only when the patient ACTUALLY PAYS
   // (is_paid flipped) OR when admitting a brand-new walk-in. No-show
   // bookings don't get an ID. Same phone + same name = same ID forever
   // (return visits reuse it). Different name on same phone = different ID
   // (family sharing a phone gets distinct IDs).
   _normalizeName(name) {
      return (name || '').toLowerCase().trim().replace(/\s+/g, ' ');
   },
   async ensureHospitalPatientId(providerId, phone, sampleName) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      const nameNorm = this._normalizeName(sampleName);
      if (!providerId || norm.length !== 10 || !nameNorm) return null;
      // Look up existing
      const { data: existing } = await _sb.from('hospital_patient_ids')
         .select('patient_id')
         .eq('provider_id', providerId)
         .eq('phone_normalized', norm)
         .eq('name_normalized', nameNorm)
         .maybeSingle();
      if (existing && existing.patient_id) return existing.patient_id;
      // Mint a new one. Sequence is scoped to THIS MONTH at this hospital, so
      // each month starts at 00001 and stays visually compact. Different months
      // can repeat numbers — IDs stay unique because the month is part of the ID.
      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(),     1).toISOString();
      const monthEnd   = new Date(now.getFullYear(), now.getMonth() + 1, 1).toISOString();
      const { data: maxRow } = await _sb.from('hospital_patient_ids')
         .select('seq')
         .eq('provider_id', providerId)
         .gte('created_at', monthStart)
         .lt('created_at',  monthEnd)
         .order('seq', { ascending: false })
         .limit(1)
         .maybeSingle();
      const seq = (maxRow && maxRow.seq ? maxRow.seq : 0) + 1;
      // Build a hospital prefix from the provider name.
      const { data: prov } = await _sb.from('apt_providers')
         .select('name').eq('id', providerId).maybeSingle();
      const provName = prov && prov.name ? prov.name : 'HOSP';
      const initials = provName.split(/\s+/).filter(Boolean)
         .map(w => w[0].toUpperCase()).slice(0, 3).join('') || 'H';
      const yy = String(now.getFullYear()).slice(2);
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      // Format: INITIALS-YY-MM-SEQ. 5-digit pad supports 99,999 patients per
      // month before extending. Plenty for any real hospital.
      const patientId = initials + '-' + yy + '-' + mm + '-' + String(seq).padStart(5, '0');
      const { error } = await _sb.from('hospital_patient_ids').insert({
         provider_id: providerId,
         phone_normalized: norm,
         name_normalized: nameNorm,
         patient_id: patientId,
         seq: seq,
         sample_name: sampleName || ''
      });
      if (error) {
         // Race condition fallback: another tab inserted at the same time → re-read
         const { data: race } = await _sb.from('hospital_patient_ids')
            .select('patient_id')
            .eq('provider_id', providerId)
            .eq('phone_normalized', norm)
            .eq('name_normalized', nameNorm)
            .maybeSingle();
         return race ? race.patient_id : null;
      }
      return patientId;
   },

   // Read-only lookup — used by the Admit modal blur pre-fill. Requires
   // BOTH phone and name now (since IDs are keyed per person, not per phone).
   async getPatientByPatientId(providerId, patientId) {
      if (!providerId || !patientId) return null;
      const { data } = await _sb.from('hospital_patient_ids')
         .select('phone_normalized, name_normalized')
         .eq('provider_id', providerId)
         .eq('patient_id', patientId.trim().toUpperCase())
         .maybeSingle();
      return data || null;
   },

   async getHospitalPatientId(providerId, phone, name) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      const nameNorm = this._normalizeName(name);
      if (!providerId || norm.length !== 10 || !nameNorm) return null;
      const { data } = await _sb.from('hospital_patient_ids')
         .select('patient_id')
         .eq('provider_id', providerId)
         .eq('phone_normalized', norm)
         .eq('name_normalized', nameNorm)
         .maybeSingle();
      return data ? data.patient_id : null;
   },

   // Bulk-fetch every patient_id row for a set of provider IDs. Used by the
   // Out-patients list to attach the hospital ID column without N round trips.
   // Returns a map keyed by `${provider_id}|${phone_normalized}|${name_normalized}`.
   async getPatientIdsByPhone(phone) {
      const norm = (phone || '').replace(/\D/g, '').slice(-10);
      if (norm.length !== 10) return [];
      const { data, error } = await _sb.from('hospital_patient_ids')
         .select('provider_id, patient_id, sample_name')
         .eq('phone_normalized', norm);
      if (error) { console.error('getPatientIdsByPhone:', error.message); return []; }
      return data || [];
   },

   async getHospitalPatientIdMap(providerIds) {
      if (!providerIds || !providerIds.length) return {};
      const { data, error } = await _sb.from('hospital_patient_ids')
         .select('provider_id, phone_normalized, name_normalized, patient_id')
         .in('provider_id', providerIds);
      if (error) { console.error('getHospitalPatientIdMap:', error.message); return {}; }
      const map = {};
      (data || []).forEach(r => {
         map[r.provider_id + '|' + r.phone_normalized + '|' + (r.name_normalized || '')] = r.patient_id;
      });
      return map;
   },

   // Used by the Admit modal lookup. Scoped to ONE hospital — a patient at
   // hospital A isn't relevant when admitting at hospital B. Returns up to
   // 10 distinct paid+completed out-patients whose name / phone / email
   // matches the query. Filtering happens in JS so the search just works,
   // no ilike / or-filter quirks.
   // Uses the EXACT same data path as the Out-patients view
   // (getAppointmentsByOwner). After fetching, narrows to the current
   // hospital in JS. This guarantees anything visible in Out-patients is
   // reachable here. Logs make any provider_id mismatch loud.
   async lookupOutpatientsForAdmit(providerId, ownerEmail, query) {
      if (!providerId || !ownerEmail || !query || query.length < 2) return [];
      const q = query.toLowerCase().trim();
      const all = await this.getAppointmentsByOwner(ownerEmail);
      const here = (all || []).filter(r => r.provider_id === providerId);
      const paid = here.filter(r => r.status === 'Completed' && (r.is_paid === true || r.is_paid === 'true' || r.is_paid === 1));
      // Keep the mismatch warning — it's a real data-integrity signal worth
      // surfacing if it ever fires (hospital recreated, stale provider_id, etc.)
      if (here.length === 0 && (all || []).length > 0) {
         const distinctIds = Array.from(new Set((all || []).map(a => a.provider_id)));
         console.warn('[admit-lookup] ⚠ provider_id mismatch — owner has apts on:', distinctIds,
                      '· but Admit modal is set to:', providerId);
      }
      const matches = paid.filter(r => {
         const name  = (r.patient_name  || '').toLowerCase();
         const phone = (r.patient_phone || '').toLowerCase();
         const email = (r.user_email    || '').toLowerCase();
         return name.indexOf(q)  !== -1 ||
                phone.indexOf(q) !== -1 ||
                email.indexOf(q) !== -1;
      });
      // Dedup key = phone + name (lowercased). Same phone shared by a family
      // (e.g. spouse + kids) is normal in India — different names under the
      // same number must stay as separate entries, not collapse into one.
      const seen = {};
      const out  = [];
      matches.forEach(r => {
         const phone = (r.patient_phone || r.user_email || '').toLowerCase().trim();
         const name  = (r.patient_name  || '').toLowerCase().trim();
         const key   = phone + '|' + name;
         if (key === '|' || seen[key]) return;
         seen[key] = true;
         out.push(r);
      });
      return out.slice(0, 10);
   },

   // ── ADMISSIONS (Phase 7) — inpatient tracking per hospital ──
   async getAdmissions(providerId) {
      const { data, error } = await _sb.from('admissions').select('*')
         .eq('provider_id', providerId)
         .order('created_at', { ascending: false });
      if (error) { console.error('getAdmissions:', error.message); return []; }
      return data || [];
   },
   async getAdmissionById(admissionId) {
      const { data, error } = await _sb.from('admissions').select('*').eq('id', admissionId).maybeSingle();
      if (error) { console.error('getAdmissionById:', error.message); return null; }
      return data;
   },

   // Admin-wide: every admission across every hospital. Used by the
   // admin panel's "All Admissions" sub-tab for oversight.
   async getAllAdmissions() {
      const { data, error } = await _sb.from('admissions').select('*')
         .order('created_at', { ascending: false });
      if (error) { console.error('getAllAdmissions:', error.message); return []; }
      return data || [];
   },
   async upsertAdmission(a) {
      const row = {
         id:                 a.id,
         provider_id:        a.provider_id,
         patient_name:       a.patient_name || '',
         patient_phone:      a.patient_phone || '',
         patient_ref:        a.patient_ref || '',
         ward:               a.ward || '',
         room_bed:           a.room_bed || '',
         admit_date:         a.admit_date,
         target_discharge:   a.target_discharge || null,
         status:             a.status || 'Admitted',
         rounds_status:      a.rounds_status || 'pending',
         notes:              a.notes || '',
         // Phase 7.2 extended fields (in-patient only)
         doctor_name:        a.doctor_name || '',
         planned_procedure:  a.planned_procedure || '',
         patient_email:      a.patient_email || '',
         dob:                a.dob || null,
         gender:             a.gender || '',
         marital_status:     a.marital_status || '',
         employment_status:  a.employment_status || '',
         guardian_name:      a.guardian_name || '',
         guardian_relation:  a.guardian_relation || '',
         guardian_phone:     a.guardian_phone || '',
         address:            a.address || '',
         city:               a.city || '',
         postal_code:        a.postal_code || '',
         // Phase 8.3 — launch-ready intake fields
         admission_type:       a.admission_type || 'Planned',
         chief_complaint:      a.chief_complaint || '',
         known_allergies:      a.known_allergies || '',
         current_medications:  a.current_medications || '',
         past_medical_history: a.past_medical_history || '',
         id_proof_type:        a.id_proof_type || '',
         id_proof_number:      a.id_proof_number || '',
         room_category:        a.room_category || '',
         payment_mode:         a.payment_mode || '',
         tpa_name:             a.tpa_name || '',
         tpa_card_no:          a.tpa_card_no || '',
         mlc:                  !!a.mlc,
         mlc_number:           a.mlc_number || '',
         admit_time:           a.admit_time || '',
         discharge_time:       a.discharge_time || '',
         admission_source:     a.admission_source || '',
         referring_doctor:     a.referring_doctor || '',
         referring_hospital:   a.referring_hospital || '',
         bp_systolic:          a.bp_systolic || null,
         bp_diastolic:         a.bp_diastolic || null,
         pulse_bpm:            a.pulse_bpm || null,
         temp_f:               a.temp_f || null,
         spo2:                 a.spo2 || null,
         weight_kg:            a.weight_kg || null,
         height_cm:            a.height_cm || null,
         rbs_mg_dl:            a.rbs_mg_dl || null,
         provisional_diagnosis: a.provisional_diagnosis || '',
         surgical_history:     a.surgical_history || '',
         social_tobacco:       a.social_tobacco || '',
         social_alcohol:       a.social_alcohol || '',
         obstetric_lmp:        a.obstetric_lmp || null,
         obstetric_gpla:       a.obstetric_gpla || '',
         blood_group:          a.blood_group || '',
         religion:             a.religion || '',
         state:                a.state || '',
         emergency2_name:      a.emergency2_name || '',
         emergency2_relation:  a.emergency2_relation || '',
         emergency2_phone:     a.emergency2_phone || '',
         consent_general:      !!a.consent_general,
         consent_dpdp:         !!a.consent_dpdp,
         bed_id:               a.bed_id || '',
         updated_at:         new Date().toISOString()
      };
      const { error } = await _sb.from('admissions').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertAdmission:', error.message); return false; }
      return true;
   },
   async patchAdmission(id, patch) {
      patch.updated_at = new Date().toISOString();
      const { error } = await _sb.from('admissions').update(patch).eq('id', id);
      if (error) { console.error('patchAdmission:', error.message); return false; }
      return true;
   },
   async deleteAdmission(id) {
      const { error } = await _sb.from('admissions').delete().eq('id', id);
      if (error) { console.error('deleteAdmission:', error.message); return false; }
      return true;
   },

   // ── ADMISSION_PAYMENTS (Phase 8.3) — deposits / advances / refunds.
   //    Receipt numbers are sequential per hospital; we mint by SELECT max+1
   //    and rely on the (provider_id, receipt_seq) UNIQUE constraint to catch
   //    races — on conflict we retry up to 5 times before bailing out.
   async addAdmissionPayment(p) {
      if (!p.provider_id || !p.admission_id || p.amount == null) return null;
      // 2-letter hospital prefix for receipt number (e.g. "Apollo" → "AP")
      const { data: provRow } = await _sb.from('apt_providers').select('name').eq('id', p.provider_id).maybeSingle();
      const hospPrefix = provRow && provRow.name
         ? provRow.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
         : 'RC';
      for (let attempt = 0; attempt < 5; attempt++) {
         const { data: maxRow } = await _sb.from('admission_payments')
            .select('receipt_seq').eq('provider_id', p.provider_id)
            .order('receipt_seq', { ascending: false }).limit(1).maybeSingle();
         const nextSeq = (maxRow && maxRow.receipt_seq ? maxRow.receipt_seq : 0) + 1;
         const yy = String(new Date().getFullYear()).slice(-2);
         const receiptNo = hospPrefix + '-' + yy + '-' + String(nextSeq).padStart(5, '0');
         const id = 'pay_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
         const row = {
            id,
            provider_id:  p.provider_id,
            admission_id: p.admission_id,
            receipt_seq:  nextSeq,
            receipt_no:   receiptNo,
            amount:       Number(p.amount),
            payment_mode: p.payment_mode || 'Cash',
            txn_ref:      p.txn_ref || '',
            received_by:  p.received_by || '',
            notes:        p.notes || ''
         };
         const { error } = await _sb.from('admission_payments').insert(row);
         if (!error) return { ...row, paid_at: new Date().toISOString() };
         if (error.code !== '23505') { console.error('addAdmissionPayment:', error.message); return null; }
         // 23505 = unique violation on receipt_seq — another tab won the race; retry
      }
      console.error('addAdmissionPayment: too many races minting receipt no.');
      return null;
   },
   async getAdmissionPaymentsByProvider(providerId) {
      if (!providerId) return [];
      const { data, error } = await _sb.from('admission_payments').select('*')
         .eq('provider_id', providerId)
         .order('paid_at', { ascending: false });
      if (error) { console.error('getAdmissionPaymentsByProvider:', error.message); return []; }
      return data || [];
   },

   async getAdmissionPayments(admissionId) {
      const { data, error } = await _sb.from('admission_payments').select('*')
         .eq('admission_id', admissionId)
         .order('paid_at', { ascending: false });
      if (error) { console.error('getAdmissionPayments:', error.message); return []; }
      return data || [];
   },
   async getAdmissionPaymentById(id) {
      const { data, error } = await _sb.from('admission_payments').select('*').eq('id', id).maybeSingle();
      if (error) { console.error('getAdmissionPaymentById:', error.message); return null; }
      return data;
   },

   // ── DISCHARGE_SUMMARIES (Phase 8.3) — one row per admission.
   async getDischargeSummary(admissionId) {
      const { data, error } = await _sb.from('discharge_summaries').select('*')
         .eq('admission_id', admissionId).maybeSingle();
      if (error) { console.error('getDischargeSummary:', error.message); return null; }
      return data;
   },
   // ── IP BILLS (Phase 8.3) — itemized in-patient bill at discharge.
   //    Bill numbers are sequential per hospital — same retry-on-conflict
   //    pattern as admission_payments. Items are replaced on every save
   //    (delete-then-insert) so the doctor can freely add/remove lines
   //    without us tracking individual diffs.
   async getIpBillsByProvider(providerId) {
      const { data, error } = await _sb.from('ip_bills').select('*')
         .eq('provider_id', providerId)
         .order('bill_date', { ascending: false });
      if (error) { console.error('getIpBillsByProvider:', error.message); return []; }
      return data || [];
   },
   async getIpBill(admissionId) {
      const { data, error } = await _sb.from('ip_bills').select('*')
         .eq('admission_id', admissionId).maybeSingle();
      if (error) { console.error('getIpBill:', error.message); return null; }
      return data;
   },
   async getIpBillById(billId) {
      const { data, error } = await _sb.from('ip_bills').select('*').eq('id', billId).maybeSingle();
      if (error) { console.error('getIpBillById:', error.message); return null; }
      return data;
   },
   async settleIpBill(billId, extraAmount, paymentMode, txnRef) {
      const bill = await this.getIpBillById(billId);
      if (!bill) return null;
      const newAdvance = Number(bill.advance_paid || 0) + Number(extraAmount);
      const newNetPayable = Math.max(0, Number(bill.net_payable || 0) - Number(extraAmount));
      const patch = {
         advance_paid: newAdvance,
         net_payable:  newNetPayable,
         status:       'Issued',
         updated_at:   new Date().toISOString()
      };
      const { data, error } = await _sb.from('ip_bills').update(patch).eq('id', billId).select().maybeSingle();
      if (error) { console.error('settleIpBill:', error.message); return null; }
      // Record as a payment entry so it appears in receipt history
      await this.addAdmissionPayment({
         provider_id:  bill.provider_id,
         admission_id: bill.admission_id,
         amount:       extraAmount,
         payment_mode: paymentMode,
         txn_ref:      txnRef || '',
         notes:        'Balance payment against bill ' + (bill.bill_no || billId)
      });
      return data;
   },
   async getIpBillItems(billId) {
      const { data, error } = await _sb.from('ip_bill_items').select('*')
         .eq('bill_id', billId)
         .order('sort_order', { ascending: true });
      if (error) { console.error('getIpBillItems:', error.message); return []; }
      return data || [];
   },
   async upsertIpBill(b, items) {
      if (!b.provider_id || !b.admission_id || !b.bill_date) return null;
      let existing = await this.getIpBill(b.admission_id);
      let billId, billSeq, billNo;
      if (existing) {
         billId  = existing.id;
         billSeq = existing.bill_seq;
         billNo  = existing.bill_no;
      } else {
         // Derive 2-letter hospital prefix from provider name (e.g. "Apollo" → "AP")
         const { data: provRow } = await _sb.from('apt_providers').select('name').eq('id', b.provider_id).maybeSingle();
         const hospPrefix = provRow && provRow.name
            ? provRow.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
            : 'BL';
         // Mint a new sequential bill no — retry on UNIQUE conflict.
         for (let attempt = 0; attempt < 5; attempt++) {
            const { data: maxRow } = await _sb.from('ip_bills')
               .select('bill_seq').eq('provider_id', b.provider_id)
               .order('bill_seq', { ascending: false }).limit(1).maybeSingle();
            const nextSeq = (maxRow && maxRow.bill_seq ? maxRow.bill_seq : 0) + 1;
            const yy = String(new Date().getFullYear()).slice(-2);
            const candidateNo = hospPrefix + '-' + yy + '-' + String(nextSeq).padStart(5, '0');
            billId  = 'bill_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
            billSeq = nextSeq;
            billNo  = candidateNo;
            const { error: insErr } = await _sb.from('ip_bills').insert({
               id: billId, provider_id: b.provider_id, admission_id: b.admission_id,
               bill_seq: billSeq, bill_no: billNo, bill_date: b.bill_date,
               subtotal: 0, status: 'Draft', net_payable: 0
            });
            if (!insErr) { existing = { id: billId }; break; }
            if (insErr.code !== '23505') { console.error('upsertIpBill insert:', insErr.message); return null; }
            // race; retry
         }
         if (!existing) { console.error('upsertIpBill: too many races minting bill no.'); return null; }
      }

      // Update bill header
      const headerPatch = {
         bill_date:    b.bill_date,
         subtotal:     Number(b.subtotal     || 0),
         discount_pct: Number(b.discount_pct || 0),
         discount_amt: Number(b.discount_amt || 0),
         gst_total:    Number(b.gst_total    || 0),
         advance_paid: Number(b.advance_paid || 0),
         round_off:    Number(b.round_off    || 0),
         net_payable:  Number(b.net_payable  || 0),
         status:       b.status || 'Draft',
         notes:        b.notes  || '',
         updated_at:   new Date().toISOString()
      };
      if (b.status === 'Issued' && !existing.issued_at) headerPatch.issued_at = new Date().toISOString();
      const { error: updErr } = await _sb.from('ip_bills').update(headerPatch).eq('id', billId);
      if (updErr) { console.error('upsertIpBill update:', updErr.message); return null; }

      // Replace items — delete then bulk-insert
      const { error: delErr } = await _sb.from('ip_bill_items').delete().eq('bill_id', billId);
      if (delErr) { console.error('upsertIpBill delete items:', delErr.message); return null; }
      if (Array.isArray(items) && items.length) {
         const rows = items.map((it, idx) => ({
            id:           'bi_' + Date.now().toString(36) + '_' + idx + Math.random().toString(36).slice(2, 4),
            bill_id:      billId,
            provider_id:  b.provider_id,
            sort_order:   idx,
            category:     it.category || 'Other',
            description:  it.description || '',
            hsn_sac:      it.hsn_sac || '',
            qty:          Number(it.qty || 1),
            rate:         Number(it.rate || 0),
            gst_pct:      Number(it.gst_pct || 0),
            amount:       Number(it.amount || 0),
            gst_amt:      Number(it.gst_amt || 0),
            total:        Number(it.total || 0)
         }));
         const { error: insItemsErr } = await _sb.from('ip_bill_items').insert(rows);
         if (insItemsErr) { console.error('upsertIpBill insert items:', insItemsErr.message); return null; }
      }
      return { id: billId, bill_no: billNo, bill_seq: billSeq };
   },

   async upsertDischargeSummary(s) {
      if (!s.provider_id || !s.admission_id || !s.discharge_date) return false;
      const existing = await this.getDischargeSummary(s.admission_id);
      const id = (existing && existing.id) || ('ds_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
      const row = {
         id,
         provider_id:            s.provider_id,
         admission_id:           s.admission_id,
         final_diagnosis:        s.final_diagnosis || '',
         course_in_hospital:     s.course_in_hospital || '',
         investigations_summary: s.investigations_summary || '',
         treatment_given:        s.treatment_given || '',
         condition_at_discharge: s.condition_at_discharge || 'Stable',
         discharge_medications:  s.discharge_medications || '',
         follow_up_advice:       s.follow_up_advice || '',
         follow_up_date:         s.follow_up_date || null,
         discharge_date:         s.discharge_date,
         doctor_name:            s.doctor_name || '',
         doctor_reg_no:          s.doctor_reg_no || '',
         doctor_speciality:      s.doctor_speciality || '',
         dama_risks_explained:   s.dama_risks_explained || '',
         dama_reason_given:      s.dama_reason_given || '',
         daily_notes:            s.daily_notes !== undefined ? s.daily_notes : [],
         updated_at:             new Date().toISOString()
      };
      const { error } = await _sb.from('discharge_summaries').upsert(row, { onConflict: 'admission_id' });
      if (error) { console.error('upsertDischargeSummary:', error.message); return false; }
      return true;
   },

   // ── WALK-IN CUSTOMERS (Phase 4) ──────────────────────────
   // Strip everything that isn't a digit, then keep only the last 10. This
   // makes "+91 98765 43210", "9876543210", "(987) 654-3210", "91-9876543210"
   // all resolve to the same key.
   _normalizePhone(p) {
      return (p || '').replace(/\D/g, '').slice(-10);
   },

   // Look up an existing walk-in customer by phone (so the owner can recall a
   // repeat customer's name + bill history). Returns null if not found.
   async findWalkinByPhone(storeProviderId, phone) {
      const norm = this._normalizePhone(phone);
      if (norm.length < 10) return null;   // not enough digits to be confident
      const { data, error } = await _sb.from('walkin_customers')
         .select('*')
         .eq('store_provider_id', storeProviderId)
         .eq('phone_normalized', norm)
         .limit(1);
      if (error) { console.error('findWalkinByPhone:', error.message); return null; }
      return (data && data[0]) || null;
   },

   // Fetch this store's walk-in bills for a single customer (by normalized
   // phone OR by case-insensitive name). Returns a list of orders newest-first,
   // capped at 10 — used by the "previous orders available" banner so the
   // cashier can repeat a prior bill in one click.
   async findWalkinOrders(storeProviderId, { phone, name } = {}) {
      const norm = this._normalizePhone(phone);
      let q = _sb.from('orders').select('*')
         .eq('store_provider_id', storeProviderId)
         .eq('walk_in', true)
         .order('created_at', { ascending: false })
         .limit(10);
      if (norm && norm.length === 10) {
         // Phone is the high-confidence signal — match in JS after fetch since
         // orders.customer_phone may be stored in mixed formats (older rows).
      } else if (name && name.length >= 3) {
         q = q.ilike('customer_name', '%' + name.replace(/[%_]/g, '\\$&') + '%');
      } else {
         return [];
      }
      const { data, error } = await q;
      if (error) { console.error('findWalkinOrders:', error.message); return []; }
      let rows = (data || []).map(_orderFromDB);
      if (norm && norm.length === 10) {
         rows = rows.filter(o => (o.customerPhone || '').replace(/\D/g, '').slice(-10) === norm);
      }
      return rows;
   },

   // Insert a walk-in customer (called only when phone is provided and the
   // customer doesn't already exist). Returns the inserted row.
   async upsertWalkinCustomer(c) {
      const row = {
         id:                c.id,
         store_provider_id: c.store_provider_id,
         name:              c.name  || '',
         phone:             c.phone || '',
         phone_normalized:  this._normalizePhone(c.phone)
      };
      const { error } = await _sb.from('walkin_customers').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertWalkinCustomer:', error.message); return false; }
      return true;
   },

   async deleteProduct(id) {
      const { error } = await _sb.from('products').delete().eq('id', id);
      if (error) { console.error('deleteProduct:', error.message); return false; }
      return true;
   },

   async deleteStoreProducts(storeId) {
      const { error } = await _sb.from('products').delete().eq('store_id', storeId);
      if (error) { console.error('deleteStoreProducts:', error.message); return false; }
      return true;
   },

   // ── PRODUCT OVERRIDES ────────────────────────────────
   async getProductOverrides() {
      const { data, error } = await _sb.from('product_overrides').select('*');
      if (error) { console.error('getProductOverrides:', error.message); return {}; }
      // Convert to object keyed by item_id  (same shape as old adminProductOverrides)
      const obj = {};
      (data || []).forEach(function(r) {
         obj[r.item_id] = {
            name: r.name, price: r.price, desc: r.description,
            badge: r.badge, img: r.image,
            storeId: r.store_id, storeName: r.store_name,
            variants: r.variants
         };
      });
      return obj;
   },

   async upsertProductOverride(itemId, ov) {
      const row = {
         item_id:     itemId,
         name:        ov.name        || null,
         price:       ov.price       != null ? ov.price : null,
         description: ov.desc        || null,
         badge:       ov.badge       || null,
         image:       ov.img         || null,
         store_id:    ov.storeId     || null,
         store_name:  ov.storeName   || null,
         variants:    ov.variants    || null,
         updated_at:  new Date().toISOString()
      };
      const { error } = await _sb.from('product_overrides').upsert(row, { onConflict: 'item_id' });
      if (error) { console.error('upsertProductOverride:', error.message); return false; }
      return true;
   },

   async deleteProductOverride(itemId) {
      const { error } = await _sb.from('product_overrides').delete().eq('item_id', itemId);
      if (error) { console.error('deleteProductOverride:', error.message); return false; }
      return true;
   },

   async deleteStoreOverrides(storeId) {
      const { error } = await _sb.from('product_overrides').delete().eq('store_id', storeId);
      if (error) { console.error('deleteStoreOverrides:', error.message); return false; }
      return true;
   },

   // ── ORDERS ───────────────────────────────────────────
   async getAllOrders() {
      const { data, error } = await _sb.from('orders').select('*')
         .order('created_at', { ascending: false });
      if (error) { console.error('getAllOrders:', error.message); return []; }
      return (data || []).map(_orderFromDB);
   },

   async getOrdersByCustomer(email) {
      const { data, error } = await _sb.from('orders').select('*')
         .eq('customer_email', email.toLowerCase())
         .order('created_at', { ascending: false });
      if (error) { console.error('getOrdersByCustomer:', error.message); return []; }
      return (data || []).map(_orderFromDB);
   },

   async getOrdersByStore(storeId) {
      let q = _sb.from('orders').select('*').order('created_at', { ascending: false });
      q = storeId === null ? q.is('store_id', null) : q.eq('store_id', storeId);
      const { data, error } = await q;
      if (error) { console.error('getOrdersByStore:', error.message); return []; }
      return (data || []).map(_orderFromDB);
   },

   async insertOrder(order) {
      const row = _orderToDB(order);
      const { error } = await _sb.from('orders').insert(row);
      if (error) { console.error('insertOrder:', error.message); return false; }
      return true;
   },

   async updateOrderStatus(orderId, status) {
      const { error } = await _sb.from('orders').update({ status }).eq('order_id', orderId);
      if (error) { console.error('updateOrderStatus:', error.message); return false; }
      return true;
   },

   // Generic order patch — used by the shop-owner bill flow to update items,
   // total, discount, and bill_number atomically.
   async patchOrder(orderId, patch) {
      const { error } = await _sb.from('orders').update(patch).eq('order_id', orderId);
      if (error) { console.error('patchOrder:', error.message); return false; }
      return true;
   },

   async deleteOrder(orderId) {
      const { error } = await _sb.from('orders').delete().eq('order_id', orderId);
      if (error) { console.error('deleteOrder:', error.message); return false; }
      return true;
   },

   async deleteCustomerOrders(email) {
      const { error } = await _sb.from('orders').delete()
         .eq('customer_email', email.toLowerCase());
      if (error) { console.error('deleteCustomerOrders:', error.message); return false; }
      return true;
   },

   // ── ADDRESSES ────────────────────────────────────────
   async getAddresses(email) {
      const { data, error } = await _sb.from('addresses').select('*')
         .eq('user_email', email.toLowerCase()).order('created_at');
      if (error) { console.error('getAddresses:', error.message); return []; }
      return data || [];
   },

   async upsertAddress(address) {
      const { error } = await _sb.from('addresses').upsert(address, { onConflict: 'id' });
      if (error) { console.error('upsertAddress:', error.message); return false; }
      return true;
   },

   async deleteAddress(id) {
      const { error } = await _sb.from('addresses').delete().eq('id', id);
      if (error) { console.error('deleteAddress:', error.message); return false; }
      return true;
   },

   async deleteUserAddresses(email) {
      const { error } = await _sb.from('addresses').delete().eq('user_email', email.toLowerCase());
      if (error) { console.error('deleteUserAddresses:', error.message); return false; }
      return true;
   },

   // ── CARDS ────────────────────────────────────────────
   async getCards(email) {
      const { data, error } = await _sb.from('cards').select('*')
         .eq('user_email', email.toLowerCase()).order('created_at');
      if (error) { console.error('getCards:', error.message); return []; }
      // Map DB columns → app fields (id, last4, brand, expiry, name_on_card)
      return (data || []).map(function(c) {
         return {
            id:          c.id,
            user_email:  c.user_email,
            last4:       c.last4 || '',
            brand:       c.brand || '',
            expiry:      c.expiry || '',
            name_on_card: c.name_on_card || ''
         };
      });
   },

   async insertCard(card) {
      // Only send columns that exist in the DB (after migrate.sql is run)
      const row = {
         id:           card.id           || undefined,
         user_email:   card.user_email,
         last4:        card.last4        || '',
         brand:        card.brand        || '',
         expiry:       card.expiry       || '',
         name_on_card: card.name_on_card || card.nameOnCard || ''
      };
      const { error } = await _sb.from('cards').insert(row);
      if (error) { console.error('insertCard:', error.message); return false; }
      return true;
   },

   async deleteCard(id) {
      const { error } = await _sb.from('cards').delete().eq('id', id);
      if (error) { console.error('deleteCard:', error.message); return false; }
      return true;
   },

   async deleteUserCards(email) {
      const { error } = await _sb.from('cards').delete().eq('user_email', email.toLowerCase());
      if (error) { console.error('deleteUserCards:', error.message); return false; }
      return true;
   },

   // ── WISHLIST ─────────────────────────────────────────
   async getWishlist(email) {
      const { data, error } = await _sb.from('wishlist').select('item_id')
         .eq('user_email', email.toLowerCase());
      if (error) { console.error('getWishlist:', error.message); return []; }
      return (data || []).map(function(r) { return r.item_id; });
   },

   async addToWishlist(email, itemId) {
      const { error } = await _sb.from('wishlist')
         .upsert({ user_email: email.toLowerCase(), item_id: itemId },
                 { onConflict: 'user_email,item_id' });
      if (error) { console.error('addToWishlist:', error.message); return false; }
      return true;
   },

   async removeFromWishlist(email, itemId) {
      const { error } = await _sb.from('wishlist').delete()
         .eq('user_email', email.toLowerCase()).eq('item_id', itemId);
      if (error) { console.error('removeFromWishlist:', error.message); return false; }
      return true;
   },

   async deleteUserWishlist(email) {
      const { error } = await _sb.from('wishlist').delete()
         .eq('user_email', email.toLowerCase());
      if (error) { console.error('deleteUserWishlist:', error.message); return false; }
      return true;
   },

   // ── APPOINTMENTS ─────────────────────────────────────
   async getAppointments(email) {
      const { data, error } = await _sb.from('appointments').select('*')
         .eq('user_email', email.toLowerCase())
         .order('created_at', { ascending: false });
      if (error) { console.error('getAppointments:', error.message); return []; }
      return data || [];
   },

   // Customer-side "live queue" widget needs to know the token/status of
   // OTHER patients booked today at the same provider — but NOT their names,
   // phones, or reasons (privacy). Selects only the columns required to
   // compute "currently serving" / "patients ahead".
   async getProviderDayQueue(providerId, dateYmd) {
      const { data, error } = await _sb.from('appointments')
         .select('id, provider_id, doctor_id, doctor_name, date, slot, token, status, is_followup, is_paid, created_at')
         .eq('provider_id', providerId)
         .eq('date', dateYmd);
      if (error) { console.error('getProviderDayQueue:', error.message); return []; }
      return data || [];
   },

   async insertAppointment(apt) {
      // Normalize email to lowercase so customer's My Appointments query
      // (which lowercases the filter) always matches.
      if (apt && apt.user_email) apt.user_email = String(apt.user_email).toLowerCase();
      const { error } = await _sb.from('appointments').insert(apt);
      if (error) { console.error('insertAppointment:', error.message); return false; }
      return true;
   },

   // Active (non-cancelled) bookings for a doctor on a specific date — used to
   // compute slot-fill counts and the next token within a slot.
   // Returns active (non-cancelled) bookings by default. Pass includeCancelled=true
   // when you need the full set — e.g. for computing the next monotonically-
   // increasing token, where gaps from cancelled rows must NOT be reused.
   async getDoctorBookings(doctorId, dateStr, includeCancelled) {
      let q = _sb.from('appointments')
         .select('slot, token, status, booking_source, is_followup, followup_of')
         .eq('doctor_id', doctorId)
         .eq('date', dateStr);
      if (!includeCancelled) q = q.neq('status', 'Cancelled');
      const { data, error } = await q;
      if (error) { console.error('getDoctorBookings:', error.message); return []; }
      return data || [];
   },

   async getAllAppointments() {
      const { data, error } = await _sb.from('appointments').select('*')
         .order('created_at', { ascending: false });
      if (error) { console.error('getAllAppointments:', error.message); return []; }
      return data || [];
   },

   async updateAppointmentStatus(aptId, status, extra) {
      const updates = Object.assign({ status }, extra || {});
      // Auto-stamp cancelled_at so every cancel path feeds the cooldown + daily-cap defenses.
      if (status === 'Cancelled' && !updates.cancelled_at) {
         updates.cancelled_at = new Date().toISOString();
      }
      const { error } = await _sb.from('appointments').update(updates).eq('apt_id', aptId);
      if (error) { console.error('updateAppointmentStatus:', error.message); return false; }
      return true;
   },

   async deleteAppointment(aptId) {
      const { error } = await _sb.from('appointments').delete().eq('apt_id', aptId);
      if (error) { console.error('deleteAppointment:', error.message); return false; }
      return true;
   },

   // Delete multiple appointments by status. Pass null/empty to wipe ALL appointments.
   async deleteAppointmentsByStatus(status) {
      let q = _sb.from('appointments').delete();
      if (status) q = q.eq('status', status);
      else        q = q.not('apt_id', 'is', null);  // forces a WHERE clause so PostgREST allows the delete
      const { error } = await q;
      if (error) { console.error('deleteAppointmentsByStatus:', error.message); return false; }
      return true;
   },

   async deleteUserAppointments(email) {
      const { error } = await _sb.from('appointments').delete()
         .eq('user_email', email.toLowerCase());
      if (error) { console.error('deleteUserAppointments:', error.message); return false; }
      return true;
   },

   // ── APT PROVIDERS (Hospitals / Clinics) ─────────────
   async getProviders() {
      const { data, error } = await _sb.from('apt_providers').select('*').order('category').order('name');
      if (error) { console.error('getProviders:', error.message); return []; }
      return data || [];
   },

   async upsertProvider(provider) {
      const row = {
         id:               provider.id,
         category:         provider.category,
         name:             provider.name,
         tagline:          provider.tagline     || '',
         address:          provider.address     || '',
         timing:           provider.timing      || '',
         icon:             provider.icon        || '🏥',
         phone:            provider.phone       || '',
         gstin:            (provider.gstin || '').toUpperCase(),
         owner_email:      (provider.owner_email || '').toLowerCase(),
         commission_type:    provider.commission_type  || 'percent',
         commission_value:   (provider.commission_value != null) ? Number(provider.commission_value) : 0,
         free_followup_days:  (provider.free_followup_days  != null) ? Math.max(0, parseInt(provider.free_followup_days,  10) || 0) : 0,
         free_followup_count: (provider.free_followup_count != null) ? Math.max(1, parseInt(provider.free_followup_count, 10) || 1) : 1,
         doctors:            provider.doctors     || []
      };
      const { error } = await _sb.from('apt_providers').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertProvider:', error.message); return false; }
      return true;
   },

   async deleteProvider(id) {
      const { error } = await _sb.from('apt_providers').delete().eq('id', id);
      if (error) { console.error('deleteProvider:', error.message); return false; }
      return true;
   },

   // Upload a customer's prescription photo to the public "prescriptions"
   // Storage bucket. Returns the public URL on success, null on failure.
   // Caller stores that URL on the order (orders.prescription_url) and shows
   // it to the shop owner during fulfilment.
   async uploadPrescription(file, userEmail) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const safeEmail = (userEmail || 'anon').replace(/[^a-z0-9]+/gi, '_').toLowerCase();
      const path = safeEmail + '/' + 'rx-' + Date.now() + '-' + Math.random().toString(36).slice(2,8) + '.' + ext;
      const { error } = await _sb.storage.from('prescriptions').upload(path, file, {
         cacheControl: '3600',
         upsert: false,
         contentType: file.type || ('image/' + ext)
      });
      if (error) { console.error('uploadPrescription:', error.message); return null; }
      const { data } = _sb.storage.from('prescriptions').getPublicUrl(path);
      return data && data.publicUrl ? data.publicUrl : null;
   },

   // Upload a doctor's photo to the public "doctor-photos" Storage bucket and
   // return the public URL. Caller stores that URL in the doctor JSONB.
   async uploadDoctorPhoto(file) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const path = 'dr-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + ext;
      const { error } = await _sb.storage.from('doctor-photos').upload(path, file, {
         cacheControl: '3600',
         upsert: false,
         contentType: file.type || ('image/' + ext)
      });
      if (error) { console.error('uploadDoctorPhoto:', error.message); return null; }
      const { data } = _sb.storage.from('doctor-photos').getPublicUrl(path);
      return data && data.publicUrl ? data.publicUrl : null;
   },

   // List every file in the doctor-photos bucket (used by the admin orphan
   // cleanup tool to find files that aren't referenced by any doctor row).
   async listDoctorPhotoFiles() {
      const { data, error } = await _sb.storage.from('doctor-photos').list('', { limit: 1000 });
      if (error) { console.error('listDoctorPhotoFiles:', error.message); return []; }
      return (data || []).filter(f => f.name && f.name !== '.emptyFolderPlaceholder').map(f => f.name);
   },

   // Delete multiple files from doctor-photos by their stored names (the
   // filename part after the bucket prefix, not the full public URL).
   async deleteDoctorPhotoFiles(filenames) {
      if (!filenames || !filenames.length) return 0;
      const { error } = await _sb.storage.from('doctor-photos').remove(filenames);
      if (error) { console.error('deleteDoctorPhotoFiles:', error.message); return 0; }
      return filenames.length;
   },

   // Delete a doctor photo file from the doctor-photos bucket. Pass the full
   // public URL we stored on the doctor row — we extract the filename and
   // call Storage's .remove(). Safe to call with a non-bucket URL or empty
   // string (no-op). Used to clean up when a photo is replaced or a doctor
   // is deleted, so the bucket doesn't accumulate orphaned files.
   async deleteDoctorPhotoByUrl(publicUrl) {
      if (!publicUrl) return false;
      const marker = '/doctor-photos/';
      const idx = publicUrl.indexOf(marker);
      if (idx === -1) return false;             // not one of our bucket files
      const path = publicUrl.substring(idx + marker.length);
      if (!path) return false;
      const { error } = await _sb.storage.from('doctor-photos').remove([path]);
      if (error) { console.error('deleteDoctorPhotoByUrl:', error.message); return false; }
      return true;
   },

   async uploadBannerImage(file) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const path = 'banner-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + ext;
      const opts = { cacheControl: '3600', upsert: false, contentType: file.type || ('image/' + ext) };
      let { error } = await _sb.storage.from('banners').upload(path, file, opts);
      if (error && (error.message || '').toLowerCase().includes('bucket')) {
         // Bucket missing — create it as public then retry once
         await _sb.storage.createBucket('banners', { public: true });
         const retry = await _sb.storage.from('banners').upload(path, file, opts);
         error = retry.error;
      }
      if (error) { console.error('uploadBannerImage:', error.message); return null; }
      const { data } = _sb.storage.from('banners').getPublicUrl(path);
      return data && data.publicUrl ? data.publicUrl : null;
   },

   // ── APT CATEGORIES (admin-managed) ─────────────
   async getCategories() {
      const { data, error } = await _sb.from('apt_categories').select('*').order('sort_order').order('label');
      if (error) { console.error('getCategories:', error.message); return []; }
      return data || [];
   },

   async upsertCategory(cat) {
      const row = {
         id:          cat.id,
         label:       cat.label,
         description: cat.description || '',
         icon:        cat.icon        || '🏥',
         staff_label: cat.staff_label || 'Staff',
         staff_icon:  cat.staff_icon  || '👥',
         sort_order:  typeof cat.sort_order === 'number' ? cat.sort_order : 100
      };
      const { error } = await _sb.from('apt_categories').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertCategory:', error.message); return false; }
      return true;
   },

   async deleteCategory(id) {
      const { error } = await _sb.from('apt_categories').delete().eq('id', id);
      if (error) { console.error('deleteCategory:', error.message); return false; }
      return true;
   },

   // ── STORE CATEGORIES (admin-managed) ───────────
   async getStoreCategories() {
      const { data, error } = await _sb.from('store_categories').select('*').order('sort_order').order('label');
      if (error) { console.error('getStoreCategories:', error.message); return []; }
      return data || [];
   },

   async upsertStoreCategory(cat) {
      const row = {
         id:             cat.id,
         label:          cat.label,
         description:    cat.description || '',
         icon:           cat.icon        || '🏪',
         sort_order:     typeof cat.sort_order === 'number' ? cat.sort_order : 100
      };
      // Only patch catalog_fields when caller passes it (otherwise we'd clobber
      // existing schemas on a simple label/icon edit).
      if (Array.isArray(cat.catalog_fields)) row.catalog_fields = cat.catalog_fields;
      const { error } = await _sb.from('store_categories').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertStoreCategory:', error.message); return false; }
      return true;
   },

   async deleteStoreCategory(id) {
      const { error } = await _sb.from('store_categories').delete().eq('id', id);
      if (error) { console.error('deleteStoreCategory:', error.message); return false; }
      return true;
   },

   // ── STORE PROVIDERS (admin-managed; one owner can have many) ──
   async getStoreProviders() {
      const { data, error } = await _sb.from('store_providers').select('*').order('created_at', { ascending: false });
      if (error) { console.error('getStoreProviders:', error.message); return []; }
      return data || [];
   },

   async upsertStoreProvider(p) {
      const row = {
         id:               p.id,
         category:         p.category,
         name:             p.name,
         tagline:          p.tagline     || '',
         address:          p.address     || '',
         phone:            p.phone       || '',
         timing:           p.timing      || '',
         icon:             p.icon        || '🏪',
         image_url:        p.image_url   || '',
         gstin:            p.gstin       || '',
         form20_no:        p.form20_no   || '',
         form21_no:        p.form21_no   || '',
         fssai_no:         p.fssai_no    || '',
         commission_type:  p.commission_type  || 'percent',
         commission_value: typeof p.commission_value === 'number' ? p.commission_value : (parseFloat(p.commission_value) || 0),
         door_delivery:    !!p.door_delivery,
         delivery_paused:  !!p.delivery_paused,
         owner_email:      (p.owner_email || '').toLowerCase()
      };
      const { error } = await _sb.from('store_providers').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertStoreProvider:', error.message); return false; }
      return true;
   },

   // Owner-side toggle: pause / resume home delivery for one store. Owner
   // shouldn't touch admin-only fields (commission etc.) so we use a narrow
   // partial update instead of going through upsertStoreProvider.
   async setDeliveryPaused(storeId, paused) {
      const { error } = await _sb.from('store_providers')
         .update({ delivery_paused: !!paused })
         .eq('id', storeId);
      if (error) { console.error('setDeliveryPaused:', error.message); return false; }
      return true;
   },
   async setStoreAds(storeId, adsJson) {
      const { error } = await _sb.from('store_providers')
         .update({ store_ads: adsJson })
         .eq('id', storeId);
      if (error) { console.error('setStoreAds:', error.message); return false; }
      return true;
   },

   async deleteStoreProvider(id) {
      const { error } = await _sb.from('store_providers').delete().eq('id', id);
      if (error) { console.error('deleteStoreProvider:', error.message); return false; }
      return true;
   },

   // ── CATALOG ITEMS (admin-curated master list per category) ──
   // opts: { search?: string (filters name OR brand OR composition via ilike),
   //         limit?:  number (default 200; Supabase default cap is 1000) }
   async getCatalogItems(category, opts) {
      opts = opts || {};
      let q = _sb.from('catalog_items').select('*').order('name');
      if (category) q = q.eq('category', category);
      if (opts.search) {
         // Escape Postgres LIKE wildcards so the user's query is literal.
         const safe = opts.search.replace(/[%_]/g, '\\$&');
         const pat = '%' + safe + '%';
         // Search across name, brand, AND composition (attrs->>'composition').
         q = q.or('name.ilike.' + pat + ',brand.ilike.' + pat + ',attrs->>composition.ilike.' + pat);
      }
      q = q.limit(typeof opts.limit === 'number' ? opts.limit : 200);
      const { data, error } = await q;
      if (error) { console.error('getCatalogItems:', error.message); return []; }
      return data || [];
   },

   // Find other items in the same category that share an EXACT composition
   // string with the given item. Used by the "Show composition" popup to list
   // generic alternatives (e.g. Dolo 650 → Crocin 650, Calpol 650, ...).
   async getCatalogAlternatives(category, composition, excludeId, limit) {
      if (!composition) return [];
      const { data, error } = await _sb.from('catalog_items')
         .select('id, name, brand, price, image_url, attrs')
         .eq('category', category)
         .eq('attrs->>composition', composition)
         .neq('id', excludeId || '')
         .order('price', { ascending: true })
         .limit(typeof limit === 'number' ? limit : 25);
      if (error) { console.error('getCatalogAlternatives:', error.message); return []; }
      return data || [];
   },

   // Direct lookup by ID — used by the shop-owner catalogue picker after a click.
   async getCatalogItemById(id) {
      const { data, error } = await _sb.from('catalog_items').select('*').eq('id', id).limit(1);
      if (error) { console.error('getCatalogItemById:', error.message); return null; }
      return (data && data[0]) || null;
   },

   // Lightweight count for the items-table footer ("showing 200 of N matching").
   async countCatalogItems(category, opts) {
      opts = opts || {};
      let q = _sb.from('catalog_items').select('id', { count: 'exact', head: true });
      if (category) q = q.eq('category', category);
      if (opts.search) {
         const safe = opts.search.replace(/[%_]/g, '\\$&');
         const pat = '%' + safe + '%';
         q = q.or('name.ilike.' + pat + ',brand.ilike.' + pat);
      }
      const { count, error } = await q;
      if (error) { console.error('countCatalogItems:', error.message); return 0; }
      return count || 0;
   },

   async upsertCatalogItem(item) {
      const row = {
         id:        item.id,
         category:  item.category,
         name:      item.name,
         brand:     item.brand     || '',
         price:     typeof item.price === 'number' ? item.price : (parseFloat(item.price) || 0),
         serial_no: item.serial_no || '',
         batch_no:  item.batch_no  || '',
         image_url: item.image_url || '',
         attrs:     item.attrs     || {}
      };
      const { error } = await _sb.from('catalog_items').upsert(row, { onConflict: 'id' });
      if (error) { console.error('upsertCatalogItem:', error.message); return false; }
      return true;
   },

   // Bulk upsert — used by the CSV import flow. Supabase accepts an array,
   // so a single network round-trip can write hundreds of rows. Returns
   // { ok: <count_inserted>, fail: <count_failed> } for progress reporting.
   async upsertCatalogItemsBatch(items) {
      if (!Array.isArray(items) || !items.length) return { ok: 0, fail: 0 };
      const rows = items.map(it => ({
         id:        it.id,
         category:  it.category,
         name:      it.name,
         brand:     it.brand     || '',
         price:     typeof it.price === 'number' ? it.price : (parseFloat(it.price) || 0),
         serial_no: it.serial_no || '',
         batch_no:  it.batch_no  || '',
         image_url: it.image_url || '',
         attrs:     it.attrs     || {}
      }));
      const { error } = await _sb.from('catalog_items').upsert(rows, { onConflict: 'id' });
      if (error) { console.error('upsertCatalogItemsBatch:', error.message); return { ok: 0, fail: rows.length }; }
      return { ok: rows.length, fail: 0 };
   },

   async deleteCatalogItem(id) {
      const { error } = await _sb.from('catalog_items').delete().eq('id', id);
      if (error) { console.error('deleteCatalogItem:', error.message); return false; }
      return true;
   },

   // Bulk delete by category — wipes the entire master list under that category.
   // Returns the deleted-row count for the confirmation toast.
   async deleteAllCatalogInCategory(category) {
      const { count, error } = await _sb.from('catalog_items')
         .delete({ count: 'exact' }).eq('category', category);
      if (error) { console.error('deleteAllCatalogInCategory:', error.message); return -1; }
      return count || 0;
   },

   // Bulk delete by category + ilike filter — matches the same set the admin
   // is currently looking at via the search box. Mirrors getCatalogItems filter.
   async deleteFilteredCatalogItems(category, search) {
      let q = _sb.from('catalog_items').delete({ count: 'exact' }).eq('category', category);
      if (search) {
         const safe = search.replace(/[%_]/g, '\\$&');
         const pat = '%' + safe + '%';
         q = q.or('name.ilike.' + pat + ',brand.ilike.' + pat + ',attrs->>composition.ilike.' + pat);
      }
      const { count, error } = await q;
      if (error) { console.error('deleteFilteredCatalogItems:', error.message); return -1; }
      return count || 0;
   },

   async getAppointmentsByOwner(ownerEmail) {
      const lc = (ownerEmail || '').toLowerCase();
      if (!lc) return [];
      const { data: providers, error: pErr } = await _sb.from('apt_providers').select('id').eq('owner_email', lc);
      if (pErr) { console.error('getAppointmentsByOwner (providers):', pErr.message); return []; }
      const ids = (providers || []).map(function(p) { return p.id; });
      if (!ids.length) return [];
      const { data: apts, error: aErr } = await _sb.from('appointments').select('*')
         .in('provider_id', ids)
         .order('created_at', { ascending: false });
      if (aErr) { console.error('getAppointmentsByOwner (apts):', aErr.message); return []; }
      return apts || [];
   },

   // ── SETTINGS ─────────────────────────────────────────
   // Settings are stored as a JSONB blob in the 'data' column (see migrate.sql)
   async getSettings() {
      const { data, error } = await _sb.from('settings').select('data').eq('id', 1).maybeSingle();
      if (error) { console.error('getSettings:', error.message); return {}; }
      return (data && data.data) ? data.data : {};
   },

   async saveSettings(updates) {
      const row = { id: 1, data: updates, updated_at: new Date().toISOString() };
      const { error } = await _sb.from('settings').upsert(row, { onConflict: 'id' });
      if (error) { console.error('saveSettings:', error.message); return false; }
      return true;
   },

  async getStaff(providerId) {
     const { data, error } = await _sb.from('hospital_staff').select('*')
        .eq('provider_id', providerId).order('name');
     if (error) { console.error('getStaff:', error.message); return []; }
     return data || [];
  },
  async upsertStaff(s) {
     const row = {
        id: s.id, provider_id: s.provider_id, name: s.name || '',
        role: s.role || '', department: s.department || '',
        phone: s.phone || '', email: s.email || '',
        shift: s.shift || '', qualification: s.qualification || '',
        date_of_joining: s.date_of_joining || null,
        notes: s.notes || '', active: s.active !== false,
        updated_at: new Date().toISOString()
     };
     const { error } = await _sb.from('hospital_staff').upsert(row, { onConflict: 'id' });
     if (error) { console.error('upsertStaff:', error.message); return false; }
     return true;
  },
  async deleteStaff(id) {
     const { error } = await _sb.from('hospital_staff').delete().eq('id', id);
     if (error) { console.error('deleteStaff:', error.message); return false; }
     return true;
  },
  async getBeds(providerId) {
     const { data, error } = await _sb.from('hospital_beds').select('*')
        .eq('provider_id', providerId).order('category').order('room_number').order('bed_number');
     if (error) { console.error('getBeds:', error.message); return []; }
     return data || [];
  },
  async upsertBed(b) {
     const row = {
        id: b.id, provider_id: b.provider_id,
        category: b.category || '', room_number: b.room_number || '',
        bed_number: b.bed_number || '', floor: b.floor || '',
        status: b.status || 'Available', notes: b.notes || '',
        rate_per_day: Number(b.rate_per_day || 0),
        gst_pct:      Number(b.gst_pct || 0),
        active: b.active !== false,
        updated_at: new Date().toISOString()
     };
     const { error } = await _sb.from('hospital_beds').upsert(row, { onConflict: 'id' });
     if (error) { console.error('upsertBed:', error.message); return false; }
     return true;
  },
  async deleteBed(id) {
     const { error } = await _sb.from('hospital_beds').delete().eq('id', id);
     if (error) { console.error('deleteBed:', error.message); return false; }
     return true;
  },
  async bulkUpsertBeds(rows) {
     const now = new Date().toISOString();
     const mapped = rows.map(function(b) {
        return {
           id: b.id, provider_id: b.provider_id,
           category: b.category || '', room_number: b.room_number || '',
           bed_number: b.bed_number || '', floor: b.floor || '',
           status: b.status || 'Available', notes: b.notes || '',
           rate_per_day: Number(b.rate_per_day || 0),
           gst_pct:      Number(b.gst_pct || 0),
           active: true, updated_at: now
        };
     });
     const { error } = await _sb.from('hospital_beds').upsert(mapped, { onConflict: 'id' });
     if (error) { console.error('bulkUpsertBeds:', error.message); return { ok: false, error: error.message }; }
     return { ok: true };
  },
};
