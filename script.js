let cart = [];
const pageQty     = {};
const pageVariant = {}; // itemId -> selected variant index

const products = {
   // ── DAILY NEEDS ──────────────────────────────────────────
   groceries:    { title: 'Groceries',          type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   rice:         { title: 'Rice & Grains',       type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   atta:         { title: 'Atta & Flour',        type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   dals:         { title: 'Dal & Pulses',        type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   oils:         { title: 'Cooking Oils',        type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   ghee:         { title: 'Ghee & Butter',       type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   spices:       { title: 'Spices & Masala',     type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   salt:         { title: 'Salt',                type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   sugar:        { title: 'Sugar & Honey',       type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   dairy:        { title: 'Dairy',               type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   milk:         { title: 'Milk',                type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   snacks:       { title: 'Snacks & Biscuits',   type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   noodles:      { title: 'Noodles & Pasta',     type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   beverages:    { title: 'Tea & Coffee',        type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   juice:        { title: 'Juices & Drinks',     type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   cola:         { title: 'Cold Drinks',         type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   water:        { title: 'Water',               type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   energyDrink:  { title: 'Energy Drinks',       type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   sodaWater:    { title: 'Soda & Sparkling',    type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   sweets:       { title: 'Sweets & Chocolates', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   pickles:      { title: 'Pickles & Sauces',    type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   vegetables:   { title: 'Vegetables',          type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   pooja:        { title: 'Pooja Items',         type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },
   festival:     { title: 'Festival Items',      type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [] },

   // ── HEALTH & PERSONAL CARE ───────────────────────────────
   medicines:    { title: 'Health & Medicines',  type: 'regular', category: 'Health & Beauty', mainCat: 'health', items: [] },
   personalcare: { title: 'Beauty & Wellness',   type: 'regular', category: 'Health & Beauty', mainCat: 'health', items: [] },
   personalCare: { title: 'Personal Care',       type: 'regular', category: 'Health & Beauty', mainCat: 'health', items: [] },
   babycare:     { title: 'Baby Care',           type: 'regular', category: 'Health & Beauty', mainCat: 'health', items: [] },

   // ── KITCHEN & HOME ───────────────────────────────────────
   utensils:     { title: 'Utensils',            type: 'regular', category: 'Kitchen',         mainCat: 'kitchen', items: [] },
   plastic:      { title: 'Plastic & Storage',   type: 'regular', category: 'Kitchen',         mainCat: 'kitchen', items: [] },
   cleaning:     { title: 'Home Cleaning',       type: 'regular', category: 'Kitchen',         mainCat: 'kitchen', items: [] },
   homeCleaning: { title: 'Cleaning Products',   type: 'regular', category: 'Kitchen',         mainCat: 'kitchen', items: [] },

   // ── FLOWERS ──────────────────────────────────────────────
   flowers:      { title: 'Flowers',             type: 'flowers', category: 'Flowers',         mainCat: 'flowers', items: [] },

   // ── HOME & LIVING ────────────────────────────────────────
   sofa:         { title: 'Sofas',               type: 'regular', category: 'Furniture',       mainCat: 'home', items: [] },
   diningTable:  { title: 'Dining Tables',       type: 'regular', category: 'Furniture',       mainCat: 'home', items: [] },
   wardrobe:     { title: 'Wardrobes',           type: 'regular', category: 'Furniture',       mainCat: 'home', items: [] },
   bedFrame:     { title: 'Bed Frames',          type: 'regular', category: 'Furniture',       mainCat: 'home', items: [] },
   whiteMarble:  { title: 'White Marble',        type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   blackMarble:  { title: 'Black Marble',        type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   italianMarble:{ title: 'Italian Marble',      type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   granite:      { title: 'Granite',             type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   hardwood:     { title: 'Hardwood',            type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   vinyl:        { title: 'Vinyl Flooring',      type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   ceramicTiles: { title: 'Ceramic Tiles',       type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   laminate:     { title: 'Laminate',            type: 'regular', category: 'Flooring',        mainCat: 'home', items: [] },
   wallArt:      { title: 'Wall Art',            type: 'regular', category: 'Home Decor',      mainCat: 'home', items: [] },
   curtains:     { title: 'Curtains',            type: 'regular', category: 'Home Decor',      mainCat: 'home', items: [] },
   lighting:     { title: 'Lighting',            type: 'regular', category: 'Home Decor',      mainCat: 'home', items: [] },
   rugs:         { title: 'Rugs & Carpets',      type: 'regular', category: 'Home Decor',      mainCat: 'home', items: [] },

   // ── CONSTRUCTION ─────────────────────────────────────────
   redBricks:    { title: 'Red Bricks',          type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   flybricks:    { title: 'Fly Ash Bricks',      type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   concreteBricks:{ title: 'Concrete Blocks',   type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   cement:       { title: 'Cement',              type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   paint:        { title: 'Paints',              type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   plumbing:     { title: 'Plumbing',            type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   doors:        { title: 'Doors & Windows',     type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },
   electricals:  { title: 'Electricals',         type: 'regular', category: 'Construction',    mainCat: 'construction', items: [] },

   // ── CLOTHING ─────────────────────────────────────────────
   menswear:     { title: "Men's Wear",          type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   womenswear:   { title: "Women's Wear",        type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   kidswear:     { title: 'Kids Wear',           type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   textiles:     { title: 'Textiles & Fabrics',  type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   hairClips:    { title: 'Hair Accessories',    type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   earrings:     { title: 'Earrings',            type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   bangles:      { title: 'Bangles',             type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },
   necklaces:    { title: 'Necklaces',           type: 'regular', category: 'Clothing',        mainCat: 'clothing', items: [] },

   // ── AGRICULTURE ──────────────────────────────────────────
   gardenSoil:   { title: 'Garden Soil',         type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },
   cococpeat:    { title: 'Cocopeat',            type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },
   fertilizer:   { title: 'Fertilizers',         type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },
   seeds:        { title: 'Seeds',               type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },
   farmtools:    { title: 'Farm Tools',          type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },
   irrigation:   { title: 'Irrigation',          type: 'regular', category: 'Agriculture',     mainCat: 'agriculture', items: [] },

   // ── ELECTRONICS ──────────────────────────────────────────
   mobile:       { title: 'Mobile & Accessories',type: 'regular', category: 'Electronics',     mainCat: 'electronics', items: [] },
   appliances:   { title: 'Appliances',          type: 'regular', category: 'Electronics',     mainCat: 'electronics', items: [] },
   electrical:   { title: 'Electrical',          type: 'regular', category: 'Electronics',     mainCat: 'electronics', items: [] },

   // ── STATIONERY ───────────────────────────────────────────
   books:        { title: 'Books',               type: 'regular', category: 'Stationery',      mainCat: 'stationery', items: [] },
   schoolsupplies:{ title: 'School Supplies',   type: 'regular', category: 'Stationery',      mainCat: 'stationery', items: [] },

   // ── ENTERTAINMENT ────────────────────────────────────────
   toysAnimals:  { title: 'Soft Toys',           type: 'regular', category: 'Toys & Games',    mainCat: 'entertainment', items: [] },
   toysVehicles: { title: 'Toy Vehicles',        type: 'regular', category: 'Toys & Games',    mainCat: 'entertainment', items: [] },
   toysCustom:   { title: 'Custom Toys',         type: 'regular', category: 'Toys & Games',    mainCat: 'entertainment', items: [] },
   games:        { title: 'Games & Puzzles',     type: 'regular', category: 'Toys & Games',    mainCat: 'entertainment', items: [] },
};


// ── IMAGE OVERRIDES (verified Unsplash CDN photo IDs only) ──
const imageOverrides = {
   // Milk
   mk1: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
   mk2: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
   mk3: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80',
   mk4: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?w=400&q=80',
   // Fly Ash Bricks
   fb1: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
   fb2: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=400&q=80',
   fb3: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80',
   fb4: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
   // Concrete Blocks
   cb1: 'https://images.unsplash.com/photo-1590736969596-1b8e0f88de01?w=400&q=80',
   cb2: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
   cb3: 'https://images.unsplash.com/photo-1548625361-58a9d4c84186?w=400&q=80',
   cb4: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
   // Coco Peat
   cp1: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?w=400&q=80',
   cp2: 'https://images.unsplash.com/photo-1624323752823-36b6f205b5b6?w=400&q=80',
   cp3: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&q=80',
   cp4: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80',
   // Fertilizer
   fs1: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80',
   fs2: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=400&q=80',
   fs3: 'https://images.unsplash.com/photo-1592420114272-8e29c41b6c6b?w=400&q=80',
   fs4: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80',
   // Hair Clips
   hc1: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
   hc2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
   hc3: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
   hc4: 'https://images.unsplash.com/photo-1620833839739-ac2ab3e17de6?w=400&q=80',
   // Earrings
   er2: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
   er3: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
   er4: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80',
   // Bangles
   bg1: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=400&q=80',
   bg2: 'https://images.unsplash.com/photo-1573408301185-9519f94815b7?w=400&q=80',
   bg3: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
   bg4: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=400&q=80',
   // 3D Custom Prints
   tc3: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
   tc4: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80'
};
// Apply hardcoded image overrides
Object.entries(products).forEach(([, cat]) => {
   cat.items.forEach(item => {
      if (imageOverrides[item.id]) item.img = imageOverrides[item.id];
   });
});
// Product overrides and custom products are applied after initDB() via
// _applyOverridesToProducts() and _applyStoreProdsToProducts() — no localStorage needed.
// Store products are loaded from Supabase in initDB() → _applyStoreProdsToProducts()

// ── MAIN CATEGORY DEFINITIONS ──
const MAIN_CATS = {
   dailyneeds:    { label: '🛒 Daily Needs',    icon: '🛒', keys: ['groceries','rice','atta','dals','oils','ghee','spices','salt','sugar','dairy','milk','snacks','noodles','beverages','juice','cola','water','energyDrink','sodaWater','sweets','pickles','vegetables','pooja','festival'] },
   flowers:       { label: '🌸 Flowers',         icon: '🌸', keys: ['flowers'] },
   home:          { label: '🏠 Home & Living',   icon: '🏠', keys: ['sofa','diningTable','wardrobe','bedFrame','whiteMarble','blackMarble','italianMarble','granite','hardwood','vinyl','ceramicTiles','laminate','wallArt','curtains','lighting','rugs'] },
   construction:  { label: '🏗️ Construction',   icon: '🏗️', keys: ['redBricks','flybricks','concreteBricks','cement','paint','plumbing','doors','electricals'] },
   clothing:      { label: '👕 Clothing',        icon: '👕', keys: ['menswear','womenswear','kidswear','textiles','hairClips','earrings','bangles','necklaces'] },
   agriculture:   { label: '🌾 Agriculture',     icon: '🌾', keys: ['gardenSoil','cococpeat','fertilizer','seeds','farmtools','irrigation'] },
   kitchen:       { label: '🍳 Kitchen',         icon: '🍳', keys: ['utensils','plastic','cleaning','homeCleaning'] },
   electronics:   { label: '💡 Electronics',     icon: '💡', keys: ['mobile','appliances','electrical'] },
   health:        { label: '💊 Health & Beauty', icon: '💊', keys: ['medicines','personalcare','personalCare','babycare'] },
   stationery:    { label: '📚 Stationery',      icon: '📚', keys: ['books','schoolsupplies'] },
   entertainment: { label: '🎮 Entertainment',   icon: '🎮', keys: ['toysAnimals','toysVehicles','toysCustom','games'] }
};

// ── STORE TYPE CATEGORIES ──
const STORE_TYPES = [
   { key: 'general',      icon: '🛒', label: 'General Store' },
   { key: 'electronics',  icon: '💡', label: 'Electronics' },
   { key: 'medical',      icon: '💊', label: 'Medical & Pharmacy' },
   { key: 'food',         icon: '🍕', label: 'Food & Restaurant' },
   { key: 'clothing',     icon: '👕', label: 'Clothing' },
   { key: 'flowers',      icon: '🌸', label: 'Florist' },
   { key: 'construction', icon: '🏗️', label: 'Hardware & Construction' },
   { key: 'agriculture',  icon: '🌾', label: 'Agriculture' },
];

// ── ALL ITEMS FLAT LIST (for search) ──
function getAllItems() {
   const all = [];
   Object.entries(products).forEach(([catKey, catData]) => {
      catData.items.forEach(item => {
         all.push({
            ...item,
            catKey,
            catTitle: catData.title,
            category: catData.category,
            type: catData.type
         });
      });
   });
   return all;
}

// ── LIVE SEARCH ──
function liveSearch() {
   const query = document.getElementById('searchInput').value.trim().toLowerCase();
   const dropdown = document.getElementById('searchDropdown');
   if (query.length < 2) {
      dropdown.classList.remove('show');
      return;
   }

   const results = getAllItems().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.catTitle.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
   ).slice(0, 8);

   if (results.length === 0) {
      dropdown.innerHTML = '<div class="search-no-result"> No products found</div>';
   } else {
      dropdown.innerHTML = results.map(item => {
         const price = item.type === 'milk' ?
            `₹${item.pricePerLitre}/litre` :
            `₹${item.price.toLocaleString('en-IN')}`;
         return `
 <div class="search-result-item" onclick="selectSearchResult('${item.catKey}', '${item.id}')">
 <img src="${item.img}" alt="${item.name}"/>
 <div class="search-result-info">
 <div class="s-name">${item.name}</div>
 <div class="s-price">${price}</div>
 <div class="s-cat">${item.category} → ${item.catTitle}</div>
 </div>
 </div>
 `;
      }).join('');
   }
   dropdown.classList.add('show');
}

// ── SELECT SEARCH RESULT ──
function selectSearchResult(catKey, itemId) {
   document.getElementById('searchDropdown').classList.remove('show');
   document.getElementById('searchInput').value = '';
   showProducts(catKey);
   setTimeout(() => {
      const el = document.getElementById('card_' + itemId);
      if (el) {
         el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
         });
         el.style.outline = '3px solid #4a90e2';
         setTimeout(() => el.style.outline = '', 2000);
      }
   }, 300);
}

// ── FULL SEARCH ON ENTER / BUTTON ──
function doSearch() {
   const query = document.getElementById('searchInput').value.trim().toLowerCase();
   document.getElementById('searchDropdown').classList.remove('show');
   if (!query) return;

   const results = getAllItems().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
   );

   if (results.length === 0) {
      showToast(' No products found for "' + query + '"');
      return;
   }

   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = `Search: "${query}" (${results.length} results)`;
   if (typeof _setStoresChromeMode === 'function') _setStoresChromeMode(false);

   const grid = document.getElementById('productsGrid');
   grid.innerHTML = '';
   results.forEach(item => renderCard(item, item.catKey, grid));
}

// Close search dropdown on outside click
document.addEventListener('click', (e) => {
   if (!e.target.closest('.search-box')) {
      const sd = document.getElementById('searchDropdown');
      if (sd) sd.classList.remove('show');
   }
});

// ── SHOW ALL PRODUCTS ──
function showAllProducts() {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = ' All Products';
   if (typeof _setStoresChromeMode === 'function') _setStoresChromeMode(false);

   const grid = document.getElementById('productsGrid');
   grid.style.display = '';
   grid.innerHTML = '';

   const categoryGroups = {};
   Object.entries(products).forEach(([catKey, catData]) => {
      const group = catData.category;
      if (!categoryGroups[group]) categoryGroups[group] = [];
      categoryGroups[group].push({
         catKey,
         catData
      });
   });

   Object.entries(categoryGroups).forEach(([groupName, cats]) => {
      const divider = document.createElement('div');
      divider.className = 'section-divider';
      divider.textContent = ' ' + groupName;
      grid.appendChild(divider);
      cats.forEach(({ catKey, catData }) => {
         catData.items.forEach(item => renderCard({ ...item, type: catData.type }, catKey, grid));
      });
   });

   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

// ── GROUP ITEMS BY STORE (used in all category views) ──
// When a category has products from multiple stores, renders each store's
// items under its own header divider. Single-store categories render plainly.
function renderItemsByStore(items, catKey, catType, container) {
   var groups    = {};
   var groupKeys = [];
   items.forEach(function(item) {
      var key = item.storeId || '__platform__';
      if (!groups[key]) {
         groups[key] = { storeId: item.storeId || null, storeName: item.storeId ? (item.storeName || getStoreName(item.storeId)) : null, items: [] };
         groupKeys.push(key);
      }
      groups[key].items.push(item);
   });

   var isMultiStore = groupKeys.length > 1;

   groupKeys.forEach(function(key) {
      var grp = groups[key];
      if (isMultiStore) {
         var label  = grp.storeName || (getAdminSettings().storeName || 'MyStore');
         var hdr    = document.createElement('div');
         hdr.className   = 'store-section-divider';
         hdr.innerHTML   = '<span class="store-section-icon">🏪</span>' + label +
                           '<button class="store-section-browse-btn" onclick="showStoreProducts(' +
                              (grp.storeId ? '\'' + grp.storeId + '\'' : 'null') + ',\'' + label.replace(/'/g,"\\'") + '\')">See all →</button>';
         container.appendChild(hdr);
      }
      grp.items.forEach(function(item) {
         var itemCatKey = item.catKey || catKey;
         renderCard(Object.assign({}, item, { type: catType || item.type }), itemCatKey, container);
      });
   });
}

// ── SHOW SINGLE CATEGORY ──
function showProducts(category) {
   const data = products[category];
   if (!data) return;

   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = data.title;
   if (typeof _setStoresChromeMode === 'function') _setStoresChromeMode(false);

   const grid = document.getElementById('productsGrid');
   grid.style.display = '';
   grid.innerHTML = '';
   data.items.forEach(item => renderCard({ ...item, type: data.type }, category, grid));
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── RENDER SINGLE CARD ──
function renderCard(item, catKey, grid) {
   pageQty[item.id] = pageQty[item.id] || 1;
   const isMilk       = item.type === 'milk';
   const hasVariants  = !isMilk && item.variants && item.variants.length > 0;
   if (hasVariants && pageVariant[item.id] === undefined) pageVariant[item.id] = 0;
   const displayPrice = isMilk
      ? `₹${item.pricePerLitre}/litre`
      : hasVariants
         ? `₹${item.variants[pageVariant[item.id]].price.toLocaleString('en-IN')}`
         : `₹${item.price.toLocaleString('en-IN')}`;

   const wlUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const inWL = wlUser ? _db.wishlist.includes(item.id) : false;

   // Short display name for the colored header (strip weight/quantity)
   const shortName = item.name
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s+\d[\d.]*\s*(kg|g|L|ml|pcs?|m|litre|litres)\s*$/i, '')
      .trim();

   // Per-category pastel background colour
   const catBg = {
      groceries:'#e8f5e9', vegetables:'#f1f8e9', dairy:'#fffde7',
      sweets:'#fce4ec', cola:'#e3f2fd', juice:'#fff3e0',
      energyDrink:'#f3e5f5', sodaWater:'#e0f7fa', milk:'#fff8e1',
      electronics:'#e8eaf6', kitchen:'#fbe9e7', home:'#f3e5f5',
      flowers:'#fce4ec', health:'#e8f5e9', stationery:'#ede7f6',
      entertainment:'#e0f2f1', construction:'#fff3e0', agriculture:'#f1f8e9'
   };
   const topBg = catBg[catKey] || '#f5f5f5';

   const card = document.createElement('div');
   card.className = 'product-card';
   card.id = 'card_' + item.id;
   card.innerHTML = `
<div class="card-color-top" style="${item.img ? `background:${topBg};` : `background:${topBg};`}">
  ${item.img
    ? `<img src="${item.img}" alt="${shortName}" class="card-product-img" onerror="this.style.display='none';this.parentElement.querySelector('.card-color-name').style.display='flex'">`
    : ''}
  <div class="card-color-name" style="${item.img ? 'display:none' : ''}">${shortName}</div>
  <button class="wish-btn${inWL ? ' wished' : ''}" id="wish_${item.id}"
          onclick="toggleWishlist('${item.id}','${catKey}',this)"
          title="${inWL ? 'Remove from Wishlist' : 'Add to Wishlist'}">${inWL ? '❤️' : '🤍'}</button>
</div>
<div class="card-content">
  <span class="badge">${item.badge}</span>
  <div class="product-name">${item.name}</div>
  <div class="product-desc">${item.desc}</div>
  ${item.storeId ? `<div class="store-badge">🏪 ${item.storeName || getStoreName(item.storeId)}</div>` : ''}
  ${isMilk ? `
  <div class="litre-selector">
  <label>Select Litres:</label>
  <select class="litre-select" id="litre_${item.id}" onchange="updateMilkPrice('${item.id}', ${item.pricePerLitre})">
  <option value="0.5">0.5 Litre — ₹${Math.round(item.pricePerLitre*0.5)}</option>
  <option value="1" selected>1 Litre — ₹${item.pricePerLitre}</option>
  <option value="2">2 Litres — ₹${item.pricePerLitre*2}</option>
  <option value="3">3 Litres — ₹${item.pricePerLitre*3}</option>
  <option value="5">5 Litres — ₹${item.pricePerLitre*5}</option>
  </select>
  </div>` : hasVariants ? `
  <div class="variant-selector" id="variants_${item.id}">
  ${item.variants.map((v, i) => `<button class="variant-btn${pageVariant[item.id]===i?' active':''}" onclick="selectVariant('${item.id}',${i})">${v.label}</button>`).join('')}
  </div>
  <div class="qty-controls">
  <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
  <span class="qty-display" id="qty_${item.id}">${pageQty[item.id]}</span>
  <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
  </div>` : `
  <div class="qty-controls">
  <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
  <span class="qty-display" id="qty_${item.id}">${pageQty[item.id]}</span>
  <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
  </div>`}
  ${_rxStockTags(item)}
  <div class="product-footer">
  <span class="product-price" id="price_${item.id}">${displayPrice}</span>
  ${_addToCartButton(item, catKey)}
  </div>
</div>
`;
   grid.appendChild(card);
}

// Rx + stock badges for a product card (medical store flow).
// Only renders the stock badge when this product belongs to a store with
// inventory data loaded (avoids polluting the general/grocery cards).
function _rxStockTags(item) {
   var html = '';
   if (item.rx_required) html += '<div class="rx-required-tag">⚠️ Prescription required</div>';
   if (item.store_provider_id) {
      var batches = _currentStockByProduct[item.id] || [];
      var qty = batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
      if (qty <= 0)        html += '<div class="customer-stock-tag oos">Out of stock</div>';
      else if (qty < 5)    html += '<div class="customer-stock-tag low">Only ' + qty + ' left</div>';
      else                 html += '<div class="customer-stock-tag ok">In stock</div>';
   }
   return html;
}

// ── Rx upload modal (one prescription per cart session) ──────────────
var _pendingRxAddItem = null;

function openRxUploadModal(itemName) {
   var msg = document.getElementById('rxModalMsg');
   if (msg) msg.textContent = '"' + itemName + '" is a prescription-only medicine.';
   document.getElementById('rxFileInput').value = '';
   document.getElementById('rxPreview').classList.add('hidden');
   document.getElementById('rxPreview').innerHTML = '';
   document.getElementById('rxUploadStatus').textContent = '';
   document.getElementById('rxUploadBtn').disabled = false;
   document.getElementById('rxOverlay').classList.remove('hidden');
   // Live preview on file pick
   var input = document.getElementById('rxFileInput');
   input.onchange = function() {
      var f = input.files && input.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      var prev = document.getElementById('rxPreview');
      prev.innerHTML = '<img src="' + url + '" style="max-width:100%;max-height:240px;border-radius:8px;margin-top:10px"/>';
      prev.classList.remove('hidden');
   };
}

function closeRxUploadModal() {
   document.getElementById('rxOverlay').classList.add('hidden');
   _pendingRxAddItem = null;
}

async function confirmRxUpload() {
   var input = document.getElementById('rxFileInput');
   var status = document.getElementById('rxUploadStatus');
   var btn = document.getElementById('rxUploadBtn');
   var f = input.files && input.files[0];
   if (!f) { status.innerHTML = '<span style="color:#c62828">Please pick a prescription photo first.</span>'; return; }
   btn.disabled = true;
   status.innerHTML = 'Uploading…';
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var url = await AppDB.uploadPrescription(f, user.email);
   if (!url) {
      status.innerHTML = '<span style="color:#c62828">Upload failed. Try a smaller image (under 5 MB).</span>';
      btn.disabled = false;
      return;
   }
   window._cartPrescriptionUrl = url;
   status.innerHTML = '<span style="color:#0a8a3a">✅ Uploaded.</span>';
   // Now actually add the pending item to cart
   var pending = _pendingRxAddItem;
   closeRxUploadModal();
   if (pending) addToCart(pending.item.id, pending.catKey);   // re-enters addToCart, this time Rx check passes
}

function _addToCartButton(item, catKey) {
   if (item.store_provider_id) {
      var batches = _currentStockByProduct[item.id] || [];
      var qty = batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
      if (qty <= 0) return '<button class="btn-cart" disabled style="background:#bdbdbd;cursor:not-allowed">Out of stock</button>';
   }
   return '<button class="btn-cart" onclick="addToCart(\'' + item.id + '\',\'' + catKey + '\')">Add</button>';
}

// ── QUANTITY ──
function changeQty(id, delta) {
   pageQty[id] = Math.max(1, (pageQty[id] || 1) + delta);
   const el = document.getElementById('qty_' + id);
   if (el) el.textContent = pageQty[id];
}

function updateMilkPrice(id, pricePerLitre) {
   const litres = parseFloat(document.getElementById('litre_' + id).value);
   document.getElementById('price_' + id).textContent = `₹${Math.round(pricePerLitre * litres)}`;
}

function selectVariant(itemId, variantIdx) {
   pageVariant[itemId] = variantIdx;
   var container = document.getElementById('variants_' + itemId);
   if (container) {
      container.querySelectorAll('.variant-btn').forEach(function(btn, i) {
         btn.classList.toggle('active', i === variantIdx);
      });
   }
   // Find item and update price display
   var item = null;
   Object.values(products).forEach(function(cat) {
      if (!item) item = cat.items.find(function(i) { return i.id === itemId; });
   });
   if (item && item.variants && item.variants[variantIdx]) {
      var priceEl = document.getElementById('price_' + itemId);
      if (priceEl) priceEl.textContent = '₹' + item.variants[variantIdx].price.toLocaleString('en-IN');
   }
}

// ── ADD TO CART ──
function addToCart(itemId, catKey) {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in or sign up to add items to your cart.'); return; }

   const data = products[catKey];
   const item = data && data.items.find(i => i.id === itemId);
   if (!item) return;

   // Block add-to-cart for out-of-stock store items (UI button is already disabled,
   // but this is the belt-and-braces safety net for keyboard/programmatic calls)
   if (item.store_provider_id) {
      var batches = _currentStockByProduct[item.id] || [];
      var qty = batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
      if (qty <= 0) { showToast('❌ Out of stock'); return; }
   }

   // Rx-required medicine: prompt for prescription upload first (one Rx per session
   // covers all Rx items in the cart). If already uploaded, just add.
   if (item.rx_required && !window._cartPrescriptionUrl) {
      _pendingRxAddItem = { item: item, catKey: catKey };
      openRxUploadModal(item.name);
      return;
   }

   // Check if same product name exists in other stores
   const nameLower = item.name.toLowerCase().trim();
   const alternatives = [];
   Object.entries(products).forEach(([ck, cd]) => {
      cd.items.forEach(it => {
         if (it.id !== itemId && it.name.toLowerCase().trim() === nameLower) {
            alternatives.push(Object.assign({}, it, { catKey: ck, type: cd.type }));
         }
      });
   });

   if (alternatives.length > 0) {
      // Show store picker — let user choose which store
      openStorePicker(Object.assign({}, item, { catKey, type: data.type }), alternatives);
      return;
   }

   doAddToCart(item, catKey);
}

function doAddToCart(item, catKey) {
   const data = products[catKey];
   const isMilk = (item.type || (data && data.type)) === 'milk';
   let qty, unitPrice, label, cartId;

   if (isMilk) {
      const litreEl = document.getElementById('litre_' + item.id);
      const litres = parseFloat(litreEl ? litreEl.value : 1);
      unitPrice = Math.round(item.pricePerLitre * litres);
      qty = 1;
      label = item.name + ' (' + litres + 'L)';
      cartId = item.id + '_' + litres;
   } else if (item.variants && item.variants.length > 0) {
      const variantIdx = pageVariant[item.id] || 0;
      const variant    = item.variants[variantIdx];
      qty       = pageQty[item.id] || 1;
      unitPrice = variant.price;
      label     = item.name + ' (' + variant.label + ')';
      cartId    = item.id + '_v_' + variant.label.replace(/\s+/g, '_');
   } else {
      qty = pageQty[item.id] || 1;
      unitPrice = item.price;
      label = item.name;
      cartId = item.id;
   }

   const existing = cart.find(c => c.id === cartId);
   if (existing) {
      existing.qty += qty;
   } else {
      cart.push({ id: cartId, name: label, price: unitPrice, qty, img: item.img,
                  storeId: item.storeId || null, storeName: item.storeName || null,
                  // Carry these through so the medical checkout knows which store
                  // provider the items came from and whether to enforce Rx upload:
                  store_provider_id: item.store_provider_id || null,
                  rx_required:       !!item.rx_required });
   }
   updateCartUI();
   showToast('"' + label + '" added to cart!');
}

// ── STORE PICKER MODAL ──
function openStorePicker(clickedItem, alternatives) {
   var all = [clickedItem].concat(alternatives);
   var s = getAdminSettings();

   document.getElementById('spItemName').textContent = clickedItem.name;
   document.getElementById('spItemImg').src = clickedItem.img;

   document.getElementById('spStoresList').innerHTML = all.map(function(it) {
      var storeName = it.storeId ? (it.storeName || getStoreName(it.storeId)) : (s.storeName || 'MyStore');
      var price = it.price ? '₹' + it.price.toLocaleString('en-IN') : '';
      return '<div class="sp-store-option">' +
                '<img src="' + it.img + '" onerror="this.src=\'https://placehold.co/60x60?text=Item\'"/>' +
                '<div class="sp-store-option-info">' +
                   '<div class="sp-store-option-name">🏪 ' + storeName + '</div>' +
                   '<div class="sp-store-option-desc">' + (it.desc || '') + '</div>' +
                   '<div class="sp-store-option-price">' + price + '</div>' +
                '</div>' +
                '<button class="sp-store-add-btn" onclick="pickStore(\'' + it.id + '\',\'' + it.catKey + '\')">Add to Cart</button>' +
             '</div>';
   }).join('');

   var overlay = document.getElementById('storePickerOverlay');
   if (overlay) overlay.classList.remove('hidden');
}

function pickStore(itemId, catKey) {
   closeStorePicker();
   const data = products[catKey];
   const item = data && data.items.find(i => i.id === itemId);
   if (item) doAddToCart(Object.assign({}, item, { type: data.type }), catKey);
}

function closeStorePicker() {
   var overlay = document.getElementById('storePickerOverlay');
   if (overlay) overlay.classList.add('hidden');
}

// ── CART UI ──
function updateCartUI() {
   var totalItems = cart.reduce(function(s, c) { return s + c.qty; }, 0);
   var totalCost  = cart.reduce(function(s, c) { return s + c.price * c.qty; }, 0);

   document.getElementById('cartBadge').textContent     = totalItems;
   document.getElementById('cartTotalItems').textContent = totalItems;
   document.getElementById('cartTotalCost').textContent  = '₹' + totalCost.toLocaleString('en-IN');

   var el = document.getElementById('cartItems');
   if (!el) return;
   el.innerHTML = '';

   if (cart.length === 0) {
      el.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
      return;
   }

   // Group cart by store
   var groups = {};
   var groupKeys = [];
   cart.forEach(function(c) {
      var key = c.storeId || '__platform__';
      if (!groups[key]) {
         groups[key] = { storeName: c.storeName || getStoreName(c.storeId), items: [] };
         groupKeys.push(key);
      }
      groups[key].items.push(c);
   });
   var multiStore = groupKeys.length > 1;

   groupKeys.forEach(function(key) {
      var grp = groups[key];
      if (multiStore) {
         var hdr = document.createElement('div');
         hdr.className = 'cart-store-header';
         hdr.textContent = '🏪 ' + grp.storeName;
         el.appendChild(hdr);
      }
      grp.items.forEach(function(c) {
         // wrapper
         var row = document.createElement('div');
         row.className = 'cart-item';

         // product image
         var img = document.createElement('img');
         img.src = c.img;
         img.alt = c.name;

         // info block
         var info = document.createElement('div');
         info.className = 'cart-item-info';

         var nameEl = document.createElement('div');
         nameEl.className = 'cart-item-name';
         nameEl.textContent = c.name;

         var priceEl = document.createElement('div');
         priceEl.className = 'cart-item-price';
         priceEl.textContent = '₹' + c.price.toLocaleString('en-IN') + ' each';

         var qtyRow = document.createElement('div');
         qtyRow.className = 'cart-item-qty';

         var minusBtn = document.createElement('button');
         minusBtn.className = 'cart-qty-btn';
         minusBtn.textContent = '−';
         minusBtn.onclick = (function(cid) { return function() { changeCartQty(cid, -1); }; })(c.id);

         var qtySpan = document.createElement('span');
         qtySpan.style.cssText = 'font-size:0.88rem;font-weight:bold';
         qtySpan.textContent = c.qty;

         var plusBtn = document.createElement('button');
         plusBtn.className = 'cart-qty-btn';
         plusBtn.textContent = '+';
         plusBtn.onclick = (function(cid) { return function() { changeCartQty(cid, 1); }; })(c.id);

         var subtotalSpan = document.createElement('span');
         subtotalSpan.style.cssText = 'font-size:0.82rem;color:#888;margin-left:4px';
         subtotalSpan.textContent = '= ₹' + (c.price * c.qty).toLocaleString('en-IN');

         qtyRow.appendChild(minusBtn);
         qtyRow.appendChild(qtySpan);
         qtyRow.appendChild(plusBtn);
         qtyRow.appendChild(subtotalSpan);

         info.appendChild(nameEl);
         info.appendChild(priceEl);
         info.appendChild(qtyRow);

         // remove button
         var removeBtn = document.createElement('button');
         removeBtn.className = 'cart-item-remove';
         removeBtn.textContent = '✕';
         removeBtn.title = 'Remove item';
         removeBtn.onclick = (function(cid) { return function() { removeFromCart(cid); }; })(c.id);

         row.appendChild(img);
         row.appendChild(info);
         row.appendChild(removeBtn);
         el.appendChild(row);
      });
   });
}

function changeCartQty(id, delta) {
   const item = cart.find(c => c.id === id);
   if (item) {
      item.qty = Math.max(1, item.qty + delta);
      updateCartUI();
   }
}

function removeFromCart(id) {
   cart = cart.filter(c => c.id !== id);
   updateCartUI();
}

function showCart() {
   document.getElementById('cartSidebar').classList.remove('hidden');
   document.getElementById('cartOverlay').classList.remove('hidden');
   updateCartUI();
}

function closeCart() {
   document.getElementById('cartSidebar').classList.add('hidden');
   document.getElementById('cartOverlay').classList.add('hidden');
}

function clearCart() {
   cart = [];
   updateCartUI();
}

// ── COD: phone is mandatory ──
// The shop owner needs to call the customer to coordinate delivery / pickup /
// missing-item callbacks. If the user's profile has no phone, prompt for one,
// validate it's 10 digits, save to their profile, and refresh sessionStorage.
// Returns the phone string on success, null if the user cancelled (caller
// should abort the order).
async function _ensureCustomerPhone(user) {
   var phone = (user && user.phone || '').trim();
   var norm  = phone.replace(/\D/g, '').slice(-10);
   if (norm.length === 10) return phone;     // already on file
   while (true) {
      var input = window.prompt(
         '📞 Phone number required for COD orders\n\n' +
         'The store needs your phone to coordinate the order.\n' +
         'Enter a 10-digit mobile number (we\'ll save it to your profile):',
         phone || ''
      );
      if (input === null) return null;       // user cancelled
      var n = input.replace(/\D/g, '').slice(-10);
      if (n.length === 10) {
         user.phone = n;
         sessionStorage.setItem('loggedInUser', JSON.stringify(user));
         try { await AppDB.updateUser(user.email, { phone: n }); } catch (e) {}
         return n;
      }
      alert('That doesn\'t look like a valid mobile number. Please enter 10 digits.');
   }
}

// ── MAKE ORDER (offline pickup) ──
async function makeOrder() {
   if (cart.length === 0) { showToast('Your cart is empty!'); return; }
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { showToast('Please login to place an order.'); return; }

   // COD orders require a phone on file
   var phone = await _ensureCustomerPhone(user);
   if (!phone) { showToast('Phone number is required to place a COD order.'); return; }

   var now    = new Date();
   var yy     = String(now.getFullYear()).slice(2);
   var mm     = String(now.getMonth() + 1).padStart(2, '0');
   var dd     = String(now.getDate()).padStart(2, '0');
   var dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

   function genId() {
      return 'ORD-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
   }

   // Group cart by store (preserve store_provider_id for delivery resolution)
   var groups = {};
   var groupKeys = [];
   cart.forEach(function(c) {
      var key = c.store_provider_id || c.storeId || '__platform__';
      if (!groups[key]) {
         groups[key] = {
            storeId: c.storeId || null,
            storeName: c.storeName || getStoreName(c.storeId),
            store_provider_id: c.store_provider_id || null,
            items: []
         };
         groupKeys.push(key);
      }
      groups[key].items.push(c);
   });

   var createdOrders = [];

   groupKeys.forEach(function(key) {
      var grp     = groups[key];
      var orderId = genId();
      var total   = grp.items.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
      var items   = grp.items.map(function(c) { return { id: c.id, name: c.name, price: c.price, qty: c.qty, img: c.img }; });

      // Resolve the store provider so we can set method correctly. Without
      // this, the order shows as "Pickup" even if the store has home delivery
      // — which breaks the customer-facing status label + footer.
      var prov = grp.store_provider_id
         ? (_storeProvidersCache || []).find(function(p) { return p.id === grp.store_provider_id; })
         : (_storeProvidersCache || []).find(function(p) {
              return p.name === grp.storeName ||
                     (p.owner_email || '').toLowerCase() === (grp.storeId || '').toLowerCase();
           });
      var supportsDelivery = _storeAcceptsDeliveryNow(prov);

      var newOrder = {
         orderId: orderId, order_id: orderId, date: dateStr, timestamp: now.getTime(),
         customerName: user.name, customerEmail: user.email, customerPhone: phone,
         items: items, total: total, status: 'Pending Pickup',
         method: supportsDelivery ? 'COD-Delivery' : 'Pickup',
         storeId: grp.storeId, storeName: grp.storeName,
         store_provider_id: grp.store_provider_id || (prov && prov.id) || null
      };
      _db.orders.unshift(newOrder);
      AppDB.insertOrder(newOrder);
      createdOrders.push({ orderId: orderId, storeName: grp.storeName, storeId: grp.storeId, items: items, total: total, date: dateStr });
   });

   // Build confirmation modal
   var grandTotal = createdOrders.reduce(function(s, o) { return s + o.total; }, 0);
   var isMulti    = createdOrders.length > 1;

   var confirmHtml = createdOrders.map(function(ord) {
      var itemRows = ord.items.map(function(c) {
         return '<div class="order-item-row"><span class="oi-name">' + c.name + ' \xd7' + c.qty + '</span><span class="oi-price">\u20b9' + (c.price * c.qty).toLocaleString('en-IN') + '</span></div>';
      }).join('');
      return '<div class="order-id-box">' +
                '<div class="order-id-header">' +
                   (isMulti ? '<div class="order-store-label">🏪 ' + ord.storeName + '</div>' : '') +
                   '<div class="order-id-label">Order ID</div>' +
                   '<div class="order-id-value">' + ord.orderId + '</div>' +
                   '<div class="order-id-date">' + ord.date + '</div>' +
                '</div>' +
                '<div class="order-id-items">' +
                   itemRows +
                   (isMulti ? '<div class="order-subtotal-row">Subtotal: \u20b9' + ord.total.toLocaleString('en-IN') + '</div>' : '') +
                '</div>' +
             '</div>';
   }).join('');

   document.getElementById('ordersConfirmList').innerHTML = confirmHtml;
   document.getElementById('orderTotalDisplay').textContent = '\u20b9' + grandTotal.toLocaleString('en-IN');
   document.getElementById('orderSubtitle').textContent = isMulti
      ? createdOrders.length + ' separate orders created — one per store.'
      : 'Show this Order ID at the shop to collect your items.';

   // WhatsApp share
   var st = window._adminSettings || {};
   var adminWa = (st.whatsapp || st.phone || '').replace(/\D/g, '');
   var waBtn = document.getElementById('orderWhatsappBtn');
   if (createdOrders.length === 1) {
      var ord = createdOrders[0];
      var waNum = adminWa;
      var msg = '*New Order \u2014 ' + (ord.storeName || 'MyStore') + '*\n' +
                'Order ID: *' + ord.orderId + '*\nDate: ' + ord.date + '\nCustomer: ' + user.name + '\n\n*Items:*\n' +
                ord.items.map(function(c) { return '\u2022 ' + c.name + ' \xd7' + c.qty + ' \u2014 \u20b9' + (c.price * c.qty).toLocaleString('en-IN'); }).join('\n') +
                '\n\n*Total: \u20b9' + ord.total.toLocaleString('en-IN') + '*\n\nCustomer will collect & pay at shop.';
      if (waNum) {
         waBtn.onclick = function() { window.open('https://wa.me/' + waNum + '?text=' + encodeURIComponent(msg), '_blank'); };
         waBtn.classList.remove('hidden');
      } else { waBtn.classList.add('hidden'); }
   } else {
      if (adminWa) {
         var lines = createdOrders.map(function(ord) {
            return '🏪 *' + ord.storeName + '*\n   Order: *' + ord.orderId + '*\n   ' +
                   ord.items.map(function(c) { return c.name + ' \xd7' + c.qty; }).join(', ') +
                   '\n   \u20b9' + ord.total.toLocaleString('en-IN');
         }).join('\n\n');
         var multiMsg = '*New Orders \u2014 Multiple Stores*\nCustomer: ' + user.name + '\nDate: ' + dateStr + '\n\n' + lines + '\n\n*Grand Total: \u20b9' + grandTotal.toLocaleString('en-IN') + '*';
         waBtn.onclick = function() { window.open('https://wa.me/' + adminWa + '?text=' + encodeURIComponent(multiMsg), '_blank'); };
         waBtn.classList.remove('hidden');
      } else { waBtn.classList.add('hidden'); }
   }

   cart = [];
   updateCartUI();
   closeCart();
   document.getElementById('orderOverlay').classList.remove('hidden');
}

function closeOrderModal() {
   document.getElementById('orderOverlay').classList.add('hidden');
}

// ── CHECKOUT → RAZORPAY ──
function checkout() {
   if (cart.length === 0) {
      showToast(' Your cart is empty!');
      return;
   }
   // If ANY item in the cart belongs to a store_provider (medical / pharmacy
   // flow), route to the new medical checkout instead of the legacy Razorpay
   // overlay. The medical flow handles Rx prescriptions, address picking, and
   // COD/UPI-on-delivery payment.
   var hasStoreItems = cart.some(function(c) { return c.store_provider_id; });
   if (hasStoreItems) {
      closeCart();
      openMedicalCheckout();
      return;
   }
   closeCart();
   let total = cart.reduce((s, c) => s + c.price * c.qty, 0);
   const st = window._adminSettings || {};
   const threshold = st.freeDeliveryAbove || 0;
   const charge    = st.deliveryCharge    || 0;
   if (charge > 0 && (threshold === 0 || total < threshold)) total += charge;
   document.getElementById('rpAmount').textContent = '₹' + total.toLocaleString('en-IN');
   document.getElementById('rpOverlay').classList.remove('hidden');
   switchTab('upi', document.querySelector('.rp-tab'));
}

// ── Prescription-only order (customer can't / doesn't want to pick items) ──
var _rxOnlyStoreId = null;

async function openRxOnlyOrderModal(storeProviderId) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in to send a prescription.'); return; }
   if (!_db.addresses || !_db.addresses.length) {
      try { await loadUserData(user.email); } catch (e) {}
   }
   try { await loadStoreProviders(); } catch (e) {}
   _rxOnlyStoreId = storeProviderId;
   document.getElementById('rxOnlyFileInput').value = '';
   document.getElementById('rxOnlyNotes').value = '';
   document.getElementById('rxOnlyPreview').classList.add('hidden');
   document.getElementById('rxOnlyPreview').innerHTML = '';
   document.getElementById('rxOnlyStatus').textContent = '';
   var submitBtn = document.getElementById('rxOnlySubmitBtn');
   if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = '📤 Send to Pharmacist'; }

   // Address picker (only if the store has home delivery enabled AND not paused)
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === storeProviderId; }) || {};
   var addrHost = document.getElementById('rxOnlyAddrSection');
   if (_storeAcceptsDeliveryNow(store)) {
      var addrs = _db.addresses || [];
      var defaultId = (addrs.find(function(a) { return a.isDefault; }) || addrs[0] || {}).id || '';
      window._rxOnlySelectedAddr = defaultId;
      if (!addrs.length) {
         addrHost.innerHTML = '<div class="sp-field" style="margin-top:10px"><label>Delivery Address</label>' +
            '<p style="color:#c62828;font-size:0.85rem">No saved addresses. ' +
            '<button onclick="closeRxOnlyOrderModal();window.location=\'profile.html?tab=addresses\'" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:5px 10px;cursor:pointer">➕ Add Address</button></p></div>';
      } else {
         var opts = addrs.map(function(a) {
            var label = a.name + ' · ' + (a.line || '') + (a.city ? ', ' + a.city : '') + (a.pin ? ' ' + a.pin : '');
            return '<option value="' + a.id + '"' + (a.id === defaultId ? ' selected' : '') + '>' + label + '</option>';
         }).join('');
         addrHost.innerHTML = '<div class="sp-field" style="margin-top:10px"><label>Delivery Address</label>' +
            '<select id="rxOnlyAddr" onchange="window._rxOnlySelectedAddr=this.value" style="width:100%;padding:8px;border:1px solid #ccc;border-radius:6px">' + opts + '</select></div>';
      }
   } else {
      addrHost.innerHTML = '<p style="color:#666;font-size:0.85rem;margin-top:8px;padding:8px;background:#fff8e1;border-radius:6px">🛍️ This store does not deliver. Please collect from the store after the pharmacist confirms.</p>';
   }

   // Live preview on file pick
   var input = document.getElementById('rxOnlyFileInput');
   input.onchange = function() {
      var f = input.files && input.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      var prev = document.getElementById('rxOnlyPreview');
      prev.innerHTML = '<img src="' + url + '" style="max-width:100%;max-height:240px;border-radius:8px;margin-top:10px"/>';
      prev.classList.remove('hidden');
   };

   document.getElementById('rxOnlyOverlay').classList.remove('hidden');
}

function closeRxOnlyOrderModal() {
   document.getElementById('rxOnlyOverlay').classList.add('hidden');
   _rxOnlyStoreId = null;
}

async function submitRxOnlyOrder() {
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth(); return; }
   var input = document.getElementById('rxOnlyFileInput');
   var status = document.getElementById('rxOnlyStatus');
   var btn = document.getElementById('rxOnlySubmitBtn');
   var f = input.files && input.files[0];
   if (!f) { status.innerHTML = '<span style="color:#c62828">Please pick a prescription photo.</span>'; return; }
   // COD orders require a phone — pharmacist needs to call for Rx clarifications
   var phone = await _ensureCustomerPhone(user);
   if (!phone) { status.innerHTML = '<span style="color:#c62828">Phone number is required to send a prescription.</span>'; return; }
   btn.disabled = true; btn.textContent = 'Uploading…';
   status.textContent = '';

   // Upload prescription image
   var url = await AppDB.uploadPrescription(f, user.email);
   if (!url) {
      status.innerHTML = '<span style="color:#c62828">Upload failed. Try a smaller image.</span>';
      btn.disabled = false; btn.textContent = '📤 Send to Pharmacist'; return;
   }

   // Find the store + delivery address
   try { await loadStoreProviders(); } catch (e) {}
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _rxOnlyStoreId; });
   if (!store) { status.innerHTML = '<span style="color:#c62828">Store not found.</span>'; btn.disabled = false; btn.textContent = '📤 Send to Pharmacist'; return; }
   var needsAddr = _storeAcceptsDeliveryNow(store);
   var addr = null;
   if (needsAddr) {
      addr = (_db.addresses || []).find(function(a) { return a.id === window._rxOnlySelectedAddr; });
      if (!addr) { status.innerHTML = '<span style="color:#c62828">Pick a delivery address first.</span>'; btn.disabled = false; btn.textContent = '📤 Send to Pharmacist'; return; }
   }

   var notes = document.getElementById('rxOnlyNotes').value.trim();
   var now = new Date();
   var yy = String(now.getFullYear()).slice(2);
   var mm = String(now.getMonth() + 1).padStart(2, '0');
   var dd = String(now.getDate()).padStart(2, '0');
   var orderId = 'RX-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
   var order = {
      orderId: orderId, order_id: orderId,
      date: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      customerName:  user.name, customerEmail: user.email, customerPhone: phone,
      items: [],                                  // empty — pharmacist fills via Bill modal
      total: 0,
      method:        needsAddr ? 'COD-Delivery' : 'Pickup',
      status:        'Pending Pickup',
      storeId:       store.owner_email || null,
      storeName:     store.name || '',
      store_provider_id: store.id,
      prescription_url:  url,
      delivery_address:  needsAddr ? addr : null,
      payment_mode:  'COD',
      doctor_name:   notes                        // reuse doctor_name column for free-form pharmacist notes
   };
   _db.orders.unshift(order);
   var ok = await AppDB.insertOrder(order);
   if (!ok) { status.innerHTML = '<span style="color:#c62828">Failed to save order.</span>'; btn.disabled = false; btn.textContent = '📤 Send to Pharmacist'; return; }

   closeRxOnlyOrderModal();
   alert('✅ Prescription sent!\n\nThe pharmacist will review and prepare your medicines.\nThey will contact you on ' + (user.phone || 'your registered number') + '.');
   window.location = 'profile.html?tab=orders';
}

// Medical-flow checkout: address picker (required when store has home delivery),
// prescription preview, COD-on-delivery. One order per store provider.
function openMedicalCheckout() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in to place an order.'); return; }
   var body = document.getElementById('medCheckoutBody');
   var overlay = document.getElementById('medCheckoutOverlay');

   // Group cart items by store_provider_id
   var groups = {};
   cart.forEach(function(c) {
      var key = c.store_provider_id || ('platform_' + (c.storeId || 'x'));
      if (!groups[key]) groups[key] = { items: [], spId: c.store_provider_id || null, storeName: c.storeName || '' };
      groups[key].items.push(c);
   });

   // Build content
   var addresses = _db.addresses || [];
   var defaultAddrId = (addresses.find(function(a) { return a.isDefault; }) || addresses[0] || {}).id || '';
   window._medCheckoutSelectedAddr = defaultAddrId;

   var html = '';
   Object.keys(groups).forEach(function(key) {
      var g = groups[key];
      var prov = (_storeProvidersCache || []).find(function(x) { return x.id === g.spId; }) || {};
      var subtotal = g.items.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
      html += '<div class="med-checkout-group">' +
                '<div class="med-checkout-store">🏪 <strong>' + (prov.name || g.storeName || 'Store') + '</strong>' +
                  (_storeAcceptsDeliveryNow(prov)
                     ? ' <span style="color:#0a8a3a;font-size:0.8rem">🚚 Home delivery</span>'
                     : prov.door_delivery
                        ? ' <span style="color:#c62828;font-size:0.8rem">⏸ Delivery paused · pickup only</span>'
                        : ' <span style="color:#888;font-size:0.8rem">Self pickup</span>') +
                '</div>' +
                '<ul class="med-checkout-items">' +
                  g.items.map(function(c) {
                     var rx = c.rx_required ? ' <span style="color:#c62828;font-size:0.78rem">⚠️ Rx</span>' : '';
                     return '<li>' + c.name + rx + ' × ' + c.qty + ' = ₹' + (c.price * c.qty).toLocaleString('en-IN') + '</li>';
                  }).join('') +
                '</ul>' +
                '<div class="med-checkout-subtotal">Subtotal: ₹' + subtotal.toLocaleString('en-IN') + '</div>' +
              '</div>';
   });

   // Prescription preview (one per cart)
   if (window._cartPrescriptionUrl) {
      html += '<div class="med-checkout-rx"><strong>Prescription:</strong><br/>' +
                '<img src="' + window._cartPrescriptionUrl + '" style="max-width:140px;max-height:140px;margin-top:6px;border-radius:8px;border:1px solid #ddd"/>' +
              '</div>';
   }

   // Address picker — required if any group has door delivery
   var needsAddr = Object.keys(groups).some(function(k) {
      var p = (_storeProvidersCache || []).find(function(x) { return x.id === groups[k].spId; });
      return _storeAcceptsDeliveryNow(p);
   });
   if (needsAddr) {
      html += '<div class="med-checkout-address"><strong>Delivery Address:</strong>';
      if (!addresses.length) {
         html += '<p style="color:#c62828;margin:6px 0">No saved addresses. ' +
                    '<button onclick="closeMedCheckout();window.location=\'profile.html?tab=addresses\'" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 12px;cursor:pointer">➕ Add Address</button>' +
                 '</p>';
      } else {
         html += '<select id="medCheckoutAddr" onchange="window._medCheckoutSelectedAddr=this.value" style="width:100%;padding:8px;margin-top:6px;border:1px solid #ccc;border-radius:6px">';
         addresses.forEach(function(a) {
            var label = a.name + ' · ' + (a.line || '') + (a.city ? ', ' + a.city : '') + (a.pin ? ' ' + a.pin : '');
            html += '<option value="' + a.id + '"' + (a.id === defaultAddrId ? ' selected' : '') + '>' + label + '</option>';
         });
         html += '</select>';
      }
      html += '</div>';
   }

   html += '<div class="med-checkout-payment"><strong>Payment:</strong> Cash or UPI on delivery (delivery person will show QR)</div>';
   body.innerHTML = html;
   overlay.classList.remove('hidden');
}

function closeMedCheckout() {
   document.getElementById('medCheckoutOverlay').classList.add('hidden');
}

async function placeMedicalOrder() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth(); return; }
   if (!cart.length) { showToast('Cart is empty'); return; }

   // COD orders require a phone — pharmacist needs to call for prescription
   // clarifications, missing items, delivery coordination, etc.
   var phone = await _ensureCustomerPhone(user);
   if (!phone) { showToast('Phone number is required to place a COD order.'); return; }

   var btn = document.getElementById('medCheckoutPlaceBtn');
   if (btn) { btn.disabled = true; btn.textContent = 'Placing order…'; }

   // Ensure both caches are loaded before we group / look up door_delivery.
   // If the customer reached checkout via a code path that didn't trigger
   // loadStoreProviders (e.g. direct cart access), prov lookup would fail
   // and method would default to "Pickup" even for delivery-enabled stores.
   try { await loadStoreProviders(); } catch (e) {}
   if (!(_db && _db.storeProducts && _db.storeProducts.length)) {
      try {
         var prods = await AppDB.getAllStoreProducts();
         _db.storeProducts = prods || [];
      } catch (e) {}
   }

   // Self-heal: hydrate any cart items missing store_provider_id by looking it
   // up in _db.storeProducts. Protects against stale cart entries created
   // before the script.js cache fix landed.
   cart.forEach(function(c) {
      if (!c.store_provider_id) {
         var prod = (_db.storeProducts || []).find(function(p) { return p.id === c.id; });
         if (prod && prod.store_provider_id) c.store_provider_id = prod.store_provider_id;
      }
   });

   // Group cart by store and create one order per store
   var groups = {};
   cart.forEach(function(c) {
      var key = c.store_provider_id || '__platform__';
      if (!groups[key]) groups[key] = { items: [], spId: c.store_provider_id || null, storeId: c.storeId, storeName: c.storeName };
      groups[key].items.push(c);
   });

   // Resolve selected delivery address
   var addrId = window._medCheckoutSelectedAddr;
   var addr = (_db.addresses || []).find(function(a) { return a.id === addrId; }) || null;

   var hasAnyRx = cart.some(function(c) { return c.rx_required; });
   if (hasAnyRx && !window._cartPrescriptionUrl) {
      alert('Prescription not uploaded. Please add an Rx item to trigger the upload, then retry.');
      if (btn) { btn.disabled = false; btn.textContent = '✅ Place Order (Cash / UPI on Delivery)'; }
      return;
   }

   var now = new Date();
   var yy = String(now.getFullYear()).slice(2);
   var mm = String(now.getMonth() + 1).padStart(2, '0');
   var dd = String(now.getDate()).padStart(2, '0');

   var placed = 0;
   for (var key in groups) {
      var g = groups[key];
      var prov = (_storeProvidersCache || []).find(function(x) { return x.id === g.spId; }) || {};
      var needsAddr = _storeAcceptsDeliveryNow(prov);
      if (needsAddr && !addr) { alert('Please choose a delivery address for ' + (prov.name || g.storeName) + '.'); btn.disabled = false; btn.textContent = '✅ Place Order (Cash / UPI on Delivery)'; return; }
      var orderId = 'ORD-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
      var subtotal = g.items.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
      var order = {
         orderId: orderId, order_id: orderId,
         date: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
         customerName: user.name, customerEmail: user.email, customerPhone: phone,
         items: g.items.map(function(c) { return { id: c.id, name: c.name, qty: c.qty, price: c.price, rx_required: !!c.rx_required }; }),
         total: subtotal,
         method: needsAddr ? 'COD-Delivery' : 'Pickup',     // distinguishes from the legacy "Pickup" default
         status: 'Pending Pickup',                          // same status word — owner workflow is unchanged
         storeId: g.storeId || null, storeName: g.storeName || prov.name || null,
         store_provider_id: g.spId || null,
         prescription_url:  hasAnyRx ? window._cartPrescriptionUrl : null,
         delivery_address:  needsAddr && addr ? addr : null,
         payment_mode:      'COD'
      };
      _db.orders.unshift(order);
      await AppDB.insertOrder(order);
      placed++;
   }

   // Clear cart + Rx for next order
   cart = [];
   window._cartPrescriptionUrl = null;
   updateCartUI();
   closeMedCheckout();
   alert('✅ ' + placed + ' order' + (placed === 1 ? '' : 's') + ' placed!\n\nYou\'ll get the medicines at delivery — pay via cash or UPI then.');
   window.location = 'profile.html?tab=orders';
}

function closePayment() {
   document.getElementById('rpOverlay').classList.add('hidden');
}

function switchTab(tab, btn) {
   document.querySelectorAll('.rp-panel').forEach(p => p.classList.add('hidden'));
   document.querySelectorAll('.rp-tab').forEach(b => b.classList.remove('active'));
   document.getElementById('tab-' + tab).classList.remove('hidden');
   if (btn) btn.classList.add('active');
   if (tab === 'card') loadSavedCardsInPayment();
}

function selectWallet(el) {
   document.querySelectorAll('.wallet-opt').forEach(w => w.classList.remove('selected'));
   el.classList.add('selected');
}

function formatCard(input) {
   let v = input.value.replace(/\D/g, '').substring(0, 16);
   input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function processPayment(method) {
   const amount = document.getElementById('rpAmount').textContent;
   document.querySelectorAll('.rp-panel').forEach(p => p.classList.add('hidden'));
   document.getElementById('tab-success').classList.remove('hidden');
   const txn = 'TXN' + Math.random().toString(36).substring(2, 10).toUpperCase();
   document.getElementById('successMsg').textContent =
      `Paid ${amount} via ${method} · Transaction ID: ${txn}`;

   // Save order to Supabase
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (user) {
      const total = parseFloat(amount.replace(/[₹,]/g, '')) || 0;
      var now = new Date();
      var yy  = String(now.getFullYear()).slice(2);
      var mm  = String(now.getMonth() + 1).padStart(2, '0');
      var dd  = String(now.getDate()).padStart(2, '0');
      var orderId = 'ORD-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
      const order = {
         orderId: orderId, order_id: orderId,
         date: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
         customerName: user.name, customerEmail: user.email, customerPhone: phone,
         items: cart.map(c => ({ id: c.id, name: c.name, qty: c.qty, price: c.price })),
         total, method, status: 'Confirmed',
         storeId: null, storeName: null
      };
      _db.orders.unshift(order);
      AppDB.insertOrder(order);

      // Save new card if checkbox ticked
      if (method === 'Card') {
         const saveCheck = document.getElementById('saveCardCheck');
         if (saveCheck && saveCheck.checked) {
            const num  = (document.getElementById('cardNum').value || '').replace(/\s/g, '');
            const exp  = (document.getElementById('cardExpiry').value || '').trim();
            const name = (document.getElementById('cardHolder').value || '').trim();
            if (num.length >= 12 && exp && name) {
               const cards = getSavedCards(user.email);
               const last4 = num.slice(-4);
               const brand = getCardBrand(num);
               if (!cards.some(c => c.last4 === last4 && c.expiry === exp)) {
                  const newCard = { id: crypto.randomUUID(), last4, expiry: exp, nameOnCard: name, brand };
                  cards.push(newCard);
                  _db.cards = cards;
                  AppDB.insertCard({ id: newCard.id, user_email: user.email, last4, expiry: exp, name_on_card: name, brand });
               }
            }
         }
      }
   }
}

function paymentDone() {
   cart = [];
   updateCartUI();
   closePayment();
   switchTab('upi', document.querySelector('.rp-tab'));
   goHome();
   showToast(' Order placed successfully! Thank you!');
}

// ── NAVIGATION ──
function goDashboard() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { goHome(); return; }
   if (isAdmin(user.email)) { window.location.href = 'admin.html'; return; }
   if (user.role === 'storeowner') { window.location.href = 'shopowner.html'; return; }
   goHome();
}

function goHome() {
   document.getElementById('heroSection').classList.remove('hidden');
   document.getElementById('productsSection').classList.add('hidden');
   var aptSec = document.getElementById('appointmentSection');
   if (aptSec) aptSec.classList.add('hidden');
   // Restore the product-category row hidden by showBookAppointment / showStoresList
   var cats = document.querySelector('.header-categories');
   if (cats) cats.classList.remove('hidden');
   // Remove the "My Orders" button injected by Stores flow
   _setStoresChromeMode(false);
   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   const allCat = document.getElementById('cat-all');
   if (allCat) allCat.classList.add('active');
   var storesBtn = document.querySelector('.header-stores-btn');
   if (storesBtn) storesBtn.classList.remove('active');
   var aptBtn = document.querySelector('.header-apt-btn');
   if (aptBtn) aptBtn.classList.remove('active');
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

function showByCategory(groupName) {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = groupName;
   const grid = document.getElementById('productsGrid');
   grid.style.display = '';
   grid.innerHTML = '';
   Object.entries(products).forEach(([catKey, catData]) => {
      if (catData.category === groupName) {
         catData.items.forEach(item => renderCard({ ...item, type: catData.type }, catKey, grid));
      }
   });
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

function catClick(cat) {
   // Hide the appointment section when navigating to product categories
   var aptSec = document.getElementById('appointmentSection');
   if (aptSec) aptSec.classList.add('hidden');
   var aptBtn = document.querySelector('.header-apt-btn');
   if (aptBtn) aptBtn.classList.remove('active');
   // Restore the product-category row in case it was hidden by appointment view
   var cats = document.querySelector('.header-categories');
   if (cats) cats.classList.remove('hidden');

   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   // Stores is a header button, not a cat-item — toggle its active class separately
   var storesBtn = document.querySelector('.header-stores-btn');
   if (storesBtn) storesBtn.classList.toggle('active', cat === 'stores');
   const el = document.getElementById('cat-' + cat);
   if (el) el.classList.add('active');
   if (cat === 'all') {
      showAllProducts();
   } else if (cat === 'stores') {
      showStoresList();
   } else if (cat === 'contact') {
      showContactInfo();
   } else if (MAIN_CATS[cat]) {
      // Single sub-category main cat (e.g. flowers) — go straight to products
      if (MAIN_CATS[cat].keys.length === 1) {
         showProducts(MAIN_CATS[cat].keys[0]);
      } else {
         showMainCategory(cat);
      }
   }
}

function showContactInfo() {
   document.getElementById('heroSection').classList.add('hidden');
   const section = document.getElementById('productsSection');
   section.classList.remove('hidden');
   document.getElementById('productTitle').textContent = '📞 Contact & Support';
   if (typeof _setStoresChromeMode === 'function') _setStoresChromeMode(false);

   const grid = document.getElementById('productsGrid');
   grid.style.display = 'block';

   const s = getAdminSettings() || {};
   const phone     = s.phone        || '';
   const whatsapp  = s.whatsapp     || '';
   const email     = s.contactEmail || '';
   const address   = s.address      || '';
   const storeName = s.storeName    || 'MyStore';

   if (!phone && !whatsapp && !email && !address) {
      grid.innerHTML = '<p style="color:#999;padding:40px;text-align:center;font-size:0.95rem">Contact information has not been set up yet.</p>';
      return;
   }

   var rows = '';
   if (phone)    rows += '<div class="contact-row"><div class="contact-icon">📞</div><div class="contact-detail"><div class="contact-label">Phone</div><a href="tel:' + phone.replace(/\s/g,'') + '" class="contact-val">' + phone + '</a></div></div>';
   if (whatsapp) rows += '<div class="contact-row"><div class="contact-icon">💬</div><div class="contact-detail"><div class="contact-label">WhatsApp</div><a href="https://wa.me/' + whatsapp.replace(/\D/g,'') + '" class="contact-val" target="_blank">' + whatsapp + '</a></div></div>';
   if (email)    rows += '<div class="contact-row"><div class="contact-icon">✉️</div><div class="contact-detail"><div class="contact-label">Email</div><a href="mailto:' + email + '" class="contact-val">' + email + '</a></div></div>';
   if (address)  rows += '<div class="contact-row"><div class="contact-icon">📍</div><div class="contact-detail"><div class="contact-label">Store Address</div><div class="contact-val">' + address.replace(/\n/g,'<br>') + '</div></div></div>';

   grid.innerHTML =
      '<div class="contact-info-panel">' +
         '<div class="contact-store-name">' + storeName + '</div>' +
         '<p class="contact-tagline">We\'re happy to help. Reach us through any of the channels below.</p>' +
         rows +
      '</div>';
}

// ── APPOINTMENTS ─────────────────────────────────────────
// Category metadata (label, icon, description). Providers + doctors live in
// the apt_providers table — managed via the Admin → Appointments tab.
// Categories are now stored in the apt_categories table (admin manages via UI).
// APT_CAT_META is a live cache, populated by loadAptCategories() on first use.
let APT_CAT_META = {
   // Safe defaults so pages don't break if loadAptCategories() hasn't completed yet.
   hospital: { icon: '🏥', label: 'Hospitals',      desc: '', staffLabel: 'Doctors', staffIcon: '👨‍⚕️' },
   dental:   { icon: '🦷', label: 'Dental Clinics', desc: '', staffLabel: 'Doctors', staffIcon: '👨‍⚕️' }
};
let _aptCatsLoaded = false;

async function loadAptCategories(force) {
   if (_aptCatsLoaded && !force) return APT_CAT_META;
   var rows = await AppDB.getCategories();
   if (rows && rows.length) {
      var next = {};
      rows.forEach(function(r) {
         next[r.id] = {
            icon: r.icon || '🏥',
            label: r.label,
            desc: r.description || '',
            staffLabel: r.staff_label || 'Staff',
            staffIcon:  r.staff_icon  || '👥',
            sortOrder:  r.sort_order || 100
         };
      });
      APT_CAT_META = next;
   }
   _aptCatsLoaded = true;
   return APT_CAT_META;
}

// Pick the right tab label/icon for an owner based on their providers' categories.
// Returns { label, icon } — falls back to generic "Staff" if owner runs multiple cats.
function _staffLabelForCategories(categories) {
   var unique = Array.from(new Set(categories.filter(Boolean)));
   if (unique.length === 1) {
      var meta = APT_CAT_META[unique[0]];
      if (meta && meta.staffLabel) return { label: meta.staffLabel, icon: meta.staffIcon || '👥' };
   }
   return { label: 'Staff', icon: '👥' };
}
const APT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let _aptProvidersCache = null;  // [{id, category, name, ..., doctors:[...]}]
let _aptBookCtx = null;

async function loadAptProviders(force) {
   if (_aptProvidersCache && !force) return _aptProvidersCache;
   _aptProvidersCache = await AppDB.getProviders();
   return _aptProvidersCache;
}

// ── STORE CATEGORIES & PROVIDERS (retail side, parity with apt_* ) ─────
let STORE_CAT_META = {};            // { id: {icon,label,desc,sortOrder} }
let _storeCatsLoaded = false;
let _storeProvidersCache = null;    // [{id, category, name, ...}]

// Customer-facing check: does this store accept NEW home-delivery orders RIGHT
// NOW? Honors both the admin's door_delivery setting AND the owner's temporary
// delivery_paused toggle. Label/footer fallback for EXISTING orders uses just
// door_delivery so an order's display doesn't flip if the owner pauses later.
function _storeAcceptsDeliveryNow(store) {
   return !!(store && store.door_delivery && !store.delivery_paused);
}

async function loadStoreCategories(force) {
   if (_storeCatsLoaded && !force) return STORE_CAT_META;
   var rows = await AppDB.getStoreCategories();
   var next = {};
   (rows || []).forEach(function(r) {
      next[r.id] = {
         icon:           r.icon  || '🏪',
         label:          r.label,
         desc:           r.description || '',
         sortOrder:      r.sort_order   || 100,
         catalogFields:  Array.isArray(r.catalog_fields) ? r.catalog_fields : []
      };
   });
   STORE_CAT_META = next;
   _storeCatsLoaded = true;
   return STORE_CAT_META;
}

async function loadStoreProviders(force) {
   if (_storeProvidersCache && !force) return _storeProvidersCache;
   _storeProvidersCache = await AppDB.getStoreProviders();
   return _storeProvidersCache;
}

function _storeProvidersByCat(catKey) {
   return (_storeProvidersCache || []).filter(function(p) { return p.category === catKey; });
}

function _aptGetProvider(id)        { return (_aptProvidersCache || []).find(function(p) { return p.id === id; }); }
function _aptProvidersByCat(catKey) { return (_aptProvidersCache || []).filter(function(p) { return p.category === catKey; }); }
// Live doctor-name lookup. The appointment's stored `doctor_name` is a
// snapshot from booking time — if the owner later renames or removes that
// doctor from the Doctors tab, the snapshot becomes stale. This helper
// resolves the CURRENT name (or empty string if the doctor no longer exists).
function _doctorNameFor(apt) {
   if (!apt) return '';
   var prov = _aptGetProvider(apt.provider_id);
   if (!prov) return apt.doctor_name || '';     // providers cache not loaded yet
   var doc = (prov.doctors || []).find(function(d) { return d.id === apt.doctor_id; });
   return doc ? doc.name : '';                  // empty → doctor deleted
}

function _aptGetDoctor(provider, doctorId) {
   if (!provider || !provider.doctors) return null;
   return provider.doctors.find(function(d) { return d.id === doctorId; });
}

// Parse availability text like "09:00-12:00, 14:00-18:00" → [{start,end}, ...]
// Returns [] for empty / "off". Invalid windows are dropped.
function parseAvailLine(text) {
   if (!text) return [];
   var s = String(text).trim().toLowerCase();
   if (!s || s === 'off' || s === '-') return [];
   var out = [];
   s.split(',').forEach(function(part) {
      var m = part.trim().match(/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/);
      if (!m) return;
      var start = String(m[1]).padStart(2,'0') + ':' + m[2];
      var end   = String(m[3]).padStart(2,'0') + ':' + m[4];
      if (start < end) out.push({ start: start, end: end });
   });
   return out;
}

function formatAvailLine(windows) {
   if (!windows || !windows.length) return 'off';
   return windows.map(function(w) { return w.start + '-' + w.end; }).join(', ');
}

async function showBookAppointment() {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.add('hidden');
   document.getElementById('appointmentSection').classList.remove('hidden');
   document.getElementById('aptSectionTitle').textContent = '📅 Book Appointment';
   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   var storesBtn = document.querySelector('.header-stores-btn');
   if (storesBtn) storesBtn.classList.remove('active');
   var aptBtn = document.querySelector('.header-apt-btn');
   if (aptBtn) aptBtn.classList.add('active');
   // Hide the product-category row — categories are irrelevant on the appointment flow
   var cats = document.querySelector('.header-categories');
   if (cats) cats.classList.add('hidden');
   // Show the "My Appointments" shortcut next to the section title
   _addAptHistoryBtn();
   document.getElementById('aptContent').innerHTML = '<p style="text-align:center;color:#999;padding:40px">Loading…</p>';
   await loadAptCategories();
   await loadAptProviders();
   renderAptCategories();
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inject a "📋 My Appointments" link into the appointment section header (idempotent)
function _addAptHistoryBtn() {
   var header = document.querySelector('#appointmentSection .apt-section-header');
   if (!header || header.querySelector('.apt-history-btn')) return;
   var btn = document.createElement('button');
   btn.className   = 'btn-back apt-history-btn';
   btn.style.marginLeft = '8px';
   btn.innerHTML   = '📋 My Appointments';
   btn.onclick     = function() {
      var u = JSON.parse(sessionStorage.getItem('loggedInUser'));
      if (!u) { promptAuth('Please log in to view your appointment history.'); return; }
      window.location.href = 'profile.html?tab=appointments';
   };
   // Insert next to the existing Back button so they sit together on the right
   var backBtn = header.querySelector('.btn-back');
   if (backBtn) backBtn.parentNode.insertBefore(btn, backBtn);
   else header.appendChild(btn);
}

function renderAptCategories() {
   var html = '<div class="apt-cats-grid">';
   Object.keys(APT_CAT_META).forEach(function(k) {
      var c = APT_CAT_META[k];
      var count = _aptProvidersByCat(k).length;
      html += '<div class="apt-cat-card" onclick="showAptCategory(\'' + k + '\')">' +
                '<div class="apt-cat-icon">' + c.icon + '</div>' +
                '<div class="apt-cat-label">' + c.label + '</div>' +
                '<div class="apt-cat-desc">' + c.desc + '</div>' +
                '<div class="apt-cat-count">' + count + (count === 1 ? ' place' : ' places') + ' available</div>' +
             '</div>';
   });
   html += '</div>';
   document.getElementById('aptContent').innerHTML = html;
}

function showAptCategory(catKey) {
   var meta = APT_CAT_META[catKey];
   if (!meta) return;
   var providers = _aptProvidersByCat(catKey);
   document.getElementById('aptSectionTitle').textContent = meta.icon + ' ' + meta.label;
   var html = '<button class="apt-back-btn" onclick="showBookAppointment()">← All Categories</button>';
   if (!providers.length) {
      html += '<p style="text-align:center;color:#999;padding:40px">No ' + meta.label.toLowerCase() + ' available yet.</p>';
   } else {
      html += '<div class="apt-providers-grid">';
      providers.forEach(function(p) {
         var docCount = (p.doctors || []).length;
         var icon = p.icon || meta.icon;
         html += '<div class="apt-provider-card">' +
                   '<div class="apt-provider-top">' +
                      '<div class="apt-provider-icon">' + icon + '</div>' +
                      '<div>' +
                         '<div class="apt-provider-name">' + p.name + '</div>' +
                         '<div class="apt-provider-tagline">' + (p.tagline || '') + '</div>' +
                      '</div>' +
                   '</div>' +
                   (p.address ? '<div class="apt-provider-meta">📍 ' + _mapsLink(p.address) + '</div>' : '') +
                   (p.timing  ? '<div class="apt-provider-meta">🕒 ' + p.timing  + '</div>' : '') +
                   (p.phone   ? '<div class="apt-provider-meta" style="color:#1a73e8;font-weight:600">📞 ' + _phoneLink(p.phone) + '</div>' : '') +
                   '<div class="apt-provider-footer">' +
                      '<span>' + docCount + ' doctor' + (docCount === 1 ? '' : 's') + '</span>' +
                      '<button class="apt-view-btn" onclick="showAptProvider(\'' + catKey + '\',\'' + p.id + '\')">View Doctors →</button>' +
                   '</div>' +
                '</div>';
      });
      html += '</div>';
   }
   document.getElementById('aptContent').innerHTML = html;
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAptProvider(catKey, providerId) {
   var meta = APT_CAT_META[catKey];
   var provider = _aptGetProvider(providerId);
   if (!provider) return;
   var icon = provider.icon || (meta && meta.icon) || '🏥';
   document.getElementById('aptSectionTitle').textContent = icon + ' ' + provider.name;
   var html = '<button class="apt-back-btn" onclick="showAptCategory(\'' + catKey + '\')">← ' + (meta ? meta.label : 'Back') + '</button>' +
              '<div class="apt-provider-info-bar">' +
                 (provider.address ? '<span>📍 ' + _mapsLink(provider.address) + '</span>' : '') +
                 (provider.timing  ? '<span>🕒 ' + provider.timing  + '</span>' : '') +
                 (provider.phone   ? '<span style="color:#1a73e8;font-weight:600">📞 ' + _phoneLink(provider.phone) + '</span>' : '') +
              '</div>';
   var doctors = provider.doctors || [];
   if (!doctors.length) {
      html += '<p style="text-align:center;color:#999;padding:40px">No doctors listed yet.</p>';
   } else {
      html += '<div class="apt-doctor-grid">';
      doctors.forEach(function(d) {
         var initials = d.name.replace(/^Dr\.?\s*/i, '').split(' ').map(function(s) { return s[0]; }).slice(0, 2).join('').toUpperCase();
         var daysSummary = summarizeDoctorDays(d.availability);
         var modeBadge = d.booking_mode === 'token'
            ? '<span class="apt-mode-badge mode-token">🎟 Token-only</span>'
            : '<span class="apt-mode-badge mode-slot">🕒 Slot booking</span>';
         var photoBlock = d.photo
            ? '<img class="apt-doc-photo" src="' + d.photo.replace(/"/g,'&quot;') + '" alt="' + d.name + '" onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'apt-doc-photo apt-doc-photo-fallback\',textContent:\'' + initials + '\'}))"/>'
            : '<div class="apt-doc-photo apt-doc-photo-fallback">' + initials + '</div>';
         html += '<div class="apt-doc-card">' +
                   photoBlock +
                   '<div class="apt-doc-body">' +
                      '<div class="apt-doc-name">' + d.name + '</div>' +
                      '<div class="apt-doc-qual">' + (d.qual || '') + '</div>' +
                      '<div class="apt-doc-spec">' + (d.speciality || '') + '</div>' +
                      modeBadge +
                      '<div class="apt-doc-days">📅 ' + daysSummary + '</div>' +
                      _doctorVacationBanner(d) +
                      '<div class="apt-doc-footer">' +
                         '<div class="apt-doc-fee">₹' + (d.fee || 0) + '<span>/visit</span></div>' +
                         '<button class="apt-book-btn" onclick="openAptBookModal(\'' + catKey + '\',\'' + providerId + '\',\'' + d.id + '\')">Book</button>' +
                      '</div>' +
                   '</div>' +
                '</div>';
      });
      html += '</div>';
   }
   document.getElementById('aptContent').innerHTML = html;
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function summarizeDoctorDays(avail) {
   if (!avail) return 'Not set';
   var openDays = [];
   for (var i = 0; i < 7; i++) {
      var arr = avail[i] || avail[String(i)] || [];
      if (arr.length) openDays.push(APT_DAYS[i]);
   }
   if (!openDays.length) return 'Currently unavailable';
   if (openDays.length === 7) return 'All days';
   return openDays.join(', ');
}

// Convenience wrapper: open the booking modal in FREE FOLLOW-UP mode for a
// completed appointment. Same doctor/provider, fee shown as ₹0, dates restricted
// to within the provider's free_followup_days window.
// If invoked from a page that doesn't have the booking modal (e.g. profile.html
// where the customer's My Appointments lives), stash the context and redirect
// to home.html — the resume handler below opens the modal after navigation.
function openAptBookModalFollowup(catKey, providerId, doctorId, originalAptId, deadlineIso) {
   if (!document.getElementById('aptBookModal')) {
      sessionStorage.setItem('pendingFollowupBooking', JSON.stringify({
         catKey: catKey,
         providerId: providerId,
         doctorId: doctorId,
         originalAptId: originalAptId,
         deadlineIso: deadlineIso
      }));
      window.location.href = 'home.html';
      return;
   }
   openAptBookModal(catKey, providerId, doctorId, originalAptId, deadlineIso);
}

// On home.html load, if a follow-up booking was queued from another page,
// resume it once the page is ready (providers loaded, modal in the DOM).
(function _resumePendingFollowup() {
   if (typeof window === 'undefined') return;
   document.addEventListener('DOMContentLoaded', function() {
      if (!document.getElementById('aptBookModal')) return;   // not on home
      var raw = sessionStorage.getItem('pendingFollowupBooking');
      if (!raw) return;
      sessionStorage.removeItem('pendingFollowupBooking');
      var ctx;
      try { ctx = JSON.parse(raw); } catch (e) { return; }
      if (!ctx || !ctx.providerId || !ctx.doctorId || !ctx.originalAptId) return;
      // Defer briefly so all init code (provider cache, etc.) settles first
      setTimeout(async function() {
         try {
            if (typeof loadAptProviders === 'function') await loadAptProviders(true);
         } catch (e) { /* ignore */ }
         openAptBookModalFollowup(ctx.catKey, ctx.providerId, ctx.doctorId, ctx.originalAptId, ctx.deadlineIso);
      }, 400);
   });
})();

async function openAptBookModal(catKey, providerId, doctorId, followupOfAptId, followupDeadline) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in or sign up to book an appointment.'); return; }

   var provider = _aptGetProvider(providerId);
   var doctor = _aptGetDoctor(provider, doctorId);
   if (!doctor) return;

   var isFollowup = !!followupOfAptId;
   _aptBookCtx = {
      catKey: catKey, providerId: providerId, doctor: doctor, provider: provider,
      date: null, slot: null,
      isFollowup: isFollowup,
      followupOf: followupOfAptId || '',
      followupDeadline: followupDeadline || ''
   };
   var isTokenMode = doctor.booking_mode === 'token';

   var modeLine = isTokenMode ? ' · 🎟 Token mode' : '';
   document.getElementById('aptBookModalDoc').textContent  = (isFollowup ? '🔁 FREE FOLLOW-UP — ' : '') + doctor.name + ' · ' + provider.name;
   document.getElementById('aptBookModalSpec').textContent = (doctor.speciality || '') + (doctor.qual ? ' · ' + doctor.qual : '') + modeLine;
   document.getElementById('aptBookModalFee').textContent  = isFollowup
      ? 'Free follow-up — no fee charged'
      : 'Consultation fee: ₹' + (doctor.fee || 0);

   // Next 7 dates — disable days the doctor isn't available
   var dateHtml = '';
   for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      var label = i === 0 ? 'TODAY' : (i === 1 ? 'TMRW' : APT_DAYS[d.getDay()]);
      var monthShort = d.toLocaleDateString('en-IN', { month: 'short' });
      var dayIdx = d.getDay();
      var avail = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
      var onVac = _isOnVacation(doctor, dateStr);
      var pastDeadline = isFollowup && _aptBookCtx.followupDeadline && dateStr > _aptBookCtx.followupDeadline;
      var off   = avail.length === 0 || onVac || pastDeadline;
      var click = off ? '' : ' onclick="selectAptDate(\'' + dateStr + '\', this)"';
      var titleTxt = pastDeadline ? 'Past free follow-up window' : (onVac ? 'Doctor on leave' : 'Doctor unavailable');
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="' + titleTxt + '"' : '';
      var leaveTag = onVac ? '<div style="font-size:0.62rem;color:#e65100;font-weight:700">🏖 ON LEAVE</div>'
                   : pastDeadline ? '<div style="font-size:0.62rem;color:#c62828;font-weight:700">⏰ EXPIRED</div>'
                   : '';
      dateHtml += '<div class="apt-date-btn"' + click + extra + '>' +
                     '<div class="apt-date-day">' + label + '</div>' +
                     '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
                     leaveTag +
                  '</div>';
   }
   document.getElementById('aptDateButtons').innerHTML = dateHtml;

   document.getElementById('aptSlotSection').classList.add('hidden');
   document.getElementById('aptSlotButtons').innerHTML = '';
   // Pre-fill patient details. For follow-up bookings, use the ORIGINAL
   // appointment's patient (same person coming back). For regular bookings,
   // fall back to the account holder's name/phone.
   var pre = { name: user.name || '', phone: user.phone || '', age: '', address: '', reason: '' };
   if (isFollowup && followupOfAptId) {
      try {
         var hist = await AppDB.getAppointments(user.email);
         var orig = (hist || []).find(function(a) { return a.apt_id === followupOfAptId; });
         if (orig) {
            pre.name    = orig.patient_name    || pre.name;
            pre.phone   = orig.patient_phone   || pre.phone;
            pre.age     = orig.patient_age     || '';
            pre.address = orig.patient_address || '';
         }
      } catch (e) { /* fall back to defaults */ }
   }
   document.getElementById('aptPatientName').value    = pre.name;
   document.getElementById('aptPatientPhone').value   = pre.phone;
   document.getElementById('aptPatientAge').value     = pre.age;
   document.getElementById('aptPatientAddress').value = pre.address;
   document.getElementById('aptPatientReason').value  = pre.reason;
   document.getElementById('aptConfirmBtn').disabled = true;

   document.getElementById('aptBookModal').classList.remove('hidden');
}

async function selectAptDate(dateStr, btn) {
   if (!_aptBookCtx) return;
   _aptBookCtx.date = dateStr;
   _aptBookCtx.slot = null;
   document.querySelectorAll('.apt-date-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');

   var doctor = _aptBookCtx.doctor;
   var isTokenMode = doctor.booking_mode === 'token';

   var caps = _doctorCaps(doctor);

   // ── Token-only mode: check ONLINE daily cap; show offline-only hint if needed ──
   if (isTokenMode) {
      var section = document.getElementById('aptSlotSection');
      var btnsEl  = document.getElementById('aptSlotButtons');
      section.classList.remove('hidden');
      btnsEl.innerHTML = '<p style="color:#666;font-size:0.85rem">Checking availability…</p>';
      var existing = await AppDB.getDoctorBookings(doctor.id, dateStr);
      var onlineCount  = existing.filter(function(b) { return b.booking_source !== 'offline'; }).length;
      var offlineCount = existing.filter(function(b) { return b.booking_source === 'offline'; }).length;

      if (onlineCount >= caps.dailyOnline) {
         var canCallOffline = offlineCount < caps.dailyOffline;
         var provider = _aptBookCtx.provider;
         var phone = provider && provider.phone;
         btnsEl.innerHTML = '<div style="background:#fff3e0;border:1px solid #ffcc80;border-radius:10px;padding:14px">' +
            '<div style="color:#c62828;font-weight:600;font-size:0.92rem">Online slots are full for today.</div>' +
            (canCallOffline && phone
               ? '<div style="margin-top:6px;font-size:0.85rem;color:#555">📞 Walk-in / phone slots are still available — call <a href="tel:' + phone.replace(/\D/g,'') + '" style="color:#1a73e8;font-weight:600">' + phone + '</a> to book offline.</div>'
               : '<div style="margin-top:6px;font-size:0.85rem;color:#555">Please pick another day.</div>') +
            '</div>';
         document.getElementById('aptConfirmBtn').disabled = true;
         return;
      }
      var nextToken = existing.length + 1;   // unique across online+offline
      _aptBookCtx.slot = '';
      btnsEl.innerHTML =
         '<div style="background:#e3f2fd;border:1px solid #90caf9;border-radius:10px;padding:14px;text-align:center">' +
            '<div style="font-size:0.82rem;color:#555;margin-bottom:4px">Your token will be</div>' +
            '<div style="font-size:1.8rem;font-weight:800;color:#1a73e8;letter-spacing:0.04em">T' + nextToken + '</div>' +
            '<div style="font-size:0.78rem;color:#777;margin-top:6px">' + onlineCount + ' of ' + caps.dailyOnline + ' online tokens used today</div>' +
         '</div>';
      document.getElementById('aptConfirmBtn').disabled = false;
      return;
   }

   // ── Slot mode (default): generate slots using doctor's configured duration ──
   var d = new Date(dateStr + 'T00:00:00');
   var dayIdx = d.getDay();
   var windows = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
   var duration = caps.duration;

   // For today: a slot is still bookable as long as its END time is in the future
   // (e.g. 2:00 PM slot with 60-min duration is bookable until 3:00 PM).
   var now = new Date();
   var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
   var isToday = dateStr === todayStr;
   var nowMin = isToday ? (now.getHours() * 60 + now.getMinutes()) : -1;

   document.getElementById('aptSlotSection').classList.remove('hidden');
   document.getElementById('aptSlotButtons').innerHTML = '<p style="color:#999;font-size:0.85rem">Loading slots…</p>';

   // Fetch existing bookings to compute online/offline fill per slot.
   // Follow-ups bypass capacity by design — exclude them from these counts.
   var existing = await AppDB.getDoctorBookings(doctor.id, dateStr);
   var onlineCountsBySlot  = {};
   var offlineCountsBySlot = {};
   existing.forEach(function(b) {
      if (b.is_followup) return;
      if (b.booking_source === 'offline') offlineCountsBySlot[b.slot] = (offlineCountsBySlot[b.slot] || 0) + 1;
      else                                 onlineCountsBySlot[b.slot]  = (onlineCountsBySlot[b.slot]  || 0) + 1;
   });
   var provider = _aptBookCtx.provider;
   var phone = provider && provider.phone;

   var slotHtml = '';
   windows.forEach(function(w) {
      var startMin = _hhmmToMin(w.start);
      var endMin   = _hhmmToMin(w.end);
      for (var t = startMin; t + duration <= endMin; t += duration) {
         // For today, hide slot only if its END time has already passed
         if (isToday && (t + duration) <= nowMin) continue;
         var hh = Math.floor(t / 60);
         var mm = t % 60;
         var slot24 = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
         var hour12 = ((hh % 12) || 12);
         var label  = hour12 + ':' + String(mm).padStart(2, '0') + ' ' + (hh < 12 ? 'AM' : 'PM');
         var onCnt  = onlineCountsBySlot[slot24]  || 0;
         var offCnt = offlineCountsBySlot[slot24] || 0;
         var onlineFull  = onCnt  >= caps.slotOnline;
         var offlineFull = offCnt >= caps.slotOffline;

         if (onlineFull && !offlineFull) {
            var callTxt = phone ? ('📞 ' + phone) : '📞 Call hospital';
            slotHtml += '<button class="apt-slot-btn slot-callbook" disabled title="Online slots full — call to book offline">' +
                          label + '<br><small style="font-weight:600">' + callTxt + '</small>' +
                        '</button>';
         } else if (onlineFull && offlineFull) {
            slotHtml += '<button class="apt-slot-btn slot-full" disabled>' +
                          label + '<br><small style="font-weight:400">Full</small>' +
                        '</button>';
         } else {
            var remaining = caps.slotOnline - onCnt;
            var subtitle = caps.slotOnline === 1 ? 'Available' : (remaining + ' of ' + caps.slotOnline + ' left');
            slotHtml += '<button class="apt-slot-btn slot-available" onclick="selectAptSlot(\'' + slot24 + '\', this)">' +
                          label + (caps.slotOnline > 1 ? '<br><small style="font-weight:400;opacity:0.7">' + subtitle + '</small>' : '') +
                        '</button>';
         }
      }
   });
   if (!slotHtml) {
      slotHtml = '<p style="color:#999;font-size:0.85rem">' +
                 (isToday ? 'No more slots available today. Try tomorrow.' : 'No time slots available on this day.') +
                 '</p>';
   }
   document.getElementById('aptSlotButtons').innerHTML = slotHtml;
   document.getElementById('aptConfirmBtn').disabled = true;
}

function _hhmmToMin(s) {
   var p = String(s).split(':');
   return parseInt(p[0], 10) * 60 + parseInt(p[1] || '0', 10);
}

// "14:00" → "2:00 PM"  · "09:30" → "9:30 AM"  · "" / undefined → ""
function _formatSlot12(slot24) {
   if (!slot24) return '';
   var p = String(slot24).split(':');
   var hh = parseInt(p[0], 10);
   var mm = String(p[1] || '00').padStart(2, '0');
   if (isNaN(hh)) return slot24;
   var hour12 = (hh % 12) || 12;
   var ampm = hh < 12 ? 'AM' : 'PM';
   return hour12 + ':' + mm + ' ' + ampm;
}

// Pick a stable colour for the token badge based on doctor + date + slot.
// Same slot → same colour. Different slots → different colours. Helps the
// owner visually group bookings that belong to the same slot.
// Token display label: 'T1' for regular, 'FT1' for free follow-ups.
function _tokenLabel(apt) {
   if (!apt || !apt.token) return '';
   return (apt.is_followup ? 'FT' : 'T') + apt.token;
}

// Wrap a phone number with a tel: link so mobile clicks open the dialer.
function _phoneLink(phone) {
   if (!phone) return '';
   var digits = String(phone).replace(/\D/g, '');
   var safe   = String(phone).replace(/"/g, '&quot;');
   return '<a href="tel:' + digits + '" style="color:inherit;text-decoration:underline" title="Call this number">' + safe + '</a>';
}

// Wrap an address string with a Google Maps link. Opens in a new tab. Safe
// when address is empty (returns the empty string so concatenation still works).
function _mapsLink(address) {
   if (!address) return '';
   var safe = String(address).replace(/"/g, '&quot;');
   var url  = 'https://maps.google.com/?q=' + encodeURIComponent(address);
   return '<a href="' + url + '" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline" title="Open in Google Maps">' + safe + '</a>';
}

function _tokenBadgeColor(apt) {
   // Same hash for regular and follow-up tokens — different slots get different
   // colours so the owner can group by slot visually. The "FT" prefix already
   // distinguishes follow-ups from regular bookings.
   var key = (apt.doctor_id || '') + '|' + (apt.date || '') + '|' + (apt.slot || 'TOKEN');
   var palette = [
      '#1a73e8', // blue
      '#7b1fa2', // purple
      '#2e7d32', // green
      '#00897b', // teal
      '#ef6c00', // orange
      '#c2185b', // pink
      '#5d4037', // brown
      '#0277bd', // light blue
      '#6a1b9a', // deep purple
      '#558b2f'  // lime
   ];
   var hash = 0;
   for (var i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) | 0;
   return palette[Math.abs(hash) % palette.length];
}

// Returns null if the booking is allowed, or a friendly error string if it should be blocked.
// Checks (in order): no-show auto-block → per-doctor cap → daily cap.
// Test / admin whitelist — these accounts bypass ALL booking-abuse checks.
// Useful during development so the team can spam-test without locking themselves
// out. Remove or trim this list once the site is fully live.
var ABUSE_WHITELIST = [
   'g.ramkumar1533@gmail.com',
   'lakshmankumar5434@gmail.com'
];

async function _checkBookingAbuse(user, doctor, providerId, dateStr, patientName, patientPhone) {
   var emailLc = (user.email || '').toLowerCase();

   // Whitelist: skip every check for admin accounts + test accounts.
   if (isAdmin(user.email) || ABUSE_WHITELIST.indexOf(emailLc) !== -1) {
      return null;
   }

   var settings = getAdminSettings();
   var maxPerDoctor    = parseInt(settings.bookingsPerDoctorPerDay,   10) || 3;
   var maxPerCustomer  = parseInt(settings.bookingsPerCustomerPerDay, 10) || 5;
   var noShowThreshold = parseInt(settings.noShowBlockThreshold,      10) || 5;
   var noShowDays      = parseInt(settings.noShowBlockDays,           10) || 30;
   var dailyCancelCap  = parseInt(settings.cancelsPerDayCap,          10) || 5;
   var cooldownMs      = (parseInt(settings.cancelCooldownMinutes,    10) || 5) * 60 * 1000;

   var history = await AppDB.getAppointments(emailLc);

   // ── Cancel-cooldown: most recent customer cancel < 5 min ago ──
   var nowMs = Date.now();
   var recentCancelMs = (history.filter(function(a) {
      return a.cancelled_by === 'customer' && a.cancelled_at;
   })).reduce(function(maxMs, a) {
      var t = new Date(a.cancelled_at).getTime();
      return isNaN(t) ? maxMs : Math.max(maxMs, t);
   }, 0);
   if (recentCancelMs > 0 && (nowMs - recentCancelMs) < cooldownMs) {
      var minsLeft = Math.ceil((cooldownMs - (nowMs - recentCancelMs)) / 60000);
      return 'Please wait ' + minsLeft + ' more minute' + (minsLeft === 1 ? '' : 's') + ' before booking again (you just cancelled an appointment).';
   }

   // ── Daily cancel cap: >5 customer cancels today → block rest of the day ──
   var todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
   var todayStartMs = todayStart.getTime();
   var todaysCancels = history.filter(function(a) {
      if (a.cancelled_by !== 'customer' || !a.cancelled_at) return false;
      var t = new Date(a.cancelled_at).getTime();
      return !isNaN(t) && t >= todayStartMs;
   });
   if (todaysCancels.length >= dailyCancelCap) {
      return 'You have cancelled ' + todaysCancels.length + ' appointment' + (todaysCancels.length === 1 ? '' : 's') + ' today. New bookings are blocked for the rest of the day. Please try again tomorrow.';
   }

   // Follow-ups are continuations of an already-paid consultation, so they
   // never count toward abuse caps (per-doctor, per-customer, or no-show counts).
   var regularHistory = history.filter(function(a) { return !a.is_followup; });

   // Duplicate-patient guard: same name + same phone shouldn't book the same
   // doctor on the same day twice. Fires first because it's the most likely
   // mistake and gives the clearest error to the user.
   if (patientName && patientPhone) {
      var nameLc  = patientName.toLowerCase().trim();
      var phoneDg = String(patientPhone).replace(/\D/g, '');
      var dupSame = regularHistory.filter(function(a) {
         return a.doctor_id === doctor.id
             && a.date === dateStr
             && a.status !== 'Cancelled' && a.status !== 'No-show'
             && (a.patient_name  || '').toLowerCase().trim() === nameLc
             && String(a.patient_phone || '').replace(/\D/g, '') === phoneDg;
      });
      if (dupSame.length > 0) {
         return 'A booking already exists for ' + patientName + ' (' + patientPhone + ') with ' + doctor.name + ' on ' + dateStr + '. The same patient can\'t book twice with the same doctor on the same day.';
      }
   }

   // No-show auto-block (across all providers).
   // If an admin has approved an appeal, only no-shows AFTER approval count
   // (gives the customer a clean slate).
   var cutoffDate = new Date(Date.now() - noShowDays * 24 * 60 * 60 * 1000);
   var cutoffYmd  = cutoffDate.toISOString().slice(0, 10);
   var approvalDate = '';
   try {
      var u = (getUsers() || []).find(function(x) { return (x.email || '').toLowerCase() === emailLc; });
      if (u && u.appeal_approved_at) approvalDate = String(u.appeal_approved_at).slice(0, 10);
   } catch (e) { /* ignore */ }
   var effectiveCutoff = (approvalDate && approvalDate > cutoffYmd) ? approvalDate : cutoffYmd;
   // No-show block is PER-PROVIDER: a customer blocked at Hospital A can still
   // book at Hospital B. Keeps the customer on the platform while still
   // protecting the affected hospital. Counts explicit No-shows AND past-date
   // Confirmed bookings (auto-marked overnight anyway).
   var todayStr0 = (function() { var t = new Date(); return t.getFullYear() + '-' + String(t.getMonth()+1).padStart(2,'0') + '-' + String(t.getDate()).padStart(2,'0'); })();
   var noShows = regularHistory.filter(function(a) {
      if (a.provider_id !== providerId) return false;          // ← per-provider scope
      if ((a.date || '') < effectiveCutoff) return false;
      if (a.status === 'No-show') return true;
      if (a.status === 'Confirmed' && (a.date || '') < todayStr0) return true;
      return false;
   });
   if (noShows.length >= noShowThreshold) {
      return '__BLOCKED_NO_SHOWS__:' + noShows.length;
   }

   // Per-doctor-per-day cap (active = not cancelled / no-show, excluding follow-ups)
   var activeAtDoctorToday = regularHistory.filter(function(a) {
      return a.doctor_id === doctor.id && a.date === dateStr &&
             a.status !== 'Cancelled' && a.status !== 'No-show';
   });
   if (activeAtDoctorToday.length >= maxPerDoctor) {
      return 'You already have ' + activeAtDoctorToday.length + ' booking' + (activeAtDoctorToday.length === 1 ? '' : 's') +
             ' with this doctor on ' + dateStr + '. The maximum allowed per day is ' + maxPerDoctor + '.';
   }

   // Per-customer-per-day cap (across all doctors, excluding follow-ups)
   var allToday = regularHistory.filter(function(a) {
      return a.date === dateStr && a.status !== 'Cancelled' && a.status !== 'No-show';
   });
   if (allToday.length >= maxPerCustomer) {
      return 'You already have ' + allToday.length + ' bookings on ' + dateStr + '. The daily maximum across all doctors is ' + maxPerCustomer + '.';
   }

   return null;
}

// Read effective capacity for a doctor — handles old single-field schema during transition.
function _doctorCaps(doctor) {
   var legacySlot  = doctor.slot_capacity != null ? doctor.slot_capacity : 1;
   var legacyDaily = doctor.daily_cap     != null ? doctor.daily_cap     : 100;
   return {
      duration:       parseInt(doctor.slot_duration, 10) || 30,
      slotOnline:     parseInt(doctor.slot_capacity_online,  10) >= 0 ? parseInt(doctor.slot_capacity_online,  10) : legacySlot,
      slotOffline:    parseInt(doctor.slot_capacity_offline, 10) >= 0 ? parseInt(doctor.slot_capacity_offline, 10) : legacySlot,
      dailyOnline:    parseInt(doctor.daily_cap_online,  10) >= 0 ? parseInt(doctor.daily_cap_online,  10) : legacyDaily,
      dailyOffline:   parseInt(doctor.daily_cap_offline, 10) >= 0 ? parseInt(doctor.daily_cap_offline, 10) : legacyDaily
   };
}

// Today's date as YYYY-MM-DD in the LOCAL timezone (NOT UTC). Critical for
// India users — UTC at, say, 19:30 UTC is "today" by UTC but "tomorrow" in IST.
// Use this everywhere we compare against apt.date (which is stored as IST).
function _todayLocalYmd() {
   var d = new Date();
   return d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0');
}

// Has this appointment's scheduled time come and gone?
// Past date → true; future date → false; today → compare with slot time (token-mode
// bookings have no slot, so they remain "active" all day until the date rolls over).
function _slotPassed(apt) {
   if (!apt || !apt.date) return false;
   var todayYmd = _todayLocalYmd();
   if (apt.date < todayYmd) return true;
   if (apt.date > todayYmd) return false;
   if (!apt.slot) return false;   // token-mode: day still active
   var now = new Date();
   return (now.getHours() * 60 + now.getMinutes()) >= _hhmmToMin(apt.slot);
}

// Has the slot ENDED (start + doctor's slot_duration)? Used to gate No-show:
// owner shouldn't be able to mark No-show until the patient's full slot
// window has passed (otherwise a patient arriving 5 min late could be wrongly
// flagged). Returns true once slot_start + duration <= now.
function _slotEnded(apt) {
   if (!apt || !apt.date) return false;
   var todayYmd = _todayLocalYmd();
   if (apt.date < todayYmd) return true;
   if (apt.date > todayYmd) return false;
   if (!apt.slot) return false;
   var duration = 30;
   try {
      var prov = _aptGetProvider(apt.provider_id);
      var doc  = prov && _aptGetDoctor(prov, apt.doctor_id);
      if (doc) duration = _doctorCaps(doc).duration || 30;
   } catch (e) { /* default 30 */ }
   var slotEndMin = _hhmmToMin(apt.slot) + duration;
   var now = new Date();
   return (now.getHours() * 60 + now.getMinutes()) >= slotEndMin;
}

// Has the cancel grace period expired? Customer can cancel up to N hours
// after their slot time (default 2h) to allow for traffic / last-minute
// "I won't make it" situations. After that, only the hospital can cancel.
function _cancelGraceExpired(apt, graceHours) {
   if (!apt || !apt.date) return false;
   var hrs = (graceHours == null) ? 2 : graceHours;
   var slotStr = apt.slot || '00:00';
   var slotMs  = new Date(apt.date + 'T' + slotStr + ':00').getTime();
   if (isNaN(slotMs)) return false;
   return Date.now() > slotMs + hrs * 60 * 60 * 1000;
}

function selectAptSlot(slot, btn) {
   if (!_aptBookCtx) return;
   _aptBookCtx.slot = slot;
   document.querySelectorAll('.apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('aptConfirmBtn').disabled = false;
}

async function confirmAptBooking() {
   if (!_aptBookCtx || !_aptBookCtx.date) { alert('Please pick a date.'); return; }
   var doctor = _aptBookCtx.doctor;
   var isTokenMode = doctor.booking_mode === 'token';
   if (!isTokenMode && !_aptBookCtx.slot) { alert('Please pick a time slot.'); return; }

   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in to book.'); return; }

   var name = document.getElementById('aptPatientName').value.trim();
   var phone = document.getElementById('aptPatientPhone').value.trim();
   if (!name || !phone) { alert('Please enter patient name and phone.'); return; }

   // Abuse defenses — caps, no-show block, provider block list.
   // Skipped for follow-up bookings (continuations of an already-paid visit),
   // but follow-ups have their own per-original count limit instead.
   if (_aptBookCtx.isFollowup) {
      var provFU  = _aptBookCtx.provider || {};
      var fuLimit = Math.max(1, Number(provFU.free_followup_count || 1));
      // Use GLOBAL appointments instead of just customer's own — catches the
      // edge case where the hospital booked a follow-up offline under a
      // different user_email (legacy/mixed-case data). Prevents duplicates.
      var allAptsFU = await AppDB.getAllAppointments();
      var existingFu = (allAptsFU || []).filter(function(b) {
         return b.followup_of === _aptBookCtx.followupOf && b.status !== 'Cancelled';
      });
      if (existingFu.length >= fuLimit) {
         alert('A free follow-up for this consultation has already been booked (' + existingFu.length + ' of ' + fuLimit + ' used). Please contact the hospital if you need to change it.');
         return;
      }
   } else {
      var abuseError = await _checkBookingAbuse(user, doctor, _aptBookCtx.providerId, _aptBookCtx.date, name, phone);
      if (abuseError) {
         if (abuseError.indexOf('__BLOCKED_NO_SHOWS__') === 0) {
            var nCount = abuseError.split(':')[1] || '5+';
            var humanMsg = 'You have ' + nCount + ' unattended appointments with ' + (_aptBookCtx.provider.name || 'this hospital') + ' in the last 30 days, so this hospital is restricting new bookings from you.\n\nYou can still book with OTHER hospitals on MyStore. Or submit an appeal to admin for this one?';
            if (confirm(humanMsg)) openAppealModal(nCount);
            return;
         }
         alert(abuseError);
         return;
      }
   }

   // Re-check ONLINE capacity (only counts online bookings against online cap).
   // Token = total bookings in that slot/day (across online + offline) + 1, so
   // online & offline never share a token number — the owner calls patients
   // in T1, T2, T3 order regardless of how they were booked.
   var caps2 = _doctorCaps(doctor);
   // Fetch with cancelled rows included — needed so the next token is MAX(token)+1
   // across the whole history (cancelled tokens stay as gaps, never get reused).
   var allRows  = await AppDB.getDoctorBookings(doctor.id, _aptBookCtx.date, true);
   var isFollowupBooking = !!_aptBookCtx.isFollowup;
   var _maxTok = function(arr) {
      return arr.reduce(function(m, r) { return Math.max(m, Number(r.token) || 0); }, 0);
   };
   var token;
   if (isFollowupBooking) {
      // Follow-ups bypass slot capacity entirely. They get their own FT* token
      // counter, independent of regular T* tokens.
      var fuRows = allRows.filter(function(b) { return b.is_followup; });
      token = _maxTok(fuRows) + 1;
   } else {
      // Regular booking: capacity counts only NON-followup rows.
      var regularAll  = allRows.filter(function(b) { return !b.is_followup; });
      var existing    = regularAll.filter(function(b) { return b.status !== 'Cancelled'; });
      var onlineExisting = existing.filter(function(b) { return b.booking_source !== 'offline'; });
      if (isTokenMode) {
         if (onlineExisting.length >= caps2.dailyOnline) {
            alert('Sorry — online tokens for this day just got fully booked. Please pick another day or call the hospital.');
            var activeBtnT = document.querySelector('.apt-date-btn.active');
            if (activeBtnT) selectAptDate(_aptBookCtx.date, activeBtnT);
            return;
         }
         token = _maxTok(regularAll) + 1;
      } else {
         var inSlotOnline = onlineExisting.filter(function(b) { return b.slot === _aptBookCtx.slot; });
         if (inSlotOnline.length >= caps2.slotOnline) {
            alert('Sorry — online slots for this time just filled up. Please pick another time or call the hospital.');
            var activeBtn = document.querySelector('.apt-date-btn.active');
            if (activeBtn) selectAptDate(_aptBookCtx.date, activeBtn);
            return;
         }
         var inSlotAll = regularAll.filter(function(b) { return b.slot === _aptBookCtx.slot; });
         token = _maxTok(inSlotAll) + 1;
      }
   }

   var aptId = 'APT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 5).toUpperCase();
   var apt = {
      apt_id: aptId,
      user_email: user.email,
      provider_id: _aptBookCtx.providerId,
      provider_name: _aptBookCtx.provider.name,
      doctor_id: _aptBookCtx.doctor.id,
      doctor_name: _aptBookCtx.doctor.name,
      speciality: _aptBookCtx.doctor.speciality,
      category: _aptBookCtx.catKey,
      date: _aptBookCtx.date,
      slot: _aptBookCtx.slot,
      fee: isFollowupBooking ? 0 : _aptBookCtx.doctor.fee,
      status: 'Confirmed',
      token: token,
      booking_source: 'online',
      is_followup: isFollowupBooking,
      followup_of: isFollowupBooking ? (_aptBookCtx.followupOf || '') : '',
      patient_name:    name,
      patient_phone:   phone,
      patient_age:     document.getElementById('aptPatientAge').value.trim(),
      patient_address: document.getElementById('aptPatientAddress').value.trim(),
      patient_reason:  document.getElementById('aptPatientReason').value.trim()
   };

   var confirmBtn = document.getElementById('aptConfirmBtn');
   confirmBtn.disabled = true;
   confirmBtn.textContent = 'Booking…';

   var ok = await AppDB.insertAppointment(apt);

   confirmBtn.disabled = false;
   confirmBtn.textContent = '✅ Confirm Appointment';

   if (!ok) { alert('Failed to book appointment. Please try again.'); return; }

   closeAptBookModal();
   showAptDone(apt);
}

function showAptDone(apt) {
   var tokenLine = apt.token ? '<div style="margin-top:6px;font-size:1rem;font-weight:700;color:#1a73e8">🎟 Your token: ' + _tokenLabel(apt) + '</div>' : '';
   document.getElementById('aptDoneDetails').innerHTML =
      '<div style="background:#f8f9ff;border-radius:10px;padding:14px;margin-top:10px">' +
         '<div style="font-size:0.78rem;color:#888">Appointment ID</div>' +
         '<div style="font-weight:700;color:#1a1a2e;font-size:0.95rem;margin-bottom:8px">' + apt.apt_id + '</div>' +
         '<div style="font-size:0.85rem;color:#555;line-height:1.7">' +
            '<div>👨‍⚕️ ' + apt.doctor_name + ' — ' + apt.speciality + '</div>' +
            '<div>🏥 ' + apt.provider_name + '</div>' +
            '<div>📅 ' + apt.date + ' at ' + apt.slot + '</div>' +
            '<div>💰 ₹' + apt.fee + '</div>' +
         '</div>' +
         tokenLine +
      '</div>';
   document.getElementById('aptDoneOverlay').classList.remove('hidden');
}

function closeAptBookModal() {
   document.getElementById('aptBookModal').classList.add('hidden');
   _aptBookCtx = null;
}

function closeAptDoneModal() {
   document.getElementById('aptDoneOverlay').classList.add('hidden');
}

function handleAptOverlayClick(e) {
   if (e.target === e.currentTarget) closeAptBookModal();
}

// ── ADMIN: Appointments management ──
async function renderAptAdmin() {
   var container = document.getElementById('aptAdminContent');
   if (!container) return;
   _liveSubscribe('adminProvs', 'apt_providers', renderAptAdmin);
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadAptCategories();
   await loadAptProviders(true);

   // Populate the category-filter dropdown from the live categories cache (preserve selection)
   var catSel = document.getElementById('aptAdminCatFilter');
   if (catSel) {
      var current = catSel.value;
      catSel.innerHTML = '<option value="">All Categories</option>' +
         Object.keys(APT_CAT_META).map(function(k) {
            var c = APT_CAT_META[k];
            return '<option value="' + k + '"' + (k === current ? ' selected' : '') + '>' + c.icon + ' ' + c.label + '</option>';
         }).join('');
   }

   var filter = (document.getElementById('aptAdminCatFilter') || {}).value || '';
   var list = (_aptProvidersCache || []).filter(function(p) { return !filter || p.category === filter; });

   if (!list.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">' +
         'No providers yet. Click <strong>➕ Add Provider</strong> to create one.' +
      '</p>';
      return;
   }

   var html = '<div class="apt-providers-grid" style="margin-top:1rem">';
   list.forEach(function(p) {
      var meta = APT_CAT_META[p.category] || { icon: '🏥', label: p.category };
      var icon = p.icon || meta.icon;
      var docCount = (p.doctors || []).length;
      var pid = p.id.replace(/'/g, "\\'");
      html += '<div class="apt-provider-card">' +
                '<div class="apt-provider-top">' +
                   '<div class="apt-provider-icon">' + icon + '</div>' +
                   '<div style="flex:1;min-width:0">' +
                      '<div class="apt-provider-name">' + p.name + '</div>' +
                      '<div class="apt-provider-tagline">' + (p.tagline || '') + '</div>' +
                      '<div class="apt-provider-tagline" style="margin-top:3px;color:#1a73e8">' + meta.icon + ' ' + meta.label + '</div>' +
                   '</div>' +
                '</div>' +
                (p.address ? '<div class="apt-provider-meta">📍 ' + _mapsLink(p.address) + '</div>' : '') +
                (p.timing  ? '<div class="apt-provider-meta">🕒 ' + p.timing  + '</div>' : '') +
                '<div class="apt-provider-footer">' +
                   '<span>' + docCount + ' doctor' + (docCount === 1 ? '' : 's') + '</span>' +
                   '<div style="display:flex;gap:6px">' +
                      '<button class="apt-view-btn" onclick="openAptProviderModal(\'' + pid + '\')">✏️ Edit</button>' +
                      '<button class="apt-view-btn" style="background:#c62828" onclick="deleteAptProvider(\'' + pid + '\')">🗑</button>' +
                   '</div>' +
                '</div>' +
                renderAptAdminDoctors(p) +
             '</div>';
   });
   html += '</div>';
   container.innerHTML = html;
}

function renderAptAdminDoctors(provider) {
   var doctors = provider.doctors || [];
   var pid = provider.id.replace(/'/g, "\\'");
   var html = '<div style="margin-top:0.9rem;padding-top:0.9rem;border-top:1px solid #f0f0f0">' +
              '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.6rem">' +
                 '<strong style="font-size:0.85rem;color:#1a1a2e">Doctors</strong>' +
                 '<button class="apt-view-btn" onclick="openAptDoctorModal(\'' + pid + '\')">➕ Add Doctor</button>' +
              '</div>';
   if (!doctors.length) {
      html += '<p style="color:#999;font-size:0.82rem">No doctors added yet.</p>';
   } else {
      doctors.forEach(function(d) {
         var did = d.id.replace(/'/g, "\\'");
         html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid #f5f5f5;gap:8px">' +
                   '<div style="flex:1;min-width:0">' +
                      '<div style="font-weight:600;font-size:0.88rem;color:#1a1a2e">' + d.name + '</div>' +
                      '<div style="font-size:0.78rem;color:#666">' + (d.speciality || '') + ' · ₹' + (d.fee || 0) + '</div>' +
                   '</div>' +
                   '<div style="display:flex;gap:4px">' +
                      '<button class="apt-view-btn" style="padding:4px 9px;font-size:0.75rem" onclick="openAptDoctorModal(\'' + pid + '\',\'' + did + '\')">✏️</button>' +
                      '<button class="apt-view-btn" style="padding:4px 9px;font-size:0.75rem;background:#c62828" onclick="deleteAptDoctor(\'' + pid + '\',\'' + did + '\')">🗑</button>' +
                   '</div>' +
                '</div>';
      });
   }
   html += '</div>';
   return html;
}

function openAptProviderModal(providerId) {
   var p = providerId ? _aptGetProvider(providerId) : null;
   document.getElementById('aptProviderModalTitle').textContent = p ? '✏️ Edit Provider' : '➕ Add Provider';

   // Populate the category dropdown from the live cache
   var catSel = document.getElementById('aptProvCategory');
   if (catSel) {
      catSel.innerHTML = Object.keys(APT_CAT_META).map(function(k) {
         var c = APT_CAT_META[k];
         return '<option value="' + k + '">' + c.icon + ' ' + c.label + '</option>';
      }).join('');
   }

   document.getElementById('aptProvId').value       = p ? p.id : '';
   document.getElementById('aptProvCategory').value = p ? p.category : (Object.keys(APT_CAT_META)[0] || 'hospital');
   document.getElementById('aptProvName').value     = p ? p.name : '';
   document.getElementById('aptProvTagline').value  = p ? (p.tagline || '') : '';
   document.getElementById('aptProvAddress').value  = p ? (p.address || '') : '';
   document.getElementById('aptProvTiming').value   = p ? (p.timing  || '') : '';
   document.getElementById('aptProvPhone').value    = p ? (p.phone   || '') : '';
   document.getElementById('aptProvGstin').value    = p ? (p.gstin   || '') : '';
   document.getElementById('aptProvIcon').value     = p ? (p.icon    || '') : '';

   // Populate owner dropdown with current store-owner users
   var ownerSel = document.getElementById('aptProvOwner');
   var current  = p ? (p.owner_email || '') : '';
   var owners   = (getUsers() || []).filter(function(u) { return u.role === 'storeowner'; });
   var opts     = '<option value="">— Not assigned (admin manages) —</option>';
   owners.forEach(function(u) {
      var label = (u.name || u.email) + ' (' + u.email + ')';
      var sel = (u.email.toLowerCase() === current.toLowerCase()) ? ' selected' : '';
      opts += '<option value="' + u.email + '"' + sel + '>' + label + '</option>';
   });
   // If the saved owner no longer matches any storeowner, keep it as a stray entry so admin can see it
   if (current && !owners.find(function(u) { return u.email.toLowerCase() === current.toLowerCase(); })) {
      opts += '<option value="' + current + '" selected>' + current + ' (not a registered business partner)</option>';
   }
   ownerSel.innerHTML = opts;

   // Commission fields
   document.getElementById('aptProvCommissionType').value  = (p && p.commission_type)  || 'percent';
   document.getElementById('aptProvCommissionValue').value = (p && p.commission_value != null) ? p.commission_value : '';
   document.getElementById('aptProvFollowupDays').value    = (p && p.free_followup_days != null) ? p.free_followup_days : 0;
   document.getElementById('aptProvFollowupCount').value   = (p && p.free_followup_count != null) ? p.free_followup_count : 1;
   _aptProvCommissionTypeChanged();

   document.getElementById('aptProviderModal').classList.remove('hidden');
}

// Toggle the commission-value field's label based on chosen type
function _aptProvCommissionTypeChanged() {
   var type = document.getElementById('aptProvCommissionType').value;
   var label = document.getElementById('aptProvCommissionLabel');
   var input = document.getElementById('aptProvCommissionValue');
   if (type === 'fixed_monthly') {
      label.textContent = 'Monthly Fee (₹)';
      input.placeholder = '5000';
   } else {
      label.textContent = 'Commission Rate (%)';
      input.placeholder = '5';
   }
}

function closeAptProviderModal() {
   document.getElementById('aptProviderModal').classList.add('hidden');
}

async function saveAptProvider() {
   var name = document.getElementById('aptProvName').value.trim();
   if (!name) { alert('Provider name is required.'); return; }
   var existingId = document.getElementById('aptProvId').value;
   var existing = existingId ? _aptGetProvider(existingId) : null;
   var category = document.getElementById('aptProvCategory').value;
   var icon = document.getElementById('aptProvIcon').value.trim() || (APT_CAT_META[category] && APT_CAT_META[category].icon) || '🏥';

   var id = existingId || (category + '_' + Date.now().toString(36));
   var provider = {
      id: id,
      category: category,
      name: name,
      tagline:          document.getElementById('aptProvTagline').value.trim(),
      address:          document.getElementById('aptProvAddress').value.trim(),
      timing:           document.getElementById('aptProvTiming').value.trim(),
      phone:            document.getElementById('aptProvPhone').value.trim(),
      gstin:            document.getElementById('aptProvGstin').value.trim().toUpperCase(),
      icon:             icon,
      owner_email:      document.getElementById('aptProvOwner').value || '',
      commission_type:    document.getElementById('aptProvCommissionType').value || 'percent',
      commission_value:   parseFloat(document.getElementById('aptProvCommissionValue').value) || 0,
      free_followup_days:  Math.max(0, parseInt(document.getElementById('aptProvFollowupDays').value, 10) || 0),
      free_followup_count: Math.max(1, parseInt(document.getElementById('aptProvFollowupCount').value, 10) || 1),
      doctors:            existing ? (existing.doctors || []) : []
   };
   var ok = await AppDB.upsertProvider(provider);
   if (!ok) { alert('Failed to save. Check console.'); return; }
   closeAptProviderModal();
   await renderAptAdmin();
}

async function deleteAptProvider(providerId) {
   var p = _aptGetProvider(providerId);
   if (!p) return;
   if (!confirm('Delete "' + p.name + '" and all its doctors? This cannot be undone.')) return;
   var ok = await AppDB.deleteProvider(providerId);
   if (!ok) { alert('Failed to delete.'); return; }
   await renderAptAdmin();
}

function openAptDoctorModal(providerId, doctorId) {
   var provider = _aptGetProvider(providerId);
   if (!provider) return;
   var doctor = doctorId ? _aptGetDoctor(provider, doctorId) : null;

   var meta = APT_CAT_META[provider.category];
   var staffWord = (meta && meta.staffLabel) ? meta.staffLabel.replace(/s$/, '') : 'Staff';
   document.getElementById('aptDoctorModalTitle').textContent = doctor ? ('✏️ Edit ' + staffWord) : ('➕ Add ' + staffWord + ' — ' + provider.name);
   document.getElementById('aptDocProviderId').value = providerId;
   document.getElementById('aptDocId').value         = doctor ? doctor.id : '';
   document.getElementById('aptDocName').value       = doctor ? doctor.name : '';
   document.getElementById('aptDocSpec').value       = doctor ? (doctor.speciality || '') : '';
   document.getElementById('aptDocQual').value       = doctor ? (doctor.qual || '') : '';
   document.getElementById('aptDocRegNo').value      = doctor ? (doctor.reg_no || '') : '';
   document.getElementById('aptDocFee').value        = doctor ? (doctor.fee || '') : '';
   document.getElementById('aptDocPhoto').value      = doctor ? (doctor.photo || '') : '';
   document.getElementById('aptDocOnLeave').checked  = !!(doctor && doctor.on_leave);
   var fileInput = document.getElementById('aptDocPhotoFile'); if (fileInput) fileInput.value = '';
   var statusEl  = document.getElementById('aptDocPhotoStatus'); if (statusEl) statusEl.textContent = '';
   _aptDocPhotoPreview();
   document.getElementById('aptDocBookingMode').value = doctor && doctor.booking_mode === 'token' ? 'token' : 'slot';
   // Slot duration (default 60 minutes for new doctors). Backward compat: existing doctors default to 30.
   document.getElementById('aptDocSlotDuration').value = doctor && doctor.slot_duration
      ? String(doctor.slot_duration)
      : (doctor ? '30' : '60');
   // Capacity split — fall back to old slot_capacity if new fields aren't set yet
   var legacyCap = doctor && doctor.slot_capacity != null ? doctor.slot_capacity : 5;
   document.getElementById('aptDocCapacityOnline').value  = (doctor && doctor.slot_capacity_online  != null) ? doctor.slot_capacity_online  : legacyCap;
   document.getElementById('aptDocCapacityOffline').value = (doctor && doctor.slot_capacity_offline != null) ? doctor.slot_capacity_offline : legacyCap;
   var legacyDaily = doctor && doctor.daily_cap != null ? doctor.daily_cap : 100;
   document.getElementById('aptDocDailyCapOnline').value  = (doctor && doctor.daily_cap_online  != null) ? doctor.daily_cap_online  : legacyDaily;
   document.getElementById('aptDocDailyCapOffline').value = (doctor && doctor.daily_cap_offline != null) ? doctor.daily_cap_offline : legacyDaily;
   _aptDocModeChanged();

   var defaultAvail = { 0: [], 1: [{start:'09:00',end:'12:00'},{start:'14:00',end:'18:00'}],
                        2: [{start:'09:00',end:'12:00'},{start:'14:00',end:'18:00'}],
                        3: [{start:'09:00',end:'12:00'},{start:'14:00',end:'18:00'}],
                        4: [{start:'09:00',end:'12:00'},{start:'14:00',end:'18:00'}],
                        5: [{start:'09:00',end:'12:00'},{start:'14:00',end:'18:00'}],
                        6: [{start:'09:00',end:'13:00'}] };
   var avail = (doctor && doctor.availability) || defaultAvail;

   var html = '';
   for (var i = 0; i < 7; i++) {
      var line = formatAvailLine(avail[i] || avail[String(i)] || []);
      html += '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">' +
                '<label style="width:42px;font-size:0.82rem;font-weight:600;color:#555">' + APT_DAYS[i] + '</label>' +
                '<input type="text" id="aptDocAvail_' + i + '" value="' + line.replace(/"/g,'&quot;') + '" placeholder="09:00-12:00, 14:00-18:00 or off" ' +
                       'style="flex:1;padding:7px 10px;border:1.5px solid #ddd;border-radius:6px;font-size:0.85rem"/>' +
             '</div>';
   }
   document.getElementById('aptDocAvail').innerHTML = html;

   // Vacation editor — held in a window-scoped array while the modal is open
   window._aptDocVacWorking = (doctor && Array.isArray(doctor.vacations)) ? doctor.vacations.slice() : [];
   _renderDoctorVacations();
   var vs = document.getElementById('aptDocVacStart'); if (vs) vs.value = '';
   var ve = document.getElementById('aptDocVacEnd');   if (ve) ve.value = '';

   document.getElementById('aptDoctorModal').classList.remove('hidden');
}

function closeAptDoctorModal() {
   document.getElementById('aptDoctorModal').classList.add('hidden');
}

// ── Doctor vacation date ranges ──
// Render the list of vacation ranges currently in the working array.
function _renderDoctorVacations() {
   var box = document.getElementById('aptDocVacations');
   if (!box) return;
   var list = window._aptDocVacWorking || [];
   if (list.length === 0) {
      box.innerHTML = '<div style="color:#999;font-size:0.8rem;font-style:italic">No vacation dates set.</div>';
      return;
   }
   box.innerHTML = list.map(function(r, i) {
      var label = (r.start === r.end)
         ? _fmtDateLabel(r.start)
         : (_fmtDateLabel(r.start) + ' → ' + _fmtDateLabel(r.end));
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:5px 8px;background:#fff3e0;border:1px solid #ffb74d;border-radius:5px;margin-bottom:4px;font-size:0.85rem">' +
                '<span>🏖 ' + label + '</span>' +
                '<button type="button" onclick="removeDoctorVacationRange(' + i + ')" style="background:none;border:none;color:#c62828;cursor:pointer;font-size:0.9rem" title="Remove">✕</button>' +
             '</div>';
   }).join('');
}

function _fmtDateLabel(yyyy_mm_dd) {
   if (!yyyy_mm_dd) return '';
   var p = yyyy_mm_dd.split('-');
   if (p.length !== 3) return yyyy_mm_dd;
   var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
   return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function addDoctorVacationRange() {
   var s = document.getElementById('aptDocVacStart').value;
   var e = document.getElementById('aptDocVacEnd').value || s;
   if (!s) { alert('Please pick a start date.'); return; }
   if (e < s) { alert('End date must be on or after start date.'); return; }
   if (!Array.isArray(window._aptDocVacWorking)) window._aptDocVacWorking = [];
   window._aptDocVacWorking.push({ start: s, end: e });
   _renderDoctorVacations();
   document.getElementById('aptDocVacStart').value = '';
   document.getElementById('aptDocVacEnd').value   = '';
}

function removeDoctorVacationRange(idx) {
   if (!Array.isArray(window._aptDocVacWorking)) return;
   window._aptDocVacWorking.splice(idx, 1);
   _renderDoctorVacations();
}

// True if the given YYYY-MM-DD falls within any of the doctor's vacation ranges.
function _isOnVacation(doctor, dateStr) {
   if (!doctor || !Array.isArray(doctor.vacations) || !dateStr) return false;
   return doctor.vacations.some(function(r) {
      return r && r.start && r.end && dateStr >= r.start && dateStr <= r.end;
   });
}

// Return the matching vacation range object if the date is on leave, else null.
function _vacationFor(doctor, dateStr) {
   if (!doctor || !Array.isArray(doctor.vacations) || !dateStr) return null;
   for (var i = 0; i < doctor.vacations.length; i++) {
      var r = doctor.vacations[i];
      if (r && r.start && r.end && dateStr >= r.start && dateStr <= r.end) return r;
   }
   return null;
}

// Returns an HTML banner string describing the doctor's vacation status, or ''.
// Shows current leave (red), or an upcoming leave within 14 days (orange info).
function _doctorVacationBanner(doctor) {
   if (!doctor || !Array.isArray(doctor.vacations) || doctor.vacations.length === 0) return '';
   var t = new Date();
   var today = t.getFullYear() + '-' + String(t.getMonth()+1).padStart(2,'0') + '-' + String(t.getDate()).padStart(2,'0');
   var current = _vacationFor(doctor, today);
   if (current) {
      var endLabel = (current.start === current.end) ? '' : ' until ' + _fmtDateLabel(current.end);
      return '<div style="background:#ffebee;color:#c62828;border:1px solid #ef9a9a;border-radius:6px;padding:5px 8px;margin:6px 0;font-size:0.78rem;font-weight:600">🏖 On leave' + endLabel + '</div>';
   }
   // Find soonest upcoming vacation within 14 days
   var upcoming = doctor.vacations
      .filter(function(v) { return v && v.start && v.start > today; })
      .sort(function(a, b) { return a.start < b.start ? -1 : 1; })[0];
   if (upcoming) {
      var startMs = new Date(upcoming.start + 'T00:00:00').getTime();
      var todayMs = new Date(today + 'T00:00:00').getTime();
      var days = Math.round((startMs - todayMs) / 86400000);
      if (days <= 14) {
         var range = (upcoming.start === upcoming.end)
            ? _fmtDateLabel(upcoming.start)
            : _fmtDateLabel(upcoming.start) + ' → ' + _fmtDateLabel(upcoming.end);
         return '<div style="background:#fff3e0;color:#e65100;border:1px solid #ffb74d;border-radius:6px;padding:5px 8px;margin:6px 0;font-size:0.78rem;font-weight:600">🏖 Upcoming leave: ' + range + '</div>';
      }
   }
   return '';
}

// File-upload handler for doctor photo: uploads to Supabase Storage and writes
// the public URL into the URL field so saveAptDoctor picks it up normally.
async function uploadDoctorPhotoFile(input) {
   if (!input.files || !input.files[0]) return;
   var file = input.files[0];
   var status = document.getElementById('aptDocPhotoStatus');
   if (file.size > 2 * 1024 * 1024) {
      status.textContent = '❌ Image too large. Please pick one under 2 MB.';
      status.style.color = '#c62828';
      input.value = '';
      return;
   }
   status.textContent = '⏳ Uploading…';
   status.style.color = '#666';
   var url = await AppDB.uploadDoctorPhoto(file);
   if (!url) {
      status.textContent = '❌ Upload failed. Check console.';
      status.style.color = '#c62828';
      return;
   }
   document.getElementById('aptDocPhoto').value = url;
   _aptDocPhotoPreview();
   status.textContent = '✅ Uploaded';
   status.style.color = '#2e7d32';
}

// Show / hide a thumbnail under the URL field
function _aptDocPhotoPreview() {
   var url = document.getElementById('aptDocPhoto').value.trim();
   var img = document.getElementById('aptDocPhotoPreview');
   if (!img) return;
   if (url) { img.src = url; img.style.display = ''; }
   else     { img.removeAttribute('src'); img.style.display = 'none'; }
}

// Toggle visibility of slot-capacity vs daily-cap rows based on chosen booking mode.
// Availability windows still apply in both modes (they decide which DAYS the doctor works).
function _aptDocModeChanged() {
   var mode = document.getElementById('aptDocBookingMode').value;
   var slotRow = document.getElementById('aptDocCapacityRow');
   var dayRow  = document.getElementById('aptDocDailyCapRow');
   var durRow  = document.getElementById('aptDocSlotDurationRow');
   var avLabel = document.getElementById('aptDocAvailLabel');
   if (slotRow) slotRow.style.display = mode === 'token' ? 'none' : '';
   if (durRow)  durRow.style.display  = mode === 'token' ? 'none' : '';
   if (dayRow)  dayRow.style.display  = mode === 'token' ? '' : 'none';
   if (avLabel) avLabel.textContent   = mode === 'token'
      ? 'Working Days (time windows ignored — only the days marked "on" matter)'
      : 'Weekly Availability';
}

async function saveAptDoctor() {
   var providerId = document.getElementById('aptDocProviderId').value;
   var provider = _aptGetProvider(providerId);
   if (!provider) { alert('Provider not found.'); return; }

   var name = document.getElementById('aptDocName').value.trim();
   if (!name) { alert('Doctor name is required.'); return; }

   var availability = {};
   for (var i = 0; i < 7; i++) {
      var raw = document.getElementById('aptDocAvail_' + i).value;
      availability[i] = parseAvailLine(raw);
   }

   var existingDocId = document.getElementById('aptDocId').value;
   var docId = existingDocId || (providerId + '_d_' + Date.now().toString(36));
   var newDoctor = {
      id: docId,
      name: name,
      speciality:           document.getElementById('aptDocSpec').value.trim(),
      qual:                 document.getElementById('aptDocQual').value.trim(),
      reg_no:               document.getElementById('aptDocRegNo').value.trim(),
      fee:                  parseInt(document.getElementById('aptDocFee').value, 10) || 0,
      photo:                document.getElementById('aptDocPhoto').value.trim(),
      booking_mode:         document.getElementById('aptDocBookingMode').value || 'slot',
      slot_duration:        parseInt(document.getElementById('aptDocSlotDuration').value, 10) || 60,
      slot_capacity_online:  Math.max(0, parseInt(document.getElementById('aptDocCapacityOnline').value,  10) || 0),
      slot_capacity_offline: Math.max(0, parseInt(document.getElementById('aptDocCapacityOffline').value, 10) || 0),
      daily_cap_online:      Math.max(0, parseInt(document.getElementById('aptDocDailyCapOnline').value,  10) || 0),
      daily_cap_offline:     Math.max(0, parseInt(document.getElementById('aptDocDailyCapOffline').value, 10) || 0),
      availability: availability,
      vacations:    Array.isArray(window._aptDocVacWorking) ? window._aptDocVacWorking.slice() : [],
      on_leave:     document.getElementById('aptDocOnLeave').checked
   };

   var doctors = (provider.doctors || []).slice();
   var idx = doctors.findIndex(function(d) { return d.id === docId; });
   var oldPhoto = (idx >= 0) ? (doctors[idx].photo || '') : '';
   if (idx >= 0) doctors[idx] = newDoctor; else doctors.push(newDoctor);

   provider.doctors = doctors;
   var ok = await AppDB.upsertProvider(provider);
   if (!ok) { alert('Failed to save doctor.'); return; }

   // Cleanup: if the photo changed, delete the old file from the storage bucket
   // so we don't accumulate orphaned images.
   if (oldPhoto && oldPhoto !== newDoctor.photo) {
      try { await AppDB.deleteDoctorPhotoByUrl(oldPhoto); } catch (e) { console.warn(e); }
   }

   closeAptDoctorModal();
   await _aptRerenderActiveList();
}

async function deleteAptDoctor(providerId, doctorId) {
   var provider = _aptGetProvider(providerId);
   if (!provider) return;
   var doctor = _aptGetDoctor(provider, doctorId);
   if (!doctor) return;
   if (!confirm('Remove Dr. ' + doctor.name.replace(/^Dr\.?\s*/i,'') + ' from ' + provider.name + '?')) return;
   var photoToCleanup = doctor.photo || '';
   provider.doctors = (provider.doctors || []).filter(function(d) { return d.id !== doctorId; });
   var ok = await AppDB.upsertProvider(provider);
   if (!ok) { alert('Failed to delete doctor.'); return; }
   // Cleanup the photo from storage so it doesn't sit orphaned in the bucket.
   if (photoToCleanup) {
      try { await AppDB.deleteDoctorPhotoByUrl(photoToCleanup); } catch (e) { console.warn(e); }
   }
   await _aptRerenderActiveList();
}

// ── CSV export helpers ──
// Convert an array of plain objects → CSV (UTF-8 with BOM so Excel renders ₹
// and other unicode correctly). Triggers an immediate browser download.
function _downloadCsv(filename, rows) {
   if (!rows || !rows.length) { alert('Nothing to export — the current filter has no rows.'); return; }
   var headers = Object.keys(rows[0]);
   var esc = function(v) {
      if (v === null || v === undefined) return '';
      var s = String(v);
      if (s.indexOf(',') !== -1 || s.indexOf('"') !== -1 || s.indexOf('\n') !== -1 || s.indexOf('\r') !== -1) {
         return '"' + s.replace(/"/g, '""') + '"';
      }
      return s;
   };
   var lines = [ headers.map(esc).join(',') ];
   rows.forEach(function(r) { lines.push(headers.map(function(h) { return esc(r[h]); }).join(',')); });
   var csv = '﻿' + lines.join('\r\n');                      // BOM + CRLF for Excel
   var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
   var url  = URL.createObjectURL(blob);
   var a    = document.createElement('a');
   a.href = url; a.download = filename;
   document.body.appendChild(a); a.click(); document.body.removeChild(a);
   URL.revokeObjectURL(url);
}

function _aptRowToCsv(a) {
   return {
      'Date'              : a.date || '',
      'Slot'              : a.slot || '',
      'Token'             : a.token || '',
      'Doctor'            : a.doctor_name || '',
      'Speciality'        : a.speciality || '',
      'Provider'          : a.provider_name || '',
      'Category'          : a.category || '',
      'Patient Name'      : a.patient_name || '',
      'Patient Phone'     : a.patient_phone || '',
      'Patient Age'       : a.patient_age || '',
      'Patient Address'   : a.patient_address || '',
      'Symptom / Reason'  : a.patient_reason || '',
      'Fee (Rs)'          : a.fee || 0,
      'Status'            : a.status || '',
      'Paid'              : a.is_paid ? 'Yes' : 'No',
      'Refunded'          : a.is_refunded ? 'Yes' : 'No',
      'Refund Amount (Rs)': a.refund_amount || 0,
      'Booking Source'    : a.booking_source || '',
      'Customer Email'    : a.user_email || '',
      'Cancelled By'      : a.cancelled_by || '',
      'Cancellation Reason': a.cancellation_reason || '',
      'Booked At'         : a.created_at || '',
      'Appointment ID'    : a.apt_id || ''
   };
}

// Export the currently-filtered appointments shown on the shopowner Appointments tab.
function exportShopAppointmentsCsv() {
   var rows = (window._shopAptsFiltered || []).map(_aptRowToCsv);
   var today = _todayLocalYmd();
   _downloadCsv('bookings_' + today + '.csv', rows);
}

// Export the currently-filtered appointments shown on the admin All Bookings sub-tab.
function exportAdminAppointmentsCsv() {
   var rows = (window._adminAptsFiltered || []).map(_aptRowToCsv);
   var today = _todayLocalYmd();
   _downloadCsv('all_bookings_' + today + '.csv', rows);
}

// Export the currently-rendered billing table from the admin Billing tab.
function exportAdminBillingCsv() {
   var rows = window._billingExportRows || [];
   var today = _todayLocalYmd();
   _downloadCsv('billing_' + today + '.csv', rows);
}

// ── XLS export (proper .xlsx, opens in Excel without warnings) ──
// Lazy-loads SheetJS from CDN the first time a user clicks an XLS button so
// the library doesn't bloat every page load.
function _ensureSheetJs() {
   if (window.XLSX) return Promise.resolve();
   return new Promise(function(resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
      s.onload  = function() { resolve(); };
      s.onerror = function() { reject(new Error('Failed to load XLS library')); };
      document.head.appendChild(s);
   });
}

async function _downloadXls(filename, rows) {
   if (!rows || !rows.length) { alert('Nothing to export — the current filter has no rows.'); return; }
   try {
      await _ensureSheetJs();
   } catch (e) {
      alert('Could not load the XLS library. Check your internet connection and try again.');
      return;
   }
   var ws = XLSX.utils.json_to_sheet(rows);
   var wb = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   XLSX.writeFile(wb, filename);
}

async function exportShopAppointmentsXls() {
   var rows = (window._shopAptsFiltered || []).map(_aptRowToCsv);
   var today = _todayLocalYmd();
   await _downloadXls('bookings_' + today + '.xlsx', rows);
}

async function exportAdminAppointmentsXls() {
   var rows = (window._adminAptsFiltered || []).map(_aptRowToCsv);
   var today = _todayLocalYmd();
   await _downloadXls('all_bookings_' + today + '.xlsx', rows);
}

async function exportAdminBillingXls() {
   var rows = window._billingExportRows || [];
   var today = _todayLocalYmd();
   await _downloadXls('billing_' + today + '.xlsx', rows);
}

// ── Admin: clean orphan doctor photos ──
// Lists every file in the doctor-photos storage bucket, collects every photo
// URL referenced by any doctor across all providers, and deletes files in the
// bucket that nobody references. Safe — interactive confirmation, no data loss
// to live doctors. Use after bulk testing or to tidy up legacy orphans.
async function cleanOrphanDoctorPhotos() {
   var btn    = document.getElementById('cleanOrphansBtn');
   var status = document.getElementById('cleanOrphansStatus');
   if (btn) { btn.disabled = true; btn.textContent = '🔎 Scanning…'; }
   if (status) { status.style.color = '#555'; status.textContent = 'Scanning bucket and provider records…'; }

   try {
      // 1. All files actually in the bucket
      var bucketFiles = await AppDB.listDoctorPhotoFiles();

      // 2. All filenames referenced by any doctor row (any provider, any category)
      var providers = await AppDB.getProviders();
      var referenced = new Set();
      var marker = '/doctor-photos/';
      (providers || []).forEach(function(p) {
         (p.doctors || []).forEach(function(d) {
            if (!d || !d.photo) return;
            var idx = d.photo.indexOf(marker);
            if (idx !== -1) referenced.add(d.photo.substring(idx + marker.length));
         });
      });

      // 3. Orphans = in bucket but not referenced
      var orphans = bucketFiles.filter(function(f) { return !referenced.has(f); });

      if (orphans.length === 0) {
         if (status) { status.style.color = '#2e7d32'; status.textContent = '✅ Bucket is clean — ' + bucketFiles.length + ' files, all referenced.'; }
         return;
      }

      var ok = confirm(
         'Found ' + orphans.length + ' orphan file' + (orphans.length === 1 ? '' : 's') +
         ' in the doctor-photos bucket (out of ' + bucketFiles.length + ' total).\n\n' +
         'These files are not referenced by any doctor record. Delete them now?'
      );
      if (!ok) {
         if (status) { status.style.color = '#777'; status.textContent = 'Cancelled. ' + orphans.length + ' orphan' + (orphans.length === 1 ? '' : 's') + ' left untouched.'; }
         return;
      }

      var deleted = await AppDB.deleteDoctorPhotoFiles(orphans);
      if (status) {
         status.style.color = '#2e7d32';
         status.textContent = '✅ Removed ' + deleted + ' orphan file' + (deleted === 1 ? '' : 's') + '. Bucket now has ' + (bucketFiles.length - deleted) + ' file' + ((bucketFiles.length - deleted) === 1 ? '' : 's') + '.';
      }
   } catch (e) {
      console.error(e);
      if (status) { status.style.color = '#c62828'; status.textContent = '❌ Cleanup failed — see browser console for details.'; }
   } finally {
      if (btn) { btn.disabled = false; btn.textContent = '🧹 Clean Orphan Doctor Photos'; }
   }
}

// Re-render whichever doctor/provider list is on the current page (admin or shopowner)
async function _aptRerenderActiveList() {
   if (document.getElementById('aptAdminContent'))    await renderAptAdmin();
   if (document.getElementById('shopDoctorsContent')) await renderShopDoctors();
}

// ── ADMIN: Appointment sub-tab + bookings view ──
function switchAptAdminSub(sub) {
   ['providers', 'bookings', 'categories', 'admissions'].forEach(function(s) {
      var panel = document.getElementById('apt-sub-' + s);
      var btn   = document.getElementById('apt-subtab-' + s + '-btn');
      if (panel) panel.classList.toggle('hidden', s !== sub);
      if (btn)   btn.classList.toggle('active', s === sub);
   });
   if (sub === 'bookings')   renderAllAppointments();
   if (sub === 'providers')  renderAptAdmin();
   if (sub === 'categories') renderAptCategoriesAdmin();
   if (sub === 'admissions') renderAdminAdmissions();
}

// ── ADMIN: All Admissions — read-only oversight view across every hospital ──
async function renderAdminAdmissions() {
   var container = document.getElementById('adminAdmissionsContent');
   if (!container) return;
   _liveSubscribe('adminAdmissions', 'admissions', renderAdminAdmissions);
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';

   await loadAptProviders(true);
   var rows = await AppDB.getAllAdmissions();

   // Populate provider filter from currently-existing hospitals
   var provSel = document.getElementById('adminAdmProviderFilter');
   if (provSel) {
      var current = provSel.value;
      var provs = (_aptProvidersCache || []).filter(function(p) {
         return rows.some(function(r) { return r.provider_id === p.id; });
      });
      provSel.innerHTML = '<option value="">🏥 All hospitals</option>' +
         provs.map(function(p) {
            return '<option value="' + p.id + '"' + (p.id === current ? ' selected' : '') + '>' + p.name + '</option>';
         }).join('');
   }

   // Apply filters
   var search   = ((document.getElementById('adminAdmSearch')         || {}).value || '').toLowerCase().trim();
   var statusF  =  (document.getElementById('adminAdmStatusFilter')   || {}).value || '';
   var provF    =  (document.getElementById('adminAdmProviderFilter') || {}).value || '';
   var dateF    =  (document.getElementById('adminAdmDateFilter')     || {}).value || 'all';
   var today    = new Date(); today.setHours(0, 0, 0, 0);
   var todayYmd = _todayLocalYmd();
   var weekStart = new Date(today); weekStart.setDate(today.getDate() - today.getDay()); weekStart.setHours(0,0,0,0);
   var monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
   var yearStart  = new Date(today.getFullYear(), 0, 1);

   var filtered = rows.filter(function(r) {
      if (statusF && r.status !== statusF) return false;
      if (provF && r.provider_id !== provF) return false;
      if (search) {
         var hay = ((r.patient_name || '') + ' ' + (r.patient_phone || '') + ' ' + (r.patient_ref || '')).toLowerCase();
         if (hay.indexOf(search) === -1) return false;
      }
      if (dateF !== 'all') {
         var d = new Date((r.admit_date || '') + 'T00:00:00');
         if (isNaN(d.getTime())) return false;
         if (dateF === 'today' && r.admit_date !== todayYmd) return false;
         if (dateF === 'week'  && d < weekStart) return false;
         if (dateF === 'month' && d < monthStart) return false;
         if (dateF === 'year'  && d < yearStart) return false;
      }
      return true;
   });

   if (!filtered.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No admissions match the current filters.</p>';
      return;
   }

   // Build provider lookup so we can show hospital name per row
   var provById = {};
   (_aptProvidersCache || []).forEach(function(p) { provById[p.id] = p; });

   // Totals strip
   var admitted  = filtered.filter(function(r) { return r.status === 'Admitted';  }).length;
   var discharged = filtered.filter(function(r) { return r.status === 'Discharged'; }).length;

   var rowHtml = filtered.map(function(r) {
      var prov = provById[r.provider_id] || {};
      var d = new Date((r.admit_date || '') + 'T00:00:00');
      var admitLbl = isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      var dischargeLbl = '—';
      if (r.target_discharge) {
         var td = new Date(r.target_discharge + 'T00:00:00');
         dischargeLbl = isNaN(td.getTime()) ? r.target_discharge : td.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      }
      var losDays = isNaN(d.getTime()) ? 0 : Math.max(0, Math.round((today - d) / 86400000));
      var statusCls = r.status === 'Admitted' ? 'confirmed' : 'completed';
      var loc = (r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '');
      var aid = r.id.replace(/'/g, "\\'");
      return '<tr>' +
                '<td><div class="apt-tbl-name">' + (prov.name || '—') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (r.patient_name || '—') + '</div>' +
                    (r.patient_ref ? '<div class="apt-tbl-sub" style="font-family:monospace">#' + r.patient_ref + '</div>' : '') +
                    (r.patient_phone ? '<div class="apt-tbl-sub">📞 ' + r.patient_phone + '</div>' : '') +
                '</td>' +
                '<td><div class="apt-tbl-name">' + loc + '</div></td>' +
                '<td><span class="apt-status ' + (r.status === 'Admitted' ? 'confirmed' : 'packed') + '">🗓️ ' + losDays + ' day' + (losDays === 1 ? '' : 's') + '</span></td>' +
                '<td><div class="apt-tbl-name">' + admitLbl + '</div></td>' +
                '<td><div class="apt-tbl-name">' + dischargeLbl + '</div></td>' +
                '<td><span class="apt-status ' + statusCls + '">' + r.status + '</span></td>' +
                '<td><span style="color:' + (r.rounds_status === 'complete' ? '#0a8a3a' : '#888') + ';font-weight:600;font-size:0.85rem">' + (r.rounds_status === 'complete' ? '✓ Done' : '⏳ Pending') + '</span></td>' +
                '<td style="text-align:center">' +
                   '<button class="apt-view-btn" style="background:#c62828" title="Permanently delete this admission record" onclick="adminDeleteAdmission(\'' + aid + '\')">🗑 Delete</button>' +
                '</td>' +
             '</tr>';
   }).join('');

   window._adminAdmFiltered = filtered;   // used by deleteAllShownAdmissions

   container.innerHTML =
      '<div style="display:flex;gap:1.2rem;padding:0.6rem 0 1rem;font-size:0.88rem;color:#444;align-items:center">' +
         '<div><strong>' + filtered.length + '</strong> total</div>' +
         '<div>🛏️ <strong>' + admitted + '</strong> admitted</div>' +
         '<div>🏁 <strong>' + discharged + '</strong> discharged</div>' +
         '<div style="margin-left:auto"><button class="apt-view-btn" style="background:#c62828" onclick="deleteAllShownAdmissions()">🗑 Delete All Shown</button></div>' +
      '</div>' +
      '<div class="apt-tbl-wrap"><table class="apt-tbl">' +
         '<thead><tr>' +
            '<th>Hospital</th>' +
            '<th>Patient</th>' +
            '<th>Location / Bed</th>' +
            '<th>Length of Stay</th>' +
            '<th>Admit Date</th>' +
            '<th>Target Discharge</th>' +
            '<th>Status</th>' +
            '<th>Rounds</th>' +
            '<th style="text-align:center">Actions</th>' +
         '</tr></thead>' +
         '<tbody>' + rowHtml + '</tbody>' +
      '</table></div>';
}

// Single-row delete from the admin admissions table — uses the existing
// AppDB.deleteAdmission helper (already broadcasts via realtime).
async function adminDeleteAdmission(id) {
   if (!confirm('Permanently delete this admission record?\n\nThis cannot be undone. The hospital owner will see it disappear from their Admissions tab too.')) return;
   var ok = await AppDB.deleteAdmission(id);
   if (!ok) { alert('Failed to delete admission.'); return; }
   renderAdminAdmissions();
}

// Bulk delete — every admission currently visible after filters. Same
// type-to-confirm pattern as deleteAllShownAppointments / deleteAllShownOrders.
async function deleteAllShownAdmissions() {
   var matching = (window._adminAdmFiltered || []);
   if (!matching.length) { alert('Nothing to delete with the current filters.'); return; }
   var phrase = 'DELETE';
   var typed = prompt(
      '⚠️ This will permanently delete ' + matching.length + ' admission record' +
      (matching.length === 1 ? '' : 's') + ' currently shown by your filters.\n\n' +
      'Type ' + phrase + ' (in caps) to confirm:'
   );
   if (typed !== phrase) { if (typed != null) alert('Cancelled — phrase did not match.'); return; }
   for (var i = 0; i < matching.length; i++) {
      try { await AppDB.deleteAdmission(matching[i].id); } catch (e) { /* keep going */ }
   }
   renderAdminAdmissions();
}

// ── ADMIN: Categories CRUD ──
async function renderAptCategoriesAdmin() {
   var container = document.getElementById('aptCategoriesContent');
   if (!container) return;
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadAptCategories(true);
   await loadAptProviders(true);

   var keys = Object.keys(APT_CAT_META);
   if (!keys.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No categories yet. Click <strong>➕ Add Category</strong>.</p>';
      return;
   }

   // Sort by sortOrder for display
   keys.sort(function(a, b) {
      var ao = APT_CAT_META[a].sortOrder || 100;
      var bo = APT_CAT_META[b].sortOrder || 100;
      return ao - bo;
   });

   var html = '<div class="apt-providers-grid" style="margin-top:1rem">';
   keys.forEach(function(k) {
      var c = APT_CAT_META[k];
      var providerCount = (_aptProvidersCache || []).filter(function(p) { return p.category === k; }).length;
      var kid = k.replace(/'/g, "\\'");
      html += '<div class="apt-provider-card">' +
                '<div class="apt-provider-top">' +
                   '<div class="apt-provider-icon">' + c.icon + '</div>' +
                   '<div style="flex:1;min-width:0">' +
                      '<div class="apt-provider-name">' + c.label + '</div>' +
                      '<div class="apt-provider-tagline">' + (c.desc || '') + '</div>' +
                      '<div class="apt-provider-tagline" style="margin-top:3px;color:#1a73e8">' + c.staffIcon + ' Staff: ' + c.staffLabel + '</div>' +
                      '<div class="apt-provider-tagline" style="margin-top:3px;font-family:ui-monospace,monospace;color:#888">ID: ' + k + '</div>' +
                   '</div>' +
                '</div>' +
                '<div class="apt-provider-footer">' +
                   '<span>' + providerCount + ' provider' + (providerCount === 1 ? '' : 's') + '</span>' +
                   '<div style="display:flex;gap:6px">' +
                      '<button class="apt-view-btn" onclick="openAptCategoryModal(\'' + kid + '\')">✏️ Edit</button>' +
                      '<button class="apt-view-btn" style="background:#c62828" onclick="deleteAptCategory(\'' + kid + '\')">🗑</button>' +
                   '</div>' +
                '</div>' +
             '</div>';
   });
   html += '</div>';
   container.innerHTML = html;
}

function openAptCategoryModal(id) {
   var c = id ? APT_CAT_META[id] : null;
   document.getElementById('aptCategoryModalTitle').textContent = c ? '✏️ Edit Category' : '➕ Add Category';
   document.getElementById('aptCatOriginalId').value = id || '';
   document.getElementById('aptCatId').value         = id || '';
   document.getElementById('aptCatId').disabled      = !!id;   // can't change PK after creation
   document.getElementById('aptCatLabel').value      = c ? c.label : '';
   document.getElementById('aptCatDesc').value       = c ? (c.desc || '') : '';
   document.getElementById('aptCatIcon').value       = c ? (c.icon || '') : '';
   document.getElementById('aptCatStaffLabel').value = c ? (c.staffLabel || '') : '';
   document.getElementById('aptCatStaffIcon').value  = c ? (c.staffIcon || '') : '';
   document.getElementById('aptCatSortOrder').value  = c && c.sortOrder != null ? c.sortOrder : 100;
   document.getElementById('aptCategoryModal').classList.remove('hidden');
}

function closeAptCategoryModal() {
   document.getElementById('aptCategoryModal').classList.add('hidden');
}

async function saveAptCategory() {
   var id    = document.getElementById('aptCatId').value.trim().toLowerCase().replace(/\s+/g, '_');
   var label = document.getElementById('aptCatLabel').value.trim();
   if (!id)    { alert('ID is required (short code like "beauty").'); return; }
   if (!label) { alert('Label is required.'); return; }
   if (!/^[a-z][a-z0-9_]*$/.test(id)) { alert('ID can only contain lowercase letters, digits, and underscores, starting with a letter.'); return; }

   var cat = {
      id:          id,
      label:       label,
      description: document.getElementById('aptCatDesc').value.trim(),
      icon:        document.getElementById('aptCatIcon').value.trim() || '🏥',
      staff_label: document.getElementById('aptCatStaffLabel').value.trim() || 'Staff',
      staff_icon:  document.getElementById('aptCatStaffIcon').value.trim() || '👥',
      sort_order:  parseInt(document.getElementById('aptCatSortOrder').value, 10) || 100
   };
   var ok = await AppDB.upsertCategory(cat);
   if (!ok) { alert('Failed to save category.'); return; }
   closeAptCategoryModal();
   await renderAptCategoriesAdmin();
}

async function deleteAptCategory(id) {
   var c = APT_CAT_META[id];
   if (!c) return;
   // Don't allow deletion if any provider still uses this category
   var inUse = (_aptProvidersCache || []).filter(function(p) { return p.category === id; });
   if (inUse.length) {
      alert('Cannot delete "' + c.label + '" — ' + inUse.length + ' provider(s) still use this category. Reassign them first.');
      return;
   }
   if (!confirm('Delete category "' + c.label + '"? This cannot be undone.')) return;
   var ok = await AppDB.deleteCategory(id);
   if (!ok) { alert('Failed to delete.'); return; }
   await renderAptCategoriesAdmin();
}

// ── ADMIN: STORE Categories CRUD (mirrors apt-category CRUD above) ─────
function switchStoreAdminSub(sub) {
   ['providers', 'categories'].forEach(function(s) {
      var pane = document.getElementById('store-sub-' + s);
      var btn  = document.getElementById('store-subtab-' + s + '-btn');
      if (pane) pane.classList.toggle('hidden', s !== sub);
      if (btn)  btn.classList.toggle('active', s === sub);
   });
   if (sub === 'categories') renderStoreCategoriesAdmin();
   if (sub === 'providers')  renderStoreProvidersAdmin();
}

async function renderStoreCategoriesAdmin() {
   var container = document.getElementById('storeCategoriesContent');
   if (!container) return;
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadStoreCategories(true);
   await loadStoreProviders(true);

   var keys = Object.keys(STORE_CAT_META);
   if (!keys.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No categories yet. Click <strong>➕ Add Category</strong>.</p>';
      return;
   }
   keys.sort(function(a, b) {
      return (STORE_CAT_META[a].sortOrder || 100) - (STORE_CAT_META[b].sortOrder || 100);
   });

   var html = '<div class="apt-providers-grid" style="margin-top:1rem">';
   keys.forEach(function(k) {
      var c = STORE_CAT_META[k];
      var providerCount = _storeProvidersByCat(k).length;
      var kid = k.replace(/'/g, "\\'");
      html += '<div class="apt-provider-card">' +
                '<div class="apt-provider-top">' +
                   '<div class="apt-provider-icon">' + c.icon + '</div>' +
                   '<div style="flex:1;min-width:0">' +
                      '<div class="apt-provider-name">' + c.label + '</div>' +
                      '<div class="apt-provider-tagline">' + (c.desc || '') + '</div>' +
                      '<div class="apt-provider-tagline" style="margin-top:3px;font-family:ui-monospace,monospace;color:#888">ID: ' + k + '</div>' +
                   '</div>' +
                '</div>' +
                '<div class="apt-provider-footer">' +
                   '<span>' + providerCount + ' store' + (providerCount === 1 ? '' : 's') + '</span>' +
                   '<div style="display:flex;gap:6px">' +
                      '<button class="apt-view-btn" onclick="openStoreCategoryModal(\'' + kid + '\')">✏️ Edit</button>' +
                      '<button class="apt-view-btn" style="background:#c62828" onclick="deleteStoreCategoryUi(\'' + kid + '\')">🗑</button>' +
                   '</div>' +
                '</div>' +
             '</div>';
   });
   html += '</div>';
   container.innerHTML = html;
}

function openStoreCategoryModal(id) {
   var c = id ? STORE_CAT_META[id] : null;
   document.getElementById('storeCategoryModalTitle').textContent = c ? '✏️ Edit Category' : '➕ Add Category';
   document.getElementById('storeCatOriginalId').value = id || '';
   document.getElementById('storeCatId').value         = id || '';
   document.getElementById('storeCatId').disabled      = !!id;
   document.getElementById('storeCatLabel').value      = c ? c.label : '';
   document.getElementById('storeCatDesc').value       = c ? (c.desc || '') : '';
   document.getElementById('storeCatIcon').value       = c ? (c.icon || '') : '';
   document.getElementById('storeCatSortOrder').value  = c && c.sortOrder != null ? c.sortOrder : 100;
   document.getElementById('storeCategoryModal').classList.remove('hidden');
}
function closeStoreCategoryModal() {
   document.getElementById('storeCategoryModal').classList.add('hidden');
}

async function saveStoreCategory() {
   var id    = document.getElementById('storeCatId').value.trim().toLowerCase().replace(/\s+/g, '_');
   var label = document.getElementById('storeCatLabel').value.trim();
   if (!id)    { alert('ID is required (short code like "wholesale").'); return; }
   if (!label) { alert('Label is required.'); return; }
   if (!/^[a-z][a-z0-9_]*$/.test(id)) { alert('ID can only contain lowercase letters, digits, and underscores, starting with a letter.'); return; }

   var cat = {
      id:          id,
      label:       label,
      description: document.getElementById('storeCatDesc').value.trim(),
      icon:        document.getElementById('storeCatIcon').value.trim() || '🏪',
      sort_order:  parseInt(document.getElementById('storeCatSortOrder').value, 10) || 100
   };
   var ok = await AppDB.upsertStoreCategory(cat);
   if (!ok) { alert('Failed to save category.'); return; }
   closeStoreCategoryModal();
   await renderStoreCategoriesAdmin();
}

async function deleteStoreCategoryUi(id) {
   var c = STORE_CAT_META[id];
   if (!c) return;
   var inUse = _storeProvidersByCat(id);
   if (inUse.length) {
      alert('Cannot delete "' + c.label + '" — ' + inUse.length + ' store(s) still use this category. Reassign or delete them first.');
      return;
   }
   if (!confirm('Delete category "' + c.label + '"? This cannot be undone.')) return;
   var ok = await AppDB.deleteStoreCategory(id);
   if (!ok) { alert('Failed to delete.'); return; }
   await renderStoreCategoriesAdmin();
}

// ── ADMIN: STORE Providers CRUD (mirrors apt-provider CRUD) ─────
async function renderStoreProvidersAdmin() {
   var container = document.getElementById('storeProvidersContent');
   if (!container) return;
   _liveSubscribe('adminStoreProvs', 'store_providers', renderStoreProvidersAdmin);
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadStoreCategories();
   await loadStoreProviders(true);

   // Populate category-filter dropdown (preserve current selection)
   var catSel = document.getElementById('storeAdminCatFilter');
   if (catSel) {
      var current = catSel.value;
      catSel.innerHTML = '<option value="">All Categories</option>' +
         Object.keys(STORE_CAT_META).map(function(k) {
            var c = STORE_CAT_META[k];
            return '<option value="' + k + '"' + (k === current ? ' selected' : '') + '>' + c.icon + ' ' + c.label + '</option>';
         }).join('');
   }

   var filter = (document.getElementById('storeAdminCatFilter') || {}).value || '';
   var list = (_storeProvidersCache || []).filter(function(p) { return !filter || p.category === filter; });

   if (!list.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">' +
         'No stores yet. Click <strong>➕ Add Store</strong> to create one.' +
      '</p>';
      return;
   }

   var html = '<div class="apt-providers-grid" style="margin-top:1rem">';
   list.forEach(function(p) {
      var meta = STORE_CAT_META[p.category] || { icon: '🏪', label: p.category };
      var icon = p.icon || meta.icon;
      var pid  = p.id.replace(/'/g, "\\'");
      html += '<div class="apt-provider-card">' +
                '<div class="apt-provider-top">' +
                   '<div class="apt-provider-icon">' + icon + '</div>' +
                   '<div style="flex:1;min-width:0">' +
                      '<div class="apt-provider-name">' + p.name + '</div>' +
                      '<div class="apt-provider-tagline">' + (p.tagline || '') + '</div>' +
                      '<div class="apt-provider-tagline" style="margin-top:3px;color:#1a73e8">' + meta.icon + ' ' + meta.label + '</div>' +
                   '</div>' +
                '</div>' +
                (p.address     ? '<div class="apt-provider-meta">📍 ' + _mapsLink(p.address) + '</div>' : '') +
                (p.timing      ? '<div class="apt-provider-meta">🕒 ' + p.timing + '</div>' : '') +
                (p.phone       ? '<div class="apt-provider-meta">📞 ' + _phoneLink(p.phone) + '</div>' : '') +
                (p.owner_email ? '<div class="apt-provider-meta">👤 ' + p.owner_email + '</div>' : '') +
                (p.door_delivery ? '<div class="apt-provider-meta" style="color:#0a8a3a">🚚 Home delivery</div>' : '') +
                ((p.commission_value > 0)
                   ? '<div class="apt-provider-meta">💼 Commission: ' +
                       (p.commission_type === 'fixed_monthly'
                          ? '₹' + Number(p.commission_value).toLocaleString('en-IN') + '/month'
                          : Number(p.commission_value) + '%') +
                     '</div>'
                   : '') +
                '<div class="apt-provider-footer">' +
                   '<span style="font-family:ui-monospace,monospace;color:#888;font-size:0.75rem">ID: ' + p.id + '</span>' +
                   '<div style="display:flex;gap:6px">' +
                      '<button class="apt-view-btn" onclick="openStoreProviderModal(\'' + pid + '\')">✏️ Edit</button>' +
                      '<button class="apt-view-btn" style="background:#c62828" onclick="deleteStoreProviderUi(\'' + pid + '\')">🗑</button>' +
                   '</div>' +
                '</div>' +
             '</div>';
   });
   html += '</div>';
   container.innerHTML = html;
}

function _storeGetProvider(id) {
   return (_storeProvidersCache || []).find(function(p) { return p.id === id; });
}

function openStoreProviderModal(providerId) {
   var p = providerId ? _storeGetProvider(providerId) : null;
   document.getElementById('storeProviderModalTitle').textContent = p ? '✏️ Edit Store' : '➕ Add Store';

   var catSel = document.getElementById('storeProvCategory');
   if (catSel) {
      var keys = Object.keys(STORE_CAT_META);
      if (!keys.length) {
         alert('Create at least one Category first (🗂 Categories tab).');
         return;
      }
      catSel.innerHTML = keys.map(function(k) {
         var c = STORE_CAT_META[k];
         return '<option value="' + k + '">' + c.icon + ' ' + c.label + '</option>';
      }).join('');
   }

   document.getElementById('storeProvId').value       = p ? p.id : '';
   document.getElementById('storeProvCategory').value = p ? p.category : (Object.keys(STORE_CAT_META)[0] || 'general');
   document.getElementById('storeProvName').value     = p ? p.name : '';
   document.getElementById('storeProvTagline').value  = p ? (p.tagline   || '') : '';
   document.getElementById('storeProvAddress').value  = p ? (p.address   || '') : '';
   document.getElementById('storeProvTiming').value   = p ? (p.timing    || '') : '';
   document.getElementById('storeProvPhone').value    = p ? (p.phone     || '') : '';
   document.getElementById('storeProvGstin').value    = p ? (p.gstin     || '') : '';
   document.getElementById('storeProvForm20').value   = p ? (p.form20_no || '') : '';
   document.getElementById('storeProvForm21').value   = p ? (p.form21_no || '') : '';
   document.getElementById('storeProvFssai').value    = p ? (p.fssai_no  || '') : '';
   document.getElementById('storeProvIcon').value     = p ? (p.icon      || '') : '';
   document.getElementById('storeProvImage').value    = p ? (p.image_url || '') : '';
   document.getElementById('storeProvDoorDelivery').checked  = p ? !!p.door_delivery : false;
   document.getElementById('storeProvCommissionType').value  = (p && p.commission_type)  || 'percent';
   document.getElementById('storeProvCommissionValue').value = (p && p.commission_value != null) ? p.commission_value : '';
   _storeProvCommissionTypeChanged();

   // Owner dropdown (current storeowners)
   var ownerSel = document.getElementById('storeProvOwner');
   var current  = p ? (p.owner_email || '') : '';
   var owners   = (getUsers() || []).filter(function(u) { return u.role === 'storeowner'; });
   var opts     = '<option value="">— Not assigned (admin manages) —</option>';
   owners.forEach(function(u) {
      var label = (u.name || u.email) + ' (' + u.email + ')';
      var sel = ((u.email || '').toLowerCase() === (current || '').toLowerCase()) ? ' selected' : '';
      opts += '<option value="' + u.email + '"' + sel + '>' + label + '</option>';
   });
   if (current && !owners.find(function(u) { return (u.email || '').toLowerCase() === current.toLowerCase(); })) {
      opts += '<option value="' + current + '" selected>' + current + ' (not a registered business partner)</option>';
   }
   ownerSel.innerHTML = opts;

   document.getElementById('storeProviderModal').classList.remove('hidden');
}

function closeStoreProviderModal() {
   document.getElementById('storeProviderModal').classList.add('hidden');
}

// Toggle the commission-value label based on chosen type (mirrors apt providers).
function _storeProvCommissionTypeChanged() {
   var type  = document.getElementById('storeProvCommissionType').value;
   var label = document.getElementById('storeProvCommissionLabel');
   var input = document.getElementById('storeProvCommissionValue');
   if (!label || !input) return;
   if (type === 'fixed_monthly') {
      label.textContent = 'Monthly Fee (₹)';
      input.placeholder = '5000';
   } else {
      label.textContent = 'Commission Rate (%)';
      input.placeholder = '5';
   }
}

async function saveStoreProvider() {
   var name = document.getElementById('storeProvName').value.trim();
   if (!name) { alert('Store name is required.'); return; }
   var existingId = document.getElementById('storeProvId').value;
   var category   = document.getElementById('storeProvCategory').value;
   if (!STORE_CAT_META[category]) { alert('Pick a valid category.'); return; }
   var icon = document.getElementById('storeProvIcon').value.trim() || STORE_CAT_META[category].icon || '🏪';

   var id = existingId || (category + '_' + Date.now().toString(36));
   var provider = {
      id:               id,
      category:         category,
      name:             name,
      tagline:          document.getElementById('storeProvTagline').value.trim(),
      address:          document.getElementById('storeProvAddress').value.trim(),
      timing:           document.getElementById('storeProvTiming').value.trim(),
      phone:            document.getElementById('storeProvPhone').value.trim(),
      gstin:            document.getElementById('storeProvGstin').value.trim().toUpperCase(),
      form20_no:        document.getElementById('storeProvForm20').value.trim(),
      form21_no:        document.getElementById('storeProvForm21').value.trim(),
      fssai_no:         document.getElementById('storeProvFssai').value.trim(),
      icon:             icon,
      image_url:        document.getElementById('storeProvImage').value.trim(),
      door_delivery:    document.getElementById('storeProvDoorDelivery').checked,
      commission_type:  document.getElementById('storeProvCommissionType').value || 'percent',
      commission_value: parseFloat(document.getElementById('storeProvCommissionValue').value) || 0,
      owner_email:      document.getElementById('storeProvOwner').value || ''
   };
   var ok = await AppDB.upsertStoreProvider(provider);
   if (!ok) { alert('Failed to save. Check console.'); return; }

   // Sync to the owner's user record so the store's address / phone / store-name
   // also show up in their Profile page. Only fills BLANK fields — never
   // overwrites a value the owner may have already personalised.
   if (provider.owner_email) {
      var u = (_db.users || []).find(function(x) { return (x.email || '').toLowerCase() === provider.owner_email.toLowerCase(); });
      if (u) {
         var patched = false;
         if (provider.address && !u.address)         { u.address   = provider.address; patched = true; }
         if (provider.phone   && !u.phone)           { u.phone     = provider.phone;   patched = true; }
         if (provider.name    && !u.storeName)       { u.storeName = provider.name;    patched = true; }
         if (patched) await AppDB.upsertUser(u);
      }
   }

   closeStoreProviderModal();
   await renderStoreProvidersAdmin();
}

// ── ADMIN: CATALOGUE (master item list per category) ──────────
// Per-category schema is admin-editable, stored on store_categories.catalog_fields.
// Common fields (name, brand, price, serial, batch, image) live as columns;
// per-category extras go into the items.attrs JSONB blob.
function _catalogSchemaFor(catKey) {
   var meta = STORE_CAT_META[catKey];
   return (meta && Array.isArray(meta.catalogFields)) ? meta.catalogFields : [];
}

let _catalogCurrentCat   = null;
let _catalogItemsCache   = [];   // items for the currently selected category

async function renderCatalogCategoriesGrid() {
   var grid = document.getElementById('catalogCategoriesGrid');
   if (!grid) return;
   grid.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadStoreCategories(true);
   var keys = Object.keys(STORE_CAT_META);
   if (!keys.length) {
      grid.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No categories yet. Set them up in Admin → 🏪 Stores → 🗂 Categories.</p>';
      return;
   }
   keys.sort(function(a, b) {
      return (STORE_CAT_META[a].sortOrder || 100) - (STORE_CAT_META[b].sortOrder || 100);
   });

   // Quick item counts in parallel
   var counts = await Promise.all(keys.map(function(k) {
      return AppDB.getCatalogItems(k).then(function(rows) { return rows.length; });
   }));

   var html = '<div class="apt-cats-grid" style="margin-top:1rem">';
   keys.forEach(function(k, i) {
      var c = STORE_CAT_META[k];
      var kid = k.replace(/'/g, "\\'");
      html += '<div class="apt-cat-card" onclick="enterCatalogCategory(\'' + kid + '\')">' +
                '<div class="apt-cat-icon">' + c.icon + '</div>' +
                '<div class="apt-cat-label">' + c.label + '</div>' +
                '<div class="apt-cat-desc">' + (c.desc || '') + '</div>' +
                '<div class="apt-cat-count">' + counts[i] + (counts[i] === 1 ? ' item' : ' items') + '</div>' +
              '</div>';
   });
   html += '</div>';
   grid.innerHTML = html;
}

function enterCatalogCategory(catKey) {
   _catalogCurrentCat = catKey;
   document.getElementById('catalogCategoriesView').classList.add('hidden');
   document.getElementById('catalogItemsView').classList.remove('hidden');
   var meta = STORE_CAT_META[catKey] || { icon: '🧬', label: catKey };
   document.getElementById('catalogItemsTitle').textContent = meta.icon + ' ' + meta.label;
   var s = document.getElementById('catalogItemSearch'); if (s) s.value = '';
   renderCatalogItems();
}
function exitCatalogCategory() {
   _catalogCurrentCat = null;
   document.getElementById('catalogItemsView').classList.add('hidden');
   document.getElementById('catalogCategoriesView').classList.remove('hidden');
   renderCatalogCategoriesGrid();
}

// Debounced wrapper so the items-search input doesn't fire a DB hit per keystroke.
var _catalogRenderTimer = null;
function scheduleRenderCatalogItems() {
   clearTimeout(_catalogRenderTimer);
   _catalogRenderTimer = setTimeout(renderCatalogItems, 220);
}

async function renderCatalogItems() {
   if (!_catalogCurrentCat) return;
   var container = document.getElementById('catalogItemsContent');
   if (!container) return;

   var schema = _catalogSchemaFor(_catalogCurrentCat);
   var search = ((document.getElementById('catalogItemSearch') || {}).value || '').trim();
   var RENDER_CAP = 200;

   // Server-side fetch: pull only the first RENDER_CAP matches. Postgres
   // does the ilike search on name + brand — fast even at 250K rows because
   // there's a btree index on name (and the dataset usually fits in cache).
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   var rows = await AppDB.getCatalogItems(_catalogCurrentCat, { search: search, limit: RENDER_CAP });
   // Replace the cache with the currently-visible slice. Edit/Delete look
   // items up here by id, which is fine since every rendered row is included.
   _catalogItemsCache = rows.slice();
   _catalogItemsCache._cat = _catalogCurrentCat;

   if (!rows.length) {
      if (search) {
         container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No items match "<strong>' + search + '</strong>".</p>';
      } else {
         container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No items yet. Click <strong>➕ Add Item</strong> to start populating the master catalogue.</p>';
      }
      return;
   }

   // Background count (don't block the render). If there are more items than
   // we showed, drop a footer note pointing the admin at search.
   var totalMatchingPromise = AppDB.countCatalogItems(_catalogCurrentCat, { search: search });

   var headExtra = schema.slice(0, 3).map(function(f) { return '<th>' + f.label + '</th>'; }).join('');
   var html = '<div style="overflow-x:auto"><table class="catalog-items-table">' +
              '<thead><tr>' +
                 '<th style="width:46px"></th>' +
                 '<th>Name</th>' +
                 '<th>Brand</th>' +
                 '<th>Price (₹)</th>' +
                 '<th>Serial</th>' +
                 '<th>Batch</th>' +
                 headExtra +
                 '<th style="width:110px">Actions</th>' +
              '</tr></thead><tbody>';
   rows.forEach(function(it) {
      var iid = it.id.replace(/'/g, "\\'");
      var attrs = it.attrs || {};
      var attrCells = schema.slice(0, 3).map(function(f) {
         var v = attrs[f.key];
         if (f.type === 'checkbox') return '<td>' + (v ? '✅' : '—') + '</td>';
         return '<td>' + (v == null || v === '' ? '<span style="color:#bbb">—</span>' : v) + '</td>';
      }).join('');
      var img = it.image_url
         ? '<img src="' + it.image_url + '" style="width:38px;height:38px;border-radius:6px;object-fit:cover" onerror="this.style.display=\'none\'"/>'
         : '<span style="font-size:1.4rem">💊</span>';
      html += '<tr>' +
                 '<td>' + img + '</td>' +
                 '<td><strong>' + (it.name || '') + '</strong></td>' +
                 '<td>' + (it.brand || '<span style="color:#bbb">—</span>') + '</td>' +
                 '<td>' + ((it.price || it.price === 0) ? '₹' + Number(it.price).toLocaleString('en-IN') : '<span style="color:#bbb">—</span>') + '</td>' +
                 '<td>' + (it.serial_no || '<span style="color:#bbb">—</span>') + '</td>' +
                 '<td>' + (it.batch_no  || '<span style="color:#bbb">—</span>') + '</td>' +
                 attrCells +
                 '<td>' +
                    '<button class="apt-view-btn" style="background:#1a73e8" onclick="showCompositionDetails(\'' + iid + '\')" title="Show composition + alternatives">ℹ️</button> ' +
                    '<button class="apt-view-btn" onclick="openCatalogItemModal(\'' + iid + '\')">✏️</button> ' +
                    '<button class="apt-view-btn" style="background:#c62828" onclick="deleteCatalogItemUi(\'' + iid + '\')">🗑</button>' +
                 '</td>' +
              '</tr>';
   });
   html += '</tbody></table></div>';
   // Footer slot — populated async once the count query returns.
   html += '<p id="catalogItemsFooter" style="color:#888;font-size:0.85rem;text-align:center;margin:12px 0"></p>';
   container.innerHTML = html;

   // Fill in the footer once the count query resolves.
   totalMatchingPromise.then(function(total) {
      var footer = document.getElementById('catalogItemsFooter');
      if (!footer) return;
      if (total > rows.length) {
         footer.innerHTML = 'Showing first <strong>' + rows.length + '</strong> of <strong>' +
                             total.toLocaleString('en-IN') + '</strong> matching items. ' +
                            (search ? 'Refine your search to narrow further.' : 'Use the 🔍 search box to filter.');
      } else {
         footer.textContent = total + ' item' + (total === 1 ? '' : 's') + '.';
      }
   });
}

function openCatalogItemModal(itemId) {
   if (!_catalogCurrentCat) { alert('Pick a category first.'); return; }
   var it = itemId ? _catalogItemsCache.find(function(x) { return x.id === itemId; }) : null;
   document.getElementById('catalogItemModalTitle').textContent = it ? '✏️ Edit Item' : '➕ Add Item';
   document.getElementById('catItemId').value       = it ? it.id : '';
   document.getElementById('catItemCategory').value = _catalogCurrentCat;
   document.getElementById('catItemName').value     = it ? (it.name      || '') : '';
   document.getElementById('catItemBrand').value    = it ? (it.brand     || '') : '';
   document.getElementById('catItemPrice').value    = it ? (it.price     != null ? it.price : '') : '';
   document.getElementById('catItemSerial').value   = it ? (it.serial_no || '') : '';
   document.getElementById('catItemBatch').value    = it ? (it.batch_no  || '') : '';
   document.getElementById('catItemImage').value    = it ? (it.image_url || '') : '';

   // Render dynamic per-category fields
   var host = document.getElementById('catItemAttrsHost');
   var schema = _catalogSchemaFor(_catalogCurrentCat);
   var attrs = it && it.attrs ? it.attrs : {};
   host.innerHTML = schema.map(function(f) {
      var inputId = 'catItemAttr_' + f.key;
      var val = attrs[f.key];
      if (f.type === 'checkbox') {
         return '<div class="modal-field">' +
                   '<label><input type="checkbox" id="' + inputId + '"' + (val ? ' checked' : '') + ' style="margin-right:6px"/>' + f.label + '</label>' +
                '</div>';
      }
      return '<div class="modal-field">' +
                '<label>' + f.label + '</label>' +
                '<input type="' + (f.type || 'text') + '" id="' + inputId + '" placeholder="' + (f.placeholder || '') + '" value="' + (val == null ? '' : String(val).replace(/"/g, '&quot;')) + '"' + (f.type === 'number' ? ' step="any"' : '') + '/>' +
             '</div>';
   }).join('');

   document.getElementById('catalogItemModal').classList.remove('hidden');
}

function closeCatalogItemModal() {
   document.getElementById('catalogItemModal').classList.add('hidden');
}

async function saveCatalogItem() {
   var name = document.getElementById('catItemName').value.trim();
   if (!name) { alert('Item name is required.'); return; }
   var category   = document.getElementById('catItemCategory').value;
   var existingId = document.getElementById('catItemId').value;
   var id = existingId || ('cat_' + category + '_' + Date.now().toString(36));

   // Collect per-category attrs
   var schema = _catalogSchemaFor(category);
   var attrs = {};
   schema.forEach(function(f) {
      var el = document.getElementById('catItemAttr_' + f.key);
      if (!el) return;
      if (f.type === 'checkbox')      attrs[f.key] = !!el.checked;
      else if (f.type === 'number')   attrs[f.key] = el.value === '' ? null : (parseFloat(el.value) || 0);
      else                            attrs[f.key] = el.value.trim();
   });

   var item = {
      id:        id,
      category:  category,
      name:      name,
      brand:     document.getElementById('catItemBrand').value.trim(),
      price:     parseFloat(document.getElementById('catItemPrice').value) || 0,
      serial_no: document.getElementById('catItemSerial').value.trim(),
      batch_no:  document.getElementById('catItemBatch').value.trim(),
      image_url: document.getElementById('catItemImage').value.trim(),
      attrs:     attrs
   };
   var ok = await AppDB.upsertCatalogItem(item);
   if (!ok) { alert('Failed to save.'); return; }
   closeCatalogItemModal();
   renderCatalogItems();   // Refetch from server; matches the new server-side model
}

// ── Admin: edit per-category catalogue schema (add/remove/rename fields) ──
let _catalogFieldsDraft = [];

function openCatalogFieldsModal() {
   if (!_catalogCurrentCat) { alert('Pick a category first.'); return; }
   var meta = STORE_CAT_META[_catalogCurrentCat] || {};
   _catalogFieldsDraft = (meta.catalogFields || []).map(function(f) {
      return { key: f.key, label: f.label, type: f.type || 'text', placeholder: f.placeholder || '' };
   });
   document.getElementById('catalogFieldsModalTitle').textContent =
      '⚙️ Edit Fields — ' + (meta.icon || '🧬') + ' ' + (meta.label || _catalogCurrentCat);
   renderCatalogFieldsList();
   document.getElementById('catalogFieldsModal').classList.remove('hidden');
}

function closeCatalogFieldsModal() {
   document.getElementById('catalogFieldsModal').classList.add('hidden');
   _catalogFieldsDraft = [];
}

function renderCatalogFieldsList() {
   var host = document.getElementById('catalogFieldsList');
   if (!host) return;
   if (!_catalogFieldsDraft.length) {
      host.innerHTML = '<p style="color:#999;text-align:center;padding:20px;border:1px dashed #ccc;border-radius:8px">No extra fields yet. Click <strong>➕ Add Field</strong>.</p>';
      return;
   }
   host.innerHTML = _catalogFieldsDraft.map(function(f, i) {
      return '<div class="catalog-field-row">' +
                '<div class="catalog-field-handles">' +
                   '<button class="catalog-field-btn" title="Move up"   onclick="moveCatalogField(' + i + ',-1)"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
                   '<button class="catalog-field-btn" title="Move down" onclick="moveCatalogField(' + i + ', 1)"' + (i === _catalogFieldsDraft.length - 1 ? ' disabled' : '') + '>↓</button>' +
                '</div>' +
                '<div class="catalog-field-inputs">' +
                   '<div class="catalog-field-cell">' +
                      '<label>Label</label>' +
                      '<input type="text" value="' + String(f.label || '').replace(/"/g, '&quot;') + '" placeholder="e.g. Composition" oninput="_catalogFieldEdit(' + i + ',\'label\',this.value)"/>' +
                   '</div>' +
                   '<div class="catalog-field-cell">' +
                      '<label>Key</label>' +
                      '<input type="text" value="' + String(f.key || '').replace(/"/g, '&quot;') + '" placeholder="composition" oninput="_catalogFieldEdit(' + i + ',\'key\',this.value)"/>' +
                   '</div>' +
                   '<div class="catalog-field-cell" style="max-width:130px">' +
                      '<label>Type</label>' +
                      '<select onchange="_catalogFieldEdit(' + i + ',\'type\',this.value)">' +
                         '<option value="text"'     + (f.type === 'text'     ? ' selected' : '') + '>Text</option>' +
                         '<option value="number"'   + (f.type === 'number'   ? ' selected' : '') + '>Number</option>' +
                         '<option value="checkbox"' + (f.type === 'checkbox' ? ' selected' : '') + '>Checkbox</option>' +
                         '<option value="date"'     + (f.type === 'date'     ? ' selected' : '') + '>Date</option>' +
                         '<option value="month"'    + (f.type === 'month'    ? ' selected' : '') + '>Month/Year</option>' +
                      '</select>' +
                   '</div>' +
                   '<div class="catalog-field-cell">' +
                      '<label>Placeholder</label>' +
                      '<input type="text" value="' + String(f.placeholder || '').replace(/"/g, '&quot;') + '" placeholder="example value" oninput="_catalogFieldEdit(' + i + ',\'placeholder\',this.value)"/>' +
                   '</div>' +
                '</div>' +
                '<button class="catalog-field-btn" style="background:#c62828;color:#fff" title="Remove field" onclick="removeCatalogField(' + i + ')">🗑</button>' +
              '</div>';
   }).join('');
}

function _catalogFieldEdit(i, key, val) {
   if (!_catalogFieldsDraft[i]) return;
   _catalogFieldsDraft[i][key] = val;
}

function addCatalogField() {
   _catalogFieldsDraft.push({ key: '', label: '', type: 'text', placeholder: '' });
   renderCatalogFieldsList();
}

function removeCatalogField(i) {
   _catalogFieldsDraft.splice(i, 1);
   renderCatalogFieldsList();
}

function moveCatalogField(i, dir) {
   var j = i + dir;
   if (j < 0 || j >= _catalogFieldsDraft.length) return;
   var t = _catalogFieldsDraft[i];
   _catalogFieldsDraft[i] = _catalogFieldsDraft[j];
   _catalogFieldsDraft[j] = t;
   renderCatalogFieldsList();
}

async function saveCatalogFields() {
   if (!_catalogCurrentCat) return;
   // Validate: each field needs label + key; keys must be unique snake_case
   var seen = {};
   for (var i = 0; i < _catalogFieldsDraft.length; i++) {
      var f = _catalogFieldsDraft[i];
      var label = (f.label || '').trim();
      var key   = (f.key   || '').trim().toLowerCase().replace(/\s+/g, '_');
      if (!label || !key) { alert('Row ' + (i + 1) + ': label and key are required.'); return; }
      if (!/^[a-z][a-z0-9_]*$/.test(key)) { alert('Row ' + (i + 1) + ': key "' + key + '" must be lowercase letters/digits/underscores, starting with a letter.'); return; }
      if (seen[key]) { alert('Duplicate key: ' + key); return; }
      seen[key] = true;
      f.label = label;
      f.key   = key;
      f.type  = f.type || 'text';
      f.placeholder = (f.placeholder || '').trim();
   }

   var meta = STORE_CAT_META[_catalogCurrentCat] || {};
   var row = {
      id:             _catalogCurrentCat,
      label:          meta.label,
      description:    meta.desc  || '',
      icon:           meta.icon  || '🏪',
      sort_order:     meta.sortOrder || 100,
      catalog_fields: _catalogFieldsDraft
   };
   var ok = await AppDB.upsertStoreCategory(row);
   if (!ok) { alert('Failed to save fields.'); return; }
   // Refresh local cache and re-render
   await loadStoreCategories(true);
   closeCatalogFieldsModal();
   renderCatalogItems();
}

// ── Admin: CSV bulk import for the catalogue ─────────────
// Minimal RFC-4180-ish CSV parser. Handles quoted fields with embedded commas,
// doubled-quote escape ("" → "), CR/LF line endings.
function _parseCSV(text) {
   var src = String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
   if (!src.trim()) return { headers: [], rows: [] };
   var lines = src.split('\n');
   function parseLine(line) {
      var out = [], cur = '', inQ = false;
      for (var i = 0; i < line.length; i++) {
         var c = line[i];
         if (c === '"') {
            if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
            else inQ = !inQ;
         } else if (c === ',' && !inQ) {
            out.push(cur); cur = '';
         } else cur += c;
      }
      out.push(cur);
      return out.map(function(s) { return s.trim(); });
   }
   // Strip BOM + blank trailing lines
   if (lines[0].charCodeAt(0) === 0xFEFF) lines[0] = lines[0].slice(1);
   var nonEmpty = lines.filter(function(l) { return l.trim().length > 0; });
   if (!nonEmpty.length) return { headers: [], rows: [] };
   var headers = parseLine(nonEmpty[0]);
   var rows = nonEmpty.slice(1).map(function(line) {
      var cols = parseLine(line);
      var obj = {};
      headers.forEach(function(h, i) { obj[h] = (cols[i] != null) ? cols[i] : ''; });
      return obj;
   });
   return { headers: headers, rows: rows };
}

// Generate a CSV template for the current category (header row only).
function _csvTemplateForCurrentCategory() {
   var base = ['name','brand','price','serial_no','batch_no','image_url'];
   var extras = _catalogSchemaFor(_catalogCurrentCat).map(function(f) { return f.key; });
   var headers = base.concat(extras);
   // Example row showing common values (so admin doesn't start from scratch)
   var ex = {
      name: 'Dolo 650', brand: 'Micro Labs', price: '35',
      serial_no: '', batch_no: '', image_url: ''
   };
   if (_catalogCurrentCat === 'medical') Object.assign(ex, {
      composition: 'Paracetamol 650mg', dose: '650mg',
      units_per_strip: '15', mfr: 'Micro Labs', hsn: '3004', rx_required: 'false'
   });
   var exampleRow = headers.map(function(h) {
      var v = ex[h] != null ? ex[h] : '';
      // CSV-escape only if needed
      return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
   }).join(',');
   return headers.join(',') + '\n' + exampleRow + '\n';
}

function downloadCatalogTemplate() {
   if (!_catalogCurrentCat) return;
   var csv = _csvTemplateForCurrentCategory();
   var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
   var url = URL.createObjectURL(blob);
   var a = document.createElement('a');
   a.href = url;
   a.download = 'catalogue_' + _catalogCurrentCat + '_template.csv';
   document.body.appendChild(a); a.click(); document.body.removeChild(a);
   URL.revokeObjectURL(url);
}

function openCatalogImportModal() {
   if (!_catalogCurrentCat) { alert('Pick a category first.'); return; }
   var meta = STORE_CAT_META[_catalogCurrentCat] || {};
   document.getElementById('catalogImportModalTitle').textContent =
      '📥 Import CSV — ' + (meta.icon || '🧬') + ' ' + (meta.label || _catalogCurrentCat);
   document.getElementById('catImportTextarea').value = '';
   document.getElementById('catImportSummary').innerHTML = '';
   document.getElementById('catImportPreview').innerHTML = '';
   var fileEl = document.getElementById('catImportFile');
   if (fileEl) fileEl.value = '';
   var btn = document.getElementById('catImportConfirmBtn');
   if (btn) { btn.disabled = true; btn.textContent = '📥 Import 0 items'; }
   document.getElementById('catalogImportModal').classList.remove('hidden');
}

function closeCatalogImportModal() {
   document.getElementById('catalogImportModal').classList.add('hidden');
   _pendingCsvRows = [];
}

function onCatalogCsvFile() {
   var f = document.getElementById('catImportFile').files[0];
   if (!f) return;
   var reader = new FileReader();
   reader.onload = function(e) {
      document.getElementById('catImportTextarea').value = e.target.result || '';
      previewCatalogImport();
   };
   reader.readAsText(f);
}

// Holds the validated rows ready to upsert.
var _pendingCsvRows = [];

function previewCatalogImport() {
   if (!_catalogCurrentCat) return;
   var text = document.getElementById('catImportTextarea').value || '';
   var summary = document.getElementById('catImportSummary');
   var preview = document.getElementById('catImportPreview');
   var btn     = document.getElementById('catImportConfirmBtn');
   var parsed = _parseCSV(text);
   if (!parsed.headers.length) {
      summary.innerHTML = '<span style="color:#888">Paste CSV above (or use Download template).</span>';
      preview.innerHTML = '';
      _pendingCsvRows = [];
      if (btn) { btn.disabled = true; btn.textContent = '📥 Import 0 items'; }
      return;
   }

   var schema = _catalogSchemaFor(_catalogCurrentCat);
   var attrKeys = schema.map(function(f) { return f.key; });
   var coreKeys = ['name','brand','price','serial_no','batch_no','image_url'];
   var knownKeys = coreKeys.concat(attrKeys);

   var unknown = parsed.headers.filter(function(h) { return knownKeys.indexOf(h) === -1; });
   var hasName = parsed.headers.indexOf('name') !== -1;

   var prepared = [];
   var errors = [];
   parsed.rows.forEach(function(r, idx) {
      if (!hasName) { errors.push('Row ' + (idx + 2) + ': missing required column "name".'); return; }
      var name = (r.name || '').trim();
      if (!name) return;   // skip blank-name rows silently
      var attrs = {};
      schema.forEach(function(f) {
         var raw = (r[f.key] || '').trim();
         if (f.type === 'checkbox')      attrs[f.key] = /^(true|yes|1|y)$/i.test(raw);
         else if (f.type === 'number')   attrs[f.key] = raw === '' ? null : (parseFloat(raw) || 0);
         else                            attrs[f.key] = raw;
      });
      prepared.push({
         id:        'cat_' + _catalogCurrentCat + '_' + Date.now().toString(36) + '_' + idx,
         category:  _catalogCurrentCat,
         name:      name,
         brand:     (r.brand     || '').trim(),
         price:     parseFloat(r.price) || 0,
         serial_no: (r.serial_no || '').trim(),
         batch_no:  (r.batch_no  || '').trim(),
         image_url: (r.image_url || '').trim(),
         attrs:     attrs
      });
   });
   _pendingCsvRows = prepared;

   // Summary line + warnings
   var parts = [];
   parts.push('<strong>' + prepared.length + '</strong> row' + (prepared.length === 1 ? '' : 's') + ' ready to import.');
   if (unknown.length) parts.push('<span style="color:#c62828">⚠️ Unknown columns (will be ignored): ' + unknown.join(', ') + '</span>');
   if (errors.length)  parts.push('<span style="color:#c62828">⚠️ ' + errors.length + ' validation issue' + (errors.length === 1 ? '' : 's') + ': ' + errors.slice(0,3).join(' · ') + (errors.length > 3 ? ' …' : '') + '</span>');
   summary.innerHTML = parts.join('<br/>');

   // Preview table (first 10 rows)
   if (!prepared.length) {
      preview.innerHTML = '';
      if (btn) { btn.disabled = true; btn.textContent = '📥 Import 0 items'; }
      return;
   }
   var head = '<th>Name</th><th>Brand</th><th>Price</th>' +
              schema.slice(0,3).map(function(f) { return '<th>' + f.label + '</th>'; }).join('');
   var body = prepared.slice(0, 10).map(function(it) {
      var attrCells = schema.slice(0,3).map(function(f) {
         var v = it.attrs[f.key];
         if (f.type === 'checkbox') return '<td>' + (v ? '✅' : '—') + '</td>';
         return '<td>' + (v == null || v === '' ? '<span style="color:#bbb">—</span>' : v) + '</td>';
      }).join('');
      return '<tr><td><strong>' + it.name + '</strong></td><td>' + (it.brand || '—') + '</td><td>₹' + Number(it.price).toLocaleString('en-IN') + '</td>' + attrCells + '</tr>';
   }).join('');
   preview.innerHTML = '<table class="catalog-items-table" style="font-size:0.84rem"><thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table>' +
      (prepared.length > 10 ? '<p style="color:#888;font-size:0.8rem;margin:6px 0 0">Showing first 10 of ' + prepared.length + ' rows.</p>' : '');

   if (btn) {
      btn.disabled = prepared.length === 0;
      btn.textContent = '📥 Import ' + prepared.length + ' item' + (prepared.length === 1 ? '' : 's');
   }
}

async function confirmCatalogImport() {
   if (!_pendingCsvRows.length) return;
   var btn = document.getElementById('catImportConfirmBtn');
   var summary = document.getElementById('catImportSummary');
   if (btn) { btn.disabled = true; btn.textContent = 'Importing…'; }

   // Chunk into batches — Supabase round-trips once per batch instead of once per row.
   var BATCH = 500;
   var total = _pendingCsvRows.length;
   var ok = 0, fail = 0;
   for (var start = 0; start < total; start += BATCH) {
      var chunk = _pendingCsvRows.slice(start, start + BATCH);
      if (summary) summary.innerHTML = 'Importing… <strong>' + Math.min(start + chunk.length, total) + '/' + total + '</strong>';
      var res = await AppDB.upsertCatalogItemsBatch(chunk);
      ok   += res.ok;
      fail += res.fail;
   }
   if (summary) summary.innerHTML = '<span style="color:#0a8a3a">✅ Imported ' + ok + ' item' + (ok === 1 ? '' : 's') + '</span>' +
      (fail ? '<br/><span style="color:#c62828">❌ ' + fail + ' failed (see browser console).</span>' : '');

   // Refresh items list under the current category (server-side, capped)
   renderCatalogItems();

   if (btn) { btn.textContent = '📥 Done'; btn.disabled = true; }
   setTimeout(closeCatalogImportModal, 1500);
}

// ── Admin: bulk-delete in the current category ─────────────
// Two flavours:
//   deleteAllCatalogItemsUi()      — wipes the entire category
//   deleteFilteredCatalogItemsUi() — wipes only the items matching the
//                                    current 🔍 search (good for surgical cleanup)
// Both gate behind a typed-confirmation prompt so they're harder to mis-fire.
async function deleteAllCatalogItemsUi() {
   if (!_catalogCurrentCat) return;
   var meta  = STORE_CAT_META[_catalogCurrentCat] || {};
   var total = await AppDB.countCatalogItems(_catalogCurrentCat, {});
   if (!total) { alert('Nothing to delete — this category is already empty.'); return; }
   var phrase = 'DELETE ALL';
   var typed = prompt(
      '⚠️ This will permanently delete ALL ' + total.toLocaleString('en-IN') +
      ' item' + (total === 1 ? '' : 's') + ' from "' + (meta.label || _catalogCurrentCat) + '".\n\n' +
      'This cannot be undone.\n\n' +
      'Type ' + phrase + ' (in caps) to confirm:'
   );
   if (typed !== phrase) { if (typed != null) alert('Cancelled — phrase did not match.'); return; }
   var n = await AppDB.deleteAllCatalogInCategory(_catalogCurrentCat);
   if (n < 0) { alert('Failed to delete. See console.'); return; }
   alert('Deleted ' + n + ' item' + (n === 1 ? '' : 's') + '.');
   renderCatalogItems();
}

async function deleteFilteredCatalogItemsUi() {
   if (!_catalogCurrentCat) return;
   var search = ((document.getElementById('catalogItemSearch') || {}).value || '').trim();
   if (!search) {
      alert('No filter active. Type in the 🔍 search box first — otherwise use "Delete All".');
      return;
   }
   var total = await AppDB.countCatalogItems(_catalogCurrentCat, { search: search });
   if (!total) { alert('Nothing matches "' + search + '".'); return; }
   if (!confirm('Delete ' + total.toLocaleString('en-IN') + ' item' + (total === 1 ? '' : 's') +
                ' matching "' + search + '"?\n\nThis cannot be undone.')) return;
   var n = await AppDB.deleteFilteredCatalogItems(_catalogCurrentCat, search);
   if (n < 0) { alert('Failed to delete. See console.'); return; }
   alert('Deleted ' + n + ' item' + (n === 1 ? '' : 's') + '.');
   renderCatalogItems();
}

// ── Composition details popup (admin items table + owner picker) ──
// Lazily injects the modal markup on first open so we don't have to add it
// to every HTML page that uses the catalogue.
function _ensureCompositionModal() {
   if (document.getElementById('compositionDetailsModal')) return;
   var wrap = document.createElement('div');
   wrap.innerHTML =
      '<div class="admin-modal-overlay hidden" id="compositionDetailsModal" onclick="if(event.target===this)closeCompositionDetailsModal()">' +
        '<div class="admin-modal" style="max-width:720px">' +
          '<div class="admin-modal-header">' +
            '<h3 id="compositionDetailsTitle">ℹ️ Composition</h3>' +
            '<button class="admin-modal-close" onclick="closeCompositionDetailsModal()">✕</button>' +
          '</div>' +
          '<div class="admin-modal-body" id="compositionDetailsBody">' +
            '<p style="color:#999;text-align:center;padding:30px">Loading…</p>' +
          '</div>' +
          '<div class="admin-modal-footer">' +
            '<button class="admin-modal-btn-cancel" onclick="closeCompositionDetailsModal()">Close</button>' +
          '</div>' +
        '</div>' +
      '</div>';
   document.body.appendChild(wrap.firstChild);
}

function closeCompositionDetailsModal() {
   var m = document.getElementById('compositionDetailsModal');
   if (m) m.classList.add('hidden');
}

async function showCompositionDetails(itemId) {
   _ensureCompositionModal();
   var modal = document.getElementById('compositionDetailsModal');
   var body  = document.getElementById('compositionDetailsBody');
   var title = document.getElementById('compositionDetailsTitle');
   body.innerHTML = '<p style="color:#999;text-align:center;padding:30px">Loading…</p>';
   modal.classList.remove('hidden');

   var it = await AppDB.getCatalogItemById(itemId);
   if (!it) { body.innerHTML = '<p style="color:#c62828">Item not found.</p>'; return; }

   var attrs = it.attrs || {};
   var comp  = attrs.composition || '';
   title.textContent = 'ℹ️ ' + (it.name || 'Composition');

   var details =
      '<div style="display:flex;flex-direction:column;gap:8px;font-size:0.92rem;color:#333">' +
        '<div><strong>' + (it.name || '') + '</strong>' + (it.brand ? ' <span style="color:#666">· ' + it.brand + '</span>' : '') + '</div>' +
        (it.price ? '<div>💰 <strong>₹' + Number(it.price).toLocaleString('en-IN') + '</strong></div>' : '') +
        (comp           ? '<div>🧪 <strong>Composition:</strong> ' + comp + '</div>' : '') +
        (attrs.dose     ? '<div>💊 <strong>Dose:</strong> ' + attrs.dose + '</div>' : '') +
        (attrs.units_per_strip ? '<div>📦 <strong>Units per Pack:</strong> ' + attrs.units_per_strip + '</div>' : '') +
        (attrs.mfr      ? '<div>🏭 <strong>Manufacturer:</strong> ' + attrs.mfr + '</div>' : '') +
        (attrs.hsn      ? '<div>🧾 <strong>HSN:</strong> ' + attrs.hsn + '</div>' : '') +
        (attrs.rx_required ? '<div style="color:#c62828">⚠️ <strong>Prescription required</strong></div>' : '') +
      '</div>';

   var altSection = '';
   if (comp) {
      altSection = '<hr style="border:none;border-top:1px solid #eee;margin:14px 0"/>' +
                   '<div id="compositionAltsBox">' +
                      '<p style="color:#999;font-size:0.88rem">Looking for alternatives with the same composition…</p>' +
                   '</div>';
   } else {
      altSection = '<hr style="border:none;border-top:1px solid #eee;margin:14px 0"/>' +
                   '<p style="color:#888;font-size:0.85rem">No composition recorded for this item — alternatives lookup requires composition data.</p>';
   }
   body.innerHTML = details + altSection;

   if (!comp) return;
   var alts = await AppDB.getCatalogAlternatives(it.category, comp, it.id, 25);
   var box = document.getElementById('compositionAltsBox');
   if (!box) return;
   if (!alts.length) {
      box.innerHTML = '<p style="color:#888;font-size:0.88rem">No other items in <strong>' + (STORE_CAT_META[it.category] || {label:it.category}).label + '</strong> share this exact composition.</p>';
      return;
   }
   // Sort by price ascending for cheapest-first display
   var rows = alts.map(function(a) {
      var jid = a.id.replace(/'/g, "\\'");
      var price = (a.price != null) ? '₹' + Number(a.price).toLocaleString('en-IN') : '—';
      var img = a.image_url
         ? '<img src="' + a.image_url + '" style="width:32px;height:32px;border-radius:5px;object-fit:cover" onerror="this.style.display=\'none\'"/>'
         : '<span style="font-size:1.2rem">💊</span>';
      var cheap = (it.price && a.price && a.price < it.price)
         ? ' <span style="background:#0a8a3a;color:#fff;padding:1px 6px;border-radius:4px;font-size:0.7rem;font-weight:700">SAVE ₹' + Math.round(it.price - a.price) + '</span>'
         : '';
      return '<div class="comp-alt-row">' +
                '<div class="comp-alt-img">' + img + '</div>' +
                '<div class="comp-alt-info">' +
                   '<div class="comp-alt-name">' + a.name + cheap + '</div>' +
                   '<div class="comp-alt-meta">' + (a.brand || '') + '</div>' +
                '</div>' +
                '<div class="comp-alt-price">' + price + '</div>' +
              '</div>';
   }).join('');
   box.innerHTML = '<div style="font-weight:700;color:#1a1a2e;margin-bottom:6px">🔁 ' + alts.length + ' alternative' + (alts.length === 1 ? '' : 's') + ' with the same composition</div>' +
                   '<div class="comp-alt-list">' + rows + '</div>';
}

async function deleteCatalogItemUi(itemId) {
   var it = _catalogItemsCache.find(function(x) { return x.id === itemId; });
   if (!it) return;
   if (!confirm('Delete "' + it.name + '" from the catalogue? This cannot be undone.')) return;
   var ok = await AppDB.deleteCatalogItem(itemId);
   if (!ok) { alert('Failed to delete.'); return; }
   renderCatalogItems();
}

async function deleteStoreProviderUi(providerId) {
   var p = _storeGetProvider(providerId);
   if (!p) return;
   if (!confirm('Delete "' + p.name + '"? This cannot be undone.\n\nProducts attached to this store will be orphaned (their store_provider_id will dangle).')) return;
   var ok = await AppDB.deleteStoreProvider(providerId);
   if (!ok) { alert('Failed to delete.'); return; }
   await renderStoreProvidersAdmin();
}

async function renderAllAppointments() {
   var container = document.getElementById('aptAllBookingsContent');
   if (!container) return;
   _liveSubscribe('adminApts', 'appointments', renderAllAppointments);
   if (!container.innerHTML.trim()) container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadAptCategories();
   var all = await AppDB.getAllAppointments();

   // Read current selections BEFORE rebuilding dropdowns (strict cascade).
   var catF    = (document.getElementById('adminAptCategoryFilter') || {}).value || '';
   var provF   = (document.getElementById('adminAptProviderFilter') || {}).value || '';
   var docF    = (document.getElementById('adminAptDoctorFilter')   || {}).value || '';

   // Category dropdown — always from full data
   _fillSelectFromList('adminAptCategoryFilter', '🗂 All categories', all.map(function(a){return a.category;}), function(k){
      var m = APT_CAT_META[k]; return m ? (m.icon + ' ' + m.label) : k;
   });

   var provSel = document.getElementById('adminAptProviderFilter');
   var docSel  = document.getElementById('adminAptDoctorFilter');

   if (!catF) {
      // No category yet → lock Providers AND Staff
      if (provSel) { provSel.innerHTML = '<option value="">🏪 Pick a category first</option>'; provSel.disabled = true; provSel.value = ''; provF = ''; }
      if (docSel)  { docSel.innerHTML  = '<option value="">👥 Pick a provider first</option>';  docSel.disabled  = true; docSel.value  = ''; docF  = ''; }
   } else {
      if (provSel) provSel.disabled = false;
      var providersPool = all.filter(function(a) { return a.category === catF; });
      _fillSelectFromList('adminAptProviderFilter', '🏪 All providers', providersPool.map(function(a){return a.provider_name;}));
      if (provF && provSel && !providersPool.some(function(a){return a.provider_name === provF;})) {
         provSel.value = ''; provF = '';
      }

      if (!provF) {
         if (docSel) { docSel.innerHTML = '<option value="">👥 Pick a provider first</option>'; docSel.disabled = true; docSel.value = ''; docF = ''; }
      } else {
         if (docSel) docSel.disabled = false;
         var staffPool = providersPool.filter(function(a) { return a.provider_name === provF; });
         _fillSelectFromList('adminAptDoctorFilter', '👥 All staff', staffPool.map(function(a){return a.doctor_name;}));
         if (docF && docSel && !staffPool.some(function(a){return a.doctor_name === docF;})) {
            docSel.value = ''; docF = '';
         }
      }
   }

   var search   = ((document.getElementById('adminAptSearch')    || {}).value || '').trim().toLowerCase();
   var statusF  =  (document.getElementById('aptBookingsFilter') || {}).value || '';
   var df       = _readDateFilter('adminAptDateFilter', 'adminAptCustomDate', 'adminAptRangeFrom', 'adminAptRangeTo');

   var apts = all.filter(function(a) {
      if (docF     && a.doctor_name   !== docF)     return false;
      if (provF    && a.provider_name !== provF)    return false;
      if (catF     && a.category      !== catF)     return false;
      if (statusF  && (a.status || 'Confirmed') !== statusF) return false;
      if (!_isDateInRange(a.date, df.range, df))    return false;
      if (search) {
         var hay = ((a.patient_name || '') + ' ' + (a.user_email || '') + ' ' + (a.patient_phone || '')).toLowerCase();
         if (hay.indexOf(search) === -1) return false;
      }
      return true;
   });
   window._adminAptsFiltered = apts;     // for CSV export

   if (!apts.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No appointments match the current filters.</p>';
      return;
   }

   var rows = apts.map(function(a) {
      var status = a.status || 'Confirmed';
      var cls    = status === 'Cancelled' ? 'cancelled'
                 : status === 'Completed' ? 'completed'
                 : status === 'No-show'   ? 'noshow'
                 : 'confirmed';
      var aid    = (a.apt_id || '').replace(/'/g, "\\'");
      var canChange = status === 'Confirmed';
      var statusLabel = status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by Customer'
                      : a.cancelled_by === 'hospital' ? 'by Hospital'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) {
            statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
            if (a.cancellation_reason) {
               statusLabel += '<br><small style="font-weight:400;opacity:0.75" title="' + a.cancellation_reason.replace(/"/g,'&quot;') + '">"' + (a.cancellation_reason.length > 30 ? a.cancellation_reason.slice(0,30) + '…' : a.cancellation_reason) + '"</small>';
            }
         }
      }
      var isPaid = !!a.is_paid || status === 'Completed';
      var feeHtml = '<div class="apt-tbl-fee">₹' + (a.fee || 0) + '</div>';
      if (a.is_refunded) {
         feeHtml += '<div class="apt-tbl-fee-tag" style="background:#fff3e0;color:#e65100;border:1px solid #ffb74d">refunded ₹' + Number(a.refund_amount || 0) + '</div>';
      } else if (status === 'Cancelled' || status === 'No-show') {
         /* no payment badge */
      } else if (isPaid) {
         feeHtml += '<div class="apt-tbl-fee-tag paid">paid</div>';
      } else {
         feeHtml += '<div class="apt-tbl-fee-tag unpaid">not paid</div>';
      }
      var bookedAt = '';
      if (a.created_at) {
         var dt = new Date(a.created_at);
         if (!isNaN(dt.getTime())) {
            bookedAt = '<div class="apt-tbl-name">' + dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short' }) + '</div>' +
                       '<div class="apt-tbl-sub">' + dt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }) + '</div>';
         }
      }
      // Admin can print receipt + delete. Complete/Cancel are done by hospital owner or customer.
      // Receipt is enabled once the fee is paid (Completed implies paid).
      var adminReceiptBtn;
      if (isPaid || a.is_refunded) {
         var adminRTitle = a.is_refunded ? 'Print receipt (with REFUNDED stamp)' : 'Print consultation receipt';
         adminReceiptBtn = '<button class="apt-act-btn" style="background:#1a73e8;color:#fff" onclick="printConsultationReceipt(\'' + aid + '\')" title="' + adminRTitle + '">🧾 Receipt</button>';
      } else if (status === 'Cancelled' || status === 'No-show') {
         adminReceiptBtn = '';
      } else {
         adminReceiptBtn = '<button class="apt-act-btn" style="background:#1a73e8;color:#fff;opacity:0.4;cursor:not-allowed" title="Available once the hospital marks fee as paid" disabled>🧾 Receipt</button>';
      }
      var actions =
         adminReceiptBtn +
         '<button class="apt-act-btn" style="background:#555;color:#fff" onclick="deleteAdminAppointment(\'' + aid + '\')" title="Delete (permanent)">🗑 Delete</button>';
      var meta = APT_CAT_META[a.category] || {};
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">' + _tokenLabel(a) + '</span>'
         : '<span style="color:#bbb">—</span>';
      return '<tr>' +
                '<td style="text-align:center">' + tokenCell + '</td>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div><div class="apt-tbl-slot">' + (a.slot ? _formatSlot12(a.slot) : '<span style="color:#888;font-size:0.72rem">🎟 Token mode</span>') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.doctor_name || '') + '</div><div class="apt-tbl-sub">' + (a.speciality || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.provider_name || '') + '</div><div class="apt-tbl-sub">' + (meta.icon || '') + ' ' + (meta.label || a.category || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.patient_name || '—') + '</div>' + (a.patient_phone ? '<div class="apt-tbl-sub">' + a.patient_phone + '</div>' : '') + '</td>' +
                '<td><div class="apt-tbl-sub">' + (a.user_email || '') + '</div></td>' +
                '<td class="apt-tbl-symptom" title="' + (a.patient_reason || '').replace(/"/g,'&quot;') + '">' + (a.patient_reason || '<span style="color:#bbb">—</span>') + '</td>' +
                '<td style="text-align:right">' + feeHtml + '</td>' +
                '<td><span class="order-badge ' + cls + '">' + statusLabel + '</span></td>' +
                '<td class="apt-tbl-actions">' + actions + '</td>' +
                '<td class="apt-tbl-booked">' + bookedAt + '</td>' +
                '<td class="apt-tbl-id">' + a.apt_id + '</td>' +
             '</tr>';
   }).join('');

   container.innerHTML =
      '<div style="padding:0.6rem 0;font-size:0.88rem;color:#444">' +
         '<strong>' + apts.length + '</strong> appointment' + (apts.length === 1 ? '' : 's') + ' shown' +
      '</div>' +
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th style="text-align:center">Token</th>' +
              '<th>Date / Slot</th>' +
              '<th>Doctor / Staff</th>' +
              '<th>Provider</th>' +
              '<th>Patient</th>' +
              '<th>Customer</th>' +
              '<th class="apt-tbl-symptom">Symptom</th>' +
              '<th style="text-align:right">Fee</th>' +
              '<th>Status</th>' +
              '<th>Actions</th>' +
              '<th class="apt-tbl-booked">Booked</th>' +
              '<th class="apt-tbl-id">Appt ID</th>' +
           '</tr></thead>' +
           '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>';
}

async function adminSetAptStatus(aptId, status) {
   if (!confirm('Set this appointment to "' + status + '"?')) return;
   var extra = status === 'Cancelled' ? { cancelled_by: 'admin' } : null;
   var ok = await AppDB.updateAppointmentStatus(aptId, status, extra);
   if (!ok) { alert('Failed to update status.'); return; }
   renderAllAppointments();
}

async function deleteAdminAppointment(aptId) {
   if (!confirm('Permanently delete appointment ' + aptId + '?\n\nThis cannot be undone and will remove it from the customer\'s history too.')) return;
   var ok = await AppDB.deleteAppointment(aptId);
   if (!ok) { alert('Failed to delete.'); return; }
   renderAllAppointments();
}

async function deleteAllShownAppointments() {
   var filter = (document.getElementById('aptBookingsFilter') || {}).value || '';
   var apts = await AppDB.getAllAppointments();
   var matching = filter ? apts.filter(function(a) { return (a.status || 'Confirmed') === filter; }) : apts;
   if (!matching.length) { alert('Nothing to delete.'); return; }

   var label = filter ? '"' + filter + '" appointments' : 'ALL appointments';
   if (!confirm('Permanently delete ' + matching.length + ' ' + label + '?\n\nThis cannot be undone.')) return;

   var ok = await AppDB.deleteAppointmentsByStatus(filter);
   if (!ok) { alert('Failed to delete.'); return; }
   renderAllAppointments();
}

// Same pattern for the admin Orders tab — deletes every order currently
// visible after the active status filter. Type-to-confirm avoids accidental wipes.
async function deleteAllShownOrders() {
   var matching = (window._adminOrdersFiltered || []);
   if (!matching.length) { alert('Nothing to delete with the current filters.'); return; }
   var phrase = 'DELETE';
   var typed = prompt(
      '⚠️ This will permanently delete ' + matching.length + ' order' +
      (matching.length === 1 ? '' : 's') + ' currently shown by your filters.\n\n' +
      'Type ' + phrase + ' (in caps) to confirm:'
   );
   if (typed !== phrase) { if (typed != null) alert('Cancelled — phrase did not match.'); return; }

   var ok = 0, fail = 0;
   for (var i = 0; i < matching.length; i++) {
      var id = matching[i].orderId || matching[i].order_id;
      var success = await AppDB.deleteOrder(id);
      if (success) ok++; else fail++;
   }
   _db.orders = _db.orders.filter(function(o) {
      return !matching.some(function(m) { return (m.orderId || m.order_id) === (o.orderId || o.order_id); });
   });
   alert('Deleted ' + ok + ' order' + (ok === 1 ? '' : 's') + '.' + (fail ? '\n❌ ' + fail + ' failed.' : ''));
   renderAdminOrders();
}

// ── STORES (customer-side) ─────────────────────────────────────
// Three-step drilldown that mirrors the appointments flow:
//   showStoresList()              → category tiles (General, Medical, Wholesale, …)
//   showStoreCategory(catKey)     → store cards under that category
//   showStoreProvider(providerId) → that store's products grouped by sub-category
// Categories + stores come from admin-managed store_categories / store_providers.

// Toggle "Stores mode" chrome: hide the product-category bar and inject a
// "📦 My Orders" shortcut in the products-header. Idempotent.
function _setStoresChromeMode(on) {
   var cats = document.querySelector('.header-categories');
   if (cats) cats.classList.toggle('hidden', !!on);

   var header = document.querySelector('#productsSection .products-header > div');
   if (!header) return;
   var existing = document.getElementById('storesMyOrdersBtn');
   if (on) {
      if (existing) return;
      var btn = document.createElement('button');
      btn.id = 'storesMyOrdersBtn';
      btn.className = 'btn-back';
      btn.style.background = '#1a73e8';
      btn.style.color      = '#fff';
      btn.style.borderColor = '#1a73e8';
      btn.innerHTML = '📦 My Orders';
      btn.onclick = function() {
         var u = JSON.parse(sessionStorage.getItem('loggedInUser'));
         if (!u) { promptAuth('Please log in to view your orders.'); return; }
         window.location.href = 'profile.html?tab=orders';
      };
      header.insertBefore(btn, header.firstChild);
   } else {
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
   }
}
async function showStoresList() {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = '🏪 Stores';
   // Live-refresh when any store changes (e.g., owner pauses delivery): force
   // the cache to reload, then re-call this render.
   _liveSubscribe('storeProvsCustomer', 'store_providers', async function() {
      await loadStoreProviders(true);
      showStoresList();
   });

   // Hide the product-category bar (For You, Daily Needs, …) — it's irrelevant
   // here because customers are now browsing by store, not by product category.
   _setStoresChromeMode(true);

   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block';
   grid.innerHTML = '<p style="color:#888;text-align:center;padding:40px">Loading stores…</p>';

   await loadStoreCategories(true);
   await loadStoreProviders(true);

   var keys = Object.keys(STORE_CAT_META).sort(function(a, b) {
      return (STORE_CAT_META[a].sortOrder || 100) - (STORE_CAT_META[b].sortOrder || 100);
   });
   if (!keys.length) {
      grid.innerHTML = '<p style="color:#888;text-align:center;padding:60px">No store categories set up yet.</p>';
      return;
   }

   var html = '<div class="apt-cats-grid">';
   keys.forEach(function(k) {
      var c = STORE_CAT_META[k];
      var count = _storeProvidersByCat(k).length;
      html += '<div class="apt-cat-card" onclick="showStoreCategory(\'' + k + '\')">' +
                '<div class="apt-cat-icon">' + c.icon + '</div>' +
                '<div class="apt-cat-label">' + c.label + '</div>' +
                '<div class="apt-cat-desc">' + (c.desc || '') + '</div>' +
                '<div class="apt-cat-count">' + count + (count === 1 ? ' store' : ' stores') + ' available</div>' +
             '</div>';
   });
   html += '</div>';
   grid.innerHTML = html;
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Step 2: list of stores within a chosen category
async function showStoreCategory(catKey) {
   var meta = STORE_CAT_META[catKey];
   if (!meta) return;
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = meta.icon + ' ' + meta.label;
   _setStoresChromeMode(true);
   // Live-refresh on any store change (delivery pause/resume etc.)
   _liveSubscribe('storeProvsCustomer', 'store_providers', async function() {
      await loadStoreProviders(true);
      showStoreCategory(catKey);
   });

   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block';
   grid.innerHTML = '<p style="color:#888;text-align:center;padding:40px">Loading…</p>';

   await loadStoreProviders();
   var stores = _storeProvidersByCat(catKey);

   var html = '<button class="apt-back-btn" onclick="showStoresList()">← All Categories</button>';
   if (!stores.length) {
      html += '<p style="text-align:center;color:#999;padding:40px">No stores in <strong>' + meta.label + '</strong> yet.</p>';
   } else {
      html += '<div class="apt-providers-grid">';
      stores.forEach(function(p) {
         var icon = p.icon || meta.icon;
         var pid  = p.id.replace(/'/g, "\\'");
         html += '<div class="apt-provider-card" style="cursor:pointer" onclick="showStoreProvider(\'' + pid + '\')">' +
                   '<div class="apt-provider-top">' +
                      '<div class="apt-provider-icon">' + icon + '</div>' +
                      '<div>' +
                         '<div class="apt-provider-name">' + p.name + '</div>' +
                         '<div class="apt-provider-tagline">' + (p.tagline || '') + '</div>' +
                      '</div>' +
                   '</div>' +
                   (p.address ? '<div class="apt-provider-meta">📍 ' + _mapsLink(p.address) + '</div>' : '') +
                   (p.timing  ? '<div class="apt-provider-meta">🕒 ' + p.timing  + '</div>' : '') +
                   (p.phone   ? '<div class="apt-provider-meta" style="color:#1a73e8;font-weight:600">📞 ' + _phoneLink(p.phone) + '</div>' : '') +
                   (p.door_delivery
                      ? (p.delivery_paused
                         ? '<div class="apt-provider-meta" style="color:#c62828;font-weight:600">⏸ Delivery paused · pickup only</div>'
                         : '<div class="apt-provider-meta" style="color:#0a8a3a;font-weight:600">🚚 Home delivery available</div>')
                      : '') +
                   '<div class="apt-provider-footer">' +
                      '<span>Tap to browse products</span>' +
                      '<button class="apt-view-btn" onclick="event.stopPropagation();showStoreProvider(\'' + pid + '\')">View Products →</button>' +
                   '</div>' +
                 '</div>';
      });
      html += '</div>';
   }
   grid.innerHTML = html;
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Step 3: products inside one store (grouped by sub-category sidebar)
async function showStoreProvider(providerId) {
   var p = (_storeProvidersCache || []).find(function(x) { return x.id === providerId; });
   if (!p) return;
   var meta = STORE_CAT_META[p.category] || { icon: '🏪', label: p.category };
   // Live-refresh when this store's delivery/door_delivery flag changes
   _liveSubscribe('storeProvsCustomer', 'store_providers', async function() {
      await loadStoreProviders(true);
      showStoreProvider(providerId);
   });

   // Refresh in-memory stock snapshot so we can render Out-of-stock / In-stock
   // badges on each card. This drives addToCart() guards too.
   try {
      var batches = await AppDB.getBatchesForStore(providerId);
      _currentStockByProduct = {};
      (batches || []).forEach(function(b) {
         (_currentStockByProduct[b.product_id] = _currentStockByProduct[b.product_id] || []).push(b);
      });
   } catch (e) { _currentStockByProduct = {}; }
   window._currentStoreProvider = p;   // used by addToCart for door_delivery / Rx logic

   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   // Inline store metadata next to the title so we save a whole row of vertical space:
   //   🏪 kumar medical store · 24x7 pharmacy · 📍 address · 🕒 24x7 · 📞 phone · 🚚 delivery
   var inline = [];
   if (p.tagline) inline.push(p.tagline);
   if (p.address) inline.push('📍 ' + _mapsLink(p.address));
   if (p.timing)  inline.push('🕒 ' + p.timing);
   if (p.phone)   inline.push('📞 ' + _phoneLink(p.phone));
   if (p.door_delivery) {
      inline.push(p.delivery_paused
         ? '<span style="color:#c62828;font-weight:600" title="The store owner has temporarily paused home delivery — orders are pickup-only right now">⏸ Delivery paused · pickup only</span>'
         : '<span style="color:#0a8a3a;font-weight:600">🚚 Home delivery</span>');
   }
   var titleText = (p.icon || meta.icon) + ' ' + p.name;
   var titleEl = document.getElementById('productTitle');
   titleEl.innerHTML = titleText +
      (inline.length ? '<span class="store-title-meta"> · ' + inline.join(' · ') + '</span>' : '');
   _setStoresChromeMode(true);

   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block';
   var rxBtn = (p.category === 'medical')
      ? '<button class="rx-only-btn" title="Don\'t know the medicine names? Just upload your prescription." onclick="openRxOnlyOrderModal(\'' + p.id.replace(/\'/g, "\\'") + '\')">📋 Order via Prescription</button>'
      : '';
   var html = '<div class="store-topbar">' +
                 '<button class="apt-back-btn" onclick="showStoreCategory(\'' + p.category.replace(/'/g, "\\'") + '\')">← Back to ' + meta.label + '</button>' +
                 rxBtn +
              '</div>';
   html += '<div id="storeProviderProducts">' + buildStoreSubcatLayout(p.id) + '</div>';
   grid.innerHTML = html;
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Build the sub-category sidebar + product grid for one store provider.
// Filter products by store_provider_id (new model). The layout includes a
// store-scoped search bar at the top — typing into it filters across ALL of
// this store's sub-categories and renders a flat result grid.
function buildStoreSubcatLayout(storeProviderId) {
   var storeCats = [];
   Object.entries(products).forEach(function(entry) {
      var catKey = entry[0], catData = entry[1];
      var items = catData.items.filter(function(item) { return item.store_provider_id === storeProviderId; });
      if (items.length) storeCats.push({ catKey: catKey, catData: catData, items: items });
   });
   if (!storeCats.length) return '<p style="color:#888;padding:40px;text-align:center">No products in this store yet.</p>';

   var idAttr = storeProviderId.replace(/["']/g, '');

   var searchBar = '<div class="store-search-bar">' +
                      '<input type="search" id="storeProductSearch" data-pid="' + idAttr + '" ' +
                      'placeholder="🔍 Search products (Dolo, Crocin…)" ' +
                      'oninput="filterStoreProducts(this)" autocomplete="off"/>' +
                      '<select id="storeProductSort" data-pid="' + idAttr + '" class="store-sort-select" onchange="filterStoreProducts(document.getElementById(\'storeProductSearch\'))">' +
                         '<option value="">📊 Default order</option>' +
                         '<option value="price-asc">💰 Price: low → high</option>' +
                         '<option value="price-desc">💰 Price: high → low</option>' +
                         '<option value="name-asc">🔤 Name: A → Z</option>' +
                      '</select>' +
                   '</div>';

   var sidebarHtml = storeCats.map(function(c, i) {
      return '<div class="subcat-sidebar-item' + (i === 0 ? ' active' : '') + '" ' +
             'data-catkey="' + c.catKey + '" data-pid="' + idAttr + '" ' +
             'onclick="switchStoreSubcat(this)">' +
             '<span class="subcat-sidebar-icon">' + getCatIcon(c.catKey) + '</span>' +
             '<span>' + c.catData.title + '</span>' +
             '</div>';
   }).join('');

   var first = storeCats[0];
   var tmp = document.createElement('div');
   tmp.className = 'products-grid';
   first.items.forEach(function(item) { renderCard(Object.assign({}, item, { type: first.catData.type }), first.catKey, tmp); });

   return searchBar +
          '<div class="subcat-layout">' +
             '<div class="subcat-sidebar">' + sidebarHtml + '</div>' +
             '<div class="subcat-products-panel" id="storeSubcatPanel">' +
                '<div class="subcat-panel-title">' + first.catData.title + '</div>' +
                '<div class="products-grid">' + tmp.innerHTML + '</div>' +
             '</div>' +
          '</div>';
}

// Called as the customer types in the store-scoped search bar OR changes sort.
// Empty query + no sort → restore the normal sidebar+grid layout.
// Otherwise → flat sorted grid of matches across all sub-categories of this store.
function filterStoreProducts(input) {
   var q = (input.value || '').trim().toLowerCase();
   var pid = input.dataset.pid || '';
   var sortSel = document.getElementById('storeProductSort');
   var sort = sortSel ? sortSel.value : '';
   var panel = document.getElementById('storeSubcatPanel');
   var sidebar = document.querySelector('.subcat-sidebar');
   if (!panel) return;

   if (!q && !sort) {
      // No search, no sort — re-render the store's normal subcat layout
      var host = document.getElementById('storeProviderProducts');
      if (host) host.innerHTML = buildStoreSubcatLayout(pid);
      var s = document.getElementById('storeProductSearch');
      if (s) s.focus();
      return;
   }

   // Collect matches across every product sub-category for this store
   var hits = [];
   Object.entries(products).forEach(function(entry) {
      var catKey = entry[0], catData = entry[1];
      catData.items.forEach(function(item) {
         if (item.store_provider_id !== pid) return;
         if (q) {
            var hay = ((item.name || '') + ' ' + (item.desc || '') + ' ' + (item.storeName || '')).toLowerCase();
            if (hay.indexOf(q) === -1) return;
         }
         hits.push({ item: item, catKey: catKey, type: catData.type });
      });
   });

   // Apply sort
   if (sort === 'price-asc')  hits.sort(function(a,b){ return (a.item.price||0) - (b.item.price||0); });
   if (sort === 'price-desc') hits.sort(function(a,b){ return (b.item.price||0) - (a.item.price||0); });
   if (sort === 'name-asc')   hits.sort(function(a,b){ return (a.item.name||'').localeCompare(b.item.name||''); });

   // Hide sidebar for text-search; keep it visible for sort-only.
   // Also collapse the 2-col grid to a single column when sidebar is hidden,
   // otherwise the products panel auto-places into the 170px column and every
   // card stacks vertically in a narrow strip.
   var layout = document.querySelector('.subcat-layout');
   if (sidebar) sidebar.style.display = q ? 'none' : '';
   if (layout)  layout.style.gridTemplateColumns = q ? '1fr' : '';

   var headline = q
      ? hits.length + ' match' + (hits.length === 1 ? '' : 'es') + ' for "' + q + '"'
      : 'All products' + (sort ? ' · sorted' : '');

   if (!hits.length) {
      panel.innerHTML = '<div class="subcat-panel-title">No matches for "' + q + '"</div>' +
                        '<p style="color:#888;padding:30px;text-align:center">Try a different brand or generic name.</p>';
      return;
   }
   var tmp = document.createElement('div');
   tmp.className = 'products-grid';
   hits.forEach(function(h) { renderCard(Object.assign({}, h.item, { type: h.type }), h.catKey, tmp); });
   panel.innerHTML = '<div class="subcat-panel-title">' + headline + '</div>' +
                     '<div class="products-grid">' + tmp.innerHTML + '</div>';
}

function switchStoreSubcat(el) {
   el.closest('.subcat-sidebar').querySelectorAll('.subcat-sidebar-item').forEach(function(x) { x.classList.remove('active'); });
   el.classList.add('active');
   var catKey  = el.dataset.catkey;
   var pid     = el.dataset.pid;
   var catData = products[catKey];
   var items   = catData.items.filter(function(item) { return item.store_provider_id === pid; });
   var tmp = document.createElement('div');
   tmp.className = 'products-grid';
   items.forEach(function(item) { renderCard(Object.assign({}, item, { type: catData.type }), catKey, tmp); });
   var panel = document.getElementById('storeSubcatPanel');
   if (panel) panel.innerHTML = '<div class="subcat-panel-title">' + catData.title + '</div>' + tmp.outerHTML;
}

function buildStoreCard(storeId, storeName, ownerLabel, productCount, orderCount, items) {
   var storeIdJs = storeId ? "'" + storeId.replace(/'/g, "\\'") + "'" : 'null';
   var storeNameJs = storeName.replace(/'/g, "\\'");

   // Up to 4 preview images
   var previewImgs = items.slice(0, 4).map(function(item) {
      return '<img src="' + item.img + '" alt="' + item.name.replace(/"/g, '') + '" onerror="this.src=\'https://placehold.co/100x100?text=Item\'"/>';
   }).join('');
   var previewClass = 'store-card-preview store-card-preview-' + Math.min(items.length, 4);

   return '<div class="store-card" onclick="showStoreProducts(' + storeIdJs + ',\'' + storeNameJs + '\')">' +
             '<div class="' + previewClass + '">' + previewImgs + '</div>' +
             '<div class="store-card-body">' +
                '<div class="store-card-name">' + storeName + '</div>' +
                '<div class="store-card-meta">' + ownerLabel + '</div>' +
                '<div class="store-card-stats">' +
                   '<span>🛍️ ' + productCount + ' product' + (productCount !== 1 ? 's' : '') + '</span>' +
                   '<span>📋 ' + orderCount + ' order' + (orderCount !== 1 ? 's' : '') + '</span>' +
                '</div>' +
                '<button class="store-card-btn">Browse Store →</button>' +
             '</div>' +
          '</div>';
}

function showStoreProducts(storeId, storeName) {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = '🏪 ' + storeName;

   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block';
   grid.innerHTML = '';

   // Collect categories that have items in this store, in order
   var storeCats = [];
   Object.entries(products).forEach(function([catKey, catData]) {
      var storeItems = catData.items.filter(function(item) {
         var s = item.storeId || null;
         return storeId === null ? s === null : s === storeId;
      });
      if (storeItems.length > 0) storeCats.push({ catKey: catKey, catData: catData, items: storeItems });
   });

   if (storeCats.length === 0) {
      grid.innerHTML = '<p style="color:#888;text-align:center;padding:60px">No products in this store yet.</p>';
      return;
   }

   // Build sidebar
   var sidebarHTML = storeCats.map(function(c, i) {
      return '<div class="subcat-sidebar-item' + (i === 0 ? ' active' : '') + '" ' +
             'id="storeSidebar_' + c.catKey + '" ' +
             'data-catkey="' + c.catKey + '" ' +
             'onclick="switchStoreCat(this, \'' + (storeId ? storeId.replace(/'/g,"\\'") : '__platform__') + '\')">' +
             '<span class="subcat-sidebar-icon">' + getCatIcon(c.catKey) + '</span>' +
             '<span>' + c.catData.title + ' <span style="font-size:0.75rem;opacity:0.7">(' + c.items.length + ')</span></span>' +
             '</div>';
   }).join('');

   // Build initial product panel (first category)
   var first = storeCats[0];
   var initialHTML = buildStoreCatPanel(storeId, first.catKey, first.items, first.catData);

   grid.innerHTML =
      '<div class="subcat-layout">' +
         '<div class="subcat-sidebar">' + sidebarHTML + '</div>' +
         '<div class="subcat-products-panel" id="storeProductsPanel">' + initialHTML + '</div>' +
      '</div>';

   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildStoreCatPanel(storeId, catKey, items, catData) {
   var resolved = catData || products[catKey];
   if (!resolved) return '';
   var temp = document.createElement('div');
   items.forEach(function(item) {
      renderCard(Object.assign({}, item, { type: resolved.type }), catKey, temp);
   });
   return '<div class="subcat-panel-title">' + resolved.title + '</div>' +
          '<div class="compact-grid">' + temp.innerHTML + '</div>';
}

function switchStoreCat(el, storeIdArg) {
   var storeId = storeIdArg === '__platform__' ? null : storeIdArg;
   var catKey  = el.dataset.catkey;
   var catData = products[catKey];
   if (!catData) return;
   var items = catData.items.filter(function(item) {
      var s = item.storeId || null;
      return storeId === null ? s === null : s === storeId;
   });
   var panel = document.getElementById('storeProductsPanel');
   if (panel) panel.innerHTML = buildStoreCatPanel(storeId, catKey, items, catData);
   document.querySelectorAll('#productsGrid .subcat-sidebar-item').forEach(function(x) { x.classList.remove('active'); });
   el.classList.add('active');
}

// Show the two-panel layout: sidebar of sub-categories + products on the right
function showMainCategory(mainCatKey) {
   var mc = MAIN_CATS[mainCatKey];
   if (!mc) return;
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = mc.label;
   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block'; // override grid layout for this wrapper

   // Build sidebar items
   var sidebarHTML = '';
   for (var i = 0; i < mc.keys.length; i++) {
      var k = mc.keys[i];
      var catData = products[k];
      if (!catData) continue;
      var activeClass = (i === 0) ? ' active' : '';
      sidebarHTML += '<div class="subcat-sidebar-item' + activeClass + '" id="sidebarItem_' + k + '" onclick="showProductsForSubCat(\'' + k + '\',\'' + mainCatKey + '\')">' +
                     '<span class="subcat-sidebar-icon">' + getCatIcon(k) + '</span>' +
                     '<span>' + catData.title + '</span>' +
                     '</div>';
   }

   // Build initial product panel (first sub-category)
   var firstKey = mc.keys[0];
   var productsHTML = buildCompactProducts(firstKey);

   grid.innerHTML = '<div class="maincat-layout">' +
                    '<div class="subcat-sidebar">' + sidebarHTML + '</div>' +
                    '<div class="subcat-products-panel" id="subcatProductsPanel">' + productsHTML + '</div>' +
                    '</div>';

   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Build compact product cards HTML for a sub-category (returns HTML string)
function buildCompactProducts(catKey) {
   var catData = products[catKey];
   if (!catData) return '<p style="color:#999;padding:1rem">No products found.</p>';
   var tempContainer = document.createElement('div');
   catData.items.forEach(function(item) { renderCard(Object.assign({}, item, { type: catData.type }), catKey, tempContainer); });
   return '<div class="subcat-panel-title">' + catData.title + '</div>' +
          '<div class="compact-grid">' + tempContainer.innerHTML + '</div>';
}

// Show products for a sub-category in the right panel (sidebar stays visible)
function showProductsForSubCat(catKey, parentMainCatKey) {
   var panel = document.getElementById('subcatProductsPanel');
   if (panel) {
      // Two-panel mode: update only the right panel
      panel.innerHTML = buildCompactProducts(catKey);
      // Re-init any qty inputs that renderCard added
      // Mark active sidebar item
      document.querySelectorAll('.subcat-sidebar-item').forEach(function(el) {
         el.classList.remove('active');
      });
      var activeItem = document.getElementById('sidebarItem_' + catKey);
      if (activeItem) activeItem.classList.add('active');
   } else {
      // Fallback: full-page product display
      showProducts(catKey);
      var backBtn = document.querySelector('.btn-back');
      if (backBtn && parentMainCatKey) {
         backBtn.onclick = function() { showMainCategory(parentMainCatKey); };
      }
   }
}

// Show all products across an entire main category
function showProductsByMainCat(mainCatKey) {
   const mc = MAIN_CATS[mainCatKey];
   if (!mc) return;
   document.getElementById('heroSection').classList.add('hidden');
   const ps = document.getElementById('productsSection');
   ps.classList.remove('hidden');
   document.getElementById('productTitle').textContent = mc.label + ' — All';
   const grid = document.getElementById('productsGrid');
   grid.style.display = '';
   grid.innerHTML = '';
   mc.keys.forEach(k => {
      const catData = products[k];
      if (!catData) return;
      catData.items.forEach(item => renderCard({ ...item, type: catData.type }, k, grid));
   });
   const backBtn = document.querySelector('.btn-back');
   if (backBtn) backBtn.onclick = () => showMainCategory(mainCatKey);
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Return a fitting icon emoji for a product sub-category key
function getCatIcon(key) {
   const icons = {
      sofa:'🛋️', diningTable:'🍽️', wardrobe:'🚪', bedFrame:'🛏️',
      whiteMarble:'🪨', blackMarble:'🪨', italianMarble:'🪨', granite:'🪨',
      hardwood:'🪵', vinyl:'🟫', ceramicTiles:'🔲', laminate:'🟫',
      wallArt:'🎨', curtains:'🪟', lighting:'💡', rugs:'🧶',
      cola:'🥤', juice:'🧃', energyDrink:'⚡', sodaWater:'💧', milk:'🥛',
      groceries:'🌾', vegetables:'🥦', dairy:'🧀', sweets:'🍬',
      pooja:'🪔', festival:'🎉', flowers:'🌸',
      redBricks:'🧱', flybricks:'🧱', concreteBricks:'🧱',
      cement:'🏗️', paint:'🖌️', plumbing:'🔧', doors:'🚪', electricals:'⚡',
      menswear:'👔', womenswear:'👗', kidswear:'👕', textiles:'🧵',
      hairClips:'💇', earrings:'💍', bangles:'💫', necklaces:'📿',
      gardenSoil:'🌱', cococpeat:'🌿', fertilizer:'🌻',
      seeds:'🌰', farmtools:'⛏️', irrigation:'💦',
      utensils:'🍳', plastic:'🪣', cleaning:'🧹',
      mobile:'📱', appliances:'🏠', electrical:'🔌',
      medicines:'💊', personalcare:'🧴',
      books:'📖', schoolsupplies:'✏️',
      toysAnimals:'🦁', toysVehicles:'🚗', toysCustom:'🖨️', games:'🎮'
   };
   return icons[key] || '📦';
}

function showToast(msg) {
   const t = document.getElementById('toast');
   t.textContent = msg;
   t.classList.remove('hidden');
   setTimeout(() => t.classList.add('hidden'), 2500);
}

// ── AUTH ──
// ══════════════════════════════════════════════════════════
//  SUPABASE DATA CACHE  — replaces all localStorage ops
// ══════════════════════════════════════════════════════════
var _db = { users: [], orders: [], settings: {}, overrides: {}, storeProducts: [], addresses: [], cards: [], wishlist: [] };
var _dbReady = null;

async function initDB() {
   if (_dbReady) return _dbReady;
   _dbReady = (async function () {
      try {
         var [users, orders, dbSettings, overrides, storeProds] = await Promise.all([
            AppDB.getUsers(),
            AppDB.getAllOrders(),
            AppDB.getSettings(),
            AppDB.getProductOverrides(),
            AppDB.getAllStoreProducts()
         ]);
         _db.users         = users        || [];
         _db.orders        = orders       || [];
         _db.settings      = dbSettings   || {};
         _db.overrides     = overrides    || {};
         _db.storeProducts = storeProds   || [];
         _applyOverridesToProducts();
         _applyStoreProdsToProducts();
      } catch (e) {
         console.error('initDB error:', e);
      }
   })();
   return _dbReady;
}

function _applyOverridesToProducts() {
   var ov = _db.overrides;
   Object.values(products).forEach(function(cat) {
      cat.items.forEach(function(item) {
         var o = ov[item.id];
         if (!o) return;
         if (o.img)   item.img   = o.img;
         if (o.name)  item.name  = o.name;
         if (o.desc)  item.desc  = o.desc;
         if (o.badge) item.badge = o.badge;
         if (o.price !== undefined) {
            if (cat.type === 'milk') item.pricePerLitre = o.price;
            else item.price = o.price;
         }
         if (o.variants && o.variants.length > 0) item.variants = o.variants;
         else if (o.hasOwnProperty('variants') && !o.variants) delete item.variants;
         if (o.storeId)   item.storeId   = o.storeId;
         if (o.storeName) item.storeName = o.storeName;
      });
   });
}

function _applyStoreProdsToProducts() {
   Object.values(products).forEach(function(cat) {
      cat.items = cat.items.filter(function(i) { return !i.storeId; });
   });
   (_db.storeProducts || []).forEach(function(p) {
      var cat = products[p.category];
      if (!cat) return;
      if (cat.items.find(function(i) { return i.id === p.id; })) return;
      cat.items.push({
         id: p.id, name: p.name, price: p.price || 0,
         desc: p.description || '', img: p.image || '',
         badge: p.badge || 'New',
         storeId: p.store_id, storeName: p.store_name,
         store_provider_id: p.store_provider_id || null,
         catalog_item_id:   p.catalog_item_id   || null,
         rx_required:       !!p.rx_required,
         variants: p.variants || undefined
      });
   });
}
// ══════════════════════════════════════════════════════════

async function loadUserData(email) {
   if (!email) return;
   var [addrs, cards, wl] = await Promise.all([
      AppDB.getAddresses(email),
      AppDB.getCards(email),
      AppDB.getWishlist(email)
   ]);
   _db.addresses = (addrs || []).map(function(a) {
      return { id: a.id, name: a.name, phone: a.phone || '', line: a.line, city: a.city, state: a.state || '', pin: a.pin, isDefault: a.is_default || false };
   });
   _db.cards = (cards || []).map(function(c) {
      return { id: c.id, last4: c.last4 || '', brand: c.brand || '', expiry: c.expiry || '', nameOnCard: c.name_on_card || '' };
   });
   _db.wishlist = wl || [];
}

function getUsers() { return _db.users; }

function saveUsers(users) {
   _db.users = users;
   users.forEach(function(u) { AppDB.upsertUser(u); });
}

let _pendingSignup = null;

async function signUp() {
   await initDB();
   const name     = document.getElementById('signupName').value.trim();
   const email    = document.getElementById('signupEmail').value.trim().toLowerCase();
   const password = document.getElementById('signupPassword').value;
   const confirm  = document.getElementById('signupConfirm').value;
   const roleEl   = document.querySelector('input[name="userRole"]:checked');
   const role     = roleEl ? roleEl.value : 'customer';
   if (!name || !email || !password || !confirm) { alert('Please fill in all fields.'); return; }
   if (password.length < 6) { alert('Password must be at least 6 characters.'); return; }
   if (password !== confirm) { alert('Passwords do not match.'); return; }

   const existing = getUsers().find(u => u.email.toLowerCase() === email);
   if (existing) {
      alert('An account with this email already exists. Please login.');
      window.location.href = 'login.html';
      return;
   }

   const btn = document.querySelector('#signupBox .btn-primary');
   if (btn) { btn.disabled = true; btn.textContent = 'Sending code…'; }

   const { error } = await _sb.auth.signUp({ email, password });

   if (btn) { btn.disabled = false; btn.textContent = 'Create Account'; }

   if (error) {
      alert(error.message || 'Sign-up failed. Please try again.');
      return;
   }

   _pendingSignup = { name, email, role, password };

   document.getElementById('signupBox').style.display = 'none';
   const otpBox = document.getElementById('otpBox');
   if (otpBox) {
      otpBox.style.display = '';
      document.getElementById('otpEmail').textContent = email;
      const otpInput = document.getElementById('otpCode');
      if (otpInput) { otpInput.value = ''; otpInput.focus(); }
      const errEl = document.getElementById('otpError');
      if (errEl) { errEl.classList.add('hidden'); errEl.style.color = ''; }
   }
}

async function verifySignupOtp() {
   if (!_pendingSignup) { alert('No pending signup. Please start over.'); backToSignup(); return; }
   const token = (document.getElementById('otpCode').value || '').trim();
   const errEl = document.getElementById('otpError');
   if (!/^\d{4,10}$/.test(token)) {
      if (errEl) { errEl.textContent = 'Please enter the numeric code from your email.'; errEl.classList.remove('hidden'); errEl.style.color = ''; }
      return;
   }
   if (errEl) errEl.classList.add('hidden');

   const btn = document.querySelector('#otpBox .btn-primary');
   if (btn) { btn.disabled = true; btn.textContent = 'Verifying…'; }

   const { error } = await _sb.auth.verifyOtp({
      email: _pendingSignup.email,
      token,
      type: 'signup'
   });

   if (btn) { btn.disabled = false; btn.textContent = 'Verify & Create Account'; }

   if (error) {
      if (errEl) { errEl.textContent = error.message || 'Invalid or expired code.'; errEl.classList.remove('hidden'); errEl.style.color = ''; }
      return;
   }

   await AppDB.upsertUser({
      name:  _pendingSignup.name,
      email: _pendingSignup.email,
      role:  _pendingSignup.role,
      password: '',
      // Business Partner accounts require admin approval before they can access
      // the business dashboard. Customers are auto-approved.
      isApproved: _pendingSignup.role !== 'storeowner'
   });
   localStorage.setItem('role_' + _pendingSignup.email, _pendingSignup.role);

   await _sb.auth.signOut();
   var pendingMsg = _pendingSignup.role === 'storeowner'
      ? 'Account verified!\n\nYour business partner account is awaiting admin approval. You can log in now and browse the site as a customer in the meantime — the business dashboard will unlock once approved.'
      : 'Account verified! Please login.';
   _pendingSignup = null;

   alert(pendingMsg);
   window.location.href = 'login.html';
}

async function resendOtp(e) {
   if (e) e.preventDefault();
   if (!_pendingSignup) { backToSignup(); return; }
   const errEl = document.getElementById('otpError');
   const { error } = await _sb.auth.resend({ type: 'signup', email: _pendingSignup.email });
   if (errEl) {
      errEl.classList.remove('hidden');
      if (error) {
         errEl.textContent = error.message || 'Could not resend code.';
         errEl.style.color = '';
      } else {
         errEl.textContent = 'A new code has been sent.';
         errEl.style.color = '#2e7d32';
      }
   }
}

function backToSignup(e) {
   if (e) e.preventDefault();
   _pendingSignup = null;
   document.getElementById('signupBox').style.display = '';
   const otpBox = document.getElementById('otpBox');
   if (otpBox) otpBox.style.display = 'none';
}

async function login() {
   const btn = document.querySelector('.btn-primary');
   const errorMsg = document.getElementById('loginError');
   const email    = document.getElementById('loginEmail').value.trim().toLowerCase();
   const password = document.getElementById('loginPassword').value;

   if (!email || !password) {
      errorMsg.textContent = '❌ Email and password are required.';
      errorMsg.classList.remove('hidden');
      return;
   }

   if (btn) { btn.textContent = 'Logging in…'; btn.disabled = true; }
   await initDB();

   var user = null;

   // All accounts use Supabase Auth — no plaintext fallback. (The legacy
   // fallback that compared against public.users.password was removed once
   // admins migrated to Auth, to eliminate plaintext credentials in the DB.)
   const { data, error } = await _sb.auth.signInWithPassword({ email, password });
   if (!error && data && data.user) {
      user = await AppDB.getUserByEmail(email);
      if (!user) {
         await _sb.auth.signOut();
         if (btn) { btn.textContent = 'Login'; btn.disabled = false; }
         errorMsg.textContent = '❌ Profile not found. Please complete signup again.';
         errorMsg.classList.remove('hidden');
         return;
      }
   }

   if (btn) { btn.textContent = 'Login'; btn.disabled = false; }

   if (!user) {
      errorMsg.textContent = '❌ Incorrect email or password.';
      errorMsg.classList.remove('hidden');
      return;
   }

   // Blocked check — admins cannot be blocked
   if (user.blocked && !isAdmin(user.email)) {
      // Make sure we also clear the Supabase Auth session for blocked users
      try { await _sb.auth.signOut(); } catch (e) {}
      errorMsg.textContent = '🚫 Your account has been blocked. Please contact the store admin.';
      errorMsg.classList.remove('hidden');
      return;
   }

   errorMsg.classList.add('hidden');

   // Merge in role from separate role store (survives seedAdmin rewrites)
   const savedRole = localStorage.getItem('role_' + user.email);
   if (savedRole && !user.role) user.role = savedRole;

   sessionStorage.setItem('loggedInUser', JSON.stringify(user));

   // Admin → home.html (can access all pages via dropdown)
   if (isAdmin(user.email)) { window.location.href = 'home.html'; return; }
   // Business Partner → shopowner.html if approved, else browse as customer
   if (user.role === 'storeowner') {
      if (user.isApproved === false) {
         alert('Your Business Partner account is still awaiting admin approval. You can browse as a customer in the meantime — the business dashboard will unlock once approved.');
         window.location.href = 'home.html';
         return;
      }
      window.location.href = 'shopowner.html';
      return;
   }
   // Customer → home.html
   window.location.href = 'home.html';
}

const ADMIN_EMAILS = [
   'g.ramkumar3127@gmail.com',
   'lakshmankumar586@gmail.com'
];

function isAdmin(email) {
   return ADMIN_EMAILS.includes(email);
}

// Re-fetch live settings from Supabase and re-apply them to the page.
// Called from Realtime push AND from a 30-second polling fallback so the
// announcement / maintenance toggle reaches every browser even if the
// Realtime channel is silent for any reason.
async function _refreshLiveSettings() {
   try {
      var fresh = await AppDB.getSettings();
      // Match the assignment pattern used in initDB. getAdminSettings reads
      // _db.settings DIRECTLY (not _db.settings.data), so don't wrap it.
      if (fresh) _db.settings = fresh;
      if (typeof loadSiteSettings === 'function') loadSiteSettings();
      if (typeof _checkMaintenanceMode === 'function') await _checkMaintenanceMode();
   } catch (e) { console.warn('Live settings refresh failed:', e); }
}

// Polling fallback: every 5s, re-fetch settings. Cheap (one tiny query) and
// guarantees the customer sees announcement/maintenance changes within
// seconds even when Realtime push isn't working.
function _startSettingsPolling() {
   if (window._settingsPollTimer) return;   // already running
   window._settingsPollTimer = setInterval(_refreshLiveSettings, 5000);
}

// ── Maintenance Mode ──
// Admin can toggle a flag in Settings. When ON, all non-admin users see a
// full-screen overlay and can't interact with the site. Admins are exempt so
// they can still verify/fix things during the maintenance window. Called from
// every public-facing page's init.
async function _checkMaintenanceMode() {
   try {
      var user = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null');
      var isAdminUser = user && isAdmin(user.email);
      var isOwnerUser = user && user.role === 'storeowner' && !isAdminUser;
      if (typeof initDB === 'function') { await initDB(); }
      var s = (typeof getAdminSettings === 'function') ? getAdminSettings() : {};
      if (!s.maintenanceMode) return;
      if (isAdminUser) {
         _showMaintenanceAdminBanner(s);
         return;
      }
      // Shop-owners bypass only when admin chose to skip blocking them
      // (e.g., low-risk UI updates). Default behavior: block them.
      var blockOwners = (s.maintenanceBlockOwners !== false);   // default true
      if (isOwnerUser && !blockOwners) {
         _showMaintenanceOwnerBanner(s);
         return;
      }
      _showMaintenanceOverlay(s);
   } catch (e) { console.warn('maintenance check failed', e); }
}

function _showMaintenanceOwnerBanner(s) {
   if (document.getElementById('_maintBanner')) return;
   var b = document.createElement('div');
   b.id = '_maintBanner';
   b.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#1a73e8;color:#fff;padding:6px 14px;text-align:center;font-size:0.85rem;font-weight:600;z-index:99999;box-shadow:0 2px 8px rgba(0,0,0,0.2)';
   var eta = s.maintenanceEndTime ? ' (until ' + s.maintenanceEndTime + ')' : '';
   b.innerHTML = '🔧 Maintenance in progress' + eta + ' — customers are blocked. Your shop functions are still available.';
   document.body.appendChild(b);
}

function _showMaintenanceOverlay(s) {
   var msg = s.maintenanceMessage || "We're upgrading the site. We'll be back shortly — thanks for your patience.";
   var endTime = s.maintenanceEndTime || '';
   document.documentElement.innerHTML =
      '<head><meta charset="UTF-8"><title>Maintenance</title><style>' +
         'body { margin:0; font-family: -apple-system, system-ui, sans-serif; background: linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%); color:#fff; min-height:100vh; display:flex; align-items:center; justify-content:center; padding:20px; }' +
         '.box { max-width: 520px; text-align: center; background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.18); border-radius:18px; padding: 40px 30px; backdrop-filter: blur(10px); }' +
         '.box h1 { margin:0 0 12px; font-size: 2rem; }' +
         '.box .icon { font-size: 4rem; margin-bottom: 12px; }' +
         '.box p { font-size: 1.05rem; line-height: 1.55; opacity:0.92; margin:8px 0; }' +
         '.box .eta { margin-top:16px; padding:10px 16px; background: rgba(74,144,226,0.18); border-radius:10px; font-weight:600; display:inline-block; }' +
         '.box small { display:block; margin-top:24px; opacity:0.6; font-size:0.82rem; }' +
      '</style></head>' +
      '<body><div class="box">' +
         '<div class="icon">🔧</div>' +
         '<h1>Under Maintenance</h1>' +
         '<p>' + String(msg).replace(/</g, '&lt;') + '</p>' +
         (endTime ? '<div class="eta">⏰ Expected back online: ' + String(endTime).replace(/</g, '&lt;') + '</div>' : '') +
         '<small>Thank you for your patience.</small>' +
      '</div></body>';
}

function _showMaintenanceAdminBanner(s) {
   if (document.getElementById('_maintBanner')) return;
   var b = document.createElement('div');
   b.id = '_maintBanner';
   b.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#ef6c00;color:#fff;padding:6px 14px;text-align:center;font-size:0.85rem;font-weight:600;z-index:99999;box-shadow:0 2px 8px rgba(0,0,0,0.2)';
   b.innerHTML = '🔧 Maintenance Mode is <strong>ON</strong> — users are blocked. You (admin) can still use the site. <a href="admin.html?tab=settings" style="color:#fff;text-decoration:underline;margin-left:6px">Turn off</a>';
   document.body.appendChild(b);
   document.body.style.paddingTop = (document.body.style.paddingTop ? document.body.style.paddingTop : '') + ' 30px';
}

function isStoreOwner(user) {
   return user && user.role === 'storeowner' && !isAdmin(user.email);
}

function isBlocked(email) {
   const users = getUsers();
   const u = users.find(function(x) { return x.email.toLowerCase() === email.toLowerCase(); });
   return u && u.blocked === true;
}

function getStoreName(storeId) {
   if (!storeId) return (getAdminSettings().storeName) || 'MyStore';
   var u = getUsers().find(function(x) { return x.email === storeId; });
   return (u && (u.storeName || u.name)) || storeId;
}

// ── ADMIN: USER MANAGEMENT ──
var _currentUserFilter = 'all';

function filterUsers(filter) {
   _currentUserFilter = filter;
   renderUserList(filter);
}

// Re-fetch the user list from Supabase and re-render. Also subscribes to
// realtime so new signups appear without a manual refresh.
async function refreshAndRenderUsers() {
   _liveSubscribe('adminUsers', 'users', refreshAndRenderUsers);
   var fresh = await AppDB.getUsers();
   _db.users = fresh;
   renderUserList(_currentUserFilter || 'all');
}

// Show pending block-appeals at the top of the Users tab so admin sees them
// immediately on login. Approve clears the user's no-show count (effective
// from approval timestamp); Deny dismisses the appeal but keeps the block.
function _renderPendingAppeals(users) {
   var box = document.getElementById('pendingAppealsBox');
   if (!box) return;
   var pending = (users || []).filter(function(u) { return u.block_appeal_status === 'pending'; });
   if (pending.length === 0) { box.style.display = 'none'; box.innerHTML = ''; return; }
   var rows = pending.map(function(u) {
      var emailJs = (u.email || '').replace(/'/g, "\\'");
      var when = u.block_appeal_at ? new Date(u.block_appeal_at).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '';
      var reason = (u.block_appeal_reason || '').replace(/</g, '&lt;');
      return '<div style="background:#fff;border:1px solid #ffcc80;border-radius:8px;padding:10px;margin-top:8px">' +
                '<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:6px">' +
                   '<div><strong>' + (u.name || u.email) + '</strong> <span style="color:#888;font-size:0.82rem">· ' + u.email + '</span></div>' +
                   '<div style="font-size:0.78rem;color:#666">submitted ' + when + '</div>' +
                '</div>' +
                '<div style="font-size:0.88rem;color:#444;background:#fafafa;border-left:3px solid #ffb74d;padding:8px 10px;border-radius:4px;margin-bottom:8px;white-space:pre-wrap">' + reason + '</div>' +
                '<div style="display:flex;gap:6px;justify-content:flex-end">' +
                   '<button class="apt-view-btn" style="background:#c62828" onclick="denyAppeal(\'' + emailJs + '\')">✕ Deny</button>' +
                   '<button class="apt-view-btn" style="background:#2e7d32" onclick="approveAppeal(\'' + emailJs + '\')">✓ Approve &amp; Unblock</button>' +
                '</div>' +
             '</div>';
   }).join('');
   box.style.display = 'block';
   box.innerHTML = '<div style="font-weight:700;color:#e65100">📬 Pending Appeals (' + pending.length + ')</div>' + rows;
}

async function approveAppeal(email) {
   if (!confirm('Approve appeal and unblock this customer? Their no-show history before today will be ignored.')) return;
   var ok = await AppDB.updateUser(email, {
      block_appeal_status: 'approved',
      appeal_approved_at: new Date().toISOString()
   });
   if (!ok) { alert('Failed to approve. Check console.'); return; }
   await loadUsersFromDb();
   renderUserList(_currentUserFilter || 'all');
}

async function denyAppeal(email) {
   if (!confirm('Deny this appeal? Customer stays blocked until enough no-shows age out.')) return;
   var ok = await AppDB.updateUser(email, {
      block_appeal_status: 'denied'
      // don't touch appeal_approved_at — customer stays blocked
   });
   if (!ok) { alert('Failed to deny. Check console.'); return; }
   await loadUsersFromDb();
   renderUserList(_currentUserFilter || 'all');
}

function renderUserList(filter) {
   filter = filter || 'all';
   // Update filter tab active state
   ['all', 'customers', 'storeowners', 'pending', 'blocked'].forEach(function(f) {
      var btn = document.getElementById('uf-' + f);
      if (btn) btn.classList.toggle('active', f === filter);
   });

   var users = getUsers();
   var container = document.getElementById('userListContainer');
   if (!container) return;

   // Pending appeals box (above the user list)
   _renderPendingAppeals(users);

   // Exclude admin accounts from the list
   var allNonAdmin = users.filter(function(u) { return !ADMIN_EMAILS.includes(u.email); });

   // Stats
   var activeCount  = allNonAdmin.filter(function(u) { return !u.blocked; }).length;
   var blockedCount = allNonAdmin.filter(function(u) { return u.blocked; }).length;
   var pendingCount = allNonAdmin.filter(function(u) { return u.role === 'storeowner' && u.isApproved === false; }).length;
   var statsEl = document.getElementById('userStatsBar');
   if (statsEl) {
      statsEl.innerHTML =
         '<span>👥 Total: <strong>' + allNonAdmin.length + '</strong></span>' +
         '<span>✅ Active: <strong>' + activeCount + '</strong></span>' +
         '<span>⏳ Pending: <strong>' + pendingCount + '</strong></span>' +
         '<span>🚫 Blocked: <strong>' + blockedCount + '</strong></span>';
   }

   // Apply category filter
   var filtered = allNonAdmin.slice();
   if (filter === 'customers')   filtered = filtered.filter(function(u) { return u.role !== 'storeowner'; });
   if (filter === 'storeowners') filtered = filtered.filter(function(u) { return u.role === 'storeowner'; });
   if (filter === 'pending')     filtered = filtered.filter(function(u) { return u.role === 'storeowner' && u.isApproved === false; });
   if (filter === 'blocked')     filtered = filtered.filter(function(u) { return u.blocked; });

   // Apply search
   var searchEl = document.getElementById('userSearchInput');
   var searchVal = searchEl ? searchEl.value.trim().toLowerCase() : '';
   if (searchVal) {
      filtered = filtered.filter(function(u) {
         return u.email.toLowerCase().includes(searchVal) ||
                (u.name && u.name.toLowerCase().includes(searchVal));
      });
   }

   if (!filtered.length) {
      container.innerHTML = '<p class="um-empty">No users found.</p>';
      return;
   }

   var allOrders = _db.orders;

   var html = '';
   filtered.forEach(function(u) {
      var initial    = (u.name || u.email).charAt(0).toUpperCase();
      var isPartner  = u.role === 'storeowner';
      var isPending  = isPartner && u.isApproved === false;
      var roleLabel  = isPartner ? 'Business Partner' : 'Customer';
      var roleClass  = isPartner ? 'badge-owner' : 'badge-customer';
      var statusCls  = u.blocked ? 'status-blocked' : 'status-active';
      var statusLbl  = u.blocked ? '🚫 Blocked' : '✅ Active';
      var blockLbl   = u.blocked ? '✅ Unblock' : '🚫 Block';
      var blockCls   = u.blocked ? 'um-btn-unblock' : 'um-btn-block';
      var blockFn    = u.blocked ? 'unblockUser' : 'blockUser';
      var orderCount = allOrders.filter(function(o) { return o.userEmail === u.email; }).length;
      var meta       = orderCount + ' order' + (orderCount !== 1 ? 's' : '');
      if (u.phone) meta += ' · ' + u.phone;

      var approvalBadge = '';
      var approvalBtn   = '';
      if (isPartner) {
         if (isPending) {
            approvalBadge = ' <span class="um-status status-blocked" style="background:#fff3e0;color:#e65100">⏳ Pending</span>';
            approvalBtn   = '<button class="um-btn um-btn-unblock" onclick="approvePartner(\'' + u.email + '\')">✅ Approve</button>';
         } else {
            approvalBadge = ' <span class="um-status status-active">✅ Approved</span>';
            approvalBtn   = '<button class="um-btn um-btn-block"   onclick="revokePartner(\'' + u.email + '\')">🚫 Revoke</button>';
         }
      }

      html +=
         '<div class="um-user-card' + (u.blocked ? ' um-card-blocked' : '') + '">' +
            '<div class="um-avatar">' + initial + '</div>' +
            '<div class="um-user-info">' +
               '<div class="um-user-name">' +
                  (u.name || '(No name)') +
                  ' <span class="um-badge ' + roleClass + '">' + roleLabel + '</span>' +
                  ' <span class="um-status ' + statusCls + '">' + statusLbl + '</span>' +
                  approvalBadge +
               '</div>' +
               '<div class="um-user-email">' + u.email + '</div>' +
               '<div class="um-user-meta">' + meta + '</div>' +
            '</div>' +
            '<div class="um-actions">' +
               '<button class="um-btn um-btn-view"   onclick="showUserDetail(\'' + u.email + '\')">👁 Profile</button>' +
               approvalBtn +
               '<button class="um-btn ' + blockCls + '" onclick="' + blockFn + '(\'' + u.email + '\')">' + blockLbl + '</button>' +
               '<button class="um-btn um-btn-delete" onclick="deleteUser(\'' + u.email + '\')">🗑 Delete</button>' +
            '</div>' +
         '</div>';
   });
   container.innerHTML = html;
}

async function approvePartner(email) {
   if (!confirm('Approve ' + email + ' as a Business Partner?\n\nThey will gain access to the business dashboard on their next login.')) return;
   var ok = await AppDB.updateUser(email, { isApproved: true });
   if (!ok) { alert('Failed to approve.'); return; }
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (u) u.isApproved = true;
   renderUserList(_currentUserFilter);
}

async function revokePartner(email) {
   if (!confirm('Revoke Business Partner access for ' + email + '?\n\nThey will be redirected to the home page next time they try to access the dashboard.')) return;
   var ok = await AppDB.updateUser(email, { isApproved: false });
   if (!ok) { alert('Failed to revoke.'); return; }
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (u) u.isApproved = false;
   renderUserList(_currentUserFilter);
}

function blockUser(email) {
   if (!confirm('Block ' + email + '?\nThey will immediately lose access and cannot log in.')) return;
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (u) { u.blocked = true; saveUsers(users); }
   // Force logout if this user is currently in session
   var lu = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null');
   if (lu && lu.email.toLowerCase() === email.toLowerCase()) {
      sessionStorage.removeItem('loggedInUser');
   }
   showAdminToast('🚫 ' + email + ' has been blocked.');
   renderUserList(_currentUserFilter);
}

function unblockUser(email) {
   if (!confirm('Unblock ' + email + '?\nThey will be able to log in again.')) return;
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (u) { u.blocked = false; saveUsers(users); }
   showAdminToast('✅ ' + email + ' has been unblocked.');
   renderUserList(_currentUserFilter);
}

function deleteUser(email) {
   var users  = getUsers();
   var target = users.find(function(u) { return u.email === email; });
   var isStore = target && target.role === 'storeowner';

   var msg = 'Remove account for:\n' + email + '\n\n';
   if (isStore) msg += 'This is a business partner. Their account will be removed but products and hospital records are preserved — if re-admitted, everything restores automatically.\n\n';
   msg += 'Their login access will be removed. Order history is kept for records.\nSaved addresses, cards and wishlist will be cleared.';
   if (!confirm(msg)) return;

   // Remove from users list (login no longer possible)
   _db.users = users.filter(function(u) { return u.email !== email; });
   AppDB.deleteUserByEmail(email);

   // Clear personal preferences — but keep orders for business records
   AppDB.deleteUserAddresses(email);
   AppDB.deleteUserCards(email);
   AppDB.deleteUserWishlist(email);
   AppDB.deleteUserAppointments(email);
   // Note: orders are intentionally kept in Supabase for order history

   // Remove in-memory store products (Supabase products preserved for re-admission)
   if (isStore) {
      Object.values(products).forEach(function(cat) {
         cat.items = cat.items.filter(function(item) { return item.storeId !== email; });
      });
   }

   // Force logout if currently in session
   var lu = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null');
   if (lu && lu.email.toLowerCase() === email.toLowerCase()) sessionStorage.removeItem('loggedInUser');

   showAdminToast(isStore ? '🗑 Account removed (products & orders preserved): ' + email : '🗑 Account removed (orders kept for records): ' + email);
   renderUserList(_currentUserFilter);
}

function showUserDetail(email) {
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (!u) return;

   var addresses = _db.addresses.filter ? _db.addresses : [];
   // Async-load this user's addresses for admin detail view
   AppDB.getAddresses(email).then(function(data) {
      addresses = (data || []).map(function(a) {
         return { name: a.name, phone: a.phone, line: a.line, city: a.city, state: a.state, pin: a.pin, isDefault: a.is_default };
      });
      var addrEl2 = document.getElementById('udm-addresses');
      if (addrEl2) addrEl2.innerHTML = addresses.length
         ? addresses.map(function(a) { return '<div class="udm-addr-row">' + (a.isDefault ? '✅ ' : '') + a.name + ', ' + a.line + ', ' + a.city + ' — ' + a.pin + '</div>'; }).join('')
         : '<span style="color:#aaa">No saved addresses</span>';
   });
   var allOrders = _db.orders;
   var userOrders = allOrders.filter(function(o) { return o.customerEmail === email; });

   var roleLabel   = u.role === 'storeowner' ? 'Business Partner' : 'Customer';
   var statusLabel = u.blocked ? '🚫 Blocked' : '✅ Active';
   var initial     = (u.name || u.email).charAt(0).toUpperCase();

   // ── Profile tab ──
   document.getElementById('udm-avatar').textContent = initial;
   document.getElementById('udm-name').textContent   = u.name  || '(No name)';
   document.getElementById('udm-email').textContent  = u.email;
   document.getElementById('udm-role').textContent   = roleLabel;
   document.getElementById('udm-status').textContent = statusLabel;
   document.getElementById('udm-phone').textContent  = u.phone  || '—';
   document.getElementById('udm-gender').textContent = u.gender || '—';
   document.getElementById('udm-orders-count').textContent = userOrders.length + ' order' + (userOrders.length !== 1 ? 's' : '');

   var addrEl = document.getElementById('udm-addresses');
   addrEl.innerHTML = addresses.length
      ? addresses.map(function(a) {
            return '<div class="udm-addr-item">📍 ' + (a.name || '') + ', ' + (a.line || '') + ', ' + (a.city || '') + ' — ' + (a.pin || '') + '</div>';
         }).join('')
      : '<span style="color:#999">No saved addresses</span>';

   // ── Orders tab ──
   var ordersEl = document.getElementById('udm-orders-list');
   if (!userOrders.length) {
      ordersEl.innerHTML = '<p style="color:#999;text-align:center;padding:20px;font-size:0.88rem">No orders placed yet.</p>';
   } else {
      ordersEl.innerHTML = userOrders.map(function(o) {
         var cls = orderStatusClass(o.status);
         var itemsHtml = o.items.map(function(i) {
            return '<div class="udm-order-item">' +
                      '<img src="' + i.img + '" onerror="this.src=\'https://placehold.co/40x40?text=Item\'"/>' +
                      '<span>' + i.name + ' × ' + i.qty + '</span>' +
                      '<span>₹' + (i.price * i.qty).toLocaleString('en-IN') + '</span>' +
                   '</div>';
         }).join('');
         return '<div class="udm-order-card">' +
                   '<div class="udm-order-header">' +
                      '<div>' +
                         '<div class="udm-order-id">' + o.orderId + '</div>' +
                         '<div class="udm-order-date">' + o.date + '</div>' +
                         (o.storeName ? '<div class="udm-order-store">🏪 ' + o.storeName + '</div>' : '') +
                      '</div>' +
                      '<div style="text-align:right">' +
                         '<span class="order-badge ' + cls + '">' + o.status + '</span>' +
                         '<div class="udm-order-total">₹' + o.total.toLocaleString('en-IN') + '</div>' +
                      '</div>' +
                   '</div>' +
                   '<div class="udm-order-items">' + itemsHtml + '</div>' +
                   '<div class="udm-order-actions">' +
                      (o.status === 'Pending Pickup' ? '<button class="shop-btn-ready" style="font-size:0.8rem;padding:5px 12px" onclick="updateOrderStatus(\'' + o.orderId + '\',\'Ready\')">✅ Mark Ready</button>' : '') +
                      (o.status === 'Ready' ? '<button class="shop-btn-complete" style="font-size:0.8rem;padding:5px 12px" onclick="updateOrderStatus(\'' + o.orderId + '\',\'Completed\')">🏁 Mark Completed</button>' : '') +
                      (o.status === 'Completed' ? '<span style="color:#2e7d32;font-size:0.82rem">✔ Collected by customer</span>' : '') +
                   '</div>' +
                '</div>';
      }).join('');
   }

   // Block button
   var blockBtn = document.getElementById('udm-block-btn');
   if (blockBtn) {
      if (u.blocked) {
         blockBtn.textContent = '✅ Unblock';
         blockBtn.className   = 'udm-btn udm-btn-unblock';
         blockBtn.onclick     = function() { unblockUserFromDetail(); };
      } else {
         blockBtn.textContent = '🚫 Block';
         blockBtn.className   = 'udm-btn udm-btn-block';
         blockBtn.onclick     = function() { blockUserFromDetail(); };
      }
   }

   document.getElementById('udm-email-val').value = email;
   switchUdmTab('profile');
   document.getElementById('userDetailModal').classList.remove('hidden');
}

function switchUdmTab(tab) {
   ['profile', 'orders'].forEach(function(t) {
      var panel = document.getElementById('udm-panel-' + t);
      var btn   = document.getElementById('udm-tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab);
   });
}

function closeUserDetailModal() {
   document.getElementById('userDetailModal').classList.add('hidden');
}

function handleUserDetailOverlayClick(e) {
   if (e.target.id === 'userDetailModal') closeUserDetailModal();
}

function blockUserFromDetail() {
   var email = document.getElementById('udm-email-val').value;
   closeUserDetailModal();
   blockUser(email);
}

function unblockUserFromDetail() {
   var email = document.getElementById('udm-email-val').value;
   closeUserDetailModal();
   unblockUser(email);
}

function deleteUserFromDetail() {
   var email = document.getElementById('udm-email-val').value;
   closeUserDetailModal();
   deleteUser(email);
}

function checkLogin() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));

   // Guest visitor — let them browse, but hide login-only UI bits
   if (!user) {
      document.body.classList.add('guest');
      const addrEl = document.getElementById('headerAddress');
      if (addrEl) addrEl.innerHTML = '📍 <span>Login to set address</span>';
      return;
   }

   document.body.classList.remove('guest');

   // Kick blocked users out immediately (admins can never be blocked)
   if (!isAdmin(user.email) && isBlocked(user.email)) {
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'login.html';
      return;
   }

   // Accounts created before the role system have no role — ask once
   if (!user.role && !isAdmin(user.email)) {
      showRoleSetupModal(user);
      return;
   }

   // Approved store owners go to their dashboard. Unapproved ones stay on home
   // and browse as customer until admin approves them.
   if (isStoreOwner(user) && user.isApproved !== false) { window.location.href = 'shopowner.html'; return; }

   document.getElementById('welcomeUser').textContent = user.name;
   document.getElementById('heroGreeting').textContent = 'Welcome, ' + user.name + '!';
   const header = document.getElementById('userDropdownName');
   if (header) header.textContent = '👋 Hi, ' + user.name;
   updateAddressDisplay(user.email);
   if (isAdmin(user.email)) {
      const adminLink = document.getElementById('adminPanelLink');
      if (adminLink) adminLink.classList.remove('hidden');
      const shopLink = document.getElementById('shopOwnerLink');
      if (shopLink) shopLink.classList.remove('hidden');
   }
}

// One-time role picker for accounts created before the role system
function showRoleSetupModal(user) {
   var overlay = document.getElementById('roleSetupOverlay');
   if (overlay) overlay.classList.remove('hidden');
}

function confirmRole(role) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   user.role = role;
   // Save role in its own key — survives seedAdmin() array rewrites
   localStorage.setItem('role_' + user.email, role);
   sessionStorage.setItem('loggedInUser', JSON.stringify(user));
   // Also update users array
   var users = getUsers();
   var u = users.find(function(x) { return x.email === user.email; });
   if (u) { u.role = role; saveUsers(users); }
   // Redirect based on role
   if (role === 'storeowner') {
      window.location.href = 'shopowner.html';
   } else {
      window.location.href = 'home.html';
   }
}

function seedAdmin() {
   let users = getUsers();
   // Remove old placeholder admin
   users = users.filter(u => u.email !== 'admin@mystore.com');
   const admins = [
      { name: 'Admin', email: 'g.ramkumar3127@gmail.com',    password: 'Gsggrl@703662', role: 'admin', isAdmin: true },
      { name: 'Admin', email: 'lakshmankumar586@gmail.com',  password: 'Lucky@123',     role: 'admin', isAdmin: true }
   ];
   admins.forEach(admin => {
      const existing = users.find(u => u.email === admin.email);
      if (existing) {
         existing.isAdmin  = true;
         existing.password = admin.password;
      } else {
         users.push(admin);
      }
   });
   saveUsers(users);
}

function updateAddressDisplay(email) {
   const el = document.getElementById('headerAddress');
   if (!el) return;
   // Use _db.addresses if already loaded (profile page), else fetch async
   if (_db.addresses.length) {
      const def = _db.addresses.find(a => a.isDefault) || _db.addresses[0];
      el.innerHTML = `🏠 <strong>HOME</strong> ${def.city || def.line} ›`;
   } else {
      AppDB.getAddresses(email).then(function(data) {
         if (!data || !data.length) { el.innerHTML = '📍 <span>Add Address</span>'; return; }
         const def = data.find(a => a.is_default) || data[0];
         el.innerHTML = `🏠 <strong>HOME</strong> ${def.city || def.line} ›`;
      });
      el.innerHTML = '📍 <span>Add Address</span>';
   }
}

function toggleUserMenu(e) {
   e.stopPropagation();
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { window.location.href = 'login.html'; return; }
   document.getElementById('userDropdown').classList.toggle('open');
}

function promptAuth(message) {
   if (confirm(message + '\n\nGo to login page now? (You can sign up from there.)')) {
      window.location.href = 'login.html';
   }
}

// ── FORGOT / RESET PASSWORD ─────────────────────────────
function showForgotPassword(e) {
   if (e) e.preventDefault();
   var box = document.querySelector('.auth-box:not(#forgotBox)');
   if (box) box.style.display = 'none';
   var fb = document.getElementById('forgotBox');
   if (fb) {
      fb.style.display = '';
      var input = document.getElementById('forgotEmail');
      if (input) input.focus();
   }
}

function hideForgotPassword(e) {
   if (e) e.preventDefault();
   document.getElementById('forgotBox').style.display = 'none';
   var box = document.querySelector('.auth-box:not(#forgotBox)');
   if (box) box.style.display = '';
}

async function sendPasswordReset() {
   var email = (document.getElementById('forgotEmail').value || '').trim().toLowerCase();
   var msg   = document.getElementById('forgotMsg');
   var btn   = document.querySelector('#forgotBox .btn-primary');
   if (!email) { msg.textContent = 'Please enter your email.'; msg.classList.remove('hidden'); msg.style.color = ''; return; }

   if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
   // Build redirect URL pointing at reset-password.html in the same directory as this page
   var basePath  = window.location.pathname.replace(/\/[^/]*$/, '/');
   var redirectTo = window.location.origin + basePath + 'reset-password.html';

   var { error } = await _sb.auth.resetPasswordForEmail(email, { redirectTo: redirectTo });
   if (btn) { btn.disabled = false; btn.textContent = '📧 Send Reset Link'; }

   // Always show the same friendly message regardless of whether the email exists,
   // so we don't reveal which emails are registered.
   msg.classList.remove('hidden');
   msg.style.color = '#2e7d32';
   msg.style.background = '#e8f5e9';
   msg.style.borderColor = '#c8e6c9';
   msg.textContent = '✅ If an account exists for ' + email + ', a reset link has been sent. Check your inbox (and spam folder).';
   if (error) console.warn('resetPasswordForEmail:', error.message);
}

// Called from reset-password.html on load. Supabase auto-detects the recovery
// hash in the URL and fires a PASSWORD_RECOVERY event — we wait for it.
function initPasswordResetPage() {
   var intro = document.getElementById('resetIntro');
   var form  = document.getElementById('resetForm');

   _sb.auth.onAuthStateChange(function(event, session) {
      if (event === 'PASSWORD_RECOVERY' || (session && session.user)) {
         if (intro) intro.textContent = 'Enter your new password below.';
         if (form)  form.style.display = '';
      }
   });

   // Fallback timer — if no event in 3 seconds, link was probably invalid/expired
   setTimeout(function() {
      if (form && form.style.display === 'none') {
         if (intro) intro.innerHTML = '⚠️ This reset link is invalid or has expired. <a href="login.html" style="color:#4a90e2">Back to login</a>.';
      }
   }, 3000);
}

async function completePasswordReset() {
   var newPw   = document.getElementById('resetNew').value;
   var confirm = document.getElementById('resetConfirm').value;
   var msg     = document.getElementById('resetMsg');
   var btn     = document.querySelector('#resetForm .btn-primary');
   var setMsg  = function(t, ok) {
      msg.textContent = t;
      msg.classList.remove('hidden');
      msg.style.color  = ok ? '#2e7d32' : '#c62828';
      msg.style.background = ok ? '#e8f5e9' : '#fff0f0';
   };

   if (!newPw || !confirm) { setMsg('All fields are required.'); return; }
   if (newPw.length < 6)   { setMsg('Password must be at least 6 characters.'); return; }
   if (newPw !== confirm)  { setMsg('Passwords do not match.'); return; }

   if (btn) { btn.disabled = true; btn.textContent = 'Updating…'; }
   var { error } = await _sb.auth.updateUser({ password: newPw });
   if (btn) { btn.disabled = false; btn.textContent = '🔒 Update Password'; }

   if (error) { setMsg('❌ ' + (error.message || 'Update failed.')); return; }

   setMsg('✅ Password updated! Redirecting to login…', true);
   await _sb.auth.signOut();
   setTimeout(function() { window.location.href = 'login.html'; }, 1500);
}

// Add a green/red border to the confirm-password input based on whether it matches.
// Wired via oninput on BOTH the password and confirm fields so changes either way revalidate.
function checkPwMatch(pwId, confirmId) {
   var pw = document.getElementById(pwId);
   var cf = document.getElementById(confirmId);
   if (!pw || !cf) return;
   if (!cf.value) {
      cf.classList.remove('pw-match', 'pw-mismatch');
      return;
   }
   var match = pw.value === cf.value;
   cf.classList.toggle('pw-match',    match);
   cf.classList.toggle('pw-mismatch', !match);
}

// Toggle a password input's visibility from a button onclick. Updates the icon too.
function togglePassword(inputId, btn) {
   var input = document.getElementById(inputId);
   if (!input) return;
   if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🙈';
      btn.title = 'Hide password';
   } else {
      input.type = 'password';
      btn.textContent = '👁';
      btn.title = 'Show password';
   }
}

// Change-password flow on profile.html. Handles all three account types:
//   1. Admin              → plaintext check + plaintext update in users table
//   2. New OTP user       → re-verify via Supabase Auth + updateUser
//   3. Legacy SQL-inserted → re-verify against users.password + plaintext update
async function changePassword() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var msg  = document.getElementById('pw-msg');
   var setMsg = function(text, color) { msg.textContent = text; msg.style.color = color || '#666'; };
   if (!user) { setMsg('❌ Please log in.', '#c62828'); return; }

   var current = document.getElementById('pw-current').value;
   var newPw   = document.getElementById('pw-new').value;
   var confirm = document.getElementById('pw-confirm').value;

   if (!current || !newPw || !confirm) { setMsg('❌ All three fields are required.', '#c62828'); return; }
   if (newPw.length < 6)               { setMsg('❌ New password must be at least 6 characters.', '#c62828'); return; }
   if (newPw !== confirm)              { setMsg('❌ New passwords do not match.', '#c62828'); return; }
   if (newPw === current)              { setMsg('❌ New password must be different from current.', '#c62828'); return; }

   setMsg('⏳ Updating…');

   var success = false;

   // Try Supabase Auth first (works for migrated admins + OTP-signed-up users)
   var verify = await _sb.auth.signInWithPassword({ email: user.email, password: current });
   if (!verify.error && verify.data && verify.data.user) {
      var upd = await _sb.auth.updateUser({ password: newPw });
      success = !upd.error;
      if (upd.error) setMsg('❌ ' + (upd.error.message || 'Update failed.'), '#c62828');
   } else {
      // Legacy fallback for un-migrated admins / SQL-inserted users
      var dbUser = await AppDB.getUserByEmail(user.email);
      if (!dbUser || !dbUser.password || dbUser.password !== current) {
         setMsg('❌ Current password is incorrect.', '#c62828');
         return;
      }
      success = await AppDB.updateUser(user.email, { password: newPw });
   }

   if (!success) {
      // setMsg may have already been set above; fall back to a generic message
      if (msg.textContent === '⏳ Updating…') setMsg('❌ Failed to update password. Please try again.', '#c62828');
      return;
   }

   // Clear the fields after success
   document.getElementById('pw-current').value = '';
   document.getElementById('pw-new').value     = '';
   document.getElementById('pw-confirm').value = '';
   setMsg('✅ Password updated successfully.', '#2e7d32');
}

document.addEventListener('click', function () {
   const dd = document.getElementById('userDropdown');
   if (dd) dd.classList.remove('open');
});

async function checkShopOwnerLogin() {
   await initDB();
   await _checkMaintenanceMode();
   // Auto-refresh maintenance overlay when admin changes settings
   if (typeof _liveSubscribe === 'function') _liveSubscribe('siteSettingsShop', 'settings', _refreshLiveSettings);
   if (typeof _startSettingsPolling === 'function') _startSettingsPolling();
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { window.location.href = 'login.html'; return; }
   // Kick blocked users out
   if (!isAdmin(user.email) && isBlocked(user.email)) {
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'login.html';
      return;
   }
   if (!isAdmin(user.email) && !isStoreOwner(user)) {
      window.location.href = 'home.html'; return;
   }
   // Unapproved Business Partner trying to reach the dashboard directly via URL.
   // Use replace() so the back button doesn't return them here and re-trigger this alert.
   if (!isAdmin(user.email) && user.isApproved === false) {
      alert('Your Business Partner account is still awaiting admin approval.');
      window.location.replace('home.html');
      return;
   }
   var nameEl = document.getElementById('shopOwnerName');
   if (nameEl) nameEl.textContent = user.name;
   var storeBtn = document.getElementById('shopViewStoreBtn');
   if (storeBtn && isAdmin(user.email)) storeBtn.classList.remove('hidden');
   loadSiteSettings();

   // Decide which tabs are relevant for this owner and figure out the business name
   // to show in the header centre.
   // NOTE: Admins viewing this page see the same as any user — based on what THEY personally own.
   // For global management (any hospital / any product), admin goes to admin.html.
   var providers    = await AppDB.getProviders();
   var myProviders  = providers.filter(function(p) { return (p.owner_email || '').toLowerCase() === user.email.toLowerCase(); });
   var ownsHospital = myProviders.length > 0;
   // New model: stores are admin-created store_providers with owner_email
   await loadStoreCategories();
   await loadStoreProviders(true);
   var myStoreProvs = (_storeProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase();
   });
   var ownsStores   = myStoreProvs.length > 0;
   var businessName = '';
   if (myProviders.length > 0) {
      businessName = myProviders.length === 1 ? myProviders[0].name
                                              : myProviders.map(function(p) { return p.name; }).join(' · ');
   } else if (ownsStores) {
      businessName = myStoreProvs.length === 1 ? myStoreProvs[0].name
                                               : myStoreProvs.map(function(p) { return p.name; }).join(' · ');
   } else if (isAdmin(user.email)) {
      businessName = 'Admin Dashboard';
   } else {
      businessName = user.storeName || user.name || '';
   }
   // If the user owns nothing yet, default to Appointments view so a brand-new partner
   // (or admin without linked assets) doesn't land on a blank page.
   if (!ownsHospital && !ownsStores) ownsHospital = true;

   var bizEl = document.getElementById('shopBusinessName');
   if (bizEl) bizEl.textContent = businessName;

   var dashTab   = document.getElementById('shop-tab-dashboard');
   var ordersTab = document.getElementById('shop-tab-orders');
   var aptTab    = document.getElementById('shop-tab-appointments');
   var docTab    = document.getElementById('shop-tab-doctors');
   var patTab    = document.getElementById('shop-tab-patients');
   var admTab    = document.getElementById('shop-tab-admissions');
   var revenueTab= document.getElementById('shop-tab-revenue');
   var bedsTab   = document.getElementById('shop-tab-beds');
   var staffTab  = document.getElementById('shop-tab-staff');
   var schedTab  = document.getElementById('shop-tab-schedule');
   var prodTab   = document.getElementById('shop-tab-products');
   if (dashTab)   dashTab.classList.toggle('hidden',   !ownsHospital);
   if (ordersTab) ordersTab.classList.toggle('hidden', !ownsStores);
   if (prodTab)   prodTab.classList.toggle('hidden',   !ownsStores);
   if (aptTab)    aptTab.classList.toggle('hidden',    !ownsHospital);
   if (docTab)    docTab.classList.toggle('hidden',    !ownsHospital);
   if (patTab)    patTab.classList.toggle('hidden',    !ownsHospital);
   if (admTab)    admTab.classList.toggle('hidden',    !ownsHospital);
   if (revenueTab) revenueTab.classList.toggle('hidden', !ownsHospital);
   if (bedsTab)   bedsTab.classList.toggle('hidden',   !ownsHospital);
   if (staffTab)  staffTab.classList.toggle('hidden',  !ownsHospital);
   if (schedTab)  schedTab.classList.toggle('hidden',  !ownsHospital);
   var walkinTab = document.getElementById('shop-tab-walkin');
   if (walkinTab) walkinTab.classList.toggle('hidden', !ownsStores);
   // Rename the products tab depending on how many stores the owner runs:
   //   1 store  → "🛍️ Products"      (skips the picker, goes straight in)
   //   2+ stores → "🏪 My Stores"     (shows the picker)
   if (prodTab && ownsStores) {
      prodTab.innerHTML = (myStoreProvs.length === 1) ? '🛍️ Products' : '🏪 My Stores';
   }

   // Pick the right "staff" label for the doctors tab based on what the owner runs
   // (e.g. Doctors / Stylists / Trainers / Staff). The +Add buttons live inside the panel,
   // not on the tab label.
   if (docTab && ownsHospital) {
      var cats = (myProviders || []).map(function(p) { return p.category; });
      var s    = _staffLabelForCategories(cats);
      docTab.innerHTML = s.icon + ' ' + s.label;
   }

   // Render whichever panel makes sense
   if (ownsStores) renderShopDashboard('Pending Pickup');   // default to "New" tab — surfaces orders awaiting confirmation

   // Live subscribe to orders at LOGIN time (not just on Orders tab) so the
   // owner gets pushed updates from any change anywhere — admin deleting,
   // customer placing, status changing. Works even when owner is on a
   // different tab; when they switch back to Orders the table is already fresh.
   if (ownsStores && typeof _liveSubscribe === 'function') {
      _liveSubscribe('shopOrders', 'orders', function() {
         AppDB.getAllOrders().then(function(rows) {
            _db.orders = rows || [];
            // Only re-render if Orders tab is visible (avoids touching DOM
            // that doesn't exist when owner is on Products / Walk-in / etc.)
            var ordersPanel = document.getElementById('shop-panel-orders');
            if (ordersPanel && !ordersPanel.classList.contains('hidden')) {
               renderShopDashboard(window._shopCurrentFilter);
            }
         });
      });
   }

   // Default landing tab:
   //   store owners → Orders (so they immediately see incoming customer orders)
   //   hospital owners → Dashboard
   //   anyone else → Products
   var defaultTab = ownsStores ? 'orders' : (ownsHospital ? 'dashboard' : 'products');
   switchShopTab(defaultTab);

   // Auto-refresh if admin enabled it
   var s = getAdminSettings();
   if (s.autoRefreshOrders && ownsStores) {
      setInterval(function() { renderShopDashboard(window._shopCurrentFilter); }, 30000);
   }
}

function renderShopDashboard(filterStatus) {
   var allOrders = _db.orders;
   var list = document.getElementById('shopOrderList');
   if (!list) return;
   window._shopCurrentFilter = filterStatus || '';
   // Live: when a customer places a new order or another tab updates one,
   // re-fetch and re-render automatically (no manual refresh).
   _liveSubscribe('shopOrders', 'orders', function() {
      AppDB.getAllOrders().then(function(rows) {
         _db.orders = rows || [];
         renderShopDashboard(window._shopCurrentFilter);
      });
   });

   // Filter to store-owner's own orders if not admin
   var loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (loggedUser && !isAdmin(loggedUser.email)) {
      allOrders = allOrders.filter(function(o) { return o.storeId === loggedUser.email; });
   }

   // Apply date range filter (uses order date — falls back to created_at if present)
   var df = _readDateFilter('shopOrderDateFilter', 'shopOrderCustomDate');
   allOrders = allOrders.filter(function(o) {
      return _isDateInRange(o.date || o.created_at || o.timestamp, df.range, df);
   });

   // Update stats — reflect the date filter so numbers match what's visible.
   // Stat tiles mirror the four stages the owner cares about most.
   var statusIn = function(o, set) { return set.indexOf(o.status) !== -1; };
   var dispatched = ['Out for Delivery', 'Ready'];
   var counts = {
      'new':        allOrders.filter(function(o) { return o.status === 'Pending Pickup'; }).length,
      'packed':     allOrders.filter(function(o) { return o.status === 'Packed';         }).length,
      'dispatched': allOrders.filter(function(o) { return statusIn(o, dispatched);       }).length,
      'completed':  allOrders.filter(function(o) { return o.status === 'Completed';      }).length
   };
   var setStat = function(id, n) { var el = document.getElementById(id); if (el) el.textContent = n; };
   setStat('statNew',        counts['new']);
   setStat('statPacked',     counts['packed']);
   setStat('statDispatched', counts['dispatched']);
   setStat('statCompleted',  counts['completed']);

   // Filter — 'Dispatched' is a virtual filter that bundles Out for Delivery
   // + Ready (handover happens at this stage regardless of delivery vs pickup).
   var filtered;
   if (filterStatus === 'Dispatched') {
      filtered = allOrders.filter(function(o) { return statusIn(o, dispatched); });
   } else if (filterStatus) {
      filtered = allOrders.filter(function(o) { return o.status === filterStatus; });
   } else {
      filtered = allOrders;
   }

   // Update active tab
   document.querySelectorAll('.shop-tab').forEach(function(t) { t.classList.remove('active'); });
   var activeTab = document.getElementById('tab-' + (filterStatus || 'all'));
   if (activeTab) activeTab.classList.add('active');

   if (filtered.length === 0) {
      var filterLabel = filterStatus === 'Dispatched' ? 'Out for Delivery / Ready for Pickup'
                      : filterStatus === 'Pending Pickup' ? 'New (awaiting confirmation)'
                      : filterStatus || '';
      list.innerHTML = '<div class="shop-empty">No orders ' + (filterLabel ? 'in "' + filterLabel + '"' : 'yet') + '.</div>';
      return;
   }

   // Mirror the appointments-table layout: one compact row per order, all info
   // scannable at a glance, multiple orders per screen instead of one-per-page.
   var rowsHtml = filtered.map(function(order) {
      var status = order.status || 'Pending Pickup';
      var statusClass = status === 'Completed'        ? 'completed' :
                        status === 'Out for Delivery' ? 'outfor'    :
                        status === 'Packed'           ? 'packed'    :
                        status === 'Ready'            ? 'packed'    :
                        status === 'Confirmed'        ? 'confirmed' :
                        status === 'Cancelled'        ? 'cancelled' : 'pending';
      var oid = (order.orderId || order.order_id || '').replace(/'/g, "\\'");
      var itemsCount = (order.items || []).length;
      var firstItem = (order.items || [])[0];
      var totalQty = (order.items || []).reduce(function(s, it) { return s + (it.qty || 0); }, 0);
      var rxOnly = !itemsCount && order.prescription_url;
      var itemsCell = rxOnly
         ? '<div class="apt-tbl-name" style="color:#1565c0">📋 Prescription-only order</div>' +
           '<div class="apt-tbl-sub" style="color:#c62828">Read prescription → click Bill to add items</div>'
         : (firstItem
            ? '<div class="apt-tbl-name">' + firstItem.name + (itemsCount > 1 ? ' <span style="color:#888;font-weight:400">+ ' + (itemsCount-1) + ' more</span>' : '') + '</div>' +
              '<div class="apt-tbl-sub">' + totalQty + ' unit' + (totalQty === 1 ? '' : 's') + '</div>'
            : '<span style="color:#bbb">—</span>');

      var rxIcon = order.prescription_url
         ? ' <a href="' + order.prescription_url + '" target="_blank" rel="noopener" title="View prescription" style="color:#c62828;text-decoration:none;font-weight:600">📋 Prescription</a>'
         : '';
      var deliveryIcon = order.delivery_address ? ' <span title="Home delivery">🚚</span>' : '';
      // Owner ALWAYS sees customer phone (pharmacy needs it — Rx clarifications,
      // delivery coordination, missing-item callbacks). Prefers the delivery
      // address phone if present (usually more reliable than profile phone).
      var phoneNum = (order.delivery_address && order.delivery_address.phone)
         ? order.delivery_address.phone
         : order.customerPhone;
      var phoneTxt = phoneNum
         ? '<div class="apt-tbl-sub">📞 <a href="tel:' + String(phoneNum).replace(/[^0-9+]/g, '') + '" style="color:#1a73e8">' + phoneNum + '</a></div>'
         : '<div class="apt-tbl-sub" style="color:#bbb">no phone</div>';

      // 4-step delivery journey vs 3-step pickup journey.
      // Fall back to the store's door_delivery flag for orders placed via the
      // generic cart flow (no explicit method='COD-Delivery' or delivery_address).
      // pickup_override wins over everything — owner explicitly switched this
      // order to pickup, so don't sneak it back into the delivery flow.
      var isDelivery = !order.pickup_override && ((order.method === 'COD-Delivery') || !!order.delivery_address);
      if (!isDelivery && !order.pickup_override) {
         var providers = _storeProvidersCache || [];
         var ownerStore = providers.find(function(s) {
            return s.id === order.store_provider_id || s.name === order.storeName;
         });
         if (ownerStore && ownerStore.door_delivery) isDelivery = true;
      }
      var actions = '<button class="apt-view-btn" style="background:#1a73e8" onclick="openOrderBillModal(\'' + oid + '\')">📝 Bill</button>';
      // Shared first step: Pending → Confirmed
      if (status === 'Pending Pickup') actions += ' <button class="apt-view-btn" style="background:#7b1fa2" onclick="updateOrderStatus(\'' + oid + '\',\'Confirmed\')">✅ Confirm</button>';
      // Shared second step: Confirmed → Packed
      if (status === 'Confirmed')      actions += ' <button class="apt-view-btn" style="background:#ef6c00" onclick="updateOrderStatus(\'' + oid + '\',\'Packed\')">📦 Mark Packed</button>';
      if (isDelivery) {
         if (status === 'Packed')           actions += ' <button class="apt-view-btn" style="background:#1565c0" onclick="updateOrderStatus(\'' + oid + '\',\'Out for Delivery\')">🚚 Out for Delivery</button>';
         if (status === 'Out for Delivery') actions += ' <button class="apt-view-btn" style="background:#0a8a3a" onclick="updateOrderStatus(\'' + oid + '\',\'Completed\')">✅ Delivered</button>';
         // Legacy delivery rows still on 'Ready' — let owner advance them
         if (status === 'Ready')            actions += ' <button class="apt-view-btn" style="background:#1565c0" onclick="updateOrderStatus(\'' + oid + '\',\'Out for Delivery\')">🚚 Out for Delivery</button>';
      } else {
         if (status === 'Packed')           actions += ' <button class="apt-view-btn" style="background:#2e7d32" onclick="updateOrderStatus(\'' + oid + '\',\'Ready\')">🏪 Ready for Pickup</button>';
         if (status === 'Ready')            actions += ' <button class="apt-view-btn" style="background:#0a8a3a" onclick="updateOrderStatus(\'' + oid + '\',\'Completed\')">🏁 Picked up</button>';
      }

      // "Switch to pickup" — for delivery orders that are still in-flight.
      // Use when delivery boy unavailable + customer agrees on phone to collect.
      var inFlight = status !== 'Completed' && status !== 'Cancelled';
      if (isDelivery && inFlight) {
         actions += ' <button class="apt-view-btn" style="background:#f57c00" title="Call the customer first to confirm — this removes their delivery address and flips the order to pickup mode" onclick="switchOrderToPickup(\'' + oid + '\')">🔄 Switch to pickup</button>';
      }

      return '<tr>' +
                '<td><div class="apt-tbl-name">' + (order.orderId || '') + '</div>' +
                    '<div class="apt-tbl-sub">' + (order.date || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (order.customerName || '—') + rxIcon + deliveryIcon + '</div>' + phoneTxt + '</td>' +
                '<td>' + itemsCell + '</td>' +
                '<td style="text-align:right"><div class="apt-tbl-fee">₹' + Number(order.total || 0).toLocaleString('en-IN') + '</div>' +
                    '<div class="apt-tbl-fee-tag" style="background:#fff8e1;color:#6d4c41;border:1px solid #ffd54f">' +
                    (order.payment_mode === 'COD' || order.method === 'COD' || order.method === 'COD-Delivery' ? '💵 COD' :
                     order.method === 'Walk-in' ? '🧾 Walk-in' : (order.method || '')) +
                    '</div></td>' +
                '<td><span class="apt-status ' + statusClass + '">' + _ownerStatusLabel(status, order) + '</span></td>' +
                '<td>' + actions + '</td>' +
             '</tr>';
   }).join('');

   list.innerHTML =
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th>Order ID / Date</th>' +
              '<th>Customer</th>' +
              '<th>Items</th>' +
              '<th style="text-align:right">Total</th>' +
              '<th>Status</th>' +
              '<th>Actions</th>' +
           '</tr></thead>' +
           '<tbody>' + rowsHtml + '</tbody>' +
        '</table>' +
      '</div>';
}

// Owner-initiated: convert a single in-flight delivery order to pickup. Used
// when the delivery boy is unavailable but the customer is OK collecting from
// the store. Confirms first (this is a customer-visible change), then strips
// method='COD-Delivery' / delivery_address so the status labels and action
// buttons re-render as a pickup flow.
async function switchOrderToPickup(orderId) {
   var order = _db.orders.find(function(o) { return o.orderId === orderId || o.order_id === orderId; });
   if (!order) return;
   var custName = order.customerName || 'this customer';
   var phone = (order.delivery_address && order.delivery_address.phone) || order.customerPhone || '';
   if (!confirm('Switch this order to pickup mode?\n\n' +
                'Make sure you\'ve called ' + custName + (phone ? ' (📞 ' + phone + ')' : '') + ' and they\'re OK collecting from the store.\n\n' +
                'Their delivery address will be removed from this order.')) return;
   order.method = 'Pickup';
   order.delivery_address = null;
   order.pickup_override = true;
   // Persist. pickup_override is the key bit: without it, the label fallback
   // would look at store.door_delivery and silently flip the order back to
   // a delivery display, making this whole action look like it did nothing.
   var ok = await AppDB.patchOrder(orderId, { method: 'Pickup', delivery_address: null, pickup_override: true });
   if (!ok) { alert('Failed to update order.'); return; }
   renderShopDashboard(window._shopCurrentFilter);
}

async function updateOrderStatus(orderId, newStatus) {
   var order = _db.orders.find(function(o) { return o.orderId === orderId || o.order_id === orderId; });
   if (order) {
      // On transition to Completed: deduct stock from inventory_batches once.
      // The stock_deducted flag prevents double-deduction if the owner toggles
      // status back and forth (e.g., accidental click on Ready then Completed
      // again). Walk-in orders already have stock_deducted=true from creation.
      if (newStatus === 'Completed' && !order.stock_deducted && (order.items || []).length) {
         var deducted = await _deductStockForOrder(order);
         if (deducted) {
            order.stock_deducted = true;
            AppDB.patchOrder(orderId, { stock_deducted: true });
         }
      }
      order.status = newStatus;
      AppDB.updateOrderStatus(orderId, newStatus);
      // If called from admin user detail modal, refresh it
      var udmModal = document.getElementById('userDetailModal');
      if (udmModal && !udmModal.classList.contains('hidden')) {
         var emailVal = document.getElementById('udm-email-val');
         if (emailVal) showUserDetail(emailVal.value);
         return;
      }
   }
   var activeTab = document.querySelector('.shop-tab.active');
   var filterStatus = activeTab ? activeTab.dataset.filter : null;
   renderShopDashboard(filterStatus || null);
}

// Deduct an order's items from inventory_batches via FEFO. Self-contained:
// fetches fresh batches for the order's store (doesn't rely on whichever
// store the owner has currently "entered" in the UI). Best-effort: if some
// items run short we still deduct what we can and warn the owner, since the
// physical goods have already been handed over by this point.
async function _deductStockForOrder(order) {
   var storeId = order.store_provider_id;
   if (!storeId) return false;
   var batches;
   try { batches = await AppDB.getBatchesForStore(storeId); }
   catch (e) { console.error('Failed to fetch batches for stock deduction:', e); return false; }

   // Group batches by product_id
   var byProduct = {};
   (batches || []).forEach(function(b) {
      (byProduct[b.product_id] = byProduct[b.product_id] || []).push(b);
   });

   var updates = [];
   var shortfalls = [];
   (order.items || []).forEach(function(it) {
      var need = Number(it.qty) || 0;
      if (!need) return;
      // PREFERRED: deduct from the explicit per-line allocations saved on the
      // order. This guarantees the bill print matches the stock deduction.
      if (it.allocations && it.allocations.length) {
         it.allocations.forEach(function(a) {
            var qty = Number(a.qty) || 0;
            if (!qty) return;
            var lot = (byProduct[it.id] || []).find(function(b) { return b.id === a.batchId; });
            if (!lot) { shortfalls.push({ name: it.name, short: qty, reason: 'batch ' + (a.batchNo || a.batchId) + ' no longer exists' }); return; }
            var have = Number(lot.qty_remaining) || 0;
            var take = Math.min(have, qty);
            updates.push({ batchRef: lot, newRemaining: have - take });
            if (take < qty) shortfalls.push({ name: it.name, short: qty - take, reason: 'batch ' + (lot.batch_no || lot.id) + ' short' });
         });
         return;
      }
      // FALLBACK: legacy orders without allocations — auto-FEFO across batches
      var lots = (byProduct[it.id] || []).slice().sort(function(a, b) {
         var da = a.expiry_date ? new Date(a.expiry_date).getTime() : Infinity;
         var db = b.expiry_date ? new Date(b.expiry_date).getTime() : Infinity;
         return da - db;
      });
      var remaining = need;
      for (var i = 0; i < lots.length && remaining > 0; i++) {
         var lot2 = lots[i];
         var have2 = Number(lot2.qty_remaining) || 0;
         if (have2 <= 0) continue;
         var take2 = Math.min(have2, remaining);
         updates.push({ batchRef: lot2, newRemaining: have2 - take2 });
         remaining -= take2;
      }
      if (remaining > 0) shortfalls.push({ name: it.name, short: remaining });
   });

   // Commit updates (uses the same helper as the walk-in flow)
   try { await _commitFEFODeduction(updates); } catch (e) { console.error(e); return false; }

   // Refresh _currentStockByProduct if the owner is currently inside this store
   if (_currentMyStoreId === storeId) {
      _currentStockByProduct = byProduct;   // already updated in-place by _commitFEFODeduction
   }

   if (shortfalls.length) {
      alert('⚠️ Stock deducted, but some items had insufficient batches on file:\n\n' +
            shortfalls.map(function(s) { return '• ' + s.name + ': short by ' + s.short; }).join('\n') +
            '\n\nUpdate batches manually to reconcile.');
   }
   return true;
}

function lookupOrder() {
   var val = document.getElementById('shopSearchInput').value.trim().toUpperCase();
   // Search cleared → restore whichever tab the owner had selected (don't
   // snap back to 'All Orders' and lose their context).
   if (!val) { renderShopDashboard(window._shopCurrentFilter); return; }
   var loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var allOrders = _db.orders;
   // Restrict to this store owner's orders (admins see all)
   if (loggedUser && !isAdmin(loggedUser.email)) {
      allOrders = allOrders.filter(function(o) { return o.storeId === loggedUser.email; });
   }
   var filtered = allOrders.filter(function(o) { return o.orderId.toUpperCase().includes(val); });
   document.querySelectorAll('.shop-tab').forEach(function(t) { t.classList.remove('active'); });
   var list = document.getElementById('shopOrderList');
   if (filtered.length === 0) {
      list.innerHTML = '<div class="shop-empty">No order found for "' + val + '".</div>';
      return;
   }
   list.innerHTML = '';
   var _savedOrders = _db.orders;
   _db.orders = filtered;
   renderShopDashboard();
   _db.orders = _savedOrders;
}

// ── SHOP OWNER: PRODUCT MANAGEMENT ──
// \u2500\u2500 Shop-owner: NEW My Stores \u2192 per-store Products flow \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// View preference (list / grid) is per-browser, saved in localStorage.
// Default is grid \u2014 more visual and works well for medical stores at low
// item counts. Owner can switch to list via the toggle button.
function _getShopProductsView() {
   try { return localStorage.getItem('shopProductsView') || 'grid'; }
   catch (e) { return 'grid'; }
}
function toggleShopProductsView() {
   var current = _getShopProductsView();
   var next = current === 'list' ? 'grid' : 'list';
   try { localStorage.setItem('shopProductsView', next); } catch (e) {}
   _applyShopProductsViewToggle();
   if (_currentMyStoreId) renderMyStoreProducts(_currentMyStoreId);
}
function _applyShopProductsViewToggle() {
   var btn = document.getElementById('shopProductViewToggle');
   if (!btn) return;
   var v = _getShopProductsView();
   btn.textContent = v === 'grid' ? '\u25a6 Grid' : '\ud83d\udccb List';
}

// Inline SVG placeholder for missing/broken product images. Used both as the
// initial src (when product has no img URL) and the onerror fallback. Lives
// as a data URI so the browser never has to hit the network \u2014 that's what was
// causing the "blinking" loop when placehold.co was unreachable.
var _ITEM_PLACEHOLDER_DATA = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
   '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">' +
   '<rect width="60" height="60" rx="8" fill="#e0e0e0"/>' +
   '<text x="30" y="34" font-family="Arial" font-size="11" fill="#888" text-anchor="middle" font-weight="700">Item</text>' +
   '</svg>'
);
function _fallbackItemImg(imgEl) {
   // Guard against infinite onerror loops: if we're already showing the
   // placeholder, do nothing.
   if (!imgEl || imgEl.src === _ITEM_PLACEHOLDER_DATA) {
      if (imgEl) imgEl.onerror = null;
      return;
   }
   imgEl.onerror = null;     // belt-and-braces \u2014 only allow one fallback
   imgEl.src = _ITEM_PLACEHOLDER_DATA;
}
// Owner's selected store id (null = show stores list).
let _currentMyStoreId = null;
// Per-store product cache (lazy, refreshed on save/delete).
let _currentMyStoreProds = [];

async function renderStoreOwnerProducts() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   await loadStoreCategories();
   await loadStoreProviders(true);
   if (_currentMyStoreId) { renderMyStoreProducts(_currentMyStoreId); return; }
   // Owners with exactly one store skip the picker — auto-enter that store.
   // Owners with two or more see the list so they can choose which to manage.
   var mine = (_storeProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase() || isAdmin(user.email);
   });
   if (mine.length === 1) {
      enterMyStore(mine[0].id);   // fetches stock then renders
   } else {
      renderMyStoresList();
   }
}

function renderMyStoresList() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var listView = document.getElementById('shopStoresListView');
   var prodView = document.getElementById('shopStoreProductsView');
   if (listView) listView.classList.remove('hidden');
   if (prodView) prodView.classList.add('hidden');

   var mine = (_storeProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase() || isAdmin(user.email);
   });
   var container = document.getElementById('shopMyStoresList');
   if (!container) return;
   if (!mine.length) {
      container.innerHTML = '<p class="shop-empty">No stores linked to your account yet. Ask the admin to assign you one (Admin \u2192 Stores \u2192 \u2795 Add Store).</p>';
      return;
   }
   container.innerHTML = mine.map(function(p) {
      var meta = STORE_CAT_META[p.category] || { icon: '\ud83c\udfea', label: p.category };
      var pid  = p.id.replace(/'/g, "\\'");
      var productCount = (_db.storeProducts || []).filter(function(x) { return x.store_provider_id === p.id; }).length;
      return '<div class="shop-store-card" onclick="enterMyStore(\'' + pid + '\')">' +
                '<div class="shop-store-icon">' + (p.icon || meta.icon) + '</div>' +
                '<div class="shop-store-info">' +
                   '<div class="shop-store-name">' + p.name + '</div>' +
                   '<div class="shop-store-meta">' + meta.icon + ' ' + meta.label + (p.address ? ' \u00b7 ' + p.address : '') + '</div>' +
                   '<div class="shop-store-meta" style="color:#1a73e8">\ud83d\udce6 ' + productCount + ' product' + (productCount === 1 ? '' : 's') + '</div>' +
                '</div>' +
                '<div class="shop-store-cta">Manage \u2192</div>' +
             '</div>';
   }).join('');
}

// Owner clicks ⏸ Pause / ▶ Resume Delivery on the store action bar.
// Flips delivery_paused on store_providers; existing in-flight delivery
// orders stay as delivery (owner must use per-order "Switch to pickup" for those).
async function toggleDeliveryPaused() {
   var btn = document.getElementById('shopDeliveryToggleBtn');
   if (!btn || !btn.dataset.storeId) return;
   var storeId = btn.dataset.storeId;
   var store = (_storeProvidersCache || []).find(function(s) { return s.id === storeId; });
   if (!store) return;
   var nextPaused = !store.delivery_paused;
   var msg = nextPaused
      ? 'Pause home delivery for "' + store.name + '"?\n\nNew customer orders will be forced to Pickup.\nExisting delivery orders STAY as delivery — switch them per-order if needed.'
      : 'Resume home delivery for "' + store.name + '"?\n\nNew customers can place delivery orders again.';
   if (!confirm(msg)) return;
   btn.disabled = true;
   var ok = await AppDB.setDeliveryPaused(storeId, nextPaused);
   btn.disabled = false;
   if (!ok) { alert('Failed to update delivery setting. Try again.'); return; }
   // Refresh cache + re-render
   store.delivery_paused = nextPaused;
   renderMyStoreProducts(storeId);
}

async function enterMyStore(storeId) {
   _currentMyStoreId = storeId;
   // Fetch inventory snapshot ONCE per store entry; downstream renders read
   // from _currentStockByProduct without re-fetching (was a bad recursion
   // bug previously — every search keystroke triggered another fetch).
   try {
      var rows = await AppDB.getBatchesForStore(storeId);
      _currentStockByProduct = {};
      (rows || []).forEach(function(b) {
         (_currentStockByProduct[b.product_id] = _currentStockByProduct[b.product_id] || []).push(b);
      });
   } catch (e) { _currentStockByProduct = {}; }
   renderMyStoreProducts(storeId);
}
function exitMyStore() {
   _currentMyStoreId = null;
   renderMyStoresList();
}

function renderMyStoreProducts(storeId) {
   var listView = document.getElementById('shopStoresListView');
   var prodView = document.getElementById('shopStoreProductsView');
   if (listView) listView.classList.add('hidden');
   if (prodView) prodView.classList.remove('hidden');

   // Live: react to store-level changes (e.g., admin updates store, or another
   // owner tab toggles delivery pause). Forces a cache refresh + re-render.
   if (typeof _liveSubscribe === 'function') {
      _liveSubscribe('storeProvsOwner', 'store_providers', async function() {
         await loadStoreProviders(true);
         renderMyStoreProducts(storeId);
      });
   }

   var store = (_storeProvidersCache || []).find(function(x) { return x.id === storeId; });
   if (!store) { exitMyStore(); return; }
   var meta = STORE_CAT_META[store.category] || { icon: '\ud83c\udfea', label: store.category };

   // Hide the "\u2190 My Stores" back button for single-store owners (no list to go back to).
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var owned = (_storeProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   var backBtn = document.getElementById('shopStoreBackBtn');
   if (backBtn) backBtn.classList.toggle('hidden', owned.length < 2);

   // Inline meta strip \u2014 all on one line beside the back button & action buttons.
   var metaEl = document.getElementById('shopStoreMeta');
   if (metaEl) {
      var parts = ['<strong>' + meta.icon + ' ' + meta.label + '</strong>'];
      if (store.tagline) parts.push(store.tagline);
      if (store.address) parts.push('\ud83d\udccd ' + store.address);
      if (store.timing)  parts.push('\ud83d\udd52 ' + store.timing);
      if (store.phone)   parts.push('\ud83d\udcde ' + store.phone);
      if (store.door_delivery && store.delivery_paused) {
         parts.push('<span style="color:#c62828;font-weight:600">\u23f8 Delivery paused</span>');
      }
      metaEl.innerHTML = parts.join(' \u00b7 ');
   }

   // Delivery pause toggle: visible only for stores that have door_delivery enabled.
   var dlvBtn = document.getElementById('shopDeliveryToggleBtn');
   if (dlvBtn) {
      if (store.door_delivery) {
         dlvBtn.classList.remove('hidden');
         dlvBtn.dataset.storeId = store.id;
         if (store.delivery_paused) {
            dlvBtn.textContent = '\u25b6 Resume Delivery';
            dlvBtn.style.background = '#2e7d32';
            dlvBtn.title = 'Click to resume accepting home-delivery orders';
         } else {
            dlvBtn.textContent = '\u23f8 Pause Delivery';
            dlvBtn.style.background = '#c62828';
            dlvBtn.title = 'Click to pause home-delivery orders (existing orders stay as delivery; new orders forced to pickup)';
         }
      } else {
         dlvBtn.classList.add('hidden');
      }
   }

   // Filter products by store_provider_id (new model).
   _currentMyStoreProds = (_db.storeProducts || [])
      .filter(function(p) { return p.store_provider_id === storeId; })
      .map(function(p) {
         return { id: p.id, name: p.name, price: p.price, desc: p.description,
                  img: p.image, badge: p.badge, catKey: p.category,
                  reorder_point: p.reorder_point || 0,
                  sell_unit: p.sell_unit || 'strip',
                  units_per_pack: p.units_per_pack || 1,
                  catalog_item_id: p.catalog_item_id || null,
                  catalog_name: p.catalog_item_id ? p.name : null,
                  variants: p.variants || undefined };
      });
   // Batch snapshot is fetched ONCE per store entry (in enterMyStore), not here.
   // Calling it from inside renderMyStoreProducts caused an infinite re-render
   // loop on every search keystroke + broke button onclick indices.

   var container = document.getElementById('shopProductList');
   if (!container) return;
   // Apply the chosen list/grid view class (also refreshes the toggle button text)
   var view = _getShopProductsView();
   container.classList.toggle('grid', view === 'grid');
   _applyShopProductsViewToggle();
   if (!_currentMyStoreProds.length) {
      container.innerHTML = '<p class="shop-empty">No products in this store yet. Click \u2795 Add Product or \ud83d\udce6 Bulk Add to get started.</p>';
      return;
   }

   // Counter-staff search \u2014 filter the list as owner types.
   // Sort dropdown applies after the filter.
   var q    = ((document.getElementById('shopProductSearch') || {}).value || '').trim().toLowerCase();
   var sort =  (document.getElementById('shopProductSort')   || {}).value || '';
   var visible = _currentMyStoreProds.slice();
   if (q) {
      visible = visible.filter(function(p) {
         var hay = ((p.name || '') + ' ' + (p.desc || '')).toLowerCase();
         return hay.indexOf(q) !== -1;
      });
      if (!visible.length) {
         container.innerHTML = '<p class="shop-empty">No products match "<strong>' + q + '</strong>" in this store.</p>';
         return;
      }
   }
   if (sort === 'price-asc')  visible.sort(function(a,b){ return (a.price||0) - (b.price||0); });
   if (sort === 'price-desc') visible.sort(function(a,b){ return (b.price||0) - (a.price||0); });
   if (sort === 'name-asc')   visible.sort(function(a,b){ return (a.name||'').localeCompare(b.name||''); });

   container.innerHTML = visible.map(function(p) {
      // Use the product's real index in _currentMyStoreProds so edit/delete buttons work
      var idx = _currentMyStoreProds.indexOf(p);
      var stockBadge = _stockBadgeFor(p);
      var imgSrc = (p.img && p.img.trim()) ? p.img : _ITEM_PLACEHOLDER_DATA;
      return '<div class="shop-prod-card">' +
                '<img src="' + imgSrc + '" onerror="_fallbackItemImg(this)"/>' +
                '<div class="shop-prod-info">' +
                   '<div class="shop-prod-name">' + p.name + stockBadge + '</div>' +
                   '<div class="shop-prod-meta">\u20b9' + (p.price || 0).toLocaleString('en-IN') + ' \xb7 ' + (p.desc || '') + '</div>' +
                '</div>' +
                '<div class="shop-prod-actions">' +
                   '<button title="Manage Stock"   onclick="openStockModal(\'' + p.id.replace(/\'/g,"\\'") + '\')">\ud83d\udce6</button>' +
                   '<button title="Edit product"   onclick="openStoreProductModal(' + idx + ')">\u270f\ufe0f</button>' +
                   '<button title="Delete product" onclick="deleteStoreProduct(' + idx + ')">\ud83d\uddd1</button>' +
                '</div>' +
             '</div>';
   }).join('');
}

// In-memory snapshot of all batches for the current store. Refreshed when the
// owner opens a store or saves/deletes a batch.
var _currentStockByProduct = {};   // product_id \u2192 array of batches

function _stockBadgeFor(p) {
   var batches = _currentStockByProduct[p.id] || [];
   if (!batches.length) return ' <span class="shop-stock-badge oos">Out of stock</span>';
   var totalRemaining = batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
   if (totalRemaining <= 0) return ' <span class="shop-stock-badge oos">Out of stock</span>';
   if (p.reorder_point && totalRemaining <= Number(p.reorder_point))
      return ' <span class="shop-stock-badge low">Low \u2014 ' + totalRemaining + '</span>';
   // Expiring soon?
   var soon = new Date(); soon.setMonth(soon.getMonth() + 3);
   var expiringSoon = batches.some(function(b) {
      if (!b.expiry_date) return false;
      var d = new Date(b.expiry_date);
      return !isNaN(d) && d <= soon && (Number(b.qty_remaining) || 0) > 0;
   });
   if (expiringSoon) return ' <span class="shop-stock-badge expiring">Expiring soon</span>';
   return ' <span class="shop-stock-badge ok">In stock: ' + totalRemaining + '</span>';
}

var _editProdIdx = -1;

// Map store-category (admin's catalogue category) → default product-category
// (the sub-section a new product lands under on the customer site).
const STORE_TO_PRODUCT_CATEGORY = {
   medical:      'medicines',
   electronics:  'electronics',
   electrical:   'electronics',
   fancy:        'personalcare',
   general:      'groceries',
   wholesale:    'groceries',
   construction: 'utensils'   // closest match in current product subcats
};

function openStoreProductModal(idx) {
   if (!_currentMyStoreId) { alert('Open a store first.'); return; }
   _editProdIdx = idx;
   var p = idx >= 0 ? _currentMyStoreProds[idx] : null;

   // Smart default for the product sub-category: pick what fits the store's
   // category (medical store → medicines, etc.) instead of the first key.
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   var defaultCatKey = (store && STORE_TO_PRODUCT_CATEGORY[store.category])
                       || Object.keys(products)[0];

   document.getElementById('sp-modal-title').textContent = p ? 'Edit Item' : 'Add Item';
   document.getElementById('sp-name').value  = p ? p.name  : '';
   document.getElementById('sp-price').value = p ? p.price : '';
   document.getElementById('sp-desc').value  = p ? p.desc  : '';
   document.getElementById('sp-img').value   = p ? p.img   : '';
   document.getElementById('sp-badge').value = p ? (p.badge || '') : '';
   document.getElementById('sp-catkey').value = p ? p.catKey : defaultCatKey;
   // Catalogue-side fields start blank; if this product is linked to a
   // catalogue entry, fetch it asynchronously and prefill (Bug-fix: previously
   // we relied on phantom _composition / _pack / _dose fields that nobody sets).
   document.getElementById('sp-brand').value       = p ? (p.desc || '') : '';
   document.getElementById('sp-composition').value = '';
   document.getElementById('sp-pack').value        = '';
   document.getElementById('sp-dose').value        = '';
   document.getElementById('sp-units').value       = '';
   document.getElementById('sp-expiry').value      = '';
   document.getElementById('sp-hsn').value         = '3004';
   document.getElementById('sp-rx').checked        = false;
   if (p && p.catalog_item_id) {
      AppDB.getCatalogItemById(p.catalog_item_id).then(function(it) {
         if (!it) return;
         var attrs = it.attrs || {};
         var setIf = function(id, v) {
            var el = document.getElementById(id);
            if (el && !el.value) el.value = (v == null ? '' : v);
         };
         setIf('sp-brand',       it.brand);
         setIf('sp-composition', attrs.composition);
         setIf('sp-pack',        attrs.pack_size);
         setIf('sp-dose',        attrs.dose);
         setIf('sp-units',       attrs.units_per_strip);
         setIf('sp-expiry',      attrs.expiry_date);
         setIf('sp-hsn',         attrs.hsn);
         var rxEl = document.getElementById('sp-rx');
         if (rxEl) rxEl.checked = !!attrs.rx_required;
      });
   }

   // Catalogue link (Phase 5.4b)
   var catSearch  = document.getElementById('sp-catalog-search');
   var catChip    = document.getElementById('sp-catalog-chip');
   var catChipNm  = document.getElementById('sp-catalog-chip-name');
   var catHidden  = document.getElementById('sp-catalog-item-id');
   if (catSearch) catSearch.value = '';
   if (catHidden) catHidden.value = p && p.catalog_item_id ? p.catalog_item_id : '';
   if (p && p.catalog_item_id && p.catalog_name) {
      if (catChipNm) catChipNm.textContent = p.catalog_name;
      if (catChip)   catChip.classList.remove('hidden');
      if (catSearch && catSearch.parentNode) catSearch.parentNode.style.display = 'none';
   } else {
      if (catChip)   catChip.classList.add('hidden');
      if (catSearch && catSearch.parentNode) catSearch.parentNode.style.display = '';
   }
   var resBox = document.getElementById('sp-catalog-results');
   if (resBox) resBox.classList.add('hidden');

   previewStoreProductImg();
   var modal = document.getElementById('shopProductModal');
   modal.classList.remove('hidden');
   // Reset internal scroll so the title + catalogue picker are visible on open.
   var inner = modal.querySelector('.sp-modal');
   if (inner) inner.scrollTop = 0;
   var body = modal.querySelector('.sp-modal-body');
   if (body) body.scrollTop = 0;
}

// Live search of the master catalogue scoped to the current store's category.
// Results pre-fill name/brand/price/image when the owner picks an entry.
var _catalogSearchTimer = null;
function searchCatalogForOwner() {
   clearTimeout(_catalogSearchTimer);
   _catalogSearchTimer = setTimeout(_doCatalogSearch, 200);
}
async function _doCatalogSearch() {
   var input = document.getElementById('sp-catalog-search');
   var box   = document.getElementById('sp-catalog-results');
   if (!input || !box) return;
   var q = (input.value || '').trim();
   if (q.length < 2) { box.classList.add('hidden'); box.innerHTML = ''; return; }

   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   var cat   = store ? store.category : null;
   if (!cat) { box.classList.add('hidden'); return; }

   // Server-side ilike — fast even with 250K items in the table.
   var hits = await AppDB.getCatalogItems(cat, { search: q, limit: 12 });

   if (!hits.length) {
      box.innerHTML = '<div class="sp-catalog-result-empty">No matches in catalogue. Fill the form below for a custom item, or ask admin to add it.</div>';
      box.classList.remove('hidden');
      return;
   }
   box.innerHTML = hits.map(function(it) {
      var img = it.image_url ? '<img src="' + it.image_url + '" onerror="this.style.display=\'none\'"/>' : '<span style="font-size:1.4rem">💊</span>';
      var iid = it.id.replace(/'/g, "\\'");
      return '<div class="sp-catalog-result">' +
                '<div class="sp-catalog-result-img" onclick="pickCatalogItem(\'' + iid + '\')">' + img + '</div>' +
                '<div class="sp-catalog-result-info" onclick="pickCatalogItem(\'' + iid + '\')">' +
                   '<div class="sp-catalog-result-name">' + (it.name || '') + '</div>' +
                   '<div class="sp-catalog-result-meta">' + (it.brand || '') + (it.price ? ' · ₹' + Number(it.price).toLocaleString('en-IN') : '') + '</div>' +
                '</div>' +
                '<button class="sp-catalog-info-btn" onclick="event.stopPropagation();showCompositionDetails(\'' + iid + '\')" title="Show composition + alternatives">ℹ️</button>' +
              '</div>';
   }).join('');
   box.classList.remove('hidden');
}

async function pickCatalogItem(itemId) {
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   if (!store) return;
   var it = await AppDB.getCatalogItemById(itemId);
   if (!it) return;

   // Prefill the form fields — common + catalogue-side
   var attrs = it.attrs || {};
   document.getElementById('sp-name').value        = it.name  || '';
   document.getElementById('sp-price').value       = it.price != null ? it.price : '';
   document.getElementById('sp-img').value         = it.image_url || '';
   document.getElementById('sp-desc').value        = it.brand ? it.brand : '';
   document.getElementById('sp-brand').value       = it.brand || '';
   document.getElementById('sp-composition').value = attrs.composition || '';
   document.getElementById('sp-pack').value        = attrs.pack_size || '';
   document.getElementById('sp-dose').value        = attrs.dose || '';
   document.getElementById('sp-units').value       = attrs.units_per_strip || '';
   document.getElementById('sp-expiry').value      = attrs.expiry_date || '';
   document.getElementById('sp-hsn').value         = attrs.hsn || '3004';
   document.getElementById('sp-rx').checked        = !!attrs.rx_required;
   document.getElementById('sp-catalog-item-id').value = it.id;

   // Show "linked to" chip, hide the search input
   document.getElementById('sp-catalog-chip-name').textContent = it.name + (it.brand ? ' · ' + it.brand : '');
   document.getElementById('sp-catalog-chip').classList.remove('hidden');
   var search = document.getElementById('sp-catalog-search');
   if (search && search.parentNode) search.parentNode.style.display = 'none';
   var res = document.getElementById('sp-catalog-results');
   if (res) res.classList.add('hidden');

   previewStoreProductImg();
}

// ── Shop-owner: bulk-add many catalogue items as products in one go ──
// Picked items survive across searches so an owner can build up "20 paracetamols
// + 15 antibiotics + 10 cough syrups" and commit all of them in a single click.
var _bulkAddPicked = {};   // id → catalog_item row
var _bulkAddSearchTimer = null;

function openBulkAddModal() {
   if (!_currentMyStoreId) { alert('Open a store first.'); return; }
   _bulkAddPicked = {};
   document.getElementById('bulkAddSearch').value = '';
   document.getElementById('bulkAddResults').innerHTML =
      '<p style="color:#888;text-align:center;padding:30px">Type a search above to find items.</p>';
   _bulkAddRenderSelectedBar();
   var modal = document.getElementById('bulkAddModal');
   modal.classList.remove('hidden');
   var inner = modal.querySelector('.sp-modal'); if (inner) inner.scrollTop = 0;
   setTimeout(function() { document.getElementById('bulkAddSearch').focus(); }, 100);
}

function closeBulkAddModal() {
   document.getElementById('bulkAddModal').classList.add('hidden');
   _bulkAddPicked = {};
}

function bulkAddDoSearch() {
   clearTimeout(_bulkAddSearchTimer);
   _bulkAddSearchTimer = setTimeout(_bulkAddRunSearch, 220);
}

async function _bulkAddRunSearch() {
   var q = (document.getElementById('bulkAddSearch').value || '').trim();
   var box = document.getElementById('bulkAddResults');
   if (q.length < 2) {
      box.innerHTML = '<p style="color:#888;text-align:center;padding:30px">Type 2+ characters to search the catalogue.</p>';
      return;
   }
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   if (!store) return;
   box.innerHTML = '<p style="color:#888;text-align:center;padding:30px">Searching…</p>';
   var hits = await AppDB.getCatalogItems(store.category, { search: q, limit: 50 });
   if (!hits.length) {
      box.innerHTML = '<p style="color:#888;text-align:center;padding:30px">No matches for "<strong>' + q + '</strong>".</p>';
      return;
   }
   box.innerHTML = hits.map(function(it) {
      var iid = it.id.replace(/'/g, "\\'");
      var checked = !!_bulkAddPicked[it.id];
      var price = (it.price != null) ? '₹' + Number(it.price).toLocaleString('en-IN') : '—';
      var img = it.image_url ? '<img src="' + it.image_url + '" onerror="this.style.display=\'none\'"/>' : '<span style="font-size:1.4rem">💊</span>';
      return '<label class="bulk-add-row' + (checked ? ' checked' : '') + '">' +
                '<input type="checkbox" ' + (checked ? 'checked' : '') + ' onchange="bulkAddToggle(\'' + iid + '\', this.checked)"/>' +
                '<div class="bulk-add-img">' + img + '</div>' +
                '<div class="bulk-add-info">' +
                   '<div class="bulk-add-name">' + (it.name || '') + '</div>' +
                   '<div class="bulk-add-meta">' + (it.brand || '') + '</div>' +
                '</div>' +
                '<div class="bulk-add-price">' + price + '</div>' +
              '</label>';
   }).join('');
}

function bulkAddToggle(id, checked) {
   if (checked) {
      // We don't have the full item in cache here — re-fetch quickly so we know all its fields at save time
      AppDB.getCatalogItemById(id).then(function(it) {
         if (it) _bulkAddPicked[id] = it;
         _bulkAddRenderSelectedBar();
      });
   } else {
      delete _bulkAddPicked[id];
      _bulkAddRenderSelectedBar();
   }
}

function bulkAddClearAll() {
   _bulkAddPicked = {};
   _bulkAddRenderSelectedBar();
   _bulkAddRunSearch();   // re-render to uncheck visible boxes
}

function _bulkAddRenderSelectedBar() {
   var n = Object.keys(_bulkAddPicked).length;
   var bar = document.getElementById('bulkAddSelectedBar');
   var count = document.getElementById('bulkAddSelectedCount');
   var btn = document.getElementById('bulkAddSaveBtn');
   if (count) count.textContent = n;
   if (bar)   bar.classList.toggle('hidden', n === 0);
   if (btn) {
      btn.disabled = (n === 0);
      btn.textContent = '📦 Add ' + n + ' Product' + (n === 1 ? '' : 's');
   }
}

async function bulkAddSaveAll() {
   var ids = Object.keys(_bulkAddPicked);
   if (!ids.length) return;
   var btn = document.getElementById('bulkAddSaveBtn');
   if (btn) { btn.disabled = true; btn.textContent = 'Adding…'; }

   var user  = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   if (!store) { alert('Lost track of store. Reload and try again.'); return; }

   var defaultCatKey = STORE_TO_PRODUCT_CATEGORY[store.category] || 'medicines';
   var rows = ids.map(function(id, i) {
      var it = _bulkAddPicked[id];
      return {
         id:                'sp_' + (user.email || 'admin').split('@')[0] + '_' + Date.now() + '_' + i,
         name:              it.name || '',
         price:             (typeof it.price === 'number' ? it.price : parseFloat(it.price) || 0),
         description:       it.brand || '',
         image:             it.image_url || '',
         category:          defaultCatKey,
         badge:             'New',
         store_id:          store.owner_email || user.email,
         store_name:        store.name || user.storeName || user.name || '',
         store_provider_id: _currentMyStoreId,
         catalog_item_id:   it.id,
         rx_required:       !!(it.attrs && it.attrs.rx_required),
         variants:          null
      };
   });

   // Bulk POST — single round-trip is fine for batches up to ~500
   var ok = 0, fail = 0;
   var CHUNK = 200;
   for (var s = 0; s < rows.length; s += CHUNK) {
      var batch = rows.slice(s, s + CHUNK);
      var success = await AppDB.bulkUpsertProducts(batch);
      if (success) ok += batch.length; else fail += batch.length;
   }

   // Refresh local cache + re-render
   _db.storeProducts = (_db.storeProducts || []).concat(rows);
   _applyStoreProdsToProducts();
   alert('✅ Added ' + ok + ' product' + (ok === 1 ? '' : 's') + '.' + (fail ? '\n❌ ' + fail + ' failed.' : ''));
   closeBulkAddModal();
   renderMyStoreProducts(_currentMyStoreId);
}

// ── Shop-owner: Walk-in Bill (counter sale, customer at the shop) ────
// Owner adds items to a fresh bill, optionally captures name+phone+doctor,
// saves an order (status=Completed), and prints the same Sri Meghana–style bill.
var _walkinItems = [];        // [{ id, name, qty, mrp, disc_pct, rx_required }]
var _walkinSearchTimer = null;

// Tracks whether the walk-in modal has live state. We deliberately don't
// reset _walkinItems / inputs unless the cashier explicitly clicks Cancel
// or saves a bill — minimizing parks the bill so they can pop back in.
var _walkinMinimized = false;

// Top-level button (next to the tabs) — sets the store context for single-store
// owners so they don't have to navigate into Products first.
async function openWalkinBillFromTab() {
   // If a bill is minimized, the top-tab button restores it instead of starting fresh
   if (_walkinMinimized) { restoreWalkinBillModal(); return; }
   if (!_currentMyStoreId) {
      var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
      var mine = (_storeProvidersCache || []).filter(function(p) {
         return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
      });
      if (mine.length === 0) { alert('No stores assigned to you yet.'); return; }
      if (mine.length === 1) { await enterMyStore(mine[0].id); }
      else { alert('You manage multiple stores. Open the store first in 🏪 My Stores → then click Walk-in Bill.'); return; }
   }
   openWalkinBillModal();
}

function openWalkinBillModal() {
   if (!_currentMyStoreId) { alert('Open a store first.'); return; }
   // If the modal is minimized, just restore it (don't wipe in-progress work)
   if (_walkinMinimized) { restoreWalkinBillModal(); return; }
   _walkinItems = [];
   ['walkin-name','walkin-phone','walkin-doctor','walkin-item-search'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
   });
   var res = document.getElementById('walkin-item-results');
   if (res) { res.innerHTML = ''; res.classList.add('hidden'); }
   var banner = document.getElementById('walkin-history-banner');
   if (banner) { banner.classList.add('hidden'); banner.innerHTML = ''; }
   _renderWalkinTable();
   var modal = document.getElementById('walkinBillModal');
   modal.classList.remove('hidden');
   var inner = modal.querySelector('.sp-modal'); if (inner) inner.scrollTop = 0;
   setTimeout(function() { document.getElementById('walkin-name').focus(); }, 100);
}

function closeWalkinBillModal() {
   if (_walkinItems.length && !confirm('Discard this bill? Items will be lost.\n\n(Tip: click 🗕 to minimize instead — the bill stays open in the background.)')) {
      return;
   }
   var modal = document.getElementById('walkinBillModal');
   modal.classList.add('hidden');
   // Reset drag position so the next fresh bill opens centered
   var inner = modal.querySelector('.sp-modal');
   if (inner) { inner.style.position = ''; inner.style.left = ''; inner.style.top = ''; inner.style.margin = ''; }
   _walkinItems = [];
   _walkinMinimized = false;
   document.getElementById('walkinMinimizedPill').classList.add('hidden');
}

// Hide modal but keep _walkinItems + form values intact. A floating pill at
// bottom-right reminds the cashier the bill is parked.
function minimizeWalkinBillModal() {
   document.getElementById('walkinBillModal').classList.add('hidden');
   _walkinMinimized = true;
   var pill = document.getElementById('walkinMinimizedPill');
   var count = document.getElementById('walkinMiniCount');
   if (count) {
      var totalQty = _walkinItems.reduce(function(s, it) { return s + (it.qty || 0); }, 0);
      count.textContent = totalQty + ' item' + (totalQty === 1 ? '' : 's');
   }
   if (pill) pill.classList.remove('hidden');
}

function restoreWalkinBillModal() {
   _walkinMinimized = false;
   document.getElementById('walkinMinimizedPill').classList.add('hidden');
   document.getElementById('walkinBillModal').classList.remove('hidden');
}

// ── Make the walk-in modal draggable by its header ───────────────────
// Idempotent — safe to call on every page load; binds once via a flag.
function _bindWalkinDrag() {
   var modal = document.getElementById('walkinBillModal');
   if (!modal || modal.dataset.dragBound) return;
   var inner = modal.querySelector('.sp-modal');
   var header = modal.querySelector('.sp-modal-header');
   if (!inner || !header) return;
   modal.dataset.dragBound = '1';

   var dragging = false, startX = 0, startY = 0, originX = 0, originY = 0;

   header.addEventListener('mousedown', function(e) {
      // Don't start a drag from header buttons (minimize / close)
      if (e.target.closest('button')) return;
      dragging = true;
      var rect = inner.getBoundingClientRect();
      // Switch from flex centering to absolute positioning so we can move freely
      inner.style.position = 'fixed';
      inner.style.left = rect.left + 'px';
      inner.style.top  = rect.top  + 'px';
      inner.style.margin = '0';
      startX = e.clientX; startY = e.clientY;
      originX = rect.left; originY = rect.top;
      inner.classList.add('dragging-modal');
      e.preventDefault();
   });

   document.addEventListener('mousemove', function(e) {
      if (!dragging) return;
      var nx = originX + (e.clientX - startX);
      var ny = originY + (e.clientY - startY);
      // Clamp so it stays at least partly on screen
      var w = inner.offsetWidth, h = inner.offsetHeight;
      var maxX = window.innerWidth  - 60;
      var maxY = window.innerHeight - 60;
      nx = Math.min(Math.max(nx, -(w - 200)), maxX);
      ny = Math.min(Math.max(ny, 0), maxY);
      inner.style.left = nx + 'px';
      inner.style.top  = ny + 'px';
   });

   document.addEventListener('mouseup', function() {
      if (!dragging) return;
      dragging = false;
      inner.classList.remove('dragging-modal');
   });
}

// Bind once when the page loads (idempotent)
document.addEventListener('DOMContentLoaded', _bindWalkinDrag);
// Also call on first open in case the markup is injected after DOMContentLoaded
if (typeof window !== 'undefined') {
   window.addEventListener('load', _bindWalkinDrag);
}

// ── Walk-in customer history ───────────────────────────────────────────
// When the cashier blurs the Name or Phone field, look up previous bills
// from this store for that customer. If matches are found, show a banner
// inside the modal with a "View" button → opens a popup that lists each
// past bill with items + a "Repeat this bill" action that copies the items
// into the current cart.
async function walkinLookupHistory() {
   if (!_currentMyStoreId) return;
   var phone = (document.getElementById('walkin-phone').value || '').trim();
   var name  = (document.getElementById('walkin-name').value  || '').trim();
   if (!phone && name.length < 3) return;   // need a real signal
   var prior = await AppDB.findWalkinOrders(_currentMyStoreId, { phone: phone, name: name });
   var banner = document.getElementById('walkin-history-banner');
   if (!banner) return;
   if (!prior.length) { banner.classList.add('hidden'); banner.innerHTML = ''; return; }
   window._walkinHistoryCache = prior;
   banner.innerHTML =
      '<div>🕘 <strong>' + prior.length + ' previous bill' + (prior.length === 1 ? '' : 's') + '</strong> for this customer at this store.</div>' +
      '<button onclick="openWalkinHistory()">View &amp; repeat →</button>';
   banner.classList.remove('hidden');
}

function openWalkinHistory() {
   var prior = window._walkinHistoryCache || [];
   var body = document.getElementById('walkinHistoryBody');
   if (!prior.length) { body.innerHTML = '<p style="text-align:center;color:#888;padding:30px">No previous bills.</p>'; }
   else {
      body.innerHTML = prior.map(function(o, idx) {
         var items = o.items || [];
         var rows = items.map(function(it) {
            return '<div class="row"><span>' + it.name + ' × ' + it.qty + '</span>' +
                   '<span>₹' + Number(it.mrp || it.price || 0).toFixed(2) + '</span></div>';
         }).join('');
         return '<div class="walkin-history-bill">' +
                   '<div class="walkin-history-bill-head">' +
                      '<div><strong>' + (o.orderId || '—') + '</strong> <span class="meta">· ' + (o.date || '') + '</span></div>' +
                      '<div><span class="total">₹' + Number(o.total || 0).toFixed(2) + '</span> ' +
                         '<button class="walkin-repeat-btn" onclick="repeatWalkinBill(' + idx + ')">↻ Repeat this bill</button>' +
                      '</div>' +
                   '</div>' +
                   '<div class="walkin-history-bill-items">' + (rows || '<em style="color:#888">No items</em>') + '</div>' +
                '</div>';
      }).join('');
   }
   document.getElementById('walkinHistoryModal').classList.remove('hidden');
}

function closeWalkinHistory() {
   document.getElementById('walkinHistoryModal').classList.add('hidden');
}

// Append a past bill's items into the current cart. Quantities accumulate
// if the same item is already in the cart, so cashier can repeat + tweak.
function repeatWalkinBill(idx) {
   var prior = (window._walkinHistoryCache || [])[idx];
   if (!prior) return;
   (prior.items || []).forEach(function(it) {
      var existing = _walkinItems.find(function(x) { return x.id === it.id; });
      if (existing) { existing.qty += Number(it.qty) || 1; }
      else {
         _walkinItems.push({
            id:      it.id,
            name:    it.name,
            qty:     Number(it.qty) || 1,
            mrp:     Number(it.mrp || it.price) || 0,
            disc_pct: Number(it.disc_pct) || 0,
            rx_required: !!it.rx_required
         });
      }
   });
   _renderWalkinTable();
   closeWalkinHistory();
}

async function walkinLookupByPhone() {
   var phone = (document.getElementById('walkin-phone').value || '').trim();
   if (!phone) return;
   var existing = await AppDB.findWalkinByPhone(_currentMyStoreId, phone);
   if (existing && existing.name) {
      var nameEl = document.getElementById('walkin-name');
      if (nameEl && !nameEl.value.trim()) {
         nameEl.value = existing.name;
         nameEl.style.background = '#e8f5e9';   // brief highlight
         setTimeout(function() { nameEl.style.background = ''; }, 1500);
      }
   }
}

function walkinDoSearch() {
   clearTimeout(_walkinSearchTimer);
   _walkinSearchTimer = setTimeout(_walkinRunSearch, 220);
}

// ── Stock-aware helpers (FEFO inventory) ─────────────────────────────
// Returns total on-hand qty across all batches of one product in this store.
function _availableStock(productId) {
   var batches = _currentStockByProduct[productId] || [];
   return batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
}

// Build an FEFO deduction plan for the given items. Returns:
//   { updates: [{id, qty_remaining}, ...], shortfalls: [{name, needed, available}] }
// Doesn't write anything — caller must validate then dispatch.
function _planFEFODeduction(items) {
   var updates = [];
   var shortfalls = [];
   items.forEach(function(it) {
      var need = Number(it.qty) || 0;
      if (!need) return;
      var batches = (_currentStockByProduct[it.id] || []).slice();
      // Sort by expiry date ascending (oldest first). Batches without an
      // expiry go last so we don't burn them first by accident.
      batches.sort(function(a, b) {
         var da = a.expiry_date ? new Date(a.expiry_date).getTime() : Infinity;
         var db = b.expiry_date ? new Date(b.expiry_date).getTime() : Infinity;
         return da - db;
      });
      var remaining = need;
      for (var i = 0; i < batches.length && remaining > 0; i++) {
         var b = batches[i];
         var have = Number(b.qty_remaining) || 0;
         if (have <= 0) continue;
         var take = Math.min(have, remaining);
         updates.push({ batchRef: b, newRemaining: have - take });
         remaining -= take;
      }
      if (remaining > 0) {
         shortfalls.push({ name: it.name, needed: need, available: need - remaining });
      }
   });
   return { updates: updates, shortfalls: shortfalls };
}

// ── Batch allocations (per-line, owner-overridable) ──────────────────
// Each bill / walk-in line item carries allocations:
//   [{ batchId, batchNo, expiryDate, qty }, ...]
// where sum(qty) = item.qty. Default allocation is FEFO (oldest expiry first);
// the owner can re-distribute via the expandable batch picker on each line.
function _sortedBatchesForProduct(productId) {
   return (_currentStockByProduct[productId] || []).slice()
      .filter(function(b) { return Number(b.qty_remaining) > 0 || _allocationsUsingBatch(b.id) > 0; })
      .sort(function(a, b) {
         var da = a.expiry_date ? new Date(a.expiry_date).getTime() : Infinity;
         var db = b.expiry_date ? new Date(b.expiry_date).getTime() : Infinity;
         return da - db;
      });
}
// How many units of a batch are already claimed by other lines in the current
// bill — needed so we don't over-allocate the same batch across multiple items
// of the same product (rare but possible during merge from history etc.).
function _allocationsUsingBatch(batchId) {
   var pool = (window._currentEditableItems || []);
   return pool.reduce(function(s, it) {
      return s + (it.allocations || []).reduce(function(t, a) {
         return t + (a.batchId === batchId ? Number(a.qty) || 0 : 0);
      }, 0);
   }, 0);
}
// Build FEFO allocations for a product totalling `qty`. Returns array (possibly
// empty if no stock). Used on add-item and on main-row qty edit.
function _allocateFEFO(productId, qty) {
   var allocs = [];
   var need = Number(qty) || 0;
   if (need <= 0) return allocs;
   var batches = _sortedBatchesForProduct(productId);
   for (var i = 0; i < batches.length && need > 0; i++) {
      var b = batches[i];
      var have = Number(b.qty_remaining) || 0;
      if (have <= 0) continue;
      var take = Math.min(have, need);
      allocs.push({
         batchId:    b.id,
         batchNo:    b.batch_no || '',
         expiryDate: b.expiry_date || null,
         qty:        take
      });
      need -= take;
   }
   return allocs;
}
function _itemTotalQty(item) {
   if (item.allocations && item.allocations.length) {
      return item.allocations.reduce(function(s, a) { return s + (Number(a.qty) || 0); }, 0);
   }
   return Number(item.qty) || 0;
}
// Render the expandable batch picker for one line. `pool` selects which cart
// to update on edit: 'walkin' or 'bill'.
function _renderBatchPicker(item, itemIdx, pool) {
   var batches = _sortedBatchesForProduct(item.id);
   if (!batches.length) {
      return '<div style="padding:8px 12px;color:#c62828;font-size:0.85rem;background:#ffebee;border-radius:6px">⚠️ No batches on file for this product. Adjust stock in Manage Stock.</div>';
   }
   var allocByBatch = {};
   (item.allocations || []).forEach(function(a) { allocByBatch[a.batchId] = Number(a.qty) || 0; });
   var fn = pool === 'walkin' ? '_walkinEditAlloc' : '_billEditAlloc';
   var rows = batches.map(function(b) {
      var allocated = allocByBatch[b.id] || 0;
      var avail     = (Number(b.qty_remaining) || 0) + allocated;     // give the picker back what's already on this line
      var exp       = _formatMonthYear(b.expiry_date);
      var batchLbl  = (b.batch_no || '—') + (exp ? ' · Exp ' + exp : '');
      return '<tr>' +
                '<td style="padding:4px 8px">' + batchLbl + '</td>' +
                '<td style="padding:4px 8px;color:#888;font-size:0.82rem">' + avail + ' avail</td>' +
                '<td style="padding:4px 8px"><input type="number" min="0" step="1" max="' + avail + '" value="' + allocated + '" style="width:70px;padding:3px 6px;border:1px solid #ccc;border-radius:4px" oninput="' + fn + '(' + itemIdx + ',\'' + b.id.replace(/'/g, "\\'") + '\',this.value)"/></td>' +
             '</tr>';
   }).join('');
   return '<table style="width:100%;background:#fafbfc;border:1px solid #e6e8eb;border-radius:6px;border-collapse:collapse;margin-top:6px">' +
             '<thead><tr style="background:#eef3ff;font-size:0.82rem">' +
                '<th style="text-align:left;padding:4px 8px">Batch · Expiry</th>' +
                '<th style="text-align:left;padding:4px 8px">Available</th>' +
                '<th style="text-align:left;padding:4px 8px">Qty from this batch</th>' +
             '</tr></thead><tbody>' + rows + '</tbody></table>';
}
// Build a deduction plan from explicit per-line allocations (preferred over
// _planFEFODeduction once the bill UI surfaces batch pickers). Returns
//   { updates: [{batchRef, newRemaining}], shortfalls: [{name, reason}] }
function _planAllocatedDeduction(items) {
   var updates = [];
   var shortfalls = [];
   // Group allocations by batch so multiple items hitting the same batch
   // (rare) get summed before checking stock.
   var byBatch = {};
   items.forEach(function(it) {
      var totalQty = _itemTotalQty(it);
      if (!totalQty) return;
      if (!it.allocations || !it.allocations.length) {
         shortfalls.push({ name: it.name, reason: 'no batch allocated' });
         return;
      }
      var allocSum = it.allocations.reduce(function(s, a) { return s + (Number(a.qty) || 0); }, 0);
      if (allocSum !== totalQty) {
         shortfalls.push({ name: it.name, reason: 'batch allocations (' + allocSum + ') don\'t match line qty (' + totalQty + ')' });
         return;
      }
      it.allocations.forEach(function(a) {
         if (!a.batchId || !a.qty) return;
         byBatch[a.batchId] = (byBatch[a.batchId] || 0) + Number(a.qty);
      });
   });
   // Validate each batch has enough stock + build update set
   Object.keys(byBatch).forEach(function(batchId) {
      var need = byBatch[batchId];
      // Find the batch in any product's pool
      var found = null;
      Object.keys(_currentStockByProduct).some(function(pid) {
         var hit = (_currentStockByProduct[pid] || []).find(function(b) { return b.id === batchId; });
         if (hit) { found = hit; return true; }
         return false;
      });
      if (!found) { shortfalls.push({ name: 'batch ' + batchId, reason: 'batch not found' }); return; }
      var have = Number(found.qty_remaining) || 0;
      if (need > have) {
         shortfalls.push({ name: found.batch_no || batchId, reason: 'need ' + need + ', only ' + have + ' in batch' });
         return;
      }
      updates.push({ batchRef: found, newRemaining: have - need });
   });
   return { updates: updates, shortfalls: shortfalls };
}

// Dispatch the deduction plan to Supabase + update the in-memory cache so
// the next search / table-render reflects the new stock immediately.
async function _commitFEFODeduction(updates) {
   for (var i = 0; i < updates.length; i++) {
      var u = updates[i];
      var b = u.batchRef;
      // Update DB
      await AppDB.upsertInventoryBatch({
         id:                b.id,
         product_id:        b.product_id,
         store_provider_id: b.store_provider_id,
         batch_no:          b.batch_no,
         mfg_date:          b.mfg_date,
         expiry_date:       b.expiry_date,
         qty_received:      b.qty_received,
         qty_remaining:     u.newRemaining,
         mrp:               b.mrp,
         purchase_price:    b.purchase_price,
         notes:             b.notes
      });
      // Update local cache
      b.qty_remaining = u.newRemaining;
   }
}

function _walkinRunSearch() {
   var q = (document.getElementById('walkin-item-search').value || '').trim().toLowerCase();
   var box = document.getElementById('walkin-item-results');
   if (!box) return;
   if (q.length < 2) { box.classList.add('hidden'); box.innerHTML = ''; return; }
   var hits = _currentMyStoreProds.filter(function(p) {
      var hay = ((p.name || '') + ' ' + (p.desc || '')).toLowerCase();
      return hay.indexOf(q) !== -1;
   }).slice(0, 20);
   if (!hits.length) {
      box.innerHTML = '<div style="padding:10px;text-align:center;color:#888">No matches in this store.</div>';
      box.classList.remove('hidden'); return;
   }
   box.innerHTML = hits.map(function(p) {
      var pid = p.id.replace(/'/g, "\\'");
      var img = p.img ? '<img src="' + p.img + '" onerror="this.style.display=\'none\'"/>' : '<span style="font-size:1.4rem">💊</span>';
      var avail = _availableStock(p.id);
      var inCart = (_walkinItems.find(function(x) { return x.id === p.id; }) || {}).qty || 0;
      var remaining = avail - inCart;
      var stockTag, click, oos;
      if (avail <= 0) {
         stockTag = '<span style="background:#ffebee;color:#c62828;padding:1px 8px;border-radius:999px;font-size:0.78rem;font-weight:600">❌ Out of stock</span>';
         click = ''; oos = ' style="opacity:0.55;cursor:not-allowed"';
      } else if (remaining <= 0) {
         stockTag = '<span style="background:#fff3e0;color:#e65100;padding:1px 8px;border-radius:999px;font-size:0.78rem;font-weight:600">⚠️ All ' + avail + ' added</span>';
         click = ''; oos = ' style="opacity:0.55;cursor:not-allowed"';
      } else {
         var cls = remaining <= 5 ? 'background:#fff3e0;color:#e65100' : 'background:#e8f5e9;color:#1b5e20';
         stockTag = '<span style="' + cls + ';padding:1px 8px;border-radius:999px;font-size:0.78rem;font-weight:600">📦 ' + remaining + ' in stock</span>';
         click = ' onclick="addWalkinItem(\'' + pid + '\')"'; oos = '';
      }
      return '<div class="sp-catalog-result"' + click + oos + '>' +
                '<div class="sp-catalog-result-img">' + img + '</div>' +
                '<div class="sp-catalog-result-info">' +
                   '<div class="sp-catalog-result-name">' + p.name + (p.rx_required ? ' <span style="color:#c62828;font-size:0.78rem">⚠️Rx</span>' : '') + '</div>' +
                   '<div class="sp-catalog-result-meta">' + (p.desc || '') + ' · ₹' + Number(p.price || 0).toLocaleString('en-IN') + ' · ' + stockTag + '</div>' +
                '</div>' +
              '</div>';
   }).join('');
   box.classList.remove('hidden');
}

function addWalkinItem(productId) {
   var p = _currentMyStoreProds.find(function(x) { return x.id === productId; });
   if (!p) return;
   window._currentEditableItems = _walkinItems;     // for _allocationsUsingBatch
   var avail = _availableStock(productId);
   if (avail <= 0) {
      alert('❌ "' + p.name + '" is out of stock.\n\nAdd a new batch from Products → Stock before billing.');
      return;
   }
   var existing = _walkinItems.find(function(x) { return x.id === productId; });
   var currentQty = existing ? _itemTotalQty(existing) : 0;
   if (currentQty + 1 > avail) {
      alert('⚠️ Only ' + avail + ' unit' + (avail === 1 ? '' : 's') + ' of "' + p.name + '" in stock.\nAlready added: ' + currentQty + '. Cannot add more.');
      return;
   }
   if (existing) {
      // Re-FEFO with the new total — keeps allocations aligned with stock
      existing.allocations = _allocateFEFO(productId, currentQty + 1);
      existing.qty = _itemTotalQty(existing);
   } else {
      var item = {
         id:    p.id,
         name:  p.name,
         qty:   1,
         mrp:   Number(p.price) || 0,
         disc_pct: 0,
         rx_required: !!p.rx_required,
         allocations: []
      };
      item.allocations = _allocateFEFO(productId, 1);
      item.qty = _itemTotalQty(item);
      _walkinItems.push(item);
   }
   document.getElementById('walkin-item-search').value = '';
   document.getElementById('walkin-item-results').classList.add('hidden');
   _renderWalkinTable();
}

function _walkinEditLine(i, field, val) {
   if (!_walkinItems[i]) return;
   window._currentEditableItems = _walkinItems;
   var n = parseFloat(val);
   var clean = isNaN(n) || n < 0 ? 0 : n;
   if (field === 'qty') {
      var avail = _availableStock(_walkinItems[i].id);
      if (clean > avail) {
         clean = avail;
         alert('⚠️ Only ' + avail + ' unit' + (avail === 1 ? '' : 's') + ' of "' + _walkinItems[i].name + '" in stock. Quantity capped.');
      }
      // Re-allocate via FEFO when the main qty changes
      _walkinItems[i].allocations = _allocateFEFO(_walkinItems[i].id, clean);
      _walkinItems[i].qty = _itemTotalQty(_walkinItems[i]);
      _renderWalkinTable();   // re-render so the batch picker reflects new allocations
      return;
   }
   _walkinItems[i][field] = clean;
   _updateWalkinTotals(i);
}
// Owner explicitly sets qty for one batch on one line. Sums up to update item total.
function _walkinEditAlloc(itemIdx, batchId, val) {
   var it = _walkinItems[itemIdx];
   if (!it) return;
   var q = parseFloat(val); if (isNaN(q) || q < 0) q = 0;
   it.allocations = it.allocations || [];
   var alloc = it.allocations.find(function(a) { return a.batchId === batchId; });
   if (alloc) {
      if (q === 0) it.allocations = it.allocations.filter(function(a) { return a.batchId !== batchId; });
      else         alloc.qty = q;
   } else if (q > 0) {
      // Owner just enabled a batch that FEFO didn't pick — pull its metadata
      var b = (_currentStockByProduct[it.id] || []).find(function(x) { return x.id === batchId; });
      if (b) {
         it.allocations.push({
            batchId:    b.id,
            batchNo:    b.batch_no || '',
            expiryDate: b.expiry_date || null,
            qty:        q
         });
      }
   }
   it.qty = _itemTotalQty(it);
   _updateWalkinTotals(itemIdx);
   // Update the main-row qty cell only (don't full re-render; keep picker open)
   var rows = document.querySelectorAll('#walkin-items-table > table > tbody > tr.main-row');
   var row = rows[itemIdx];
   if (row) {
      var qtyCell = row.querySelector('.line-qty');
      if (qtyCell) qtyCell.textContent = it.qty;
   }
}
function _toggleWalkinBatchPicker(i) {
   var row = document.querySelector('#walkin-items-table .batch-row[data-idx="' + i + '"]');
   if (!row) return;
   row.classList.toggle('hidden');
}
function _updateWalkinTotals(highlightIdx) {
   var rows = document.querySelectorAll('#walkin-items-table tbody tr.main-row');
   _walkinItems.forEach(function(it, i) {
      var qty = _itemTotalQty(it);
      var net = it.mrp * qty * (1 - it.disc_pct / 100);
      if (rows[i]) {
         var netCell = rows[i].querySelector('.bill-line-net');
         if (netCell) netCell.textContent = '₹' + net.toFixed(2);
      }
   });
   var gross    = _walkinItems.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _walkinItems.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var net      = gross - lineDisc;
   var rounded  = Math.round(net);
   var sum = document.getElementById('walkin-summary');
   if (sum) sum.innerHTML =
      '<div>Gross: ₹' + gross.toFixed(2) + '</div>' +
      '<div>Line discounts: −₹' + lineDisc.toFixed(2) + '</div>' +
      '<div class="bill-net">Net Amount: ₹' + rounded.toFixed(2) + '</div>';
}
function _walkinRemoveLine(i) {
   _walkinItems.splice(i, 1);
   _renderWalkinTable();
}

function _renderWalkinTable() {
   var host = document.getElementById('walkin-items-table');
   if (!host) return;
   window._currentEditableItems = _walkinItems;
   if (!_walkinItems.length) {
      host.innerHTML = '<p style="color:#999;text-align:center;padding:20px;background:#fafbfc;border-radius:8px">No items yet. Use the search box above to add products.</p>';
      document.getElementById('walkin-summary').innerHTML = '';
      return;
   }
   var rows = _walkinItems.map(function(it, i) {
      var qty = _itemTotalQty(it);
      var net = it.mrp * qty * (1 - it.disc_pct / 100);
      var allocCount  = (it.allocations || []).length;
      var totalBatches = _sortedBatchesForProduct(it.id).length;
      var batchChip = totalBatches > 0
         ? '<span class="batch-chip" onclick="_toggleWalkinBatchPicker(' + i + ')" title="Click to allocate across batches">📦 Batches: ' + allocCount + '/' + totalBatches + ' ▾</span>'
         : '<span style="color:#c62828;font-size:0.78rem">⚠️ No batches</span>';
      var mainRow = '<tr class="main-row">' +
                '<td>' + (i+1) + '. ' + it.name + (it.rx_required ? ' <span style="color:#c62828;font-size:0.75rem">⚠️Rx</span>' : '') +
                   '<div style="margin-top:3px">' + batchChip + '</div>' +
                '</td>' +
                '<td class="line-qty" style="text-align:center;font-weight:600">' + qty + '</td>' +
                '<td><input type="number" min="0" step="0.01" value="' + it.mrp + '" oninput="_walkinEditLine(' + i + ',\'mrp\',this.value)"/></td>' +
                '<td><input type="number" min="0" max="100" step="0.1" value="' + it.disc_pct + '" oninput="_walkinEditLine(' + i + ',\'disc_pct\',this.value)"/></td>' +
                '<td class="bill-line-net">₹' + net.toFixed(2) + '</td>' +
                '<td><button class="apt-view-btn" style="background:#c62828" onclick="_walkinRemoveLine(' + i + ')">🗑</button></td>' +
             '</tr>';
      var pickerRow = '<tr class="batch-row hidden" data-idx="' + i + '"><td colspan="6" style="padding:0 12px 10px;background:#fafbfc">' + _renderBatchPicker(it, i, 'walkin') + '</td></tr>';
      return mainRow + pickerRow;
   }).join('');
   host.innerHTML =
      '<table class="bill-edit-table">' +
         '<thead><tr><th>Product</th><th style="width:60px">Qty</th><th style="width:90px">MRP ₹</th><th style="width:70px">Disc %</th><th style="width:90px">Net</th><th></th></tr></thead>' +
         '<tbody>' + rows + '</tbody>' +
      '</table>';

   _updateWalkinTotals();
}

async function saveWalkinBill(printAfter) {
   if (!_walkinItems.length) { alert('Add at least one item before saving.'); return; }
   if (!_currentMyStoreId) { alert('No store context.'); return; }

   // Use explicit per-line allocations the owner saw on screen; build the
   // deduction plan from those so what was billed matches what was deducted.
   var plan = _planAllocatedDeduction(_walkinItems);
   if (plan.shortfalls.length) {
      alert('❌ Cannot save — these items have no batch selected:\n\n' +
            plan.shortfalls.map(function(s) { return '• ' + s.name + ': ' + s.reason; }).join('\n') +
            '\n\nOpen 📦 Batches under each line and allocate quantities.');
      return;
   }

   var name   = document.getElementById('walkin-name').value.trim();
   var phone  = document.getElementById('walkin-phone').value.trim();
   var doctor = document.getElementById('walkin-doctor').value.trim();

   // Optional: save walk-in customer to local directory (only if phone supplied)
   if (phone) {
      var existing = await AppDB.findWalkinByPhone(_currentMyStoreId, phone);
      if (!existing) {
         await AppDB.upsertWalkinCustomer({
            id:                'wic_' + Date.now().toString(36),
            store_provider_id: _currentMyStoreId,
            name:              name,
            phone:             phone
         });
      }
   }

   var owner = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; }) || {};
   var now = new Date();
   var yy = String(now.getFullYear()).slice(2);
   var mm = String(now.getMonth() + 1).padStart(2, '0');
   var dd = String(now.getDate()).padStart(2, '0');
   var orderId = 'WLK-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
   var gross    = _walkinItems.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _walkinItems.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var net = gross - lineDisc;

   var order = {
      orderId: orderId, order_id: orderId,
      date: now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      customerName:  name  || 'Walk-in customer',
      customerEmail: '',
      customerPhone: phone || '',
      items: _walkinItems.map(function(it) {
         return { id: it.id, name: it.name, qty: _itemTotalQty(it), price: it.mrp, mrp: it.mrp, disc_pct: it.disc_pct, rx_required: it.rx_required, allocations: it.allocations || [] };
      }),
      total: net,
      method: 'Walk-in',
      status: 'Completed',                  // counter sale — already paid, just print
      storeId: store.owner_email || owner.email,
      storeName: store.name || '',
      store_provider_id: _currentMyStoreId,
      payment_mode: 'CASH',
      doctor_name:  doctor,
      walk_in:      true,
      stock_deducted: true       // we deduct inline via _commitFEFODeduction below
   };
   _db.orders.unshift(order);
   var ok = await AppDB.insertOrder(order);
   if (!ok) { alert('Failed to save bill.'); return; }

   // Order persisted — now deduct stock from inventory_batches using the
   // explicit per-line allocations the owner just confirmed on screen.
   // We use the plan computed at the top of this function so the deduction
   // matches exactly what we validated against.
   try { await _commitFEFODeduction(plan.updates); } catch (e) { console.error('Stock deduction failed:', e); }

   if (printAfter) {
      // Hand off to the existing bill-template renderer
      _billOrder = order;
      _billOrder.items = _walkinItems.slice();
      _billDiscountPct = 0;
      await generatePrintableBill();
   }
   // Clear cart before closing so the discard-confirm in closeWalkinBillModal
   // doesn't trip on a successful save
   _walkinItems = [];
   closeWalkinBillModal();
   renderShopDashboard(window._shopCurrentFilter);
}

// ── Shop-owner: edit order line items + generate printable bill ──────
var _billOrder = null;       // shallow copy of the order being edited
var _billDiscountPct = 0;    // overall discount percentage

async function openOrderBillModal(orderId) {
   var o = _db.orders.find(function(x) { return x.orderId === orderId || x.order_id === orderId; });
   if (!o) { alert('Order not found.'); return; }
   _billOrder = JSON.parse(JSON.stringify(o));   // deep clone so cancel doesn't mutate

   // Load this order's store's batch inventory + product list so the
   // per-line batch picker and "Add item to this order" search have data to
   // work with. The owner may be on Orders tab without having "entered" the
   // store via My Stores → so we fetch fresh keyed off the order itself.
   if (_billOrder.store_provider_id) {
      try {
         var batches = await AppDB.getBatchesForStore(_billOrder.store_provider_id);
         _currentStockByProduct = {};
         (batches || []).forEach(function(b) {
            (_currentStockByProduct[b.product_id] = _currentStockByProduct[b.product_id] || []).push(b);
         });
      } catch (e) { /* keep whatever was already loaded */ }
      try {
         // _db.storeProducts is the canonical cross-store catalog; filter to
         // this order's store so the inline search matches the walk-in flow.
         if (!_db.storeProducts || !_db.storeProducts.length) {
            _db.storeProducts = (await AppDB.getAllStoreProducts()) || [];
         }
         _currentMyStoreProds = (_db.storeProducts || []).filter(function(p) {
            return p.store_provider_id === _billOrder.store_provider_id;
         });
      } catch (e) { /* search will just say "no matches" — owner sees the same error and reloads */ }
   }

   _billOrder.items = (_billOrder.items || []).map(function(it) {
      var qty = Number(it.qty) || 1;
      var item = {
         id: it.id, name: it.name, qty: qty,
         price: Number(it.price) || 0,
         mrp:   Number(it.mrp || it.price) || 0,
         disc_pct: Number(it.disc_pct) || 0,
         rx_required: !!it.rx_required,
         allocations: it.allocations || []     // preserve if already saved
      };
      // No allocations on file (legacy or freshly-placed customer order) →
      // auto-pick FEFO. Owner can override via the per-line batch picker.
      if (!item.allocations.length) {
         item.allocations = _allocateFEFO(item.id, qty);
      }
      return item;
   });
   _billDiscountPct = Number(o.discount_pct) || 0;
   document.getElementById('orderBillTitle').textContent = '📝 Order ' + orderId + ' — ' + (o.customerName || '');
   _renderOrderBillBody();
   var modal = document.getElementById('orderBillModal');
   modal.classList.remove('hidden');
   var inner = modal.querySelector('.sp-modal'); if (inner) inner.scrollTop = 0;
}

function closeOrderBillModal() {
   document.getElementById('orderBillModal').classList.add('hidden');
   _billOrder = null;
}

function _renderOrderBillBody() {
   if (!_billOrder) return;
   var rxBlock = '';
   if (_billOrder.prescription_url) {
      rxBlock = '<div class="bill-rx">' +
                   '<strong>⚠️ Prescription:</strong><br/>' +
                   '<a href="' + _billOrder.prescription_url + '" target="_blank" rel="noopener">' +
                      '<img src="' + _billOrder.prescription_url + '" style="max-width:180px;max-height:180px;border-radius:6px;border:1px solid #ddd"/>' +
                   '</a></div>';
   }
   var addrBlock = '';
   if (_billOrder.delivery_address) {
      var a = _billOrder.delivery_address;
      addrBlock = '<div class="bill-addr"><strong>🚚 Delivery to:</strong><br/>' +
                  (a.name || '') + (a.phone ? ' · 📞 ' + a.phone : '') + '<br/>' +
                  (a.line || '') + (a.city ? ', ' + a.city : '') +
                  (a.state ? ', ' + a.state : '') + (a.pin ? ' - ' + a.pin : '') +
                  '</div>';
   }
   window._currentEditableItems = _billOrder.items;
   var rowsHtml = _billOrder.items.map(function(it, i) {
      var qty = _itemTotalQty(it);
      var net = (it.mrp * qty) * (1 - it.disc_pct / 100);
      var allocCount  = (it.allocations || []).length;
      var totalBatches = _sortedBatchesForProduct(it.id).length;
      var batchChip = totalBatches > 0
         ? '<span class="batch-chip" onclick="_toggleBillBatchPicker(' + i + ')" title="Click to allocate across batches">📦 Batches: ' + allocCount + '/' + totalBatches + ' ▾</span>'
         : '<span style="color:#c62828;font-size:0.78rem">⚠️ No batches on file</span>';
      var mainRow = '<tr class="main-row">' +
                '<td>' + (i + 1) + '. ' + it.name + (it.rx_required ? ' <span style="color:#c62828;font-size:0.75rem">⚠️Rx</span>' : '') +
                   '<div style="margin-top:3px">' + batchChip + '</div>' +
                '</td>' +
                '<td class="line-qty" style="text-align:center;font-weight:600">' + qty + '</td>' +
                '<td><input type="number" min="0" step="0.01" value="' + it.mrp + '" oninput="_billEditLine(' + i + ',\'mrp\',this.value)"/></td>' +
                '<td><input type="number" min="0" step="0.1" max="100" value="' + it.disc_pct + '" oninput="_billEditLine(' + i + ',\'disc_pct\',this.value)"/></td>' +
                '<td class="bill-line-net">₹' + net.toFixed(2) + '</td>' +
                '<td><button class="apt-view-btn" style="background:#c62828" onclick="_billRemoveLine(' + i + ')">🗑</button></td>' +
             '</tr>';
      var pickerRow = '<tr class="batch-row hidden" data-idx="' + i + '"><td colspan="6" style="padding:0 12px 10px;background:#fafbfc">' + _renderBatchPicker(it, i, 'bill') + '</td></tr>';
      return mainRow + pickerRow;
   }).join('');

   var gross = _billOrder.items.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _billOrder.items.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var subtotal = gross - lineDisc;
   var overallDisc = subtotal * (_billDiscountPct / 100);
   var net = Math.round((subtotal - overallDisc) * 100) / 100;

   var emptyHint = (!_billOrder.items.length && _billOrder.prescription_url)
      ? '<div style="background:#e3f2fd;border:1px solid #90caf9;padding:8px 12px;border-radius:6px;margin:8px 0;color:#1565c0;font-size:0.9rem">📋 <strong>Prescription-only order.</strong> Read the Rx and search items below to add them.</div>'
      : '';
   var searchBlock =
      '<div style="position:relative;margin:8px 0">' +
         '<input type="text" id="bill-item-search" placeholder="🔍 Add item to this order (type to search store products)" ' +
                'oninput="billDoSearch()" autocomplete="off" ' +
                'style="width:100%;padding:9px 12px;border:1px solid #ccc;border-radius:6px;font-size:0.95rem"/>' +
         '<div id="bill-item-results" class="sp-catalog-results hidden" style="position:absolute;z-index:20;background:#fff;left:0;right:0;border:1px solid #ddd;border-radius:6px;max-height:260px;overflow-y:auto;box-shadow:0 4px 12px rgba(0,0,0,0.08)"></div>' +
      '</div>';

   var body = document.getElementById('orderBillBody');
   body.innerHTML =
      '<div class="bill-meta-row">' + rxBlock + addrBlock + '</div>' +
      emptyHint +
      searchBlock +
      '<table class="bill-edit-table">' +
         '<thead><tr><th>Product</th><th style="width:60px">Qty</th><th style="width:90px">MRP ₹</th><th style="width:70px">Disc %</th><th style="width:90px">Net</th><th></th></tr></thead>' +
         '<tbody>' + rowsHtml + '</tbody>' +
      '</table>' +
      '<div class="bill-summary">' +
         '<div>Gross: ₹' + gross.toFixed(2) + '</div>' +
         '<div>Line discounts: −₹' + lineDisc.toFixed(2) + '</div>' +
         '<div>Subtotal: ₹' + subtotal.toFixed(2) + '</div>' +
         '<div>Overall discount: <input type="number" min="0" max="100" step="0.5" value="' + _billDiscountPct + '" oninput="_billEditOverallDisc(this.value)" style="width:60px"/> % &nbsp; −₹' + overallDisc.toFixed(2) + '</div>' +
         '<div class="bill-net">Net Amount: ₹' + net.toFixed(2) + '</div>' +
      '</div>';

   document.getElementById('orderBillFooter').innerHTML =
      '<button class="sp-btn-cancel" onclick="closeOrderBillModal()">Cancel</button>' +
      '<button class="sp-btn-save" style="background:#1a73e8" onclick="saveOrderEdits()">💾 Save Changes</button>' +
      '<button class="sp-btn-save" onclick="generatePrintableBill()">🖨 Generate Bill</button>';
}

function _billEditLine(i, field, val) {
   if (!_billOrder || !_billOrder.items[i]) return;
   window._currentEditableItems = _billOrder.items;
   var n = parseFloat(val);
   var clean = isNaN(n) || n < 0 ? 0 : n;
   if (field === 'qty') {
      var avail = _availableStock(_billOrder.items[i].id);
      if (clean > avail) {
         clean = avail;
         alert('⚠️ Only ' + avail + ' unit' + (avail === 1 ? '' : 's') + ' of "' + _billOrder.items[i].name + '" in stock. Quantity capped.');
      }
      _billOrder.items[i].allocations = _allocateFEFO(_billOrder.items[i].id, clean);
      _billOrder.items[i].qty = _itemTotalQty(_billOrder.items[i]);
      _renderOrderBillBody();
      return;
   }
   _billOrder.items[i][field] = clean;
   _updateBillTotals();
}
function _billEditAlloc(itemIdx, batchId, val) {
   var it = _billOrder && _billOrder.items[itemIdx];
   if (!it) return;
   var q = parseFloat(val); if (isNaN(q) || q < 0) q = 0;
   it.allocations = it.allocations || [];
   var alloc = it.allocations.find(function(a) { return a.batchId === batchId; });
   if (alloc) {
      if (q === 0) it.allocations = it.allocations.filter(function(a) { return a.batchId !== batchId; });
      else         alloc.qty = q;
   } else if (q > 0) {
      var b = (_currentStockByProduct[it.id] || []).find(function(x) { return x.id === batchId; });
      if (b) {
         it.allocations.push({
            batchId:    b.id,
            batchNo:    b.batch_no || '',
            expiryDate: b.expiry_date || null,
            qty:        q
         });
      }
   }
   it.qty = _itemTotalQty(it);
   _updateBillTotals();
   var rows = document.querySelectorAll('.bill-edit-table tbody tr.main-row');
   var row = rows[itemIdx];
   if (row) {
      var qtyCell = row.querySelector('.line-qty');
      if (qtyCell) qtyCell.textContent = it.qty;
   }
}
function _toggleBillBatchPicker(i) {
   var row = document.querySelector('.bill-edit-table .batch-row[data-idx="' + i + '"]');
   if (!row) return;
   row.classList.toggle('hidden');
}
function _billEditOverallDisc(val) {
   var n = parseFloat(val);
   _billDiscountPct = isNaN(n) ? 0 : Math.max(0, Math.min(100, n));
   _updateBillTotals();
}
function _updateBillTotals() {
   if (!_billOrder) return;
   var rows = document.querySelectorAll('.bill-edit-table tbody tr.main-row');
   _billOrder.items.forEach(function(it, i) {
      var qty = _itemTotalQty(it);
      var net = it.mrp * qty * (1 - it.disc_pct / 100);
      if (rows[i]) {
         var netCell = rows[i].querySelector('.bill-line-net');
         if (netCell) netCell.textContent = '₹' + net.toFixed(2);
      }
   });
   var gross    = _billOrder.items.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _billOrder.items.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var subtotal = gross - lineDisc;
   var overallDisc = subtotal * (_billDiscountPct / 100);
   var net = Math.round((subtotal - overallDisc) * 100) / 100;
   var sum = document.querySelector('.bill-summary');
   if (!sum) return;
   sum.innerHTML =
      '<div>Gross: ₹' + gross.toFixed(2) + '</div>' +
      '<div>Line discounts: −₹' + lineDisc.toFixed(2) + '</div>' +
      '<div>Subtotal: ₹' + subtotal.toFixed(2) + '</div>' +
      '<div>Overall discount: <input type="number" min="0" max="100" step="0.5" value="' + _billDiscountPct + '" oninput="_billEditOverallDisc(this.value)" style="width:60px"/> % &nbsp; −₹' + overallDisc.toFixed(2) + '</div>' +
      '<div class="bill-net">Net Amount: ₹' + net.toFixed(2) + '</div>';
}
function _billRemoveLine(i) {
   if (!_billOrder) return;
   if (!confirm('Remove this line item from the order?')) return;
   _billOrder.items.splice(i, 1);
   _renderOrderBillBody();   // structural change → full re-render is fine
}

var _billSearchTimer = null;
function billDoSearch() {
   clearTimeout(_billSearchTimer);
   _billSearchTimer = setTimeout(_billRunSearch, 220);
}
function _billRunSearch() {
   var box = document.getElementById('bill-item-results');
   var input = document.getElementById('bill-item-search');
   if (!box || !input) return;
   var q = (input.value || '').trim().toLowerCase();
   if (q.length < 2) { box.classList.add('hidden'); box.innerHTML = ''; return; }
   var pool = _currentMyStoreProds || [];
   var hits = pool.filter(function(p) {
      var hay = ((p.name || '') + ' ' + (p.desc || '')).toLowerCase();
      return hay.indexOf(q) !== -1;
   }).slice(0, 20);
   if (!hits.length) {
      box.innerHTML = '<div style="padding:10px;text-align:center;color:#888">No matches in this store.</div>';
      box.classList.remove('hidden'); return;
   }
   box.innerHTML = hits.map(function(p) {
      var pid = p.id.replace(/'/g, "\\'");
      var img = p.img ? '<img src="' + p.img + '" onerror="this.style.display=\'none\'"/>' : '<span style="font-size:1.4rem">💊</span>';
      return '<div class="sp-catalog-result" onclick="addBillItem(\'' + pid + '\')">' +
                '<div class="sp-catalog-result-img">' + img + '</div>' +
                '<div class="sp-catalog-result-info">' +
                   '<div class="sp-catalog-result-name">' + p.name + (p.rx_required ? ' <span style="color:#c62828;font-size:0.78rem">⚠️Rx</span>' : '') + '</div>' +
                   '<div class="sp-catalog-result-meta">' + (p.desc || '') + ' · ₹' + Number(p.price || 0).toLocaleString('en-IN') + '</div>' +
                '</div>' +
             '</div>';
   }).join('');
   box.classList.remove('hidden');
}
function addBillItem(productId) {
   if (!_billOrder) return;
   var p = (_currentMyStoreProds || []).find(function(x) { return x.id === productId; });
   if (!p) return;
   window._currentEditableItems = _billOrder.items;
   var avail = _availableStock(productId);
   if (avail <= 0) {
      alert('❌ "' + p.name + '" is out of stock.\n\nAdd a new batch from Products → Stock first.');
      return;
   }
   var existing = _billOrder.items.find(function(x) { return x.id === productId; });
   var currentQty = existing ? _itemTotalQty(existing) : 0;
   if (currentQty + 1 > avail) {
      alert('⚠️ Only ' + avail + ' unit' + (avail === 1 ? '' : 's') + ' of "' + p.name + '" in stock.\nAlready added: ' + currentQty + '.');
      return;
   }
   if (existing) {
      existing.allocations = _allocateFEFO(productId, currentQty + 1);
      existing.qty = _itemTotalQty(existing);
   } else {
      var item = {
         id:    p.id,
         name:  p.name,
         qty:   1,
         price: Number(p.price) || 0,
         mrp:   Number(p.price) || 0,
         disc_pct: 0,
         rx_required: !!p.rx_required,
         allocations: []
      };
      item.allocations = _allocateFEFO(productId, 1);
      item.qty = _itemTotalQty(item);
      _billOrder.items.push(item);
   }
   _renderOrderBillBody();
}

async function saveOrderEdits() {
   if (!_billOrder) return;
   var orderId = _billOrder.orderId || _billOrder.order_id;
   // Compute the new total from allocation-derived quantities
   var gross    = _billOrder.items.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _billOrder.items.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var subtotal = gross - lineDisc;
   var overallDisc = subtotal * (_billDiscountPct / 100);
   var net = Math.round((subtotal - overallDisc) * 100) / 100;

   var patch = {
      items: _billOrder.items.map(function(it) {
         var qty = _itemTotalQty(it);
         return { id: it.id, name: it.name, qty: qty, price: it.mrp, mrp: it.mrp, disc_pct: it.disc_pct, rx_required: it.rx_required, allocations: it.allocations || [] };
      }),
      total: net,
      discount_pct: _billDiscountPct
   };
   var ok = await AppDB.patchOrder(orderId, patch);
   if (!ok) { alert('Failed to save changes.'); return; }
   // Sync local cache
   var idx = _db.orders.findIndex(function(o) { return (o.orderId === orderId) || (o.order_id === orderId); });
   if (idx >= 0) {
      _db.orders[idx].items = patch.items;
      _db.orders[idx].total = patch.total;
      _db.orders[idx].discount_pct = patch.discount_pct;
   }
   alert('✅ Order updated. Net: ₹' + net.toFixed(2));
   closeOrderBillModal();
   renderShopDashboard(window._shopCurrentFilter);
}

// ── Printable bill — opens in a new window with Sri Meghana–style template ──
async function generatePrintableBill() {
   if (!_billOrder) return;
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   // Make sure the store cache is loaded (could be stale on a long-lived tab)
   try { await loadStoreProviders(true); } catch (e) {}
   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _billOrder.store_provider_id; });
   // Fallback for legacy orders that were saved before store_provider_id was
   // wired up — use the logged-in owner's own store so the bill still has
   // GSTIN / Form 20 / FSSAI / address / phone instead of all dashes.
   if (!store) {
      store = (_storeProvidersCache || []).find(function(x) {
         return (x.owner_email || '').toLowerCase() === (user.email || '').toLowerCase();
      });
   }
   store = store || {};

   // Generate a bill number if the order doesn't already have one
   var billNo = _billOrder.bill_number;
   if (!billNo) {
      var seq = await _bumpStoreBillSeq(store.id || 'STORE');
      var storeCode = _shortCode(store.name || 'STORE');
      var catCode   = (store.category || 'STORE').slice(0,3).toUpperCase();
      var yy        = String(new Date().getFullYear()).slice(2);
      billNo = storeCode + '/' + catCode + '/' + yy + '/' + String(seq).padStart(4, '0');
      _billOrder.bill_number = billNo;
      // Persist bill_number + the items+allocations snapshot on the order so
      // (a) the stock deduction on Delivered/Picked up uses the exact batches
      //     that were printed, and
      // (b) re-printing the bill later shows the same batches.
      var itemsSnapshot = _billOrder.items.map(function(it) {
         var qty = _itemTotalQty(it);
         return { id: it.id, name: it.name, qty: qty, price: it.mrp, mrp: it.mrp, disc_pct: it.disc_pct, rx_required: it.rx_required, allocations: it.allocations || [] };
      });
      AppDB.patchOrder(_billOrder.orderId || _billOrder.order_id, { bill_number: billNo, items: itemsSnapshot });
   }

   // Recompute totals
   var gross    = _billOrder.items.reduce(function(s, it) { return s + it.mrp * _itemTotalQty(it); }, 0);
   var lineDisc = _billOrder.items.reduce(function(s, it) { return s + (it.mrp * _itemTotalQty(it) * it.disc_pct / 100); }, 0);
   var subtotal = gross - lineDisc;
   var overallDisc = subtotal * (_billDiscountPct / 100);
   var net = subtotal - overallDisc;
   var gstAmt = net - (net / 1.05);          // assume 5% inclusive (post-GST 2.0); split CGST+SGST
   var cgst = gstAmt / 2;
   var sgst = gstAmt / 2;
   var roundedNet = Math.round(net);
   var roundOff = roundedNet - net;

   var html = _renderBillHtml({
      store: store,
      order: _billOrder,
      billNo: billNo,
      now: new Date(),
      gross: gross,
      lineDisc: lineDisc,
      overallDisc: overallDisc,
      subtotal: subtotal,
      net: net,
      roundedNet: roundedNet,
      roundOff: roundOff,
      cgst: cgst,
      sgst: sgst
   });
   var w = window.open('', 'bill-' + billNo, 'width=900,height=1100');
   w.document.write(html);
   w.document.close();
   setTimeout(function() { try { w.focus(); w.print(); } catch (e) {} }, 500);
}

// Lightweight per-store bill counter stored in localStorage keyed by store id
function _bumpStoreBillSeq(storeId) {
   var k = 'billseq:' + storeId + ':' + new Date().getFullYear();
   var n = parseInt(localStorage.getItem(k) || '0', 10) + 1;
   localStorage.setItem(k, String(n));
   return Promise.resolve(n);
}
function _shortCode(name) {
   var parts = (name || '').split(/\s+/).filter(Boolean);
   if (!parts.length) return 'STORE';
   if (parts.length === 1) return parts[0].slice(0, 3).toUpperCase();
   return parts.map(function(p) { return p[0].toUpperCase(); }).slice(0, 4).join('');
}

function _amountInWords(n) {
   // Simple Indian-numerals to words (good enough for retail bills)
   var a = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
   var b = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
   var inWords = function(num) {
      if (num < 20) return a[num];
      if (num < 100) return b[Math.floor(num/10)] + (num%10 ? ' ' + a[num%10] : '');
      if (num < 1000) return a[Math.floor(num/100)] + ' Hundred' + (num%100 ? ' ' + inWords(num%100) : '');
      if (num < 100000) return inWords(Math.floor(num/1000)) + ' Thousand' + (num%1000 ? ' ' + inWords(num%1000) : '');
      if (num < 10000000) return inWords(Math.floor(num/100000)) + ' Lakh' + (num%100000 ? ' ' + inWords(num%100000) : '');
      return inWords(Math.floor(num/10000000)) + ' Crore' + (num%10000000 ? ' ' + inWords(num%10000000) : '');
   };
   return inWords(Math.round(n)) + ' Rupees only';
}

function _renderBillHtml(d) {
   // One printed row per (item, allocation). If an item has no allocations
   // (legacy bills), fall back to a single row with "—" in Batch/Exp.
   var sno = 0;
   var rows = d.order.items.map(function(it) {
      var allocs = (it.allocations && it.allocations.length)
         ? it.allocations
         : [{ batchNo: '—', expiryDate: null, qty: Number(it.qty) || 0 }];
      var packLbl = (it.sell_unit && it.units_per_pack)
         ? (it.units_per_pack + ' ' + it.sell_unit + (it.units_per_pack === 1 ? '' : 's'))
         : '—';
      return allocs.map(function(a, ai) {
         sno += 1;
         var amt = it.mrp * (Number(a.qty) || 0);
         var disc = amt * (it.disc_pct / 100);
         var net  = amt - disc;
         var nameCell = ai === 0
            ? it.name + (it.rx_required ? ' <span style="color:#c62828">⚠️Rx</span>' : '')
            : '<span style="color:#888;font-style:italic">↳ same item, different batch</span>';
         return '<tr>' +
                '<td>' + sno + '</td>' +
                '<td>' + nameCell + '</td>' +
                '<td>3004</td>' +
                '<td>' + packLbl + '</td>' +
                '<td><b>' + (a.batchNo || '—') + '</b></td>' +
                '<td>' + (a.expiryDate ? _formatMonthYear(a.expiryDate) : '—') + '</td>' +
                '<td style="text-align:right">' + (Number(a.qty) || 0) + '</td>' +
                '<td style="text-align:right">' + it.mrp.toFixed(2) + '</td>' +
                '<td style="text-align:right">' + amt.toFixed(2) + '</td>' +
                '<td style="text-align:right">' + it.disc_pct.toFixed(1) + '</td>' +
                '<td style="text-align:right">5</td>' +
                '<td style="text-align:right"><b>' + net.toFixed(2) + '</b></td>' +
             '</tr>';
      }).join('');
   }).join('');
   var totalQty = d.order.items.reduce(function(s, it) {
      var allocs = (it.allocations && it.allocations.length) ? it.allocations : null;
      return s + (allocs ? allocs.reduce(function(t, a) { return t + (Number(a.qty) || 0); }, 0) : (Number(it.qty) || 0));
   }, 0);
   var dateStr = d.now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
   var timeStr = d.now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

   return '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Bill ' + d.billNo + '</title>' +
   '<style>' +
      'body{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#000;padding:14px;margin:0}' +
      '.bill-wrap{border:1.5px solid #000;padding:8px}' +
      '.bill-head{text-align:center;font-weight:700;border-bottom:1.5px solid #000;padding:4px 0}' +
      '.bill-head h2{margin:0;font-size:18px}' +
      '.bill-head .label{font-size:11px;letter-spacing:0.15em;color:#555;font-weight:600;margin-bottom:2px}' +
      '.bill-info{display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px;padding:6px 4px;border-bottom:1.5px solid #000}' +
      '.bill-info div{font-size:11px}' +
      'table{width:100%;border-collapse:collapse;margin-top:4px}' +
      'th,td{border:1px solid #000;padding:3px 5px;font-size:10px}' +
      'th{background:#eee;font-weight:700}' +
      '.bill-totals{display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:8px 4px;border-top:1.5px solid #000}' +
      '.bill-totals .col{font-size:11px}' +
      '.bill-totals .net{font-size:14px;font-weight:700}' +
      '.bill-foot{display:flex;justify-content:space-between;padding:6px 4px;border-top:1.5px solid #000;font-size:10px}' +
      '@media print{body{padding:0}.bill-wrap{border:none}.no-print{display:none}}' +
   '</style></head><body>' +
   '<div class="no-print" style="text-align:right;margin-bottom:8px"><button onclick="window.print()" style="padding:6px 14px;background:#1a73e8;color:#fff;border:none;border-radius:6px;cursor:pointer">🖨 Print</button></div>' +
   '<div class="bill-wrap">' +
      '<div class="bill-head"><div class="label">TAX INVOICE</div><h2>' + (d.store.name || 'STORE').toUpperCase() + '</h2></div>' +
      '<div class="bill-info">' +
         '<div><b>GSTIN:</b> ' + (d.store.gstin || '—') + '</div>' +
         '<div><b>Form 20:</b> ' + (d.store.form20_no || '—') + '</div>' +
         '<div><b>FSSAI:</b> ' + (d.store.fssai_no || '—') + '</div>' +
         '<div><b>Form 21:</b> ' + (d.store.form21_no || '—') + '</div>' +
         '<div style="grid-column:span 2"><b>Address:</b> ' + (d.store.address || '') + '</div>' +
         '<div><b>Phone:</b> ' + (d.store.phone || '—') + '</div>' +
      '</div>' +
      '<div class="bill-info" style="grid-template-columns:1fr 1fr 1fr 1fr">' +
         '<div><b>Name:</b> ' + (d.order.customerName || '—') + '</div>' +
         '<div><b>Mobile:</b> ' + (d.order.customerPhone || (d.order.delivery_address && d.order.delivery_address.phone) || '—') + '</div>' +
         '<div><b>Invoice:</b> ' + d.billNo + '</div>' +
         '<div><b>Date:</b> ' + dateStr + '</div>' +
         '<div><b>Mode:</b> ' + (d.order.payment_mode || 'COD') + '</div>' +
         '<div style="grid-column:span 3"><b>Bill Value:</b> ₹' + d.roundedNet.toFixed(2) + '</div>' +
      '</div>' +
      '<table>' +
         '<thead><tr><th>S.No</th><th>Product</th><th>HSN</th><th>Pack</th><th>Batch</th><th>Exp</th><th>Qty</th><th>MRP</th><th>Amount</th><th>Disc%</th><th>GST%</th><th>Net</th></tr></thead>' +
         '<tbody>' + rows + '</tbody>' +
      '</table>' +
      '<div class="bill-totals">' +
         '<div class="col">' +
            '<div>No of Items: ' + d.order.items.length + ' &nbsp; · &nbsp; Total Qty: ' + totalQty + '</div>' +
            '<div>CGST: ₹' + d.cgst.toFixed(2) + '</div>' +
            '<div>SGST: ₹' + d.sgst.toFixed(2) + '</div>' +
         '</div>' +
         '<div class="col" style="text-align:right">' +
            '<div>Gross: ₹' + d.gross.toFixed(2) + '</div>' +
            '<div>Discount: −₹' + (d.lineDisc + d.overallDisc).toFixed(2) + '</div>' +
            '<div>Round Off: ' + (d.roundOff >= 0 ? '+' : '') + d.roundOff.toFixed(2) + '</div>' +
            '<div class="net">Net Amount: ₹' + d.roundedNet.toFixed(2) + '</div>' +
         '</div>' +
      '</div>' +
      '<div style="padding:4px 4px;border-top:1px solid #000;font-size:10px"><b>In words:</b> ' + _amountInWords(d.roundedNet) + '</div>' +
      '<div class="bill-foot">' +
         '<div>' + timeStr + ' &nbsp; · &nbsp; Signature</div>' +
         '<div>For ' + (d.store.name || 'STORE') + '</div>' +
      '</div>' +
   '</div>' +
   '</body></html>';
}

// ── Shop-owner: per-product stock (batches) management ────────────────
async function openStockModal(productId) {
   var p = _currentMyStoreProds.find(function(x) { return x.id === productId; });
   if (!p) { alert('Product not found.'); return; }
   document.getElementById('stockModalTitle').textContent = '📦 Stock — ' + p.name;
   document.getElementById('stk-product-id').value = productId;
   // Clear add-batch form
   ['stk-batch','stk-exp','stk-mfg','stk-qty','stk-mrp','stk-pp','stk-notes'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
   });
   // Prefill MRP suggestion from product price
   document.getElementById('stk-mrp').value = p.price || '';

   // Summary at top
   var batches = _currentStockByProduct[productId] || [];
   var total = batches.reduce(function(s, b) { return s + (Number(b.qty_remaining) || 0); }, 0);
   var summaryHtml =
      '<div><strong>' + p.name + '</strong>' + (p.desc ? ' · ' + p.desc : '') + '</div>' +
      '<div>Sell unit: <strong>' + (p.sell_unit || 'strip') + '</strong>' +
      '   ·   Units per pack: <strong>' + (p.units_per_pack || 1) + '</strong>' +
      '   ·   Reorder at: <strong>' + (p.reorder_point || 'not set') + '</strong></div>' +
      '<div>Total on hand: <strong>' + total + '</strong> ' + _sellUnitPlural(p.sell_unit, total) + '</div>';
   document.getElementById('stockProductSummary').innerHTML = summaryHtml;

   // Batches table
   var list = document.getElementById('stockBatchesList');
   if (!batches.length) {
      list.innerHTML = '<p style="color:#888;text-align:center;padding:14px">No batches recorded. Add a new shipment below.</p>';
   } else {
      // Sort by expiry ascending (FEFO = first expiry first out)
      var sorted = batches.slice().sort(function(a, b) {
         return (a.expiry_date || '9999') < (b.expiry_date || '9999') ? -1 : 1;
      });
      var soon = new Date(); soon.setMonth(soon.getMonth() + 3);
      list.innerHTML =
         '<table class="stock-table"><thead><tr>' +
         '<th>Batch</th><th>Expiry</th><th>Received</th><th>Remaining</th><th>MRP</th><th></th>' +
         '</tr></thead><tbody>' +
         sorted.map(function(b) {
            var expDate = b.expiry_date ? new Date(b.expiry_date) : null;
            var expClass = '';
            if (expDate && !isNaN(expDate)) {
               if (expDate < new Date()) expClass = 'expired';
               else if (expDate <= soon) expClass = 'expiring';
            }
            var bid = b.id.replace(/'/g, "\\'");
            return '<tr class="' + expClass + '">' +
               '<td>' + (b.batch_no || '<em style="color:#bbb">—</em>') + '</td>' +
               '<td>' + (_formatMonthYear(b.expiry_date) || '<em style="color:#bbb">—</em>') + '</td>' +
               '<td>' + (b.qty_received || 0) + '</td>' +
               '<td><strong>' + (b.qty_remaining || 0) + '</strong></td>' +
               '<td>₹' + Number(b.mrp || 0).toFixed(2) + '</td>' +
               '<td><button class="apt-view-btn" style="background:#c62828" onclick="deleteStockBatch(\'' + bid + '\')">🗑</button></td>' +
            '</tr>';
         }).join('') +
         '</tbody></table>';
   }

   var modal = document.getElementById('stockModal');
   modal.classList.remove('hidden');
   var inner = modal.querySelector('.sp-modal'); if (inner) inner.scrollTop = 0;
}

// Format an ISO date / YYYY-MM string as "MM/YYYY" for pharmacy display.
function _formatMonthYear(s) {
   if (!s) return '';
   var m = String(s).match(/^(\d{4})-(\d{2})/);
   return m ? (m[2] + '/' + m[1]) : s;
}

function _sellUnitPlural(unit, n) {
   var u = unit || 'unit';
   return n === 1 ? u : (u + 's');
}

function closeStockModal() {
   document.getElementById('stockModal').classList.add('hidden');
}

async function saveStockBatch() {
   var productId = document.getElementById('stk-product-id').value;
   if (!productId || !_currentMyStoreId) { alert('No product / store context.'); return; }
   var qty = parseFloat(document.getElementById('stk-qty').value) || 0;
   if (qty <= 0) { alert('Quantity must be greater than 0.'); return; }
   // <input type="month"> returns "YYYY-MM" — DB column is `date`, so append "-01"
   // so we always store the 1st of the month. Display strips it back to MM/YYYY.
   var monthToDate = function(v) { return v ? (v + '-01') : null; };
   var batch = {
      id:                'inv_' + productId.split('_').pop().slice(0,6) + '_' + Date.now(),
      product_id:        productId,
      store_provider_id: _currentMyStoreId,
      batch_no:          document.getElementById('stk-batch').value.trim(),
      mfg_date:          monthToDate(document.getElementById('stk-mfg').value),
      expiry_date:       monthToDate(document.getElementById('stk-exp').value),
      qty_received:      qty,
      qty_remaining:     qty,
      mrp:               parseFloat(document.getElementById('stk-mrp').value) || 0,
      purchase_price:    parseFloat(document.getElementById('stk-pp').value)  || 0,
      notes:             document.getElementById('stk-notes').value.trim()
   };
   var ok = await AppDB.upsertInventoryBatch(batch);
   if (!ok) { alert('Failed to save batch.'); return; }
   // Update in-memory cache + re-render
   (_currentStockByProduct[productId] = _currentStockByProduct[productId] || []).push(batch);
   closeStockModal();
   renderMyStoreProducts(_currentMyStoreId);
}

async function deleteStockBatch(batchId) {
   if (!confirm('Delete this batch? Stock counts will be reduced. This cannot be undone.')) return;
   var ok = await AppDB.deleteInventoryBatch(batchId);
   if (!ok) { alert('Failed to delete.'); return; }
   // Remove from in-memory cache
   Object.keys(_currentStockByProduct).forEach(function(pid) {
      _currentStockByProduct[pid] = _currentStockByProduct[pid].filter(function(b) { return b.id !== batchId; });
   });
   var pid = document.getElementById('stk-product-id').value;
   openStockModal(pid);    // re-render with fresh data
   renderMyStoreProducts(_currentMyStoreId);
}

function clearCatalogLink() {
   document.getElementById('sp-catalog-item-id').value = '';
   document.getElementById('sp-catalog-chip').classList.add('hidden');
   var search = document.getElementById('sp-catalog-search');
   if (search) {
      search.value = '';
      if (search.parentNode) search.parentNode.style.display = '';
   }
}

function previewStoreProductImg() {
   var url = document.getElementById('sp-img').value.trim();
   var prev = document.getElementById('sp-img-preview');
   if (prev) prev.src = url || 'https://placehold.co/200x120?text=Preview';
}

function closeStoreProductModal() {
   document.getElementById('shopProductModal').classList.add('hidden');
   _editProdIdx = -1;
}

async function saveStoreProduct() {
   if (!_currentMyStoreId) { alert('Open a store first.'); return; }
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var name  = document.getElementById('sp-name').value.trim();
   var price = parseFloat(document.getElementById('sp-price').value) || 0;
   var brand = document.getElementById('sp-brand').value.trim();
   var desc  = document.getElementById('sp-desc').value.trim() || brand;
   var img   = document.getElementById('sp-img').value.trim() || 'https://placehold.co/400x300?text=Product';
   var badge = document.getElementById('sp-badge').value.trim() || 'New';
   var catKey = document.getElementById('sp-catkey').value;
   if (!name) { alert('Item name is required.'); return; }

   var store = (_storeProvidersCache || []).find(function(x) { return x.id === _currentMyStoreId; });
   var existing = _editProdIdx >= 0 ? _currentMyStoreProds[_editProdIdx] : null;
   var id = existing ? existing.id : ('sp_' + (user.email || 'admin').split('@')[0] + '_' + Date.now());
   var catalogLink = (document.getElementById('sp-catalog-item-id') || {}).value || null;

   // Catalogue-side attrs (composition, pack, dose, etc.)
   var attrs = {
      composition:     document.getElementById('sp-composition').value.trim(),
      pack_size:       document.getElementById('sp-pack').value.trim(),
      dose:            document.getElementById('sp-dose').value.trim(),
      units_per_strip: parseInt(document.getElementById('sp-units').value, 10) || null,
      expiry_date:     document.getElementById('sp-expiry').value,
      mfr:             brand,
      hsn:             document.getElementById('sp-hsn').value.trim() || '3004',
      rx_required:     document.getElementById('sp-rx').checked
   };

   // Dual-write: if this is a brand-new custom item (no catalogue link AND not
   // an edit of an existing product), also create a master-catalogue entry so
   // other stores can search/discover it later.
   if (!catalogLink && !existing && store && store.category) {
      var catItemId = 'cat_' + store.category + '_owner_' + Date.now().toString(36);
      var catItem = {
         id:        catItemId,
         category:  store.category,    // mirrors the store's category (medical / general / etc.)
         name:      name,
         brand:     brand,
         price:     price,
         serial_no: '',
         batch_no:  '',
         image_url: img,
         attrs:     attrs
      };
      var catOk = await AppDB.upsertCatalogItem(catItem);
      if (catOk) catalogLink = catItemId;     // succeed → link product to it
      // If catalogue insert fails we still proceed with the product save —
      // the worst case is a product without a catalogue back-link.
   }

   var dbRow = {
      id: id, name: name, price: price,
      description: desc, image: img,
      category: catKey, badge: badge,
      store_id: store ? store.owner_email : user.email,
      store_name: store ? store.name : (user.storeName || user.name || ''),
      store_provider_id: _currentMyStoreId,
      catalog_item_id: catalogLink || null,
      rx_required: !!attrs.rx_required,
      variants: null
   };
   var ok = await AppDB.upsertProduct(dbRow);
   if (!ok) { alert('Failed to save item.'); return; }
   // Keep local cache in sync
   _db.storeProducts = (_db.storeProducts || []).filter(function(p) { return p.id !== id; });
   _db.storeProducts.push(dbRow);
   _applyStoreProdsToProducts();
   closeStoreProductModal();
   renderMyStoreProducts(_currentMyStoreId);
}

async function deleteStoreProduct(idx) {
   if (!confirm('Delete this product?')) return;
   var p = _currentMyStoreProds[idx];
   if (!p) return;
   var ok = await AppDB.deleteProduct(p.id);
   if (!ok) { alert('Failed to delete.'); return; }
   _db.storeProducts = (_db.storeProducts || []).filter(function(x) { return x.id !== p.id; });
   _applyStoreProdsToProducts();
   renderMyStoreProducts(_currentMyStoreId);
}

function switchShopTab(tab) {
   // Sub-routes for the expandable Patients group — both feed the same panel,
   // they just set the mode (Out / In) before rendering.
   var patientsSub = null;
   if (tab === 'patients-out') { patientsSub = 'out'; tab = 'patients'; }
   else if (tab === 'patients-in') { patientsSub = 'in';  tab = 'patients'; }

   ['dashboard', 'orders', 'appointments', 'doctors', 'patients', 'admissions', 'revenue', 'beds', 'staff', 'schedule', 'products'].forEach(function(t) {
      var panel = document.getElementById('shop-panel-' + t);
      var btn   = document.getElementById('shop-tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab && t !== 'patients');
   });
   // Sub-item active state (only the chosen child gets the blue pill)
   ['patients-out', 'patients-in'].forEach(function(sid) {
      var b = document.getElementById('shop-tab-' + sid);
      if (b) b.classList.toggle('active', tab === 'patients' && (sid === 'patients-' + patientsSub));
   });
   // Patients sidebar group auto-expands when a sub-item is active; collapses
   // when the user navigates to any other top-level tab.
   var patientsParent = document.getElementById('shop-tab-patients');
   if (patientsParent) {
      var chev = patientsParent.querySelector('.ssi-chev');
      if (tab === 'patients') {
         patientsParent.classList.add('open');
         if (chev) chev.textContent = '−';
      } else {
         patientsParent.classList.remove('open');
         if (chev) chev.textContent = '+';
      }
   }
   var titleEl = document.getElementById('shopTopbarTitle');
   if (titleEl) {
      var titleMap = { dashboard: 'Dashboard', orders: 'Orders', appointments: 'Appointments',
                       doctors: 'Doctors', admissions: 'Admissions', revenue: 'Revenue',
                       staff: 'Staff', schedule: 'Schedule', products: 'My Stores' };
      if (tab === 'patients') {
         titleEl.textContent = patientsSub === 'in' ? 'In-patients' : 'Out-patients';
      } else {
         titleEl.textContent = titleMap[tab] || 'Dashboard';
      }
   }
   if (tab !== 'products') _currentMyStoreId = null;
   if (tab === 'dashboard')    renderShopOverview();
   if (tab === 'products')     renderStoreOwnerProducts();
   if (tab === 'appointments') {
      _shopAptsCache = null;
      // Reset the date filter to "Today" each time the owner re-enters the
      // Appointments tab — otherwise an earlier "This month" / "This week"
      // selection persists and the owner forgets why their queue looks empty.
      var dateSel = document.getElementById('shopAptDateFilter');
      if (dateSel) dateSel.value = 'today';
      ['shopAptCustomDate','shopAptRangeFrom','shopAptRangeTo'].forEach(function(id) {
         var el = document.getElementById(id);
         if (el) { el.value = ''; el.style.display = 'none'; }
      });
      renderShopAppointments('Confirmed');
   }
   if (tab === 'doctors')      renderShopDoctors();
   if (tab === 'patients')     { _patientsMode = patientsSub || _patientsMode || 'out'; renderShopPatients(); }
   if (tab === 'admissions')   renderShopAdmissions();
   if (tab === 'staff')        renderShopStaff();
   if (tab === 'revenue')      renderShopRevenue();
   if (tab === 'beds')         renderShopBeds();
   if (tab === 'schedule')     renderShopSchedule();
}

// Toggle expand/collapse for a sidebar group (e.g. Patients parent).
// Updates the chevron and reveals/hides .shop-side-children below.
function _toggleSideGroup(name) {
   var parent = document.getElementById('shop-tab-' + name);
   if (!parent) return;
   parent.classList.toggle('open');
   var chev = parent.querySelector('.ssi-chev');
   if (chev) chev.textContent = parent.classList.contains('open') ? '−' : '+';
}

// Quick-add doctor shortcut from the Doctors tab "+ Add" button.
// Picks the owner's first hospital automatically; if they own more than one,
// they should use the "+ Add Doctor" button on the specific provider card.
async function shopQuickAddDoctor() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   // Make sure providers cache is fresh
   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase() ||
             isAdmin(user.email);
   });
   if (!mine.length) {
      alert('No hospital/clinic is linked to your account yet. Ask the admin to assign one.');
      return;
   }
   // Switch to Doctors tab so user sees the new entry land there
   switchShopTab('doctors');
   openAptDoctorModal(mine[0].id);
}

// ── SHOP OWNER: Doctors / Staff management ──
async function renderShopDoctors() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var container = document.getElementById('shopDoctorsContent');
   if (!user || !container) return;
   _liveSubscribe('shopDocs', 'apt_providers', renderShopDoctors);
   container.innerHTML = '<div class="shop-empty">Loading…</div>';

   // Always re-fetch providers so edits show up immediately
   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase() ||
             isAdmin(user.email);
   });
   if (!mine.length) {
      container.innerHTML = '<div class="shop-empty">No providers linked to your account yet. Ask the admin to assign you a hospital/clinic.</div>';
      return;
   }

   var html = '';
   mine.forEach(function(p) {
      var meta  = APT_CAT_META[p.category] || {};
      var s     = _staffLabelForCategories([p.category]);
      var pid   = p.id.replace(/'/g, "\\'");
      var docs  = p.doctors || [];
      html += '<div class="apt-provider-card" style="margin-bottom:1rem">' +
                '<div class="apt-provider-top">' +
                   '<div class="apt-provider-icon">' + (p.icon || meta.icon || '🏥') + '</div>' +
                   '<div style="flex:1;min-width:0">' +
                      '<div class="apt-provider-name">' + p.name + '</div>' +
                      '<div class="apt-provider-tagline">' + (p.tagline || '') + '</div>' +
                   '</div>' +
                   '<button class="apt-view-btn" onclick="openAptDoctorModal(\'' + pid + '\')">➕ Add ' + s.label.replace(/s$/,'') + '</button>' +
                '</div>';
      if (!docs.length) {
         html += '<p style="color:#999;font-size:0.85rem;padding:0.5rem 0">No ' + s.label.toLowerCase() + ' added yet.</p>';
      } else {
         html += '<div class="apt-doctor-grid" style="margin-top:0.7rem">';
         docs.forEach(function(d) {
            var initials = d.name.replace(/^Dr\.?\s*/i, '').split(' ').map(function(x) { return x[0]; }).slice(0,2).join('').toUpperCase();
            var did = d.id.replace(/'/g, "\\'");
            var daysSummary = summarizeDoctorDays(d.availability);
            var modeBadge = d.booking_mode === 'token'
               ? '<span class="apt-mode-badge mode-token">🎟 Token-only</span>'
               : '<span class="apt-mode-badge mode-slot">🕒 Slot booking</span>';
            var photoBlock = d.photo
               ? '<img class="apt-doc-photo" src="' + d.photo.replace(/"/g,'&quot;') + '" alt="' + d.name + '" onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'apt-doc-photo apt-doc-photo-fallback\',textContent:\'' + initials + '\'}))"/>'
               : '<div class="apt-doc-photo apt-doc-photo-fallback">' + initials + '</div>';
            html += '<div class="apt-doc-card">' +
                      photoBlock +
                      '<div class="apt-doc-body">' +
                         '<div class="apt-doc-name">' + d.name + '</div>' +
                         '<div class="apt-doc-qual">' + (d.qual || '') + '</div>' +
                         '<div class="apt-doc-spec">' + (d.speciality || '') + '</div>' +
                         modeBadge +
                         '<div class="apt-doc-days">📅 ' + daysSummary + '</div>' +
                         _doctorVacationBanner(d) +
                         '<div class="apt-doc-footer">' +
                            '<div class="apt-doc-fee">₹' + (d.fee || 0) + '<span>/visit</span></div>' +
                            '<div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end">' +
                               '<button class="apt-view-btn" style="padding:5px 10px;font-size:0.78rem;background:#ef6c00" onclick="openDoctorDayCancel(\'' + pid + '\',\'' + did + '\')" title="Cancel all bookings for a day (emergency)">🚨 Day Off</button>' +
                               '<button class="apt-view-btn" style="padding:5px 10px;font-size:0.78rem" onclick="openAptDoctorModal(\'' + pid + '\',\'' + did + '\')">✏️ Edit</button>' +
                               '<button class="apt-view-btn" style="padding:5px 10px;font-size:0.78rem;background:#c62828" onclick="deleteAptDoctor(\'' + pid + '\',\'' + did + '\')">🗑</button>' +
                            '</div>' +
                         '</div>' +
                      '</div>' +
                   '</div>';
         });
         html += '</div>';
      }
      html += '</div>';
   });
   container.innerHTML = html;
}

// Cache of this shop owner's appointments so filter buttons don't re-fetch
let _shopAptsCache = null;

// ── REALTIME SUBSCRIPTIONS ──────────────────────────────
// Subscribe once per page to a Supabase table; the callback fires whenever
// any row in that table changes (insert/update/delete). Debounced so rapid
// changes only trigger one re-render.
//
// We store the channel on window so navigating away cleans it up naturally,
// and re-calling with a new callback just replaces what runs on change.
function _liveSubscribe(key, table, callback) {
   var holder = '_rt_' + key;
   if (window[holder]) {
      window[holder].callback = callback;
      return;
   }
   window[holder] = { callback: callback };
   var debounced = (function() {
      var timer;
      return function() {
         clearTimeout(timer);
         timer = setTimeout(function() {
            try { window[holder].callback(); } catch (e) { console.error(e); }
         }, 300);
      };
   })();
   try {
      window[holder].channel = _sb
         .channel(key + '-' + Math.random().toString(36).slice(2, 8))
         .on('postgres_changes', { event: '*', schema: 'public', table: table }, debounced)
         .subscribe();
   } catch (e) {
      console.warn('Realtime subscription failed for ' + table + ':', e);
   }
}

// Date range matcher. range is 'all'|'today'|'week'|'month'|'year'|'custom'|'range'.
// opts may carry { customDate, rangeFrom, rangeTo } as YYYY-MM-DD strings.
function _isDateInRange(dateStr, range, opts) {
   if (!range || range === 'all') return true;
   if (!dateStr) return false;
   opts = opts || {};
   var d = (dateStr instanceof Date) ? dateStr : new Date(/^\d{4}-\d{2}-\d{2}$/.test(dateStr) ? dateStr + 'T00:00:00' : dateStr);
   if (isNaN(d.getTime())) return false;
   var ymd = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');

   if (range === 'custom') {
      // User picked "Specific date" but hasn't typed one yet — hide everything
      // instead of silently showing all rows (which made the filter feel broken).
      if (!opts.customDate) return false;
      return ymd === opts.customDate;
   }
   if (range === 'range') {
      // Same here — selecting "Custom range" without bounds shouldn't show all.
      if (!opts.rangeFrom && !opts.rangeTo) return false;
      if (opts.rangeFrom && ymd < opts.rangeFrom) return false;
      if (opts.rangeTo   && ymd > opts.rangeTo)   return false;
      return true;
   }

   var now = new Date();
   if (range === 'today') {
      return d.getFullYear() === now.getFullYear() &&
             d.getMonth()    === now.getMonth() &&
             d.getDate()     === now.getDate();
   }
   if (range === 'week') {
      var start = new Date(now); start.setDate(now.getDate() - now.getDay()); start.setHours(0,0,0,0);
      var end   = new Date(start); end.setDate(start.getDate() + 7);
      return d >= start && d < end;
   }
   if (range === 'month') return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
   if (range === 'year')  return d.getFullYear() === now.getFullYear();
   return true;
}

// Read range + custom/range inputs and toggle their visibility.
// ids: { selectId, customId, rangeFromId, rangeToId } — last two optional.
function _readDateFilter(selectId, customInputId, rangeFromId, rangeToId) {
   var sel    = document.getElementById(selectId);
   var inp    = customInputId ? document.getElementById(customInputId) : null;
   var fromEl = rangeFromId   ? document.getElementById(rangeFromId)   : null;
   var toEl   = rangeToId     ? document.getElementById(rangeToId)     : null;
   var range  = sel ? sel.value : 'all';
   if (inp)    inp.style.display    = (range === 'custom') ? '' : 'none';
   if (fromEl) fromEl.style.display = (range === 'range')  ? '' : 'none';
   if (toEl)   toEl.style.display   = (range === 'range')  ? '' : 'none';
   return {
      range: range,
      customDate: (range === 'custom' && inp) ? inp.value : null,
      rangeFrom:  (range === 'range'  && fromEl) ? fromEl.value : null,
      rangeTo:    (range === 'range'  && toEl)   ? toEl.value   : null
   };
}

async function renderShopAppointments(filterStatus) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var list = document.getElementById('shopAppointmentList');
   if (!user) { list.innerHTML = '<div class="shop-empty">Please log in.</div>'; return; }
   window._shopAptCurrentFilter = filterStatus || '';

   // First-thing each render: auto-mark stale Confirmed bookings as No-show.
   // Runs once per page open thanks to a session flag so we don't hammer the DB
   // on every status-filter click.
   if (!window._staleNoShowSweptThisSession) {
      window._staleNoShowSweptThisSession = true;
      try { await _autoMarkStaleConfirmed(); } catch (e) { /* ignore */ }
   }

   // Live updates: re-fetch & re-render whenever an appointment row changes anywhere
   _liveSubscribe('shopApts', 'appointments', function() {
      _shopAptsCache = null;
      renderShopAppointments(window._shopAptCurrentFilter);
   });
   // Also re-render when the owner renames or removes a doctor (in the
   // Doctors tab), so the doctor column + filter pick up the new name.
   _liveSubscribe('shopAptsProvs', 'apt_providers', function() {
      renderShopAppointments(window._shopAptCurrentFilter);
   });

   // Sync the status dropdown with the current filter (was a tab-pill row before).
   var statusSel = document.getElementById('shopAptStatusFilter');
   if (statusSel && statusSel.value !== (filterStatus || '')) {
      statusSel.value = filterStatus || '';
   }

   if (!_shopAptsCache) {
      list.innerHTML = '<div class="shop-empty">Loading…</div>';
      _shopAptsCache = await AppDB.getAppointmentsByOwner(user.email);
   }
   var all = _shopAptsCache || [];

   // Make sure provider cache is fresh — doctor names are now resolved
   // LIVE from each provider's doctors[] (renames in the Doctors tab
   // propagate everywhere; deleted doctors disappear from filters).
   await loadAptProviders(true);

   // Doctor filter — tabs are built from the CURRENT doctors in the owner's
   // providers, not from stale doctor_name snapshots on past appointments.
   var doctorFilter = window._shopAptDoctorFilter || '';
   var doctorsTabsEl = document.getElementById('shopAptDoctorTabs');
   var aptProviderIds = new Set(all.map(function(a) { return a.provider_id; }).filter(Boolean));
   var currentDoctorSet = {};
   (_aptProvidersCache || []).forEach(function(p) {
      if (!aptProviderIds.has(p.id)) return;
      (p.doctors || []).forEach(function(d) { if (d.name) currentDoctorSet[d.name] = true; });
   });
   var uniqueDoctors = Object.keys(currentDoctorSet).sort();
   if (doctorsTabsEl) {
      if (uniqueDoctors.length === 0) {
         doctorsTabsEl.style.display = 'none';
         doctorFilter = '';
      } else {
         doctorsTabsEl.style.display = '';
         var allActive = !doctorFilter ? ' active' : '';
         var html = '<button class="shop-tab' + allActive + '" onclick="setShopAptDoctor(\'\')">👨‍⚕️ All doctors</button>';
         uniqueDoctors.forEach(function(d) {
            var dEsc = d.replace(/'/g, "\\'");
            var active = (doctorFilter === d) ? ' active' : '';
            html += '<button class="shop-tab' + active + '" onclick="setShopAptDoctor(\'' + dEsc + '\')">' + d + '</button>';
         });
         doctorsTabsEl.innerHTML = html;
      }
   }

   // Apply date range filter (uses appointment date, not booked-at time)
   var df = _readDateFilter('shopAptDateFilter', 'shopAptCustomDate', 'shopAptRangeFrom', 'shopAptRangeTo');
   var dateRange = df.range;
   var searchEl  = document.getElementById('shopAptSearch');
   var searchVal = (searchEl && searchEl.value || '').trim().toLowerCase();
   var dateFiltered = all.filter(function(a) {
      // Filter by LIVE doctor name — picks up renames in the Doctors tab
      if (doctorFilter && _doctorNameFor(a) !== doctorFilter) return false;
      if (!_isDateInRange(a.date, df.range, df)) return false;
      if (searchVal) {
         var hay = ((a.patient_name || '') + ' ' + (a.user_email || '') + ' ' + (a.patient_phone || '') + ' ' + (a.apt_id || '')).toLowerCase();
         if (hay.indexOf(searchVal) === -1) return false;
      }
      return true;
   });

   // Stat counters reflect the date filter so they make sense in context
   var counts = { Confirmed: 0, Completed: 0, Cancelled: 0 };
   dateFiltered.forEach(function(a) {
      var s = a.status || 'Confirmed';
      if (counts[s] !== undefined) counts[s]++;
   });
   var ce = document.getElementById('statAptConfirmed'); if (ce) ce.textContent = counts.Confirmed;
   var cm = document.getElementById('statAptCompleted'); if (cm) cm.textContent = counts.Completed;
   var cc = document.getElementById('statAptCancelled'); if (cc) cc.textContent = counts.Cancelled;

   var apts = filterStatus ? dateFiltered.filter(function(a) { return (a.status || 'Confirmed') === filterStatus; }) : dateFiltered;
   window._shopAptsFiltered = apts;       // for CSV export
   // Sort by date → slot → token so owner sees patients in the order they should be called
   // Date → slot → booking-time. Slot mode keeps slot grouping intact (9 AM
   // slot patients stay together); within a slot it's first-booked-first-listed.
   // Token mode has empty slots so it falls through to booking-time order.
   apts.sort(function(a, b) {
      if (a.date !== b.date) return (a.date || '').localeCompare(b.date || '');
      if (a.slot !== b.slot) return (a.slot || '').localeCompare(b.slot || '');
      var ta = new Date(a.created_at || 0).getTime();
      var tb = new Date(b.created_at || 0).getTime();
      return ta - tb;
   });
   if (!apts.length) {
      var msg = 'No appointments';
      if (filterStatus) msg += ' in "' + filterStatus + '"';
      if (dateRange !== 'all') msg += ' for ' + dateRange === 'today' ? 'today' : 'this ' + dateRange;
      list.innerHTML = '<div class="shop-empty">' + msg + '.</div>';
      return;
   }

   var rows = apts.map(function(a) {
      var status = a.status || 'Confirmed';
      var cls = status === 'Cancelled' ? 'cancelled'
              : status === 'Completed' ? 'completed'
              : status === 'No-show'   ? 'noshow'
              : 'confirmed';
      // Friendlier labels for the owner — DB still stores 'Completed' / 'Cancelled' / 'No-show'.
      // 2-line labels keep the column narrow so other columns get more space.
      var statusLabel = status === 'Completed' ? 'Checkup<br>Completed'
                      : status === 'Confirmed' ? 'Appointment<br>Confirmed'
                      : status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by Patient'
                      : a.cancelled_by === 'hospital' ? 'by You'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) {
            statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
            if (a.cancellation_reason) {
               statusLabel += '<br><small style="font-weight:400;opacity:0.75" title="' + a.cancellation_reason.replace(/"/g,'&quot;') + '">"' + (a.cancellation_reason.length > 30 ? a.cancellation_reason.slice(0,30) + '…' : a.cancellation_reason) + '"</small>';
            }
         }
      }
      var aid = (a.apt_id || '').replace(/'/g, "\\'");
      var canChange = status === 'Confirmed';

      // Fee column — paid badge follows the is_paid flag (Completed implies paid)
      var isPaid = !!a.is_paid || status === 'Completed';
      var feeHtml = '<div class="apt-tbl-fee">₹' + (a.fee || 0) + '</div>';
      if (a.is_refunded) {
         feeHtml += '<div class="apt-tbl-fee-tag" style="background:#fff3e0;color:#e65100;border:1px solid #ffb74d">refunded ₹' + Number(a.refund_amount || 0) + '</div>';
      } else if (status === 'Cancelled' || status === 'No-show') {
         /* no payment badge */
      } else if (isPaid) {
         feeHtml += '<div class="apt-tbl-fee-tag paid">paid offline</div>';
      } else {
         feeHtml += '<div class="apt-tbl-fee-tag unpaid">not paid</div>';
      }

      // Booked At — when the customer placed the booking (uses created_at).
      // Also includes the booking source so owner sees online vs offline at a glance.
      var bookedAt = '';
      if (a.created_at) {
         var dt = new Date(a.created_at);
         if (!isNaN(dt.getTime())) {
            var dStr = dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
            var tStr = dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            var src = a.booking_source === 'offline' ? '📞 offline' : '🌐 online';
            bookedAt = '<div class="apt-tbl-name">' + dStr + '</div>' +
                       '<div class="apt-tbl-sub">' + tStr + '</div>' +
                       '<div class="apt-tbl-sub" style="color:#1a73e8;font-weight:600">' + src + '</div>';
         }
      }

      // Action buttons depend on status, payment, and slot time.
      // Mark-Paid: shown when not yet paid + booking still active.
      // Receipt:   enabled once is_paid OR Completed (=implies paid).
      var paidBtn;
      if (isPaid) {
         paidBtn = '<span class="apt-act-btn" style="background:#e8f5e9;color:#1b5e20;cursor:default" title="Fee already collected">✓ Paid</span>';
      } else if (status === 'Cancelled' || status === 'No-show') {
         paidBtn = '';
      } else {
         paidBtn = '<button class="apt-act-btn" style="background:#2e7d32;color:#fff" title="Mark fee as paid (patient paid at reception)" onclick="shopMarkPaid(\'' + aid + '\')">💰 Mark Paid</button>';
      }
      var receiptBtn;
      if (isPaid || a.is_refunded) {
         // Active for paid bookings AND refunded ones (refund stamp shows on the receipt).
         var rTitle = a.is_refunded ? 'Print receipt (with REFUNDED stamp)' : 'Print consultation receipt';
         receiptBtn = '<button class="apt-act-btn" style="background:#1a73e8;color:#fff" title="' + rTitle + '" onclick="printConsultationReceipt(\'' + aid + '\')">🧾 Receipt</button>';
      } else if (status === 'Cancelled' || status === 'No-show') {
         receiptBtn = '';
      } else {
         receiptBtn = '<button class="apt-act-btn" style="background:#1a73e8;color:#fff;opacity:0.4;cursor:not-allowed" title="Mark fee as paid first" disabled>🧾 Receipt</button>';
      }
      var actions;
      if (!canChange) {
         // If the booking was wrongly marked No-show (e.g. patient arrived late
         // due to traffic), the owner can revert it back to Confirmed and then
         // mark Complete normally.
         var undoBtn = (status === 'No-show')
            ? '<button class="apt-act-btn" style="background:#1565c0;color:#fff" title="Patient arrived late — move back to Confirmed" onclick="undoNoShow(\'' + aid + '\')">↩ Undo No-show</button>'
            : '';
         var rxBtn = (status === 'Completed')
            ? '<button class="apt-act-btn" style="background:#0a8a3a;color:#fff" title="Write or view prescription" onclick="openPrescriptionModal(\'' + aid + '\')">📝 Rx</button>'
            : '';
         actions = (paidBtn + receiptBtn + rxBtn + undoBtn) || '<span style="color:#bbb">—</span>';
      } else {
         var slotPassed = _slotPassed(a);
         var completeBtn = slotPassed
            ? '<button class="apt-act-btn apt-act-ok"      title="Mark as Completed" onclick="shopSetAptStatus(\'' + aid + '\',\'Completed\')">✅ Complete</button>'
            : '<button class="apt-act-btn apt-act-ok"      title="Available after the slot time" disabled style="opacity:0.4;cursor:not-allowed">✅ Complete</button>';
         var noshowBtn = '';
         // No-show available only after slot END (start + duration) so a patient
         // arriving 5 min late isn't wrongly flagged.
         if (_slotEnded(a)) {
            if (isPaid) {
               // Patient paid — by definition they showed up, so No-show is invalid.
               noshowBtn = '<button class="apt-act-btn apt-act-noshow" disabled style="opacity:0.4;cursor:not-allowed" title="Patient paid the fee — cannot be marked No-show">🚫 No-show</button>';
            } else {
               noshowBtn = '<button class="apt-act-btn apt-act-noshow" title="Patient did not show up" onclick="shopSetAptStatus(\'' + aid + '\',\'No-show\')">🚫 No-show</button>';
            }
         }
         var cancelBtn     = '<button class="apt-act-btn apt-act-cancel" title="Cancel this appointment" onclick="shopSetAptStatus(\'' + aid + '\',\'Cancelled\')">✕ Cancel</button>';
         var rescheduleBtn = '<button class="apt-act-btn" style="background:#00897b;color:#fff" title="Move to a different date/slot (no refund)" onclick="openRescheduleModal(\'' + aid + '\')">🔄 Reschedule</button>';
         var prescriptionBtn = '<button class="apt-act-btn" style="background:#0a8a3a;color:#fff" title="Write prescription (vitals + diagnosis + medicines)" onclick="openPrescriptionModal(\'' + aid + '\')">📝 Prescription</button>';
         // Stack actions: row 1 = Mark Paid + Receipt + Reschedule, row 2 = Prescription + Complete + No-show + Cancel
         actions =
            '<div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start">' +
               '<div style="display:flex;gap:4px;flex-wrap:wrap">' + paidBtn + receiptBtn + rescheduleBtn + '</div>' +
               '<div style="display:flex;gap:4px;flex-wrap:wrap">' + prescriptionBtn + completeBtn + noshowBtn + cancelBtn + '</div>' +
            '</div>';
      }
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">' + _tokenLabel(a) + '</span>'
         : '<span style="color:#bbb">—</span>';
      var slotCell  = a.slot ? _formatSlot12(a.slot) : '<span style="color:#888;font-size:0.72rem">🎟 Token mode</span>';
      var docCurrent = _doctorNameFor(a);
      var docCell = docCurrent
         ? docCurrent
         : (a.doctor_name ? '<span style="color:#888;text-decoration:line-through" title="Doctor no longer in directory">' + a.doctor_name + '</span>' : '—');
      return '<tr>' +
                '<td style="text-align:center">' + tokenCell + '</td>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div>' +
                    '<div class="apt-tbl-slot">' + slotCell + '</div></td>' +
                '<td><div class="apt-tbl-name">' + docCell + '</div>' +
                    '<div class="apt-tbl-sub">' + (a.speciality || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.patient_name || a.user_email || '') + '</div>' +
                    (a.patient_phone ? '<div class="apt-tbl-sub">' + a.patient_phone + '</div>' : '') + '</td>' +
                '<td class="apt-tbl-symptom" title="' + (a.patient_reason || '').replace(/"/g,'&quot;') + '">' + (a.patient_reason || '<span style="color:#bbb">—</span>') + '</td>' +
                '<td style="text-align:right">' + feeHtml + '</td>' +
                '<td><span class="order-badge ' + cls + '">' + statusLabel + '</span></td>' +
                '<td class="apt-tbl-actions">' + actions + '</td>' +
                '<td class="apt-tbl-booked">' + bookedAt + '</td>' +
                '<td class="apt-tbl-id">' + a.apt_id + '</td>' +
             '</tr>';
   }).join('');

   list.innerHTML =
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th style="text-align:center">Token</th>' +
              '<th>Date / Slot</th>' +
              '<th>Doctor</th>' +
              '<th>Patient</th>' +
              '<th class="apt-tbl-symptom">Symptom / Reason</th>' +
              '<th style="text-align:right">Fee</th>' +
              '<th>Status</th>' +
              '<th>Actions</th>' +
              '<th class="apt-tbl-booked">Booked</th>' +
              '<th class="apt-tbl-id">Appt ID</th>' +
           '</tr></thead>' +
           '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>';
}

// Doctor tab click — sets the filter and re-renders, preserving the status filter.
function setShopAptDoctor(doctorName) {
   window._shopAptDoctorFilter = doctorName || '';
   renderShopAppointments(window._shopAptCurrentFilter);
}

// ── DASHBOARD overview (hospital owner's landing page) ──
async function renderShopOverview() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var container = document.getElementById('shopDashboardContent');
   if (!user || !container) return;
   // Always force a fresh fetch when the dashboard renders — keeps the queue
   // in sync with what the Appointments table shows.
   _shopAptsCache = null;
   _liveSubscribe('shopDash', 'appointments', function() {
      _shopAptsCache = null;
      renderShopOverview();
   });
   _liveSubscribe('shopDashProvs', 'apt_providers', renderShopOverview);
   // Run the auto-no-show sweep once per session so the dashboard counts are
   // accurate even before owner opens the Appointments tab.
   if (!window._staleNoShowSweptThisSession) {
      window._staleNoShowSweptThisSession = true;
      try { await _autoMarkStaleConfirmed(); } catch (e) { /* ignore */ }
   }
   await loadAptCategories();
   await loadAptProviders(true);

   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase();
   });
   if (!mine.length) {
      container.innerHTML = '<div style="background:#fff;padding:2rem;text-align:center;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.06);color:#666">' +
         '<h2 style="margin-top:0">👋 Welcome, ' + (user.name || '') + '</h2>' +
         '<p>No hospital/clinic is linked to your account yet. Ask the admin to assign one — once linked, you\'ll see your dashboard, doctors, appointments and scheduling tools here.</p>' +
      '</div>';
      return;
   }

   // Fetch all my bookings for stats
   var apts = await AppDB.getAppointmentsByOwner(user.email);
   var todayYmd  = _todayLocalYmd();
   var now = new Date();
   var weekStart = new Date(now);
   weekStart.setDate(now.getDate() - now.getDay());   // Sunday
   weekStart.setHours(0, 0, 0, 0);
   var monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

   var html = '';
   mine.forEach(function(p) {
      var meta = APT_CAT_META[p.category] || {};
      var docCount = (p.doctors || []).length;
      var provApts = apts.filter(function(a) { return a.provider_id === p.id; });
      var todayApts     = provApts.filter(function(a) { return a.date === todayYmd && a.status !== 'Cancelled'; });
      var todayPending  = todayApts.filter(function(a) { return a.status === 'Confirmed'; });
      var todayDone     = todayApts.filter(function(a) { return a.status === 'Completed'; });
      var thisWeek      = provApts.filter(function(a) { var d = new Date(a.date + 'T00:00:00'); return !isNaN(d) && d >= weekStart && a.status !== 'Cancelled'; });
      var thisMonth     = provApts.filter(function(a) { var d = new Date(a.date + 'T00:00:00'); return !isNaN(d) && d >= monthStart && a.status === 'Completed'; });
      var monthRevenue  = thisMonth.reduce(function(s, a) { return s + (a.fee || 0); }, 0);

      var photoBlock = '';
      if (p.icon) photoBlock = '<div class="shop-ov-icon">' + p.icon + '</div>';

      // Hospital identity is already in the sidebar profile (and shows up on
      // every page) — skip the redundant header/info block on the dashboard.
      html +=
         '<div class="shop-ov-card">' +
            '<div class="hosp-kpi-grid">' +
               '<div id="hkpi-beds-' + p.id + '" class="hosp-kpi-card"><div class="hkpi-head"><span>🛏️</span><span>Total Beds</span></div><div class="hkpi-body"><span class="hkpi-num">—</span></div><div class="hkpi-sub">Loading…</div></div>' +
               _hkpi('👨‍⚕️', 'Doctors', docCount - (p.doctors||[]).filter(function(d){return d.on_leave;}).length, 'Active', (p.doctors||[]).filter(function(d){return d.on_leave;}).length + ' on leave') +
               '<div id="hkpi-pts-' + p.id + '" class="hosp-kpi-card"><div class="hkpi-head"><span>👥</span><span>Patients</span></div><div class="hkpi-body"><span class="hkpi-num">—</span></div><div class="hkpi-sub">Loading…</div></div>' +
               (function(){
                  var todayCollected = todayApts.filter(function(a){return a.status==='Completed';}).reduce(function(s,a){return s+(a.fee||0);},0);
                  var todayPending   = todayApts.filter(function(a){return a.status==='Confirmed';}).reduce(function(s,a){return s+(a.fee||0);},0);
                  return _hkpi('💰', 'Revenue', '₹' + todayCollected.toLocaleString('en-IN'), 'Today', '₹' + todayPending.toLocaleString('en-IN') + ' pending · Month: ₹' + monthRevenue.toLocaleString('en-IN'));
               })() +
               '<div id="hkpi-adm-' + p.id + '" class="hosp-kpi-card"><div class="hkpi-head"><span>🏥</span><span>Admissions</span></div><div class="hkpi-body"><span class="hkpi-num">—</span></div><div class="hkpi-sub">Loading…</div></div>' +
            '</div>' +
            '<div class="shop-ov-layout">' +
               '<div class="shop-ov-main">' +
                  _renderHospitalSurvey(provApts) +
                  _todayQueueWidget(provApts, todayYmd) +
               '</div>' +
               '<aside class="shop-ov-sidebar">' +
                  _renderStatusDonut(provApts) +
               '</aside>' +
            '</div>' +
         '</div>';
   });

   container.innerHTML = html;

   // Async: fill admission-dependent KPI cards
   mine.forEach(async function(p) {
      var provApts2 = apts.filter(function(a) { return a.provider_id === p.id; });
      var admRows   = await AppDB.getAdmissions(p.id);
      var bedRows   = await AppDB.getBeds(p.id);
      var admitted  = admRows.filter(function(r) { return r.status === 'Admitted'; });
      var discharged= admRows.filter(function(r) { return r.status === 'Discharged'; }).length;
      var todayDisch= admitted.filter(function(r) { return r.target_discharge === todayYmd; }).length;
      var newToday  = admRows.filter(function(r) { return r.admit_date === todayYmd; }).length;
      var uniquePts = new Set(provApts2.map(function(a) { return a.patient_phone || a.id; })).size;
      var totalBeds = bedRows.filter(function(b) { return b.active !== false; }).length;
      var availBeds = bedRows.filter(function(b) { return b.active !== false && b.status === 'Available'; }).length;
      var occBeds   = bedRows.filter(function(b) { return b.active !== false && b.status === 'Occupied'; }).length;

      var bedsEl = document.getElementById('hkpi-beds-' + p.id);
      if (bedsEl) bedsEl.innerHTML =
         '<div class="hkpi-head"><span>🛏️</span><span>Total Beds</span></div>' +
         '<div class="hkpi-body"><span class="hkpi-num">' + totalBeds + '</span>' +
            '<span class="hkpi-badge hkpi-green">' + availBeds + ' Available</span>' +
            '<span class="hkpi-badge hkpi-red" style="margin-left:4px">' + occBeds + ' Occupied</span>' +
         '</div>' +
         '<div class="hkpi-sub">' + (totalBeds - availBeds - occBeds) + ' under maintenance / reserved</div>';

      var ptsEl = document.getElementById('hkpi-pts-' + p.id);
      if (ptsEl) ptsEl.innerHTML =
         '<div class="hkpi-head"><span>👥</span><span>Patients</span></div>' +
         '<div class="hkpi-body"><span class="hkpi-num">' + uniquePts + '</span><span class="hkpi-badge hkpi-blue">Total</span></div>' +
         '<div class="hkpi-sub">Unique via appointments · ' + admitted.length + ' admitted</div>';

      var admEl = document.getElementById('hkpi-adm-' + p.id);
      if (admEl) admEl.innerHTML =
         '<div class="hkpi-head"><span>🏥</span><span>Admissions</span></div>' +
         '<div class="hkpi-body"><span class="hkpi-num">' + admitted.length + '</span><span class="hkpi-badge hkpi-green">Active</span></div>' +
         '<div class="hkpi-sub">' + newToday + ' new today · ' + discharged + ' discharged · ' + admRows.length + ' total</div>';

      // Re-render hospital survey with admissions data injected
      var kpiEl = document.getElementById('hkpi-beds-' + p.id);
      var surveyEl = kpiEl && kpiEl.closest('.shop-ov-card') && kpiEl.closest('.shop-ov-card').querySelector('.hospital-survey');
      if (surveyEl) {
         var provApts3 = apts.filter(function(a) { return a.provider_id === p.id; });
         var tmp = document.createElement('div');
         tmp.innerHTML = _renderHospitalSurvey(provApts3, admRows);
         var newNode = tmp.firstElementChild;
         if (newNode) surveyEl.parentNode.replaceChild(newNode, surveyEl);
      }

   });
}

// Cliniva-style KPI card — pastel icon tile + big number + label + sparkline.
// `trend` is an array of numbers (e.g. last 7 days); rendered as a tiny SVG.
function _kpiCard(color, icon, value, label, trend) {
   var spark = (trend && trend.length > 1) ? _renderSparkline(trend, color) : '';
   return '<div class="shop-stat" style="cursor:default">' +
             '<div class="shop-stat-icon shop-stat-icon-' + color + '">' + icon + '</div>' +
             '<div class="shop-stat-body">' +
                '<div class="shop-stat-num">' + value + '</div>' +
                '<div class="shop-stat-label">' + label + '</div>' +
                spark +
             '</div>' +
          '</div>';
}

function _hkpi(icon, title, num, badge, sub) {
   var badgeHtml = badge ? '<span class="hkpi-badge hkpi-green">' + badge + '</span>' : '';
   return '<div class="hosp-kpi-card">' +
             '<div class="hkpi-head"><span>' + icon + '</span><span>' + title + '</span></div>' +
             '<div class="hkpi-body"><span class="hkpi-num">' + num + '</span>' + badgeHtml + '</div>' +
             '<div class="hkpi-sub">' + sub + '</div>' +
          '</div>';
}

function _ipChip(icon, value, label, color) {
   return '<div style="display:flex;align-items:center;gap:5px;background:' + color + '12;border:1px solid ' + color + '30;border-radius:8px;padding:4px 10px">' +
             '<span style="font-size:0.85rem">' + icon + '</span>' +
             '<span style="font-size:1rem;font-weight:800;color:' + color + '">' + value + '</span>' +
             '<span style="font-size:0.68rem;color:#6b7280;line-height:1">' + label + '</span>' +
          '</div>';
}

function _ipStatRow(icon, value, label, color) {
   return '<div style="display:flex;align-items:center;gap:8px;background:#fff;border-radius:8px;padding:6px 10px;border:1px solid #d1fae5">' +
             '<div style="width:26px;height:26px;border-radius:6px;background:' + color + '18;display:flex;align-items:center;justify-content:center;font-size:0.85rem;flex-shrink:0">' + icon + '</div>' +
             '<div>' +
                '<div style="font-size:1.05rem;font-weight:800;color:#1a1a2e;line-height:1">' + value + '</div>' +
                '<div style="font-size:0.65rem;color:#6b7280;text-transform:uppercase;letter-spacing:0.03em;margin-top:1px;white-space:nowrap">' + label + '</div>' +
             '</div>' +
          '</div>';
}

// ── Cliniva Hospital Survey area chart — 30-day daily appointments ──
// "New" = regular bookings (is_followup=false). "Follow-up" = free FT* bookings.
function _renderHospitalSurvey(apts, admRows) {
   var days = 30;
   var labels = [];
   var newSeries = new Array(days).fill(0);   // regular bookings
   var oldSeries = new Array(days).fill(0);   // follow-up bookings
   var admSeries = new Array(days).fill(0);   // new admissions
   var today = new Date(); today.setHours(0, 0, 0, 0);
   for (var i = 0; i < days; i++) {
      var d = new Date(today); d.setDate(today.getDate() - (days - 1 - i));
      labels.push(d);
   }
   (apts || []).forEach(function(a) {
      if (a.status === 'Cancelled') return;
      var d = new Date((a.date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return;
      var diff = Math.round((today - d) / 86400000);
      if (diff < 0 || diff >= days) return;
      var idx = days - 1 - diff;
      if (a.is_followup) oldSeries[idx] += 1;
      else               newSeries[idx] += 1;
   });
   (admRows || []).forEach(function(a) {
      var d = new Date((a.admit_date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return;
      var diff = Math.round((today - d) / 86400000);
      if (diff < 0 || diff >= days) return;
      admSeries[days - 1 - diff] += 1;
   });

   // SVG area chart — narrower viewBox; the CSS container caps width
   var w = 760, h = 180, padL = 32, padR = 14, padT = 14, padB = 26;
   var plotW = w - padL - padR;
   var plotH = h - padT - padB;
   var maxVal = Math.max(1, Math.max.apply(null, newSeries.concat(oldSeries).concat(admSeries)));
   // Round max up to nearest "nice" number
   var step = maxVal <= 5 ? 1 : maxVal <= 10 ? 2 : maxVal <= 50 ? 10 : 20;
   var ceil = Math.ceil(maxVal / step) * step;
   var stepX = plotW / Math.max(1, days - 1);

   function toPath(series) {
      var pts = series.map(function(v, i) {
         var x = padL + i * stepX;
         var y = padT + plotH - (v / ceil) * plotH;
         return x.toFixed(1) + ',' + y.toFixed(1);
      });
      return 'M' + pts.join(' L');
   }
   function toArea(series) {
      var line = toPath(series);
      var lastX = padL + (days - 1) * stepX;
      return line + ' L' + lastX.toFixed(1) + ',' + (padT + plotH).toFixed(1) +
                    ' L' + padL.toFixed(1)  + ',' + (padT + plotH).toFixed(1) + ' Z';
   }

   // Y axis grid lines + labels
   var gridLines = '';
   var gridSteps = 4;
   for (var g = 0; g <= gridSteps; g++) {
      var y = padT + (plotH / gridSteps) * g;
      var label = Math.round(ceil - (ceil / gridSteps) * g);
      gridLines += '<line x1="' + padL + '" x2="' + (w - padR) + '" y1="' + y + '" y2="' + y + '" stroke="#eef0f5" stroke-width="1"/>';
      gridLines += '<text x="' + (padL - 6) + '" y="' + (y + 3) + '" text-anchor="end" font-size="10" fill="#8a93a7">' + label + '</text>';
   }
   // X axis labels (every 5 days, but skip the one nearest "Today" to avoid overlap)
   var xLabels = '';
   var todayIdx = days - 1;
   for (var i = 0; i < days; i += 5) {
      if (todayIdx - i < 3) continue;          // too close to Today label → skip
      var lx = padL + i * stepX;
      var lbl = labels[i].toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      xLabels += '<text x="' + lx + '" y="' + (h - 8) + '" text-anchor="middle" font-size="10" fill="#8a93a7">' + lbl + '</text>';
   }
   // Explicit "Today" label + vertical marker at the rightmost data point
   var todayX = padL + todayIdx * stepX;
   xLabels +=
      '<line x1="' + todayX + '" x2="' + todayX + '" y1="' + padT + '" y2="' + (padT + plotH) + '" stroke="#1a73e8" stroke-width="1" stroke-dasharray="2 3" opacity="0.55"/>' +
      '<text x="' + todayX + '" y="' + (h - 8) + '" text-anchor="middle" font-size="10" fill="#1a73e8" font-weight="700">Today</text>';

   var svg =
      '<svg viewBox="0 0 ' + w + ' ' + h + '" width="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" ' +
            'onmousemove="_hospitalSurveyHover(event)" onmouseleave="_hospitalSurveyHide(event)">' +
         '<defs>' +
            '<linearGradient id="ngrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#1e88e5" stop-opacity="0.35"/><stop offset="100%" stop-color="#1e88e5" stop-opacity="0.02"/></linearGradient>' +
            '<linearGradient id="ograd" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#ef6c00" stop-opacity="0.30"/><stop offset="100%" stop-color="#ef6c00" stop-opacity="0.02"/></linearGradient>' +
            '<linearGradient id="agrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#7c3aed" stop-opacity="0.28"/><stop offset="100%" stop-color="#7c3aed" stop-opacity="0.02"/></linearGradient>' +
         '</defs>' +
         gridLines +
         '<path d="' + toArea(oldSeries) + '" fill="url(#ograd)"/>' +
         '<path d="' + toPath(oldSeries) + '" fill="none" stroke="#ef6c00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
         '<path d="' + toArea(newSeries) + '" fill="url(#ngrad)"/>' +
         '<path d="' + toPath(newSeries) + '" fill="none" stroke="#1e88e5" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
         '<path d="' + toArea(admSeries) + '" fill="url(#agrad)"/>' +
         '<path d="' + toPath(admSeries) + '" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 3"/>' +
         '<line class="hs-crosshair" x1="0" x2="0" y1="' + padT + '" y2="' + (padT+plotH) + '" stroke="#90a4ae" stroke-width="1" stroke-dasharray="3 3" opacity="0"/>' +
         '<circle class="hs-marker hs-marker-new" cx="0" cy="0" r="4" fill="#1e88e5" stroke="#fff" stroke-width="2" opacity="0"/>' +
         '<circle class="hs-marker hs-marker-old" cx="0" cy="0" r="4" fill="#ef6c00" stroke="#fff" stroke-width="2" opacity="0"/>' +
         '<circle class="hs-marker hs-marker-adm" cx="0" cy="0" r="4" fill="#7c3aed" stroke="#fff" stroke-width="2" opacity="0"/>' +
         xLabels +
      '</svg>';

   // Serialize the data the hover handler needs (kept tiny — just numbers).
   // Use LOCAL YMD, not toISOString — toISOString converts to UTC which in
   // IST (+5:30) shifts midnight back to the previous day's evening, making
   // "9 Jun" render as "8 Jun" in the tooltip.
   var _ymd = function(d) {
      return d.getFullYear() + '-' +
             String(d.getMonth() + 1).padStart(2, '0') + '-' +
             String(d.getDate()).padStart(2, '0');
   };
   var daysIso = labels.map(_ymd);
   var dataAttrs =
      ' data-days="' + daysIso.join(',') + '"' +
      ' data-new="' + newSeries.join(',') + '"' +
      ' data-old="' + oldSeries.join(',') + '"' +
      ' data-adm="' + admSeries.join(',') + '"' +
      ' data-ceil="' + ceil + '"' +
      ' data-vw="' + w + '" data-vh="' + h + '"' +
      ' data-padl="' + padL + '" data-padr="' + padR + '" data-padt="' + padT + '" data-padb="' + padB + '"';

   return '<div class="hospital-survey"' + dataAttrs + '>' +
             '<div class="hs-head">' +
                '<div class="hs-title">Hospital Survey</div>' +
                '<div class="hs-legend">' +
                   '<span class="hs-leg-dot" style="background:#1e88e5"></span>New Patients' +
                   '<span class="hs-leg-dot" style="background:#ef6c00;margin-left:14px"></span>Follow-up' +
                   '<span class="hs-leg-dot" style="background:#7c3aed;margin-left:14px"></span>Admissions' +
                '</div>' +
             '</div>' +
             '<div class="hs-chart">' + svg +
                '<div class="hs-tooltip hidden"></div>' +
             '</div>' +
          '</div>';
}

// Hover handler: snaps to the nearest day, moves the crosshair + dots, shows
// a small tooltip with the date and both series' values.
function _hospitalSurveyHover(e) {
   var svg = e.currentTarget;
   var container = svg.closest('.hospital-survey');
   if (!container) return;
   var d = container.dataset;
   var days = d.days.split(',');
   var n    = d.new.split(',').map(Number);
   var o    = d.old.split(',').map(Number);
   var a    = (d.adm || '').split(',').map(Number);
   var vw = +d.vw, vh = +d.vh, padL = +d.padl, padR = +d.padr, padT = +d.padt, padB = +d.padb;
   var ceil = +d.ceil;
   var plotW = vw - padL - padR;
   var plotH = vh - padT - padB;

   var rect = svg.getBoundingClientRect();
   var vx = ((e.clientX - rect.left) / rect.width)  * vw;
   if (vx < padL || vx > vw - padR) { _hospitalSurveyHide(e); return; }

   var step = plotW / Math.max(1, days.length - 1);
   var idx = Math.min(days.length - 1, Math.max(0, Math.round((vx - padL) / step)));
   var snapVx = padL + idx * step;

   var line = svg.querySelector('.hs-crosshair');
   var mNew = svg.querySelector('.hs-marker-new');
   var mOld = svg.querySelector('.hs-marker-old');
   var mAdm = svg.querySelector('.hs-marker-adm');
   if (line) { line.setAttribute('x1', snapVx); line.setAttribute('x2', snapVx); line.setAttribute('opacity', '1'); }
   if (mNew) {
      var yN = padT + plotH - (n[idx] / ceil) * plotH;
      mNew.setAttribute('cx', snapVx); mNew.setAttribute('cy', yN); mNew.setAttribute('opacity', '1');
   }
   if (mOld) {
      var yO = padT + plotH - (o[idx] / ceil) * plotH;
      mOld.setAttribute('cx', snapVx); mOld.setAttribute('cy', yO); mOld.setAttribute('opacity', '1');
   }
   if (mAdm) {
      var yA = padT + plotH - ((a[idx] || 0) / ceil) * plotH;
      mAdm.setAttribute('cx', snapVx); mAdm.setAttribute('cy', yA); mAdm.setAttribute('opacity', '1');
   }

   var tip = container.querySelector('.hs-tooltip');
   if (tip) {
      var dt = new Date(days[idx] + 'T00:00:00');
      var label = dt.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' });
      tip.innerHTML = '<div class="hs-tip-date">' + label + '</div>' +
                      '<div class="hs-tip-row"><span style="background:#1e88e5"></span>New patients: <strong>' + n[idx] + '</strong></div>' +
                      '<div class="hs-tip-row"><span style="background:#ef6c00"></span>Follow-ups: <strong>' + o[idx] + '</strong></div>' +
                      '<div class="hs-tip-row"><span style="background:#7c3aed"></span>Admissions: <strong>' + (a[idx] || 0) + '</strong></div>';
      // Convert snapped viewBox x back to chart-container pixels
      var px = (snapVx / vw) * rect.width;
      var chart = container.querySelector('.hs-chart');
      var maxLeft = chart.clientWidth - 140;     // tooltip width-ish
      var left = Math.max(8, Math.min(maxLeft, px + 12));
      tip.style.left = left + 'px';
      tip.classList.remove('hidden');
   }
}
function _hospitalSurveyHide(e) {
   var svg = e && e.currentTarget;
   var container = svg ? svg.closest('.hospital-survey') : document.querySelector('.hospital-survey');
   if (!container) return;
   var line = container.querySelector('.hs-crosshair');
   var mNew = container.querySelector('.hs-marker-new');
   var mOld = container.querySelector('.hs-marker-old');
   var mAdm = container.querySelector('.hs-marker-adm');
   [line, mNew, mOld, mAdm].forEach(function(el) { if (el) el.setAttribute('opacity', '0'); });
   var tip = container.querySelector('.hs-tooltip');
   if (tip) tip.classList.add('hidden');
}

// Sidebar card: appointment status donut — Confirmed / Completed / No-show / Cancelled.
// Filterable by Day / Week / Month / Year via the pill toggle at the top.
function _filterAptsByRange(apts, range) {
   var today = new Date(); today.setHours(0, 0, 0, 0);
   var todayYmd = _todayLocalYmd();
   var weekStart = new Date(today); weekStart.setDate(today.getDate() - today.getDay()); weekStart.setHours(0,0,0,0);
   var monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
   var yearStart  = new Date(today.getFullYear(), 0, 1);
   return (apts || []).filter(function(a) {
      var d = new Date((a.date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return false;
      if (range === 'day')   return a.date === todayYmd;
      if (range === 'week')  return d >= weekStart;
      if (range === 'month') return d >= monthStart;
      if (range === 'year')  return d >= yearStart;
      return true;                                            // 'all' / default
   });
}

function _renderStatusDonut(apts) {
   var range = window._donutRange || 'day';
   var filtered = _filterAptsByRange(apts, range);
   var counts = { Confirmed: 0, Completed: 0, 'No-show': 0, Cancelled: 0 };
   filtered.forEach(function(a) {
      if (counts[a.status] !== undefined) counts[a.status] += 1;
   });
   var total = counts.Confirmed + counts.Completed + counts['No-show'] + counts.Cancelled;

   // Color palette matches the badge colors used elsewhere
   var segments = [
      { key: 'Confirmed', label: 'Confirmed', color: '#7e57c2', count: counts.Confirmed },
      { key: 'Completed', label: 'Completed', color: '#2e7d32', count: counts.Completed },
      { key: 'No-show',   label: 'No-show',   color: '#ef6c00', count: counts['No-show'] },
      { key: 'Cancelled', label: 'Cancelled', color: '#c62828', count: counts.Cancelled }
   ];

   var size = 140, cx = size / 2, cy = size / 2, r = 56, rInner = 38;
   var svg = '';
   if (total === 0) {
      // Empty state — grey ring
      svg = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#eef0f5" stroke-width="' + (r - rInner) + '"/>';
   } else {
      var angle = -Math.PI / 2;   // start at 12 o'clock
      segments.forEach(function(s) {
         if (s.count === 0) return;
         var slice = (s.count / total) * Math.PI * 2;
         var a0 = angle, a1 = angle + slice;
         var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
         var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
         var xi1 = cx + rInner * Math.cos(a1), yi1 = cy + rInner * Math.sin(a1);
         var xi0 = cx + rInner * Math.cos(a0), yi0 = cy + rInner * Math.sin(a0);
         var largeArc = slice > Math.PI ? 1 : 0;
         var d = 'M' + x0 + ',' + y0 +
                 ' A' + r + ',' + r + ' 0 ' + largeArc + ' 1 ' + x1 + ',' + y1 +
                 ' L' + xi1 + ',' + yi1 +
                 ' A' + rInner + ',' + rInner + ' 0 ' + largeArc + ' 0 ' + xi0 + ',' + yi0 +
                 ' Z';
         svg += '<path d="' + d + '" fill="' + s.color + '"><title>' + s.label + ': ' + s.count + '</title></path>';
         angle = a1;
      });
   }

   var legend = segments.map(function(s) {
      var pct = total ? Math.round((s.count / total) * 100) : 0;
      return '<div class="donut-leg-row">' +
                '<span class="donut-leg-dot" style="background:' + s.color + '"></span>' +
                '<span class="donut-leg-lbl">' + s.label + '</span>' +
                '<span class="donut-leg-num">' + s.count + ' <span class="donut-leg-pct">(' + pct + '%)</span></span>' +
             '</div>';
   }).join('');

   var ranges = [['day', 'Day'], ['week', 'Week'], ['month', 'Month'], ['year', 'Year']];
   var rangeToggle = '<div class="donut-range">' +
      ranges.map(function(r) {
         return '<button class="donut-range-btn' + (range === r[0] ? ' active' : '') +
                '" onclick="_setDonutRange(\'' + r[0] + '\')">' + r[1] + '</button>';
      }).join('') +
   '</div>';

   return '<div class="status-donut-card">' +
             '<div class="donut-title">Appointments Status</div>' +
             rangeToggle +
             '<div class="donut-wrap">' +
                '<svg viewBox="0 0 ' + size + ' ' + size + '" width="140" height="140">' + svg + '</svg>' +
                '<div class="donut-center">' +
                   '<div class="donut-center-num">' + total + '</div>' +
                   '<div class="donut-center-lbl">Total</div>' +
                '</div>' +
             '</div>' +
             '<div class="donut-legend">' + legend + '</div>' +
          '</div>';
}

// Range toggle handler — re-renders the dashboard so the donut updates.
function _setDonutRange(r) {
   window._donutRange = r;
   renderShopOverview();
}

// Sidebar card: total today's appointments split into completed / upcoming
function _renderTotalAppointmentsCard(todayApts, todayPending, todayDone) {
   return '<div class="total-apts-card">' +
             '<div class="tac-label">Total Appointments</div>' +
             '<div class="tac-total">' + (todayApts.length || 0) + '</div>' +
             '<div class="tac-split">' +
                '<div class="tac-chip tac-done">' +
                   '<div class="tac-chip-num">' + todayDone.length + '</div>' +
                   '<div class="tac-chip-lbl">Completed</div>' +
                '</div>' +
                '<div class="tac-chip tac-up">' +
                   '<div class="tac-chip-num">' + todayPending.length + '</div>' +
                   '<div class="tac-chip-lbl">Upcoming</div>' +
                '</div>' +
             '</div>' +
          '</div>';
}

// Last 7 days (oldest → today) appointment count, optionally filtered by status.
// Returns array of 7 numbers — drives KPI sparklines.
function _last7DayCounts(apts, status) {
   var buckets = new Array(7).fill(0);
   var now = new Date(); now.setHours(0, 0, 0, 0);
   (apts || []).forEach(function(a) {
      if (status !== 'all' && a.status !== status) return;
      if (status === 'all' && a.status === 'Cancelled') return;
      var d = new Date((a.date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return;
      var diff = Math.round((now - d) / 86400000);
      if (diff >= 0 && diff < 7) buckets[6 - diff] += 1;
   });
   return buckets;
}
function _last7DayRevenue(apts) {
   var buckets = new Array(7).fill(0);
   var now = new Date(); now.setHours(0, 0, 0, 0);
   (apts || []).forEach(function(a) {
      if (a.status !== 'Completed') return;
      var d = new Date((a.date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return;
      var diff = Math.round((now - d) / 86400000);
      if (diff >= 0 && diff < 7) buckets[6 - diff] += Number(a.fee) || 0;
   });
   return buckets;
}

// Tiny inline-SVG line chart. Color matches the KPI's pastel theme.
function _renderSparkline(values, color) {
   var palette = {
      purple: '#7e57c2', orange: '#ef6c00', green: '#2e7d32',
      blue:   '#1e88e5', red:    '#c62828'
   };
   var stroke = palette[color] || '#1a73e8';
   var fill   = stroke;
   var w = 120, h = 28;
   var max = Math.max.apply(null, values.concat([1]));
   var min = Math.min.apply(null, values);
   var range = max - min || 1;
   var step = values.length > 1 ? w / (values.length - 1) : 0;
   var pts = values.map(function(v, i) {
      var x = i * step;
      var y = h - 2 - ((v - min) / range) * (h - 6);
      return x.toFixed(1) + ',' + y.toFixed(1);
   });
   var line = pts.join(' ');
   var area = 'M0,' + h + ' L' + line.split(' ').join(' L') + ' L' + w + ',' + h + ' Z';
   return '<svg class="kpi-spark" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" width="100%" height="28" xmlns="http://www.w3.org/2000/svg">' +
             '<path d="' + area + '" fill="' + fill + '" opacity="0.12"/>' +
             '<polyline points="' + line + '" fill="none" stroke="' + stroke + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
          '</svg>';
}

function _statCard(icon, value, label) {
   return '<div class="shop-ov-stat">' +
             '<div class="shop-ov-stat-icon">' + icon + '</div>' +
             '<div class="shop-ov-stat-val">' + value + '</div>' +
             '<div class="shop-ov-stat-label">' + label + '</div>' +
          '</div>';
}

// Sidebar row form for the new two-column dashboard layout. Icon left, label
// stack right (number + small description).
function _statRow(icon, value, label) {
   return '<div class="shop-stat-row">' +
             '<div class="shop-stat-row-icon">' + icon + '</div>' +
             '<div class="shop-stat-row-body">' +
                '<div class="shop-stat-row-val">' + value + '</div>' +
                '<div class="shop-stat-row-lbl">' + label + '</div>' +
             '</div>' +
          '</div>';
}

// Today's Queue widget — next-to-be-seen list for the owner's dashboard.
// Shows up to 5 upcoming Confirmed bookings sorted by slot time + token.
// Slots that have already ENDED are skipped (they're past, not callable).
function _todayQueueWidget(provApts, todayYmd) {
   // Show every Confirmed booking for today — even if the slot ended already.
   // A doctor running late may still need to see them. Patients disappear only
   // when the booking is explicitly resolved (Completed / No-show / Cancelled).
   var queue = (provApts || []).filter(function(a) {
      return a.date === todayYmd && a.status === 'Confirmed';
   });
   // Slot mode → group by slot first (keep 9 AM slot before 10 AM), then sort
   //   by booking time WITHIN each slot.
   // Token mode → all slots are empty, so the slot comparison is a no-op and
   //   we fall straight to booking time order.
   queue.sort(function(a, b) {
      if (a.slot !== b.slot) return (a.slot || '').localeCompare(b.slot || '');
      var ta = new Date(a.created_at || 0).getTime();
      var tb = new Date(b.created_at || 0).getTime();
      return ta - tb;
   });
   var top = queue.slice(0, 5);
   var extra = queue.length - top.length;

   var bodyHtml;
   if (top.length === 0) {
      bodyHtml = '<div class="shop-queue-empty">No upcoming patients today. ✓</div>';
   } else {
      bodyHtml = top.map(function(a) {
         var slot = a.slot ? _formatSlot12(a.slot) : '🎟 Token';
         var paidHtml = a.is_paid ? '<span class="shop-queue-paid" title="Fee paid">✓ Paid</span>' : '';
         var reasonRaw = (a.patient_reason || '').replace(/"/g, '&quot;');
         var reasonHtml = a.patient_reason
            ? '<div class="shop-queue-reason" title="' + reasonRaw + '">' + a.patient_reason + '</div>'
            : '<div class="shop-queue-reason" style="color:#bbb">—</div>';
         return '<div class="shop-queue-row">' +
                   '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">' + _tokenLabel(a) + '</span>' +
                   '<div class="shop-queue-time">' + slot + '</div>' +
                   '<div class="shop-queue-name">' + (a.patient_name || '—') + paidHtml + '</div>' +
                   reasonHtml +
                   '<div class="shop-queue-doc">' + (_doctorNameFor(a) || '') + '</div>' +
                '</div>';
      }).join('');
   }

   // Column header row — only shown when there's at least one queue entry.
   // Grid columns match .shop-queue-row: token | slot | patient | symptom | doctor
   var headerRow = top.length === 0 ? '' :
      '<div class="shop-queue-row shop-queue-cols-head">' +
         '<span class="shop-queue-col-lbl">#</span>' +
         '<div class="shop-queue-col-lbl">Slot</div>' +
         '<div class="shop-queue-col-lbl">Patient</div>' +
         '<div class="shop-queue-col-lbl">Symptom</div>' +
         '<div class="shop-queue-col-lbl">Doctor</div>' +
      '</div>';

   return '<div class="shop-queue-card">' +
             '<div class="shop-queue-head">' +
                '<span>🎟 Today\'s Queue</span>' +
                (extra > 0 ? '<span class="shop-queue-more">+ ' + extra + ' more</span>' : '') +
             '</div>' +
             headerRow +
             bodyHtml +
          '</div>';
}

// ── PATIENTS tab — two sub-views toggled via pill bar at the top ──
//   Out-patients (default): unique customers from appointments, with visit
//                           counts + total paid. Optional last-visit filter.
//   In-patients: currently admitted patients from the admissions table.
var _patientsMode = 'out';
var _patientsRange = 'all';
var _patientsSearch = '';

function _setPatientsMode(m) { _patientsMode = m; renderShopPatients(); }
function _setPatientsRange(r) { _patientsRange = r; renderShopPatients(); }
// Debounced search so re-render doesn't fire on every keystroke. Preserves
// focus by mutating the row container only, not the input.
var _patientsSearchTimer = null;
function _patientsSearchInput(val) {
   clearTimeout(_patientsSearchTimer);
   _patientsSearchTimer = setTimeout(function() {
      _patientsSearch = (val || '').toLowerCase().trim();
      renderShopPatients();
   }, 200);
}
function _patientsMatchesSearch(p) {
   if (!_patientsSearch) return true;
   var q = _patientsSearch;
   return ((p.name || '').toLowerCase().indexOf(q) !== -1) ||
          ((p.phone || '').toLowerCase().indexOf(q) !== -1) ||
          ((p.email || '').toLowerCase().indexOf(q) !== -1);
}

async function renderShopPatients() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var body = document.getElementById('shopPatientsBody');
   if (!body) return;
   _liveSubscribe('shopPatients',     'appointments', renderShopPatients);
   _liveSubscribe('shopPatientsAdm',  'admissions',   renderShopPatients);

   // Mode is now driven by the sidebar sub-item (Out-patients / In-patients).
   // Header inside the card reflects the current view; no inline toggle.
   var mode = _patientsMode;
   var header = mode === 'in'
      ? '<div class="profile-card-header" style="grid-column:1/-1">🛏️ In-patients <small style="font-weight:400;color:#8a93a7">— currently admitted</small></div>'
      : '<div class="profile-card-header" style="grid-column:1/-1">🚶 Out-patients <small style="font-weight:400;color:#8a93a7">— booked via appointments</small></div>';

   if (mode === 'in') {
      body.innerHTML = header + await _renderInPatientsTable(user);
   } else {
      body.innerHTML = header + await _renderOutPatientsTable(user);
   }
   // Restore focus to the search box after re-render so the user can keep typing
   if (_patientsSearch) {
      var box = document.getElementById('patientsSearchBox');
      if (box) {
         box.focus();
         var v = box.value;
         box.setSelectionRange(v.length, v.length);
      }
   }
}

async function _renderOutPatientsTable(user) {
   var allRaw = await AppDB.getAppointmentsByOwner(user.email);
   // Out-patients = patients who PAID AND were CHECKED UP at least once.
   // Bookings that were no-show, cancelled, or just confirmed-but-not-yet-seen
   // are excluded — those aren't real out-patient visits.
   var all = (allRaw || []).filter(function(a) {
      return a.status === 'Completed' && a.is_paid;
   });
   if (!all.length) {
      return '<div class="shop-empty" style="grid-column:1/-1">No out-patients yet. A patient appears here once they\'ve paid and completed a consultation.</div>';
   }
   // Date range filter — same buckets as the donut, default 'all'
   var range = _patientsRange;
   var filtered = range === 'all' ? all : _filterAptsByRange(all, range);

   // Collect unique provider IDs touched by the filtered set, then bulk-fetch
   // the hospital_patient_ids map (one query) for ID-column rendering.
   var providerIds = Array.from(new Set(filtered.map(function(a) { return a.provider_id; }).filter(Boolean)));
   var idMap = await AppDB.getHospitalPatientIdMap(providerIds);
   var _normName = function(s) { return (s || '').toLowerCase().trim().replace(/\s+/g, ' '); };
   var pickId = function(providerId, phone, name) {
      var norm = (phone || '').replace(/\D/g, '').slice(-10);
      var nameNorm = _normName(name);
      if (!providerId || norm.length !== 10 || !nameNorm) return '';
      return idMap[providerId + '|' + norm + '|' + nameNorm] || '';
   };

   var groups = {};
   filtered.forEach(function(a) {
      // Dedup key = phone + name (lowercased). Same phone shared by family
      // members (common in India) must keep them as separate rows; only
      // the SAME person (same phone + same name) collapses across visits.
      var phoneKey = (a.patient_phone || a.user_email || '').toLowerCase().trim();
      var nameKey  = (a.patient_name  || '').toLowerCase().trim();
      var key = phoneKey + '|' + nameKey;
      if (key === '|') return;
      if (!groups[key]) {
         groups[key] = { name: a.patient_name || '—', phone: a.patient_phone || '', email: a.user_email || '', visits: 0, completed: 0, lastDate: '', totalFee: 0, patientIds: {} };
      }
      var g = groups[key];
      g.visits += 1;
      if (a.status === 'Completed') g.completed += 1;
      if (a.date && a.date > g.lastDate) g.lastDate = a.date;
      if (a.status === 'Completed' && a.fee) g.totalFee += Number(a.fee) || 0;
      if (a.patient_name && g.name === '—') g.name = a.patient_name;
      if (!g.phone && a.patient_phone) g.phone = a.patient_phone;
      if (!g.email && a.user_email)   g.email = a.user_email;
      // Track patient IDs across all hospitals this patient has visited (same
      // owner can run multiple hospitals — each issues its own ID).
      var pid = pickId(a.provider_id, a.patient_phone, a.patient_name);
      if (pid) g.patientIds[pid] = true;
   });
   var rows = Object.values(groups)
      .filter(_patientsMatchesSearch)
      .sort(function(a, b) { return (b.lastDate || '').localeCompare(a.lastDate || ''); });

   var rangeOptions = [['all','All time'],['day','Today'],['week','This week'],['month','This month'],['year','This year']];
   var searchVal = (_patientsSearch || '').replace(/"/g, '&quot;');
   var filterBar =
      '<div style="grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding-bottom:8px">' +
         '<div style="font-size:0.85rem;color:#666"><strong>' + rows.length + '</strong> match' + (rows.length === 1 ? '' : 'es') + (_patientsSearch ? ' for "' + searchVal + '"' : (range !== 'all' ? ' · ' + rangeOptions.find(function(r){return r[0]===range;})[1].toLowerCase() : ' on file')) + '</div>' +
         '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">' +
            '<input type="search" id="patientsSearchBox" class="apt-search-input" placeholder="🔍 Name / phone / email" value="' + searchVal + '" oninput="_patientsSearchInput(this.value)" style="min-width:240px"/>' +
            '<select class="admin-filter-select" onchange="_setPatientsRange(this.value)">' +
               rangeOptions.map(function(r){ return '<option value="' + r[0] + '"' + (r[0] === range ? ' selected' : '') + '>' + r[1] + '</option>'; }).join('') +
            '</select>' +
         '</div>' +
      '</div>';

   if (!rows.length) {
      return filterBar + '<div class="shop-empty" style="grid-column:1/-1">' + (_patientsSearch ? 'No out-patients match "' + searchVal + '".' : 'No out-patients in this range.') + '</div>';
   }

   // Pick the first provider_id we saw for this patient — used to scope
   // the history timeline lookup. (Reuses same logic as ID minting.)
   var firstProviderByKey = {};
   filtered.forEach(function(a) {
      var phoneKey = (a.patient_phone || a.user_email || '').toLowerCase().trim();
      var nameKey  = (a.patient_name  || '').toLowerCase().trim();
      var key = phoneKey + '|' + nameKey;
      if (!firstProviderByKey[key]) firstProviderByKey[key] = a.provider_id;
   });

   var _initials = function(n) { return (n || '?').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2); };

   var cardHtml = '', profileHtml = '';
   rows.forEach(function(p, idx) {
      var lastLbl = p.lastDate ? new Date(p.lastDate + 'T00:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
      var key = ((p.phone || p.email || '').toLowerCase().trim()) + '|' + ((p.name || '').toLowerCase().trim());
      var provId  = firstProviderByKey[key] || '';
      var pidJs   = provId.replace(/'/g, "\\'");
      var nameJs  = (p.name  || '').replace(/'/g, "\\'");
      var phoneJs = (p.phone || '').replace(/'/g, "\\'");
      var ids = Object.keys(p.patientIds || {});
      var idBadge = ids.length ? ' <span style="font-family:monospace;font-size:0.72rem;background:#f0f4ff;color:#3b5bdb;border-radius:4px;padding:1px 5px">#' + ids[0] + '</span>' : '';
      cardHtml +=
         '<div class="ph-card" id="ph-card-op' + idx + '" onclick="_selectPatientCard(\'op' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">' +
            '<div class="ph-card-avatar">' + _initials(p.name) + '</div>' +
            '<div class="ph-card-info">' +
               '<div class="ph-card-name">' + p.name + idBadge + '</div>' +
               '<div class="ph-card-sub">' + (p.phone || p.email || '—') + ' · ' + p.visits + ' visit' + (p.visits===1?'':'s') + ' · Last: ' + lastLbl + '</div>' +
            '</div>' +
            '<span class="ph-card-chevron">›</span>' +
         '</div>';
      profileHtml +=
         '<div class="ph-profile-wrap hidden" id="op-history-op' + idx + '">' +
            '<div class="ph-profile-panel">' +
               '<button class="ph-profile-back" onclick="_selectPatientCard(\'op' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">✕ Close</button>' +
               '<div class="patient-history-body" style="padding:0">Loading…</div>' +
            '</div>' +
         '</div>';
   });

   return filterBar + '<div class="ph-card-grid" style="grid-column:1/-1">' + cardHtml + '</div>' + profileHtml;
}

// ── Patient card select / deselect ──
async function _selectPatientCard(rowKey, providerId, phone, name) {
   var panel = document.getElementById('op-history-' + rowKey);
   if (!panel) return;
   var isOpen = !panel.classList.contains('hidden');
   // Close all open panels and deactivate all cards
   document.querySelectorAll('.ph-profile-wrap').forEach(function(el) { el.classList.add('hidden'); });
   document.querySelectorAll('.ph-card').forEach(function(el) { el.classList.remove('ph-card-active'); });
   if (isOpen) return; // toggle off
   panel.classList.remove('hidden');
   var card = document.getElementById('ph-card-' + rowKey);
   if (card) card.classList.add('ph-card-active');
   await _renderPatientHistoryPanel(rowKey, providerId, phone, name);
   panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function _renderPatientHistoryPanel(rowKey, providerId, phone, name) {
   var host = document.querySelector('#op-history-' + rowKey + ' .patient-history-body');
   if (!host) return;
   host.innerHTML = '<div style="color:#8a93a7;padding:12px;font-size:0.85rem">Loading history…</div>';
   _liveSubscribe('phist_' + rowKey, 'patient_notes', function() {
      _renderPatientHistoryPanel(rowKey, providerId, phone, name);
   });

   var _esc = function(s) { return String(s || '').replace(/[&<>"']/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); };
   var _initials = function(n) { return (n || '?').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2); };

   var [rxRows, notes, allergy] = await Promise.all([
      AppDB.getPatientPrescriptionHistory(providerId, phone, name),
      AppDB.getPatientNotes(providerId, phone, name),
      AppDB.getPatientAllergies(providerId, phone, name)
   ]);

   // ── Allergy banner ──
   var allergyBanner = '';
   if (allergy) {
      var isNil = allergy.value.trim().toUpperCase() === 'NIL';
      allergyBanner = isNil
         ? '<div style="background:#ecfdf5;border-left:4px solid #10b981;color:#065f46;padding:9px 14px;border-radius:8px;font-size:0.83rem;margin-bottom:16px"><b>✅ No known allergies</b> · confirmed via ' + _esc(allergy.src) + '</div>'
         : '<div style="background:#fef2f2;border-left:4px solid #ef4444;color:#991b1b;padding:9px 14px;border-radius:8px;font-size:0.83rem;margin-bottom:16px"><b>⚠️ Known Allergies:</b> ' + _esc(allergy.value) + ' <span style="color:#7f1d1d;font-weight:400">(from ' + _esc(allergy.src) + ')</span></div>';
   }

   // ── Patient header ──
   var inits = _initials(name);
   var isIp = rowKey.indexOf('ip') === 0;
   var avClass = isIp ? 'ph-profile-bigav ph-av-ip' : 'ph-profile-bigav';
   var visitCount = rxRows.length;
   var firstD = visitCount ? new Date(rxRows[rxRows.length-1].created_at) : null;
   var lastD  = visitCount ? new Date(rxRows[0].created_at) : null;
   var firstLbl = (firstD && !isNaN(firstD)) ? firstD.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}) : '—';
   var lastLbl  = (lastD  && !isNaN(lastD))  ? lastD.toLocaleDateString('en-IN', {day:'2-digit',month:'short',year:'numeric'}) : '—';

   var dxCounts = {};
   rxRows.forEach(function(r) { var k=(r.diagnosis||'').trim().toLowerCase(); if(k) dxCounts[k]=(dxCounts[k]||0)+1; });
   var topDx = Object.keys(dxCounts).sort(function(a,b){return dxCounts[b]-dxCounts[a];})[0] || '';

   var headerHtml =
      '<div class="ph-profile-header">' +
         '<div class="' + avClass + '">' + inits + '</div>' +
         '<div>' +
            '<div class="ph-profile-title">' + _esc(name) + '</div>' +
            '<div class="ph-profile-subtitle">' + _esc(phone || '—') + '</div>' +
         '</div>' +
      '</div>' +
      '<div class="ph-meta-grid">' +
         '<div><div class="ph-meta-lbl">Visits</div><div class="ph-meta-val">' + visitCount + '</div></div>' +
         '<div><div class="ph-meta-lbl">First seen</div><div class="ph-meta-val">' + firstLbl + '</div></div>' +
         '<div><div class="ph-meta-lbl">Last seen</div><div class="ph-meta-val">' + lastLbl + '</div></div>' +
         (topDx ? '<div><div class="ph-meta-lbl">Common Dx</div><div class="ph-meta-val" style="text-transform:capitalize">' + _esc(topDx) + '</div></div>' : '') +
      '</div>';

   // ── Visit timeline ──
   var timelineHtml;
   if (!rxRows.length) {
      timelineHtml = '<div style="color:#9ca3af;font-style:italic;font-size:0.85rem;padding:6px 0">No prescription history at this hospital yet.</div>';
   } else {
      timelineHtml = '<div class="ph-tl-wrap">' + rxRows.map(function(r, idx) {
         var d = new Date(r.created_at);
         var when = isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'});
         var time = isNaN(d.getTime()) ? '' : ' · ' + d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'});
         var isLatest = idx === 0;
         var meds = (r.medicines || []).map(function(m) {
            return '<li><b>' + _esc(m.name||'—') + '</b>' +
               (m.type    ? ' <span style="color:#6b7280">(' + _esc(m.type) + ')</span>' : '') +
               (m.dosage  ? ' · ' + _esc(m.dosage)   : '') +
               (m.duration? ' · ' + _esc(m.duration)  : '') + '</li>';
         }).join('');
         var vitals = [];
         if (r.weight_kg)   vitals.push('Wt ' + r.weight_kg + 'kg');
         if (r.bp_systolic) vitals.push('BP ' + r.bp_systolic + '/' + (r.bp_diastolic||'—'));
         if (r.pulse_bpm)   vitals.push('Pulse ' + r.pulse_bpm);
         if (r.temp_f)      vitals.push('Temp ' + r.temp_f + '°F');
         if (r.spo2)        vitals.push('SpO₂ ' + r.spo2 + '%');
         var fuLbl = '';
         if (r.follow_up_date) { var fd=new Date(r.follow_up_date+'T00:00:00'); if(!isNaN(fd.getTime())) fuLbl=fd.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}); }
         return '<div class="ph-tl-entry">' +
                   '<div class="ph-tl-dot' + (isLatest?' ph-tl-latest':'') + '"></div>' +
                   '<div class="ph-tl-head">' +
                      '<div>' +
                         '<span class="ph-tl-date">' + when + time + '</span>' +
                         '<span class="ph-tl-doc"> · ' + _esc(r.doctor_name||'—') + (r.doctor_speciality?' <span style="color:#9ca3af">· '+_esc(r.doctor_speciality)+'</span>':'') + '</span>' +
                      '</div>' +
                      '<span class="ph-tl-badge ' + (isLatest?'ph-tl-badge-latest':'ph-tl-badge-past') + '">' + (isLatest?'Latest':'Visit') + '</span>' +
                   '</div>' +
                   (vitals.length ? '<div class="ph-tl-vitals">' + vitals.join(' · ') + '</div>' : '') +
                   (r.diagnosis   ? '<div class="ph-tl-dx">Dx: ' + _esc(r.diagnosis) + '</div>' : '') +
                   (meds          ? '<ul class="ph-tl-meds">' + meds + '</ul>' : '') +
                   (r.advice      ? '<div class="ph-tl-advice">Advice: ' + _esc(r.advice) + '</div>' : '') +
                   (fuLbl         ? '<div class="ph-tl-fu">📅 Follow-up: ' + fuLbl + '</div>' : '') +
                '</div>';
      }).join('') + '</div>';
   }

   var providerJs = (providerId||'').replace(/'/g,"\\'");
   var phoneJs    = (phone||'').replace(/'/g,"\\'");
   var nameJs     = (name||'').replace(/'/g,"\\'");
   var noteCount  = notes.length;
   var noteBtnLbl = noteCount ? 'Notes (' + noteCount + ')' : '+ Add Note';

   host.innerHTML =
      headerHtml +
      allergyBanner +
      '<div>' +
         '<div class="ph-tl-section-head">' +
            '<span class="ph-section-title">📋 Visit History</span>' +
            '<button class="ph-notes-btn2" onclick="_openNotesModal(\'' + providerJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">' + noteBtnLbl + '</button>' +
         '</div>' +
         timelineHtml +
      '</div>';
}

// ── Notes modal (opens from the Show Notes button in the timeline) ──
var _notesModalCtx = null;  // {providerId, phone, name}

async function _openNotesModal(providerId, phone, name) {
   _notesModalCtx = { providerId: providerId, phone: phone, name: name };
   var modal = document.getElementById('notesModal');
   if (!modal) {
      modal = document.createElement('div');
      modal.id = 'notesModal';
      modal.className = 'sp-modal-overlay hidden';
      modal.innerHTML =
         '<div class="sp-modal notes-modal-card">' +
            '<div class="sp-modal-header">' +
               '<h3 id="notes-modal-title">📝 Patient Notes</h3>' +
               '<button onclick="_closeNotesModal()">✕</button>' +
            '</div>' +
            '<div class="sp-modal-body">' +
               '<div id="notes-modal-list" style="max-height:50vh;overflow:auto;margin-bottom:14px"></div>' +
               '<div class="ph-add-note">' +
                  '<textarea id="notes-modal-input" placeholder="Add a note (e.g. allergy to penicillin · referred to specialist · pre-booked tomorrow)" rows="5"></textarea>' +
                  '<button onclick="_submitNoteFromModal()">➕ Add Note</button>' +
               '</div>' +
            '</div>' +
         '</div>';
      document.body.appendChild(modal);
   }
   document.getElementById('notes-modal-title').textContent = '📝 Notes for ' + (name || 'Patient');
   modal.classList.remove('hidden');
   await _refreshNotesModal();
   _liveSubscribe('notes_modal', 'patient_notes', function() { _refreshNotesModal(); });
}

function _closeNotesModal() {
   var modal = document.getElementById('notesModal');
   if (modal) modal.classList.add('hidden');
   _notesModalCtx = null;
}

async function _refreshNotesModal() {
   if (!_notesModalCtx) return;
   var list = document.getElementById('notes-modal-list');
   if (!list) return;
   list.innerHTML = '<div style="color:#888;padding:8px">Loading…</div>';
   var notes = await AppDB.getPatientNotes(_notesModalCtx.providerId, _notesModalCtx.phone, _notesModalCtx.name);
   if (!notes.length) {
      list.innerHTML = '<div style="color:#888;font-style:italic;padding:10px 0;text-align:center">No notes yet — first entry will appear here.</div>';
      return;
   }
   list.innerHTML = notes.map(function(n) {
      var d = new Date(n.created_at);
      var when = isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ' · ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      return '<div class="ph-note">' +
                '<div class="ph-note-head"><strong>' + (n.author_name || n.author_email || 'Staff') + '</strong> · <span class="ph-note-when">' + when + '</span></div>' +
                '<div class="ph-note-body">' + String(n.note).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}).replace(/\n/g, '<br/>') + '</div>' +
             '</div>';
   }).join('');
}

async function _submitNoteFromModal() {
   if (!_notesModalCtx) return;
   var ta = document.getElementById('notes-modal-input');
   if (!ta) return;
   var text = (ta.value || '').trim();
   if (!text) { alert('Type a note first.'); return; }
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var ok = await AppDB.addPatientNote({
      provider_id:   _notesModalCtx.providerId,
      patient_phone: _notesModalCtx.phone,
      patient_name:  _notesModalCtx.name,
      author_email:  user.email || '',
      author_name:   user.name || '',
      note: text
   });
   if (!ok) { alert('Failed to save note.'); return; }
   ta.value = '';
   await _refreshNotesModal();
}

async function _renderInPatientsTable(user) {
   // Aggregate admissions across all owner's hospitals
   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   if (!mine.length) {
      return '<div class="shop-empty" style="grid-column:1/-1">No hospital linked to your account.</div>';
   }
   var nameByProv = {};
   mine.forEach(function(p) { nameByProv[p.id] = p.name; });

   var all = [];
   for (var i = 0; i < mine.length; i++) {
      var rows = await AppDB.getAdmissions(mine[i].id);
      (rows || []).forEach(function(r) { r._hospital = nameByProv[r.provider_id] || ''; all.push(r); });
   }
   var admittedAll  = all.filter(function(r) { return r.status === 'Admitted'; });
   var dischargedAll = all.filter(function(r) { return r.status === 'Discharged'; });
   var ipTab = window._ipPatientsTabActive || 'admitted';
   var pool  = ipTab === 'discharged' ? dischargedAll : admittedAll;

   var ipInitials = function(n) { return (n||'?').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2); };

   var tabBar =
      '<div style="grid-column:1/-1;display:flex;gap:0;margin-bottom:12px;border:1.5px solid #e0e0e0;border-radius:8px;overflow:hidden;width:fit-content">' +
         '<button onclick="_ipPatientsTab(\'admitted\')" style="padding:6px 18px;font-size:0.83rem;font-weight:600;border:none;cursor:pointer;' + (ipTab==='admitted' ? 'background:#1565c0;color:#fff' : 'background:#fff;color:#555') + '">🛏️ Admitted (' + admittedAll.length + ')</button>' +
         '<button onclick="_ipPatientsTab(\'discharged\')" style="padding:6px 18px;font-size:0.83rem;font-weight:600;border:none;cursor:pointer;border-left:1.5px solid #e0e0e0;' + (ipTab==='discharged' ? 'background:#2e7d32;color:#fff' : 'background:#fff;color:#555') + '">✅ Discharged (' + dischargedAll.length + ')</button>' +
      '</div>';

   var filtered = pool.filter(function(r) {
      if (!_patientsSearch) return true;
      var q = _patientsSearch;
      return ((r.patient_name  || '').toLowerCase().indexOf(q) !== -1) ||
             ((r.patient_phone || '').toLowerCase().indexOf(q) !== -1) ||
             ((r.patient_ref   || '').toLowerCase().indexOf(q) !== -1);
   });

   var searchVal = (_patientsSearch || '').replace(/"/g, '&quot;');
   var searchBar =
      '<div style="grid-column:1/-1;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;padding-bottom:8px">' +
         '<div style="font-size:0.85rem;color:#666"><strong>' + filtered.length + '</strong> ' + (ipTab === 'discharged' ? 'discharged' : 'admitted') + (_patientsSearch ? ' matching "' + searchVal + '"' : '') + '</div>' +
         '<input type="search" id="patientsSearchBox" class="apt-search-input" placeholder="🔍 Name / phone / ref" value="' + searchVal + '" oninput="_patientsSearchInput(this.value)" style="min-width:240px"/>' +
      '</div>';

   if (!pool.length) {
      var emptyMsg = ipTab === 'discharged'
         ? 'No discharged patients yet.'
         : 'No in-patients currently admitted.<br><span style="font-size:0.85rem">Add a new admission via the <strong>Admissions</strong> tab.</span>';
      return tabBar + '<div style="grid-column:1/-1;text-align:center;padding:30px;color:#888">' + emptyMsg + '</div>';
   }
   if (!filtered.length) {
      return tabBar + searchBar + '<div class="shop-empty" style="grid-column:1/-1">No patients match "' + searchVal + '".</div>';
   }
   var todayYmd = _todayLocalYmd();
   var cardHtml = '', profileHtml = '';

   if (ipTab === 'admitted') {
      filtered.forEach(function(r, idx) {
         var d = new Date((r.admit_date || '') + 'T00:00:00');
         var losDays = isNaN(d.getTime()) ? 0 : Math.max(0, Math.round((new Date(todayYmd + 'T00:00:00') - d) / 86400000));
         var admitLbl = isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
         var isDueToday = r.target_discharge === todayYmd;
         var targetLbl = r.target_discharge ? (isDueToday ? 'TODAY' : new Date(r.target_discharge + 'T00:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })) : '';
         var loc = (r.ward || '') + (r.room_bed ? (r.ward ? ' · ' : '') + r.room_bed : '') || '—';
         var pidJs = (r.provider_id || '').replace(/'/g, "\\'");
         var phoneJs = (r.patient_phone || '').replace(/'/g, "\\'");
         var nameJs = (r.patient_name || '').replace(/'/g, "\\'");
         var dischargeBadge = isDueToday
            ? ' <span style="font-size:0.68rem;font-weight:700;background:#fef3c7;color:#d97706;border:1px solid #fde68a;border-radius:5px;padding:1px 6px">🕐 Today</span>'
            : (targetLbl ? ' <span style="font-size:0.68rem;color:#6b7280">→ ' + targetLbl + '</span>' : '');
         cardHtml +=
            '<div class="ph-card" id="ph-card-ip' + idx + '" onclick="_selectPatientCard(\'ip' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">' +
               '<div class="ph-card-avatar ph-av-ip">' + ipInitials(r.patient_name) + '</div>' +
               '<div class="ph-card-info">' +
                  '<div class="ph-card-name">' + (r.patient_name || '—') + (r.patient_ref ? ' <span style="font-family:monospace;font-size:0.72rem;background:#f0f4ff;color:#3b5bdb;border-radius:4px;padding:1px 5px">#' + r.patient_ref + '</span>' : '') + dischargeBadge + '</div>' +
                  '<div class="ph-card-sub">' + loc + ' · Day ' + losDays + ' · Admitted ' + admitLbl + '</div>' +
               '</div>' +
               '<span class="ph-card-chevron">›</span>' +
            '</div>';
         profileHtml +=
            '<div class="ph-profile-wrap hidden" id="op-history-ip' + idx + '">' +
               '<div class="ph-profile-panel">' +
                  '<button class="ph-profile-back" onclick="_selectPatientCard(\'ip' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">✕ Close</button>' +
                  '<div class="patient-history-body" style="padding:0">Loading…</div>' +
               '</div>' +
            '</div>';
      });
   } else {
      var sortedDis = filtered.slice().sort(function(a, b) { return (b.target_discharge || b.admit_date || '') > (a.target_discharge || a.admit_date || '') ? 1 : -1; });
      sortedDis.forEach(function(r, idx) {
         var admD = new Date((r.admit_date || '') + 'T00:00:00');
         var disD = new Date((r.target_discharge || '') + 'T00:00:00');
         var admitLbl = isNaN(admD.getTime()) ? '—' : admD.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
         var disLbl   = isNaN(disD.getTime()) ? '—' : disD.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
         var los = (!isNaN(admD.getTime()) && !isNaN(disD.getTime())) ? Math.max(0, Math.round((disD - admD) / 86400000)) : null;
         var loc = (r.ward || '') + (r.room_bed ? (r.ward ? ' · ' : '') + r.room_bed : '') || '—';
         var pidJs = (r.provider_id || '').replace(/'/g, "\\'");
         var phoneJs = (r.patient_phone || '').replace(/'/g, "\\'");
         var nameJs  = (r.patient_name || '').replace(/'/g, "\\'");
         cardHtml +=
            '<div class="ph-card" id="ph-card-dis' + idx + '" onclick="_selectPatientCard(\'dis' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">' +
               '<div class="ph-card-avatar" style="background:#e8f5e9;color:#2e7d32">' + ipInitials(r.patient_name) + '</div>' +
               '<div class="ph-card-info">' +
                  '<div class="ph-card-name">' + (r.patient_name || '—') + (r.patient_ref ? ' <span style="font-family:monospace;font-size:0.72rem;background:#f0fff4;color:#2e7d32;border-radius:4px;padding:1px 5px">#' + r.patient_ref + '</span>' : '') +
                     ' <span style="font-size:0.68rem;font-weight:700;background:#e8f5e9;color:#2e7d32;border-radius:5px;padding:1px 6px">✅ Discharged</span>' +
                  '</div>' +
                  '<div class="ph-card-sub">' + loc + ' · Admitted ' + admitLbl + ' → Discharged ' + disLbl + (los !== null ? ' (' + los + 'd)' : '') + '</div>' +
               '</div>' +
               '<span class="ph-card-chevron">›</span>' +
            '</div>';
         profileHtml +=
            '<div class="ph-profile-wrap hidden" id="op-history-dis' + idx + '">' +
               '<div class="ph-profile-panel">' +
                  '<button class="ph-profile-back" onclick="_selectPatientCard(\'dis' + idx + '\',\'' + pidJs + '\',\'' + phoneJs + '\',\'' + nameJs + '\')">✕ Close</button>' +
                  '<div class="patient-history-body" style="padding:0">Loading…</div>' +
               '</div>' +
            '</div>';
      });
   }

   return tabBar + searchBar + '<div class="ph-card-grid" style="grid-column:1/-1">' + cardHtml + '</div>' + profileHtml;
}

function _ipPatientsTab(tab) { window._ipPatientsTabActive = tab; renderShopPatients(); }


// ── PRESCRIPTION pad (Phase 8.1 EMR) ──
// Opens the prescription modal for an appointment. Auto-fills patient
// identity, loads past visit history for context, gives the doctor a
// vitals row + diagnosis + medicine list to type into.
var _rxAppt = null;   // appointment we're prescribing for (or null for walk-in)

async function openPrescriptionModal(aptId) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var apt = (_shopAptsCache || []).find(function(a) { return a.apt_id === aptId; });
   if (!apt) {
      var all = await AppDB.getAllAppointments();
      apt = (all || []).find(function(a) { return a.apt_id === aptId; });
   }
   if (!apt) { alert('Appointment not found.'); return; }
   _rxAppt = apt;

   await loadAptProviders(true);
   var prov = _aptGetProvider(apt.provider_id) || {};
   var doctor = (prov.doctors || []).find(function(d) { return d.id === apt.doctor_id; }) || {};

   // Reset modal fields
   var get = function(id) { return document.getElementById(id); };
   get('rx-id').value = '';
   get('rx-appt-id').value = apt.apt_id || '';
   ['rx-weight','rx-bp-sys','rx-bp-dia','rx-pulse','rx-temp','rx-spo2','rx-diagnosis','rx-advice','rx-allergies','rx-followup'].forEach(function(f) {
      var el = get(f); if (el) el.value = '';
   });
   // Hide allergy banner until data load resolves
   var banner = get('rx-allergy-banner');
   if (banner) { banner.classList.add('hidden'); banner.innerHTML = ''; }

   // Async: look up known allergies from prior admissions / prescriptions.
   // If found, show a red banner at top of the modal AND pre-fill the
   // allergies input so the doctor sees what was recorded last time (and
   // can edit / extend rather than re-type).
   AppDB.getPatientAllergies(apt.provider_id, apt.patient_phone, apt.patient_name).then(function(allergy) {
      if (!allergy) return;
      var el = get('rx-allergies');
      if (el && !el.value) el.value = allergy.value;
      var b = get('rx-allergy-banner');
      if (!b) return;
      var isNil = allergy.value.trim().toUpperCase() === 'NIL';
      if (isNil) {
         b.style.background = '#ecfdf5'; b.style.borderLeftColor = '#065f46'; b.style.color = '#065f46';
         b.innerHTML = '<span style="font-size:1.1rem">✅</span><span><b>No known allergies on file</b> · last confirmed via ' + allergy.src + '</span>';
      } else {
         b.style.background = '#fef2f2'; b.style.borderLeftColor = '#b91c1c'; b.style.color = '#b91c1c';
         b.innerHTML = '<span style="font-size:1.1rem">⚠️</span><span><b>Known Allergies:</b> ' + String(allergy.value).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}) + ' <span style="color:#7f1d1d;font-weight:400;font-size:0.85em">(from ' + allergy.src + ')</span></span>';
      }
      b.classList.remove('hidden');
   });

   // Pre-fill Follow-up date using the provider's free_followup_days policy —
   // same window we already advertise on the consultation receipt. The doctor
   // can still adjust if this particular patient needs a sooner / later visit.
   // EXCEPTION: skip the auto-fill when this appointment IS itself a free
   // follow-up — we don't want to silently promise another free visit on top
   // of one. The doctor can still pick a date manually if needed.
   var fuDays = Number(prov.free_followup_days || 0);
   if (fuDays > 0 && !apt.is_followup) {
      var d = new Date();
      d.setDate(d.getDate() + fuDays);
      get('rx-followup').value =
         d.getFullYear() + '-' +
         String(d.getMonth() + 1).padStart(2, '0') + '-' +
         String(d.getDate()).padStart(2, '0');
   }

   // Patient identity strip
   var strip = get('rx-patient-strip');
   if (strip) {
      var ageSex = (apt.patient_age ? apt.patient_age + 'Y' : '') + (apt.patient_sex ? ' ' + apt.patient_sex[0] : '');
      strip.innerHTML =
         '<div><strong style="color:#1a1a2e">' + (apt.patient_name || '—') + '</strong>' + (ageSex ? ' · ' + ageSex : '') + '</div>' +
         (apt.patient_phone ? '<div>📞 ' + apt.patient_phone + '</div>' : '') +
         '<div>🩺 ' + (doctor.name || apt.doctor_name || '—') + (doctor.speciality ? ' · ' + doctor.speciality : '') + '</div>' +
         '<div>📅 Today</div>';
   }

   // Past history
   get('rx-history-body').innerHTML = '<div style="color:#888;font-style:italic;padding:8px 0">Loading…</div>';
   get('rx-history-count').textContent = '';
   AppDB.getPatientPrescriptionHistory(apt.provider_id, apt.patient_phone, apt.patient_name).then(function(rows) {
      var countEl = get('rx-history-count');
      var bodyEl  = get('rx-history-body');
      if (!rows || !rows.length) {
         if (countEl) countEl.textContent = '(no past visits)';
         if (bodyEl)  bodyEl.innerHTML = '<div style="color:#888;font-style:italic">This is the patient\'s first prescription at this hospital.</div>';
         return;
      }
      if (countEl) countEl.textContent = '(' + rows.length + ' past visit' + (rows.length === 1 ? '' : 's') + ')';
      if (bodyEl) {
         bodyEl.innerHTML = rows.slice(0, 10).map(function(r) {
            var d = new Date(r.created_at);
            var when = isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            var meds = (r.medicines || []).map(function(m) { return m.name; }).filter(Boolean).join(', ');
            return '<div style="padding:8px 0;border-bottom:1px dashed #eef0f5">' +
                      '<strong>' + when + '</strong> · ' + (r.doctor_name || '—') +
                      (r.diagnosis ? '<br/><span style="color:#5f6473">Dx:</span> ' + r.diagnosis : '') +
                      (meds ? '<br/><span style="color:#5f6473">Rx:</span> ' + meds : '') +
                   '</div>';
         }).join('');
      }
   });

   // Reset medicine list
   _rxMedRows = [];

   // If a prescription already exists for this appointment, load it for
   // editing rather than starting from a blank slate. Title flips to
   // "Edit Prescription" so the doctor sees they're updating, not creating.
   var existing = await AppDB.getPrescriptionForAppointment(apt.apt_id);
   if (existing) {
      document.getElementById('prescriptionModalTitle').textContent = '✏️ Edit Prescription';
      get('rx-id').value          = existing.id;
      get('rx-weight').value      = existing.weight_kg    != null ? existing.weight_kg    : '';
      get('rx-bp-sys').value      = existing.bp_systolic  != null ? existing.bp_systolic  : '';
      get('rx-bp-dia').value      = existing.bp_diastolic != null ? existing.bp_diastolic : '';
      get('rx-pulse').value       = existing.pulse_bpm    != null ? existing.pulse_bpm    : '';
      get('rx-temp').value        = existing.temp_f       != null ? existing.temp_f       : '';
      get('rx-spo2').value        = existing.spo2         != null ? existing.spo2         : '';
      get('rx-diagnosis').value   = existing.diagnosis || '';
      get('rx-advice').value      = existing.advice || '';
      get('rx-allergies').value   = existing.allergies || '';
      get('rx-followup').value    = existing.follow_up_date || '';
      _rxMedRows = Array.isArray(existing.medicines) ? existing.medicines.map(function(m) {
         return { name: m.name || '', type: m.type || 'Tablet', dosage: m.dosage || '', duration: m.duration || '', notes: m.notes || '' };
      }) : [];
   } else {
      document.getElementById('prescriptionModalTitle').textContent = '📝 Write Prescription';
   }
   if (!_rxMedRows.length) _rxAddMed();
   else                    _rxRenderMeds();

   document.getElementById('prescriptionModal').classList.remove('hidden');
}
function closePrescriptionModal() {
   document.getElementById('prescriptionModal').classList.add('hidden');
   _rxAppt = null;
}

// Medicines list — dynamic add/remove rows
var _rxMedRows = [];
function _rxAddMed(med) {
   _rxMedRows.push(med || { name: '', type: 'Tablet', dosage: '', duration: '', notes: '' });
   _rxRenderMeds();
}
function _rxRemoveMed(i) { _rxMedRows.splice(i, 1); _rxRenderMeds(); }
function _rxEditMed(i, field, val) { if (_rxMedRows[i]) _rxMedRows[i][field] = val; }
function _rxRenderMeds() {
   var host = document.getElementById('rx-meds-list');
   if (!host) return;
   if (!_rxMedRows.length) {
      host.innerHTML = '<div style="color:#888;padding:10px;text-align:center;background:#fafbfc;border-radius:6px">No medicines added. Click <strong>+ Add</strong>.</div>';
      return;
   }
   host.innerHTML = _rxMedRows.map(function(m, i) {
      return '<div style="display:grid;grid-template-columns:90px 2fr 1fr 1fr auto;gap:8px;margin-bottom:6px;align-items:center">' +
                '<select onchange="_rxEditMed(' + i + ',\'type\',this.value)" style="padding:7px;border:1px solid #ccc;border-radius:6px">' +
                   ['Tablet','Capsule','Syrup','Injection','Drops','Cream','Other'].map(function(t) {
                      return '<option value="' + t + '"' + (m.type === t ? ' selected' : '') + '>' + t + '</option>';
                   }).join('') +
                '</select>' +
                '<input type="text" placeholder="Name (e.g. Cetirizine 10mg)" value="' + (m.name || '').replace(/"/g,'&quot;') + '" oninput="_rxEditMed(' + i + ',\'name\',this.value)" style="padding:7px 10px;border:1px solid #ccc;border-radius:6px"/>' +
                '<input type="text" placeholder="Dosage (1-0-1)" value="' + (m.dosage || '').replace(/"/g,'&quot;') + '" oninput="_rxEditMed(' + i + ',\'dosage\',this.value)" style="padding:7px 10px;border:1px solid #ccc;border-radius:6px"/>' +
                '<input type="text" placeholder="Duration (5 days)" value="' + (m.duration || '').replace(/"/g,'&quot;') + '" oninput="_rxEditMed(' + i + ',\'duration\',this.value)" style="padding:7px 10px;border:1px solid #ccc;border-radius:6px"/>' +
                '<button type="button" onclick="_rxRemoveMed(' + i + ')" style="background:#c62828;color:#fff;border:none;border-radius:6px;padding:7px 10px;cursor:pointer;font-weight:700">🗑</button>' +
             '</div>';
   }).join('');
}

async function savePrescription(printAfter) {
   if (!_rxAppt) { alert('No appointment context.'); return; }
   var get = function(id) { return document.getElementById(id); };
   var meds = _rxMedRows.filter(function(m) { return (m.name || '').trim(); });
   if (!meds.length && !get('rx-diagnosis').value.trim()) {
      alert('Add at least a diagnosis or one medicine before saving.');
      return;
   }
   var id = get('rx-id').value || ('rx_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
   // Look up the doctor's NMC reg no from the provider's roster so we can
   // snapshot it onto the prescription (legally required on every Indian Rx).
   var prov  = _aptGetProvider(_rxAppt.provider_id);
   var docRow = prov && (prov.doctors || []).find(function(d) { return d.id === _rxAppt.doctor_id; });
   var docRegNo = (docRow && docRow.reg_no) || '';
   var p = {
      id:                 id,
      provider_id:        _rxAppt.provider_id,
      doctor_id:          _rxAppt.doctor_id || '',
      doctor_name:        _rxAppt.doctor_name || '',
      doctor_speciality:  _rxAppt.speciality || '',
      doctor_reg_no:      docRegNo,
      appointment_id:     _rxAppt.apt_id || null,
      patient_phone:      _rxAppt.patient_phone || '',
      patient_name:       _rxAppt.patient_name || '',
      patient_age:        _rxAppt.patient_age || null,
      patient_sex:        _rxAppt.patient_sex || '',
      weight_kg:          get('rx-weight').value || null,
      bp_systolic:        get('rx-bp-sys').value || null,
      bp_diastolic:       get('rx-bp-dia').value || null,
      pulse_bpm:          get('rx-pulse').value || null,
      temp_f:             get('rx-temp').value || null,
      spo2:               get('rx-spo2').value || null,
      diagnosis:          get('rx-diagnosis').value.trim(),
      medicines:          meds,
      advice:             get('rx-advice').value.trim(),
      allergies:          get('rx-allergies').value.trim(),
      follow_up_date:     get('rx-followup').value || null
   };
   var ok = await AppDB.insertPrescription(p);
   if (!ok) { alert('Failed to save prescription.'); return; }
   if (printAfter) {
      printPrescription(id);
   }
   closePrescriptionModal();
   if (typeof renderShopAppointments === 'function') renderShopAppointments(window._shopAptCurrentFilter);
   alert('✅ Prescription saved.');
}

// Printable prescription template (opens in a new window). Doctor can print
// or "Save as PDF" via the OS print dialog. Footer has a WhatsApp share link.
async function printPrescription(id) {
   var p = await AppDB.getPrescriptionById(id);
   if (!p) { alert('Prescription not found.'); return; }
   await loadAptProviders(true);
   var prov = _aptGetProvider(p.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var dt = new Date(p.created_at);
   var when = isNaN(dt.getTime()) ? '' : dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) + ' ' + dt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
   var vitals = [];
   if (p.weight_kg)   vitals.push('Weight: <b>' + p.weight_kg + ' kg</b>');
   if (p.bp_systolic) vitals.push('BP: <b>' + p.bp_systolic + '/' + (p.bp_diastolic || '—') + ' mmHg</b>');
   if (p.pulse_bpm)   vitals.push('Pulse: <b>' + p.pulse_bpm + ' bpm</b>');
   if (p.temp_f)      vitals.push('Temp: <b>' + p.temp_f + ' °F</b>');
   if (p.spo2)        vitals.push('SpO2: <b>' + p.spo2 + '%</b>');
   var medsHtml = (p.medicines || []).map(function(m, i) {
      return '<tr>' +
                '<td>' + (i+1) + '</td>' +
                '<td><b>' + esc(m.name) + '</b>' + (m.type ? ' <span style="color:#666;font-size:11px">(' + esc(m.type) + ')</span>' : '') + '</td>' +
                '<td>' + esc(m.dosage || '—') + '</td>' +
                '<td>' + esc(m.duration || '—') + '</td>' +
             '</tr>';
   }).join('');
   var followUp = p.follow_up_date ? new Date(p.follow_up_date + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '';
   var waText = encodeURIComponent(
      'Hi ' + (p.patient_name || '') + ', here is your prescription from ' + (prov.name || 'the hospital') +
      ' dated ' + when + '.\n\nDiagnosis: ' + (p.diagnosis || '—') +
      '\n\nMedicines:\n' + (p.medicines || []).map(function(m, i) {
         return (i+1) + '. ' + (m.name || '') + (m.dosage ? ' — ' + m.dosage : '') + (m.duration ? ' (' + m.duration + ')' : '');
      }).join('\n') +
      (p.advice ? '\n\nAdvice: ' + p.advice : '') +
      (followUp ? '\n\nFollow-up: ' + followUp : '')
   );
   var waPhone = (p.patient_phone || '').replace(/\D/g, '');
   var waLink = waPhone ? 'https://wa.me/' + (waPhone.length === 10 ? '91' + waPhone : waPhone) + '?text=' + waText : '';

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Prescription · ' + esc(p.patient_name) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:800px;margin:0 auto}' +
         '.head{border-bottom:2px solid #0a8a3a;padding-bottom:14px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:flex-start;gap:14px}' +
         '.head h1{margin:0 0 4px;font-size:22px;color:#0a8a3a}' +
         '.head .sub{font-size:12px;color:#555}' +
         '.rx-mark{font-size:48px;font-weight:900;color:#0a8a3a;line-height:1}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f7f9fc;padding:12px;border-radius:8px;margin-bottom:14px;font-size:13px}' +
         '.info b{color:#1a1a2e}' +
         '.section{margin:14px 0}' +
         '.section h3{margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#0a8a3a;border-bottom:1px solid #eef0f5;padding-bottom:4px}' +
         '.vitals{display:flex;flex-wrap:wrap;gap:8px 18px;font-size:13px}' +
         'table{width:100%;border-collapse:collapse;margin-top:6px;font-size:13px}' +
         'table th,table td{border:1px solid #d6dce8;padding:8px 10px;text-align:left}' +
         'table th{background:#e8f5e9;color:#0a8a3a;font-size:11px;text-transform:uppercase;letter-spacing:0.04em}' +
         '.footer{margin-top:30px;padding-top:14px;border-top:1px solid #d6dce8;font-size:11px;color:#666;display:flex;justify-content:space-between}' +
         '.signature{margin-top:60px;text-align:right;font-size:12px}' +
         '.signature .name{font-weight:700;color:#1a1a2e;font-size:14px}' +
         '.toolbar{text-align:right;margin-bottom:14px}' +
         '.toolbar button{margin-left:6px;padding:8px 14px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px}' +
         '.toolbar .btn-print{background:#1a73e8;color:#fff}' +
         '.toolbar .btn-wa{background:#25d366;color:#fff;text-decoration:none;display:inline-block}' +
         '@media print{.toolbar{display:none}.no-print{display:none}}' +
      '</style></head><body>' +
      '<div class="toolbar no-print">' +
         (waLink ? '<a class="btn-wa" href="' + waLink + '" target="_blank" rel="noopener">📲 Share on WhatsApp</a>' : '') +
         '<button class="btn-print" onclick="window.print()">🖨 Print / Save PDF</button>' +
      '</div>' +
      '<div class="head">' +
         '<div>' +
            '<h1>' + esc(prov.name || 'Clinic') + '</h1>' +
            '<div class="sub">' + esc(prov.address || '') + '</div>' +
            (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
         '</div>' +
         '<div class="rx-mark">℞</div>' +
      '</div>' +
      '<div class="info">' +
         '<div><b>Patient:</b> ' + esc(p.patient_name || '—') + (p.patient_age ? ' (' + p.patient_age + 'Y' + (p.patient_sex ? '/' + p.patient_sex[0] : '') + ')' : '') + '</div>' +
         '<div><b>Date:</b> ' + esc(when) + '</div>' +
         (p.patient_phone ? '<div><b>Phone:</b> ' + esc(p.patient_phone) + '</div>' : '<div></div>') +
         '<div><b>Doctor:</b> ' + esc(p.doctor_name || '—') + (p.doctor_speciality ? ' · ' + esc(p.doctor_speciality) : '') + (p.doctor_reg_no ? ' · Reg No. ' + esc(p.doctor_reg_no) : '') + '</div>' +
      '</div>' +
      (vitals.length ? '<div class="section"><h3>Vitals</h3><div class="vitals">' + vitals.join(' · ') + '</div></div>' : '') +
      (p.diagnosis ? '<div class="section"><h3>Diagnosis</h3><div>' + esc(p.diagnosis) + '</div></div>' : '') +
      ((p.medicines || []).length ? '<div class="section"><h3>℞ Medicines</h3><table>' +
         '<thead><tr><th>#</th><th>Medicine</th><th>Dosage</th><th>Duration</th></tr></thead>' +
         '<tbody>' + medsHtml + '</tbody>' +
      '</table></div>' : '') +
      (p.advice ? '<div class="section"><h3>Advice</h3><div>' + esc(p.advice) + '</div></div>' : '') +
      (followUp ? '<div class="section"><h3>Follow-up</h3><div>' + esc(followUp) + '</div></div>' : '') +
      '<div class="signature"><div>______________________</div><div class="name">' + esc(p.doctor_name || '') + '</div><div style="color:#666">' + esc(p.doctor_speciality || '') + '</div>' + (p.doctor_reg_no ? '<div style="color:#666">Reg No. ' + esc(p.doctor_reg_no) + '</div>' : '') + '</div>' +
      '<div class="footer"><div>Generated by ' + esc(prov.name || 'MyStore') + '</div><div>This is a computer-generated prescription.</div></div>' +
      '</body></html>';
   var w = window.open('', 'rx-' + id, 'width=820,height=900');
   w.document.write(html); w.document.close();
}

// ── ADMISSION FORMS (printable) ──
// General Consent + DPDP data consent — printed at admission, signed by
// patient/attendant + witness. Pulls hospital letterhead from the provider
// row and patient identity from the admission. The MLC case adds a clause
// that statutory reporting is not waived. Layout is A4-print-clean with a
// toolbar that hides on print.
async function printAdmissionConsent(admId) {
   var rows = await AppDB.getAdmissions(_admHospitalChoice);
   var r = (rows || []).find(function(x) { return x.id === admId; });
   if (!r) { alert('Admission not found.'); return; }
   await loadAptProviders(true);
   var prov = _aptGetProvider(r.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };

   var admitWhen = r.admit_date ? new Date(r.admit_date + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '—';
   var today = new Date().toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
   var ageSex = '';
   if (r.dob) {
      var dob = new Date(r.dob + 'T00:00:00');
      if (!isNaN(dob.getTime())) {
         var age = Math.floor((Date.now() - dob.getTime()) / (365.25 * 86400000));
         ageSex = age + 'Y' + (r.gender ? ' / ' + r.gender[0] : '');
      }
   }
   var maskedId = r.id_proof_number ? r.id_proof_type + ': ' + r.id_proof_number.replace(/.(?=.{4})/g, 'x') : '';

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>General Consent · ' + esc(r.patient_name) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:820px;margin:0 auto;line-height:1.5}' +
         '.head{border-bottom:2px solid #6a1b9a;padding-bottom:14px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:flex-start;gap:14px}' +
         '.head h1{margin:0 0 4px;font-size:22px;color:#6a1b9a}' +
         '.head .sub{font-size:12px;color:#555}' +
         '.doc-title{text-align:center;margin:18px 0 12px;font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#6a1b9a}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;background:#f7f3fb;padding:12px;border-radius:8px;margin-bottom:18px;font-size:13px}' +
         '.info b{color:#1a1a2e}' +
         '.clause{margin:10px 0;font-size:13.5px;text-align:justify}' +
         '.clause-num{display:inline-block;width:24px;font-weight:700;color:#6a1b9a}' +
         '.mlc-note{background:#fef3c7;border-left:3px solid #d97706;padding:10px 12px;margin:14px 0;font-size:13px}' +
         '.sig-block{margin-top:36px;display:grid;grid-template-columns:1fr 1fr;gap:30px 40px;font-size:12.5px}' +
         '.sig-line{border-top:1px solid #333;margin-top:50px;padding-top:4px}' +
         '.footer{margin-top:30px;padding-top:14px;border-top:1px solid #d6dce8;font-size:11px;color:#666;text-align:center}' +
         '.toolbar{text-align:right;margin-bottom:14px}' +
         '.toolbar button{margin-left:6px;padding:8px 14px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;background:#1a73e8;color:#fff}' +
         '@media print{.toolbar{display:none}}' +
      '</style></head><body>' +
      '<div class="toolbar"><button onclick="window.print()">🖨 Print / Save PDF</button></div>' +
      '<div class="head">' +
         '<div>' +
            '<h1>' + esc(prov.name || 'Hospital') + '</h1>' +
            '<div class="sub">' + esc(prov.address || '') + '</div>' +
            (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
         '</div>' +
         '<div style="text-align:right;font-size:11px;color:#666">' +
            'Form: GEN-CONSENT-01<br/>' +
            'Date: ' + esc(today) +
         '</div>' +
      '</div>' +
      '<div class="doc-title">General Consent for Admission &amp; Treatment</div>' +
      '<div class="info">' +
         '<div><b>Patient Name:</b> ' + esc(r.patient_name || '—') + '</div>' +
         '<div><b>UHID / Ref:</b> ' + esc(r.patient_ref || '—') + '</div>' +
         '<div><b>Age / Sex:</b> ' + esc(ageSex || '—') + '</div>' +
         '<div><b>Phone:</b> ' + esc(r.patient_phone || '—') + '</div>' +
         '<div><b>Admit Date:</b> ' + esc(admitWhen) + '</div>' +
         '<div><b>Admission Type:</b> ' + esc(r.admission_type || '—') + '</div>' +
         '<div><b>Ward / Bed:</b> ' + esc((r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '')) + '</div>' +
         '<div><b>Treating Doctor:</b> ' + esc(r.doctor_name || '—') + '</div>' +
         (maskedId ? '<div style="grid-column:1/-1"><b>ID Proof:</b> ' + esc(maskedId) + '</div>' : '') +
      '</div>' +
      (r.mlc ? '<div class="mlc-note"><b>⚖️ MLC Case' + (r.mlc_number ? ' — ' + esc(r.mlc_number) : '') + '.</b> This consent does not waive the hospital\'s statutory duty to report the case to the police and other authorities as required by law.</div>' : '') +
      '<p style="font-size:13.5px">I, the undersigned (patient / patient\'s authorised attendant), having understood the following in a language I am familiar with, hereby give my voluntary consent to:</p>' +
      '<div class="clause"><span class="clause-num">1.</span> <b>Treatment &amp; Investigations:</b> Admission to the hospital and routine medical care, including physical examination, laboratory investigations, radiology, IV cannulation, intravenous fluids and medications considered necessary by the treating doctor. I understand that medicine is not an exact science and no guarantee has been made to me about results.</div>' +
      '<div class="clause"><span class="clause-num">2.</span> <b>Procedures &amp; Anaesthesia:</b> Diagnostic or therapeutic procedures, including minor surgical procedures and local / general anaesthesia where required. Specific high-risk procedures and major surgery will require a separate, procedure-specific informed consent.</div>' +
      '<div class="clause"><span class="clause-num">3.</span> <b>Blood &amp; Blood Products:</b> Transfusion of blood and / or blood products if medically indicated, after the doctor explains the risks and obtains a separate transfusion consent where applicable.</div>' +
      '<div class="clause"><span class="clause-num">4.</span> <b>Information Sharing:</b> Disclosure of clinical information to the patient\'s immediate family / attendant, and to the patient\'s insurer / TPA / employer / government scheme for the purpose of obtaining cashless approval, processing reimbursement, or auditing the claim.</div>' +
      '<div class="clause"><span class="clause-num">5.</span> <b>Medical Records &amp; Photography:</b> Capture and storage of clinical photographs, X-ray / scan images, video of procedures and other medical records, used solely for treatment, internal quality audit and de-identified medical education / research.</div>' +
      '<div class="clause"><span class="clause-num">6.</span> <b>Financial Responsibility:</b> I undertake to pay the hospital all charges for the services rendered as per the hospital\'s prevailing rate card. I understand the bill may exceed any estimate given, especially when the treatment course changes.</div>' +
      '<div class="clause"><span class="clause-num">7.</span> <b>Valuables:</b> The hospital is not responsible for any cash, jewellery or valuables not deposited in the hospital\'s designated safe. Valuables left in the room / ward are kept at the patient\'s own risk.</div>' +
      '<div class="clause"><span class="clause-num">8.</span> <b>Hospital Rules:</b> I agree to follow the hospital\'s rules on visiting hours, infection control, smoking, and conduct on the premises. I will not hold the hospital responsible for events resulting from non-compliance with medical advice.</div>' +
      '<div class="clause"><span class="clause-num">9.</span> <b>Data Privacy (DPDP Act, 2023):</b> I consent to the collection, storage and processing of my personal and sensitive health data by the hospital for the purposes of treatment, billing, statutory reporting, and the purposes listed above. I understand that I may withdraw this consent at any time by written notice to the hospital, subject to legal and clinical obligations that may require continued retention.</div>' +
      '<div class="clause"><span class="clause-num">10.</span> <b>Acknowledgement:</b> The hospital staff has explained the above to me in a language I understand. I have had the opportunity to ask questions, and my questions have been answered to my satisfaction.</div>' +
      '<div class="sig-block">' +
         '<div><div class="sig-line"></div><div><b>Patient / Attendant Signature</b></div><div style="color:#666">Name: ' + esc(r.patient_name || '__________________________') + '</div><div style="color:#666">Relation (if attendant): ' + esc(r.guardian_relation || '____________') + '</div><div style="color:#666">Date: __________  Time: __________</div></div>' +
         '<div><div class="sig-line"></div><div><b>Witness Signature</b></div><div style="color:#666">Name: __________________________</div><div style="color:#666">Designation / Relation: ____________</div><div style="color:#666">Date: __________  Time: __________</div></div>' +
         '<div style="grid-column:1/-1"><div class="sig-line"></div><div><b>Hospital Authorised Signatory</b></div><div style="color:#666">Name &amp; Designation: __________________________</div></div>' +
      '</div>' +
      '<div class="footer">' + esc(prov.name || '') + ' · Computer-generated consent form, valid only when signed by the patient / attendant and the hospital authorised signatory.</div>' +
      '</body></html>';
   var w = window.open('', 'consent-' + admId, 'width=860,height=1000');
   w.document.write(html); w.document.close();
}

// ── DEPOSIT / ADVANCE RECEIPT ──
// Open the deposit modal scoped to one admission. Shows prior receipts for
// the same admission (running balance), then collects amount + mode + txn
// reference, mints a sequential receipt number, and pops the printable
// receipt window. Multi-tab safe via UNIQUE(provider_id, receipt_seq) +
// retry-on-conflict in supabase.addAdmissionPayment.
var _depAdmission = null;

async function openDepositModal(admId) {
   var rows = await AppDB.getAdmissions(_admHospitalChoice);
   var r = (rows || []).find(function(x) { return x.id === admId; });
   if (!r) { alert('Admission not found.'); return; }
   _depAdmission = r;
   var get = function(id) { return document.getElementById(id); };
   get('dep-admission-id').value = r.id;
   get('dep-amount').value = '';
   get('dep-mode').value   = 'Cash';
   get('dep-txn-ref').value = '';
   get('dep-notes').value   = '';

   // Patient strip — quick context so receptionist confirms before charging
   get('dep-patient-strip').innerHTML =
      '<strong>' + (r.patient_name || '—') + '</strong>' +
      (r.patient_ref ? ' · UHID ' + r.patient_ref : '') +
      (r.patient_phone ? ' · 📞 ' + r.patient_phone : '') +
      '<br/><span style="color:#666;font-size:0.82rem">' +
         (r.ward ? r.ward : '—') + (r.room_bed ? ' · ' + r.room_bed : '') +
         ' · Admitted ' + (r.admit_date || '—') +
      '</span>';

   // Prior payments — running balance summary
   var prior = await AppDB.getAdmissionPayments(r.id);
   var priorEl = get('dep-prior-list');
   if (!prior.length) {
      priorEl.innerHTML = '<div style="font-size:0.82rem;color:#888;font-style:italic">No prior receipts on this admission.</div>';
   } else {
      var total = prior.reduce(function(s, p) { return s + Number(p.amount || 0); }, 0);
      priorEl.innerHTML =
         '<div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:6px;padding:8px 12px;font-size:0.82rem">' +
            '<strong>Prior receipts:</strong> ' +
            prior.map(function(p) {
               return p.receipt_no + ' · ₹' + Number(p.amount).toLocaleString('en-IN') + ' (' + p.payment_mode + ')';
            }).join(' · ') +
            '<br/><strong style="color:#065f46">Running total: ₹' + total.toLocaleString('en-IN') + '</strong>' +
         '</div>';
   }

   document.getElementById('depositModal').classList.remove('hidden');
}

function closeDepositModal() {
   document.getElementById('depositModal').classList.add('hidden');
   _depAdmission = null;
}

async function saveDepositAndPrint() {
   if (!_depAdmission) return;
   var get = function(id) { return (document.getElementById(id).value || '').trim(); };
   var amount = Number(get('dep-amount'));
   if (!amount || amount < 1) { alert('Enter a valid amount.'); return; }
   var mode = get('dep-mode') || 'Cash';
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};

   var paid = await AppDB.addAdmissionPayment({
      provider_id:  _depAdmission.provider_id,
      admission_id: _depAdmission.id,
      amount:       amount,
      payment_mode: mode,
      txn_ref:      get('dep-txn-ref'),
      received_by:  user.name || user.email || '',
      notes:        get('dep-notes')
   });
   if (!paid) { alert('Failed to save deposit. Please try again.'); return; }
   closeDepositModal();
   printDepositReceipt(paid.id);
   renderShopAdmissions();
}

// Convert an integer rupee amount to Indian words.
// Handles up to crore range — enough for a single hospital receipt.
function _rupeesInWords(n) {
   n = Math.floor(Number(n) || 0);
   if (n === 0) return 'Zero';
   var ones = ['', 'One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
               'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
   var tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
   function below100(x) {
      if (x < 20) return ones[x];
      return tens[Math.floor(x/10)] + (x%10 ? ' ' + ones[x%10] : '');
   }
   function below1000(x) {
      if (x < 100) return below100(x);
      return ones[Math.floor(x/100)] + ' Hundred' + (x%100 ? ' ' + below100(x%100) : '');
   }
   var parts = [];
   var crore = Math.floor(n / 10000000); n %= 10000000;
   var lakh  = Math.floor(n / 100000);   n %= 100000;
   var thou  = Math.floor(n / 1000);     n %= 1000;
   var rest  = n;
   if (crore) parts.push(below1000(crore) + ' Crore');
   if (lakh)  parts.push(below100(lakh)  + ' Lakh');
   if (thou)  parts.push(below100(thou)  + ' Thousand');
   if (rest)  parts.push(below1000(rest));
   return parts.join(' ').trim();
}

async function printDepositReceipt(paymentId) {
   var pay = await AppDB.getAdmissionPaymentById(paymentId);
   if (!pay) { alert('Receipt not found.'); return; }
   var admRows = await AppDB.getAdmissions(pay.provider_id);
   var r = (admRows || []).find(function(x) { return x.id === pay.admission_id; }) || {};
   await loadAptProviders(true);
   var prov = _aptGetProvider(pay.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var paidAt = new Date(pay.paid_at);
   var when = isNaN(paidAt.getTime()) ? '' :
      paidAt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) +
      ' · ' + paidAt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
   var amt = Number(pay.amount || 0);
   var words = _rupeesInWords(amt) + ' Rupees Only';

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Deposit Receipt · ' + esc(pay.receipt_no) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:600px;margin:0 auto;line-height:1.5}' +
         '.head{border-bottom:2px solid #2e7d32;padding-bottom:12px;margin-bottom:14px;text-align:center}' +
         '.head h1{margin:0 0 4px;font-size:20px;color:#2e7d32}' +
         '.head .sub{font-size:12px;color:#555}' +
         '.doc-title{text-align:center;margin:14px 0;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#2e7d32}' +
         '.meta{display:flex;justify-content:space-between;font-size:13px;margin-bottom:14px}' +
         '.meta b{color:#1a1a2e}' +
         '.body{font-size:13.5px;background:#f7fdf9;border:1px solid #c8e6c9;border-radius:8px;padding:14px}' +
         '.body table{width:100%;font-size:13px}' +
         '.body td{padding:5px 4px;vertical-align:top}' +
         '.body td.label{color:#555;width:38%}' +
         '.amt-box{margin-top:12px;text-align:right;font-size:18px;color:#1b5e20;font-weight:800;border-top:1px dashed #a5d6a7;padding-top:8px}' +
         '.words{font-style:italic;color:#444;font-size:12.5px;margin-top:4px}' +
         '.sig{margin-top:30px;display:flex;justify-content:space-between;font-size:12px}' +
         '.sig .line{border-top:1px solid #333;margin-top:50px;padding-top:4px;min-width:180px}' +
         '.footer{margin-top:18px;text-align:center;font-size:10.5px;color:#666}' +
         '.toolbar{text-align:right;margin-bottom:10px}' +
         '.toolbar button{padding:7px 12px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:12.5px;background:#1a73e8;color:#fff}' +
         '@media print{.toolbar{display:none}body{padding:8px}}' +
      '</style></head><body>' +
      '<div class="toolbar"><button onclick="window.print()">🖨 Print / Save PDF</button></div>' +
      '<div class="head">' +
         '<h1>' + esc(prov.name || 'Hospital') + '</h1>' +
         '<div class="sub">' + esc(prov.address || '') + '</div>' +
         (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
      '</div>' +
      '<div class="doc-title">Deposit / Advance Receipt</div>' +
      '<div class="meta">' +
         '<div><b>Receipt No:</b> ' + esc(pay.receipt_no) + '</div>' +
         '<div><b>Date:</b> ' + esc(when) + '</div>' +
      '</div>' +
      '<div class="body">' +
         '<table>' +
            '<tr><td class="label">Received from</td><td><b>' + esc(r.patient_name || '—') + '</b>' + (r.patient_ref ? ' (UHID ' + esc(r.patient_ref) + ')' : '') + '</td></tr>' +
            (r.patient_phone ? '<tr><td class="label">Phone</td><td>' + esc(r.patient_phone) + '</td></tr>' : '') +
            (r.ward ? '<tr><td class="label">Ward / Bed</td><td>' + esc(r.ward) + (r.room_bed ? ' · ' + esc(r.room_bed) : '') + '</td></tr>' : '') +
            (r.admit_date ? '<tr><td class="label">Admission Date</td><td>' + esc(new Date(r.admit_date + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' })) + '</td></tr>' : '') +
            '<tr><td class="label">Payment Mode</td><td>' + esc(pay.payment_mode) + (pay.txn_ref ? ' · ' + esc(pay.txn_ref) : '') + '</td></tr>' +
            (pay.notes ? '<tr><td class="label">Notes</td><td>' + esc(pay.notes) + '</td></tr>' : '') +
            (pay.received_by ? '<tr><td class="label">Received by</td><td>' + esc(pay.received_by) + '</td></tr>' : '') +
         '</table>' +
         '<div class="amt-box">₹ ' + amt.toLocaleString('en-IN') + '</div>' +
         '<div class="words">In words: <b>' + esc(words) + '</b></div>' +
      '</div>' +
      '<div class="sig">' +
         '<div><div class="line"></div>Patient / Attendant</div>' +
         '<div style="text-align:right"><div class="line"></div>Cashier / Authorised Signatory</div>' +
      '</div>' +
      '<div class="footer">This receipt is an acknowledgement of the advance / deposit amount only and is adjustable against the final bill. ' + esc(prov.name || '') + '</div>' +
      '</body></html>';
   var w = window.open('', 'receipt-' + pay.id, 'width=700,height=900');
   w.document.write(html); w.document.close();
}

// ── IP BILL — itemized in-patient bill with GST split ──
// Working state held in module-scoped variables while the modal is open:
// the line items, the admission row, and the advance running total. The
// modal saves into ip_bills + ip_bill_items via supabase.upsertIpBill which
// replaces the items wholesale on each save (delete-then-insert).
var _billAdmission = null;
var _billItems = [];          // [{category, description, hsn_sac, qty, rate, gst_pct, amount, gst_amt, total}]
var _billAdvancePaid = 0;
var _billExisting = null;     // existing ip_bills row if any

// GST defaults per category (Indian healthcare typical rates). Doctor /
// accountant can override per-line. Healthcare services to humans are
// generally GST-exempt; medicines and consumables attract GST.
var BILL_CATEGORIES = [
   { value: 'Room',          label: 'Room Rent',     gst: 0,  hsn: '996311' },
   { value: 'Doctor Fee',    label: 'Doctor Fee',    gst: 0,  hsn: '999312' },
   { value: 'Nursing',       label: 'Nursing',       gst: 0,  hsn: '999319' },
   { value: 'Procedure',     label: 'Procedure / OT', gst: 0, hsn: '999319' },
   { value: 'Investigation', label: 'Investigation', gst: 0,  hsn: '999316' },
   { value: 'Medicine',      label: 'Medicine',      gst: 12, hsn: '3004'   },
   { value: 'Consumable',    label: 'Consumable',    gst: 12, hsn: '9018'   },
   { value: 'Service',       label: 'Service',       gst: 18, hsn: ''       },
   { value: 'Other',         label: 'Other',         gst: 0,  hsn: ''       }
];

async function openIpBillModal(admId) {
   var rows = await AppDB.getAdmissions(_admHospitalChoice);
   var r = (rows || []).find(function(x) { return x.id === admId; });
   if (!r) { alert('Admission not found.'); return; }
   _billAdmission = r;
   _billItems = [];

   var get = function(eid) { return document.getElementById(eid); };
   get('bill-admission-id').value = r.id;

   // Patient strip
   var admitLbl = r.admit_date ? new Date(r.admit_date + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '—';
   get('bill-patient-strip').innerHTML =
      '<strong>' + (r.patient_name || '—') + '</strong>' +
      (r.patient_ref ? ' · UHID ' + r.patient_ref : '') +
      (r.patient_phone ? ' · 📞 ' + r.patient_phone : '') +
      '<br/><span style="color:#666;font-size:0.82rem">' +
         (r.ward ? r.ward : '—') + (r.room_bed ? ' · ' + r.room_bed : '') +
         ' · Admitted ' + admitLbl + (r.room_category ? ' · ' + r.room_category : '') +
         (r.payment_mode ? ' · ' + r.payment_mode : '') +
      '</span>';

   // Live advance from admission_payments
   var payments = await AppDB.getAdmissionPayments(r.id);
   _billAdvancePaid = (payments || []).reduce(function(s, p) { return s + Number(p.amount || 0); }, 0);

   // Load existing bill if present
   _billExisting = await AppDB.getIpBill(r.id);
   if (_billExisting) {
      document.getElementById('ipBillModalTitle').textContent = '✏️ Edit IP Bill · ' + _billExisting.bill_no + (_billExisting.status === 'Issued' ? ' (Issued)' : ' (Draft)');
      var existingItems = await AppDB.getIpBillItems(_billExisting.id);
      _billItems = (existingItems || []).map(function(it) {
         return {
            category: it.category, description: it.description, hsn_sac: it.hsn_sac,
            qty: Number(it.qty || 1), rate: Number(it.rate || 0), gst_pct: Number(it.gst_pct || 0),
            amount: Number(it.amount || 0), gst_amt: Number(it.gst_amt || 0), total: Number(it.total || 0)
         };
      });
      get('bill-discount-pct').value = _billExisting.discount_pct || '';
      get('bill-discount-amt').value = _billExisting.discount_amt || '';
      get('bill-round-off').value    = _billExisting.round_off    || '';
      get('bill-notes').value        = _billExisting.notes        || '';
   } else {
      document.getElementById('ipBillModalTitle').textContent = '🧾 Itemized IP Bill';
      get('bill-discount-pct').value = '';
      get('bill-discount-amt').value = '';
      get('bill-round-off').value    = '';
      get('bill-notes').value        = '';
   }

   _billRenderItems();
   _billRecalc();
   document.getElementById('ipBillModal').classList.remove('hidden');
}

function closeIpBillModal() {
   document.getElementById('ipBillModal').classList.add('hidden');
   _billAdmission = null;
   _billItems = [];
   _billExisting = null;
}

function _billAddItem(prefill) {
   var defaults = BILL_CATEGORIES[0];
   var item = Object.assign({
      category:    defaults.value,
      description: '',
      hsn_sac:     defaults.hsn,
      qty:         1,
      rate:        0,
      gst_pct:     defaults.gst,
      amount:      0,
      gst_amt:     0,
      total:       0
   }, prefill || {});
   _billItems.push(item);
   _billRenderItems();
   _billRecalc();
}

function _billRemoveItem(idx) {
   _billItems.splice(idx, 1);
   _billRenderItems();
   _billRecalc();
}

function _billUpdateField(idx, field, value) {
   var item = _billItems[idx];
   if (!item) return;
   if (field === 'category') {
      item.category = value;
      var cat = BILL_CATEGORIES.find(function(c) { return c.value === value; });
      if (cat) {
         // Only override HSN/GST if they are at the previous default — don't
         // clobber a value the user manually set.
         if (!item.hsn_sac) item.hsn_sac = cat.hsn;
         if (item.gst_pct === 0 || item.gst_pct == null) item.gst_pct = cat.gst;
      }
   } else if (field === 'qty' || field === 'rate' || field === 'gst_pct') {
      item[field] = Number(value) || 0;
   } else {
      item[field] = value;
   }
   item.amount  = Number((item.qty * item.rate).toFixed(2));
   item.gst_amt = Number(((item.amount * item.gst_pct) / 100).toFixed(2));
   item.total   = Number((item.amount + item.gst_amt).toFixed(2));
   // Update just this row's display values without rerendering everything
   // (prevents the user's focused input from losing focus)
   var totalEl = document.querySelector('#bill-items-body tr[data-idx="' + idx + '"] .bill-row-total');
   if (totalEl) totalEl.textContent = '₹' + item.total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
   _billRecalc();
}

function _billRenderItems() {
   var body = document.getElementById('bill-items-body');
   if (!body) return;
   if (!_billItems.length) {
      body.innerHTML = '<tr><td colspan="8" style="padding:20px;text-align:center;color:#888;font-style:italic">No line items yet — click "+ Add Line" or use a quick-add button above.</td></tr>';
      return;
   }
   body.innerHTML = _billItems.map(function(it, idx) {
      var catOpts = BILL_CATEGORIES.map(function(c) {
         return '<option value="' + c.value + '"' + (c.value === it.category ? ' selected' : '') + '>' + c.label + '</option>';
      }).join('');
      var totalStr = '₹' + Number(it.total || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return '<tr data-idx="' + idx + '" style="border-top:1px solid #eef0f5">' +
                '<td style="padding:6px 8px"><select onchange="_billUpdateField(' + idx + ',\'category\',this.value)" style="width:100%;padding:5px 6px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.82rem;background:#fff">' + catOpts + '</select></td>' +
                '<td style="padding:6px 8px"><input type="text" value="' + (it.description || '').replace(/"/g,'&quot;') + '" oninput="_billUpdateField(' + idx + ',\'description\',this.value)" placeholder="e.g. Ward A · Single occupancy" style="width:100%;padding:5px 8px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.82rem"/></td>' +
                '<td style="padding:6px 8px"><input type="text" value="' + (it.hsn_sac || '').replace(/"/g,'&quot;') + '" oninput="_billUpdateField(' + idx + ',\'hsn_sac\',this.value)" placeholder="" style="width:100%;padding:5px 6px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.78rem"/></td>' +
                '<td style="padding:6px 4px"><input type="number" min="0" step="1" value="' + (it.qty || 0) + '" oninput="_billUpdateField(' + idx + ',\'qty\',this.value)" style="width:100%;padding:5px 4px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.82rem;text-align:right"/></td>' +
                '<td style="padding:6px 4px"><input type="number" min="0" step="0.01" value="' + (it.rate || 0) + '" oninput="_billUpdateField(' + idx + ',\'rate\',this.value)" style="width:100%;padding:5px 4px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.82rem;text-align:right"/></td>' +
                '<td style="padding:6px 4px"><input type="number" min="0" step="0.5" value="' + (it.gst_pct || 0) + '" oninput="_billUpdateField(' + idx + ',\'gst_pct\',this.value)" style="width:100%;padding:5px 4px;border:1px solid #cbd4e3;border-radius:4px;font-size:0.82rem;text-align:right"/></td>' +
                '<td style="padding:6px 10px;text-align:right;font-weight:600"><span class="bill-row-total">' + totalStr + '</span></td>' +
                '<td style="padding:6px 4px;text-align:center"><button type="button" onclick="_billRemoveItem(' + idx + ')" title="Remove" style="background:none;border:none;color:#c62828;cursor:pointer;font-size:1.1rem">×</button></td>' +
             '</tr>';
   }).join('');
}

function _billRecalc() {
   var subtotal = 0, gstTotal = 0;
   _billItems.forEach(function(it) {
      subtotal += Number(it.amount || 0);
      gstTotal += Number(it.gst_amt || 0);
   });
   var discPct = Number(document.getElementById('bill-discount-pct').value) || 0;
   var discAmt = Number(document.getElementById('bill-discount-amt').value) || 0;
   var roundOff = Number(document.getElementById('bill-round-off').value) || 0;
   // If both pct and amt are present, treat pct as the source of truth and
   // recompute amt for display (silently — don't overwrite the user's input).
   var effectiveDiscount = discAmt;
   if (discPct > 0) effectiveDiscount = ((subtotal + gstTotal) * discPct) / 100;
   var net = subtotal + gstTotal - effectiveDiscount - _billAdvancePaid + roundOff;
   if (net < 0) net = 0;

   var fmt = function(n) { return '₹' + Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
   document.getElementById('bill-subtotal').textContent    = fmt(subtotal);
   document.getElementById('bill-gst-total').textContent   = fmt(gstTotal);
   document.getElementById('bill-advance').textContent     = fmt(_billAdvancePaid);
   document.getElementById('bill-net-payable').textContent = fmt(net);

   // GST split — group by rate
   var splitMap = {};
   _billItems.forEach(function(it) {
      var k = Number(it.gst_pct || 0);
      splitMap[k] = (splitMap[k] || 0) + Number(it.gst_amt || 0);
   });
   var splitLines = Object.keys(splitMap).filter(function(k) { return splitMap[k] > 0; })
      .sort(function(a, b) { return Number(a) - Number(b); })
      .map(function(k) { return 'GST @ ' + k + '%: ' + fmt(splitMap[k]); });
   document.getElementById('bill-gst-split').textContent = splitLines.length ? splitLines.join(' · ') : 'No GST charged';
}

function _billQuickAddRoomRent() {
   if (!_billAdmission) return;
   var days = 1;
   if (_billAdmission.admit_date) {
      var a = new Date(_billAdmission.admit_date + 'T00:00:00');
      var b = new Date();
      if (!isNaN(a.getTime())) days = Math.max(1, Math.round((b - a) / 86400000));
   }
   _billAddItem({
      category: 'Room',
      description: (_billAdmission.room_category || 'Room') + ' · ' + (_billAdmission.ward || '—') + (_billAdmission.room_bed ? ' · ' + _billAdmission.room_bed : ''),
      hsn_sac: '996311',
      qty: days,
      rate: 0,
      gst_pct: 0
   });
}

function _billQuickAddDoctorVisits() {
   if (!_billAdmission) return;
   var days = 1;
   if (_billAdmission.admit_date) {
      var a = new Date(_billAdmission.admit_date + 'T00:00:00');
      var b = new Date();
      if (!isNaN(a.getTime())) days = Math.max(1, Math.round((b - a) / 86400000));
   }
   _billAddItem({
      category: 'Doctor Fee',
      description: 'Doctor visit charges · ' + (_billAdmission.doctor_name || 'Treating doctor'),
      hsn_sac: '999312',
      qty: days,
      rate: 0,
      gst_pct: 0
   });
}

function _billQuickAddNursing() {
   if (!_billAdmission) return;
   var days = 1;
   if (_billAdmission.admit_date) {
      var a = new Date(_billAdmission.admit_date + 'T00:00:00');
      var b = new Date();
      if (!isNaN(a.getTime())) days = Math.max(1, Math.round((b - a) / 86400000));
   }
   _billAddItem({
      category: 'Nursing',
      description: 'Nursing charges',
      hsn_sac: '999319',
      qty: days,
      rate: 0,
      gst_pct: 0
   });
}

async function saveIpBill(status, printAfter) {
   if (!_billAdmission) return;
   if (status === 'Issued' && !_billItems.length) {
      alert('Cannot issue an empty bill. Add at least one line item.');
      return;
   }
   var subtotal = 0, gstTotal = 0;
   _billItems.forEach(function(it) {
      subtotal += Number(it.amount || 0);
      gstTotal += Number(it.gst_amt || 0);
   });
   var discPct = Number(document.getElementById('bill-discount-pct').value) || 0;
   var discAmt = Number(document.getElementById('bill-discount-amt').value) || 0;
   var roundOff = Number(document.getElementById('bill-round-off').value) || 0;
   var effectiveDiscount = discAmt;
   if (discPct > 0) effectiveDiscount = ((subtotal + gstTotal) * discPct) / 100;
   var net = subtotal + gstTotal - effectiveDiscount - _billAdvancePaid + roundOff;
   if (net < 0) net = 0;

   var res = await AppDB.upsertIpBill({
      provider_id:  _billAdmission.provider_id,
      admission_id: _billAdmission.id,
      bill_date:    _todayLocalYmd(),
      subtotal:     subtotal,
      discount_pct: discPct,
      discount_amt: effectiveDiscount,
      gst_total:    gstTotal,
      advance_paid: _billAdvancePaid,
      round_off:    roundOff,
      net_payable:  net,
      status:       status,
      notes:        document.getElementById('bill-notes').value || ''
   }, _billItems);

   if (!res) { alert('Failed to save bill.'); return; }
   var admId = _billAdmission.id;
   closeIpBillModal();
   if (printAfter) printIpBill(admId);
   renderShopAdmissions();
}

async function printIpBill(admId) {
   var bill = await AppDB.getIpBill(admId);
   if (!bill) { alert('Bill not found.'); return; }
   var items = await AppDB.getIpBillItems(bill.id);
   var admRows = await AppDB.getAdmissions(bill.provider_id);
   var r = (admRows || []).find(function(x) { return x.id === admId; }) || {};
   await loadAptProviders(true);
   var prov = _aptGetProvider(bill.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var fmtCur = function(n) { return '₹' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
   var fmtDate = function(d) {
      if (!d) return '—';
      var dt = new Date(d + 'T00:00:00');
      return isNaN(dt.getTime()) ? '—' : dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
   };

   // GST split — sum by rate
   var splitMap = {};
   (items || []).forEach(function(it) {
      var k = Number(it.gst_pct || 0);
      splitMap[k] = (splitMap[k] || 0) + Number(it.gst_amt || 0);
   });
   var splitRows = Object.keys(splitMap).filter(function(k) { return splitMap[k] > 0; })
      .sort(function(a, b) { return Number(a) - Number(b); })
      .map(function(k) { return '<tr><td>GST @ ' + k + '%</td><td style="text-align:right">' + fmtCur(splitMap[k]) + '</td></tr>'; })
      .join('');

   var itemRows = (items || []).map(function(it, i) {
      return '<tr>' +
                '<td style="text-align:center">' + (i + 1) + '</td>' +
                '<td>' + esc(it.description || '—') + '<div style="font-size:10px;color:#888">' + esc(it.category) + '</div></td>' +
                '<td style="text-align:center;font-size:10px">' + esc(it.hsn_sac || '—') + '</td>' +
                '<td style="text-align:right">' + Number(it.qty || 0) + '</td>' +
                '<td style="text-align:right">' + fmtCur(it.rate) + '</td>' +
                '<td style="text-align:right">' + fmtCur(it.amount) + '</td>' +
                '<td style="text-align:right">' + (Number(it.gst_pct) || 0) + '%<div style="font-size:10px;color:#666">' + fmtCur(it.gst_amt) + '</div></td>' +
                '<td style="text-align:right;font-weight:600">' + fmtCur(it.total) + '</td>' +
             '</tr>';
   }).join('');

   var words = _rupeesInWords(Math.round(Number(bill.net_payable || 0))) + ' Rupees Only';

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Bill · ' + esc(bill.bill_no) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:880px;margin:0 auto;line-height:1.45;font-size:13px}' +
         '.head{border-bottom:2px solid #00695c;padding-bottom:12px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-start;gap:14px}' +
         '.head h1{margin:0 0 4px;font-size:22px;color:#00695c}' +
         '.head .sub{font-size:11px;color:#555}' +
         '.doc-title{text-align:center;margin:14px 0;font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#00695c}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;background:#f0fdf4;padding:10px 12px;border-radius:8px;margin-bottom:14px;font-size:12px}' +
         '.info b{color:#1a1a2e}' +
         'table.lines{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px}' +
         'table.lines th,table.lines td{border:1px solid #cfd8e3;padding:7px 8px}' +
         'table.lines th{background:#e0f2f1;color:#00695c;font-size:10.5px;text-transform:uppercase;letter-spacing:0.04em}' +
         '.summary{display:grid;grid-template-columns:1fr 360px;gap:18px;margin-top:14px}' +
         '.summary table{width:100%;font-size:12px}' +
         '.summary table td{padding:5px 6px}' +
         '.summary .total-row{background:#00695c;color:#fff;font-weight:800;font-size:14px}' +
         '.words{font-style:italic;color:#444;margin-top:4px}' +
         '.gst-split{font-size:11px;color:#666;border-top:1px solid #eef0f5;padding-top:6px;margin-top:6px}' +
         '.sig{margin-top:36px;display:flex;justify-content:space-between;font-size:11px}' +
         '.sig .line{border-top:1px solid #333;margin-top:50px;padding-top:4px;min-width:200px}' +
         '.footer{margin-top:18px;text-align:center;font-size:10.5px;color:#666}' +
         '.toolbar{text-align:right;margin-bottom:10px}' +
         '.toolbar button{padding:7px 12px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:12.5px;background:#1a73e8;color:#fff}' +
         '@media print{.toolbar{display:none}body{padding:14px}}' +
      '</style></head><body>' +
      '<div class="toolbar"><button onclick="window.print()">🖨 Print / Save PDF</button></div>' +
      '<div class="head">' +
         '<div>' +
            '<h1>' + esc(prov.name || 'Hospital') + '</h1>' +
            '<div class="sub">' + esc(prov.address || '') + '</div>' +
            (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
         '</div>' +
         '<div style="text-align:right;font-size:11px;color:#666">' +
            '<b>Bill No:</b> ' + esc(bill.bill_no) + '<br/>' +
            '<b>Date:</b> ' + esc(fmtDate(bill.bill_date)) + '<br/>' +
            '<b>Status:</b> ' + esc(bill.status) +
         '</div>' +
      '</div>' +
      '<div class="doc-title">Itemized In-Patient Bill</div>' +
      '<div class="info">' +
         '<div><b>Patient:</b> ' + esc(r.patient_name || '—') + '</div>' +
         '<div><b>UHID:</b> ' + esc(r.patient_ref || '—') + '</div>' +
         '<div><b>Phone:</b> ' + esc(r.patient_phone || '—') + '</div>' +
         '<div><b>Ward / Bed:</b> ' + esc((r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '')) + '</div>' +
         '<div><b>Admit Date:</b> ' + esc(fmtDate(r.admit_date)) + '</div>' +
         '<div><b>Discharge Date:</b> ' + esc(fmtDate(r.target_discharge)) + '</div>' +
         '<div><b>Treating Doctor:</b> ' + esc(r.doctor_name || '—') + '</div>' +
         '<div><b>Payment Mode:</b> ' + esc(r.payment_mode || '—') + (r.tpa_name ? ' · ' + esc(r.tpa_name) : '') + '</div>' +
      '</div>' +
      '<table class="lines">' +
         '<thead><tr>' +
            '<th style="width:4%">#</th>' +
            '<th style="width:34%">Description / Category</th>' +
            '<th style="width:9%">HSN/SAC</th>' +
            '<th style="width:6%">Qty</th>' +
            '<th style="width:10%">Rate</th>' +
            '<th style="width:10%">Amount</th>' +
            '<th style="width:10%">GST</th>' +
            '<th style="width:13%">Total</th>' +
         '</tr></thead>' +
         '<tbody>' + (itemRows || '<tr><td colspan="8" style="text-align:center;color:#888;padding:14px">No line items</td></tr>') + '</tbody>' +
      '</table>' +
      '<div class="summary">' +
         '<div>' +
            (bill.notes ? '<div style="background:#fff7ed;border-left:3px solid #d97706;padding:8px 12px;border-radius:4px;font-size:11.5px"><b>Notes:</b> ' + esc(bill.notes) + '</div>' : '') +
            '<div class="gst-split"><b>GST Split:</b><br/><table style="margin-top:4px">' + (splitRows || '<tr><td colspan="2" style="color:#888">No GST charged on this bill.</td></tr>') + '</table></div>' +
            '<div style="margin-top:10px;font-size:10.5px;color:#888"><b>Amount in words:</b> ' + esc(words) + '</div>' +
         '</div>' +
         '<div>' +
            '<table>' +
               '<tr><td>Subtotal</td><td style="text-align:right">' + fmtCur(bill.subtotal) + '</td></tr>' +
               '<tr><td>+ GST</td><td style="text-align:right">' + fmtCur(bill.gst_total) + '</td></tr>' +
               (Number(bill.discount_amt) > 0 ? '<tr><td>− Discount' + (Number(bill.discount_pct) > 0 ? ' (' + Number(bill.discount_pct) + '%)' : '') + '</td><td style="text-align:right">−' + fmtCur(bill.discount_amt) + '</td></tr>' : '') +
               (Number(bill.advance_paid) > 0 ? '<tr><td>− Advance paid</td><td style="text-align:right">−' + fmtCur(bill.advance_paid) + '</td></tr>' : '') +
               (Number(bill.round_off) !== 0 ? '<tr><td>Round-off</td><td style="text-align:right">' + fmtCur(bill.round_off) + '</td></tr>' : '') +
               '<tr class="total-row"><td>NET PAYABLE</td><td style="text-align:right">' + fmtCur(bill.net_payable) + '</td></tr>' +
            '</table>' +
         '</div>' +
      '</div>' +
      '<div class="sig">' +
         '<div><div class="line"></div>Patient / Attendant Signature</div>' +
         '<div style="text-align:right"><div class="line"></div>Cashier / Authorised Signatory</div>' +
      '</div>' +
      '<div class="footer">' + esc(prov.name || '') + ' · Computer-generated itemized bill. Healthcare services to in-patients are generally exempt from GST under notification 12/2017 — taxable items are split above.</div>' +
      '</body></html>';

   var w = window.open('', 'bill-' + admId, 'width=900,height=1000');
   w.document.write(html); w.document.close();
}

// ── ADMISSIONS tab — inpatient (admitted) tracking ──
// Shows 3 stat cards (Total occupied, Avg LOS, Pending discharges today),
// then a table of admitted patients with discharge actions. Owner picks one
// of their hospitals at the top if they run more than one.
var _admHospitalChoice = null;

async function renderShopAdmissions() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var host = document.getElementById('shopAdmissionsContent');
   if (!host) return;
   _liveSubscribe('shopAdmissions', 'admissions', renderShopAdmissions);

   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   if (!mine.length) {
      host.innerHTML = '<div class="profile-card"><div class="profile-card-body"><div class="shop-empty" style="grid-column:1/-1">No hospital linked to your account.</div></div></div>';
      return;
   }
   var chosen = _admHospitalChoice && mine.find(function(p) { return p.id === _admHospitalChoice; });
   if (!chosen) chosen = mine[0];
   _admHospitalChoice = chosen.id;

   var rows = await AppDB.getAdmissions(chosen.id);
   var admitted   = rows.filter(function(r) { return r.status === 'Admitted'; });
   var discharged = rows.filter(function(r) { return r.status === 'Discharged'; });
   var todayYmd   = _todayLocalYmd();
   var activeTab  = window._admTabActive || 'admitted';

   // Stats
   var totalOccupied = admitted.length;
   var losDays = admitted.map(function(r) {
      var d = new Date((r.admit_date || '') + 'T00:00:00');
      if (isNaN(d.getTime())) return 0;
      return Math.max(0, Math.round((new Date(todayYmd + 'T00:00:00') - d) / 86400000));
   });
   var avgLos   = losDays.length ? Math.round(losDays.reduce(function(s, n) { return s + n; }, 0) / losDays.length * 10) / 10 : 0;
   var dueToday = admitted.filter(function(r) { return r.target_discharge === todayYmd; }).length;

   var hospitalPicker = mine.length === 1 ? '' :
      '<select class="admin-filter-select" onchange="_admPickHospital(this.value)" style="margin-bottom:14px">' +
         mine.map(function(p) { return '<option value="' + p.id + '"' + (p.id === chosen.id ? ' selected' : '') + '>' + p.name + '</option>'; }).join('') +
      '</select>';

   var statCards =
      '<div class="shop-ov-kpis" style="padding:0;margin-bottom:14px">' +
         _kpiCard('blue',   '🛏️', totalOccupied,    'Occupied Beds') +
         _kpiCard('orange', '🗓️', avgLos + ' days', 'Avg Length of Stay') +
         _kpiCard('red',    '⚠️',  dueToday,         'Pending Discharges Today') +
         _kpiCard('green',  '✅',  discharged.length, 'Total Discharged') +
      '</div>';

   var tabBar =
      '<div style="display:flex;gap:0;margin-bottom:14px;border:1.5px solid #e0e0e0;border-radius:8px;overflow:hidden;width:fit-content">' +
         '<button onclick="_admTab(\'admitted\')" style="padding:7px 20px;font-size:0.85rem;font-weight:600;border:none;cursor:pointer;' + (activeTab==='admitted' ? 'background:#1565c0;color:#fff' : 'background:#fff;color:#555') + '">🛏️ Admitted (' + admitted.length + ')</button>' +
         '<button onclick="_admTab(\'discharged\')" style="padding:7px 20px;font-size:0.85rem;font-weight:600;border:none;cursor:pointer;border-left:1.5px solid #e0e0e0;' + (activeTab==='discharged' ? 'background:#2e7d32;color:#fff' : 'background:#fff;color:#555') + '">✅ Discharged (' + discharged.length + ')</button>' +
      '</div>';

   var tableRows, thead;

   if (activeTab === 'admitted') {
      thead = '<tr><th>Location / Bed</th><th>Patient</th><th>Length of Stay</th><th>Admit Date</th><th>Target Discharge</th><th>Vitals</th><th>Rounds</th><th style="text-align:right">Actions</th></tr>';
      var admSearchVal = (window._admAdmSearchVal || '').toLowerCase();
      var admFiltered = admitted.filter(function(r) {
         if (!admSearchVal) return true;
         return ((r.patient_name  || '').toLowerCase().indexOf(admSearchVal) !== -1) ||
                ((r.patient_phone || '').toLowerCase().indexOf(admSearchVal) !== -1) ||
                ((r.patient_ref   || '').toLowerCase().indexOf(admSearchVal) !== -1) ||
                ((r.ward          || '').toLowerCase().indexOf(admSearchVal) !== -1) ||
                ((r.provisional_diagnosis || '').toLowerCase().indexOf(admSearchVal) !== -1);
      });
      window._admAdmSearchBar = '<div style="margin-bottom:10px"><input type="search" class="apt-search-input" placeholder="🔍 Name / phone / ref / ward / diagnosis" value="' + (window._admAdmSearchVal || '').replace(/"/g,'&quot;') + '" oninput="_admAdmSearch(this.value)" style="width:100%;max-width:360px"/></div>';
      if (!admitted.length) {
         tableRows = '<tr><td colspan="8" style="text-align:center;padding:30px;color:#888">No admitted patients. Click <strong>+ Admit Patient</strong> to add one.</td></tr>';
      } else if (!admFiltered.length) {
         tableRows = '<tr><td colspan="8" style="text-align:center;padding:20px;color:#888">No matches for "' + (window._admAdmSearchVal || '') + '".</td></tr>';
      } else {
         tableRows = admFiltered.map(function(r) {
            var d = new Date((r.admit_date || '') + 'T00:00:00');
            var los = isNaN(d.getTime()) ? 0 : Math.max(0, Math.round((new Date(todayYmd + 'T00:00:00') - d) / 86400000));
            var admitLbl = isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            var targetLbl = '—', isDueToday = false;
            if (r.target_discharge) {
               isDueToday = r.target_discharge === todayYmd;
               var td2 = new Date(r.target_discharge + 'T00:00:00');
               targetLbl = isDueToday ? 'TODAY' : td2.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            }
            var roundsDone = r.rounds_status === 'complete';
            var loc = (r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '');
            var rid = r.id.replace(/'/g, "\\'");
            return '<tr' + (isDueToday ? ' style="background:#fff8e1"' : '') + '>' +
                      '<td><div class="apt-tbl-name">' + loc + '</div>' +
                         (r.admission_type && r.admission_type !== 'Planned' ? '<div class="apt-tbl-sub"><span class="adm-type-badge adm-type-' + r.admission_type.toLowerCase().replace(/[^a-z]/g,'') + '">' + r.admission_type + '</span></div>' : '') +
                      '</td>' +
                      '<td><div class="apt-tbl-name">' + (r.patient_name || '—') +
                         (r.blood_group ? ' <span class="adm-bg-badge adm-bg-' + (r.blood_group.replace('+','pos').replace('-','neg')) + '">' + r.blood_group + '</span>' : '') +
                      '</div>' +
                         (r.patient_ref   ? '<div class="apt-tbl-sub" style="font-family:monospace">#' + r.patient_ref + '</div>' : '') +
                         (r.patient_phone ? '<div class="apt-tbl-sub">📞 ' + r.patient_phone + '</div>' : '') +
                         (r.provisional_diagnosis ? '<div class="apt-tbl-sub" style="color:#7c3aed;font-style:italic">Dx: ' + r.provisional_diagnosis + '</div>' : '') +
                      '</td>' +
                      '<td><span class="apt-status confirmed">🗓️ ' + los + ' day' + (los === 1 ? '' : 's') + '</span></td>' +
                      '<td><div class="apt-tbl-name">' + admitLbl + '</div></td>' +
                      '<td><div class="apt-tbl-name"' + (isDueToday ? ' style="color:#e65100;font-weight:700"' : '') + '>' + targetLbl + '</div></td>' +
                      '<td style="font-size:0.75rem;color:#5f6473;white-space:nowrap">' +
                         (r.bp_systolic ? '<div>BP ' + r.bp_systolic + '/' + (r.bp_diastolic||'—') + '</div>' : '') +
                         (r.pulse_bpm   ? '<div>♥ ' + r.pulse_bpm + ' bpm</div>' : '') +
                         (r.spo2        ? '<div>SpO₂ ' + r.spo2 + '%</div>' : '') +
                         (!r.bp_systolic && !r.pulse_bpm ? '<span style="color:#ccc">—</span>' : '') +
                      '</td>' +
                      '<td><span class="adm-rounds-pill ' + (roundsDone ? 'done' : 'pending') + '" onclick="toggleAdmissionRounds(\'' + rid + '\')">' + (roundsDone ? '✓ Done' : '⏳ Pending') + '</span></td>' +
                      '<td style="text-align:right;white-space:nowrap">' +
                         '<button class="apt-view-btn" style="background:#1565c0" onclick="openAdmissionModal(\'' + rid + '\')">✏️ Edit</button> ' +
                         '<button class="apt-view-btn" style="background:#6a1b9a" onclick="printAdmissionConsent(\'' + rid + '\')">📄 Consent</button> ' +
                         '<button class="apt-view-btn" style="background:#00796b" onclick="openDepositModal(\'' + rid + '\')">💰 Deposit</button> ' +
                         '<button class="apt-view-btn" style="background:#00695c" onclick="openIpBillModal(\'' + rid + '\')">🧾 Bill</button> ' +
                         '<button class="apt-view-btn" style="background:#2e7d32" onclick="dischargeAdmission(\'' + rid + '\')">✅ Discharge</button> ' +
                         '<button class="apt-view-btn" style="background:#c62828" onclick="shopDeleteAdmission(\'' + rid + '\')">🗑 Delete</button>' +
                      '</td>' +
                   '</tr>';
         }).join('');
      }
   } else {
      thead = '<tr><th>Patient</th><th>Ward / Bed</th><th>Admit Date</th><th>Discharge Date</th><th>Length of Stay</th><th>Doctor</th><th style="text-align:right">Actions</th></tr>';
      var admSearch = (window._admDisSearchVal || '').toLowerCase();
      var disFiltered = discharged.filter(function(r) {
         if (!admSearch) return true;
         return ((r.patient_name  || '').toLowerCase().indexOf(admSearch) !== -1) ||
                ((r.patient_phone || '').toLowerCase().indexOf(admSearch) !== -1) ||
                ((r.patient_ref   || '').toLowerCase().indexOf(admSearch) !== -1) ||
                ((r.provisional_diagnosis || '').toLowerCase().indexOf(admSearch) !== -1);
      });
      var disSearchBar = '<div style="margin-bottom:10px"><input type="search" class="apt-search-input" placeholder="🔍 Name / phone / ref / diagnosis" value="' + (window._admDisSearchVal || '').replace(/"/g,'&quot;') + '" oninput="_admDisSearch(this.value)" style="width:100%;max-width:360px"/></div>';
      window._admDisSearchBar = disSearchBar;
      if (!discharged.length) {
         tableRows = '<tr><td colspan="7" style="text-align:center;padding:30px;color:#888">No discharged patients yet.</td></tr>';
      } else if (!disFiltered.length) {
         tableRows = '<tr><td colspan="7" style="text-align:center;padding:20px;color:#888">No matches for "' + (window._admDisSearchVal || '') + '".</td></tr>';
      } else {
         var sorted = disFiltered.slice().sort(function(a, b) { return (b.target_discharge || b.admit_date || '') > (a.target_discharge || a.admit_date || '') ? 1 : -1; });
         tableRows = sorted.map(function(r) {
            var admD  = new Date((r.admit_date || '') + 'T00:00:00');
            var disD  = new Date((r.target_discharge || '') + 'T00:00:00');
            var admLbl = isNaN(admD.getTime()) ? '—' : admD.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            var disLbl = isNaN(disD.getTime()) ? '—' : disD.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            var los = (!isNaN(admD.getTime()) && !isNaN(disD.getTime())) ? Math.max(0, Math.round((disD - admD) / 86400000)) : '—';
            var loc = (r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '');
            var rid = r.id.replace(/'/g, "\\'");
            return '<tr>' +
                      '<td><div class="apt-tbl-name">' + (r.patient_name || '—') +
                         (r.blood_group ? ' <span class="adm-bg-badge adm-bg-' + (r.blood_group.replace('+','pos').replace('-','neg')) + '">' + r.blood_group + '</span>' : '') +
                      '</div>' +
                         (r.patient_ref   ? '<div class="apt-tbl-sub" style="font-family:monospace">#' + r.patient_ref + '</div>' : '') +
                         (r.patient_phone ? '<div class="apt-tbl-sub">📞 ' + r.patient_phone + '</div>' : '') +
                         (r.provisional_diagnosis ? '<div class="apt-tbl-sub" style="color:#7c3aed;font-style:italic">Dx: ' + r.provisional_diagnosis + '</div>' : '') +
                      '</td>' +
                      '<td><div class="apt-tbl-name">' + loc + '</div></td>' +
                      '<td>' + admLbl + '</td>' +
                      '<td><strong style="color:#2e7d32">' + disLbl + '</strong></td>' +
                      '<td><span class="apt-status confirmed">' + (typeof los === 'number' ? los + ' day' + (los === 1 ? '' : 's') : '—') + '</span></td>' +
                      '<td style="color:#555;font-size:0.85rem">' + (r.doctor_name || '—') + '</td>' +
                      '<td style="text-align:right;white-space:nowrap">' +
                         '<button class="apt-view-btn" style="background:#1565c0" onclick="openAdmissionModal(\'' + rid + '\')">✏️ Edit</button> ' +
                         '<button class="apt-view-btn" style="background:#2e7d32" onclick="dischargeAdmission(\'' + rid + '\')">📋 Summary</button> ' +
                         '<button class="apt-view-btn" style="background:#00695c" onclick="openIpBillModal(\'' + rid + '\')">🧾 Bill</button> ' +
                         '<button class="apt-view-btn" style="background:#c62828" onclick="shopDeleteAdmission(\'' + rid + '\')">🗑 Delete</button>' +
                      '</td>' +
                   '</tr>';
         }).join('');
      }
   }

   window._shopAdmFiltered = activeTab === 'admitted' ? admitted : discharged;

   host.innerHTML =
      hospitalPicker +
      statCards +
      tabBar +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">' +
         '<div></div>' +
         '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
            (window._shopAdmFiltered.length ? '<button class="apt-view-btn" style="background:#c62828;padding:8px 14px;font-size:0.85rem" onclick="shopDeleteAllAdmissions()">🗑 Delete All Shown</button>' : '') +
            (activeTab === 'admitted' ? '<button class="apt-view-btn" style="background:#1565c0;padding:8px 14px;font-size:0.85rem" onclick="openAdmissionModal()">+ Admit Patient</button>' : '') +
         '</div>' +
      '</div>' +
      (activeTab === 'admitted'   ? (window._admAdmSearchBar || '') : '') +
      (activeTab === 'discharged' ? (window._admDisSearchBar || '') : '') +
      '<div class="apt-tbl-wrap"><table class="apt-tbl"><thead>' + thead + '</thead><tbody>' + tableRows + '</tbody></table></div>';
}

function _admTab(tab) { window._admTabActive = tab; window._admAdmSearchVal = ''; window._admDisSearchVal = ''; renderShopAdmissions(); }
function _admAdmSearch(q) { window._admAdmSearchVal = q.toLowerCase(); renderShopAdmissions(); }
function _admDisSearch(q) { window._admDisSearchVal = q.toLowerCase(); renderShopAdmissions(); }

function _admPickHospital(id) { _admHospitalChoice = id; renderShopAdmissions(); }

// All editable form-field IDs in the Admit modal. Used by open/reset.
var _ADM_FIELDS = [
   'adm-id','adm-name','adm-phone','adm-ref','adm-ward','adm-room',
   'adm-admit-date','adm-admit-time','adm-target-date','adm-notes',
   // Extended (Phase 7.2)
   'adm-doctor','adm-procedure','adm-email','adm-dob','adm-gender',
   'adm-marital','adm-employment','adm-address','adm-city','adm-state','adm-postal',
   'adm-guardian-name','adm-guardian-relation','adm-guardian-phone',
   // Launch-ready intake (Phase 8.3)
   'adm-type','adm-mlc-no','adm-complaint','adm-allergies',
   'adm-current-meds','adm-past-history',
   'adm-id-proof-type','adm-id-proof-no',
   'adm-room-cat','adm-pay-mode','adm-tpa-name','adm-tpa-card',
   'adm-lookup',
   // Phase 9 — complete form
   'adm-source','adm-ref-doctor','adm-ref-hospital',
   'adm-weight','adm-height','adm-bp-sys','adm-bp-dia','adm-pulse','adm-temp','adm-spo2','adm-rbs',
   'adm-prov-dx','adm-surgical-history','adm-tobacco','adm-alcohol','adm-lmp','adm-gpla',
   'adm-blood-group','adm-religion',
   'adm-emg2-name','adm-emg2-relation','adm-emg2-phone'
];

var _admBedsCache = [];

async function _loadAdmBedDropdowns(currentWard, currentRoomBed, currentBedId) {
   _admBedsCache = _admHospitalChoice ? await AppDB.getBeds(_admHospitalChoice) : [];
   var available = _admBedsCache.filter(function(b) { return b.active !== false && (b.status === 'Available' || b.id === currentBedId); });

   var catSel = document.getElementById('adm-ward');
   var roomSel = document.getElementById('adm-room');
   if (!catSel || !roomSel) return;

   // Populate category dropdown
   var cats = [];
   available.forEach(function(b) { if (cats.indexOf(b.category) === -1) cats.push(b.category); });
   catSel.innerHTML = '<option value="">— Select category —</option>' +
      cats.map(function(c) {
         var count = available.filter(function(b) { return b.category === c; }).length;
         return '<option value="' + c + '"' + (c === currentWard ? ' selected' : '') + '>' + c + ' (' + count + ' available)</option>';
      }).join('') +
      (cats.length === 0 ? '<option disabled>No beds in Bed Management yet</option>' : '');

   // Populate room/bed dropdown for current category
   _admFillBedOptions(currentWard || cats[0] || '', currentRoomBed, currentBedId);
}

function _admFillBedOptions(cat, currentRoomBed, currentBedId) {
   var roomSel = document.getElementById('adm-room');
   var hint    = document.getElementById('adm-bed-avail-hint');
   if (!roomSel) return;
   var filtered = _admBedsCache.filter(function(b) {
      return b.active !== false && b.category === cat && (b.status === 'Available' || b.id === currentBedId);
   });
   var availCount = filtered.filter(function(b) { return b.status === 'Available'; }).length;
   if (hint) hint.textContent = availCount ? availCount + ' available' : '0 available';
   roomSel.innerHTML = '<option value="">— Select bed —</option>' +
      filtered.map(function(b) {
         var base = Number(b.rate_per_day || 0), gst = Number(b.gst_pct || 0);
         var totalRate = base + Math.round(base * gst / 100);
         var label = 'Room ' + b.room_number + ' · Bed ' + b.bed_number + (b.floor ? ' · ' + b.floor + ' floor' : '') + (totalRate ? ' · ₹' + totalRate.toLocaleString('en-IN') + '/day' : '') + (b.status !== 'Available' ? ' (' + b.status + ')' : '');
         var val   = b.room_number + ' · ' + b.bed_number;
         var sel   = (val === currentRoomBed || b.id === currentBedId) ? ' selected' : '';
         return '<option value="' + val + '" data-bed-id="' + b.id + '" data-rate="' + totalRate + '" data-base="' + base + '" data-gst="' + gst + '"' + sel + '>' + label + '</option>';
      }).join('') +
      (filtered.length === 0 && cat ? '<option disabled>No available beds in this category</option>' : '');
   // Sync hidden bed-id field
   var chosen = roomSel.options[roomSel.selectedIndex];
   var bedIdEl = document.getElementById('adm-bed-id');
   if (bedIdEl) bedIdEl.value = chosen ? (chosen.dataset.bedId || '') : '';
}

function _admBedCatChange() {
   var cat = (document.getElementById('adm-ward') || {}).value || '';
   _admFillBedOptions(cat, '', '');
   var rateEl = document.getElementById('adm-bed-rate-hint');
   if (rateEl) { rateEl.textContent = ''; rateEl.style.display = 'none'; }
}

function _admRoomChange() {
   var sel = document.getElementById('adm-room');
   var bedIdEl = document.getElementById('adm-bed-id');
   if (!sel || !bedIdEl) return;
   var opt = sel.options[sel.selectedIndex];
   bedIdEl.value = (opt && opt.dataset.bedId) ? opt.dataset.bedId : '';
   var rateEl = document.getElementById('adm-bed-rate-hint');
   if (rateEl && opt) {
      var base = Number(opt.dataset.base || 0), gst = Number(opt.dataset.gst || 0), total = Number(opt.dataset.rate || 0);
      if (total) {
         rateEl.innerHTML = '₹' + total.toLocaleString('en-IN') + ' / day' + (gst ? ' <span style="color:#7c3aed">(₹' + base.toLocaleString('en-IN') + ' + ' + gst + '% GST)</span>' : '');
         rateEl.style.display = 'inline';
      } else {
         rateEl.textContent = ''; rateEl.style.display = 'none';
      }
   }
}

function openAdmissionModal(id) {
   var modal = document.getElementById('admissionModal');
   var titleEl = document.getElementById('admissionModalTitle');
   var get = function(eid) { return document.getElementById(eid); };

   // Populate the Doctor dropdown from this hospital's doctors (live names)
   _admPopulateDoctorSelect();

   if (id) {
      AppDB.getAdmissions(_admHospitalChoice).then(function(rows) {
         var r = (rows || []).find(function(x) { return x.id === id; });
         if (!r) { alert('Admission not found'); return; }
         titleEl.textContent = '✏️ Edit Admission';
         get('adm-id').value           = r.id;
         get('adm-name').value         = r.patient_name || '';
         get('adm-phone').value        = r.patient_phone || '';
         get('adm-ref').value          = r.patient_ref || '';
         _loadAdmBedDropdowns(r.ward || '', r.room_bed || '', r.bed_id || '');
         get('adm-admit-date').value   = r.admit_date || '';
         get('adm-target-date').value  = r.target_discharge || '';
         get('adm-notes').value        = r.notes || '';
         get('adm-doctor').value       = r.doctor_name || '';
         get('adm-procedure').value    = r.planned_procedure || '';
         get('adm-email').value        = r.patient_email || '';
         get('adm-dob').value          = r.dob || '';
         get('adm-gender').value       = r.gender || '';
         get('adm-marital').value      = r.marital_status || '';
         get('adm-employment').value   = r.employment_status || '';
         get('adm-address').value      = r.address || '';
         get('adm-city').value         = r.city || '';
         get('adm-postal').value       = r.postal_code || '';
         get('adm-guardian-name').value     = r.guardian_name || '';
         get('adm-guardian-relation').value = r.guardian_relation || '';
         get('adm-guardian-phone').value    = r.guardian_phone || '';
         // Phase 8.3 — launch-ready intake fields
         get('adm-type').value          = r.admission_type || 'Planned';
         get('adm-complaint').value     = r.chief_complaint || '';
         get('adm-allergies').value     = r.known_allergies || '';
         get('adm-current-meds').value  = r.current_medications || '';
         get('adm-past-history').value  = r.past_medical_history || '';
         get('adm-id-proof-type').value = r.id_proof_type || '';
         get('adm-id-proof-no').value   = r.id_proof_number || '';
         get('adm-room-cat').value      = r.room_category || '';
         get('adm-pay-mode').value      = r.payment_mode || '';
         get('adm-tpa-name').value      = r.tpa_name || '';
         get('adm-tpa-card').value      = r.tpa_card_no || '';
         get('adm-mlc').checked         = !!r.mlc;
         get('adm-mlc-no').value        = r.mlc_number || '';
         // Reveal conditional rows to match loaded values
         get('adm-mlc-no-wrap').style.display = r.mlc ? '' : 'none';
         get('adm-tpa-wrap').style.display    = (r.payment_mode === 'TPA / Insurance' || r.payment_mode === 'Corporate') ? '' : 'none';
         // Phase 9 — complete form
         var setV9 = function(eid, val) { var el = get(eid); if (el) el.value = (val == null ? '' : val); };
         setV9('adm-admit-time',         r.admit_time || '');
         setV9('adm-source',             r.admission_source || '');
         setV9('adm-ref-doctor',         r.referring_doctor || '');
         setV9('adm-ref-hospital',       r.referring_hospital || '');
         setV9('adm-weight',             r.weight_kg  != null ? r.weight_kg  : '');
         setV9('adm-height',             r.height_cm  != null ? r.height_cm  : '');
         setV9('adm-bp-sys',             r.bp_systolic  != null ? r.bp_systolic  : '');
         setV9('adm-bp-dia',             r.bp_diastolic != null ? r.bp_diastolic : '');
         setV9('adm-pulse',              r.pulse_bpm  != null ? r.pulse_bpm  : '');
         setV9('adm-temp',               r.temp_f     != null ? r.temp_f     : '');
         setV9('adm-spo2',               r.spo2       != null ? r.spo2       : '');
         setV9('adm-rbs',                r.rbs_mg_dl  != null ? r.rbs_mg_dl  : '');
         setV9('adm-prov-dx',            r.provisional_diagnosis || '');
         setV9('adm-surgical-history',   r.surgical_history || '');
         setV9('adm-tobacco',            r.social_tobacco || '');
         setV9('adm-alcohol',            r.social_alcohol || '');
         setV9('adm-lmp',                r.obstetric_lmp || '');
         setV9('adm-gpla',               r.obstetric_gpla || '');
         setV9('adm-blood-group',        r.blood_group || '');
         setV9('adm-religion',           r.religion || '');
         setV9('adm-state',              r.state || '');
         setV9('adm-emg2-name',          r.emergency2_name || '');
         setV9('adm-emg2-relation',      r.emergency2_relation || '');
         setV9('adm-emg2-phone',         r.emergency2_phone || '');
         var cgEl = get('adm-consent-general'); if (cgEl) cgEl.checked = !!r.consent_general;
         var cdEl = get('adm-consent-dpdp');    if (cdEl) cdEl.checked = !!r.consent_dpdp;
         var refWrap = get('adm-referral-wrap');
         if (refWrap) refWrap.style.display = r.admission_source === 'Referred' ? '' : 'none';
         modal.classList.remove('hidden');
      });
   } else {
      titleEl.textContent = '🛏️ Admit Patient';
      _ADM_FIELDS.forEach(function(e) { var el = get(e); if (el) el.value = ''; });
      delete get('adm-ref').dataset.autofilled;
      // Reset conditional toggles to closed state
      var mlcChk = get('adm-mlc'); if (mlcChk) mlcChk.checked = false;
      var mlcWrap = get('adm-mlc-no-wrap'); if (mlcWrap) mlcWrap.style.display = 'none';
      var tpaWrap = get('adm-tpa-wrap');    if (tpaWrap) tpaWrap.style.display = 'none';
      var refWrap = get('adm-referral-wrap'); if (refWrap) refWrap.style.display = 'none';
      var cgEl = get('adm-consent-general'); if (cgEl) cgEl.checked = false;
      var cdEl = get('adm-consent-dpdp');    if (cdEl) cdEl.checked = false;
      // Default admission type to Planned
      var typeEl = get('adm-type'); if (typeEl) typeEl.value = 'Planned';
      // Stale typeahead results from the previous open — wipe + hide the panel
      var lookupResults = get('adm-lookup-results');
      if (lookupResults) { lookupResults.innerHTML = ''; lookupResults.classList.add('hidden'); }
      window._admLookupHits = [];
      get('adm-admit-date').value = _todayLocalYmd();
      _loadAdmBedDropdowns('', '', '');
      modal.classList.remove('hidden');
   }
}

// Populate the Doctor's Name dropdown from the currently-selected hospital's
// live doctors list (so renames / removals propagate automatically).
function _admPopulateDoctorSelect() {
   var sel = document.getElementById('adm-doctor');
   if (!sel) return;
   var current = sel.value;
   var prov = (_aptProvidersCache || []).find(function(p) { return p.id === _admHospitalChoice; });
   var docs = prov ? (prov.doctors || []) : [];
   sel.innerHTML = '<option value="">— Select doctor —</option>' +
      docs.map(function(d) {
         return '<option value="' + d.name + '"' + (d.name === current ? ' selected' : '') + '>' +
                   d.name + (d.speciality ? ' (' + d.speciality + ')' : '') +
                '</option>';
      }).join('');
}

// Typeahead: searches paid+completed out-patients by name/phone for the
// currently-selected hospital. Click a result → pre-fill the form.
var _admLookupTimer = null;
function _admLookupTypeahead() {
   clearTimeout(_admLookupTimer);
   _admLookupTimer = setTimeout(_admLookupRun, 220);
}
async function _admLookupRun() {
   var q = (document.getElementById('adm-lookup').value || '').trim();
   var box = document.getElementById('adm-lookup-results');
   if (!box) return;
   if (q.length < 2 || !_admHospitalChoice) {
      box.classList.add('hidden'); box.innerHTML = '';
      return;
   }
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   // Scoped to the CURRENT hospital only — a patient at hospital A is
   // not relevant when admitting them at hospital B. Internally we use the
   // same fetch path as Out-patients so anything visible there is reachable.
   var hits = await AppDB.lookupOutpatientsForAdmit(_admHospitalChoice, user.email, q);
   if (!hits.length) {
      box.innerHTML = '<div style="padding:10px;text-align:center;color:#888;font-size:0.85rem">No paid out-patient found at this hospital for "' + q + '".</div>';
      box.classList.remove('hidden');
      return;
   }
   box.innerHTML = hits.map(function(h, i) {
      var dt = h.date ? new Date(h.date + 'T00:00:00').toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '';
      return '<div class="sp-catalog-result" onclick="_admPickLookup(' + i + ')" style="cursor:pointer;padding:8px 12px;border-bottom:1px solid #f0f2f6">' +
                '<div class="sp-catalog-result-info">' +
                   '<div class="sp-catalog-result-name">' + (h.patient_name || '—') + '</div>' +
                   '<div class="sp-catalog-result-meta">📞 ' + (h.patient_phone || '—') +
                      (h.user_email ? ' · ✉ ' + h.user_email : '') +
                      (dt ? ' · last visit ' + dt : '') +
                   '</div>' +
                '</div>' +
             '</div>';
   }).join('');
   window._admLookupHits = hits;
   box.classList.remove('hidden');
}
function _admPickLookup(idx) {
   var h = (window._admLookupHits || [])[idx];
   if (!h) return;
   var get = function(id) { return document.getElementById(id); };
   if (h.patient_name)    get('adm-name').value    = h.patient_name;
   if (h.patient_phone)   get('adm-phone').value   = h.patient_phone;
   if (h.user_email)      get('adm-email').value   = h.user_email;
   if (h.patient_address) get('adm-address').value = h.patient_address;
   if (h.patient_sex)     get('adm-gender').value  = h.patient_sex;
   // Approximate DOB from patient_age if no DOB on file (year-precision only)
   if (h.patient_age && !get('adm-dob').value) {
      var thisYear = new Date().getFullYear();
      var approxDob = (thisYear - Number(h.patient_age)) + '-01-01';
      get('adm-dob').value = approxDob;
   }
   // Trigger the patient-id lookup since phone may have changed
   _admLookupPatientId();
   // Close + highlight to confirm
   document.getElementById('adm-lookup-results').classList.add('hidden');
   document.getElementById('adm-lookup').value = h.patient_name + ' · ' + (h.patient_phone || '');
   document.getElementById('adm-lookup').style.background = '#e8f5e9';
   setTimeout(function() { document.getElementById('adm-lookup').style.background = ''; }, 1200);
}
function closeAdmissionModal() { document.getElementById('admissionModal').classList.add('hidden'); }

// Phone OR name blur → look up the patient's permanent hospital ID by
// (phone, name) and auto-fill the Ref field. Both fields must be filled
// for the lookup to be meaningful (IDs are keyed per person now, not per
// phone, so a family sharing a phone gets distinct IDs).
async function _admLookupPatientId() {
   var phone = (document.getElementById('adm-phone').value || '').trim();
   var name  = (document.getElementById('adm-name').value  || '').trim();
   var refEl = document.getElementById('adm-ref');
   if (!phone || !name || !_admHospitalChoice) return;
   // Don't overwrite a manually-entered ref
   if (refEl.value && !refEl.dataset.autofilled) return;
   try {
      var pid = await AppDB.getHospitalPatientId(_admHospitalChoice, phone, name);
      if (pid) {
         refEl.value = pid;
         refEl.dataset.autofilled = '1';
         refEl.style.background = '#e8f5e9';
         setTimeout(function() { refEl.style.background = ''; }, 1500);
      }
   } catch (e) { /* silent — owner can type manually */ }
}

async function saveAdmission() {
   var get = function(id) { return (document.getElementById(id).value || '').trim(); };
   var name = get('adm-name'), admitDate = get('adm-admit-date');
   if (!name)      { alert('Patient name is required.'); return; }
   if (!admitDate) { alert('Admit date is required.'); return; }
   if (!_admHospitalChoice) { alert('Pick a hospital first.'); return; }
   var phone = get('adm-phone');
   var ref   = get('adm-ref');
   // Admission counts as a paid event → ensure the patient has a permanent ID.
   // If Ref is empty AND phone is valid, mint a new ID and stamp it onto the
   // admission. If they already have an ID (from a prior paid OPD visit),
   // the helper returns that — no duplicates.
   if (!ref && phone) {
      try {
         var newId = await AppDB.ensureHospitalPatientId(_admHospitalChoice, phone, name);
         if (newId) ref = newId;
      } catch (e) { console.error('ensureHospitalPatientId failed:', e); }
   }
   var id = get('adm-id') || ('adm_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
   var ok = await AppDB.upsertAdmission({
      id:                 id,
      provider_id:        _admHospitalChoice,
      patient_name:       name,
      patient_phone:      phone,
      patient_ref:        ref,
      ward:               get('adm-ward'),
      room_bed:           get('adm-room'),
      bed_id:             (document.getElementById('adm-bed-id') || {}).value || '',
      admit_date:         admitDate,
      target_discharge:   get('adm-target-date') || null,
      notes:              get('adm-notes'),
      doctor_name:        get('adm-doctor'),
      planned_procedure:  get('adm-procedure'),
      patient_email:      get('adm-email'),
      dob:                get('adm-dob') || null,
      gender:             get('adm-gender'),
      marital_status:     get('adm-marital'),
      employment_status:  get('adm-employment'),
      address:            get('adm-address'),
      city:               get('adm-city'),
      postal_code:        get('adm-postal'),
      guardian_name:      get('adm-guardian-name'),
      guardian_relation:  get('adm-guardian-relation'),
      guardian_phone:     get('adm-guardian-phone'),
      // Phase 8.3 — launch-ready intake
      admission_type:       get('adm-type') || 'Planned',
      chief_complaint:      get('adm-complaint'),
      known_allergies:      get('adm-allergies'),
      current_medications:  get('adm-current-meds'),
      past_medical_history: get('adm-past-history'),
      id_proof_type:        get('adm-id-proof-type'),
      id_proof_number:      get('adm-id-proof-no'),
      room_category:        get('adm-room-cat'),
      payment_mode:         get('adm-pay-mode'),
      tpa_name:             get('adm-tpa-name'),
      tpa_card_no:          get('adm-tpa-card'),
      mlc:                  document.getElementById('adm-mlc').checked,
      mlc_number:           get('adm-mlc-no'),
      // Phase 9 — complete form
      admit_time:           get('adm-admit-time'),
      admission_source:     get('adm-source'),
      referring_doctor:     get('adm-ref-doctor'),
      referring_hospital:   get('adm-ref-hospital'),
      bp_systolic:          get('adm-bp-sys')   ? Number(get('adm-bp-sys'))   : null,
      bp_diastolic:         get('adm-bp-dia')   ? Number(get('adm-bp-dia'))   : null,
      pulse_bpm:            get('adm-pulse')    ? Number(get('adm-pulse'))    : null,
      temp_f:               get('adm-temp')     ? Number(get('adm-temp'))     : null,
      spo2:                 get('adm-spo2')     ? Number(get('adm-spo2'))     : null,
      weight_kg:            get('adm-weight')   ? Number(get('adm-weight'))   : null,
      height_cm:            get('adm-height')   ? Number(get('adm-height'))   : null,
      rbs_mg_dl:            get('adm-rbs')      ? Number(get('adm-rbs'))      : null,
      provisional_diagnosis: get('adm-prov-dx'),
      surgical_history:     get('adm-surgical-history'),
      social_tobacco:       get('adm-tobacco'),
      social_alcohol:       get('adm-alcohol'),
      obstetric_lmp:        get('adm-lmp') || null,
      obstetric_gpla:       get('adm-gpla'),
      blood_group:          get('adm-blood-group'),
      religion:             get('adm-religion'),
      state:                get('adm-state'),
      emergency2_name:      get('adm-emg2-name'),
      emergency2_relation:  get('adm-emg2-relation'),
      emergency2_phone:     get('adm-emg2-phone'),
      consent_general:      document.getElementById('adm-consent-general') ? document.getElementById('adm-consent-general').checked : false,
      consent_dpdp:         document.getElementById('adm-consent-dpdp')    ? document.getElementById('adm-consent-dpdp').checked    : false
   });
   if (!ok) { alert('Failed to save admission.'); return; }
   // Mark selected bed as Occupied
   var bedId = (document.getElementById('adm-bed-id') || {}).value || '';
   if (bedId) {
      var bed = _admBedsCache.find(function(b) { return b.id === bedId; });
      if (bed) await AppDB.upsertBed(Object.assign({}, bed, { status: 'Occupied' }));
   }
   closeAdmissionModal();
   renderShopAdmissions();
}

// Click the Rounds pill → flip pending ⟷ complete. No confirm dialog —
// rounds is a fast morning action and clicks must be friction-free. The
// realtime subscription on `admissions` re-renders this row + the dashboard
// KPI counts within ~300ms.
async function toggleAdmissionRounds(id) {
   var rows = await AppDB.getAdmissions(_admHospitalChoice);
   var r = (rows || []).find(function(x) { return x.id === id; });
   if (!r) return;
   var next = r.rounds_status === 'complete' ? 'pending' : 'complete';
   await AppDB.patchAdmission(id, { rounds_status: next });
   renderShopAdmissions();
}

// Open the discharge summary modal for an admission. Loads any existing
// summary for re-edit, otherwise pre-fills the discharge date (today),
// doctor name + speciality from the admission row, and offers a one-click
// "pull from latest prescription" to populate the discharge meds field.
var _dsAdmission = null;
async function dischargeAdmission(id) {
   var rows = await AppDB.getAdmissions(_admHospitalChoice);
   var r = (rows || []).find(function(x) { return x.id === id; });
   if (!r) { alert('Admission not found.'); return; }
   _dsAdmission = r;

   var get  = function(eid) { return document.getElementById(eid); };
   // Defensive setter — survives stale-cache HTML where new fields are missing
   var setV = function(eid, val) { var el = get(eid); if (el) el.value = (val == null ? '' : val); };
   setV('ds-admission-id', r.id);

   get('ds-patient-strip').innerHTML =
      '<strong>' + (r.patient_name || '—') + '</strong>' +
      (r.patient_ref ? ' · UHID ' + r.patient_ref : '') +
      (r.patient_phone ? ' · 📞 ' + r.patient_phone : '') +
      '<br/><span style="color:#666;font-size:0.82rem">' +
         (r.ward ? r.ward : '—') + (r.room_bed ? ' · ' + r.room_bed : '') +
         ' · Admitted ' + (r.admit_date || '—') +
         (r.planned_procedure ? ' · Procedure: ' + r.planned_procedure : '') +
      '</span>';

   // Pre-fill doctor identity from the admission
   setV('ds-doc-name', r.doctor_name || '');
   setV('ds-doc-spec', '');
   setV('ds-doc-reg',  '');
   // Try to pick up speciality from the provider's doctor roster
   await loadAptProviders(true);
   var prov = _aptGetProvider(r.provider_id);
   var doc = prov && (prov.doctors || []).find(function(d) { return d.name === r.doctor_name; });
   if (doc) {
      if (doc.speciality)  setV('ds-doc-spec', doc.speciality);
      if (doc.reg_no)      setV('ds-doc-reg',  doc.reg_no);
   }

   // Load any existing summary for edit; otherwise blank with today's date.
   var existing = await AppDB.getDischargeSummary(r.id);
   var titleEl = document.getElementById('dischargeModalTitle');
   if (existing) {
      if (titleEl) titleEl.textContent = '✏️ Edit Discharge Summary';
      setV('ds-final-dx',         existing.final_diagnosis);
      setV('ds-course',           existing.course_in_hospital);
      setV('ds-invs',             existing.investigations_summary);
      setV('ds-treatment',        existing.treatment_given);
      setV('ds-condition',        existing.condition_at_discharge || 'Stable');
      setV('ds-meds',             existing.discharge_medications);
      setV('ds-followup-advice',  existing.follow_up_advice);
      setV('ds-followup-date',    existing.follow_up_date);
      setV('ds-discharge-date',   existing.discharge_date || _todayLocalYmd());
      setV('ds-dama-risks',       existing.dama_risks_explained);
      setV('ds-dama-reason',      existing.dama_reason_given);
      if (existing.doctor_name)        setV('ds-doc-name', existing.doctor_name);
      if (existing.doctor_speciality)  setV('ds-doc-spec', existing.doctor_speciality);
      if (existing.doctor_reg_no)      setV('ds-doc-reg',  existing.doctor_reg_no);
   } else {
      if (titleEl) titleEl.textContent = '📋 Discharge Summary';
      ['ds-final-dx','ds-course','ds-invs','ds-treatment','ds-meds','ds-followup-advice','ds-followup-date','ds-dama-risks','ds-dama-reason']
         .forEach(function(f) { setV(f, ''); });
      setV('ds-condition', 'Stable');
      setV('ds-discharge-date', _todayLocalYmd());
   }
   _dsConditionChanged();

   document.getElementById('dischargeModal').classList.remove('hidden');
}

function closeDischargeModal() {
   document.getElementById('dischargeModal').classList.add('hidden');
   _dsAdmission = null;
}

// Show / hide the DAMA acknowledgement section based on the condition pick.
// DAMA flips the Save button label so the doctor knows they're issuing a
// DAMA form rather than a routine discharge summary.
function _dsConditionChanged() {
   var cond = (document.getElementById('ds-condition').value || '').trim();
   var damaSection = document.getElementById('ds-dama-section');
   if (damaSection) damaSection.classList.toggle('hidden', cond !== 'DAMA');
   var saveBtn = document.querySelector('#dischargeModal .sp-modal-footer .sp-btn-save');
   if (saveBtn) {
      saveBtn.innerHTML = cond === 'DAMA' ? '💾 Save &amp; Print DAMA Form' : '💾 Discharge &amp; Print Summary';
      saveBtn.style.background = cond === 'DAMA' ? '#b91c1c' : '#0d47a1';
   }
}

// Populate the Discharge Medications textarea with one line per medicine
// from the patient's most recent prescription at this hospital. Useful
// because the doctor almost always continues some of the inpatient meds.
async function _dsPullFromLastRx() {
   if (!_dsAdmission) return;
   var rxRows = await AppDB.getPatientPrescriptionHistory(
      _dsAdmission.provider_id, _dsAdmission.patient_phone, _dsAdmission.patient_name
   );
   if (!rxRows || !rxRows.length) { alert('No prescriptions found for this patient at this hospital.'); return; }
   var last = rxRows[0];
   var lines = (last.medicines || []).map(function(m) {
      return (m.name || '—') + (m.type ? ' (' + m.type + ')' : '') +
             (m.dosage ? ' · ' + m.dosage : '') +
             (m.duration ? ' · ' + m.duration : '') +
             (m.notes ? ' · ' + m.notes : '');
   });
   if (!lines.length) { alert('Latest prescription has no medicines listed.'); return; }
   var existing = (document.getElementById('ds-meds').value || '').trim();
   document.getElementById('ds-meds').value = (existing ? existing + '\n' : '') + lines.join('\n');
}

async function saveDischargeAndPrint() {
   if (!_dsAdmission) return;
   var get = function(id) { return (document.getElementById(id).value || '').trim(); };
   var finalDx = get('ds-final-dx');
   var dischargeDate = get('ds-discharge-date');
   var condition = get('ds-condition') || 'Stable';
   var damaRisks = get('ds-dama-risks');
   var damaReason = get('ds-dama-reason');
   if (!finalDx)       { alert('Final diagnosis is required.'); return; }
   if (!dischargeDate) { alert('Discharge date is required.'); return; }
   if (condition === 'DAMA' && !damaRisks) {
      alert('For DAMA, you must record the risks that were explained to the patient. This is what protects the hospital legally.');
      return;
   }

   var saved = await AppDB.upsertDischargeSummary({
      provider_id:            _dsAdmission.provider_id,
      admission_id:           _dsAdmission.id,
      final_diagnosis:        finalDx,
      course_in_hospital:     get('ds-course'),
      investigations_summary: get('ds-invs'),
      treatment_given:        get('ds-treatment'),
      condition_at_discharge: condition,
      discharge_medications:  get('ds-meds'),
      follow_up_advice:       get('ds-followup-advice'),
      follow_up_date:         get('ds-followup-date') || null,
      discharge_date:         dischargeDate,
      doctor_name:            get('ds-doc-name'),
      doctor_speciality:      get('ds-doc-spec'),
      doctor_reg_no:          get('ds-doc-reg'),
      dama_risks_explained:   damaRisks,
      dama_reason_given:      damaReason
   });
   if (!saved) { alert('Failed to save discharge summary.'); return; }

   // Flip admission to Discharged so it leaves the Currently Admitted list.
   await AppDB.patchAdmission(_dsAdmission.id, {
      status: 'Discharged',
      target_discharge: dischargeDate
   });
   // Free the bed back to Available
   if (_dsAdmission.bed_id) {
      var freeBed = await AppDB.getBeds(_dsAdmission.provider_id);
      var bObj = freeBed.find(function(b) { return b.id === _dsAdmission.bed_id; });
      if (bObj) await AppDB.upsertBed(Object.assign({}, bObj, { status: 'Available' }));
   }

   var admId = _dsAdmission.id;
   closeDischargeModal();
   // DAMA path prints the DAMA acknowledgement form (different legal weight);
   // all other discharges print the standard summary.
   if (condition === 'DAMA') printDamaForm(admId);
   else                       printDischargeSummary(admId);
   renderShopAdmissions();
}

async function printDischargeSummary(admId) {
   var summary = await AppDB.getDischargeSummary(admId);
   if (!summary) { alert('Discharge summary not found.'); return; }
   var admRows = await AppDB.getAdmissions(summary.provider_id);
   var r = (admRows || []).find(function(x) { return x.id === admId; }) || {};
   await loadAptProviders(true);
   var prov = _aptGetProvider(summary.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var nl2br = function(s) { return esc(s).replace(/\n/g, '<br/>'); };

   var fmt = function(d) {
      if (!d) return '—';
      var dt = new Date(d + 'T00:00:00');
      return isNaN(dt.getTime()) ? '—' : dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
   };
   var admit = fmt(r.admit_date);
   var disch = fmt(summary.discharge_date);
   var followUp = summary.follow_up_date ? fmt(summary.follow_up_date) : '';
   var losDays = '—';
   if (r.admit_date && summary.discharge_date) {
      var a = new Date(r.admit_date + 'T00:00:00'), b = new Date(summary.discharge_date + 'T00:00:00');
      if (!isNaN(a.getTime()) && !isNaN(b.getTime())) losDays = Math.max(0, Math.round((b - a) / 86400000)) + ' day(s)';
   }
   var ageSex = '';
   if (r.dob) {
      var dob = new Date(r.dob + 'T00:00:00');
      if (!isNaN(dob.getTime())) {
         var age = Math.floor((Date.now() - dob.getTime()) / (365.25 * 86400000));
         ageSex = age + 'Y' + (r.gender ? ' / ' + r.gender[0] : '');
      }
   }
   var medsHtml = (summary.discharge_medications || '').trim()
      .split('\n').filter(Boolean)
      .map(function(line, i) { return '<li>' + esc(line) + '</li>'; })
      .join('');

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>Discharge Summary · ' + esc(r.patient_name) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:820px;margin:0 auto;line-height:1.55}' +
         '.head{border-bottom:2px solid #0d47a1;padding-bottom:14px;margin-bottom:18px;display:flex;justify-content:space-between;align-items:flex-start;gap:14px}' +
         '.head h1{margin:0 0 4px;font-size:22px;color:#0d47a1}' +
         '.head .sub{font-size:12px;color:#555}' +
         '.doc-title{text-align:center;margin:18px 0 12px;font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#0d47a1}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;background:#f3f6fc;padding:12px;border-radius:8px;margin-bottom:16px;font-size:13px}' +
         '.info b{color:#1a1a2e}' +
         '.section{margin:14px 0}' +
         '.section h3{margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#0d47a1;border-bottom:1px solid #cfd8e3;padding-bottom:4px}' +
         '.section .body{font-size:13.5px;white-space:pre-wrap}' +
         '.cond-pill{display:inline-block;background:#e3f2fd;color:#0d47a1;padding:3px 10px;border-radius:999px;font-weight:600;font-size:12px}' +
         '.cond-pill.danger{background:#fee2e2;color:#b91c1c}' +
         '.allergy-banner{background:#fef2f2;border-left:4px solid #b91c1c;padding:8px 12px;margin:10px 0;font-size:13px;color:#b91c1c}' +
         'ul.meds{margin:4px 0;padding-left:22px;font-size:13.5px}' +
         'ul.meds li{margin:3px 0}' +
         '.sig-block{margin-top:36px;display:flex;justify-content:flex-end}' +
         '.sig-block .sig{min-width:260px;text-align:center;font-size:12.5px}' +
         '.sig-block .line{margin-top:50px;border-top:1px solid #333;padding-top:4px}' +
         '.footer{margin-top:30px;padding-top:14px;border-top:1px solid #d6dce8;font-size:11px;color:#666;text-align:center}' +
         '.toolbar{text-align:right;margin-bottom:14px}' +
         '.toolbar button{padding:8px 14px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;background:#1a73e8;color:#fff}' +
         '@media print{.toolbar{display:none}body{padding:14px}}' +
      '</style></head><body>' +
      '<div class="toolbar"><button onclick="window.print()">🖨 Print / Save PDF</button></div>' +
      '<div class="head">' +
         '<div>' +
            '<h1>' + esc(prov.name || 'Hospital') + '</h1>' +
            '<div class="sub">' + esc(prov.address || '') + '</div>' +
            (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
         '</div>' +
         '<div style="text-align:right;font-size:11px;color:#666">' +
            'Form: DS-01<br/>Issued: ' + esc(disch) +
         '</div>' +
      '</div>' +
      '<div class="doc-title">Discharge Summary</div>' +
      (r.known_allergies && r.known_allergies.toUpperCase() !== 'NIL' ? '<div class="allergy-banner"><b>⚠️ Known Allergies:</b> ' + esc(r.known_allergies) + '</div>' : '') +
      '<div class="info">' +
         '<div><b>Patient:</b> ' + esc(r.patient_name || '—') + (ageSex ? ' · ' + esc(ageSex) : '') + '</div>' +
         '<div><b>UHID:</b> ' + esc(r.patient_ref || '—') + '</div>' +
         '<div><b>Phone:</b> ' + esc(r.patient_phone || '—') + '</div>' +
         '<div><b>Ward / Bed:</b> ' + esc((r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '')) + '</div>' +
         '<div><b>Admit Date:</b> ' + esc(admit) + '</div>' +
         '<div><b>Discharge Date:</b> ' + esc(disch) + '</div>' +
         '<div><b>Length of Stay:</b> ' + esc(losDays) + '</div>' +
         '<div><b>Condition at Discharge:</b> <span class="cond-pill' + (summary.condition_at_discharge === 'Expired' || summary.condition_at_discharge === 'DAMA' ? ' danger' : '') + '">' + esc(summary.condition_at_discharge) + '</span></div>' +
         '<div style="grid-column:1/-1"><b>Treating Doctor:</b> ' + esc(summary.doctor_name || '—') + (summary.doctor_speciality ? ' · ' + esc(summary.doctor_speciality) : '') + (summary.doctor_reg_no ? ' · Reg No. ' + esc(summary.doctor_reg_no) : '') + '</div>' +
      '</div>' +
      '<div class="section"><h3>Final Diagnosis</h3><div class="body">' + nl2br(summary.final_diagnosis) + '</div></div>' +
      (summary.course_in_hospital ? '<div class="section"><h3>Course in Hospital</h3><div class="body">' + nl2br(summary.course_in_hospital) + '</div></div>' : '') +
      (summary.investigations_summary ? '<div class="section"><h3>Investigations</h3><div class="body">' + nl2br(summary.investigations_summary) + '</div></div>' : '') +
      (summary.treatment_given ? '<div class="section"><h3>Treatment Given</h3><div class="body">' + nl2br(summary.treatment_given) + '</div></div>' : '') +
      (medsHtml ? '<div class="section"><h3>Discharge Medications</h3><ul class="meds">' + medsHtml + '</ul></div>' : '') +
      (summary.follow_up_advice || followUp ? '<div class="section"><h3>Follow-up Advice</h3><div class="body">' +
         nl2br(summary.follow_up_advice) +
         (followUp ? (summary.follow_up_advice ? '<br/><br/>' : '') + '<b>Next visit:</b> ' + esc(followUp) : '') +
      '</div></div>' : '') +
      '<div class="sig-block">' +
         '<div class="sig">' +
            '<div class="line"></div>' +
            '<div><b>' + esc(summary.doctor_name || '—') + '</b></div>' +
            '<div style="color:#666">' + esc(summary.doctor_speciality || '') + '</div>' +
            (summary.doctor_reg_no ? '<div style="color:#666">Reg No. ' + esc(summary.doctor_reg_no) + '</div>' : '') +
         '</div>' +
      '</div>' +
      '<div class="footer">This discharge summary is issued by ' + esc(prov.name || '') + '. Computer-generated; valid only when signed by the treating doctor. In case of emergency please return to the hospital or call our 24x7 number.</div>' +
      '</body></html>';

   var w = window.open('', 'discharge-' + admId, 'width=860,height=1000');
   w.document.write(html); w.document.close();
}

// DAMA acknowledgement form — printed when discharge condition = DAMA.
// Legally distinct from a discharge summary: the patient/attendant signs
// acknowledging they understood the specific risks listed and chose to
// leave anyway. Bold warning banner at the top; the doctor's name + reg
// no on the right, the patient's signature block on the left.
async function printDamaForm(admId) {
   var summary = await AppDB.getDischargeSummary(admId);
   if (!summary) { alert('Discharge summary not found.'); return; }
   var admRows = await AppDB.getAdmissions(summary.provider_id);
   var r = (admRows || []).find(function(x) { return x.id === admId; }) || {};
   await loadAptProviders(true);
   var prov = _aptGetProvider(summary.provider_id) || {};
   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var nl2br = function(s) { return esc(s).replace(/\n/g, '<br/>'); };
   var fmt = function(d) {
      if (!d) return '—';
      var dt = new Date(d + 'T00:00:00');
      return isNaN(dt.getTime()) ? '—' : dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
   };
   var nowStr = new Date().toLocaleString('en-IN', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
   var ageSex = '';
   if (r.dob) {
      var dob = new Date(r.dob + 'T00:00:00');
      if (!isNaN(dob.getTime())) {
         var age = Math.floor((Date.now() - dob.getTime()) / (365.25 * 86400000));
         ageSex = age + 'Y' + (r.gender ? ' / ' + r.gender[0] : '');
      }
   }

   var html = '<!DOCTYPE html><html><head><meta charset="utf-8"/><title>DAMA Form · ' + esc(r.patient_name) + '</title>' +
      '<style>' +
         'body{font-family:ui-sans-serif,system-ui,sans-serif;color:#111;padding:24px;max-width:820px;margin:0 auto;line-height:1.55}' +
         '.head{border-bottom:2px solid #b91c1c;padding-bottom:14px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-start;gap:14px}' +
         '.head h1{margin:0 0 4px;font-size:22px;color:#b91c1c}' +
         '.head .sub{font-size:12px;color:#555}' +
         '.doc-title{text-align:center;margin:14px 0;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#b91c1c}' +
         '.warn-banner{background:#fef2f2;border:2px solid #b91c1c;color:#b91c1c;padding:12px 14px;margin:14px 0 18px;border-radius:8px;font-weight:700;font-size:14px;text-align:center}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;gap:6px 16px;background:#fdf4f4;padding:12px;border-radius:8px;margin-bottom:16px;font-size:13px}' +
         '.info b{color:#1a1a2e}' +
         '.section{margin:14px 0}' +
         '.section h3{margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;color:#b91c1c;border-bottom:1px solid #fcd6d6;padding-bottom:4px}' +
         '.section .body{font-size:13.5px;white-space:pre-wrap}' +
         '.declaration{background:#fff;border:1px solid #d6dce8;border-radius:8px;padding:14px;margin:16px 0;font-size:13.5px}' +
         '.declaration p{margin:6px 0}' +
         '.sig-block{margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:30px 40px;font-size:12.5px}' +
         '.sig-line{border-top:1px solid #333;margin-top:50px;padding-top:4px}' +
         '.footer{margin-top:30px;padding-top:14px;border-top:1px solid #d6dce8;font-size:11px;color:#666;text-align:center}' +
         '.toolbar{text-align:right;margin-bottom:10px}' +
         '.toolbar button{padding:8px 14px;border:none;border-radius:6px;cursor:pointer;font-weight:600;font-size:13px;background:#1a73e8;color:#fff}' +
         '@media print{.toolbar{display:none}body{padding:14px}}' +
      '</style></head><body>' +
      '<div class="toolbar"><button onclick="window.print()">🖨 Print / Save PDF</button></div>' +
      '<div class="head">' +
         '<div>' +
            '<h1>' + esc(prov.name || 'Hospital') + '</h1>' +
            '<div class="sub">' + esc(prov.address || '') + '</div>' +
            (prov.phone ? '<div class="sub">📞 ' + esc(prov.phone) + '</div>' : '') +
         '</div>' +
         '<div style="text-align:right;font-size:11px;color:#666">' +
            'Form: DAMA-01<br/>Issued: ' + esc(nowStr) +
         '</div>' +
      '</div>' +
      '<div class="doc-title">Discharge Against Medical Advice (DAMA)</div>' +
      '<div class="warn-banner">⚠️ THIS DISCHARGE IS HAPPENING AT THE PATIENT\'S OWN REQUEST, AGAINST THE TREATING DOCTOR\'S ADVICE</div>' +
      '<div class="info">' +
         '<div><b>Patient:</b> ' + esc(r.patient_name || '—') + (ageSex ? ' · ' + esc(ageSex) : '') + '</div>' +
         '<div><b>UHID:</b> ' + esc(r.patient_ref || '—') + '</div>' +
         '<div><b>Phone:</b> ' + esc(r.patient_phone || '—') + '</div>' +
         '<div><b>Ward / Bed:</b> ' + esc((r.ward || '—') + (r.room_bed ? ' · ' + r.room_bed : '')) + '</div>' +
         '<div><b>Admit Date:</b> ' + esc(fmt(r.admit_date)) + '</div>' +
         '<div><b>DAMA Date:</b> ' + esc(fmt(summary.discharge_date)) + '</div>' +
         '<div style="grid-column:1/-1"><b>Treating Doctor:</b> ' + esc(summary.doctor_name || '—') + (summary.doctor_speciality ? ' · ' + esc(summary.doctor_speciality) : '') + (summary.doctor_reg_no ? ' · Reg No. ' + esc(summary.doctor_reg_no) : '') + '</div>' +
      '</div>' +
      '<div class="section"><h3>Provisional / Final Diagnosis</h3><div class="body">' + nl2br(summary.final_diagnosis) + '</div></div>' +
      (summary.course_in_hospital ? '<div class="section"><h3>Course in Hospital So Far</h3><div class="body">' + nl2br(summary.course_in_hospital) + '</div></div>' : '') +
      '<div class="section"><h3>Risks Explained to Patient / Attendant</h3><div class="body" style="background:#fef2f2;padding:10px;border-radius:6px;border-left:4px solid #b91c1c">' + nl2br(summary.dama_risks_explained || '—') + '</div></div>' +
      (summary.dama_reason_given ? '<div class="section"><h3>Reason Given by Patient / Attendant</h3><div class="body">' + nl2br(summary.dama_reason_given) + '</div></div>' : '') +
      '<div class="declaration">' +
         '<p><b>I, the undersigned (patient / patient\'s authorised attendant),</b> hereby declare that:</p>' +
         '<p>1. I am leaving ' + esc(prov.name || 'the hospital') + ' against the medical advice of the treating doctor and the hospital staff.</p>' +
         '<p>2. The risks of leaving the hospital in my present condition — including but not limited to those listed above — have been fully explained to me in a language I understand. I have had the opportunity to ask questions and my questions have been answered.</p>' +
         '<p>3. I understand that continuing treatment in the hospital was the recommended course of action and that leaving now may result in serious harm, including the possibility of death.</p>' +
         '<p>4. I take full responsibility for any consequences arising from this decision. I will not hold ' + esc(prov.name || 'the hospital') + ', its doctors, nurses or staff liable for any deterioration of my condition or any other adverse outcome resulting from this discharge.</p>' +
         '<p>5. I acknowledge that I have been advised on warning signs that should prompt an immediate return to a hospital, and on the option to seek a second opinion or treatment elsewhere.</p>' +
      '</div>' +
      '<div class="sig-block">' +
         '<div><div class="sig-line"></div><div><b>Patient / Attendant Signature</b></div><div style="color:#666">Name: ' + esc(r.patient_name || '__________________________') + '</div><div style="color:#666">Relation (if attendant): ' + esc(r.guardian_relation || '____________') + '</div><div style="color:#666">Date: __________  Time: __________</div></div>' +
         '<div><div class="sig-line"></div><div><b>Witness Signature</b></div><div style="color:#666">Name: __________________________</div><div style="color:#666">Designation / Relation: ____________</div><div style="color:#666">Date: __________  Time: __________</div></div>' +
         '<div style="grid-column:1/-1"><div class="sig-line"></div><div><b>Treating Doctor</b></div><div style="color:#666">Name: ' + esc(summary.doctor_name || '__________________________') + (summary.doctor_reg_no ? ' · Reg No. ' + esc(summary.doctor_reg_no) : '') + '</div></div>' +
      '</div>' +
      '<div class="footer">' + esc(prov.name || '') + ' · DAMA form — computer-generated, valid only when signed by the patient / attendant, a witness, and the treating doctor.</div>' +
      '</body></html>';

   var w = window.open('', 'dama-' + admId, 'width=860,height=1000');
   w.document.write(html); w.document.close();
}

// Hard-delete a single admission record from the owner's tab. Unlike
// Discharge (which preserves history with status='Discharged'), this is
// permanent — used to clean up test entries or corrected admissions.
async function shopDeleteAdmission(id) {
   if (!confirm('Permanently delete this admission record?\n\nThis cannot be undone. Use Discharge instead if you just want to mark the patient as released (their history is kept).')) return;
   var ok = await AppDB.deleteAdmission(id);
   if (!ok) { alert('Failed to delete admission.'); return; }
   renderShopAdmissions();
}

// ── BEDS MANAGEMENT (Phase 10) ──
var BED_CATEGORIES = ['General Ward','Twin Sharing / Semi-Private','Private Room','Deluxe Room','Super Deluxe Room','ICU'];
var BED_STATUS_COLOR = { 'Available':'#059669', 'Occupied':'#dc2626', 'Maintenance':'#d97706', 'Reserved':'#7c3aed' };
// ── REVENUE tab ─────────────────────────────────────────────────────────────

var _revSource = 'both';   // 'opd' | 'ip' | 'both'
var _revPeriod = 'month';  // 'day' | 'week' | 'month' | 'year'

async function renderShopRevenue() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var host = document.getElementById('shopRevenueContent');
   if (!host) return;
   host.innerHTML = '<div class="shop-empty">Loading…</div>';

   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   if (!mine.length) { host.innerHTML = '<div class="shop-empty">No hospital linked.</div>'; return; }

   var p = mine[0];
   var todayYmd  = _todayLocalYmd();
   var todayDate = new Date(todayYmd + 'T00:00:00');

   // Period boundaries
   function periodStart(period) {
      var d = new Date(todayDate);
      if (period === 'day')   return todayYmd;
      if (period === 'week')  { d.setDate(d.getDate() - d.getDay()); return _ymdOf(d); }
      if (period === 'month') { d.setDate(1); return _ymdOf(d); }
      if (period === 'year')  { d.setMonth(0, 1); return _ymdOf(d); }
      return '2000-01-01';
   }
   function _ymdOf(d) {
      return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
   }
   var pStart = periodStart(_revPeriod);

   // Fetch data
   var apts    = await AppDB.getAppointmentsByOwner(user.email);
   var admRows = await AppDB.getAdmissions(p.id);
   var ipBills = await AppDB.getIpBillsByProvider(p.id);

   // OPD rows for period
   var opdAll = (apts || []).filter(function(a) {
      return a.provider_id === p.id && a.status === 'Completed' && (a.date || '') >= pStart;
   });
   // IP bill rows for period
   var ipAll = (ipBills || []).filter(function(b) {
      return (b.bill_date || '') >= pStart && b.status !== 'Draft';
   });

   // Merge admission patient_name into ip bills for display
   var admMap = {};
   (admRows || []).forEach(function(r) { admMap[r.id] = r; });

   // ── Summary figures ──────────────────────────────────────────────────────
   var opdCollected = opdAll.filter(function(a){ return a.is_paid; }).reduce(function(s,a){ return s+(a.fee||0); },0);
   var opdPending   = opdAll.filter(function(a){ return !a.is_paid; }).reduce(function(s,a){ return s+(a.fee||0); },0);
   var opdRefunds   = opdAll.reduce(function(s,a){ return s+Number(a.refund_amount||0); },0);
   var opdNet       = opdCollected - opdRefunds;

   var ipCollected  = ipAll.reduce(function(s,b){ return s+(b.advance_paid||0); },0);
   var ipNet        = ipAll.reduce(function(s,b){ return s+(b.net_payable||0); },0);
   var ipPending    = Math.max(0, ipNet - ipCollected);
   var ipDiscount   = ipAll.reduce(function(s,b){ return s+(b.discount_amt||0); },0);

   var showOpd = _revSource !== 'ip';
   var showIp  = _revSource !== 'opd';
   var totalCollected = (showOpd ? opdCollected : 0) + (showIp ? ipCollected : 0);
   var totalPending   = (showOpd ? opdPending   : 0) + (showIp ? ipPending   : 0);
   var totalRefDisc   = (showOpd ? opdRefunds   : 0) + (showIp ? ipDiscount  : 0);
   var totalNet       = totalCollected - totalRefDisc;

   function fmt(n) { return '₹' + Math.round(n).toLocaleString('en-IN'); }

   // ── Period label ──────────────────────────────────────────────────────────
   var periodLabel = { day: 'Today', week: 'This Week', month: 'This Month', year: 'This Year' }[_revPeriod];

   // ── Payment mode breakdown (OPD) ─────────────────────────────────────────
   var modeMap = {};
   if (showOpd) opdAll.filter(function(a){return a.is_paid;}).forEach(function(a){
      var m = a.payment_mode || 'Cash'; modeMap[m] = (modeMap[m]||0) + (a.fee||0);
   });
   if (showIp) ipAll.forEach(function(b){
      var m = b.payment_mode || 'Cash'; modeMap[m] = (modeMap[m]||0) + (b.advance_paid||0);
   });
   var modeRows = Object.keys(modeMap).sort().map(function(m){
      return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f0f0f0;font-size:0.85rem">' +
             '<span style="color:#555">' + m + '</span><strong>' + fmt(modeMap[m]) + '</strong></div>';
   }).join('');

   // ── Doctor-wise OPD breakdown ─────────────────────────────────────────────
   var docMap = {};
   if (showOpd) opdAll.filter(function(a){return a.is_paid;}).forEach(function(a){
      var dn = a.doctor_name || 'Unassigned'; docMap[dn] = (docMap[dn]||0) + (a.fee||0);
   });
   var docRows = Object.keys(docMap).sort(function(a,b){ return docMap[b]-docMap[a]; }).slice(0,8).map(function(dn){
      return '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #f0f0f0;font-size:0.85rem">' +
             '<span style="color:#555">' + dn + '</span><strong>' + fmt(docMap[dn]) + '</strong></div>';
   }).join('');

   // ── Main table rows ───────────────────────────────────────────────────────
   var tableRows = '';
   if (showOpd) {
      opdAll.forEach(function(a) {
         tableRows += '<tr>' +
            '<td>' + (a.date || '—') + '</td>' +
            '<td><span class="rev-source-badge opd">OPD</span></td>' +
            '<td>' + (a.patient_name || '—') + (a.patient_phone ? '<div style="font-size:0.75rem;color:#888">📞 ' + a.patient_phone + '</div>' : '') + '</td>' +
            '<td>' + (a.doctor_name || '—') + '</td>' +
            '<td style="text-align:right">' + fmt(a.fee||0) + '</td>' +
            '<td><span class="rev-pay-badge ' + (a.is_paid ? 'paid' : 'pending') + '">' + (a.is_paid ? '✓ Paid' : '⏳ Pending') + '</span></td>' +
            '<td style="text-align:right;color:#c62828">' + (a.refund_amount ? fmt(a.refund_amount) : '—') + '</td>' +
            '<td>' + (a.payment_mode || '—') + '</td>' +
         '</tr>';
      });
   }
   if (showIp) {
      ipAll.forEach(function(b) {
         var adm = admMap[b.admission_id] || {};
         var balance = Math.max(0, (b.net_payable||0) - (b.advance_paid||0));
         tableRows += '<tr>' +
            '<td>' + (b.bill_date || '—') + '</td>' +
            '<td><span class="rev-source-badge ip">IP Bill</span></td>' +
            '<td>' + (adm.patient_name || '—') + (adm.patient_phone ? '<div style="font-size:0.75rem;color:#888">📞 ' + adm.patient_phone + '</div>' : '') + '</td>' +
            '<td>' + (b.bill_no || '—') + '</td>' +
            '<td style="text-align:right">' + fmt(b.net_payable||0) + '</td>' +
            '<td><span class="rev-pay-badge ' + (balance <= 0 ? 'paid' : 'pending') + '">' + (balance <= 0 ? '✓ Settled' : '⏳ Balance ' + fmt(balance)) + '</span></td>' +
            '<td style="text-align:right;color:#c62828">' + (b.discount_amt ? fmt(b.discount_amt) : '—') + '</td>' +
            '<td>' + (b.payment_mode || 'Cash') + '</td>' +
         '</tr>';
      });
   }
   if (!tableRows) tableRows = '<tr><td colspan="8" style="text-align:center;padding:24px;color:#999">No records for ' + periodLabel + '</td></tr>';

   // ── Stash for export ──────────────────────────────────────────────────────
   window._revExportRows = [];
   if (showOpd) opdAll.forEach(function(a) {
      window._revExportRows.push({
         'Date': a.date||'', 'Type': 'OPD', 'Patient': a.patient_name||'', 'Phone': a.patient_phone||'',
         'Doctor / Ref': a.doctor_name||'', 'Gross (Rs)': a.fee||0,
         'Status': a.is_paid ? 'Paid' : 'Pending', 'Refund (Rs)': a.refund_amount||0,
         'Net (Rs)': (a.fee||0) - Number(a.refund_amount||0), 'Payment Mode': a.payment_mode||''
      });
   });
   if (showIp) ipAll.forEach(function(b) {
      var adm = admMap[b.admission_id] || {};
      var balance = Math.max(0, (b.net_payable||0) - (b.advance_paid||0));
      window._revExportRows.push({
         'Date': b.bill_date||'', 'Type': 'IP Bill', 'Patient': adm.patient_name||'', 'Phone': adm.patient_phone||'',
         'Doctor / Ref': b.bill_no||'', 'Gross (Rs)': b.net_payable||0,
         'Status': balance <= 0 ? 'Settled' : 'Pending Balance', 'Refund (Rs)': b.discount_amt||0,
         'Net (Rs)': (b.net_payable||0) - (b.discount_amt||0), 'Payment Mode': b.payment_mode||'Cash'
      });
   });

   // ── Render ────────────────────────────────────────────────────────────────
   function tabBtn(val, label) {
      var active = _revPeriod === val;
      return '<button onclick="_revSetPeriod(\'' + val + '\')" style="padding:6px 14px;font-size:0.82rem;font-weight:600;border:1.5px solid ' + (active ? '#1565c0' : '#ddd') + ';border-radius:6px;background:' + (active ? '#1565c0' : '#fff') + ';color:' + (active ? '#fff' : '#555') + ';cursor:pointer">' + label + '</button>';
   }
   function srcBtn(val, label) {
      var active = _revSource === val;
      return '<button onclick="_revSetSource(\'' + val + '\')" style="padding:6px 14px;font-size:0.82rem;font-weight:600;border:1.5px solid ' + (active ? '#7c3aed' : '#ddd') + ';border-radius:6px;background:' + (active ? '#7c3aed' : '#fff') + ';color:' + (active ? '#fff' : '#555') + ';cursor:pointer">' + label + '</button>';
   }

   host.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px">' +
         '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
            tabBtn('day','Today') + tabBtn('week','Week') + tabBtn('month','Month') + tabBtn('year','Year') +
         '</div>' +
         '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
            srcBtn('both','OPD + Admissions') + srcBtn('opd','OPD Only') + srcBtn('ip','Admissions Only') +
         '</div>' +
      '</div>' +

      // KPI summary cards
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:18px">' +
         _revKpi('💰', 'Collected', fmt(totalCollected), '#1565c0') +
         _revKpi('⏳', 'Pending', fmt(totalPending), '#e65100') +
         _revKpi('↩️', 'Refunds / Discount', fmt(totalRefDisc), '#c62828') +
         _revKpi('✅', 'Net Revenue', fmt(totalNet), '#2e7d32') +
      '</div>' +

      // Breakdown panels
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:18px">' +
         '<div style="background:#fff;border:1.5px solid #eee;border-radius:10px;padding:14px">' +
            '<div style="font-weight:700;font-size:0.88rem;margin-bottom:8px;color:#1a1a2e">💳 Payment Mode</div>' +
            (modeRows || '<div style="color:#aaa;font-size:0.83rem">No data</div>') +
         '</div>' +
         (showOpd && Object.keys(docMap).length ? (
            '<div style="background:#fff;border:1.5px solid #eee;border-radius:10px;padding:14px">' +
               '<div style="font-weight:700;font-size:0.88rem;margin-bottom:8px;color:#1a1a2e">👨‍⚕️ Doctor-wise OPD Revenue</div>' +
               docRows +
            '</div>'
         ) : '<div></div>') +
      '</div>' +

      // Detail table
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px">' +
         '<div style="font-weight:700;font-size:0.9rem;color:#1a1a2e">📋 Transaction Detail — ' + periodLabel + '</div>' +
         '<div style="display:flex;gap:8px">' +
            '<button class="apt-view-btn" style="background:#2e7d32;padding:7px 14px" onclick="_revExportCsv()">⬇ CSV</button>' +
            '<button class="apt-view-btn" style="background:#1565c0;padding:7px 14px" onclick="_revExportXls()">⬇ XLS</button>' +
         '</div>' +
      '</div>' +
      '<div class="apt-tbl-wrap"><table class="apt-tbl">' +
         '<thead><tr>' +
            '<th>Date</th><th>Type</th><th>Patient</th><th>Doctor / Bill No</th>' +
            '<th style="text-align:right">Gross</th><th>Status</th>' +
            '<th style="text-align:right">Refund/Disc</th><th>Mode</th>' +
         '</tr></thead>' +
         '<tbody>' + tableRows + '</tbody>' +
      '</table></div>';
}

function _revKpi(icon, label, value, color) {
   return '<div style="background:#fff;border:1.5px solid #eee;border-radius:10px;padding:14px 16px">' +
             '<div style="font-size:1.1rem;margin-bottom:4px">' + icon + '</div>' +
             '<div style="font-size:1.4rem;font-weight:800;color:' + color + '">' + value + '</div>' +
             '<div style="font-size:0.75rem;color:#888;margin-top:2px">' + label + '</div>' +
          '</div>';
}
function _revSetPeriod(p) { _revPeriod = p; renderShopRevenue(); }
function _revSetSource(s) { _revSource = s; renderShopRevenue(); }
function _revExportCsv() {
   if (!window._revExportRows || !window._revExportRows.length) { alert('No data to export.'); return; }
   var today = _todayLocalYmd();
   _downloadCsv('revenue_' + _revPeriod + '_' + today + '.csv', window._revExportRows);
}
async function _revExportXls() {
   if (!window._revExportRows || !window._revExportRows.length) { alert('No data to export.'); return; }
   var today = _todayLocalYmd();
   await _downloadXls('revenue_' + _revPeriod + '_' + today + '.xlsx', window._revExportRows);
}

var BED_CAT_ICON = { 'General Ward':'🏨', 'Twin Sharing / Semi-Private':'🛏️', 'Private Room':'🚪', 'Deluxe Room':'⭐', 'Super Deluxe Room':'👑', 'ICU':'🏥' };

async function renderShopBeds() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var host = document.getElementById('shopBedsContent');
   if (!host) return;

   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   if (!mine.length) { host.innerHTML = '<div class="shop-empty">No hospital linked to your account.</div>'; return; }
   var chosen = _admHospitalChoice && mine.find(function(p) { return p.id === _admHospitalChoice; }); if (!chosen) chosen = mine[0];
   _admHospitalChoice = chosen.id;

   var beds = await AppDB.getBeds(chosen.id);
   console.log('[Beds] provider:', chosen.id, '| fetched:', beds.length, beds);
   var active = beds.filter(function(b) { return b.active !== false; });

   // Summary bar
   var totalByStatus = { Available:0, Occupied:0, Maintenance:0, Reserved:0 };
   active.forEach(function(b) { if (totalByStatus[b.status] !== undefined) totalByStatus[b.status]++; });

   var summaryHtml =
      '<div class="bed-summary-bar">' +
         '<div class="bed-sum-item"><span class="bed-sum-num" style="color:#059669">' + totalByStatus.Available + '</span><span class="bed-sum-lbl">Available</span></div>' +
         '<div class="bed-sum-divider"></div>' +
         '<div class="bed-sum-item"><span class="bed-sum-num" style="color:#dc2626">' + totalByStatus.Occupied + '</span><span class="bed-sum-lbl">Occupied</span></div>' +
         '<div class="bed-sum-divider"></div>' +
         '<div class="bed-sum-item"><span class="bed-sum-num" style="color:#d97706">' + totalByStatus.Maintenance + '</span><span class="bed-sum-lbl">Maintenance</span></div>' +
         '<div class="bed-sum-divider"></div>' +
         '<div class="bed-sum-item"><span class="bed-sum-num" style="color:#7c3aed">' + totalByStatus.Reserved + '</span><span class="bed-sum-lbl">Reserved</span></div>' +
         '<div class="bed-sum-divider"></div>' +
         '<div class="bed-sum-item"><span class="bed-sum-num" style="color:#1a1a2e">' + active.length + '</span><span class="bed-sum-lbl">Total Beds</span></div>' +
      '</div>';

   // Group by category
   var grouped = {};
   BED_CATEGORIES.forEach(function(c) { grouped[c] = []; });
   active.forEach(function(b) { if (grouped[b.category]) grouped[b.category].push(b); else { grouped[b.category] = grouped[b.category] || []; grouped[b.category].push(b); } });

   var categoryHtml = '';
   BED_CATEGORIES.forEach(function(cat) {
      var catBeds = grouped[cat] || [];
      var availCount = catBeds.filter(function(b) { return b.status === 'Available'; }).length;
      var icon = BED_CAT_ICON[cat] || '🛏️';

      var bedCards = catBeds.length === 0
         ? '<div style="color:#bbb;font-size:0.8rem;padding:8px 0">No beds added yet.</div>'
         : catBeds.map(function(b) {
              var sc = BED_STATUS_COLOR[b.status] || '#6b7280';
              var bid = b.id.replace(/'/g,"\\'");
              return '<div class="bed-card">' +
                        '<div class="bed-card-top">' +
                           '<div class="bed-room-label">Room ' + b.room_number + '<span class="bed-bed-label"> · ' + b.bed_number + '</span></div>' +
                           '<span class="bed-status-dot" style="background:' + sc + '" title="' + b.status + '"></span>' +
                        '</div>' +
                        (b.floor ? '<div class="bed-floor">Floor ' + b.floor + '</div>' : '') +
                        '<div class="bed-status-text" style="color:' + sc + '">' + b.status + '</div>' +
                        (b.rate_per_day ? (function() {
                           var base = Number(b.rate_per_day), gst = Number(b.gst_pct || 0);
                           var total = base + Math.round(base * gst / 100);
                           return '<div style="font-size:0.72rem;color:#1565c0;font-weight:600;margin-top:2px">₹' + total.toLocaleString('en-IN') + '/day' + (gst ? ' <span style="color:#7c3aed;font-weight:400">(incl. ' + gst + '% GST)</span>' : '') + '</div>';
                        })() : '') +
                        '<div class="bed-card-actions">' +
                           '<button onclick="openBedModal(\'' + bid + '\')" class="bed-btn-edit">✏️</button>' +
                           '<button onclick="deleteBedItem(\'' + bid + '\')" class="bed-btn-del">🗑</button>' +
                        '</div>' +
                     '</div>';
           }).join('');

      categoryHtml +=
         '<div class="bed-category-section">' +
            '<div class="bed-cat-header">' +
               '<div class="bed-cat-title">' + icon + ' ' + cat + '</div>' +
               '<span class="bed-cat-count">' + catBeds.length + ' beds · <span style="color:#059669">' + availCount + ' available</span></span>' +
            '</div>' +
            '<div class="bed-card-grid">' + bedCards + '</div>' +
         '</div>';
   });

   host.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">' +
         '<div>' +
            '<h3 style="margin:0;color:#1a1a2e;font-size:1rem">Bed Management</h3>' +
            '<div style="font-size:0.8rem;color:#8a93a7;margin-top:2px">' + active.length + ' beds across ' + BED_CATEGORIES.length + ' categories</div>' +
         '</div>' +
         '<div style="display:flex;gap:8px">' +
            '<button onclick="openBulkBedModal()" style="background:#f0fdf4;color:#059669;border:1px solid #6ee7b7;border-radius:10px;padding:9px 16px;font-size:0.85rem;font-weight:600;cursor:pointer">⚡ Bulk Add</button>' +
            '<button onclick="openBedModal()" style="background:#10b981;color:#fff;border:none;border-radius:10px;padding:9px 16px;font-size:0.85rem;font-weight:600;cursor:pointer">+ Add Bed</button>' +
         '</div>' +
      '</div>' +
      summaryHtml +
      categoryHtml;

   _liveSubscribe('shopBeds', 'hospital_beds', renderShopBeds);
}

function openBedModal(id, defaultCat) {
   var modal = document.getElementById('bedModal');
   if (!modal) { _buildBedModal(); modal = document.getElementById('bedModal'); }
   var get = function(eid) { return document.getElementById(eid); };
   if (id) {
      var _doOpen = function(provId) {
         AppDB.getBeds(provId).then(function(beds) {
            var b = beds.find(function(x) { return x.id === id; });
            if (!b) { alert('Bed not found.'); return; }
         get('bed-id').value       = b.id;
         get('bed-category').value = b.category;
         get('bed-room').value     = b.room_number;
         get('bed-num').value      = b.bed_number;
         get('bed-floor').value    = b.floor || '';
         get('bed-status').value   = b.status;
         get('bed-rate').value     = b.rate_per_day || '';
         get('bed-gst').value      = String(b.gst_pct || 0);
         get('bed-notes').value    = b.notes || '';
         _bedRateCalc();
         get('bed-active').checked = b.active !== false;
            document.getElementById('bedModalTitle').textContent = '✏️ Edit Bed';
            modal.classList.remove('hidden');
         });
      };
      if (_admHospitalChoice) {
         _doOpen(_admHospitalChoice);
      } else {
         loadAptProviders(true).then(function() {
            var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
            var mine = (_aptProvidersCache || []).filter(function(p) {
               return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
            });
            if (mine[0]) { _admHospitalChoice = mine[0].id; _doOpen(mine[0].id); }
         });
      }
   } else {
      ['bed-id','bed-room','bed-num','bed-floor','bed-rate','bed-notes'].forEach(function(f){ var el=get(f); if(el) el.value=''; });
      var gstEl = get('bed-gst'); if (gstEl) gstEl.value = '0';
      var sumEl = document.getElementById('bed-rate-summary'); if (sumEl) sumEl.style.display = 'none';
      if (get('bed-category') && defaultCat) get('bed-category').value = defaultCat;
      if (get('bed-status')) get('bed-status').value = 'Available';
      var ac = get('bed-active'); if (ac) ac.checked = true;
      document.getElementById('bedModalTitle').textContent = '+ Add Bed';
      modal.classList.remove('hidden');
   }
}

function _buildBedModal() {
   var m = document.createElement('div');
   m.className = 'sp-modal-overlay hidden'; m.id = 'bedModal';
   var catOptions = BED_CATEGORIES.map(function(c) { return '<option>' + c + '</option>'; }).join('');
   m.innerHTML =
      '<div class="sp-modal" style="max-width:520px">' +
         '<div class="sp-modal-header" style="background:#0891b2">' +
            '<h3 id="bedModalTitle">+ Add Bed</h3>' +
            '<button onclick="closeBedModal()" style="background:transparent;border:none;color:#fff;font-size:1.4rem;cursor:pointer">✕</button>' +
         '</div>' +
         '<div class="sp-modal-body">' +
            '<input type="hidden" id="bed-id"/>' +
            '<div class="profile-card-body" style="padding:0">' +
               '<div class="sp-field" style="grid-column:1/-1"><label>Category *</label><select id="bed-category">' + catOptions + '</select></div>' +
               '<div class="sp-field"><label>Room Number *</label><input type="text" id="bed-room" placeholder="e.g. 101, A-12"/></div>' +
               '<div class="sp-field"><label>Bed Number *</label><input type="text" id="bed-num" placeholder="e.g. B1, Left, Window"/></div>' +
               '<div class="sp-field"><label>Floor</label><input type="text" id="bed-floor" placeholder="e.g. Ground, 1st, 2nd"/></div>' +
               '<div class="sp-field"><label>Rate / Day (₹)</label><input type="number" id="bed-rate" min="0" placeholder="e.g. 1500" oninput="_bedRateCalc()"/></div>' +
               '<div class="sp-field"><label>GST %</label>' +
                  '<select id="bed-gst" onchange="_bedRateCalc()">' +
                     '<option value="0">0% — Exempt</option>' +
                     '<option value="5">5%</option>' +
                     '<option value="12">12%</option>' +
                     '<option value="18">18%</option>' +
                  '</select>' +
               '</div>' +
               '<div class="sp-field" style="grid-column:1/-1" id="bed-rate-summary-wrap" style="display:none">' +
                  '<div id="bed-rate-summary" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:8px 12px;font-size:0.82rem;color:#166534;display:none"></div>' +
               '</div>' +
               '<div class="sp-field"><label>Status</label><select id="bed-status"><option>Available</option><option>Occupied</option><option>Maintenance</option><option>Reserved</option></select></div>' +
               '<div class="sp-field" style="grid-column:1/-1"><label>Notes</label><textarea id="bed-notes" rows="2" placeholder="Any special notes…"></textarea></div>' +
               '<div class="sp-field" style="grid-column:1/-1"><label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin:0"><input type="checkbox" id="bed-active" checked style="width:auto"/> Active</label></div>' +
            '</div>' +
         '</div>' +
         '<div class="sp-modal-footer">' +
            '<button class="sp-btn-cancel" onclick="closeBedModal()">Cancel</button>' +
            '<button class="sp-btn-save" onclick="saveBedItem()">💾 Save</button>' +
         '</div>' +
      '</div>';
   document.body.appendChild(m);
}

function closeBedModal() { var m = document.getElementById('bedModal'); if (m) m.classList.add('hidden'); }

function _bedRateCalc() {
   var rate = parseFloat(document.getElementById('bed-rate').value) || 0;
   var gst  = parseFloat(document.getElementById('bed-gst').value)  || 0;
   var sumEl = document.getElementById('bed-rate-summary');
   if (!sumEl) return;
   if (!rate) { sumEl.style.display = 'none'; return; }
   var gstAmt  = Math.round(rate * gst / 100);
   var total   = rate + gstAmt;
   sumEl.style.display = 'block';
   sumEl.innerHTML = '₹' + rate.toLocaleString('en-IN') + ' base' +
      (gst ? ' + ₹' + gstAmt.toLocaleString('en-IN') + ' GST (' + gst + '%) = <strong>₹' + total.toLocaleString('en-IN') + ' / day</strong>' : ' <strong>(GST exempt)</strong>');
}

async function saveBedItem() {
   var get = function(id) { var el = document.getElementById(id); return el ? (el.value || '').trim() : ''; };
   var category = get('bed-category'), room = get('bed-room'), bedNum = get('bed-num');
   if (!category) { alert('Category is required.'); return; }
   if (!room)     { alert('Room number is required.'); return; }
   if (!bedNum)   { alert('Bed number is required.'); return; }

   await loadAptProviders(true);
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   var provId = _admHospitalChoice || (mine[0] && mine[0].id) || '';
   if (!provId) { alert('No hospital selected.'); return; }

   var id = get('bed-id') || ('bed_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6));
   var ok = await AppDB.upsertBed({
      id: id, provider_id: provId,
      category: category, room_number: room, bed_number: bedNum,
      floor: get('bed-floor'), status: get('bed-status'),
      rate_per_day: parseFloat(document.getElementById('bed-rate').value) || 0,
      gst_pct:      parseFloat(document.getElementById('bed-gst').value) || 0,
      notes: get('bed-notes'),
      active: document.getElementById('bed-active').checked
   });
   if (!ok) { alert('Failed to save bed.'); return; }
   closeBedModal();
   renderShopBeds();
}

async function deleteBedItem(id) {
   if (!confirm('Remove this bed?')) return;
   await AppDB.deleteBed(id);
   renderShopBeds();
}

function openBulkBedModal() {
   var modal = document.getElementById('bulkBedModal');
   if (!modal) { _buildBulkBedModal(); modal = document.getElementById('bulkBedModal'); }
   modal.classList.remove('hidden');
   _bulkBedPreview();
}

function closeBulkBedModal() { var m = document.getElementById('bulkBedModal'); if (m) m.classList.add('hidden'); }

function _buildBulkBedModal() {
   var m = document.createElement('div');
   m.className = 'sp-modal-overlay hidden'; m.id = 'bulkBedModal';
   var catOptions = BED_CATEGORIES.map(function(c) { return '<option>' + c + '</option>'; }).join('');
   m.innerHTML =
      '<div class="sp-modal" style="max-width:560px">' +
         '<div class="sp-modal-header" style="background:#0891b2">' +
            '<h3>⚡ Bulk Add Beds</h3>' +
            '<button onclick="closeBulkBedModal()" style="background:transparent;border:none;color:#fff;font-size:1.4rem;cursor:pointer">✕</button>' +
         '</div>' +
         '<div class="sp-modal-body">' +
            '<div class="profile-card-body" style="padding:0">' +
               '<div class="sp-field" style="grid-column:1/-1">' +
                  '<label>Category *</label>' +
                  '<select id="bulk-category" onchange="_bulkBedPreview()">' + catOptions + '</select>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Floor</label>' +
                  '<input type="text" id="bulk-floor" placeholder="e.g. Ground, 1st" oninput="_bulkBedPreview()"/>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Room Start *</label>' +
                  '<input type="number" id="bulk-room-start" value="101" min="1" oninput="_bulkBedPreview()"/>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Number of Rooms *</label>' +
                  '<input type="number" id="bulk-room-count" value="10" min="1" max="100" oninput="_bulkBedPreview()"/>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Beds per Room *</label>' +
                  '<input type="number" id="bulk-beds-per-room" value="1" min="1" max="10" oninput="_bulkBedPreview()"/>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Bed Label Style</label>' +
                  '<select id="bulk-label-style" onchange="_bulkBedPreview()">' +
                     '<option value="alpha">A, B, C…</option>' +
                     '<option value="num">1, 2, 3…</option>' +
                     '<option value="named">Left, Right (twin only)</option>' +
                  '</select>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>Rate / Day (₹)</label>' +
                  '<input type="number" id="bulk-rate" min="0" placeholder="e.g. 1500"/>' +
               '</div>' +
               '<div class="sp-field">' +
                  '<label>GST %</label>' +
                  '<select id="bulk-gst">' +
                     '<option value="0">0% — Exempt</option>' +
                     '<option value="5">5%</option>' +
                     '<option value="12">12%</option>' +
                     '<option value="18">18%</option>' +
                  '</select>' +
               '</div>' +
               '<div class="sp-field" style="grid-column:1/-1">' +
                  '<label>Preview</label>' +
                  '<div id="bulk-preview" style="background:#f8fafc;border:1px solid #e8ecf0;border-radius:8px;padding:10px;font-size:0.78rem;color:#5f6473;max-height:120px;overflow-y:auto;font-family:monospace;line-height:1.6"></div>' +
               '</div>' +
            '</div>' +
         '</div>' +
         '<div class="sp-modal-footer">' +
            '<button class="sp-btn-cancel" onclick="closeBulkBedModal()">Cancel</button>' +
            '<button class="sp-btn-save" id="bulk-save-btn" onclick="saveBulkBeds()">⚡ Create All Beds</button>' +
         '</div>' +
      '</div>';
   document.body.appendChild(m);
}

function _bulkBedPreview() {
   var el = document.getElementById('bulk-preview');
   if (!el) return;
   var start  = parseInt(document.getElementById('bulk-room-start').value) || 101;
   var count  = Math.min(parseInt(document.getElementById('bulk-room-count').value) || 10, 100);
   var bpr    = Math.min(parseInt(document.getElementById('bulk-beds-per-room').value) || 1, 10);
   var style  = (document.getElementById('bulk-label-style') || {}).value || 'alpha';
   var labels = style === 'alpha' ? 'ABCDEFGHIJ'.split('') : style === 'num' ? ['1','2','3','4','5','6','7','8','9','10'] : ['Left','Right'];
   var lines = [];
   for (var r = 0; r < count; r++) {
      for (var b = 0; b < bpr; b++) {
         lines.push('Room ' + (start + r) + '  ·  Bed ' + (labels[b] || (b+1)));
      }
   }
   var total = count * bpr;
   var btn = document.getElementById('bulk-save-btn');
   if (btn) btn.textContent = '⚡ Create ' + total + ' Beds';
   el.innerHTML = lines.slice(0, 30).join('<br>') + (lines.length > 30 ? '<br><em>… and ' + (lines.length - 30) + ' more</em>' : '');
}

async function saveBulkBeds() {
   var cat    = (document.getElementById('bulk-category') || {}).value || '';
   var floor  = (document.getElementById('bulk-floor') || {}).value || '';
   var rate   = parseFloat((document.getElementById('bulk-rate') || {}).value) || 0;
   var gstPct = parseFloat((document.getElementById('bulk-gst')  || {}).value) || 0;
   var start  = parseInt(document.getElementById('bulk-room-start').value) || 101;
   var count  = Math.min(parseInt(document.getElementById('bulk-room-count').value) || 10, 100);
   var bpr    = Math.min(parseInt(document.getElementById('bulk-beds-per-room').value) || 1, 10);
   var style  = (document.getElementById('bulk-label-style') || {}).value || 'alpha';
   if (!cat) { alert('Select a category.'); return; }

   await loadAptProviders(true);
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   var provId = _admHospitalChoice || (mine[0] && mine[0].id) || '';
   if (!provId) { alert('No hospital selected.'); return; }

   var labels = style === 'alpha' ? 'ABCDEFGHIJ'.split('') : style === 'num' ? ['1','2','3','4','5','6','7','8','9','10'] : ['Left','Right'];
   var btn = document.getElementById('bulk-save-btn');
   if (btn) { btn.textContent = 'Saving…'; btn.disabled = true; }

   var rows = [];
   var ts = Date.now().toString(36);
   for (var r = 0; r < count; r++) {
      for (var b = 0; b < bpr; b++) {
         rows.push({
            id: 'bed_' + ts + '_' + r + '_' + b + '_' + Math.random().toString(36).slice(2,6),
            provider_id: provId,
            category: cat,
            room_number: String(start + r),
            bed_number: String(labels[b] || (b + 1)),
            floor: floor,
            rate_per_day: rate,
            gst_pct: gstPct
         });
      }
   }

   console.log('[BulkBeds] saving', rows.length, 'beds for provider:', provId, rows[0]);
   var result = await AppDB.bulkUpsertBeds(rows);
   console.log('[BulkBeds] result:', result);
   if (btn) { btn.textContent = '⚡ Create ' + rows.length + ' Beds'; btn.disabled = false; }

   if (!result.ok) {
      alert('Failed to save beds.\n\nError: ' + result.error + '\n\nMake sure you have run the latest migrate.sql in Supabase SQL Editor.');
      return;
   }
   closeBulkBedModal();
   renderShopBeds();
}

// ── STAFF DIRECTORY (Phase 9) ──
async function renderShopStaff() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var host = document.getElementById('shopStaffContent');
   if (!host) return;

   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   if (!mine.length) { host.innerHTML = '<div class="shop-empty">No hospital linked to your account.</div>'; return; }
   var chosen = _admHospitalChoice && mine.find(function(p) { return p.id === _admHospitalChoice; }); if (!chosen) chosen = mine[0];

   var staff = await AppDB.getStaff(chosen.id);
   var active = staff.filter(function(s) { return s.active !== false; });
   var inactive = staff.filter(function(s) { return s.active === false; });

   var roleColor = { 'Nurse':'#0891b2', 'Receptionist':'#7c3aed', 'Ward Boy':'#ea580c', 'Lab Technician':'#16a34a', 'Pharmacist':'#ca8a04', 'Technician':'#2563eb', 'Admin':'#9f1239', 'Security':'#374151' };
   var shiftEmoji = { 'Morning':'🌅', 'Afternoon':'☀️', 'Night':'🌙', 'Rotating':'🔄' };

   var cards = active.length === 0
      ? '<div class="shop-empty" style="grid-column:1/-1">No staff added yet. Click <strong>+ Add Staff</strong> to begin.</div>'
      : active.map(function(s) {
           var inits = (s.name || '?').split(' ').map(function(w){return w[0]||'';}).join('').toUpperCase().slice(0,2);
           var col = roleColor[s.role] || '#6b7280';
           var shift = s.shift ? (shiftEmoji[s.shift] || '') + ' ' + s.shift : '';
           var sId = s.id.replace(/'/g, "\\'");
           return '<div class="staff-card">' +
                     '<div class="staff-card-head">' +
                        '<div class="staff-avatar" style="background:' + col + '20;color:' + col + '">' + inits + '</div>' +
                        '<div>' +
                           '<div class="staff-name">' + s.name + '</div>' +
                           '<span class="staff-role-badge" style="background:' + col + '15;color:' + col + ';border-color:' + col + '40">' + (s.role || '—') + '</span>' +
                        '</div>' +
                     '</div>' +
                     '<div class="staff-meta">' +
                        (s.department ? '<div class="staff-meta-row">🏥 ' + s.department + '</div>' : '') +
                        (s.phone      ? '<div class="staff-meta-row">📞 ' + s.phone + '</div>' : '') +
                        (shift        ? '<div class="staff-meta-row">' + shift + '</div>' : '') +
                        (s.qualification ? '<div class="staff-meta-row">🎓 ' + s.qualification + '</div>' : '') +
                     '</div>' +
                     '<div class="staff-card-foot">' +
                        '<button class="staff-btn-edit" onclick="openStaffModal(\'' + sId + '\')">✏️ Edit</button>' +
                        '<button class="staff-btn-del"  onclick="deleteStaffMember(\'' + sId + '\',\'' + chosen.id + '\')">🗑</button>' +
                     '</div>' +
                  '</div>';
        }).join('');

   host.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:8px">' +
         '<div>' +
            '<h3 style="margin:0;color:#1a1a2e;font-size:1rem">Staff Directory</h3>' +
            '<div style="font-size:0.8rem;color:#8a93a7;margin-top:2px">' + active.length + ' active' + (inactive.length ? ' · ' + inactive.length + ' inactive' : '') + '</div>' +
         '</div>' +
         '<button onclick="openStaffModal()" style="background:#10b981;color:#fff;border:none;border-radius:10px;padding:9px 16px;font-size:0.85rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:6px">+ Add Staff</button>' +
      '</div>' +
      '<div class="staff-grid">' + cards + '</div>';
   _liveSubscribe('shopStaff', 'hospital_staff', renderShopStaff);
}

var _staffHospital = null;
function openStaffModal(id) {
   var modal = document.getElementById('staffModal');
   if (!modal) { _buildStaffModal(); modal = document.getElementById('staffModal'); }
   var get = function(eid) { return document.getElementById(eid); };
   if (id) {
      AppDB.getStaff(_admHospitalChoice || '').then(function(staff) {
         var s = staff.find(function(x) { return x.id === id; });
         if (!s) return;
         get('staff-id').value          = s.id;
         get('staff-name').value        = s.name || '';
         get('staff-role').value        = s.role || '';
         get('staff-dept').value        = s.department || '';
         get('staff-phone').value       = s.phone || '';
         get('staff-email').value       = s.email || '';
         get('staff-shift').value       = s.shift || '';
         get('staff-qual').value        = s.qualification || '';
         get('staff-doj').value         = s.date_of_joining || '';
         get('staff-notes').value       = s.notes || '';
         get('staff-active').checked    = s.active !== false;
         document.getElementById('staffModalTitle').textContent = '✏️ Edit Staff';
         modal.classList.remove('hidden');
      });
   } else {
      ['staff-id','staff-name','staff-role','staff-dept','staff-phone','staff-email','staff-shift','staff-qual','staff-doj','staff-notes'].forEach(function(f){ var el=get(f); if(el) el.value=''; });
      var ac = get('staff-active'); if (ac) ac.checked = true;
      document.getElementById('staffModalTitle').textContent = '+ Add Staff Member';
      modal.classList.remove('hidden');
   }
}

function _buildStaffModal() {
   var m = document.createElement('div');
   m.className = 'sp-modal-overlay hidden'; m.id = 'staffModal';
   m.innerHTML =
      '<div class="sp-modal" style="max-width:600px">' +
         '<div class="sp-modal-header" style="background:#059669">' +
            '<h3 id="staffModalTitle">+ Add Staff Member</h3>' +
            '<button onclick="closeStaffModal()" style="background:transparent;border:none;color:#fff;font-size:1.4rem;cursor:pointer">✕</button>' +
         '</div>' +
         '<div class="sp-modal-body">' +
            '<input type="hidden" id="staff-id"/>' +
            '<div class="profile-card-body" style="padding:0">' +
               '<div class="sp-field"><label>Full Name *</label><input type="text" id="staff-name" placeholder="e.g. Anjali Reddy"/></div>' +
               '<div class="sp-field"><label>Role *</label><select id="staff-role"><option value="">—</option><option>Nurse</option><option>Receptionist</option><option>Ward Boy</option><option>Lab Technician</option><option>Pharmacist</option><option>Technician</option><option>Admin</option><option>Security</option></select></div>' +
               '<div class="sp-field"><label>Department</label><select id="staff-dept"><option value="">—</option><option>OPD</option><option>Emergency</option><option>ICU</option><option>General Ward</option><option>Maternity</option><option>Lab</option><option>Pharmacy</option><option>Operation Theatre</option><option>Admin</option></select></div>' +
               '<div class="sp-field"><label>Phone</label><input type="tel" id="staff-phone" placeholder="98765 43210"/></div>' +
               '<div class="sp-field"><label>Email</label><input type="email" id="staff-email" placeholder="staff@hospital.com"/></div>' +
               '<div class="sp-field"><label>Shift</label><select id="staff-shift"><option value="">—</option><option>Morning</option><option>Afternoon</option><option>Night</option><option>Rotating</option></select></div>' +
               '<div class="sp-field"><label>Qualification</label><input type="text" id="staff-qual" placeholder="GNM / B.Sc Nursing / Diploma…"/></div>' +
               '<div class="sp-field"><label>Date of Joining</label><input type="date" id="staff-doj"/></div>' +
               '<div class="sp-field" style="grid-column:1/-1"><label>Notes</label><textarea id="staff-notes" rows="2" placeholder="Any special notes…"></textarea></div>' +
               '<div class="sp-field" style="grid-column:1/-1;display:flex;align-items:center;gap:8px"><label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin:0"><input type="checkbox" id="staff-active" checked style="width:auto"/> Active (uncheck to mark as inactive/resigned)</label></div>' +
            '</div>' +
         '</div>' +
         '<div class="sp-modal-footer">' +
            '<button class="sp-btn-cancel" onclick="closeStaffModal()">Cancel</button>' +
            '<button class="sp-btn-save" onclick="saveStaffMember()">💾 Save</button>' +
         '</div>' +
      '</div>';
   document.body.appendChild(m);
}

function closeStaffModal() { var m = document.getElementById('staffModal'); if (m) m.classList.add('hidden'); }

async function saveStaffMember() {
   var get = function(id) { return (document.getElementById(id).value || '').trim(); };
   var name = get('staff-name'), role = get('staff-role');
   if (!name) { alert('Name is required.'); return; }
   if (!role) { alert('Role is required.'); return; }

   await loadAptProviders(true);
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase() || isAdmin(user.email);
   });
   var provId = _admHospitalChoice || (mine[0] && mine[0].id) || '';
   if (!provId) { alert('No hospital selected.'); return; }

   var id = get('staff-id') || ('stf_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6));
   var ok = await AppDB.upsertStaff({
      id: id, provider_id: provId,
      name: name, role: role,
      department: get('staff-dept'), phone: get('staff-phone'),
      email: get('staff-email'), shift: get('staff-shift'),
      qualification: get('staff-qual'),
      date_of_joining: get('staff-doj') || null,
      notes: get('staff-notes'),
      active: document.getElementById('staff-active').checked
   });
   if (!ok) { alert('Failed to save staff member.'); return; }
   closeStaffModal();
   renderShopStaff();
}

async function deleteStaffMember(id, providerId) {
   if (!confirm('Remove this staff member?')) return;
   await AppDB.deleteStaff(id);
   renderShopStaff();
}

// Bulk delete every admission currently shown. Type-to-confirm to avoid
// accidental wipes of the active inpatient list.
async function shopDeleteAllAdmissions() {
   var matching = (window._shopAdmFiltered || []);
   if (!matching.length) { alert('Nothing to delete.'); return; }
   var phrase = 'DELETE';
   var typed = prompt(
      '⚠️ This will permanently delete ' + matching.length + ' admission record' +
      (matching.length === 1 ? '' : 's') + ' currently shown.\n\n' +
      'Type ' + phrase + ' (in caps) to confirm:'
   );
   if (typed !== phrase) { if (typed != null) alert('Cancelled — phrase did not match.'); return; }
   for (var i = 0; i < matching.length; i++) {
      try { await AppDB.deleteAdmission(matching[i].id); } catch (e) { /* keep going */ }
   }
   renderShopAdmissions();
}

// ── SCHEDULE (owner books on behalf of offline customers) ──
let _schedCtx = null;   // { providerId, doctor, date, slot, token? }

async function renderShopSchedule() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   await loadAptProviders(true);
   var mine = (_aptProvidersCache || []).filter(function(p) {
      return (p.owner_email || '').toLowerCase() === user.email.toLowerCase() || isAdmin(user.email);
   });

   var sel = document.getElementById('schedDoctor');
   if (!sel) return;
   var options = '<option value="">— Select doctor —</option>';
   mine.forEach(function(p) {
      (p.doctors || []).forEach(function(d) {
         var label = d.name + ' (' + (d.speciality || '—') + ') @ ' + p.name;
         options += '<option value="' + p.id + '|' + d.id + '">' + label + '</option>';
      });
   });
   sel.innerHTML = options;
   resetShopSchedule();
}

function resetShopSchedule() {
   _schedCtx = null;
   var sel = document.getElementById('schedDoctor'); if (sel) sel.value = '';
   ['schedDateSection', 'schedSlotSection', 'schedPatientSection'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.classList.add('hidden');
   });
   ['schedPatientName', 'schedPatientPhone', 'schedPatientEmail', 'schedPatientAge', 'schedPatientAddress', 'schedPatientReason', 'schedFollowupOf'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
   });
   var fuC = document.getElementById('schedIsFollowup');
   if (fuC) fuC.checked = false;
   var fuR = document.getElementById('schedFollowupOfRow');
   if (fuR) fuR.style.display = 'none';
   document.getElementById('schedConfirmBtn').disabled = true;
   var msg = document.getElementById('schedMsg'); if (msg) msg.textContent = '';
}

function onSchedDoctorChange() {
   var val = document.getElementById('schedDoctor').value;
   if (!val) { resetShopSchedule(); return; }
   var parts = val.split('|');
   var provider = _aptGetProvider(parts[0]);
   var doctor   = _aptGetDoctor(provider, parts[1]);
   if (!doctor) return;
   _schedCtx = { providerId: provider.id, provider: provider, doctor: doctor, date: null, slot: null, token: null };

   // Render next 7 date buttons, disable days the doctor isn't available
   var dateHtml = '';
   for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      var label = i === 0 ? 'TODAY' : (i === 1 ? 'TMRW' : APT_DAYS[d.getDay()]);
      var monthShort = d.toLocaleDateString('en-IN', { month: 'short' });
      var dayIdx = d.getDay();
      var avail = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
      var onVac = _isOnVacation(doctor, dateStr);
      var off   = avail.length === 0 || onVac;
      var click = off ? '' : ' onclick="schedSelectDate(\'' + dateStr + '\', this)"';
      var titleTxt = onVac ? 'Doctor on leave' : 'Doctor unavailable';
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="' + titleTxt + '"' : '';
      var leaveTag = onVac ? '<div style="font-size:0.62rem;color:#e65100;font-weight:700">🏖 ON LEAVE</div>' : '';
      dateHtml += '<div class="apt-date-btn"' + click + extra + '>' +
                     '<div class="apt-date-day">' + label + '</div>' +
                     '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
                     leaveTag +
                  '</div>';
   }
   document.getElementById('schedDateButtons').innerHTML = dateHtml;
   document.getElementById('schedDateSection').classList.remove('hidden');
   document.getElementById('schedSlotSection').classList.add('hidden');
   document.getElementById('schedPatientSection').classList.add('hidden');
   document.getElementById('schedConfirmBtn').disabled = true;
}

async function schedSelectDate(dateStr, btn) {
   if (!_schedCtx) return;
   _schedCtx.date = dateStr;
   _schedCtx.slot = null;
   document.querySelectorAll('#schedDateButtons .apt-date-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');

   var doctor = _schedCtx.doctor;
   var section = document.getElementById('schedSlotSection');
   var btnsEl  = document.getElementById('schedSlotButtons');
   section.classList.remove('hidden');
   btnsEl.innerHTML = '<p style="color:#999;font-size:0.85rem">Loading…</p>';

   var existing = await AppDB.getDoctorBookings(doctor.id, dateStr);
   // Follow-ups bypass capacity by design — exclude them from offline slot counts.
   var offlineExisting = existing.filter(function(b) { return b.booking_source === 'offline' && !b.is_followup; });
   var isTokenMode = doctor.booking_mode === 'token';
   var caps = _doctorCaps(doctor);

   if (isTokenMode) {
      if (offlineExisting.length >= caps.dailyOffline) {
         btnsEl.innerHTML = '<p style="color:#c62828;font-size:0.88rem">Offline tokens are full for today (' + caps.dailyOffline + ' issued).</p>';
         document.getElementById('schedPatientSection').classList.add('hidden');
         document.getElementById('schedConfirmBtn').disabled = true;
         return;
      }
      var nextToken = existing.length + 1;   // unique across online+offline
      _schedCtx.slot = '';
      _schedCtx.overtime = false;
      btnsEl.innerHTML =
         '<div style="background:#e3f2fd;border:1px solid #90caf9;border-radius:10px;padding:12px;text-align:center">' +
            '<div style="font-size:0.78rem;color:#555">Patient\'s token will be</div>' +
            '<div style="font-size:1.5rem;font-weight:800;color:#1a73e8">T' + nextToken + '</div>' +
            '<div style="font-size:0.75rem;color:#777">' + offlineExisting.length + ' of ' + caps.dailyOffline + ' offline tokens used today</div>' +
         '</div>';
      document.getElementById('schedPatientSection').classList.remove('hidden');
      _schedReevaluateConfirmEnabled();
      return;
   }

   // Slot mode
   var d = new Date(dateStr + 'T00:00:00');
   var dayIdx = d.getDay();
   var windows = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
   var now = new Date();
   var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
   var isToday = dateStr === todayStr;
   var offlineCountsBySlot = {};
   offlineExisting.forEach(function(b) { offlineCountsBySlot[b.slot] = (offlineCountsBySlot[b.slot] || 0) + 1; });

   var nowMinOwner = isToday ? (now.getHours() * 60 + now.getMinutes()) : -1;
   var slotHtml = '';
   var anyShown = false;
   windows.forEach(function(w) {
      var startMin = _hhmmToMin(w.start);
      var endMin   = _hhmmToMin(w.end);
      for (var t = startMin; t + caps.duration <= endMin; t += caps.duration) {
         var hh = Math.floor(t / 60);
         var mm = t % 60;
         var slot24 = String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0');
         var hour12 = ((hh % 12) || 12);
         var label = hour12 + ':' + String(mm).padStart(2,'0') + ' ' + (hh < 12 ? 'AM' : 'PM');
         var count = offlineCountsBySlot[slot24] || 0;
         var full  = count >= caps.slotOffline;
         var isPast = isToday && (t + caps.duration) <= nowMinOwner;
         anyShown = true;
         if (full) {
            slotHtml += '<button class="apt-slot-btn slot-full" disabled>' + label + '<br><small>Full</small></button>';
         } else if (isPast) {
            // Option B: past slots dimmed but still clickable for retroactive entry
            slotHtml += '<button class="apt-slot-btn slot-past" onclick="schedSelectSlot(\'' + slot24 + '\', this)" title="This slot has already passed — clickable for retroactive entry">' +
                        label + '<br><small>(past) ' + (caps.slotOffline - count) + ' of ' + caps.slotOffline + ' left</small></button>';
         } else {
            slotHtml += '<button class="apt-slot-btn slot-available" onclick="schedSelectSlot(\'' + slot24 + '\', this)">' + label +
                        (caps.slotOffline > 1 ? '<br><small>' + (caps.slotOffline - count) + ' of ' + caps.slotOffline + ' left</small>' : '') + '</button>';
         }
      }
   });
   if (!anyShown) slotHtml = '<p style="color:#999;font-size:0.85rem">No working windows on this day.</p>';

   // Overtime option — only on TODAY when slots have all passed or are full
   if (isToday) {
      var nowMin = now.getHours() * 60 + now.getMinutes();
      var lastEnd = 0;
      windows.forEach(function(w) { lastEnd = Math.max(lastEnd, _hhmmToMin(w.end)); });
      var allPast = nowMin >= lastEnd;
      var nowHH = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0');
      slotHtml += '<button class="apt-slot-btn" style="background:#ef6c00;color:#fff;border-color:#ef6c00" onclick="schedSelectOvertime(\'' + nowHH + '\', this)">' +
                     '🕐 Add as Overtime' +
                     '<br><small style="opacity:0.85">' + (allPast ? 'After hours · ' : '') + 'Uses ' + nowHH + '</small>' +
                  '</button>';
   }

   btnsEl.innerHTML = slotHtml;
   document.getElementById('schedPatientSection').classList.add('hidden');
   document.getElementById('schedConfirmBtn').disabled = true;
}

// Owner picks "Add as Overtime" — uses current time, bypasses capacity
function schedSelectOvertime(slot24, btn) {
   if (!_schedCtx) return;
   _schedCtx.slot = slot24;
   _schedCtx.overtime = true;
   document.querySelectorAll('#schedSlotButtons .apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('schedPatientSection').classList.remove('hidden');
   _schedReevaluateConfirmEnabled();
}

function schedSelectSlot(slot24, btn) {
   if (!_schedCtx) return;
   _schedCtx.slot = slot24;
   _schedCtx.overtime = false;
   document.querySelectorAll('#schedSlotButtons .apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('schedPatientSection').classList.remove('hidden');
   _schedReevaluateConfirmEnabled();
}

function _schedReevaluateConfirmEnabled() {
   var ctx = _schedCtx;
   var isReady = ctx && ctx.date && (ctx.doctor.booking_mode === 'token' || ctx.slot);
   document.getElementById('schedConfirmBtn').disabled = !isReady;
}

async function confirmShopSchedule() {
   var ctx = _schedCtx;
   if (!ctx) return;
   var name    = document.getElementById('schedPatientName').value.trim();
   var phone   = document.getElementById('schedPatientPhone').value.trim();
   var email   = document.getElementById('schedPatientEmail').value.trim().toLowerCase();
   var age     = document.getElementById('schedPatientAge').value.trim();
   var address = document.getElementById('schedPatientAddress').value.trim();
   var reason  = document.getElementById('schedPatientReason').value.trim();
   var fuChk   = document.getElementById('schedIsFollowup');
   var fuOfEl  = document.getElementById('schedFollowupOf');
   ctx.isFollowup = !!(fuChk && fuChk.checked);
   ctx.followupOf = ctx.isFollowup && fuOfEl ? fuOfEl.value.trim() : '';
   if (ctx.isFollowup && !ctx.followupOf) {
      document.getElementById('schedMsg').textContent = 'Please paste the original Appointment ID for the follow-up.';
      document.getElementById('schedMsg').style.color = '#c62828';
      return;
   }
   // Enforce provider's per-original follow-up count limit. Cancelled follow-ups don't count.
   if (ctx.isFollowup) {
      var allApts = await AppDB.getAllAppointments();
      var orig = (allApts || []).find(function(b) { return b.apt_id === ctx.followupOf; });
      if (!orig) {
         document.getElementById('schedMsg').textContent = 'Original Appointment ID not found.';
         document.getElementById('schedMsg').style.color = '#c62828';
         return;
      }
      var fuLimit = Math.max(1, Number((ctx.provider && ctx.provider.free_followup_count) || 1));
      var fuExisting = (allApts || []).filter(function(b) {
         return b.followup_of === ctx.followupOf && b.status !== 'Cancelled';
      });
      if (fuExisting.length >= fuLimit) {
         document.getElementById('schedMsg').textContent = 'This consultation already has ' + fuExisting.length + ' follow-up(s). Limit is ' + fuLimit + '.';
         document.getElementById('schedMsg').style.color = '#c62828';
         return;
      }
   }
   var msg = document.getElementById('schedMsg');
   var setMsg = function(t, ok) { msg.textContent = t; msg.style.color = ok ? '#2e7d32' : '#c62828'; };
   if (!name || !phone) { setMsg('Patient name and phone are required.'); return; }

   // Re-check OFFLINE capacity, but issue tokens from the COMBINED pool so
   // online & offline tokens never collide. Overtime bypasses capacity.
   // Follow-ups bypass capacity entirely and use a separate FT* counter.
   var allRowsS    = await AppDB.getDoctorBookings(ctx.doctor.id, ctx.date, true);
   var isFuS       = !!ctx.isFollowup;
   var isTokenMode = ctx.doctor.booking_mode === 'token';
   var caps = _doctorCaps(ctx.doctor);
   var _maxTokS = function(arr) {
      return arr.reduce(function(m, r) { return Math.max(m, Number(r.token) || 0); }, 0);
   };
   var token;
   if (isFuS) {
      // Follow-up booking — no capacity check, FT* counter
      var fuRows = allRowsS.filter(function(b) { return b.is_followup; });
      token = _maxTokS(fuRows) + 1;
   } else {
      var regularAllS    = allRowsS.filter(function(b) { return !b.is_followup; });
      var existing       = regularAllS.filter(function(b) { return b.status !== 'Cancelled'; });
      var offlineExisting = existing.filter(function(b) { return b.booking_source === 'offline'; });
      if (ctx.overtime) {
         token = _maxTokS(regularAllS) + 1;
      } else if (isTokenMode) {
         if (offlineExisting.length >= caps.dailyOffline) { setMsg('Offline tokens just got full. Please pick another date.'); return; }
         token = _maxTokS(regularAllS) + 1;
      } else {
         var inSlotOffline = offlineExisting.filter(function(b) { return b.slot === ctx.slot; });
         if (inSlotOffline.length >= caps.slotOffline) { setMsg('Offline slot just filled up. Please pick another.'); return; }
         var inSlotAll = regularAllS.filter(function(b) { return b.slot === ctx.slot; });
         token = _maxTokS(inSlotAll) + 1;
      }
   }

   // user_email: real patient email if given, else a walk-in marker tied to phone
   // For follow-ups, preserve the original booking's user_email so the customer
   // sees the new follow-up in their own My Appointments page.
   var userEmail;
   if (isFuS && ctx.followupOf) {
      var _origForEmail = (await AppDB.getAllAppointments()).find(function(b) { return b.apt_id === ctx.followupOf; });
      userEmail = _origForEmail && _origForEmail.user_email
                  ? _origForEmail.user_email
                  : (email || ('walkin+' + phone.replace(/\D/g, '') + '@offline.local'));
   } else {
      userEmail = email || ('walkin+' + phone.replace(/\D/g, '') + '@offline.local');
   }

   var aptId = 'APT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 5).toUpperCase();
   var apt = {
      apt_id: aptId,
      user_email: userEmail,
      provider_id: ctx.provider.id,
      provider_name: ctx.provider.name,
      doctor_id: ctx.doctor.id,
      doctor_name: ctx.doctor.name,
      speciality: ctx.doctor.speciality,
      category: ctx.provider.category,
      date: ctx.date,
      slot: ctx.slot || '',
      fee: ctx.doctor.fee,
      status: 'Confirmed',
      token: token,
      booking_source: 'offline',
      patient_name:    name,
      patient_phone:   phone,
      patient_age:     age,
      patient_address: address,
      patient_reason:  reason + (ctx.overtime ? ' [Overtime]' : '') + (isFuS ? ' [Free follow-up of ' + (ctx.followupOf || '') + ']' : ''),
      is_followup:     isFuS,
      followup_of:     isFuS ? (ctx.followupOf || '') : ''
   };
   // Override fee to 0 for follow-ups
   if (isFuS) apt.fee = 0;
   var ok = await AppDB.insertAppointment(apt);
   if (!ok) { setMsg('Failed to save booking. Please try again.'); return; }

   setMsg('✅ Booked — Offline Token T' + token + (ctx.slot ? ' at ' + ctx.slot : '') + ' on ' + ctx.date + (ctx.overtime ? ' (Overtime)' : '') + '.', true);
   _shopAptsCache = null;
   resetShopSchedule();
}

async function shopSetAptStatus(aptId, status) {
   var apt = (_shopAptsCache || []).find(function(a) { return a.apt_id === aptId; });
   var extra = null;
   if (status === 'Cancelled') {
      // If the patient already paid, we need to record a refund along with the
      // cancellation. Otherwise just capture a reason like before.
      if (apt && apt.is_paid && !apt.is_refunded) {
         var defaultAmt = Number(apt.fee || 0);
         var amtStr = prompt(
            'Patient already paid ₹' + defaultAmt + '.\n' +
            'Enter the refund amount (₹). Leave default for full refund, or enter 0 to skip the refund.',
            String(defaultAmt)
         );
         if (amtStr === null) return;
         var amt = parseFloat(amtStr);
         if (isNaN(amt) || amt < 0) { alert('Invalid amount.'); return; }
         if (amt > defaultAmt) {
            if (!confirm('Refund amount ₹' + amt + ' is more than the fee paid (₹' + defaultAmt + '). Continue anyway?')) return;
         }
         var reason = prompt('Reason for cancellation / refund:\n\n(Shown to the patient and stored for records.)');
         if (reason === null) return;
         extra = {
            cancelled_by: 'hospital',
            cancellation_reason: (reason || '').trim(),
            is_refunded: amt > 0,
            refund_amount: amt,
            refunded_at: amt > 0 ? new Date().toISOString() : null
         };
      } else {
         var reason2 = prompt('Please tell the patient why you\'re cancelling:\n\n(Optional — leave blank if not applicable.)');
         if (reason2 === null) return;
         extra = { cancelled_by: 'hospital', cancellation_reason: (reason2 || '').trim() };
      }
   } else if (status === 'Completed') {
      // Completion is only meaningful once the slot has passed
      if (apt && !_slotPassed(apt)) {
         alert('This appointment time hasn\'t passed yet. You can mark it Completed after the slot time.');
         return;
      }
      if (!confirm('Mark this appointment as Completed?')) return;
      // Completed implies fee was paid — set the flag too.
      extra = { is_paid: true };
   } else if (status === 'No-show') {
      if (apt && !_slotEnded(apt)) {
         alert('This slot hasn\'t ended yet. Patient may still arrive — wait until the slot finishes before marking No-show.');
         return;
      }
      if (!confirm('Mark this appointment as No-show (patient did not turn up)?')) return;
   } else {
      if (!confirm('Set this appointment to "' + status + '"?')) return;
   }
   var ok = await AppDB.updateAppointmentStatus(aptId, status, extra);
   if (!ok) { alert('Failed to update.'); return; }
   // Status was Completed → patient definitely paid → ensure their hospital ID exists.
   if (status === 'Completed' && apt) {
      try { await AppDB.ensureHospitalPatientId(apt.provider_id, apt.patient_phone, apt.patient_name); }
      catch (e) { console.error('ensureHospitalPatientId failed:', e); }
   }
   _shopAptsCache = null;
   renderShopAppointments(window._shopAptCurrentFilter);
}

// ── Free Follow-up Booking (offline, owner-driven) ──
// Owner pastes the original Appointment ID; system validates eligibility
// (status, follow-up window, count limit) and lets them pick a new slot.
// user_email is preserved from the original so the customer sees the
// follow-up in their My Appointments automatically.
let _fuBookCtx = null;

function openFollowupBookingModal() {
   _fuBookCtx = null;
   document.getElementById('fuOriginalAptId').value = '';
   document.getElementById('fuLookupMsg').textContent = '';
   document.getElementById('fuOriginalDetails').style.display = 'none';
   document.getElementById('fuOriginalDetails').innerHTML = '';
   document.getElementById('fuDateSection').style.display = 'none';
   document.getElementById('fuSlotSection').style.display = 'none';
   document.getElementById('fuDateButtons').innerHTML = '';
   document.getElementById('fuSlotButtons').innerHTML = '';
   document.getElementById('fuConfirmBtn').disabled = true;
   document.getElementById('followupBookingModal').classList.remove('hidden');
}

function closeFollowupBookingModal() {
   document.getElementById('followupBookingModal').classList.add('hidden');
   _fuBookCtx = null;
}

async function lookupFollowupOriginal() {
   var aptId = document.getElementById('fuOriginalAptId').value.trim();
   var msg   = document.getElementById('fuLookupMsg');
   var setErr = function(t) { msg.style.color = '#c62828'; msg.textContent = t; };
   var setInfo = function(t) { msg.style.color = '#2e7d32'; msg.textContent = t; };
   if (!aptId) { setErr('Please enter the original Appointment ID.'); return; }

   // Fetch the original appointment by id
   var all = await AppDB.getAllAppointments();
   var orig = (all || []).find(function(a) { return a.apt_id === aptId; });
   if (!orig) { setErr('No appointment found with that ID.'); return; }
   if (orig.status !== 'Completed') { setErr('Original appointment must be Completed first. Current status: ' + (orig.status || '-')); return; }
   if (orig.is_followup)            { setErr('That ID is itself a follow-up. Use the ID of the original visit.'); return; }

   var provider = _aptGetProvider(orig.provider_id);
   var doctor   = provider && _aptGetDoctor(provider, orig.doctor_id);
   if (!provider || !doctor) { setErr('Doctor or hospital no longer exists for that booking.'); return; }

   // Provider must offer follow-ups
   var fuDays  = Number(provider.free_followup_days  || 0);
   var fuLimit = Math.max(1, Number(provider.free_followup_count || 1));
   if (fuDays <= 0) { setErr(provider.name + ' does not offer free follow-ups.'); return; }

   // Within window?
   var origDate = new Date(orig.date + 'T00:00:00');
   var deadline = new Date(origDate.getTime() + fuDays * 86400000);
   var today0   = new Date(); today0.setHours(0,0,0,0);
   if (today0 > deadline) {
      setErr('Follow-up window expired on ' + deadline.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) + '.');
      return;
   }

   // Count limit
   var existingFu = (all || []).filter(function(b) {
      return b.followup_of === orig.apt_id && b.status !== 'Cancelled';
   });
   if (existingFu.length >= fuLimit) {
      setErr('All ' + fuLimit + ' free follow-up(s) for this visit are already used.');
      return;
   }

   // Owner can only book follow-ups for THEIR hospital
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   if ((provider.owner_email || '').toLowerCase() !== (user.email || '').toLowerCase() && !isAdmin(user.email)) {
      setErr('This appointment belongs to another hospital.');
      return;
   }

   // All good — populate the context + UI
   _fuBookCtx = {
      original: orig, provider: provider, doctor: doctor,
      fuDays: fuDays, fuLimit: fuLimit, deadline: deadline,
      remaining: fuLimit - existingFu.length,
      date: null, slot: null
   };
   setInfo('✓ Valid follow-up. ' + _fuBookCtx.remaining + ' free follow-up' + (_fuBookCtx.remaining === 1 ? '' : 's') + ' remaining.');

   var deadlineLabel = deadline.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
   document.getElementById('fuOriginalDetails').innerHTML =
      '<strong>' + (orig.doctor_name || '') + '</strong> · ' + (orig.speciality || '') + ' · ' + (orig.provider_name || '') +
      '<br><strong>Patient:</strong> ' + (orig.patient_name || '—') + (orig.patient_phone ? ' (' + orig.patient_phone + ')' : '') +
      '<br><strong>Original visit:</strong> ' + orig.date + (orig.slot ? ' at ' + _formatSlot12(orig.slot) : '') +
      '<br><strong>Follow-up valid until:</strong> ' + deadlineLabel;
   document.getElementById('fuOriginalDetails').style.display = 'block';

   _renderFollowupDates();
   document.getElementById('fuDateSection').style.display = 'block';
   document.getElementById('fuSlotSection').style.display  = 'none';
   document.getElementById('fuConfirmBtn').disabled = true;
}

function _renderFollowupDates() {
   var ctx = _fuBookCtx;
   if (!ctx) return;
   var doctor   = ctx.doctor;
   var deadline = ctx.deadline;
   var html = '';
   for (var i = 0; i < 14; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      if (d.getTime() > deadline.getTime() + 86400000) break;
      var label = i === 0 ? 'TODAY' : (i === 1 ? 'TMRW' : APT_DAYS[d.getDay()]);
      var monthShort = d.toLocaleDateString('en-IN', { month: 'short' });
      var dayIdx = d.getDay();
      var avail = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
      var onVac = _isOnVacation(doctor, dateStr);
      var pastDeadline = new Date(dateStr + 'T00:00:00').getTime() > deadline.getTime();
      var off   = avail.length === 0 || onVac || pastDeadline;
      var click = off ? '' : ' onclick="selectFollowupDate(\'' + dateStr + '\', this)"';
      var titleTxt = pastDeadline ? 'Past follow-up window' : onVac ? 'Doctor on leave' : 'Doctor unavailable';
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="' + titleTxt + '"' : '';
      var leaveTag = onVac ? '<div style="font-size:0.62rem;color:#e65100;font-weight:700">🏖 LEAVE</div>'
                   : pastDeadline ? '<div style="font-size:0.62rem;color:#c62828;font-weight:700">⏰ EXPIRED</div>' : '';
      html += '<div class="apt-date-btn"' + click + extra + '>' +
                 '<div class="apt-date-day">' + label + '</div>' +
                 '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
                 leaveTag +
              '</div>';
   }
   document.getElementById('fuDateButtons').innerHTML = html;
}

async function selectFollowupDate(dateStr, btn) {
   if (!_fuBookCtx) return;
   _fuBookCtx.date = dateStr;
   _fuBookCtx.slot = null;
   document.querySelectorAll('#fuDateButtons .apt-date-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');

   var section = document.getElementById('fuSlotSection');
   var btnsEl  = document.getElementById('fuSlotButtons');
   section.style.display = 'block';
   btnsEl.innerHTML = '<p style="color:#999;font-size:0.85rem">Loading slots…</p>';
   document.getElementById('fuConfirmBtn').disabled = true;

   var doctor = _fuBookCtx.doctor;
   var isTokenMode = doctor.booking_mode === 'token';
   var caps = _doctorCaps(doctor);

   if (isTokenMode) {
      _fuBookCtx.slot = '';
      btnsEl.innerHTML =
         '<div style="background:#e3f2fd;border:1px solid #90caf9;border-radius:10px;padding:12px;text-align:center">' +
            '<div style="font-size:0.85rem;color:#1a73e8">🎟 Token mode — FT* token will be auto-assigned</div>' +
         '</div>';
      document.getElementById('fuConfirmBtn').disabled = false;
      return;
   }

   // Slot mode — show available slots (follow-ups bypass capacity, so show all)
   var d = new Date(dateStr + 'T00:00:00');
   var dayIdx = d.getDay();
   var windows = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
   // Skip slots whose END time has already passed when booking for today
   var now = new Date();
   var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
   var isToday = dateStr === todayStr;
   var nowMin  = isToday ? (now.getHours() * 60 + now.getMinutes()) : -1;
   var slotHtml = '';
   var anyShown = false;
   windows.forEach(function(w) {
      var startMin = _hhmmToMin(w.start);
      var endMin   = _hhmmToMin(w.end);
      for (var t = startMin; t + caps.duration <= endMin; t += caps.duration) {
         if (isToday && (t + caps.duration) <= nowMin) continue;   // past slot — skip
         var hh = Math.floor(t / 60), mm = t % 60;
         var slot24 = String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0');
         var hour12 = ((hh % 12) || 12);
         var label = hour12 + ':' + String(mm).padStart(2,'0') + ' ' + (hh < 12 ? 'AM' : 'PM');
         slotHtml += '<button class="apt-slot-btn slot-available" onclick="selectFollowupSlot(\'' + slot24 + '\', this)">' + label + '</button>';
         anyShown = true;
      }
   });
   btnsEl.innerHTML = anyShown ? slotHtml : '<p style="color:#999;font-size:0.85rem">No remaining slots today — pick another date.</p>';
}

function selectFollowupSlot(slot, btn) {
   if (!_fuBookCtx) return;
   _fuBookCtx.slot = slot;
   document.querySelectorAll('#fuSlotButtons .apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('fuConfirmBtn').disabled = false;
}

async function confirmFollowupBookingFromModal() {
   var ctx = _fuBookCtx;
   if (!ctx || !ctx.date) return;
   var orig = ctx.original;
   var doctor = ctx.doctor;

   // Compute FT* token (max FT token for the new date+slot+doctor, +1)
   var allRows = await AppDB.getDoctorBookings(doctor.id, ctx.date, true);
   var fuPool = allRows.filter(function(b) {
      return b.is_followup && (!ctx.slot || b.slot === ctx.slot);
   });
   var token = fuPool.reduce(function(m, r) { return Math.max(m, Number(r.token) || 0); }, 0) + 1;

   var aptId = 'APT-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 5).toUpperCase();
   var apt = {
      apt_id: aptId,
      user_email: orig.user_email,           // ← preserves customer ownership so they see it
      provider_id: orig.provider_id,
      provider_name: orig.provider_name,
      doctor_id: orig.doctor_id,
      doctor_name: orig.doctor_name,
      speciality: orig.speciality,
      category: orig.category,
      date: ctx.date,
      slot: ctx.slot || '',
      fee: 0,
      status: 'Confirmed',
      token: token,
      booking_source: 'offline',
      is_followup: true,
      followup_of: orig.apt_id,
      patient_name:    orig.patient_name    || '',
      patient_phone:   orig.patient_phone   || '',
      patient_age:     orig.patient_age     || '',
      patient_address: orig.patient_address || '',
      patient_reason:  '[Free follow-up of ' + orig.apt_id + ']'
   };

   var ok = await AppDB.insertAppointment(apt);
   if (!ok) { alert('Failed to save follow-up. Check console.'); return; }

   closeFollowupBookingModal();
   _shopAptsCache = null;
   alert('✅ Free follow-up booked for ' + (orig.patient_name || 'patient') + ' on ' + ctx.date + (ctx.slot ? ' at ' + _formatSlot12(ctx.slot) : '') + ' — token FT' + token + '.');
   if (typeof renderShopAppointments === 'function') renderShopAppointments(window._shopAptCurrentFilter);
}

// ── Doctor Day-Off (bulk cancel all bookings for one doctor + one date) ──
// Opens the small day-cancel modal pre-filled for the given doctor.
function openDoctorDayCancel(providerId, doctorId) {
   var provider = _aptGetProvider(providerId);
   var doctor   = provider && _aptGetDoctor(provider, doctorId);
   if (!doctor) { alert('Doctor not found.'); return; }

   document.getElementById('dayCancelProviderId').value = providerId;
   document.getElementById('dayCancelDoctorId').value   = doctorId;
   document.getElementById('dayCancelDoctorInfo').innerHTML =
      '<strong>' + doctor.name + '</strong>' +
      (doctor.speciality ? ' · ' + doctor.speciality : '') +
      '<br><span style="color:#666">' + provider.name + '</span>';

   // Default to today's date
   var t = new Date();
   var today = t.getFullYear() + '-' + String(t.getMonth()+1).padStart(2,'0') + '-' + String(t.getDate()).padStart(2,'0');
   document.getElementById('dayCancelDate').value = today;

   document.getElementById('dayCancelModal').classList.remove('hidden');
}

function closeDayCancelModal() {
   document.getElementById('dayCancelModal').classList.add('hidden');
}

// Triggered by the modal's "🚨 Cancel All Bookings" button.
async function confirmDoctorDayCancel() {
   var providerId = document.getElementById('dayCancelProviderId').value;
   var doctorId   = document.getElementById('dayCancelDoctorId').value;
   var dateStr    = document.getElementById('dayCancelDate').value;
   if (!dateStr) { alert('Please pick a date.'); return; }

   var provider = _aptGetProvider(providerId);
   var doctor   = provider && _aptGetDoctor(provider, doctorId);
   if (!doctor) { alert('Doctor not found.'); return; }

   var all = await AppDB.getAllAppointments();
   var active = (all || []).filter(function(r) {
      return r && r.doctor_id === doctor.id
                && r.date === dateStr
                && r.status === 'Confirmed';
   });
   if (active.length === 0) {
      alert('No active bookings to cancel for ' + doctor.name + ' on ' + _fmtDateLabel(dateStr) + '.');
      return;
   }
   var paidCount   = active.filter(function(r) { return r.is_paid && !r.is_refunded; }).length;
   var unpaidCount = active.length - paidCount;

   var summary = 'Cancel ' + active.length + ' booking' + (active.length === 1 ? '' : 's') + ' for ' + doctor.name + ' on ' + _fmtDateLabel(dateStr) + '?\n\n';
   if (paidCount > 0)   summary += '• ' + paidCount   + ' paid → full refund processed automatically\n';
   if (unpaidCount > 0) summary += '• ' + unpaidCount + ' unpaid → just cancelled\n';
   summary += '\nThis cannot be undone.';
   if (!confirm(summary)) return;

   var reason = prompt('Reason for cancellation (shown to patients):', 'Doctor unavailable due to emergency');
   if (reason === null) return;
   reason = (reason || 'Doctor unavailable').trim();

   var nowIso = new Date().toISOString();
   var ok = 0, fail = 0;
   for (var i = 0; i < active.length; i++) {
      var apt = active[i];
      var extra = {
         cancelled_by: 'hospital',
         cancellation_reason: reason
      };
      if (apt.is_paid && !apt.is_refunded) {
         extra.is_refunded   = true;
         extra.refund_amount = Number(apt.fee || 0);
         extra.refunded_at   = nowIso;
      }
      var success = await AppDB.updateAppointmentStatus(apt.apt_id, 'Cancelled', extra);
      if (success) ok++; else fail++;
   }

   alert('Cancelled ' + ok + ' of ' + active.length + ' booking' + (active.length === 1 ? '' : 's') +
         (fail > 0 ? ' (' + fail + ' failed — check console).' : '.'));
   _shopAptsCache = null;
   closeDayCancelModal();
   // Refresh any open Schedule view in case it was on the same date
   var activeBtn = document.querySelector('#schedDateButtons .apt-date-btn.active');
   if (activeBtn && _schedCtx && _schedCtx.date === dateStr) schedSelectDate(dateStr, activeBtn);
   // Refresh the Appointments tab if it's currently open
   if (typeof renderShopAppointments === 'function') renderShopAppointments(window._shopAptCurrentFilter);
}

// ── Owner-side reschedule ──
// Move a confirmed booking to a new date/slot without refund/repay churn.
// is_paid stays as-is; status stays Confirmed; new token issued via max+1 in
// the new slot; history appended to patient_reason for audit.
let _rescheduleCtx = null;

function openRescheduleModal(aptId) {
   var apt = (_shopAptsCache || []).find(function(a) { return a.apt_id === aptId; });
   if (!apt) { alert('Appointment not found.'); return; }
   var provider = _aptGetProvider(apt.provider_id);
   var doctor = provider && _aptGetDoctor(provider, apt.doctor_id);
   if (!doctor) { alert('Doctor not found for this booking.'); return; }

   _rescheduleCtx = { apt: apt, provider: provider, doctor: doctor, date: null, slot: null };

   document.getElementById('rescheduleCurrentInfo').innerHTML =
      '<strong>Currently:</strong> ' + apt.date + ' at ' + (apt.slot ? _formatSlot12(apt.slot) : 'Token mode') +
      '<br><strong>Doctor:</strong> ' + (apt.doctor_name || '') +
      '<br><strong>Patient:</strong> ' + (apt.patient_name || '—') + (apt.patient_phone ? ' (' + apt.patient_phone + ')' : '') +
      (apt.is_paid ? '<br><span style="color:#2e7d32;font-weight:600">✓ Already paid — money stays as-is, no refund needed</span>' : '');

   // Render next-7-day date buttons, vacation- & availability-aware
   var html = '';
   for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
      var label = i === 0 ? 'TODAY' : (i === 1 ? 'TMRW' : APT_DAYS[d.getDay()]);
      var monthShort = d.toLocaleDateString('en-IN', { month: 'short' });
      var dayIdx = d.getDay();
      var avail = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
      var onVac = _isOnVacation(doctor, dateStr);
      var off   = avail.length === 0 || onVac;
      var click = off ? '' : ' onclick="rescheduleSelectDate(\'' + dateStr + '\', this)"';
      var titleTxt = onVac ? 'Doctor on leave' : 'Doctor unavailable';
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="' + titleTxt + '"' : '';
      var leaveTag = onVac ? '<div style="font-size:0.62rem;color:#e65100;font-weight:700">🏖 ON LEAVE</div>' : '';
      html += '<div class="apt-date-btn"' + click + extra + '>' +
                 '<div class="apt-date-day">' + label + '</div>' +
                 '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
                 leaveTag +
              '</div>';
   }
   document.getElementById('rescheduleDateButtons').innerHTML = html;
   document.getElementById('rescheduleSlotSection').style.display = 'none';
   document.getElementById('rescheduleConfirmBtn').disabled = true;
   document.getElementById('rescheduleReason').value = '';
   document.getElementById('rescheduleMsg').textContent = '';
   document.getElementById('rescheduleAptId').value = aptId;
   document.getElementById('rescheduleModal').classList.remove('hidden');
}

function closeRescheduleModal() {
   document.getElementById('rescheduleModal').classList.add('hidden');
   _rescheduleCtx = null;
}

async function rescheduleSelectDate(dateStr, btn) {
   if (!_rescheduleCtx) return;
   _rescheduleCtx.date = dateStr;
   _rescheduleCtx.slot = null;
   document.querySelectorAll('#rescheduleDateButtons .apt-date-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('rescheduleConfirmBtn').disabled = true;

   var doctor  = _rescheduleCtx.doctor;
   var section = document.getElementById('rescheduleSlotSection');
   var btnsEl  = document.getElementById('rescheduleSlotButtons');
   section.style.display = 'block';
   btnsEl.innerHTML = '<p style="color:#999;font-size:0.85rem">Loading…</p>';

   var isTokenMode = doctor.booking_mode === 'token';
   var caps     = _doctorCaps(doctor);
   var existing = await AppDB.getDoctorBookings(doctor.id, dateStr);

   if (isTokenMode) {
      var totalDaily = (caps.dailyOnline || 0) + (caps.dailyOffline || 0);
      if (existing.length >= totalDaily) {
         btnsEl.innerHTML = '<p style="color:#c62828;font-size:0.88rem">Tokens are full for this day.</p>';
         return;
      }
      _rescheduleCtx.slot = '';
      btnsEl.innerHTML =
         '<div style="background:#e8f5e9;border:1px solid #a5d6a7;border-radius:10px;padding:12px;text-align:center">' +
            '<div style="font-size:0.85rem;color:#2e7d32">🎟 Token mode — token will be auto-assigned</div>' +
            '<div style="font-size:0.75rem;color:#666;margin-top:4px">' + existing.length + ' of ' + totalDaily + ' tokens used today</div>' +
         '</div>';
      document.getElementById('rescheduleConfirmBtn').disabled = false;
      return;
   }

   // Slot mode
   var d = new Date(dateStr + 'T00:00:00');
   var dayIdx  = d.getDay();
   var windows = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
   var now = new Date();
   var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0');
   var isToday = dateStr === todayStr;
   var countsBySlot = {};
   existing.forEach(function(b) { countsBySlot[b.slot] = (countsBySlot[b.slot] || 0) + 1; });

   var nowMin = isToday ? (now.getHours() * 60 + now.getMinutes()) : -1;
   var totalCap = (caps.slotOnline || 0) + (caps.slotOffline || 0);
   var slotHtml = '';
   var anyShown = false;
   windows.forEach(function(w) {
      var startMin = _hhmmToMin(w.start);
      var endMin   = _hhmmToMin(w.end);
      for (var t = startMin; t + caps.duration <= endMin; t += caps.duration) {
         var hh = Math.floor(t / 60);
         var mm = t % 60;
         var slot24 = String(hh).padStart(2,'0') + ':' + String(mm).padStart(2,'0');
         var hour12 = ((hh % 12) || 12);
         var label = hour12 + ':' + String(mm).padStart(2,'0') + ' ' + (hh < 12 ? 'AM' : 'PM');
         var count = countsBySlot[slot24] || 0;
         var full  = count >= totalCap;
         var isPast = isToday && (t + caps.duration) <= nowMin;
         anyShown = true;
         if (full) {
            slotHtml += '<button class="apt-slot-btn slot-full" disabled>' + label + '<br><small>Full</small></button>';
         } else if (isPast) {
            slotHtml += '<button class="apt-slot-btn slot-past" onclick="rescheduleSelectSlot(\'' + slot24 + '\', this)" title="Past slot">' +
                        label + '<br><small>(past) ' + (totalCap - count) + ' of ' + totalCap + '</small></button>';
         } else {
            slotHtml += '<button class="apt-slot-btn slot-available" onclick="rescheduleSelectSlot(\'' + slot24 + '\', this)">' +
                        label + '<br><small>' + (totalCap - count) + ' of ' + totalCap + ' left</small></button>';
         }
      }
   });

   btnsEl.innerHTML = anyShown
      ? slotHtml
      : '<p style="color:#999;font-size:0.85rem">Doctor has no availability on this date.</p>';
}

function rescheduleSelectSlot(slot, btn) {
   if (!_rescheduleCtx) return;
   _rescheduleCtx.slot = slot;
   document.querySelectorAll('#rescheduleSlotButtons .apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('rescheduleConfirmBtn').disabled = false;
}

async function confirmReschedule() {
   var ctx = _rescheduleCtx;
   if (!ctx || !ctx.date) return;
   var apt = ctx.apt;
   var newDate = ctx.date;
   var newSlot = ctx.slot || '';
   if (newDate === apt.date && newSlot === (apt.slot || '')) {
      document.getElementById('rescheduleMsg').textContent = 'Pick a different date or slot to reschedule.';
      return;
   }
   var reason = document.getElementById('rescheduleReason').value.trim();
   var slotLabel = newSlot ? _formatSlot12(newSlot) : 'Token';
   var oldSlotLabel = apt.slot ? _formatSlot12(apt.slot) : 'Token';
   if (!confirm('Reschedule from ' + apt.date + ' ' + oldSlotLabel + ' → ' + newDate + ' ' + slotLabel + '?')) return;

   // Compute new token — max+1 across all rows (incl. cancelled) for the new slot
   var allRows = await AppDB.getDoctorBookings(ctx.doctor.id, newDate, true);
   var poolRows = newSlot ? allRows.filter(function(b) { return b.slot === newSlot; }) : allRows;
   var newToken = poolRows.reduce(function(m, r) { return Math.max(m, Number(r.token) || 0); }, 0) + 1;

   // Append a history note to patient_reason
   var todayIso = new Date().toISOString().slice(0,10);
   var historyNote = '[Rescheduled from ' + apt.date + ' ' + oldSlotLabel +
                     ' → ' + newDate + ' ' + slotLabel +
                     ' on ' + todayIso + (reason ? ' — ' + reason : '') + ']';
   var newReason = apt.patient_reason ? (apt.patient_reason + ' ' + historyNote) : historyNote;

   var ok = await AppDB.updateAppointmentStatus(apt.apt_id, 'Confirmed', {
      date: newDate,
      slot: newSlot,
      token: newToken,
      patient_reason: newReason
   });

   if (!ok) {
      document.getElementById('rescheduleMsg').textContent = 'Failed to reschedule. Check console.';
      return;
   }

   closeRescheduleModal();
   _shopAptsCache = null;
   alert('✅ Rescheduled to ' + newDate + (newSlot ? ' at ' + slotLabel : '') + ' — new token T' + newToken);
   renderShopAppointments();
}

// Sweep past-date Confirmed bookings for the current owner and auto-mark them
// as No-show. Closes the abuse loophole where an owner forgetting to mark
// Complete/No-show lets the customer escape the no-show counter. False
// positives (patient actually attended, owner just forgot to click Complete)
// can be reverted via the ↩ Undo No-show button on the row.
async function _autoMarkStaleConfirmed() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return 0;
   var apts = await AppDB.getAppointmentsByOwner(user.email);
   var t = new Date();
   var todayStr = t.getFullYear() + '-' + String(t.getMonth()+1).padStart(2,'0') + '-' + String(t.getDate()).padStart(2,'0');
   var stale = (apts || []).filter(function(a) {
      return a.status === 'Confirmed' && a.date && a.date < todayStr && !a.is_followup;
   });
   if (stale.length === 0) return 0;
   var done = 0;
   for (var i = 0; i < stale.length; i++) {
      var ok = await AppDB.updateAppointmentStatus(stale[i].apt_id, 'No-show', {
         cancellation_reason: 'Auto-marked: no action by end of day'
      });
      if (ok) done++;
   }
   if (done > 0) _shopAptsCache = null;
   return done;
}

// Revert a No-show back to Confirmed. Real-world case: patient was marked
// No-show but then arrived late (traffic, ran out of fuel, etc.) — owner wants
// to undo the marking so they can mark Complete normally.
async function undoNoShow(aptId) {
   if (!confirm('Mark this appointment back to Confirmed?\n\nUse this if the patient turned up late (e.g. traffic jam).')) return;
   var ok = await AppDB.updateAppointmentStatus(aptId, 'Confirmed', {
      cancelled_at: null,
      cancelled_by: '',
      cancellation_reason: ''
   });
   if (!ok) { alert('Failed to update. Check console.'); return; }
   _shopAptsCache = null;
   renderShopAppointments(window._shopAptCurrentFilter);
}

// Flip is_paid=true without changing status. Used when the patient pays at
// reception but the consultation hasn't happened yet — they still need a receipt.
async function shopMarkPaid(aptId) {
   var apt = (_shopAptsCache || []).find(function(a) { return a.apt_id === aptId; });
   if (!apt) { alert('Appointment not found.'); return; }
   if (apt.is_paid) { alert('Already marked as paid.'); return; }
   if (!confirm('Mark fee of ₹' + (apt.fee || 0) + ' as paid? The patient will be able to print a receipt.')) return;
   var ok = await AppDB.updateAppointmentStatus(aptId, apt.status || 'Confirmed', { is_paid: true });
   if (!ok) { alert('Failed to update.'); return; }
   // Payment is the trigger for minting the permanent hospital patient ID.
   // No-show bookings don't burn an ID; only paid patients get one.
   try { await AppDB.ensureHospitalPatientId(apt.provider_id, apt.patient_phone, apt.patient_name); }
   catch (e) { console.error('ensureHospitalPatientId failed:', e); }
   _shopAptsCache = null;
   renderShopAppointments(window._shopAptCurrentFilter);
}

async function logout() {
   sessionStorage.removeItem('loggedInUser');
   try { await _sb.auth.signOut(); } catch (e) { /* fine if no session */ }
   window.location.href = 'login.html';
}

// ── MOBILE MENU ──
function toggleMenu() {
   document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.dropdown > a').forEach(link => {
   link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
         e.preventDefault();
         this.parentElement.classList.toggle('open');
      }
   });
});

// Seed admin first so isAdmin flag is ready before checkLogin reads it
seedAdmin();

if (document.getElementById('heroGreeting')) {
   checkLogin();
   updateCartUI();
   const si = document.getElementById('searchInput');
   if (si) si.value = '';
   // Open category if coming from wishlist "View" button
   const _cat = localStorage.getItem('_openCat');
   if (_cat) { localStorage.removeItem('_openCat'); setTimeout(() => showProducts(_cat), 50); }
}

// ── ADMIN STORES TAB ──
function renderAdminStores() {
   var container = document.getElementById('adminStoresContent');
   if (!container) return;

   var users     = getUsers();
   var allOrders = _db.orders;
   var settings  = getAdminSettings();
   var storeOwners = users.filter(function(u) { return u.role === 'storeowner'; });

   // Platform products
   var platformItems = [];
   Object.entries(products).forEach(function([catKey, cat]) {
      cat.items.forEach(function(item) { if (!item.storeId) platformItems.push(item); });
   });
   var platformOrders = allOrders.filter(function(o) { return !o.storeId; });
   var platformRevenue = platformOrders.reduce(function(s, o) { return s + (o.total || 0); }, 0);

   var html = '<div class="admin-stores-grid">';

   // Platform store card
   html += buildAdminStoreCard(null, settings.storeName || 'MyStore', '(Platform — admin managed)', platformItems.length, platformOrders.length, platformRevenue, false);

   // Store-owner cards
   storeOwners.forEach(function(u) {
      var storeItems = [];
      Object.entries(products).forEach(function([catKey, cat]) {
         cat.items.forEach(function(item) { if (item.storeId === u.email) storeItems.push(item); });
      });
      var storeOrders  = allOrders.filter(function(o) { return o.storeId === u.email; });
      var storeRevenue = storeOrders.reduce(function(s, o) { return s + (o.total || 0); }, 0);
      html += buildAdminStoreCard(u.email, u.storeName || u.name, u.email, storeItems.length, storeOrders.length, storeRevenue, u.blocked);
   });

   html += '</div>';

   if (storeOwners.length === 0 && platformItems.length === 0) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No stores or products yet.</p>';
   } else {
      container.innerHTML = html;
   }
}

function buildAdminStoreCard(storeId, storeName, ownerLabel, productCount, orderCount, revenue, isBlocked) {
   var storeIdJs   = storeId ? "'" + storeId.replace(/'/g, "\\'") + "'" : 'null';
   var storeNameJs = storeName.replace(/'/g, "\\'");

   // Preview images
   var previewItems = [];
   Object.entries(products).forEach(function([catKey, cat]) {
      cat.items.forEach(function(item) {
         var match = storeId === null ? !item.storeId : item.storeId === storeId;
         if (match && previewItems.length < 4) previewItems.push(item);
      });
   });
   var previewHtml = previewItems.map(function(item) {
      return '<img src="' + item.img + '" alt="" onerror="this.src=\'https://placehold.co/80x80?text=Item\'"/>';
   }).join('');
   var previewClass = 'store-card-preview store-card-preview-' + Math.min(previewItems.length, 4);

   var blockedBadge = isBlocked ? '<span class="um-badge um-badge-blocked" style="margin-left:8px">Blocked</span>' : '';

   return '<div class="admin-store-card">' +
             '<div class="' + previewClass + '">' + previewHtml + '</div>' +
             '<div class="admin-store-card-body">' +
                '<div class="admin-store-card-name">' + storeName + blockedBadge + '</div>' +
                '<div class="admin-store-card-owner">' + ownerLabel + '</div>' +
                '<div class="admin-store-card-stats">' +
                   '<div class="admin-store-stat"><div class="admin-store-stat-num">' + productCount + '</div><div class="admin-store-stat-label">Products</div></div>' +
                   '<div class="admin-store-stat"><div class="admin-store-stat-num">' + orderCount + '</div><div class="admin-store-stat-label">Orders</div></div>' +
                   '<div class="admin-store-stat"><div class="admin-store-stat-num">₹' + revenue.toLocaleString('en-IN') + '</div><div class="admin-store-stat-label">Revenue</div></div>' +
                '</div>' +
                '<button class="admin-store-view-btn" onclick="switchAdminTab(\'products\');filterAdminProductsByStore(' + storeIdJs + ',\'' + storeNameJs + '\')">🛍️ Products</button>' +
                '<button class="admin-store-orders-btn" onclick="showStoreOrders(' + storeIdJs + ',\'' + storeNameJs + '\')">📋 Orders</button>' +
             '</div>' +
          '</div>';
}

function filterAdminProductsByStore(storeId, storeName) {
   var titleEl = document.querySelector('#tab-products .admin-page-title h1');
   if (titleEl) titleEl.textContent = '⚙️ ' + storeName + ' — Products';
   renderAdminGrid(storeId);
}

// ── ADMIN PANEL ──
let _editId = null;
let _addMode = false;

async function initAdmin() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user || !isAdmin(user.email)) { window.location.href = 'login.html'; return; }
   await initDB();
   document.getElementById('adminUserName').textContent = user.name;
   populateAdminFilterDropdowns();
   renderAdminGrid();
   // sync color pickers when user types in hex fields
   const bgPicker  = document.getElementById('set-announcementColor');
   const txtPicker = document.getElementById('set-announcementTextColor');
   if (bgPicker)  bgPicker.addEventListener('input',  () => { document.getElementById('set-announcementColorHex').value     = bgPicker.value; });
   if (txtPicker) txtPicker.addEventListener('input', () => { document.getElementById('set-announcementTextColorHex').value = txtPicker.value; });
}

function populateAdminFilterDropdowns() {
   // Category dropdown — grouped by main cat
   var catSel = document.getElementById('adminCatFilter');
   if (catSel && catSel.options.length <= 1) {
      Object.entries(MAIN_CATS).forEach(function(entry) {
         var mc = entry[1];
         var grp = document.createElement('optgroup');
         grp.label = mc.icon + ' ' + mc.label;
         mc.keys.forEach(function(k) {
            if (!products[k]) return;
            var opt = document.createElement('option');
            opt.value = k;
            opt.textContent = getCatIcon(k) + ' ' + products[k].title;
            grp.appendChild(opt);
         });
         catSel.appendChild(grp);
      });
   }
   // Store dropdown
   var storeSel = document.getElementById('adminStoreFilter');
   if (storeSel && storeSel.options.length <= 1) {
      var opt = document.createElement('option');
      opt.value = '__platform__';
      opt.textContent = '🏠 Platform Store';
      storeSel.appendChild(opt);
      getUsers().filter(function(u) { return u.role === 'storeowner' && !u.blocked; }).forEach(function(u) {
         var o = document.createElement('option');
         o.value = u.email;
         o.textContent = '🏪 ' + (u.storeName || u.name);
         storeSel.appendChild(o);
      });
   }
}

function clearAdminFilters() {
   var s = document.getElementById('adminSearchInput');
   var c = document.getElementById('adminCatFilter');
   var t = document.getElementById('adminStoreFilter');
   if (s) s.value = '';
   if (c) c.value = '';
   if (t) t.value = '__all__';
   renderAdminGrid();
}

function renderAdminGrid(filterStoreId) {
   var ov = _db.overrides;
   var container = document.getElementById('adminContent');
   container.innerHTML = '';

   // Read filter bar values (if present on page)
   var searchQ   = (document.getElementById('adminSearchInput')  || {}).value || '';
   var catFilter = (document.getElementById('adminCatFilter')     || {}).value || '';
   var storeDropVal = (document.getElementById('adminStoreFilter') || {}).value || '__all__';

   // Determine effective storeId filter:
   // 1. If called with an explicit filterStoreId arg (from Stores tab), use that
   // 2. Otherwise use the dropdown
   var effectiveStore; // undefined = no filter
   if (filterStoreId !== undefined) {
      effectiveStore = filterStoreId; // null = platform, string = store email
   } else if (storeDropVal !== '__all__') {
      effectiveStore = storeDropVal === '__platform__' ? null : storeDropVal;
   }

   // Show/hide clear button
   var clearBtn = document.getElementById('adminFilterClearBtn');
   var hasFilter = searchQ || catFilter || storeDropVal !== '__all__';
   if (clearBtn) clearBtn.style.display = hasFilter ? 'inline-flex' : 'none';

   // Store filter banner (when coming from Stores tab)
   if (filterStoreId !== undefined) {
      var storeLabelName = filterStoreId === null ? (getAdminSettings().storeName || 'MyStore') : getStoreName(filterStoreId);
      var banner = document.createElement('div');
      banner.className = 'admin-store-filter-banner';
      banner.innerHTML = '🏪 Showing products for: <strong>' + storeLabelName + '</strong> &nbsp;' +
                         '<button onclick="renderAdminGrid()">✕ Clear Filter</button>';
      container.appendChild(banner);
   }

   var searchLower = searchQ.toLowerCase().trim();

   // Helper: does item pass all active filters?
   function itemMatches(item) {
      if (searchLower && item.name.toLowerCase().indexOf(searchLower) === -1) return false;
      if (effectiveStore !== undefined) {
         var sid = item.storeId || null;
         if (effectiveStore === null && sid !== null) return false;
         if (effectiveStore !== null && sid !== effectiveStore) return false;
      }
      return true;
   }

   var anyResults = false;

   // Render grouped by main category
   Object.entries(MAIN_CATS).forEach(function(entry) {
      var mcKey = entry[0];
      var mc    = entry[1];

      // Respect category dropdown filter
      var keysToRender = catFilter ? mc.keys.filter(function(k) { return k === catFilter; }) : mc.keys;
      if (!keysToRender.length) return;

      var totalItems = keysToRender.reduce(function(sum, k) {
         var cat = products[k];
         if (!cat) return sum;
         return sum + cat.items.filter(itemMatches).length;
      }, 0);
      if (totalItems === 0) return; // skip empty groups

      var group = document.createElement('div');
      group.className = 'admin-maincat-group';

      // Main category header
      var mcHeader = document.createElement('div');
      mcHeader.className = 'admin-maincat-header';
      mcHeader.innerHTML = '<span class="admin-maincat-icon">' + mc.icon + '</span>' +
                           '<span class="admin-maincat-label">' + mc.label + '</span>' +
                           '<span class="admin-maincat-count">' + mc.keys.length + ' sub-categories · ' + totalItems + ' items</span>';
      group.appendChild(mcHeader);

      // Sub-category sections
      keysToRender.forEach(function(catKey) {
         var catData = products[catKey];
         if (!catData) return;

         var section = document.createElement('div');
         section.className = 'admin-section';

         var secHeader = document.createElement('div');
         secHeader.className = 'admin-section-header';
         secHeader.innerHTML = '<h2 class="admin-section-title">' + getCatIcon(catKey) + ' ' + catData.title + '</h2>';
         var addBtn = document.createElement('button');
         addBtn.className = 'admin-add-item-btn';
         addBtn.textContent = '➕ Add Item';
         addBtn.onclick = (function(k) { return function() { openAddModal(k); }; })(catKey);
         secHeader.appendChild(addBtn);
         section.appendChild(secHeader);

         var grid = document.createElement('div');
         grid.className = 'admin-product-grid';

         catData.items.forEach(function(item) {
            if (!itemMatches(item)) return;
            var isCustom = item.id.startsWith('custom_');
            var o = ov[item.id] || {};
            var displayImg  = o.img  || item.img;
            var displayName = o.name || item.name;
            var displayDesc = o.desc || item.desc || '';
            var modified    = !isCustom && !!ov[item.id];
            // Resolve variants: override > item's own
            var currentVars = (o.variants && o.variants.length) ? o.variants
                            : (item.variants && item.variants.length) ? item.variants : null;
            var displayPrice;
            if (currentVars) {
               var prices = currentVars.map(function(v) { return v.price; });
               var minP = Math.min.apply(null, prices), maxP = Math.max.apply(null, prices);
               displayPrice = '₹' + minP.toLocaleString('en-IN') + (minP !== maxP ? ' – ₹' + maxP.toLocaleString('en-IN') : '') +
                              ' <span style="font-size:0.75rem;color:#888">(' + currentVars.length + ' sizes)</span>';
            } else {
               var rawPrice = o.price !== undefined ? o.price : (item.price || item.pricePerLitre || 0);
               displayPrice = '₹' + rawPrice.toLocaleString('en-IN');
            }

            var card = document.createElement('div');
            card.className = 'admin-product-card' + (modified ? ' modified' : '') + (isCustom ? ' custom' : '');

            var badges = (isCustom ? '<span class="admin-custom-badge">Custom</span>' : '') +
                         (modified ? '<span class="admin-modified-badge">Modified</span>' : '');

            card.innerHTML = '<div class="admin-card-img-wrap">' +
                                '<img src="' + displayImg + '" alt="' + displayName + '" loading="lazy" ' +
                                     'onerror="this.src=\'https://placehold.co/200x140?text=No+Image\'"/>' +
                                badges +
                             '</div>' +
                             '<div class="admin-card-info">' +
                                '<div class="admin-card-name">' + displayName + '</div>' +
                                '<div class="admin-card-price">' + displayPrice + '</div>' +
                                '<div class="admin-card-desc">' + displayDesc + '</div>' +
                             '</div>' +
                             '<div class="admin-card-actions">' +
                                '<button class="admin-edit-btn" onclick="openEditModal(\'' + item.id + '\',\'' + catKey + '\')">&#9999;&#65039; Edit</button>' +
                                (isCustom ? '<button class="admin-delete-btn" onclick="deleteCustomProduct(\'' + item.id + '\')">&#128465;&#65039;</button>' : '') +
                             '</div>';
            grid.appendChild(card);
         });

         if (grid.children.length === 0) return; // skip empty sections
         section.appendChild(grid);
         group.appendChild(section);
         anyResults = true;
      });

      if (group.querySelectorAll('.admin-product-card').length === 0) return;
      container.appendChild(group);
   });

   if (!anyResults && container.children.length === 0) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px;font-size:0.95rem">No products match your filters.</p>';
   }
}

function populateStoreOwnerDropdown(currentStoreId) {
   var sel = document.getElementById('modalStoreOwner');
   if (!sel) return;
   var owners = getUsers().filter(function(u) { return u.role === 'storeowner' && !isAdmin(u.email); });
   sel.innerHTML = '<option value="">Platform Store (no specific owner)</option>' +
      owners.map(function(u) {
         var sn = u.storeName || u.name;
         return '<option value="' + u.email + '"' + (currentStoreId === u.email ? ' selected' : '') + '>' + sn + ' (' + u.email + ')</option>';
      }).join('');
}

function openAddModal(catKey) {
   _editId  = null;
   _addMode = true;
   document.getElementById('modalTitle').textContent  = '➕ Add New Product';
   document.getElementById('modalImgUrl').value       = '';
   document.getElementById('modalName').value         = '';
   document.getElementById('modalPrice').value        = '';
   document.getElementById('modalDesc').value         = '';
   document.getElementById('modalBadge').value        = 'New';
   document.getElementById('modalPreviewImg').src     = 'https://placehold.co/400x180?text=Image+Preview';

   // Build grouped <optgroup> dropdown
   var sel = document.getElementById('modalCatKey');
   sel.innerHTML = '';
   Object.entries(MAIN_CATS).forEach(function(entry) {
      var mcKey = entry[0];
      var mc    = entry[1];
      var group = document.createElement('optgroup');
      group.label = mc.icon + ' ' + mc.label;
      mc.keys.forEach(function(k) {
         var catData = products[k];
         if (!catData) return;
         var opt = document.createElement('option');
         opt.value = k;
         opt.textContent = getCatIcon(k) + ' ' + catData.title;
         if (k === catKey) opt.selected = true;
         group.appendChild(opt);
      });
      sel.appendChild(group);
   });

   document.getElementById('catSelectRow').classList.remove('hidden');
   document.getElementById('badgeRow').classList.remove('hidden');
   document.getElementById('adminBtnSave').textContent = '➕ Add Product';
   document.getElementById('adminBtnReset').classList.add('hidden');
   // Reset variants UI
   document.getElementById('variantsToggleRow').classList.remove('hidden');
   document.getElementById('modalHasVariants').checked = false;
   document.getElementById('variantsSectionRow').classList.add('hidden');
   document.getElementById('variantsList').innerHTML = '';
   document.getElementById('modalPriceRow').classList.remove('hidden');
   populateStoreOwnerDropdown('');
   document.getElementById('editModal').classList.remove('hidden');
}

function openEditModal(itemId, catKey) {
   _addMode = false;
   const cat  = products[catKey];
   const item = cat.items.find(i => i.id === itemId);
   if (!item) return;
   const ov       = _db.overrides;
   const o        = ov[itemId] || {};
   _editId        = itemId;

   // Resolve current variants: override takes priority over item's own
   const currentVariants = o.variants || item.variants || null;
   const hasVars          = currentVariants && currentVariants.length > 0;

   document.getElementById('modalTitle').textContent = 'Edit: ' + (o.name || item.name);
   document.getElementById('modalImgUrl').value  = o.img  || item.img  || '';
   document.getElementById('modalName').value    = o.name || item.name || '';
   document.getElementById('modalDesc').value    = o.desc || item.desc || '';
   document.getElementById('modalBadge').value   = o.badge || item.badge || '';
   document.getElementById('modalPreviewImg').src = o.img  || item.img  || '';
   document.getElementById('catSelectRow').classList.add('hidden');
   document.getElementById('badgeRow').classList.remove('hidden');
   document.getElementById('adminBtnSave').textContent  = '💾 Save Changes';
   document.getElementById('adminBtnReset').classList.remove('hidden');

   // Variants vs plain price
   document.getElementById('variantsToggleRow').classList.add('hidden'); // toggle hidden in edit mode
   document.getElementById('variantsList').innerHTML = '';
   if (hasVars) {
      // Show variants section pre-populated; hide price field
      document.getElementById('modalHasVariants').checked = true;
      document.getElementById('modalPriceRow').classList.add('hidden');
      document.getElementById('variantsSectionRow').classList.remove('hidden');
      currentVariants.forEach(function(v) { addVariantRow(v.label, v.price); });
      document.getElementById('modalPrice').value = '';
   } else {
      document.getElementById('modalHasVariants').checked = false;
      document.getElementById('variantsSectionRow').classList.add('hidden');
      document.getElementById('modalPriceRow').classList.remove('hidden');
      document.getElementById('modalPrice').value = o.price !== undefined ? o.price : (item.price || item.pricePerLitre || '');
   }

   populateStoreOwnerDropdown(o.storeId || item.storeId || '');
   document.getElementById('editModal').classList.remove('hidden');
}

function previewModalImg() {
   const url = document.getElementById('modalImgUrl').value.trim();
   if (url) document.getElementById('modalPreviewImg').src = url;
}

function saveProductEdit() {
   if (_addMode) { saveNewProduct(); return; }
   if (!_editId) return;

   const isVariantMode = document.getElementById('modalHasVariants').checked;
   let price, variants;
   if (isVariantMode) {
      variants = getVariantsFromModal();
      if (variants.length === 0) { alert('Please add at least one variant.'); return; }
      price = variants[0].price;
   } else {
      price = parseFloat(document.getElementById('modalPrice').value);
      if (isNaN(price)) { alert('Price is required.'); return; }
   }

   var ov = _db.overrides;
   var sel       = document.getElementById('modalStoreOwner');
   var storeId   = sel ? sel.value : '';
   var storeName = storeId ? getStoreName(storeId) : '';
   ov[_editId] = {
      img:       document.getElementById('modalImgUrl').value.trim(),
      name:      document.getElementById('modalName').value.trim(),
      price:     price,
      variants:  isVariantMode ? variants : undefined,
      desc:      document.getElementById('modalDesc').value.trim(),
      badge:     document.getElementById('modalBadge').value.trim(),
      storeId:   storeId,
      storeName: storeName
   };
   AppDB.upsertProductOverride(_editId, ov[_editId]);

   // Apply override immediately to in-memory products so store updates without reload
   Object.values(products).forEach(function(cat) {
      var it = cat.items.find(function(i) { return i.id === _editId; });
      if (!it) return;
      var o = ov[_editId];
      if (o.img)      it.img      = o.img;
      if (o.name)     it.name     = o.name;
      if (o.desc)     it.desc     = o.desc;
      if (o.badge)    it.badge    = o.badge;
      it.price    = o.price;
      if (isVariantMode) it.variants = o.variants;
      else               delete it.variants;
      if (o.storeId)   it.storeId   = o.storeId;
      if (o.storeName) it.storeName = o.storeName;
   });
   closeEditModal();
   renderAdminGrid();
   showAdminToast('✅ Saved! Changes will appear in the store.');
}

// ── VARIANTS HELPERS (admin modal) ──
function toggleVariantsSection() {
   var checked = document.getElementById('modalHasVariants').checked;
   document.getElementById('variantsSectionRow').classList.toggle('hidden', !checked);
   document.getElementById('modalPriceRow').classList.toggle('hidden', checked);
   if (checked && document.getElementById('variantsList').children.length === 0) {
      addVariantRow();
   }
}

function addVariantRow(lbl, prc) {
   var list = document.getElementById('variantsList');
   var row  = document.createElement('div');
   row.className = 'variant-input-row';
   row.innerHTML =
      '<input type="text"   class="variant-label-input" placeholder="e.g. 1kg, 500g, Small" value="' + (lbl || '') + '"/>' +
      '<input type="number" class="variant-price-input" placeholder="₹ Price" min="0" value="' + (prc !== undefined ? prc : '') + '"/>' +
      '<button type="button" class="variant-remove-btn" onclick="this.closest(\'.variant-input-row\').remove()">✕</button>';
   list.appendChild(row);
}

function getVariantsFromModal() {
   var rows     = document.querySelectorAll('#variantsList .variant-input-row');
   var variants = [];
   rows.forEach(function(row) {
      var lbl = row.querySelector('.variant-label-input').value.trim();
      var prc = parseFloat(row.querySelector('.variant-price-input').value);
      if (lbl && !isNaN(prc) && prc >= 0) variants.push({ label: lbl, price: prc });
   });
   return variants;
}

function saveNewProduct() {
   const name = document.getElementById('modalName').value.trim();
   if (!name) { alert('Product Name is required.'); return; }

   const hasVariants = document.getElementById('modalHasVariants').checked;
   let price, variants;
   if (hasVariants) {
      variants = getVariantsFromModal();
      if (variants.length === 0) { alert('Please add at least one variant with a label and price.'); return; }
      price = variants[0].price;
   } else {
      price = parseFloat(document.getElementById('modalPrice').value);
      if (isNaN(price)) { alert('Price is required.'); return; }
   }

   const catKey = document.getElementById('modalCatKey').value;
   const nameLower = name.toLowerCase();

   // Case-insensitive duplicate check within the same category
   if (products[catKey]) {
      const ov = _db.overrides;
      const duplicate = products[catKey].items.find(function(i) {
         var displayName = (ov[i.id] && ov[i.id].name) ? ov[i.id].name : i.name;
         return displayName.toLowerCase() === nameLower;
      });
      if (duplicate) {
         const ov_name = (ov[duplicate.id] && ov[duplicate.id].name) ? ov[duplicate.id].name : duplicate.name;
         if (!confirm('"' + ov_name + '" already exists in this category.\n\nAdd anyway as a separate item?')) return;
      }
   }

   var selOwner  = document.getElementById('modalStoreOwner');
   var storeId   = selOwner ? selOwner.value : '';
   var storeName = storeId ? getStoreName(storeId) : '';
   const newItem = {
      id:        'custom_' + Date.now(),
      catKey:    catKey,
      name,
      price,
      variants:  hasVariants ? variants : undefined,
      desc:      document.getElementById('modalDesc').value.trim(),
      img:       document.getElementById('modalImgUrl').value.trim() || 'https://placehold.co/400x300?text=No+Image',
      badge:     document.getElementById('modalBadge').value.trim() || 'New',
      storeId:   storeId || null,
      storeName: storeName || null
   };
   var dbRow = {
      id:          newItem.id,
      store_id:    '__platform__',
      category:    newItem.catKey,
      name:        newItem.name,
      price:       newItem.price,
      description: newItem.desc,
      image:       newItem.img,
      badge:       newItem.badge,
      variants:    newItem.variants || null,
      store_name:  null
   };
   _db.storeProducts.push(dbRow);
   AppDB.upsertProduct(dbRow);
   // Also push into in-memory products so it appears immediately without reload
   if (products[newItem.catKey] && !products[newItem.catKey].items.find(function(i) { return i.id === newItem.id; })) {
      products[newItem.catKey].items.push({
         id: newItem.id, name: newItem.name, price: newItem.price,
         variants: newItem.variants || undefined,
         desc: newItem.desc, img: newItem.img, badge: newItem.badge || 'New',
         storeId: newItem.storeId || null, storeName: newItem.storeName || null
      });
   }
   closeEditModal();
   renderAdminGrid();
   showAdminToast('✅ New product added to store!');
}

function deleteCustomProduct(id) {
   if (!confirm('Delete this product from the store?')) return;
   _db.storeProducts = _db.storeProducts.filter(function(p) { return p.id !== id; });
   AppDB.deleteProduct(id);
   // Remove from in-memory products immediately
   Object.values(products).forEach(function(cat) {
      cat.items = cat.items.filter(function(i) { return i.id !== id; });
   });
   renderAdminGrid();
   showAdminToast('🗑️ Product deleted.');
}

function resetProductEdit() {
   if (!_editId) return;
   delete _db.overrides[_editId];
   AppDB.deleteProductOverride(_editId);
   closeEditModal();
   renderAdminGrid();
   showAdminToast('↺ Reset to original defaults.');
}

function closeEditModal() {
   document.getElementById('editModal').classList.add('hidden');
   _editId  = null;
   _addMode = false;
}

function handleModalOverlayClick(e) {
   if (e.target.id === 'editModal') closeEditModal();
}

function showAdminToast(msg) {
   const t = document.getElementById('adminToast');
   if (!t) return;
   t.textContent = msg;
   t.classList.remove('hidden');
   setTimeout(() => t.classList.add('hidden'), 2800);
}

// ── ADMIN TABS ──
async function switchAdminTab(tab) {
   ['products', 'stores', 'catalog', 'orders', 'appointments', 'billing', 'settings', 'users'].forEach(function(t) {
      var el  = document.getElementById('tab-' + t);
      var btn = document.getElementById('tab-' + t + '-btn');
      if (el)  el.classList.toggle('hidden', t !== tab);
      if (btn) btn.classList.toggle('active', t === tab);
   });
   // Wait for initDB to finish before any tab tries to read _db — prevents
   // empty-form race condition where Settings tab loaded before fetch returned.
   if (typeof initDB === 'function') { try { await initDB(); } catch (e) {} }
   if (tab === 'settings')     loadSettingsForm();
   if (tab === 'users')        refreshAndRenderUsers();
   if (tab === 'stores')       switchStoreAdminSub('categories');
   if (tab === 'catalog')      { _catalogCurrentCat = null; _catalogItemsCache = []; document.getElementById('catalogItemsView').classList.add('hidden'); document.getElementById('catalogCategoriesView').classList.remove('hidden'); renderCatalogCategoriesGrid(); }
   if (tab === 'orders')       renderAdminOrders();
   if (tab === 'appointments') switchAptAdminSub('categories');
   if (tab === 'billing')      renderBillingAdmin();
}

// ── ADMIN: Billing — commission owed per business partner / provider ──
// Each appointment provider has its own commission setting (percent or fixed_monthly).
// Product-only owners fall back to user-level commission_rate, then global Settings rate.
async function renderBillingAdmin() {
   var container = document.getElementById('billingContent');
   if (!container) return;
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';

   await initDB();
   await loadAptProviders(true);
   var settings = getAdminSettings();
   var globalRate = parseFloat(settings.commissionRate) || 0;

   var df = _readDateFilter('billingDateFilter', null, 'billingRangeFrom', 'billingRangeTo');

   // ORDERS — group by storeId (= partner email)
   var orders = (_db.orders || []).filter(function(o) {
      return o.status === 'Completed' && _isDateInRange(o.date || o.created_at || o.timestamp, df.range, df);
   });

   // APPOINTMENTS — fetch and group by provider's owner_email
   var apts = await AppDB.getAllAppointments();
   apts = apts.filter(function(a) {
      return a.status === 'Completed' && _isDateInRange(a.date, df.range, df);
   });
   var providerById = {};
   (_aptProvidersCache || []).forEach(function(p) { providerById[p.id] = p; });

   // Aggregate revenue per provider (appointment-side) and per storeId (product-side).
   // Skip cancelled/no-show rows and subtract refund amounts from the revenue base so
   // commission isn't owed on money the hospital had to give back.
   var perProvider = {};   // provider_id → { count, revenue }
   apts.forEach(function(a) {
      if (!providerById[a.provider_id]) return;
      if (a.status === 'Cancelled' || a.status === 'No-show') return;
      var pid = a.provider_id;
      if (!perProvider[pid]) perProvider[pid] = { count: 0, revenue: 0 };
      perProvider[pid].count   += 1;
      perProvider[pid].revenue += (a.fee || 0) - Number(a.refund_amount || 0);
   });
   var perStoreOrders = {};
   orders.forEach(function(o) {
      if (!o.storeId) return;
      var sid = o.storeId.toLowerCase();
      if (!perStoreOrders[sid]) perStoreOrders[sid] = { count: 0, revenue: 0, name: '' };
      perStoreOrders[sid].count   += 1;
      perStoreOrders[sid].revenue += (o.total || 0);
      if (!perStoreOrders[sid].name && o.storeName) perStoreOrders[sid].name = o.storeName;
   });

   var users = getUsers();
   var billingRows = [];

   // One row per provider (appointment side)
   (_aptProvidersCache || []).forEach(function(p) {
      var stats = perProvider[p.id];
      var hasFixedFee = (p.commission_type === 'fixed_monthly') && (p.commission_value > 0);
      // Show provider if it has bookings in the period OR it has a fixed monthly fee
      if (!stats && !hasFixedFee) return;
      var count   = stats ? stats.count   : 0;
      var revenue = stats ? stats.revenue : 0;
      var ctype   = p.commission_type || 'percent';
      var cval    = Number(p.commission_value) || 0;
      var commission, rateLabel;
      if (ctype === 'fixed_monthly') {
         commission = cval;
         rateLabel  = '<strong>₹' + cval.toLocaleString('en-IN') + '</strong>/mo';
      } else {
         commission = Math.round(revenue * cval) / 100;
         rateLabel  = '<strong>' + cval + '%</strong>';
      }
      var pidJs = p.id.replace(/'/g, "\\'");
      billingRows.push({
         sortName: p.name,
         html: '<tr>' +
                  '<td><div class="apt-tbl-name">' + p.name + '</div>' +
                      '<div class="apt-tbl-sub">' + (p.owner_email || '<em style="color:#999">Unassigned</em>') + '</div></td>' +
                  '<td style="text-align:center">0</td>' +
                  '<td style="text-align:center">' + count + '</td>' +
                  '<td style="text-align:right;font-weight:600">₹' + revenue.toLocaleString('en-IN') + '</td>' +
                  '<td style="text-align:center">' + rateLabel + ' ' +
                     '<button class="apt-view-btn" style="padding:2px 8px;font-size:0.72rem;margin-left:4px" onclick="openAptProviderModal(\'' + pidJs + '\')">✏️</button>' +
                  '</td>' +
                  '<td style="text-align:right;font-weight:700;color:#1a73e8">₹' + commission.toLocaleString('en-IN') + '</td>' +
               '</tr>',
         revenue: revenue, commission: commission, count: count, isAppt: true,
         csv: {
            'Partner Name'    : p.name,
            'Owner Email'     : p.owner_email || '',
            'Type'            : 'Appointments (' + (p.category || '') + ')',
            'Orders Count'    : 0,
            'Bookings Count'  : count,
            'Revenue (Rs)'    : revenue,
            'Commission Type' : (p.commission_type || 'percent'),
            'Commission Value': cval,
            'Commission Owed (Rs)': commission
         }
      });
   });

   // One row per product-selling store (product side)
   Object.keys(perStoreOrders).forEach(function(email) {
      var b = perStoreOrders[email];
      var u = users.find(function(x) { return x.email.toLowerCase() === email; });
      var rate = (u && u.commissionRate != null) ? u.commissionRate : globalRate;
      var commission = Math.round(b.revenue * rate) / 100;
      var emailJs = email.replace(/'/g, "\\'");
      var name = b.name || (u && (u.storeName || u.name)) || email;
      billingRows.push({
         sortName: name,
         html: '<tr>' +
                  '<td><div class="apt-tbl-name">' + name + '</div>' +
                      '<div class="apt-tbl-sub">' + email + ' <small style="color:#888">(product seller)</small></div></td>' +
                  '<td style="text-align:center">' + b.count + '</td>' +
                  '<td style="text-align:center">0</td>' +
                  '<td style="text-align:right;font-weight:600">₹' + b.revenue.toLocaleString('en-IN') + '</td>' +
                  '<td style="text-align:center"><strong>' + rate + '%</strong>' +
                     (u && u.commissionRate == null ? ' <small style="color:#888">(global)</small>' : '') +
                     ' <button class="apt-view-btn" style="padding:2px 8px;font-size:0.72rem;margin-left:4px" onclick="editPartnerRate(\'' + emailJs + '\')">✏️</button>' +
                  '</td>' +
                  '<td style="text-align:right;font-weight:700;color:#1a73e8">₹' + commission.toLocaleString('en-IN') + '</td>' +
               '</tr>',
         revenue: b.revenue, commission: commission, count: b.count, isAppt: false,
         csv: {
            'Partner Name'    : name,
            'Owner Email'     : email,
            'Type'            : 'Products',
            'Orders Count'    : b.count,
            'Bookings Count'  : 0,
            'Revenue (Rs)'    : b.revenue,
            'Commission Type' : 'percent',
            'Commission Value': rate,
            'Commission Owed (Rs)': commission
         }
      });
   });
   window._billingExportRows = billingRows.map(function(r){ return r.csv; });

   if (!billingRows.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No completed orders or appointments in the selected period.</p>';
      return;
   }

   billingRows.sort(function(a, b) { return a.sortName.localeCompare(b.sortName); });

   var grandRevenue = billingRows.reduce(function(s, r) { return s + r.revenue; }, 0);
   var grandCommission = billingRows.reduce(function(s, r) { return s + r.commission; }, 0);
   var totalOrders = billingRows.filter(function(r){return !r.isAppt;}).reduce(function(s,r){return s+r.count;}, 0);
   var totalApts   = billingRows.filter(function(r){return r.isAppt;}).reduce(function(s,r){return s+r.count;}, 0);

   container.innerHTML =
      '<div style="display:flex;gap:1.5rem;padding:0.8rem 0 1rem;font-size:0.92rem;color:#444;flex-wrap:wrap">' +
         '<div>Global rate: <strong>' + globalRate + '%</strong>' + (globalRate === 0 ? ' <small style="color:#c62828">(set in Settings)</small>' : '') + '</div>' +
         '<div>' + billingRows.length + ' row' + (billingRows.length === 1 ? '' : 's') + '</div>' +
         '<div>' + totalOrders + ' orders · ' + totalApts + ' appointments</div>' +
         '<div>Total Revenue: <strong>₹' + grandRevenue.toLocaleString('en-IN') + '</strong></div>' +
         '<div>Total Commission: <strong style="color:#1a73e8">₹' + grandCommission.toLocaleString('en-IN') + '</strong></div>' +
      '</div>' +
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th>Provider / Store</th>' +
              '<th style="text-align:center">Orders</th>' +
              '<th style="text-align:center">Appointments</th>' +
              '<th style="text-align:right">Revenue</th>' +
              '<th style="text-align:center">Rate / Fee</th>' +
              '<th style="text-align:right">Commission Owed</th>' +
           '</tr></thead>' +
           '<tbody>' + billingRows.map(function(r) { return r.html; }).join('') + '</tbody>' +
        '</table>' +
      '</div>';
}

async function editPartnerRate(email) {
   var users = getUsers();
   var u = users.find(function(x) { return x.email.toLowerCase() === email.toLowerCase(); });
   var settings = getAdminSettings();
   var globalRate = parseFloat(settings.commissionRate) || 0;
   var current = (u && u.commissionRate != null) ? u.commissionRate : '';
   var input = prompt(
      'Commission rate (%) for ' + email + '\n\n' +
      'Leave blank to use the global rate (' + globalRate + '%).\n' +
      'Enter a number to override (e.g. 3 for 3%, 7.5 for 7.5%).',
      current
   );
   if (input === null) return;
   var trimmed = String(input).trim();
   var newRate = null;
   if (trimmed !== '') {
      var n = parseFloat(trimmed);
      if (isNaN(n) || n < 0 || n > 100) { alert('Please enter a number between 0 and 100, or leave blank.'); return; }
      newRate = n;
   }
   var ok = await AppDB.updateUser(email, { commissionRate: newRate });
   if (!ok) { alert('Failed to update rate.'); return; }
   // Refresh in-memory users cache and re-render
   if (u) u.commissionRate = newRate;
   renderBillingAdmin();
}

// ── ADMIN: All Orders across every store ──
async function renderAdminOrders() {
   var container = document.getElementById('adminOrdersContent');
   if (!container) return;
   // Live: when ANY orders row changes anywhere, re-fetch fresh + re-render.
   // (Previously this just called renderAdminOrders which used cached _db.orders
   //  from initDB, so new orders only appeared on a manual page refresh.)
   _liveSubscribe('adminOrders', 'orders', function() {
      AppDB.getAllOrders().then(function(rows) {
         _db.orders = rows || [];
         renderAdminOrders();
      });
   });

   await initDB();
   // Always pull a fresh snapshot — _db.orders may be stale if the admin
   // loaded the page before the customer placed the order (realtime only
   // catches changes AFTER subscription, not pre-existing rows).
   try { var fresh = await AppDB.getAllOrders(); if (fresh) _db.orders = fresh; } catch (e) {}
   var all = (_db.orders || []).slice();

   // Filters
   var search   = (document.getElementById('adminOrderSearch') || {}).value || '';
   var status   = (document.getElementById('adminOrderStatusFilter') || {}).value || '';
   var df       = _readDateFilter('adminOrderDateFilter', 'adminOrderCustomDate', 'adminOrderRangeFrom', 'adminOrderRangeTo');
   var s        = search.trim().toLowerCase();

   var filtered = all.filter(function(o) {
      if (status && o.status !== status) return false;
      if (!_isDateInRange(o.date || o.created_at || o.timestamp, df.range, df)) return false;
      if (s) {
         var hay = ((o.orderId || '') + ' ' + (o.customerEmail || '') + ' ' + (o.customerName || '') + ' ' + (o.storeName || '')).toLowerCase();
         if (hay.indexOf(s) === -1) return false;
      }
      return true;
   });
   window._adminOrdersFiltered = filtered;   // used by deleteAllShownOrders

   if (!filtered.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No orders match the current filters.</p>';
      return;
   }

   // Totals strip
   var totalRevenue = filtered.reduce(function(sum, o) { return sum + (o.total || 0); }, 0);
   var totalItems   = filtered.reduce(function(sum, o) { return sum + (o.items || []).reduce(function(s, it) { return s + (it.qty || 0); }, 0); }, 0);

   var rows = filtered.map(function(o) {
      var status   = o.status || 'Pending Pickup';
      var cls      = status === 'Completed' ? 'completed' : (status === 'Cancelled' ? 'cancelled' : 'confirmed');
      var items = o.items || [];
      var itemCount = items.reduce(function(s, it) { return s + (it.qty || 0); }, 0);
      var rxOnly = !items.length && o.prescription_url;
      var rxIcon = o.prescription_url
         ? ' <a href="' + o.prescription_url + '" target="_blank" rel="noopener" title="View prescription" style="color:#c62828;text-decoration:none;font-weight:700">📋Rx</a>'
         : '';
      var deliveryIcon = o.delivery_address ? ' <span title="Home delivery">🚚</span>' : '';
      var itemsCellHtml = rxOnly
         ? '<span style="color:#1565c0;font-weight:600" title="Prescription-only order — pharmacist will fill items">📋 Rx-only</span>'
         : String(itemCount);
      var totalCellHtml = rxOnly && !o.total
         ? '<span style="color:#888;font-style:italic">awaiting quote</span>'
         : '₹' + (o.total || 0).toLocaleString('en-IN');
      return '<tr>' +
                '<td><div class="apt-tbl-date">' + (o.date || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (o.customerName || '—') + rxIcon + deliveryIcon + '</div>' +
                    '<div class="apt-tbl-sub">' + (o.customerEmail || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (o.storeName || '<em style="color:#999">Platform</em>') + '</div></td>' +
                '<td style="text-align:center">' + itemsCellHtml + '</td>' +
                '<td style="text-align:right;font-weight:600">' + totalCellHtml + '</td>' +
                '<td>' + (o.method || 'Pickup') + '</td>' +
                '<td><span class="order-badge ' + cls + '">' + status + '</span></td>' +
                '<td class="apt-tbl-id">' + (o.orderId || '') + '</td>' +
             '</tr>';
   }).join('');

   container.innerHTML =
      '<div style="display:flex;gap:1.2rem;padding:0.6rem 0 1rem;font-size:0.88rem;color:#444">' +
         '<div><strong>' + filtered.length + '</strong> orders</div>' +
         '<div><strong>' + totalItems + '</strong> items</div>' +
         '<div>Revenue: <strong>₹' + totalRevenue.toLocaleString('en-IN') + '</strong></div>' +
      '</div>' +
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th>Date</th>' +
              '<th>Customer</th>' +
              '<th>Store</th>' +
              '<th style="text-align:center">Items</th>' +
              '<th style="text-align:right">Total</th>' +
              '<th>Method</th>' +
              '<th>Status</th>' +
              '<th class="apt-tbl-id">Order ID</th>' +
           '</tr></thead>' +
           '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>';
}

// ── ADMIN SETTINGS ──
const SETTINGS_KEY = 'adminSettings';

const DEFAULT_MENU_ITEMS = [
   { icon: '👤', label: 'My Profile',           url: 'profile.html' },
   { icon: '📦', label: 'Orders',               url: 'profile.html?tab=orders' },
   { icon: '💳', label: 'Saved Cards & Wallets', url: 'profile.html?tab=cards' },
   { icon: '📍', label: 'Saved Addresses',       url: 'profile.html?tab=addresses' },
   { icon: '❤️', label: 'Wishlist',              url: 'profile.html?tab=wishlist' },
   { icon: '🔔', label: 'Notifications',         url: '' }
];

function getAdminSettings() { return _db.settings || {}; }

function loadSettingsForm() {
   const s = getAdminSettings();
   setVal('set-storeName',              s.storeName             || '');
   setVal('set-heroSubtitle',           s.heroSubtitle          || '');
   setVal('set-shopBtnText',            s.shopBtnText           || '');
   setChecked('set-announcementOn',     !!s.announcementOn);
   setVal('set-announcementText',       s.announcementText      || '');
   const bgColor   = s.announcementColor     || '#1a237e';
   const txtColor  = s.announcementTextColor || '#ffffff';
   setVal('set-announcementColor',      bgColor);
   setVal('set-announcementColorHex',   bgColor);
   setVal('set-announcementTextColor',  txtColor);
   setVal('set-announcementTextColorHex', txtColor);
   setVal('set-phone',          s.phone         || '');
   setVal('set-whatsapp',       s.whatsapp      || '');
   setVal('set-contactEmail',   s.contactEmail  || '');
   setVal('set-address',        s.address       || '');
   setVal('set-freeDeliveryAbove', s.freeDeliveryAbove !== undefined ? s.freeDeliveryAbove : '');
   setVal('set-deliveryCharge',   s.deliveryCharge    !== undefined ? s.deliveryCharge    : '');
   // Shop dashboard settings
   setVal('set-dashboardTitle',        s.dashboardTitle        || '');
   setChecked('set-showCustomerPhone', !!s.showCustomerPhone);
   setChecked('set-autoRefreshOrders', !!s.autoRefreshOrders);
   setChecked('set-shopAnnouncementOn', !!s.shopAnnouncementOn);
   setVal('set-shopAnnouncementText',  s.shopAnnouncementText  || '');
   setVal('set-commissionRate',  s.commissionRate !== undefined ? s.commissionRate : '');
   setVal('set-bookingsPerDoctorPerDay',   s.bookingsPerDoctorPerDay   !== undefined ? s.bookingsPerDoctorPerDay   : 3);
   setVal('set-bookingsPerCustomerPerDay', s.bookingsPerCustomerPerDay !== undefined ? s.bookingsPerCustomerPerDay : 10);
   setVal('set-noShowBlockThreshold',      s.noShowBlockThreshold      !== undefined ? s.noShowBlockThreshold      : 5);
   setVal('set-noShowBlockDays',           s.noShowBlockDays           !== undefined ? s.noShowBlockDays           : 30);
   // Maintenance mode (block-owners defaults to true if undefined)
   setChecked('set-maintenanceMode',         !!s.maintenanceMode);
   setChecked('set-maintenanceBlockOwners',  s.maintenanceBlockOwners !== false);
   setVal('set-maintenanceMessage',          s.maintenanceMessage     || '');
   setVal('set-maintenanceEndTime',          s.maintenanceEndTime     || '');
   renderMenuItemsAdmin(s.menuItems || DEFAULT_MENU_ITEMS);
}

// ── MENU ITEMS MANAGER ──
let _menuItems = [];

function renderMenuItemsAdmin(items) {
   _menuItems = items.map(i => ({ ...i }));
   const list = document.getElementById('menuItemsList');
   if (!list) return;
   list.innerHTML = '';
   _menuItems.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'menu-item-row';
      row.innerHTML = `
         <input class="menu-icon-input"  type="text" value="${item.icon}"  placeholder="👤" title="Emoji icon"
                oninput="_menuItems[${idx}].icon=this.value"/>
         <input class="menu-label-input" type="text" value="${item.label}" placeholder="Label"
                oninput="_menuItems[${idx}].label=this.value"/>
         <input class="menu-url-input"   type="text" value="${item.url}"   placeholder="URL (leave blank = coming soon)"
                oninput="_menuItems[${idx}].url=this.value"/>
         <button class="menu-move-btn" onclick="moveMenuItem(${idx},-1)" title="Move up">▲</button>
         <button class="menu-move-btn" onclick="moveMenuItem(${idx}, 1)" title="Move down">▼</button>
         <button class="menu-del-btn"  onclick="deleteMenuItem(${idx})">🗑️</button>`;
      list.appendChild(row);
   });
}

function addMenuItem() {
   _menuItems.push({ icon: '⭐', label: 'New Item', url: '' });
   renderMenuItemsAdmin(_menuItems);
}

function deleteMenuItem(idx) {
   _menuItems.splice(idx, 1);
   renderMenuItemsAdmin(_menuItems);
}

function moveMenuItem(idx, dir) {
   const to = idx + dir;
   if (to < 0 || to >= _menuItems.length) return;
   [_menuItems[idx], _menuItems[to]] = [_menuItems[to], _menuItems[idx]];
   renderMenuItemsAdmin(_menuItems);
}

function setVal(id, val)     { const el = document.getElementById(id); if (el) el.value   = val; }
function setChecked(id, val) { const el = document.getElementById(id); if (el) el.checked = val; }

function syncColorPicker() {
   const hex = document.getElementById('set-announcementColorHex').value.trim();
   if (/^#[0-9a-fA-F]{6}$/.test(hex)) document.getElementById('set-announcementColor').value = hex;
}
function syncTextColorPicker() {
   const hex = document.getElementById('set-announcementTextColorHex').value.trim();
   if (/^#[0-9a-fA-F]{6}$/.test(hex)) document.getElementById('set-announcementTextColor').value = hex;
}

function saveAllSettings() {
   // Validation: if announcement toggle is ON, a message must be typed.
   var annOn   = document.getElementById('set-announcementOn').checked;
   var annText = document.getElementById('set-announcementText').value.trim();
   if (annOn && !annText) {
      alert('Please enter an announcement message before enabling the announcement bar.');
      var msgEl = document.getElementById('set-announcementText');
      if (msgEl) msgEl.focus();
      return;
   }
   const bgColor  = document.getElementById('set-announcementColor').value;
   const txtColor = document.getElementById('set-announcementTextColor').value;
   const s = {
      storeName:             document.getElementById('set-storeName').value.trim(),
      heroSubtitle:          document.getElementById('set-heroSubtitle').value.trim(),
      shopBtnText:           document.getElementById('set-shopBtnText').value.trim(),
      announcementOn:        document.getElementById('set-announcementOn').checked,
      announcementText:      document.getElementById('set-announcementText').value.trim(),
      announcementColor:     bgColor,
      announcementTextColor: txtColor,
      phone:                 document.getElementById('set-phone').value.trim(),
      whatsapp:              document.getElementById('set-whatsapp').value.trim(),
      contactEmail:          document.getElementById('set-contactEmail').value.trim(),
      address:               document.getElementById('set-address').value.trim(),
      freeDeliveryAbove:     parseFloat(document.getElementById('set-freeDeliveryAbove').value) || 0,
      deliveryCharge:        parseFloat(document.getElementById('set-deliveryCharge').value)    || 0,
      menuItems:             _menuItems,
      // Shop dashboard settings
      dashboardTitle:       document.getElementById('set-dashboardTitle').value.trim(),
      showCustomerPhone:    document.getElementById('set-showCustomerPhone').checked,
      autoRefreshOrders:    document.getElementById('set-autoRefreshOrders').checked,
      shopAnnouncementOn:   document.getElementById('set-shopAnnouncementOn').checked,
      shopAnnouncementText: document.getElementById('set-shopAnnouncementText').value.trim(),
      commissionRate:       parseFloat(document.getElementById('set-commissionRate').value) || 0,
      bookingsPerDoctorPerDay:   parseInt(document.getElementById('set-bookingsPerDoctorPerDay').value,   10) || 3,
      bookingsPerCustomerPerDay: parseInt(document.getElementById('set-bookingsPerCustomerPerDay').value, 10) || 10,
      noShowBlockThreshold:      parseInt(document.getElementById('set-noShowBlockThreshold').value,      10) || 5,
      noShowBlockDays:           parseInt(document.getElementById('set-noShowBlockDays').value,           10) || 30,
      // Maintenance mode
      maintenanceMode:           document.getElementById('set-maintenanceMode').checked,
      maintenanceBlockOwners:    document.getElementById('set-maintenanceBlockOwners').checked,
      maintenanceMessage:        document.getElementById('set-maintenanceMessage').value.trim(),
      maintenanceEndTime:        document.getElementById('set-maintenanceEndTime').value.trim()
   };
   _db.settings = s;
   AppDB.saveSettings(s);
   showAdminToast('✅ Settings saved! Refresh the store to see changes.');
}

// ── APPLY SITE SETTINGS (called on home.html) ──
function loadSiteSettings() {
   const s = getAdminSettings();

   // Always render menu items (use defaults if no settings saved yet)
   const menuContainer = document.getElementById('dynamicMenuItems');
   if (menuContainer) {
      const savedItems  = (s.menuItems && s.menuItems.length) ? s.menuItems : DEFAULT_MENU_ITEMS;
      // Merge: if saved item has no URL but DEFAULT has one, use the default URL
      const defaultMap  = {};
      DEFAULT_MENU_ITEMS.forEach(d => { defaultMap[d.label] = d.url; });
      const items = savedItems.map(item => ({
         ...item,
         url: item.url || defaultMap[item.label] || ''
      }));
      menuContainer.innerHTML = items.map(item => {
         const action = item.url
            ? `window.location='${item.url}'`
            : `alert('${item.label} — coming soon')`;
         return `<div class="user-dropdown-item" onclick="${action}">${item.icon} ${item.label}</div>`;
      }).join('');
   }

   if (!s || !Object.keys(s).length) return;

   // Store name
   if (s.storeName) {
      document.querySelectorAll('.brand-name').forEach(el => el.textContent = s.storeName);
      document.title = s.storeName;
   }
   // Hero subtitle
   const heroP = document.querySelector('.hero p');
   if (heroP && s.heroSubtitle) heroP.textContent = s.heroSubtitle;
   // Shop Now button
   const shopBtn = document.querySelector('.btn-shop');
   if (shopBtn && s.shopBtnText) shopBtn.textContent = s.shopBtnText;

   // Announcement bar (legacy strip below the header)
   const bar = document.getElementById('announcementBar');
   if (bar) {
      if (s.announcementOn && s.announcementText) {
         bar.textContent = s.announcementText;
         bar.style.background = s.announcementColor     || '#1a237e';
         bar.style.color      = s.announcementTextColor || '#ffffff';
         bar.classList.remove('hidden');
      } else {
         bar.classList.add('hidden');
      }
   }
   // Scrolling marquee in the top MyStore bar (preferred new location)
   const marquee  = document.getElementById('headerMarquee');
   const mqTrack  = document.getElementById('headerMarqueeTrack');
   if (marquee && mqTrack) {
      if (s.announcementOn && s.announcementText) {
         // Duplicate the text so the loop is seamless when one copy scrolls off-screen
         var t = String(s.announcementText);
         mqTrack.innerHTML =
            '<span class="header-marquee-item">📢 ' + t + '</span>' +
            '<span class="header-marquee-item">📢 ' + t + '</span>';
         marquee.style.background = s.announcementColor     || '';
         marquee.style.color      = s.announcementTextColor || '';
         marquee.classList.remove('hidden');
      } else {
         marquee.classList.add('hidden');
         mqTrack.innerHTML = '';
         marquee.style.background = '';
         marquee.style.color      = '';
      }
   }

   // Delivery charge in cart footer
   window._adminSettings = s;

   // ── Shop dashboard settings (only apply on shopowner.html) ──
   var shopBrand = document.querySelector('.shop-brand');
   if (shopBrand && s.dashboardTitle) shopBrand.textContent = '🏪 ' + s.dashboardTitle;

   var shopBar = document.getElementById('shopAnnouncementBar');
   if (shopBar) {
      if (s.shopAnnouncementOn && s.shopAnnouncementText) {
         shopBar.textContent = s.shopAnnouncementText;
         shopBar.classList.remove('hidden');
      } else {
         shopBar.classList.add('hidden');
      }
   }
}

// ── PROFILE PAGE ──
async function initProfile() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { window.location.href = 'login.html'; return; }
   await initDB();
   await _checkMaintenanceMode();
   // Auto-refresh marquee + maintenance overlay when admin changes settings
   if (typeof _liveSubscribe === 'function') _liveSubscribe('siteSettingsProfile', 'settings', _refreshLiveSettings);
   if (typeof _startSettingsPolling === 'function') _startSettingsPolling();
   await loadUserData(user.email);
   document.getElementById('prof-name').value   = user.name   || '';
   document.getElementById('prof-email').value  = user.email  || '';
   document.getElementById('prof-gender').value = user.gender || '';
   document.getElementById('prof-phone').value  = user.phone  || '';
   var storeNameRow = document.getElementById('prof-storename-row');
   var addrRow      = document.getElementById('prof-address-row');
   var isAdminUser  = isAdmin(user.email);
   var isPureOwner  = user.role === 'storeowner' && !isAdminUser;
   // Show Business Name / Address rows for both pure owners and admins
   // (admins may run their own hospital + admin the platform).
   var showOwnerFields = isPureOwner || isAdminUser;
   if (storeNameRow && showOwnerFields) {
      storeNameRow.classList.remove('hidden');
      document.getElementById('prof-storename').value = user.storeName || '';
   }
   if (addrRow && showOwnerFields) {
      addrRow.classList.remove('hidden');
      try {
         await loadAptProviders(true);
         var owned = (_aptProvidersCache || []).filter(function(p) {
            return (p.owner_email || '').toLowerCase() === (user.email || '').toLowerCase();
         });
         document.getElementById('prof-address').value = (owned[0] && owned[0].address) || user.address || '';
      } catch (e) {
         document.getElementById('prof-address').value = user.address || '';
      }
   }
   // For shop owners (medical / retail), also list every store they own with
   // GST / Form 20 / Form 21 / FSSAI / commission etc. so they can verify
   // what's on file with admin (used on tax invoices).
   if (showOwnerFields) {
      try { await loadStoreProviders(true); } catch (e) {}
      var ownedStores = (_storeProvidersCache || []).filter(function(s) {
         return (s.owner_email || '').toLowerCase() === (user.email || '').toLowerCase();
      });
      _renderMyStoresInProfile(ownedStores);
   }
   // Hide customer-only tabs only for PURE store-owners (not admins — they're
   // full users too and may want to use Addresses, Orders, Appointments etc.).
   if (isPureOwner) {
      ['addresses', 'orders', 'appointments', 'wishlist', 'cards'].forEach(function(t) {
         var btn = document.getElementById('ptab-' + t + '-btn');
         if (btn) btn.style.display = 'none';
      });
   }
   // Back button routing.
   var backBtn = document.getElementById('profile-back-btn');
   if (backBtn) {
      if (isAdminUser) {
         backBtn.textContent = '← Back to Admin';
         backBtn.onclick = function() { window.location = 'admin.html'; };
      } else if (isPureOwner) {
         backBtn.textContent = '← Back to Dashboard';
         backBtn.onclick = function() { window.location = 'shopowner.html'; };
      }
      // Customers: keep default "← Back to Store" set in HTML.
   }
   const params = new URLSearchParams(window.location.search);
   switchProfileTab(params.get('tab') || 'info');
}

// Render an owner-facing read-only view of every store they own. Used on the
// profile-info tab so owners can verify GST / Form 20 / FSSAI / commission etc.
// before generating tax invoices.
function _renderMyStoresInProfile(stores) {
   var card = document.getElementById('prof-mystore-card');
   var body = document.getElementById('prof-mystore-body');
   if (!card || !body) return;
   if (!stores || !stores.length) {
      // Hide the card if user is an owner but has no store registered yet
      card.classList.add('hidden');
      return;
   }
   card.classList.remove('hidden');
   var esc = function(s) { return (s == null ? '' : String(s)).replace(/[&<>]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); };
   var missing = function(v) { return v ? esc(v) : '<span style="color:#c62828">— missing</span>'; };
   var fmtCommission = function(s) {
      if (s.commission_value == null) return missing(null);
      return s.commission_type === 'percent'
         ? esc(s.commission_value) + ' %'
         : '₹ ' + esc(s.commission_value) + ' / order';
   };
   var meta = window.STORE_CAT_META || {};
   body.innerHTML = stores.map(function(s) {
      var cat = meta[s.category] || {};
      return '' +
         '<div class="mystore-block">' +
            '<div class="mystore-title">' + (cat.icon || s.icon || '🏪') + ' ' + esc(s.name) + ' <span class="mystore-cat">· ' + esc(cat.label || s.category) + '</span></div>' +
            '<div class="mystore-grid">' +
               '<div><label>GSTIN</label><span>' + missing(s.gstin) + '</span></div>' +
               '<div><label>Form 20 No.</label><span>' + missing(s.form20_no) + '</span></div>' +
               '<div><label>Form 21 No.</label><span>' + missing(s.form21_no) + '</span></div>' +
               '<div><label>FSSAI No.</label><span>' + missing(s.fssai_no) + '</span></div>' +
               '<div><label>Phone</label><span>' + missing(s.phone) + '</span></div>' +
               '<div><label>Timing</label><span>' + missing(s.timing) + '</span></div>' +
               '<div style="grid-column:1/-1"><label>Address</label><span>' + missing(s.address) + '</span></div>' +
               '<div><label>Commission</label><span>' + fmtCommission(s) + '</span></div>' +
               '<div><label>Home Delivery</label><span>' + (s.door_delivery ? '✅ Yes' : '❌ No') + '</span></div>' +
            '</div>' +
         '</div>';
   }).join('');
}

function switchProfileTab(tab) {
   ['info', 'contact', 'addresses', 'orders', 'appointments', 'wishlist', 'cards'].forEach(t => {
      var pane = document.getElementById('ptab-' + t);
      var btn  = document.getElementById('ptab-' + t + '-btn');
      if (pane) pane.classList.toggle('hidden', t !== tab);
      if (btn)  btn.classList.toggle('active', t === tab);
   });
   // Topbar title mirrors the active sidebar item — Cliniva-style breadcrumb
   var titleEl = document.getElementById('profileTopbarTitle');
   if (titleEl) {
      var titleMap = { info: 'Profile Info', contact: 'Contact Admin', addresses: 'Saved Addresses',
                       orders: 'My Orders', appointments: 'My Appointments',
                       wishlist: 'Wishlist', cards: 'Saved Cards' };
      titleEl.textContent = titleMap[tab] || 'Profile';
   }
   if (tab === 'contact')      renderContactAdmin();
   if (tab === 'addresses')    renderAddresses();
   if (tab === 'orders')       renderOrders();
   if (tab === 'appointments') renderMyAppointments();
   if (tab === 'wishlist')     renderWishlistTab();
   if (tab === 'cards')        renderCards();
}

// Render the admin's contact details (phone, WhatsApp, email, address) inside
// the "Contact Admin" tab. Pulls from the same settings object that powers the
// public footer/contact-us page, so anything the admin updates in
// Admin → Settings → Contact & Address propagates here automatically.
async function renderContactAdmin() {
   var body = document.getElementById('contactAdminBody');
   if (!body) return;
   body.innerHTML = '<div style="color:#777">Loading contact details…</div>';
   try {
      if (typeof initDB === 'function') await initDB();
      var s = (_db && _db.settings) ? _db.settings : {};
      var esc = function(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function(c) {
         return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
      }); };
      var row = function(icon, label, value, href) {
         if (!value) return '';
         var inner = href
            ? '<a href="' + esc(href) + '" target="_blank" rel="noopener" style="color:#1a73e8;text-decoration:none;word-break:break-word">' + esc(value) + '</a>'
            : '<span style="word-break:break-word">' + esc(value) + '</span>';
         return ''
            + '<div class="contact-admin-row">'
            +    '<div class="contact-admin-icon">' + icon + '</div>'
            +    '<div class="contact-admin-meta">'
            +       '<div class="contact-admin-label">' + esc(label) + '</div>'
            +       '<div class="contact-admin-value">' + inner + '</div>'
            +    '</div>'
            + '</div>';
      };
      var phone     = (s.phone        || '').toString().trim();
      var whatsapp  = (s.whatsapp     || '').toString().trim();
      var email     = (s.contactEmail || '').toString().trim();
      var address   = (s.address      || '').toString().trim();
      var html = ''
         + row('📞', 'Phone',    phone,    phone    ? 'tel:' + phone.replace(/[^0-9+]/g, '') : '')
         + row('💬', 'WhatsApp', whatsapp, whatsapp ? 'https://wa.me/' + whatsapp.replace(/[^0-9]/g, '') : '')
         + row('✉️', 'Email',    email,    email    ? 'mailto:' + email : '')
         + row('📍', 'Address',  address,  address  ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address) : '');
      if (!html) {
         body.innerHTML = '<div style="color:#777">Admin has not added contact details yet.</div>';
         return;
      }
      body.innerHTML = '<div class="contact-admin-list">' + html + '</div>';
   } catch (e) {
      console.error('renderContactAdmin failed', e);
      body.innerHTML = '<div style="color:#c33">Could not load contact details. Please try again.</div>';
   }
}

async function saveProfileInfo() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   user.name   = document.getElementById('prof-name').value.trim();
   user.gender = document.getElementById('prof-gender').value;
   user.phone  = document.getElementById('prof-phone').value.trim();
   var storeNameEl = document.getElementById('prof-storename');
   if (storeNameEl) { user.storeName = storeNameEl.value.trim(); }
   var addrEl = document.getElementById('prof-address');
   if (addrEl) { user.address = addrEl.value.trim(); }
   const users = getUsers();
   const idx = users.findIndex(u => u.email === user.email);
   if (idx !== -1) {
      users[idx].name = user.name;
      users[idx].gender = user.gender;
      users[idx].phone = user.phone;
      if (storeNameEl) users[idx].storeName = user.storeName;
      if (addrEl)      users[idx].address   = user.address;
      saveUsers(users);
   }
   sessionStorage.setItem('loggedInUser', JSON.stringify(user));

   // For shop-owners: also push the new address to ALL their providers so the
   // change is reflected on customer pages, admin, receipts, etc.
   var isStoreOwner = (user.role === 'storeowner' || isAdmin(user.email));
   if (isStoreOwner && addrEl) {
      try {
         await loadAptProviders(true);
         var emailLc = (user.email || '').toLowerCase();
         var owned = (_aptProvidersCache || []).filter(function(p) {
            return (p.owner_email || '').toLowerCase() === emailLc;
         });
         for (var i = 0; i < owned.length; i++) {
            if (owned[i].address !== user.address) {
               owned[i].address = user.address;
               await AppDB.upsertProvider(owned[i]);
            }
         }
      } catch (e) { console.warn('Provider address sync failed:', e); }
   }

   showProfileToast('✅ Profile updated!');
}

// ── ADDRESSES ──
let _editAddrIdx = -1;

function getAddresses(email) { return _db.addresses; }
function saveAddressesData(email, arr) {
   arr.forEach(function(a) { if (!a.id) a.id = crypto.randomUUID(); });
   _db.addresses = arr;
   AppDB.deleteUserAddresses(email).then(function() {
      arr.forEach(function(a) {
         AppDB.upsertAddress({ id: a.id, user_email: email, name: a.name, phone: a.phone || '', line: a.line, city: a.city, state: a.state || '', pin: a.pin, is_default: a.isDefault || false });
      });
   });
}

function renderAddresses() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const list = document.getElementById('addressList');
   const addrs = getAddresses(user.email);
   if (!addrs.length) { list.innerHTML = '<p class="prof-empty">No saved addresses yet.</p>'; return; }
   list.innerHTML = addrs.map((a, i) => `
      <div class="addr-card">
         <div class="addr-card-info">
            <div class="addr-card-name">
               ${a.name}${a.phone ? ' · ' + a.phone : ''}
               ${a.isDefault ? '<span class="addr-default-badge">✅ Default</span>' : ''}
            </div>
            <div class="addr-card-line">${a.line}</div>
            <div class="addr-card-line">${a.city}${a.state ? ', ' + a.state : ''} — ${a.pin}</div>
         </div>
         <div class="addr-card-actions">
            ${!a.isDefault ? `<button class="addr-default-btn" onclick="setDefaultAddress(${i})">Set Default</button>` : ''}
            <button class="addr-edit-btn" onclick="openAddressModal(${i})">✏️ Edit</button>
            <button class="addr-del-btn"  onclick="deleteAddress(${i})">🗑️</button>
         </div>
      </div>`).join('');
}

function openAddressModal(idx) {
   _editAddrIdx = (idx !== undefined && idx >= 0) ? idx : -1;
   document.getElementById('addrModalTitle').textContent = _editAddrIdx >= 0 ? '✏️ Edit Address' : '➕ Add New Address';
   if (_editAddrIdx >= 0) {
      const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
      const a = getAddresses(user.email)[_editAddrIdx];
      document.getElementById('addr-name').value  = a.name  || '';
      document.getElementById('addr-phone').value = a.phone || '';
      document.getElementById('addr-line').value  = a.line  || '';
      document.getElementById('addr-city').value  = a.city  || '';
      document.getElementById('addr-state').value = a.state || '';
      document.getElementById('addr-pin').value   = a.pin   || '';
   } else {
      ['addr-name','addr-phone','addr-line','addr-city','addr-state','addr-pin'].forEach(id => document.getElementById(id).value = '');
   }
   document.getElementById('addressModal').classList.remove('hidden');
}

function closeAddressModal() { document.getElementById('addressModal').classList.add('hidden'); _editAddrIdx = -1; }
function handleAddrOverlayClick(e) { if (e.target.id === 'addressModal') closeAddressModal(); }

function setDefaultAddress(idx) {
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const addrs = getAddresses(user.email);
   addrs.forEach((a, i) => a.isDefault = (i === idx));
   saveAddressesData(user.email, addrs);
   renderAddresses();
   showProfileToast('✅ Default address updated!');
}

function saveAddress() {
   const name  = document.getElementById('addr-name').value.trim();
   const phone = document.getElementById('addr-phone').value.trim();
   const line  = document.getElementById('addr-line').value.trim();
   const city  = document.getElementById('addr-city').value.trim();
   const state = document.getElementById('addr-state').value.trim();
   const pin   = document.getElementById('addr-pin').value.trim();
   if (!name || !line || !city || !pin) { alert('Please fill Name, Address, City and PIN.'); return; }
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const addrs = getAddresses(user.email);
   const isEdit = _editAddrIdx >= 0;
   // preserve existing isDefault when editing
   const wasDefault = isEdit ? addrs[_editAddrIdx].isDefault : false;
   const addr  = { name, phone, line, city, state, pin, isDefault: wasDefault };
   if (isEdit) addrs[_editAddrIdx] = addr; else addrs.push(addr);
   // auto-set default if this is the only address
   if (addrs.length === 1) addrs[0].isDefault = true;
   saveAddressesData(user.email, addrs);
   closeAddressModal();
   renderAddresses();
   showProfileToast(isEdit ? '✅ Address updated!' : '✅ Address saved!');
}

function deleteAddress(idx) {
   if (!confirm('Delete this address?')) return;
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const addrs = getAddresses(user.email);
   const wasDefault = addrs[idx].isDefault;
   addrs.splice(idx, 1);
   // if deleted address was default, promote the first remaining one
   if (wasDefault && addrs.length > 0) addrs[0].isDefault = true;
   saveAddressesData(user.email, addrs);
   renderAddresses();
   showProfileToast('🗑️ Address deleted.');
}

// ── ORDERS ──
function orderStatusClass(status) {
   if (status === 'Confirmed')         return 'badge-confirmed';
   if (status === 'Packed')            return 'badge-packed';
   if (status === 'Ready')             return 'badge-ready';
   if (status === 'Out for Delivery')  return 'badge-out';
   if (status === 'Completed')         return 'badge-completed';
   if (status === 'Cancelled')         return 'badge-cancelled';
   return 'badge-pending';
}

// Owner-side label — keeps the DB status word but pretties it for delivery orders.
function _ownerStatusLabel(status, order) {
   var isDelivery = !order.pickup_override && ((order.method === 'COD-Delivery') || !!order.delivery_address);
   if (!isDelivery && !order.pickup_override) {
      // Same fallback as the customer label and footer label — if the store
      // offers home delivery, treat the order as delivery regardless of method
      var providers = _storeProvidersCache || [];
      var store = providers.find(function(s) {
         return s.id === order.store_provider_id || s.name === order.storeName;
      });
      if (store && store.door_delivery) isDelivery = true;
   }
   // Shared steps across both flows
   if (status === 'Pending Pickup') return '📥 Order received';
   if (status === 'Confirmed')      return '✅ Confirmed';
   if (status === 'Packed')         return '📦 Packed';
   if (status === 'Cancelled')      return '❌ Cancelled';
   if (isDelivery) {
      if (status === 'Out for Delivery') return '🚚 Out for delivery';
      if (status === 'Ready')            return '📦 Packed';   // legacy delivery orders
      if (status === 'Completed')        return '✅ Delivered';
   } else {
      if (status === 'Ready')            return '🏪 Ready for pickup';
      if (status === 'Completed')        return '🏁 Picked up';
   }
   return status;
}

// Map DB status + order method to a customer-facing label.
// Delivery orders get a 4-step journey; pickup orders keep the 3-step flow.
// Was: (status, method). Now takes the full order object so it can fall back
// to the linked store's door_delivery flag — handles orders placed via the
// generic cart flow (makeOrder) which doesn't set method='COD-Delivery'.
function _customerStatusLabel(status, orderOrMethod) {
   // Back-compat: accept a method string for any legacy call site
   var o = (orderOrMethod && typeof orderOrMethod === 'object') ? orderOrMethod : null;
   var method = o ? o.method : orderOrMethod;
   var pickupOverride = o && o.pickup_override;
   var isDelivery = !pickupOverride && (method === 'COD-Delivery' || (o && !!o.delivery_address));
   if (!isDelivery && o && !pickupOverride) {
      // Fall back to the store's door_delivery flag
      var providers = _storeProvidersCache || [];
      var store = providers.find(function(s) {
         return s.id === o.store_provider_id || s.name === o.storeName;
      });
      if (store && store.door_delivery) isDelivery = true;
   }
   // Shared steps across both flows
   if (status === 'Pending Pickup') return '📋 Order placed';
   if (status === 'Confirmed')      return '✅ Confirmed';
   if (status === 'Packed')         return '📦 Packed';
   if (status === 'Cancelled')      return '❌ Cancelled';
   if (isDelivery) {
      if (status === 'Out for Delivery') return '🚚 Out for delivery';
      if (status === 'Ready')            return '📦 Packed';   // legacy delivery orders
      if (status === 'Completed')        return '✅ Delivered';
   }
   // Pickup
   if (status === 'Ready')          return '🏪 Ready for pickup';
   if (status === 'Completed')      return '🏁 Picked up';
   return status;
}

// Resolve the footer label for one order. Falls back to the linked store's
// door_delivery flag when the order itself doesn't have explicit delivery
// metadata (handles legacy rows + protects future renames).
function _orderFooterLabel(o) {
   // Owner manually switched a delivery order to pickup — short-circuit before
   // the door_delivery fallback so it stays as pickup in the customer's view.
   if (o.pickup_override)                        return '🛍️ Pickup at store';
   if (o.method === 'COD-Delivery')              return '🚚 Cash/UPI on delivery';
   if (o.method === 'Walk-in')                   return '🧾 Walk-in sale';
   if (o.method === 'COD')                       return '💵 Cash on delivery';
   if (o.delivery_address)                       return '🚚 Cash/UPI on delivery';
   // Look up the store: delivery enabled? — show delivery text
   var providers = (_storeProvidersCache || []);
   var store = providers.find(function(s) {
      return s.id === o.store_provider_id || s.name === o.storeName;
   });
   if (store && store.door_delivery)             return '🚚 Cash/UPI on delivery';
   if (o.method === 'Pickup')                    return '🛍️ Pickup at store';
   return 'Paid via ' + (o.method || 'COD');
}

async function renderOrders() {
   const user   = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const list   = document.getElementById('ordersList');
   if (!user) { list.innerHTML = '<p class="prof-empty">Please log in.</p>'; return; }

   // Live: when admin/owner updates or deletes an order anywhere, re-fetch
   // and re-render so the customer's My Orders page reflects it without
   // needing a manual refresh.
   _liveSubscribe('myOrders', 'orders', function() {
      AppDB.getAllOrders().then(function(rows) {
         _db.orders = rows || [];
         renderOrders();
      });
   });

   // Make sure store metadata is ready so we can derive each order's category
   // AND know each store's door_delivery flag (used by _orderFooterLabel)
   try { await loadStoreCategories(); await loadStoreProviders(); } catch (e) {}

   const allOrders = _db.orders.filter(function(o) { return o.customerEmail === user.email; });
   if (!allOrders.length) {
      list.innerHTML = '<p class="prof-empty">No orders placed yet.</p>';
      return;
   }

   // Join each order with its store_provider so we can filter by category / store.
   // Resolution rules: prefer store_provider_id when present, else fall back to
   // matching storeName + (any) owner_email = storeId.
   var providers = _storeProvidersCache || [];
   function _orderProvider(o) {
      if (o.store_provider_id) return providers.find(function(p) { return p.id === o.store_provider_id; });
      if (o.storeName) return providers.find(function(p) {
         return p.name === o.storeName &&
                (!o.storeId || (p.owner_email || '').toLowerCase() === (o.storeId || '').toLowerCase());
      });
      return null;
   }

   // Read current selections BEFORE rebuilding dropdowns (strict cascade).
   var catF    = (document.getElementById('myOrderCategoryFilter') || {}).value || '';
   var storeF  = (document.getElementById('myOrderStoreFilter')    || {}).value || '';

   // Category dropdown — built from every order's resolved category
   var catSet = {};
   allOrders.forEach(function(o) { var p = _orderProvider(o); if (p) catSet[p.category] = true; });
   _fillSelectFromList('myOrderCategoryFilter', '🗂 All categories', Object.keys(catSet),
      function(k) { var m = STORE_CAT_META[k]; return m ? (m.icon + ' ' + m.label) : k; });

   // STRICT cascade: Stores stays locked until a Category is picked.
   var storeSel = document.getElementById('myOrderStoreFilter');
   if (!catF) {
      if (storeSel) {
         storeSel.innerHTML = '<option value="">🏪 Pick a category first</option>';
         storeSel.disabled = true;
         storeSel.value = ''; storeF = '';
      }
   } else {
      if (storeSel) storeSel.disabled = false;
      var storeSet = {};
      allOrders.forEach(function(o) {
         var p = _orderProvider(o);
         if (p && p.category === catF) storeSet[p.name] = true;
      });
      _fillSelectFromList('myOrderStoreFilter', '🏪 All stores', Object.keys(storeSet));
      if (storeF && storeSel && !storeSet[storeF]) { storeSel.value = ''; storeF = ''; }
   }

   // Read remaining filter values
   var search   = ((document.getElementById('myOrderSearch')         || {}).value || '').trim().toLowerCase();
   var statusF  =  (document.getElementById('myOrderStatusFilter')   || {}).value || '';
   var df       = _readDateFilter('myOrderDateFilter', 'myOrderCustomDate', 'myOrderRangeFrom', 'myOrderRangeTo');

   const statusMap = {};
   _db.orders.forEach(function(o) { statusMap[o.orderId || o.order_id] = o.status; });

   var filtered = allOrders.filter(function(o) {
      var prov = _orderProvider(o);
      if (catF   && (!prov || prov.category !== catF)) return false;
      if (storeF && o.storeName !== storeF)            return false;
      var liveStatus = statusMap[o.orderId] || o.status || 'Pending Pickup';
      if (statusF && liveStatus !== statusF) return false;
      if (!_isDateInRange(o.date || o.timestamp, df.range, df)) return false;
      if (search) {
         var hay = ((o.orderId || '') + ' ' + (o.items || []).map(function(i){return i.name;}).join(' ')).toLowerCase();
         if (hay.indexOf(search) === -1) return false;
      }
      return true;
   });

   if (!filtered.length) {
      list.innerHTML = '<p class="prof-empty">No orders match the current filters.</p>';
      return;
   }

   list.innerHTML = filtered.slice().reverse().map(function(o) {
      var liveStatus = statusMap[o.orderId] || o.status || 'Pending Pickup';
      var rxOnly = (!o.items || !o.items.length) && o.prescription_url;
      var displayStatus = rxOnly && liveStatus === 'Pending Pickup'
         ? '📋 Pharmacist preparing'
         : _customerStatusLabel(liveStatus, o);
      var cls = orderStatusClass(liveStatus);
      var itemRows = (o.items || []).map(function(i) {
         return '<div class="order-item"><span>' + i.name + ' × ' + i.qty + '</span><span>₹' + (i.price * i.qty).toLocaleString('en-IN') + '</span></div>';
      }).join('');
      var itemCount = (o.items || []).length;
      var totalQty  = (o.items || []).reduce(function(s, it) { return s + (it.qty || 0); }, 0);
      var itemsHtml = rxOnly
         ? '<div class="order-item" style="color:#1565c0;font-style:italic">' +
              '<span>📋 Prescription sent — pharmacist is preparing your medicines</span>' +
              '<span><a href="' + o.prescription_url + '" target="_blank" rel="noopener" style="color:#1a73e8">View Rx</a></span>' +
           '</div>'
         : (itemCount
            ? '<details class="order-items-toggle"><summary>📦 ' + itemCount + ' item' + (itemCount === 1 ? '' : 's') +
              ' &middot; ' + totalQty + ' unit' + (totalQty === 1 ? '' : 's') +
              ' <span class="order-items-hint">(click to view)</span></summary>' + itemRows + '</details>'
            : '');
      var totalHtml = rxOnly && !o.total
         ? '<span class="order-total" style="color:#888;font-style:italic">Awaiting quote</span>'
         : '<span class="order-total">Total: ₹' + (o.total || 0).toLocaleString('en-IN') + '</span>';
      return ''
       + '<div class="order-card">'
       +    '<div class="order-card-header">'
       +       '<div><span class="order-id">' + o.orderId + '</span> <span class="order-date">' + o.date + '</span></div>'
       +       '<span class="order-badge ' + cls + '">' + displayStatus + '</span>'
       +    '</div>'
       +    (o.storeName ? '<div class="order-store-tag">🏪 ' + o.storeName + '</div>' : '')
       +    '<div class="order-items">' + itemsHtml + '</div>'
       +    '<div class="order-footer">'
       +       '<span>' + _orderFooterLabel(o) + '</span>'
       +       totalHtml
       +    '</div>'
       + '</div>';
   }).join('');
}

// ── MY APPOINTMENTS (profile page) ──
async function renderMyAppointments() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var list = document.getElementById('appointmentsList');
   if (!user) { list.innerHTML = '<p class="prof-empty">Please log in to view your appointments.</p>'; return; }
   _liveSubscribe('myApts', 'appointments', renderMyAppointments);
   if (!list.innerHTML.trim()) list.innerHTML = '<p class="prof-empty">Loading…</p>';
   // Make sure providers are loaded fresh so free_followup_days / phone / etc.
   // are current — needed for the follow-up button + hospital phone column.
   await loadAptProviders(true);
   var all = await AppDB.getAppointments(user.email);
   if (!all.length) {
      list.innerHTML = '<p class="prof-empty">No appointments booked yet.</p>';
      return;
   }

   // Read current selections BEFORE we rebuild the dropdowns.
   var catF    = (document.getElementById('myAptCategoryFilter') || {}).value || '';
   var hospF   = (document.getElementById('myAptHospitalFilter') || {}).value || '';
   var docF    = (document.getElementById('myAptDoctorFilter')   || {}).value || '';

   // STRICT cascade: child dropdowns are EMPTY+disabled until parent is picked.
   // Pick Category → Providers unlocks (narrowed to that category)
   // Pick Provider → Staff unlocks (narrowed to that category+provider)
   _fillSelectFromList('myAptCategoryFilter', '🗂 All categories',
      all.map(function(a){return a.category;}),
      function(k){ var m = APT_CAT_META[k]; return m ? (m.icon + ' ' + m.label) : k; });

   var hospSel = document.getElementById('myAptHospitalFilter');
   var docSel  = document.getElementById('myAptDoctorFilter');

   if (!catF) {
      // No category yet → lock Providers AND Staff
      if (hospSel) {
         hospSel.innerHTML = '<option value="">🏥 Pick a category first</option>';
         hospSel.disabled = true;
         hospSel.value = ''; hospF = '';
      }
      if (docSel) {
         docSel.innerHTML = '<option value="">👥 Pick a provider first</option>';
         docSel.disabled = true;
         docSel.value = ''; docF = '';
      }
   } else {
      // Category picked → fill Providers from that category
      if (hospSel) hospSel.disabled = false;
      var providersPool = all.filter(function(a) { return a.category === catF; });
      _fillSelectFromList('myAptHospitalFilter', '🏥 All providers',
         providersPool.map(function(a){return a.provider_name;}));
      // Reset Provider selection if no longer valid under new category
      if (hospF && hospSel && !providersPool.some(function(a){return a.provider_name === hospF;})) {
         hospSel.value = ''; hospF = '';
      }

      if (!hospF) {
         if (docSel) {
            docSel.innerHTML = '<option value="">👥 Pick a provider first</option>';
            docSel.disabled = true;
            docSel.value = ''; docF = '';
         }
      } else {
         if (docSel) docSel.disabled = false;
         var staffPool = providersPool.filter(function(a) { return a.provider_name === hospF; });
         _fillSelectFromList('myAptDoctorFilter', '👥 All Staff',
            staffPool.map(function(a){return a.doctor_name;}));
         if (docF && docSel && !staffPool.some(function(a){return a.doctor_name === docF;})) {
            docSel.value = ''; docF = '';
         }
      }
   }

   var search   = ((document.getElementById('myAptSearch')       || {}).value || '').trim().toLowerCase();
   var statusF  =  (document.getElementById('myAptStatusFilter') || {}).value || '';
   var df       = _readDateFilter('myAptDateFilter', 'myAptCustomDate', 'myAptRangeFrom', 'myAptRangeTo');

   var apts = all.filter(function(a) {
      if (docF    && a.doctor_name   !== docF)    return false;
      if (hospF   && a.provider_name !== hospF)   return false;
      if (catF    && a.category      !== catF)    return false;
      if (statusF && (a.status || 'Confirmed') !== statusF) return false;
      if (!_isDateInRange(a.date, df.range, df))  return false;
      if (search) {
         var hay = ((a.patient_name || '') + ' ' + (a.patient_phone || '')).toLowerCase();
         if (hay.indexOf(search) === -1) return false;
      }
      return true;
   });

   if (!apts.length) {
      list.innerHTML = '<p class="prof-empty">No appointments match the current filters.</p>';
      return;
   }

   var rows = apts.map(function(a) {
      var status = a.status || 'Confirmed';
      var cls    = status === 'Cancelled' ? 'cancelled'
                 : status === 'Completed' ? 'completed'
                 : status === 'No-show'   ? 'noshow'
                 : 'confirmed';
      var aid    = (a.apt_id || '').replace(/'/g, "\\'");
      // Customer can cancel until 2 hours after slot time (grace period for
      // traffic / urgent-work / late "I won't make it" situations). The grace
      // period applies even if the hospital already marked the booking as
      // No-show — the customer's right to cancel within 2h takes precedence.
      // After the grace expires, only the hospital can change status.
      var isCancellable = (status === 'Confirmed' || status === 'No-show')
                          && !_cancelGraceExpired(a);
      var statusLabel = status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by You'
                      : a.cancelled_by === 'hospital' ? 'by Hospital'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) {
            statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
            if (a.cancellation_reason) {
               statusLabel += '<br><small style="font-weight:400;opacity:0.75" title="' + a.cancellation_reason.replace(/"/g,'&quot;') + '">"' + (a.cancellation_reason.length > 30 ? a.cancellation_reason.slice(0,30) + '…' : a.cancellation_reason) + '"</small>';
            }
         }
      }
      var feeHtml = '<div class="apt-tbl-fee">₹' + (a.fee || 0) + '</div>';
      if (status === 'Confirmed')       feeHtml += '<div class="apt-tbl-fee-tag unpaid">not paid</div>';
      else if (status === 'Completed')  feeHtml += '<div class="apt-tbl-fee-tag paid">paid offline</div>';
      var bookedAt = '';
      if (a.created_at) {
         var dt = new Date(a.created_at);
         if (!isNaN(dt.getTime())) {
            bookedAt = '<div class="apt-tbl-name">' + dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short' }) + '</div>' +
                       '<div class="apt-tbl-sub">' + dt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }) + '</div>';
         }
      }
      var pidJs = (a.provider_id || '').replace(/'/g, "\\'");
      // Reschedule button is shown only while the slot is more than 15 min away.
      // Inside that 15-min window the customer must call the hospital directly.
      var rescheduleBtn = '';
      if (isCancellable) {
         var canReschedule = true;
         if (a.date && a.slot) {
            var slotMs = new Date(a.date + 'T' + a.slot + ':00').getTime();
            if (!isNaN(slotMs) && (slotMs - Date.now()) <= 15 * 60 * 1000) canReschedule = false;
         }
         if (canReschedule) {
            rescheduleBtn = '<button class="apt-act-btn" style="background:#1a73e8;color:#fff" onclick="showRescheduleInfo(\'' + pidJs + '\')" title="Reschedule policy">🔄 Reschedule</button>';
         }
      }

      // Free follow-up button — visible if Completed, not itself a follow-up,
      // within the provider's free_followup_days window, AND the patient hasn't
      // already used up the provider's free_followup_count for this original.
      var prov = _aptGetProvider(a.provider_id) || {};
      var fuDays  = Number(prov.free_followup_days  || 0);
      var fuLimit = Math.max(1, Number(prov.free_followup_count || 1));
      var followupBtn = '';
      if (status === 'Completed' && !a.is_followup && fuDays > 0) {
         var origDate = new Date(a.date + 'T00:00:00');
         var deadline = new Date(origDate.getTime() + fuDays * 86400000);
         var now0 = new Date(); now0.setHours(0,0,0,0);
         // Count existing follow-ups for THIS original (cancelled ones don't count toward limit).
         // Use the UNFILTERED list `all` — otherwise a follow-up dated tomorrow would
         // be hidden by today's date-filter and the button would falsely re-appear.
         var existingFu = (all || []).filter(function(b) {
            return b.followup_of === a.apt_id && b.status !== 'Cancelled';
         });
         if (now0 <= deadline && existingFu.length < fuLimit) {
            var didJs = (a.doctor_id  || '').replace(/'/g, "\\'");
            var ckJs  = (a.category   || '').replace(/'/g, "\\'");
            var aidJs = (a.apt_id     || '').replace(/'/g, "\\'");
            var dlIso = deadline.getFullYear() + '-' + String(deadline.getMonth()+1).padStart(2,'0') + '-' + String(deadline.getDate()).padStart(2,'0');
            var remainingLabel = (fuLimit > 1) ? ' (' + (fuLimit - existingFu.length) + ' left)' : '';
            followupBtn = '<button class="apt-act-btn" style="background:#00897b;color:#fff" title="Book your free follow-up (until ' + deadline.toLocaleDateString('en-IN', {day:'2-digit',month:'short'}) + ')" onclick="openAptBookModalFollowup(\'' + ckJs + '\',\'' + pidJs + '\',\'' + didJs + '\',\'' + aidJs + '\',\'' + dlIso + '\')">🔁 Book Follow-up' + remainingLabel + '</button>';
         }
      }

      var actions = isCancellable
         ? rescheduleBtn + '<button class="apt-act-btn apt-act-cancel" onclick="cancelMyAppointment(\'' + aid + '\')">✕ Cancel</button>'
         : (followupBtn || '<span style="color:#bbb">—</span>');
      if (isCancellable && followupBtn) actions += followupBtn;  // unlikely both; defensive
      var meta = APT_CAT_META[a.category] || {};
      var hospitalPhoneLine = prov.phone ? '<div class="apt-tbl-sub" style="color:#1a73e8;font-weight:600">📞 ' + _phoneLink(prov.phone) + '</div>' : '';
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">' + _tokenLabel(a) + '</span>'
         : '<span style="color:#bbb">—</span>';
      var slotCell  = a.slot ? _formatSlot12(a.slot) : '<span style="color:#888;font-size:0.72rem">🎟 Token mode</span>';
      return '<tr>' +
                '<td style="text-align:center">' + tokenCell + '</td>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div><div class="apt-tbl-slot">' + slotCell + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.doctor_name || '') + '</div><div class="apt-tbl-sub">' + (a.speciality || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.provider_name || '') + '</div><div class="apt-tbl-sub">' + (meta.icon || '') + ' ' + (meta.label || a.category || '') + '</div>' + hospitalPhoneLine + '</td>' +
                '<td><div class="apt-tbl-name">' + (a.patient_name || '—') + '</div>' + (a.patient_phone ? '<div class="apt-tbl-sub">' + a.patient_phone + '</div>' : '') + '</td>' +
                '<td class="apt-tbl-symptom" title="' + (a.patient_reason || '').replace(/"/g,'&quot;') + '">' + (a.patient_reason || '<span style="color:#bbb">—</span>') + '</td>' +
                '<td style="text-align:right">' + feeHtml + '</td>' +
                '<td><span class="order-badge ' + cls + '">' + statusLabel + '</span></td>' +
                '<td class="apt-tbl-actions">' + actions + '</td>' +
                '<td class="apt-tbl-booked">' + bookedAt + '</td>' +
                '<td class="apt-tbl-id">' + a.apt_id + '</td>' +
             '</tr>';
   }).join('');

   // Live-queue card(s) at the top — only when the customer has at least one
   // Confirmed appointment with date === today. Each card asynchronously
   // fetches the provider's queue and updates itself once data arrives.
   var liveQueueHtml = '';
   var todayYmd = _todayLocalYmd();
   var todayConfirmed = (all || []).filter(function(a) {
      return a.date === todayYmd && a.status === 'Confirmed';
   });
   if (todayConfirmed.length) {
      liveQueueHtml = '<div id="liveQueueCards" class="live-queue-list">' +
         todayConfirmed.map(function(a, i) {
            var aid = (a.apt_id || a.id || 'lq' + i);
            return '<div class="live-queue-card live-queue-loading" data-apt-id="' + aid + '">' +
                      '⏳ ' + (a.doctor_name || 'Loading…') +
                   '</div>';
         }).join('') +
      '</div>';
   }

   list.innerHTML = liveQueueHtml +
      '<div class="apt-tbl-wrap">' +
        '<table class="apt-tbl">' +
           '<thead><tr>' +
              '<th style="text-align:center">Token</th>' +
              '<th>Date / Slot</th>' +
              '<th>Doctor</th>' +
              '<th>Hospital / Category</th>' +
              '<th>Patient</th>' +
              '<th class="apt-tbl-symptom">Symptom</th>' +
              '<th style="text-align:right">Fee</th>' +
              '<th>Status</th>' +
              '<th>Actions</th>' +
              '<th class="apt-tbl-booked">Booked</th>' +
              '<th class="apt-tbl-id">Appt ID</th>' +
           '</tr></thead>' +
           '<tbody>' + rows + '</tbody>' +
        '</table>' +
      '</div>';

   // After the table is rendered, fill in each live-queue card with the
   // customer's actual position. Done async so the table renders immediately.
   if (todayConfirmed.length) {
      todayConfirmed.forEach(function(a) { _populateLiveQueueCard(a); });
   }
}

// ── Shared queue-state computation (card + pill both use this) ──
// Important rules:
//   • Scope to the customer's OWN slot. Tokens reset per slot (T1 in 9am
//     slot is a different person from T1 in 10am slot), so a customer with
//     a 10am appointment shouldn't see the 9am queue's "now serving".
//   • "Now serving" = first paid+Confirmed token in the slot. The owner
//     marks Paid when the patient walks in & pays, so paid = at the counter.
//     If no one is paid yet, "now serving" is null (idle / clinic not started).
//   • No-show: if the owner marks T1 No-show, T1 drops out of the Confirmed
//     list and the next Confirmed becomes the queue head — fully automatic.
function _computeQueueState(queueData, myApt) {
   var doctorQ = (queueData || []).filter(function(q) {
      return q.doctor_id === myApt.doctor_id
          && q.status !== 'Cancelled'
          && q.status !== 'No-show';
   });
   // Scope to MY slot. Token-mode doctors have empty slot — both sides match
   // on empty string and the whole day acts as one queue.
   var mySlotKey = myApt.slot || '';
   var slotQ = doctorQ.filter(function(q) { return (q.slot || '') === mySlotKey; });
   slotQ.sort(function(x, y) {
      return new Date(x.created_at || 0) - new Date(y.created_at || 0);
   });

   var confirmedQ      = slotQ.filter(function(q) { return q.status === 'Confirmed'; });
   // "Now serving" = the next Confirmed token in queue order (the one about
   // to be / being seen by the doctor). We always show a real token here so
   // the badge isn't empty. Payment status is shown separately as a hint —
   // it tells the customer whether that next patient has actually arrived.
   var nowServing      = confirmedQ[0] || null;
   var anyCompleted    = slotQ.some(function(q) { return q.status === 'Completed'; });

   // Slot active? A later slot (e.g. 10 PM) doesn't really start until
   // every earlier slot (9 PM, etc.) has no Confirmed patients left.
   // Otherwise the doctor is still busy with the prior slot and the
   // customer's "Now serving: T1 awaiting" is misleading.
   //
   // Also surface how many Confirmed patients remain in the IMMEDIATELY
   // PREVIOUS slot — gives the 10 PM customer a heads-up to start heading
   // over before the doctor finishes 9 PM (otherwise they get zero notice).
   var slotIsActive = true;
   var prevSlotRemaining = 0;
   var prevSlotKey = '';
   if (mySlotKey) {
      slotIsActive = !doctorQ.some(function(q) {
         var qs = q.slot || '';
         return qs !== '' && qs < mySlotKey && q.status === 'Confirmed';
      });
      if (!slotIsActive) {
         // Find the latest slot strictly before mine that still has Confirmed
         doctorQ.forEach(function(q) {
            var qs = q.slot || '';
            if (qs !== '' && qs < mySlotKey && q.status === 'Confirmed') {
               if (qs > prevSlotKey) prevSlotKey = qs;
            }
         });
         prevSlotRemaining = doctorQ.filter(function(q) {
            return q.status === 'Confirmed' && (q.slot || '') === prevSlotKey;
         }).length;
      }
   }

   var matchMine = function(q) {
      return (q.id && q.id === myApt.id) ||
             (q.token === myApt.token && q.is_followup === myApt.is_followup);
   };
   var myIdx  = confirmedQ.findIndex(matchMine);
   var myRow  = myIdx >= 0 ? confirmedQ[myIdx] : null;
   var myPaid = !!(myRow && myRow.is_paid);
   var ahead  = myIdx > 0 ? myIdx : 0;
   // "Your turn" requires BOTH: you're first in line AND you've paid (= at
   // the counter, ready to go in). If you're first but haven't paid, the
   // doctor isn't seeing you yet — status text nudges you to pay first.
   var isMyTurn = !!(myRow && myRow.is_paid && myIdx === 0);

   return {
      slotQ:        slotQ,
      confirmedQ:   confirmedQ,
      nowServing:   nowServing,
      anyCompleted: anyCompleted,
      myIdx:        myIdx,
      ahead:        ahead,
      isMyTurn:     isMyTurn && slotIsActive,   // even if you're first + paid, your slot hasn't started
      myPaid:       myPaid,
      slotIsActive: slotIsActive,
      prevSlotKey:  prevSlotKey,
      prevSlotRemaining: prevSlotRemaining
   };
}

// Fetch the day's queue for one provider+doctor, compute the customer's
// position, and replace the loading placeholder with a compact chip.
// Privacy: never renders other patients' names — only their tokens (which
// the customer can also see on the doctor's queue board in person).
async function _populateLiveQueueCard(myApt) {
   var aid = myApt.apt_id || myApt.id;
   var card = document.querySelector('.live-queue-card[data-apt-id="' + aid + '"]');
   if (!card) return;

   var qState = _computeQueueState(await AppDB.getProviderDayQueue(myApt.provider_id, myApt.date), myApt);
   var nowServing    = qState.nowServing;
   var anyCompleted  = qState.anyCompleted;
   var ahead         = qState.ahead;
   var isMyTurn      = qState.isMyTurn;
   var myPaid        = qState.myPaid;

   var queueFinished = qState.confirmedQ.length === 0 && anyCompleted;
   var nowServingHtml;
   if (!qState.slotIsActive) {
      // Doctor is still busy with an earlier slot — don't claim anyone is
      // "now serving" in this slot yet. Show the next-in-line token greyed
      // so the customer knows their place but doesn't head over early.
      nowServingHtml = nowServing
         ? '<span class="lq-token lq-token-idle">' + _tokenLabel(nowServing) + ' <span class="lq-pending-tag">slot not started</span></span>'
         : '<span class="lq-token lq-token-idle">slot not started</span>';
   } else if (nowServing) {
      var paidCls    = nowServing.is_paid ? 'lq-token-done' : 'lq-token-pending';
      var paidSuffix = nowServing.is_paid ? '' : ' <span class="lq-pending-tag">awaiting</span>';
      nowServingHtml = '<span class="lq-token ' + paidCls + '">' + _tokenLabel(nowServing) + paidSuffix + '</span>';
   } else {
      nowServingHtml = '<span class="lq-token lq-token-idle">' + (queueFinished ? 'queue done' : 'no one waiting') + '</span>';
   }
   var myTokenHtml = myApt.token
      ? '<span class="lq-token lq-token-mine">' + _tokenLabel(myApt) + '</span>'
      : '<span style="color:#bbb">—</span>';

   var statusLine, statusColor;
   if (!qState.slotIsActive) {
      var prevLbl = qState.prevSlotKey ? ' (' + _formatSlot12(qState.prevSlotKey) + ')' : '';
      if (qState.prevSlotRemaining === 1) {
         statusLine = '🚶 <strong>Head over now</strong> — only 1 patient left in the previous slot' + prevLbl + '.';
         statusColor = '#ef6c00';
      } else if (qState.prevSlotRemaining === 2) {
         statusLine = '⏳ Previous slot' + prevLbl + ' has <strong>2 patients left</strong> — start getting ready.';
         statusColor = '#1565c0';
      } else if (qState.prevSlotRemaining > 0) {
         statusLine = '⏳ Previous slot' + prevLbl + ' has <strong>' + qState.prevSlotRemaining + ' patients left</strong> — no need to head over yet.';
         statusColor = '#666';
      } else {
         statusLine = '⏳ <strong>Waiting for an earlier slot to finish</strong>.';
         statusColor = '#666';
      }
   } else if (isMyTurn) {
      statusLine = '🩺 <strong>It\'s your turn — go in now.</strong>';
      statusColor = '#0a8a3a';
   } else if (ahead === 0 && !myPaid) {
      statusLine = anyCompleted
         ? '🚶 <strong>You\'re next</strong> — pay at the counter.'
         : '🚶 <strong>Reach the clinic</strong> & pay at the counter.';
      statusColor = '#ef6c00';
   } else if (ahead === 1) {
      statusLine = '🏃 <strong>1 patient ahead</strong> of you.';
      statusColor = '#ef6c00';
   } else if (ahead > 0) {
      statusLine = '👥 <strong>' + ahead + ' patients ahead</strong> of you.';
      statusColor = '#1565c0';
   } else {
      statusLine = anyCompleted ? '🏁 Queue done for this slot.' : '⏳ Clinic hasn\'t started this slot.';
      statusColor = '#666';
   }

   var prov = _aptGetProvider(myApt.provider_id) || {};
   var perPatient = Number(prov.avg_consult_minutes) || 10;
   var waitMins = ahead * perPatient;
   var waitLine = ahead > 0
      ? '⏱ Approx wait: <strong>' + waitMins + ' min</strong> <span style="color:#888;font-size:0.78rem">(~' + perPatient + ' min/patient)</span>'
      : '';

   var docLine = '🩺 <strong>' + (myApt.doctor_name || '') + '</strong>' +
                 (myApt.provider_name ? ' · ' + myApt.provider_name : '');

   card.classList.remove('live-queue-loading');
   card.innerHTML =
      '<div class="lq-head">' +
         '<div class="lq-doc">' + docLine + '</div>' +
         '<div class="lq-date">📅 Today' + (myApt.slot ? ' · ' + _formatSlot12(myApt.slot) : '') + '</div>' +
      '</div>' +
      '<div class="lq-tokens">' +
         '<div class="lq-token-group"><label>🎟 Your token</label>' + myTokenHtml + '</div>' +
         '<div class="lq-token-group"><label>▶ Now serving</label>' + nowServingHtml + '</div>' +
      '</div>' +
      '<div class="lq-status" style="color:' + statusColor + '">' + statusLine + '</div>' +
      (waitLine ? '<div class="lq-wait">' + waitLine + '</div>' : '');
}

// ── Live-token pill (floats on every customer page when a today appointment is active) ──
// Wired from home.html / profile.html init. Listens to realtime appointment
// changes so it refreshes when the doctor advances the queue. The pill links
// to My Appointments where the full live-queue card lives.
async function _initLiveTokenPill() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   // On profile.html, the My Appointments tab already has the full card —
   // don't double up with a floating pill on top of it.
   if (location.pathname.endsWith('profile.html') && (location.search || '').indexOf('tab=appointments') !== -1) return;
   await _refreshLiveTokenPill();
   if (typeof _liveSubscribe === 'function') {
      _liveSubscribe('liveTokenPill', 'appointments', _refreshLiveTokenPill);
   }
}

async function _refreshLiveTokenPill() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   // Tear down any old single-pill from a previous session
   var legacy = document.getElementById('liveTokenPill');
   if (legacy) legacy.remove();
   var container = document.getElementById('liveTokenPills');

   var apts = await AppDB.getAppointments(user.email);
   var todayYmd = _todayLocalYmd();
   var myToday = (apts || []).filter(function(a) {
      return a.date === todayYmd && a.status === 'Confirmed';
   });
   if (!myToday.length) { if (container) container.remove(); return; }

   // For each today appointment, fetch the doctor's queue + compute state
   var enriched = await Promise.all(myToday.map(async function(apt) {
      var queueData = await AppDB.getProviderDayQueue(apt.provider_id, apt.date);
      var st = _computeQueueState(queueData, apt);
      return {
         apt:               apt,
         nowServing:        st.nowServing,
         anyCompleted:      st.anyCompleted,
         queueFinished:     st.confirmedQ.length === 0 && st.anyCompleted,
         ahead:             st.ahead,
         myIdx:             st.myIdx,
         isMyTurn:          st.isMyTurn,
         myPaid:            st.myPaid,
         slotIsActive:      st.slotIsActive,
         prevSlotRemaining: st.prevSlotRemaining
      };
   }));

   // Sort by urgency — active slots beat inactive (later) slots; within
   // active, "your turn" wins, then smaller "ahead", then slot time.
   enriched.sort(function(x, y) {
      if (x.slotIsActive !== y.slotIsActive) return x.slotIsActive ? -1 : 1;
      var ax = x.isMyTurn ? -1 : (x.ahead < 0 ? 9999 : x.ahead);
      var ay = y.isMyTurn ? -1 : (y.ahead < 0 ? 9999 : y.ahead);
      if (ax !== ay) return ax - ay;
      if ((x.apt.slot || '') !== (y.apt.slot || '')) return (x.apt.slot || '').localeCompare(y.apt.slot || '');
      return new Date(x.apt.created_at || 0) - new Date(y.apt.created_at || 0);
   });

   var top = enriched.slice(0, 3);
   var extraDesktop = enriched.length - top.length;
   // Mobile collapses the stack to the first pill only — total of the others
   // (including any beyond top 3) becomes the badge count on it.
   var extraMobile = enriched.length - 1;

   var pillsHtml = top.map(function(item, i) {
      return _renderTokenPill(item, i === 0 ? extraMobile : 0);
   }).join('');
   if (extraDesktop > 0) {
      pillsHtml += '<div class="live-token-pill live-token-pill-more" onclick="window.location=\'profile.html?tab=appointments\'">+ ' + extraDesktop + ' more appointment' + (extraDesktop === 1 ? '' : 's') + ' →</div>';
   }

   if (container) {
      container.innerHTML = pillsHtml;
   } else {
      container = document.createElement('div');
      container.id = 'liveTokenPills';
      container.innerHTML = pillsHtml;
      document.body.appendChild(container);
   }
}

// extraCount: number of other appointments collapsed onto this pill on
// mobile (rendered as a small red badge — desktop hides it via CSS).
function _renderTokenPill(item, extraCount) {
   var apt = item.apt;
   var nowServingLabel = item.nowServing
      ? _tokenLabel(item.nowServing)
      : (item.queueFinished ? 'queue done' : '—');
   var msg, urgentCls = '';
   if (!item.slotIsActive) {
      if (item.prevSlotRemaining === 1)      { msg = '🚶 Head over — 1 left in prev slot'; urgentCls = 'lqp-urgent'; }
      else if (item.prevSlotRemaining > 0)   { msg = '⏳ ' + item.prevSlotRemaining + ' left in prev slot'; }
      else                                   { msg = '⏳ Earlier slot still running'; }
   }
   else if (item.isMyTurn)                            { msg = '🩺 Your turn!';                                                  urgentCls = 'lqp-turn'; }
   else if (item.ahead === 0 && !item.myPaid)         { msg = item.anyCompleted ? '🚶 You\'re next — go pay' : '🚶 Go pay';      urgentCls = 'lqp-urgent'; }
   else if (item.ahead === 1)                         { msg = '🏃 1 ahead';                                                     urgentCls = 'lqp-urgent'; }
   else if (item.ahead > 0)                           { msg = '👥 ' + item.ahead + ' ahead'; }
   else                                               { msg = item.anyCompleted ? '🏁 Queue done' : '⏳ Clinic not started'; }
   var docShort = (apt.doctor_name || '').split(/\s+/).slice(0, 2).join(' ');
   var titleAttr = ((apt.doctor_name || '') + (apt.provider_name ? ' · ' + apt.provider_name : '')).replace(/"/g, '&quot;');
   var badge = extraCount > 0 ? '<span class="lqp-count-badge">+' + extraCount + '</span>' : '';
   return '<div class="live-token-pill" onclick="window.location=\'profile.html?tab=appointments\'" title="' + titleAttr + '">' +
             '<span class="lqp-emoji">🎟</span>' +
             '<span><strong>' + _tokenLabel(apt) + '</strong>' + (docShort ? ' <span class="lqp-doc">· ' + docShort + '</span>' : '') + '</span>' +
             '<span class="lqp-divider">·</span>' +
             '<span class="lqp-now-block">Now: <span class="lqp-now">' + nowServingLabel + '</span></span>' +
             '<span class="lqp-divider">·</span>' +
             '<span class="' + urgentCls + '">' + msg + '</span>' +
             badge +
          '</div>';
}

// Helper: populate a <select> with unique values from a list, preserving current selection.
// optionLabel(value) → display text (defaults to identity).
function _fillSelectFromList(selectId, defaultLabel, values, optionLabel) {
   var sel = document.getElementById(selectId);
   if (!sel) return;
   var current = sel.value;
   var unique  = Array.from(new Set(values.filter(Boolean))).sort();
   sel.innerHTML = '<option value="">' + defaultLabel + '</option>' +
      unique.map(function(v) {
         var label = optionLabel ? optionLabel(v) : v;
         return '<option value="' + v + '"' + (v === current ? ' selected' : '') + '>' + label + '</option>';
      }).join('');
}

// ── Appeal workflow for blocked customers ──
// Customer is locked out by the no-show auto-block. This lets them submit a
// short explanation; admin reviews from the Users tab and approves/denies.
// On approval, only no-shows AFTER the approval timestamp count → clean slate.
function openAppealModal(noShowCount) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser')) || {};
   // If they've already submitted a pending appeal, don't let them flood admin.
   if (user.block_appeal_status === 'pending') {
      alert('You\'ve already submitted an appeal. Admin will review it shortly.');
      return;
   }
   var reason = prompt(
      'Appeal to admin\n\n' +
      'Your account has ' + noShowCount + ' no-shows in the last 30 days. ' +
      'Please explain what happened and why your account should be unblocked. ' +
      'The admin will review and respond.\n\n' +
      '(Minimum 20 characters)'
   );
   if (reason === null) return;
   reason = (reason || '').trim();
   if (reason.length < 20) {
      alert('Please give a more detailed reason (at least 20 characters) so admin can review properly.');
      return;
   }
   submitAppeal(reason);
}

async function submitAppeal(reason) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   var ok = await AppDB.updateUser(user.email, {
      block_appeal_reason: reason,
      block_appeal_at: new Date().toISOString(),
      block_appeal_status: 'pending'
   });
   if (!ok) { alert('Failed to submit appeal. Please try again later.'); return; }
   // Reflect locally so re-clicks see the pending status
   user.block_appeal_reason = reason;
   user.block_appeal_status = 'pending';
   sessionStorage.setItem('loggedInUser', JSON.stringify(user));
   alert('✅ Appeal submitted. Admin will review and respond. Once approved, you\'ll be able to book again.');
}

// Customer-side reschedule action — explains that the hospital controls reschedules.
// Reschedule isn't customer-initiated to keep fee/refund flows clean and avoid
// patients shuffling slots endlessly.
function showRescheduleInfo(providerId) {
   var prov = providerId ? _aptGetProvider(providerId) : null;
   var phoneLine = (prov && prov.phone) ? '\n\nHospital phone: ' + prov.phone : '';
   alert(
      'Reschedule is handled by the hospital only.\n\n' +
      'You can:\n' +
      '  • Cancel this appointment and book again on a different date/slot, OR\n' +
      '  • Call the hospital and ask them to reschedule for you.' + phoneLine
   );
}

async function cancelMyAppointment(aptId) {
   // Block self-cancel once the 2-hour grace period after slot time has expired.
   // The customer should contact the hospital directly for late issues.
   var apts = await AppDB.getAppointments((JSON.parse(sessionStorage.getItem('loggedInUser')) || {}).email || '');
   var apt = apts.find(function(a) { return a.apt_id === aptId; });
   if (apt && _cancelGraceExpired(apt)) {
      alert('The cancel window for this appointment has expired (' + apt.date + (apt.slot ? ' ' + apt.slot : '') + '). Please contact the hospital directly to resolve.');
      return;
   }
   // Cancel-once rule for follow-ups: customer can self-cancel at most one
   // follow-up per original visit. Prevents the abuse loop of book → cancel
   // → book → cancel. If they've already cancelled one, they must call the
   // hospital for further changes.
   if (apt && apt.is_followup && apt.followup_of) {
      var alreadyCancelledByMe = apts.filter(function(b) {
         return b.is_followup
             && b.followup_of === apt.followup_of
             && b.status === 'Cancelled'
             && b.cancelled_by === 'customer';
      });
      if (alreadyCancelledByMe.length >= 1) {
         var prov0 = _aptGetProvider(apt.provider_id) || {};
         var phoneLine = prov0.phone ? '\n\nHospital phone: ' + prov0.phone : '';
         alert('You\'ve already cancelled one follow-up for this consultation. To avoid abuse, further changes must be done by the hospital. Please call them.' + phoneLine);
         return;
      }
   }
   var reason = prompt('Please tell us why you\'re cancelling (so the hospital knows):\n\n(Optional — leave blank if you prefer.)');
   if (reason === null) return;
   var ok = await AppDB.updateAppointmentStatus(aptId, 'Cancelled', {
      cancelled_by: 'customer',
      cancellation_reason: (reason || '').trim()
   });
   if (!ok) { alert('Failed to cancel. Please try again.'); return; }
   renderMyAppointments();
}

// ── WISHLIST ──
function getWishlist(email)           { return _db.wishlist; }
function saveWishlistData(email, arr) { _db.wishlist = arr; }  // kept for compat

async function toggleWishlist(itemId, catKey, btn) {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in or sign up to use the Wishlist.'); return; }
   const idx = _db.wishlist.indexOf(itemId);
   if (idx >= 0) {
      _db.wishlist.splice(idx, 1);
      AppDB.removeFromWishlist(user.email, itemId);
      if (btn) { btn.textContent = '🤍'; btn.classList.remove('wished'); btn.title = 'Add to Wishlist'; }
      showToast('Removed from Wishlist');
   } else {
      _db.wishlist.push(itemId);
      AppDB.addToWishlist(user.email, itemId);
      if (btn) { btn.textContent = '❤️'; btn.classList.add('wished'); btn.title = 'Remove from Wishlist'; }
      showToast('❤️ Added to Wishlist!');
   }
}

function renderWishlistTab() {
   const container = document.getElementById('wishlistItems');
   if (!_db.wishlist.length) { container.innerHTML = '<p class="prof-empty">No items in wishlist yet.<br>Click 🤍 on any product to add it.</p>'; return; }
   // Resolve item_ids to full item objects from in-memory products
   var wlItems = [];
   _db.wishlist.forEach(function(itemId) {
      var found = Object.keys(products).find(function(catKey) {
         var item = products[catKey].items.find(function(i) { return i.id === itemId; });
         if (item) { wlItems.push(Object.assign({}, item, { catKey: catKey })); return true; }
         return false;
      });
   });
   if (!wlItems.length) { container.innerHTML = '<p class="prof-empty">No items in wishlist yet.<br>Click 🤍 on any product to add it.</p>'; return; }
   container.innerHTML = wlItems.map(function(item) { return `
      <div class="wish-item-card">
         <img src="${item.img}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80?text=img'"/>
         <div class="wish-item-info">
            <div class="wish-item-name">${item.name}</div>
            <div class="wish-item-desc">${item.desc || ''}</div>
            <div class="wish-item-price">₹${(item.price || 0).toLocaleString('en-IN')}</div>
         </div>
         <div class="wish-item-actions">
            <button class="addr-edit-btn" onclick="wishGoToProduct('${item.catKey}')">🛍️ View</button>
            <button class="addr-del-btn"  onclick="removeFromWishlistTab('${item.id}')">🗑️</button>
         </div>
      </div>`; }).join('');
}

function removeFromWishlistTab(itemId) {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   _db.wishlist = _db.wishlist.filter(function(id) { return id !== itemId; });
   AppDB.removeFromWishlist(user.email, itemId);
   renderWishlistTab();
}

function wishGoToProduct(catKey) {
   localStorage.setItem('_openCat', catKey);
   window.location = 'home.html';
}

function showProfileToast(msg) {
   const t = document.getElementById('profileToast');
   if (!t) return;
   t.textContent = msg;
   t.classList.remove('hidden');
   setTimeout(() => t.classList.add('hidden'), 2800);
}

// ── SAVED CARDS ──
function getSavedCards(email)       { return _db.cards; }
function saveCardsData(email, arr)  { _db.cards = arr; }  // kept for compat

function getCardBrand(number) {
   const n = number.replace(/\s/g, '');
   if (/^4/.test(n))           return 'Visa';
   if (/^5[1-5]/.test(n))      return 'Mastercard';
   if (/^3[47]/.test(n))       return 'Amex';
   if (/^6/.test(n))           return 'RuPay';
   return 'Card';
}

function formatCardInput(input) {
   let v = input.value.replace(/\D/g, '').substring(0, 16);
   input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
   let v = input.value.replace(/\D/g, '').substring(0, 4);
   if (v.length >= 3) v = v.substring(0, 2) + '/' + v.substring(2);
   input.value = v;
}

function renderCards() {
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const list  = document.getElementById('cardsList');
   const cards = getSavedCards(user.email);
   if (!cards.length) { list.innerHTML = '<p class="prof-empty">No saved cards yet.<br>Add a card to speed up checkout.</p>'; return; }
   list.innerHTML = cards.map((c, i) => `
      <div class="saved-card-row">
         <div class="saved-card-left">
            <span class="card-brand-badge">${c.brand}</span>
            <div class="saved-card-details">
               <div class="saved-card-num">•••• •••• •••• ${c.last4}</div>
               <div class="saved-card-meta">${c.nameOnCard} &nbsp;·&nbsp; Expires ${c.expiry}</div>
            </div>
         </div>
         <button class="addr-del-btn" onclick="deleteCard(${i})">🗑️</button>
      </div>`).join('');
}

function openCardModal() {
   ['card-number','card-expiry','card-name'].forEach(id => document.getElementById(id).value = '');
   document.getElementById('cardModal').classList.remove('hidden');
}

function closeCardModal()           { document.getElementById('cardModal').classList.add('hidden'); }
function handleCardOverlayClick(e)  { if (e.target.id === 'cardModal') closeCardModal(); }

async function saveCard() {
   const number = document.getElementById('card-number').value.replace(/\s/g, '');
   const expiry = document.getElementById('card-expiry').value.trim();
   const name   = document.getElementById('card-name').value.trim();
   if (number.length < 12 || !expiry || !name) { alert('Please fill in Card Number, Expiry and Name.'); return; }
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const cards = getSavedCards(user.email);
   const last4 = number.slice(-4);
   const brand = getCardBrand(number);
   if (cards.some(c => c.last4 === last4 && c.expiry === expiry)) { alert('This card is already saved.'); return; }
   const newCard = { id: crypto.randomUUID(), last4, expiry, nameOnCard: name, brand };
   cards.push(newCard);
   _db.cards = cards;
   await AppDB.insertCard({ id: newCard.id, user_email: user.email, last4, expiry, name_on_card: name, brand });
   closeCardModal();
   renderCards();
   showProfileToast('✅ Card saved! CVV will be asked at payment time.');
}

async function deleteCard(idx) {
   if (!confirm('Remove this card?')) return;
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const cards = getSavedCards(user.email);
   const card  = cards[idx];
   cards.splice(idx, 1);
   _db.cards = cards;
   if (card && card.id) await AppDB.deleteCard(card.id);
   renderCards();
   showProfileToast('🗑️ Card removed.');
}

// ── SAVED CARDS IN PAYMENT MODAL ──
let _selectedSavedCard = -1;

async function loadSavedCardsInPayment() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const container = document.getElementById('savedCardsInPayment');
   if (!container || !user) return;
   // Always fetch fresh from Supabase when payment modal opens
   const data = await AppDB.getCards(user.email);
   _db.cards = (data || []).map(function(c) {
      return { id: c.id, last4: c.last4 || '', brand: c.brand || '', expiry: c.expiry || '', nameOnCard: c.name_on_card || '' };
   });
   const cards = _db.cards;
   _selectedSavedCard = -1;
   if (!cards.length) { container.innerHTML = ''; return; }
   container.innerHTML = `
      <p class="rp-label" style="margin-bottom:6px">Saved Cards</p>
      ${cards.map((c, i) => `
         <div class="rp-saved-card" id="rp_card_${i}" onclick="selectSavedCard(${i})">
            <span class="card-brand-badge">${c.brand}</span>
            <span style="font-weight:600">•••• ${c.last4}</span>
            <span style="color:#aaa;font-size:0.78rem;margin-left:6px">${c.expiry}</span>
            <div class="rp-cvv-row hidden" id="rp_cvv_row_${i}" onclick="event.stopPropagation()">
               <input class="rp-input" id="rp_cvv_${i}" type="password" placeholder="CVV" maxlength="4" style="margin-top:8px"/>
               <button class="rp-pay-btn" style="margin-top:8px" onclick="payWithSavedCard(${i})">Pay Now</button>
            </div>
         </div>`).join('')}
      <div class="rp-or-divider">— or use a new card —</div>`;
}

function selectSavedCard(idx) {
   if (_selectedSavedCard >= 0) {
      document.getElementById('rp_card_' + _selectedSavedCard).classList.remove('selected');
      document.getElementById('rp_cvv_row_' + _selectedSavedCard).classList.add('hidden');
   }
   if (_selectedSavedCard === idx) { _selectedSavedCard = -1; return; }
   _selectedSavedCard = idx;
   document.getElementById('rp_card_' + idx).classList.add('selected');
   document.getElementById('rp_cvv_row_' + idx).classList.remove('hidden');
   document.getElementById('rp_cvv_' + idx).focus();
}

function payWithSavedCard(idx) {
   const cvv = (document.getElementById('rp_cvv_' + idx).value || '').trim();
   if (cvv.length < 3) { alert('Please enter your CVV (3 or 4 digits).'); return; }
   processPayment('Card (' + document.getElementById('rp_card_' + idx).querySelector('.card-brand-badge').textContent + ' •••• ' + getSavedCards(JSON.parse(sessionStorage.getItem('loggedInUser')).email)[idx].last4 + ')');
}

// ── ADMIN: STORE ORDERS MODAL ─────────────────────────────
var _soStoreId   = null;
var _soStoreName = '';
var _soTabFilter = '';           // '' = All, 'Pending Pickup', 'Ready', 'Completed'
var _soFMode     = 'all';        // 'all' | 'day' | 'month' | 'year'
var _soDay       = '';
var _soMonth     = '';
var _soYear      = '';

function showStoreOrders(storeId, storeName) {
   _soStoreId   = storeId;
   _soStoreName = storeName;
   _soTabFilter = '';
   _soFMode     = 'all';
   _soDay = _soMonth = _soYear = '';
   var modal = document.getElementById('storeOrdersModal');
   document.getElementById('soStoreName').textContent = storeName;
   document.getElementById('soStoreSub').textContent  = storeId || 'Platform Store';
   renderSOFilterBar();
   _renderSO();
   if (modal) modal.classList.remove('hidden');
}

function closeStoreOrdersModal() {
   var modal = document.getElementById('storeOrdersModal');
   if (modal) modal.classList.add('hidden');
}

function handleSOOverlayClick(e) {
   if (e.target.id === 'storeOrdersModal') closeStoreOrdersModal();
}

function _soGetOrders() {
   return _db.orders.filter(function(o) {
      if (_soStoreId === null) return !o.storeId;
      return o.storeId === _soStoreId;
   });
}

function _soApplyFilters(orders) {
   var out = orders;
   if (_soFMode === 'day' && _soDay) {
      out = out.filter(function(o) { return (o.date || '').startsWith(_soDay.split('-').reverse().map(function(p,i){ return i===0?p:p.padStart(2,'0'); }).join(' ').trim()); });
      // Simpler: compare yyyy-mm-dd against order date string
      var parts = _soDay.split('-');  // yyyy-mm-dd
      if (parts.length === 3) {
         var yyyy = parts[0], mm = parts[1], dd = parts[2];
         out = orders.filter(function(o) { var d = new Date(o.date||o.timestamp||0); return d.getFullYear()==parseInt(yyyy) && (d.getMonth()+1)==parseInt(mm) && d.getDate()==parseInt(dd); });
      }
   } else if (_soFMode === 'month' && _soMonth) {
      var mp = _soMonth.split('-');   // yyyy-mm
      if (mp.length === 2) {
         out = orders.filter(function(o) { var d = new Date(o.date||o.timestamp||0); return d.getFullYear()==parseInt(mp[0]) && (d.getMonth()+1)==parseInt(mp[1]); });
      }
   } else if (_soFMode === 'year' && _soYear) {
      out = orders.filter(function(o) { var d = new Date(o.date||o.timestamp||0); return d.getFullYear()==parseInt(_soYear); });
   }
   if (_soTabFilter) out = out.filter(function(o) { return o.status === _soTabFilter; });
   return out;
}

function _renderSO() {
   var all      = _soGetOrders();
   var filtered = _soApplyFilters(all);
   _renderSOStats(all);
   _renderSOTabs(all, filtered);
   _renderSOList(filtered);
}

function _renderSOStats(all) {
   var el = document.getElementById('soStatsBar');
   if (!el) return;
   var pending   = all.filter(function(o) { return o.status === 'Pending Pickup'; }).length;
   var ready     = all.filter(function(o) { return o.status === 'Ready'; }).length;
   var completed = all.filter(function(o) { return o.status === 'Completed'; }).length;
   var revenue   = all.reduce(function(s, o) { return s + (o.total || 0); }, 0);
   el.innerHTML =
      '<div class="so-stat"><div class="so-stat-num">' + all.length + '</div><div class="so-stat-label">Total</div></div>' +
      '<div class="so-stat"><div class="so-stat-num">' + pending + '</div><div class="so-stat-label">Pending</div></div>' +
      '<div class="so-stat"><div class="so-stat-num">' + ready + '</div><div class="so-stat-label">Ready</div></div>' +
      '<div class="so-stat"><div class="so-stat-num">' + completed + '</div><div class="so-stat-label">Completed</div></div>' +
      '<div class="so-stat"><div class="so-stat-num">₹' + revenue.toLocaleString('en-IN') + '</div><div class="so-stat-label">Revenue</div></div>';
}

function _renderSOTabs(all, filtered) {
   var el = document.getElementById('soTabs');
   if (!el) return;
   function tabBtn(label, filter) {
      var active = _soTabFilter === filter ? ' active' : '';
      return '<button class="so-tab' + active + '" onclick="_soSetTab(\'' + filter + '\')">' + label + '</button>';
   }
   el.innerHTML =
      tabBtn('All Orders', '') +
      tabBtn('⏳ Pending', 'Pending Pickup') +
      tabBtn('✅ Ready', 'Ready') +
      tabBtn('🏁 Completed', 'Completed');
}

function _soSetTab(filter) {
   _soTabFilter = filter;
   _renderSO();
}

function renderSOFilterBar() {
   var el = document.getElementById('soFilterBar');
   if (!el) return;
   var nowY = new Date().getFullYear();
   var years = [];
   for (var y = nowY; y >= nowY - 4; y--) years.push(y);

   el.innerHTML =
      '<div class="so-filter-row">' +
         '<div class="so-fmode-group">' +
            '<button class="so-fmode-btn' + (_soFMode==='all'   ?' active':'') + '" onclick="setSOFilterMode(\'all\')">All Time</button>' +
            '<button class="so-fmode-btn' + (_soFMode==='day'   ?' active':'') + '" onclick="setSOFilterMode(\'day\')">By Day</button>' +
            '<button class="so-fmode-btn' + (_soFMode==='month' ?' active':'') + '" onclick="setSOFilterMode(\'month\')">By Month</button>' +
            '<button class="so-fmode-btn' + (_soFMode==='year'  ?' active':'') + '" onclick="setSOFilterMode(\'year\')">By Year</button>' +
         '</div>' +
      '</div>' +
      '<div class="so-finput-group" id="soFinputGroup">' +
         (_soFMode === 'day'   ? '<input type="date" class="so-finput" value="' + _soDay + '" onchange="_soDay=this.value;_renderSO()" />' : '') +
         (_soFMode === 'month' ? '<input type="month" class="so-finput" value="' + _soMonth + '" onchange="_soMonth=this.value;_renderSO()" />' : '') +
         (_soFMode === 'year'  ? '<select class="so-finput" onchange="_soYear=this.value;_renderSO()">' + years.map(function(y){ return '<option value="'+y+'"'+(String(y)===_soYear?' selected':'')+'>'+y+'</option>'; }).join('') + '</select>' : '') +
      '</div>';
}

function setSOFilterMode(mode) {
   _soFMode = mode;
   if (mode === 'all') { _soDay = _soMonth = _soYear = ''; }
   renderSOFilterBar();
   _renderSO();
}

function _renderSOList(orders) {
   var el = document.getElementById('soOrderList');
   if (!el) return;
   if (!orders.length) { el.innerHTML = '<div class="so-empty">No orders match the current filter.</div>'; return; }
   el.innerHTML = orders.map(function(o) {
      var cls = o.status === 'Ready' ? 'so-badge-ready' : o.status === 'Completed' ? 'so-badge-done' : 'so-badge-pending';
      var items = (o.items || []).map(function(it) { return '<span class="so-item-pill">' + it.name + ' ×' + it.qty + '</span>'; }).join('');
      return '<div class="so-order-row">' +
                '<div class="so-order-top">' +
                   '<span class="so-order-id">' + (o.orderId || o.order_id) + '</span>' +
                   '<span class="so-badge ' + cls + '">' + o.status + '</span>' +
                '</div>' +
                '<div class="so-order-meta">' + (o.customerName||'') + ' · ' + (o.date||'') + '</div>' +
                '<div class="so-order-items">' + items + '</div>' +
                '<div class="so-order-footer">₹' + (o.total||0).toLocaleString('en-IN') + '</div>' +
             '</div>';
   }).join('');
}

// ─────────────────────────────────────────────────────────
// CONSULTATION RECEIPT
//   Opens a new window with a print-formatted consultation receipt
//   for the given appointment id. Layout mirrors the standard hospital
//   bill format: header (hospital name / address / GST), two-column
//   patient + bill block, particulars table, totals row, signature
//   footer with create/print metadata.
// ─────────────────────────────────────────────────────────
async function printConsultationReceipt(aptId) {
   if (!aptId) return;

   // Load appointment (search providers cache first for a quick row, else fetch all)
   var apt = null;
   var all = await AppDB.getAllAppointments();
   apt = (all || []).find(function(a) { return a.apt_id === aptId; });
   if (!apt) { alert('Appointment not found.'); return; }

   // Find the provider for header details
   await loadAptProviders(true);
   var prov = _aptGetProvider(apt.provider_id) || {};

   // Look up the patient's permanent hospital ID (issued on first paid visit).
   // Receipts are only generated for paid bookings so this should always
   // resolve, but stay defensive in case the patient was paid via a route
   // that didn't mint an ID (e.g. legacy data before this feature).
   var hospitalPatientId = '';
   try {
      hospitalPatientId = await AppDB.ensureHospitalPatientId(apt.provider_id, apt.patient_phone, apt.patient_name) || '';
   } catch (e) { /* receipt still works without it */ }

   // Build bill identifiers in the standard hospital format:
   //   <prefix> + YYMMDD + 2 letters from apt_id + 4-digit serial (hash of apt_id)
   // The 2 letters from apt_id make the number distinct between hospitals/bookings;
   // the 4-digit serial is a deterministic hash so reprints always match.
   var createDtForId = apt.created_at ? new Date(apt.created_at) : new Date();
   var _yy = String(createDtForId.getFullYear()).slice(-2);
   var _mm = String(createDtForId.getMonth() + 1).padStart(2, '0');
   var _dd = String(createDtForId.getDate()).padStart(2, '0');
   var dateSuffix = _yy + _mm + _dd;
   var _hash = 0;
   var _src  = String(apt.apt_id || '');
   for (var _i = 0; _i < _src.length; _i++) {
      _hash = ((_hash << 5) - _hash + _src.charCodeAt(_i)) | 0;
   }
   var serial     = String(Math.abs(_hash) % 10000).padStart(4, '0');
   var alphaOnly  = _src.replace(/[^A-Za-z]/g, '').toUpperCase();
   var twoLetters = (alphaOnly.slice(-2) || 'XX').padEnd(2, 'X');
   var billNo     = 'OC'  + dateSuffix + twoLetters + serial;  // e.g. OC260531LK6894
   var receiptNo  = 'REC' + dateSuffix + twoLetters + serial;  // e.g. REC260531LK6894

   // Format dates
   var now      = new Date();
   var createDt = apt.created_at ? new Date(apt.created_at) : now;
   var fmtDT    = function(d) {
      if (!d || isNaN(d.getTime())) return '';
      var dd = String(d.getDate()).padStart(2,'0');
      var mm = d.toLocaleString('en-US', { month: 'short' });
      var yy = d.getFullYear();
      var hr = String(d.getHours()).padStart(2,'0');
      var mn = String(d.getMinutes()).padStart(2,'0');
      return dd + '-' + mm + '-' + yy + ' ' + hr + ':' + mn;
   };
   var fmtDateOnly = function(d) {
      if (!d || isNaN(d.getTime())) return '';
      var dd = String(d.getDate()).padStart(2,'0');
      var mm = d.toLocaleString('en-US', { month: 'short' });
      var yy = d.getFullYear();
      return dd + '-' + mm + '-' + yy;
   };
   // Free follow-up window comes from the provider's policy. 0 means no policy
   // and the receipt won't print the follow-up line at all. EXCEPTION: this
   // appointment IS itself a follow-up (is_followup=true) — we don't print
   // a new free-follow-up window on top of one, or the patient could chain
   // free visits indefinitely (and disputes get awkward).
   var followUpDays = Number(prov.free_followup_days || 0);
   var followUpEnd  = (followUpDays > 0 && !apt.is_followup)
      ? new Date(createDt.getTime() + followUpDays * 24 * 60 * 60 * 1000)
      : null;

   var fmtDTAmPm = function(d) {
      if (!d || isNaN(d.getTime())) return '';
      var dd = String(d.getDate()).padStart(2,'0');
      var mm = d.toLocaleString('en-US', { month: 'short' });
      var yy = d.getFullYear();
      var hr = d.getHours();
      var mn = String(d.getMinutes()).padStart(2,'0');
      var ap = hr >= 12 ? 'PM' : 'AM';
      hr = hr % 12; if (hr === 0) hr = 12;
      return dd + '-' + mm + '-' + yy + ' ' + String(hr).padStart(2,'0') + ':' + mn + ' ' + ap;
   };

   var paymentMode = 'Cash';
   var department  = (apt.speciality || apt.category || '').toUpperCase();
   var fee         = Number(apt.fee || 0);
   var status      = apt.status || 'Confirmed';

   // Hospital name appears on Create By / Print By
   var operator = prov.name || 'Hospital';

   var esc = function(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); };

   var isRefunded   = !!apt.is_refunded;
   var refundAmt    = Number(apt.refund_amount || 0);
   var refundedDate = apt.refunded_at ? new Date(apt.refunded_at) : null;
   var refundNote   = isRefunded
      ? '<div class="refund-note">REFUNDED ₹' + refundAmt.toFixed(2) + ' on ' + esc(fmtDateOnly(refundedDate || now)) + ' — ' + esc(apt.cancellation_reason || 'cancelled') + '</div>'
      : '';
   var refundStamp  = isRefunded ? '<div class="refund-stamp">REFUNDED</div>' : '';

   var html =
      '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Consultation Receipt — ' + esc(billNo) + '</title>' +
      '<style>' +
         '*{box-sizing:border-box;margin:0;padding:0}' +
         'body{font-family:"Courier New",Consolas,monospace;color:#000;background:#fff;padding:20px;font-size:13px;line-height:1.4}' +
         '.rcpt{max-width:780px;margin:0 auto;border:1px solid #000;padding:14px 18px}' +
         '.rcpt h1{font-size:22px;text-align:center;letter-spacing:1px;font-weight:700;margin-bottom:2px}' +
         '.rcpt .legal{text-align:center;font-size:12px;margin-bottom:2px}' +
         '.rcpt .addr{text-align:center;font-size:12px}' +
         '.rcpt .phone{text-align:center;font-size:12px;margin-bottom:8px}' +
         '.rcpt h2{text-align:center;font-size:16px;font-weight:700;border-top:1px solid #000;border-bottom:1px solid #000;padding:5px 0;margin:6px 0 0}' +
         '.info{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #000}' +
         '.info .col{padding:4px 8px}' +
         '.info .col.right{border-left:1px solid #000}' +
         '.info .row{display:grid;grid-template-columns:140px 10px 1fr;font-size:12.5px;padding:2px 0}' +
         '.info .row .lbl{font-weight:700;text-transform:uppercase}' +
         '.info .row .sep{text-align:center}' +
         '.tbl{width:100%;border-collapse:collapse;margin-top:0}' +
         '.tbl th,.tbl td{border-bottom:1px solid #000;padding:5px 8px;text-align:left;font-size:12.5px}' +
         '.tbl th{text-transform:uppercase;font-weight:700;border-top:1px solid #000}' +
         '.tbl .right{text-align:right}' +
         '.tbl .center{text-align:center}' +
         '.tbl .dept{font-weight:700;text-transform:uppercase}' +
         '.totalrow{display:flex;justify-content:space-between;border-bottom:1px solid #000;padding:6px 8px;font-size:13px}' +
         '.totalrow .amt{font-weight:700}' +
         '.barcode{display:flex;justify-content:space-between;align-items:flex-end;padding:10px 8px 4px}' +
         '.barcode .bcol{text-align:center}' +
         '.bcimg{font-family:"Libre Barcode 39","Code 39",monospace;font-size:42px;letter-spacing:-2px;line-height:1;white-space:nowrap}' +
         '.bcimg::before{content:"*"}.bcimg::after{content:"*"}' +
         '.btxt{font-size:11px;letter-spacing:1px;margin-top:2px}' +
         '.signrow{display:grid;grid-template-columns:1fr 1fr 1fr;font-size:12px;padding:4px 8px}' +
         '.signrow .mid{text-align:center;font-weight:700}' +
         '.signrow .right{text-align:right}' +
         '.signblock{text-align:center;margin:10px 8px 0}' +
         '.signline{display:inline-block;border-top:1px solid #000;padding-top:3px;min-width:220px;font-weight:700;font-size:12px}' +
         '.followup{text-align:center;font-size:13px;font-weight:700;padding:8px 0 0;letter-spacing:1px}' +
         '.refund-note{margin:10px 8px 0;padding:6px 10px;border:1.5px dashed #b71c1c;color:#b71c1c;font-size:12px;text-align:center;font-weight:700;letter-spacing:0.5px}' +
         '.refund-stamp{position:absolute;top:38%;left:50%;transform:translate(-50%,-50%) rotate(-22deg);font-size:64px;font-weight:900;color:rgba(183,28,28,0.18);border:6px solid rgba(183,28,28,0.18);padding:6px 26px;border-radius:6px;pointer-events:none;letter-spacing:4px;white-space:nowrap}' +
         '.actions{max-width:780px;margin:14px auto 0;display:flex;gap:8px;justify-content:center}' +
         '.actions button{padding:8px 18px;border:1px solid #000;background:#fff;cursor:pointer;font:inherit}' +
         '.actions button:hover{background:#000;color:#fff}' +
         '@page{size:A4 portrait;margin:0}' +
         '@media print{' +
            '.actions{display:none}' +
            'html,body{margin:0;padding:0;width:210mm;background:#fff}' +
            '.rcpt{width:210mm;height:148.5mm;padding:5mm 10mm;border:none;box-sizing:border-box;page-break-after:always;overflow:hidden}' +
            '.signblock{margin-top:4px}' +
         '}' +
      '</style>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap">' +
      '</head><body>' +

      '<div class="rcpt" style="position:relative">' +
         refundStamp +
         '<h1>' + esc((prov.name || 'Hospital').toUpperCase()) + '</h1>' +
         (prov.tagline ? '<div class="legal">' + esc(prov.tagline) + '</div>' : '') +
         (prov.address ? '<div class="addr">' + esc(prov.address) + '</div>' : '') +
         '<div class="phone">' +
            (prov.phone ? 'Phone ' + esc(prov.phone) : '') +
            (prov.phone && prov.gstin ? ', ' : '') +
            (prov.gstin ? 'GST No : ' + esc(prov.gstin) : '') +
         '</div>' +
         '<h2>Consultation Receipt</h2>' +

         '<div class="info">' +
            '<div class="col">' +
               '<div class="row"><div class="lbl">Patient ID</div><div class="sep">:</div><div style="font-family:ui-monospace,monospace;font-size:11px;font-weight:700">' + esc(hospitalPatientId || '—') + '</div></div>' +
               '<div class="row"><div class="lbl">Patient Name</div><div class="sep">:</div><div>' + esc(apt.patient_name || apt.user_email || '') + '</div></div>' +
               '<div class="row"><div class="lbl">Age/Sex</div><div class="sep">:</div><div>' + esc(apt.patient_age ? (apt.patient_age + 'Y(s)' + (apt.patient_sex ? '/' + apt.patient_sex : '')) : '—') + '</div></div>' +
               '<div class="row"><div class="lbl">Relative Name</div><div class="sep">:</div><div>—</div></div>' +
               '<div class="row"><div class="lbl">Address</div><div class="sep">:</div><div>' + esc(apt.patient_address || '—') + '</div></div>' +
               '<div class="row"><div class="lbl">Appointment ID</div><div class="sep">:</div><div style="font-family:ui-monospace,monospace;font-size:11px">' + esc(apt.apt_id || '—') + '</div></div>' +
            '</div>' +
            '<div class="col right">' +
               '<div class="row"><div class="lbl">Location</div><div class="sep">:</div><div>' + esc((prov.address || '').split(',').pop().trim() || '—') + '</div></div>' +
               '<div class="row"><div class="lbl">Bill Date</div><div class="sep">:</div><div>' + esc(fmtDT(createDt)) + '</div></div>' +
               '<div class="row"><div class="lbl">Bill No.</div><div class="sep">:</div><div>' + esc(billNo) + '</div></div>' +
               '<div class="row"><div class="lbl">Receipt No.</div><div class="sep">:</div><div>' + esc(receiptNo) + '</div></div>' +
               '<div class="row"><div class="lbl">Mobile No</div><div class="sep">:</div><div>' + esc(apt.patient_phone || '—') + '</div></div>' +
            '</div>' +
         '</div>' +

         '<table class="tbl">' +
            '<thead><tr>' +
               '<th>Particulars</th>' +
               '<th class="center">Service Status</th>' +
               '<th class="right">Rates (Rs.)</th>' +
            '</tr></thead>' +
            '<tbody>' +
               '<tr><td class="dept" colspan="3">' + esc(department || 'Consultation') + '</td></tr>' +
               '<tr>' +
                  '<td>' + esc(apt.doctor_name || '') + '</td>' +
                  '<td class="center">' + (status === 'Completed' ? 'C' : 'A') + '</td>' +
                  '<td class="right">' + fee.toFixed(2) + '</td>' +
               '</tr>' +
            '</tbody>' +
         '</table>' +

         '<div class="totalrow">' +
            '<div>Mode Of Payment : ' + esc(paymentMode) + '</div>' +
            '<div class="amt">Total Amount &nbsp;&nbsp; ' + fee.toFixed(2) + '</div>' +
         '</div>' +
         refundNote +

         '<div class="signrow" style="margin-top:18px">' +
            '<div>Create By : ' + esc(operator) + '</div>' +
            '<div></div>' +
            '<div class="right">Create Date : ' + esc(fmtDTAmPm(createDt)) + '</div>' +
         '</div>' +
         '<div class="signrow">' +
            '<div>Print By &nbsp;: ' + esc(operator) + '</div>' +
            '<div></div>' +
            '<div class="right">Print Date &nbsp;: ' + esc(fmtDTAmPm(now)) + '</div>' +
         '</div>' +

         '<div class="signblock"><div class="signline">(Authorised Signatory)</div></div>' +

         (followUpEnd ? '<div class="followup">&lt; ' + ((Number(prov.free_followup_count || 1) > 1) ? (Number(prov.free_followup_count) + ' Free FOLLOW-UPs') : 'Free FOLLOW-UP') + ' upto ' + esc(fmtDateOnly(followUpEnd)) + ' &gt;</div>' : '') +
      '</div>' +

      '<div class="actions">' +
         '<button onclick="window.print()">🖨 Print</button>' +
         '<button onclick="window.close()">Close</button>' +
      '</div>' +

      '<script>window.onload=function(){setTimeout(function(){window.print();},400);};<\/script>' +
      '</body></html>';

   var w = window.open('', '_blank', 'width=860,height=900');
   if (!w) { alert('Pop-up blocked. Please allow pop-ups and try again.'); return; }
   w.document.open(); w.document.write(html); w.document.close();
}
