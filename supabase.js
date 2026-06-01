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
            isApproved: r.is_approved !== false,   // null/missing → treat as approved (legacy rows)
            commissionRate: r.commission_rate != null ? Number(r.commission_rate) : null,
            gender: r.gender || '' };
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
            storeId: r.store_id, storeName: r.store_name };
}
function _orderToDB(o) {
   return { order_id: o.orderId || o.order_id,
            customer_name: o.customerName || '', customer_email: o.customerEmail || '',
            customer_phone: o.customerPhone || '', date: o.date || '',
            timestamp: o.timestamp || 0, items: o.items || [],
            total: o.total || 0, status: o.status || 'Pending Pickup',
            method: o.method || 'Pickup',
            store_id: o.storeId || null, store_name: o.storeName || '' };
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
         commissionRate: 'commission_rate'
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

   async insertAppointment(apt) {
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
         .select('slot, token, status, booking_source')
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
         commission_type:  provider.commission_type  || 'percent',
         commission_value: (provider.commission_value != null) ? Number(provider.commission_value) : 0,
         doctors:          provider.doctors     || []
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
};
