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
  <div class="product-footer">
  <span class="product-price" id="price_${item.id}">${displayPrice}</span>
  <button class="btn-cart" onclick="addToCart('${item.id}','${catKey}')">Add</button>
  </div>
</div>
`;
   grid.appendChild(card);
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
                  storeId: item.storeId || null, storeName: item.storeName || null });
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

// ── MAKE ORDER (offline pickup) ──
function makeOrder() {
   if (cart.length === 0) { showToast('Your cart is empty!'); return; }
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { showToast('Please login to place an order.'); return; }

   var now    = new Date();
   var yy     = String(now.getFullYear()).slice(2);
   var mm     = String(now.getMonth() + 1).padStart(2, '0');
   var dd     = String(now.getDate()).padStart(2, '0');
   var dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

   function genId() {
      return 'ORD-' + yy + mm + dd + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
   }

   // Group cart by store
   var groups = {};
   var groupKeys = [];
   cart.forEach(function(c) {
      var key = c.storeId || '__platform__';
      if (!groups[key]) {
         groups[key] = { storeId: c.storeId || null, storeName: c.storeName || getStoreName(c.storeId), items: [] };
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

      var newOrder = {
         orderId: orderId, order_id: orderId, date: dateStr, timestamp: now.getTime(),
         customerName: user.name, customerEmail: user.email, customerPhone: user.phone || '',
         items: items, total: total, status: 'Pending Pickup',
         storeId: grp.storeId, storeName: grp.storeName
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
         customerName: user.name, customerEmail: user.email, customerPhone: user.phone || '',
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
// Each category defines:
//   icon, label, desc       — category-level (used in customer category picker)
//   staffLabel, staffIcon   — what the people inside are called (Doctors / Stylists / etc.)
// To support a new business type, add an entry here + add an <option> in admin.html.
const APT_CAT_META = {
   hospital: { icon: '🏥', label: 'Hospitals',      desc: 'General & multi-speciality hospitals',
               staffLabel: 'Doctors',  staffIcon: '👨‍⚕️' },
   dental:   { icon: '🦷', label: 'Dental Clinics', desc: 'Dentists, orthodontists & cosmetic care',
               staffLabel: 'Doctors',  staffIcon: '👨‍⚕️' }
   // Example future entries (don't activate without also adding admin <option>):
   // beauty:  { icon: '💇', label: 'Beauty Parlours', desc: 'Hair, facial & spa services',
   //            staffLabel: 'Stylists', staffIcon: '💁' },
   // fitness: { icon: '🏋️', label: 'Gyms',            desc: 'Personal training & group classes',
   //            staffLabel: 'Trainers', staffIcon: '🏃' }
};

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

function _aptGetProvider(id)        { return (_aptProvidersCache || []).find(function(p) { return p.id === id; }); }
function _aptProvidersByCat(catKey) { return (_aptProvidersCache || []).filter(function(p) { return p.category === catKey; }); }
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
   document.getElementById('aptContent').innerHTML = '<p style="text-align:center;color:#999;padding:40px">Loading…</p>';
   await loadAptProviders();
   renderAptCategories();
   window.scrollTo({ top: 0, behavior: 'smooth' });
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
                   (p.address ? '<div class="apt-provider-meta">📍 ' + p.address + '</div>' : '') +
                   (p.timing  ? '<div class="apt-provider-meta">🕒 ' + p.timing  + '</div>' : '') +
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
                 (provider.address ? '<span>📍 ' + provider.address + '</span>' : '') +
                 (provider.timing  ? '<span>🕒 ' + provider.timing  + '</span>' : '') +
              '</div>';
   var doctors = provider.doctors || [];
   if (!doctors.length) {
      html += '<p style="text-align:center;color:#999;padding:40px">No doctors listed yet.</p>';
   } else {
      html += '<div class="apt-doctors-list">';
      doctors.forEach(function(d) {
         var initials = d.name.replace(/^Dr\.?\s*/i, '').split(' ').map(function(s) { return s[0]; }).slice(0, 2).join('').toUpperCase();
         var daysSummary = summarizeDoctorDays(d.availability);
         html += '<div class="apt-doctor-card">' +
                   '<div class="apt-doctor-avatar">' + initials + '</div>' +
                   '<div class="apt-doctor-info">' +
                      '<div class="apt-doctor-name">' + d.name + '</div>' +
                      '<div class="apt-doctor-spec">' + (d.speciality || '') + '</div>' +
                      '<div class="apt-doctor-qual">' + (d.qual || '') + '</div>' +
                      '<div class="apt-doctor-days">📅 ' + daysSummary + '</div>' +
                   '</div>' +
                   '<div class="apt-doctor-right">' +
                      '<div class="apt-doctor-fee">₹' + (d.fee || 0) + '<span>/visit</span></div>' +
                      '<button class="apt-book-btn" onclick="openAptBookModal(\'' + catKey + '\',\'' + providerId + '\',\'' + d.id + '\')">Book</button>' +
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

function openAptBookModal(catKey, providerId, doctorId) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in or sign up to book an appointment.'); return; }

   var provider = _aptGetProvider(providerId);
   var doctor = _aptGetDoctor(provider, doctorId);
   if (!doctor) return;

   _aptBookCtx = { catKey: catKey, providerId: providerId, doctor: doctor, provider: provider, date: null, slot: null };

   document.getElementById('aptBookModalDoc').textContent = doctor.name + ' · ' + provider.name;
   document.getElementById('aptBookModalSpec').textContent = (doctor.speciality || '') + (doctor.qual ? ' · ' + doctor.qual : '');
   document.getElementById('aptBookModalFee').textContent = 'Consultation fee: ₹' + (doctor.fee || 0);

   // Next 7 dates, disable ones the doctor isn't available
   var dateHtml = '';
   for (var i = 0; i < 7; i++) {
      var d = new Date();
      d.setDate(d.getDate() + i);
      var dateStr = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      var label = i === 0 ? 'TODAY' : (i === 1 ? 'TMRW' : APT_DAYS[d.getDay()]);
      var monthShort = d.toLocaleDateString('en-IN', { month: 'short' });
      var dayIdx = d.getDay();
      var avail = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];
      var off = avail.length === 0;
      var click = off ? '' : ' onclick="selectAptDate(\'' + dateStr + '\', this)"';
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="Doctor unavailable"' : '';
      dateHtml += '<div class="apt-date-btn"' + click + extra + '>' +
                     '<div class="apt-date-day">' + label + '</div>' +
                     '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
                  '</div>';
   }
   document.getElementById('aptDateButtons').innerHTML = dateHtml;

   document.getElementById('aptSlotSection').classList.add('hidden');
   document.getElementById('aptSlotButtons').innerHTML = '';
   document.getElementById('aptPatientName').value = user.name || '';
   document.getElementById('aptPatientPhone').value = user.phone || '';
   document.getElementById('aptPatientReason').value = '';
   document.getElementById('aptConfirmBtn').disabled = true;

   document.getElementById('aptBookModal').classList.remove('hidden');
}

function selectAptDate(dateStr, btn) {
   if (!_aptBookCtx) return;
   _aptBookCtx.date = dateStr;
   _aptBookCtx.slot = null;
   document.querySelectorAll('.apt-date-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');

   // Build slots from doctor's availability windows for this day-of-week
   var d = new Date(dateStr + 'T00:00:00');
   var dayIdx = d.getDay();
   var doctor = _aptBookCtx.doctor;
   var windows = (doctor.availability && (doctor.availability[dayIdx] || doctor.availability[String(dayIdx)])) || [];

   // If picked date is today, hide any slot ≤ now + buffer (so user has time
   // to fill the form and actually arrive). Buffer = 20 minutes.
   var now = new Date();
   var todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
   var isToday = dateStr === todayStr;
   var BUFFER_MIN = 20;
   var earliestMin = isToday ? (now.getHours() * 60 + now.getMinutes() + BUFFER_MIN) : -1;

   var slotHtml = '';
   windows.forEach(function(w) {
      var startMin = _hhmmToMin(w.start);
      var endMin   = _hhmmToMin(w.end);
      for (var t = startMin; t + 30 <= endMin; t += 30) {
         if (t < earliestMin) continue;     // skip past slots for today
         var hh = Math.floor(t / 60);
         var mm = t % 60;
         var slot24 = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
         var hour12 = ((hh % 12) || 12);
         var label = hour12 + ':' + String(mm).padStart(2, '0') + ' ' + (hh < 12 ? 'AM' : 'PM');
         slotHtml += '<button class="apt-slot-btn" onclick="selectAptSlot(\'' + slot24 + '\', this)">' + label + '</button>';
      }
   });
   if (!slotHtml) {
      slotHtml = '<p style="color:#999;font-size:0.85rem">' +
                 (isToday ? 'No more slots available today. Try tomorrow.' : 'No time slots available on this day.') +
                 '</p>';
   }
   document.getElementById('aptSlotButtons').innerHTML = slotHtml;
   document.getElementById('aptSlotSection').classList.remove('hidden');
   document.getElementById('aptConfirmBtn').disabled = true;
}

function _hhmmToMin(s) {
   var p = String(s).split(':');
   return parseInt(p[0], 10) * 60 + parseInt(p[1] || '0', 10);
}

function selectAptSlot(slot, btn) {
   if (!_aptBookCtx) return;
   _aptBookCtx.slot = slot;
   document.querySelectorAll('.apt-slot-btn').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   document.getElementById('aptConfirmBtn').disabled = false;
}

async function confirmAptBooking() {
   if (!_aptBookCtx || !_aptBookCtx.date || !_aptBookCtx.slot) {
      alert('Please pick a date and time slot.');
      return;
   }
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in to book.'); return; }

   var name = document.getElementById('aptPatientName').value.trim();
   var phone = document.getElementById('aptPatientPhone').value.trim();
   if (!name || !phone) { alert('Please enter patient name and phone.'); return; }

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
      fee: _aptBookCtx.doctor.fee,
      status: 'Confirmed',
      patient_name:   name,
      patient_phone:  phone,
      patient_reason: document.getElementById('aptPatientReason').value.trim()
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
   await loadAptProviders(true);

   var filter = (document.getElementById('aptAdminCatFilter') || {}).value || '';
   var list = (_aptProvidersCache || []).filter(function(p) { return !filter || p.category === filter; });

   if (!list.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">' +
         'No providers yet. Click <strong>➕ Add Hospital / Clinic</strong> to create one.' +
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
                (p.address ? '<div class="apt-provider-meta">📍 ' + p.address + '</div>' : '') +
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
   document.getElementById('aptProviderModalTitle').textContent = p ? '✏️ Edit Provider' : '➕ Add Hospital / Clinic';
   document.getElementById('aptProvId').value       = p ? p.id : '';
   document.getElementById('aptProvCategory').value = p ? p.category : 'hospital';
   document.getElementById('aptProvName').value     = p ? p.name : '';
   document.getElementById('aptProvTagline').value  = p ? (p.tagline || '') : '';
   document.getElementById('aptProvAddress').value  = p ? (p.address || '') : '';
   document.getElementById('aptProvTiming').value   = p ? (p.timing  || '') : '';
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

   document.getElementById('aptProviderModal').classList.remove('hidden');
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
      tagline:     document.getElementById('aptProvTagline').value.trim(),
      address:     document.getElementById('aptProvAddress').value.trim(),
      timing:      document.getElementById('aptProvTiming').value.trim(),
      icon:        icon,
      owner_email: document.getElementById('aptProvOwner').value || '',
      doctors:     existing ? (existing.doctors || []) : []
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

   document.getElementById('aptDoctorModalTitle').textContent = doctor ? '✏️ Edit Doctor' : '➕ Add Doctor — ' + provider.name;
   document.getElementById('aptDocProviderId').value = providerId;
   document.getElementById('aptDocId').value         = doctor ? doctor.id : '';
   document.getElementById('aptDocName').value       = doctor ? doctor.name : '';
   document.getElementById('aptDocSpec').value       = doctor ? (doctor.speciality || '') : '';
   document.getElementById('aptDocQual').value       = doctor ? (doctor.qual || '') : '';
   document.getElementById('aptDocFee').value        = doctor ? (doctor.fee || '') : '';

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
   document.getElementById('aptDoctorModal').classList.remove('hidden');
}

function closeAptDoctorModal() {
   document.getElementById('aptDoctorModal').classList.add('hidden');
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
      speciality: document.getElementById('aptDocSpec').value.trim(),
      qual:       document.getElementById('aptDocQual').value.trim(),
      fee:        parseInt(document.getElementById('aptDocFee').value, 10) || 0,
      availability: availability
   };

   var doctors = (provider.doctors || []).slice();
   var idx = doctors.findIndex(function(d) { return d.id === docId; });
   if (idx >= 0) doctors[idx] = newDoctor; else doctors.push(newDoctor);

   provider.doctors = doctors;
   var ok = await AppDB.upsertProvider(provider);
   if (!ok) { alert('Failed to save doctor.'); return; }
   closeAptDoctorModal();
   await _aptRerenderActiveList();
}

async function deleteAptDoctor(providerId, doctorId) {
   var provider = _aptGetProvider(providerId);
   if (!provider) return;
   var doctor = _aptGetDoctor(provider, doctorId);
   if (!doctor) return;
   if (!confirm('Remove Dr. ' + doctor.name.replace(/^Dr\.?\s*/i,'') + ' from ' + provider.name + '?')) return;
   provider.doctors = (provider.doctors || []).filter(function(d) { return d.id !== doctorId; });
   var ok = await AppDB.upsertProvider(provider);
   if (!ok) { alert('Failed to delete doctor.'); return; }
   await _aptRerenderActiveList();
}

// Re-render whichever doctor/provider list is on the current page (admin or shopowner)
async function _aptRerenderActiveList() {
   if (document.getElementById('aptAdminContent'))    await renderAptAdmin();
   if (document.getElementById('shopDoctorsContent')) await renderShopDoctors();
}

// ── ADMIN: Appointment sub-tab + bookings view ──
function switchAptAdminSub(sub) {
   ['providers', 'bookings'].forEach(function(s) {
      var panel = document.getElementById('apt-sub-' + s);
      var btn   = document.getElementById('apt-subtab-' + s + '-btn');
      if (panel) panel.classList.toggle('hidden', s !== sub);
      if (btn)   btn.classList.toggle('active', s === sub);
   });
   if (sub === 'bookings')  renderAllAppointments();
   if (sub === 'providers') renderAptAdmin();
}

async function renderAllAppointments() {
   var container = document.getElementById('aptAllBookingsContent');
   if (!container) return;
   _liveSubscribe('adminApts', 'appointments', renderAllAppointments);
   container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   var apts = await AppDB.getAllAppointments();
   var filter = (document.getElementById('aptBookingsFilter') || {}).value || '';
   if (filter) apts = apts.filter(function(a) { return (a.status || 'Confirmed') === filter; });

   if (!apts.length) {
      container.innerHTML = '<p style="color:#999;text-align:center;padding:60px">No appointments to show.</p>';
      return;
   }

   var html = '<div style="display:grid;gap:0.85rem;margin-top:1rem">';
   apts.forEach(function(a) {
      var status = a.status || 'Confirmed';
      var cls = status === 'Cancelled' ? 'cancelled' : (status === 'Completed' ? 'completed' : 'confirmed');
      var aid = (a.apt_id || '').replace(/'/g, "\\'");
      var canChange = status !== 'Cancelled' && status !== 'Completed';
      var statusLabel = status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by Customer'
                      : a.cancelled_by === 'hospital' ? 'by Hospital'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
      }
      html += '<div class="order-card">' +
                '<div class="order-card-header">' +
                   '<div><span class="order-id">' + a.apt_id + '</span> <span class="order-date">' + (a.date || '') + ' · ' + (a.slot || '') + '</span></div>' +
                   '<span class="order-badge ' + cls + '">' + statusLabel + '</span>' +
                '</div>' +
                '<div class="order-store-tag">🏥 ' + (a.provider_name || '') + '</div>' +
                '<div class="order-items">' +
                   '<div class="order-item"><span>👨‍⚕️ ' + (a.doctor_name || '') + ' (' + (a.speciality || '') + ')</span><span>₹' + (a.fee || 0) + '</span></div>' +
                   '<div class="order-item"><span>👤 ' + (a.patient_name || a.user_email || '') + '</span><span>' + (a.user_email || '') + (a.patient_phone ? ' · ' + a.patient_phone : '') + '</span></div>' +
                '</div>' +
                '<div style="display:flex;gap:6px;justify-content:flex-end;padding:8px 12px 0;flex-wrap:wrap">' +
                   (canChange
                      ? '<button class="apt-view-btn" onclick="adminSetAptStatus(\'' + aid + '\',\'Completed\')">✅ Mark Completed</button>' +
                        '<button class="apt-view-btn" style="background:#c62828" onclick="adminSetAptStatus(\'' + aid + '\',\'Cancelled\')">✕ Cancel</button>'
                      : '') +
                   '<button class="apt-view-btn" style="background:#555" onclick="deleteAdminAppointment(\'' + aid + '\')">🗑 Delete</button>' +
                '</div>' +
             '</div>';
   });
   html += '</div>';
   container.innerHTML = html;
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

// ── STORES ──
function showStoresList() {
   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = '🏪 Stores';

   var grid = document.getElementById('productsGrid');
   grid.style.display = 'block';
   grid.innerHTML = '';

   var users     = getUsers();
   var settings  = getAdminSettings();
   var storeOwners = users.filter(function(u) { return u.role === 'storeowner' && !u.blocked; });

   // Build ordered store list
   var storeList = [];
   storeOwners.forEach(function(u) {
      var count = 0;
      Object.values(products).forEach(function(cat) {
         cat.items.forEach(function(item) { if (item.storeId === u.email) count++; });
      });
      storeList.push({ storeId: u.email, name: u.storeName || u.name, count: count, storeType: u.storeType || 'general' });
   });

   if (storeList.length === 0) {
      grid.innerHTML = '<p style="color:#888;text-align:center;padding:60px">No stores available yet.</p>';
      return;
   }

   // Build full store list with type info
   window._allStoresData = storeList;

   // Determine which store types have at least one store
   var usedTypeKeys = storeList.reduce(function(acc, s) {
      if (acc.indexOf(s.storeType) === -1) acc.push(s.storeType);
      return acc;
   }, []);

   // Build store-type category tabs
   var allTabHtml = '<button class="store-type-tab active" data-type="all" onclick="switchStoreType(this)">' +
      '<span class="store-type-icon">🏪</span><span class="store-type-label">All Stores</span>' +
      '<span class="store-type-count">' + storeList.length + '</span></button>';

   var typeTabsHtml = STORE_TYPES.filter(function(t) { return usedTypeKeys.indexOf(t.key) !== -1; })
      .map(function(t) {
         var cnt = storeList.filter(function(s) { return s.storeType === t.key; }).length;
         return '<button class="store-type-tab" data-type="' + t.key + '" onclick="switchStoreType(this)">' +
                '<span class="store-type-icon">' + t.icon + '</span>' +
                '<span class="store-type-label">' + t.label + '</span>' +
                '<span class="store-type-count">' + cnt + '</span></button>';
      }).join('');

   grid.innerHTML = '<div class="store-type-tabs">' + allTabHtml + typeTabsHtml + '</div>' +
                    '<div id="storeTypeContent"></div>';

   renderStoreTypeContent('all');
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchStoreType(btn) {
   document.querySelectorAll('.store-type-tab').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   renderStoreTypeContent(btn.dataset.type);
}

function renderStoreTypeContent(typeKey) {
   var filtered = typeKey === 'all'
      ? window._allStoresData
      : window._allStoresData.filter(function(s) { return s.storeType === typeKey; });
   var el = document.getElementById('storeTypeContent');
   if (!el) return;

   if (!filtered.length) {
      el.innerHTML = '<p style="color:#888;padding:60px;text-align:center">No stores in this category yet.</p>';
      return;
   }

   window._storeListData = filtered;

   var selectorHtml = '<div class="store-selector-tabs">' +
      filtered.map(function(s, i) {
         return '<button class="store-selector-tab' + (i === 0 ? ' active' : '') + '" ' +
                'data-idx="' + i + '" onclick="switchStoreSelector(this)">' +
                '🏪 ' + s.name +
                '<span class="store-selector-count"> (' + s.count + ')</span></button>';
      }).join('') +
      '</div>';

   el.innerHTML = selectorHtml + '<div id="storeContentArea">' + buildStoreSubcatLayout(filtered[0].storeId) + '</div>';
}

function switchStoreSelector(btn) {
   var tabs = btn.closest('.store-selector-tabs');
   if (tabs) tabs.querySelectorAll('.store-selector-tab').forEach(function(b) { b.classList.remove('active'); });
   btn.classList.add('active');
   var s = window._storeListData[parseInt(btn.dataset.idx)];
   var area = document.getElementById('storeContentArea');
   if (area) area.innerHTML = buildStoreSubcatLayout(s.storeId);
}

function buildStoreSubcatLayout(storeId) {
   var storeCats = [];
   Object.entries(products).forEach(function([catKey, catData]) {
      var items = catData.items.filter(function(item) { return (item.storeId || null) === storeId; });
      if (items.length) storeCats.push({ catKey: catKey, catData: catData, items: items });
   });
   if (!storeCats.length) return '<p style="color:#888;padding:40px;text-align:center">No products in this store yet.</p>';

   var storeIdAttr = storeId ? storeId.replace(/["']/g, '') : '';

   var sidebarHtml = storeCats.map(function(c, i) {
      return '<div class="subcat-sidebar-item' + (i === 0 ? ' active' : '') + '" ' +
             'data-catkey="' + c.catKey + '" data-storeid="' + storeIdAttr + '" ' +
             'onclick="switchStoreSubcat(this)">' +
             '<span class="subcat-sidebar-icon">' + getCatIcon(c.catKey) + '</span>' +
             '<span>' + c.catData.title + '</span>' +
             '</div>';
   }).join('');

   var first = storeCats[0];
   var tmp = document.createElement('div');
   tmp.className = 'products-grid';
   first.items.forEach(function(item) { renderCard(Object.assign({}, item, { type: first.catData.type }), first.catKey, tmp); });

   return '<div class="subcat-layout">' +
             '<div class="subcat-sidebar">' + sidebarHtml + '</div>' +
             '<div class="subcat-products-panel" id="storeSubcatPanel">' +
                '<div class="subcat-panel-title">' + first.catData.title + '</div>' +
                '<div class="products-grid">' + tmp.innerHTML + '</div>' +
             '</div>' +
          '</div>';
}

function switchStoreSubcat(el) {
   el.closest('.subcat-sidebar').querySelectorAll('.subcat-sidebar-item').forEach(function(x) { x.classList.remove('active'); });
   el.classList.add('active');
   var catKey  = el.dataset.catkey;
   var storeId = el.dataset.storeid || null;
   var catData = products[catKey];
   var items   = catData.items.filter(function(item) { return (item.storeId || null) === storeId; });
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
   if (!/^\d{6}$/.test(token)) {
      if (errEl) { errEl.textContent = 'Please enter the 6-digit code.'; errEl.classList.remove('hidden'); errEl.style.color = ''; }
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
   if (btn) { btn.textContent = 'Logging in…'; btn.disabled = true; }
   await initDB();
   const email    = document.getElementById('loginEmail').value.trim().toLowerCase();
   const password = document.getElementById('loginPassword').value;
   const errorMsg = document.getElementById('loginError');
   if (btn) { btn.textContent = 'Login'; btn.disabled = false; }
   const users    = getUsers();
   const user     = users.find(u => u.email.toLowerCase() === email && u.password === password);
   if (!user) { errorMsg.classList.remove('hidden'); errorMsg.textContent = '❌ Incorrect email or password.'; return; }

   // Blocked check — admins cannot be blocked
   if (user.blocked && !isAdmin(user.email)) {
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

   // Store owners who are not admin should not be on home.html
   if (isStoreOwner(user)) { window.location.href = 'shopowner.html'; return; }

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

document.addEventListener('click', function () {
   const dd = document.getElementById('userDropdown');
   if (dd) dd.classList.remove('open');
});

async function checkShopOwnerLogin() {
   await initDB();
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
   // Unapproved Business Partner trying to reach the dashboard directly via URL
   if (!isAdmin(user.email) && user.isApproved === false) {
      alert('Your Business Partner account is still awaiting admin approval.');
      window.location.href = 'home.html';
      return;
   }
   var nameEl = document.getElementById('shopOwnerName');
   if (nameEl) nameEl.textContent = user.name;
   var storeBtn = document.getElementById('shopViewStoreBtn');
   if (storeBtn && isAdmin(user.email)) storeBtn.classList.remove('hidden');
   loadSiteSettings();

   // Decide which tabs are relevant for this owner and figure out the business name
   // to show in the header centre.
   var ownsHospital = false, ownsProducts = false;
   var businessName = '';
   var myProviders  = [];
   if (isAdmin(user.email)) {
      ownsHospital = ownsProducts = true;
      businessName = 'Admin View';
   } else {
      var providers = await AppDB.getProviders();
      myProviders   = providers.filter(function(p) { return (p.owner_email || '').toLowerCase() === user.email.toLowerCase(); });
      ownsHospital  = myProviders.length > 0;
      ownsProducts  = (_db.products || []).some(function(p) { return (p.store_id || '').toLowerCase() === user.email.toLowerCase(); });
      if (myProviders.length > 0) {
         businessName = myProviders.length === 1 ? myProviders[0].name
                                                 : myProviders.map(function(p) { return p.name; }).join(' · ');
      } else if (ownsProducts) {
         businessName = user.storeName || user.name || '';
      } else {
         businessName = user.storeName || user.name || '';
      }
      // If the user owns nothing yet, default to Appointments view so a brand-new hospital
      // owner doesn't land on an empty Orders page.
      if (!ownsHospital && !ownsProducts) ownsHospital = true;
   }

   var bizEl = document.getElementById('shopBusinessName');
   if (bizEl) bizEl.textContent = businessName;

   var ordersTab = document.getElementById('shop-tab-orders');
   var aptTab    = document.getElementById('shop-tab-appointments');
   var docTab    = document.getElementById('shop-tab-doctors');
   var prodTab   = document.getElementById('shop-tab-products');
   if (ordersTab) ordersTab.classList.toggle('hidden', !ownsProducts);
   if (prodTab)   prodTab.classList.toggle('hidden',   !ownsProducts);
   if (aptTab)    aptTab.classList.toggle('hidden',    !ownsHospital);
   if (docTab)    docTab.classList.toggle('hidden',    !ownsHospital);

   // Pick the right "staff" label for the doctors tab based on what the owner runs
   if (docTab && ownsHospital) {
      var cats = (myProviders || []).map(function(p) { return p.category; });
      var s    = _staffLabelForCategories(cats);
      docTab.innerHTML = s.icon + ' ' + s.label;
   }

   // Render whichever panel makes sense
   if (ownsProducts) renderShopDashboard();
   var defaultTab = ownsProducts ? 'orders' : 'appointments';
   switchShopTab(defaultTab);

   // Auto-refresh if admin enabled it
   var s = getAdminSettings();
   if (s.autoRefreshOrders && ownsProducts) {
      setInterval(function() { renderShopDashboard(window._shopCurrentFilter); }, 30000);
   }
}

function renderShopDashboard(filterStatus) {
   var allOrders = _db.orders;
   var list = document.getElementById('shopOrderList');
   if (!list) return;
   window._shopCurrentFilter = filterStatus || '';

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

   // Update stats — reflect the date filter so numbers match what's visible
   var pending   = allOrders.filter(function(o) { return o.status === 'Pending Pickup'; }).length;
   var ready     = allOrders.filter(function(o) { return o.status === 'Ready'; }).length;
   var completed = allOrders.filter(function(o) { return o.status === 'Completed'; }).length;
   var statPending   = document.getElementById('statPending');
   var statReady     = document.getElementById('statReady');
   var statCompleted = document.getElementById('statCompleted');
   if (statPending)   statPending.textContent   = pending;
   if (statReady)     statReady.textContent     = ready;
   if (statCompleted) statCompleted.textContent = completed;

   // Filter
   var filtered = filterStatus ? allOrders.filter(function(o) { return o.status === filterStatus; }) : allOrders;

   // Update active tab
   document.querySelectorAll('.shop-tab').forEach(function(t) { t.classList.remove('active'); });
   var activeTab = document.getElementById('tab-' + (filterStatus || 'all'));
   if (activeTab) activeTab.classList.add('active');

   if (filtered.length === 0) {
      list.innerHTML = '<div class="shop-empty">No orders ' + (filterStatus ? 'with status "' + filterStatus + '"' : 'yet') + '.</div>';
      return;
   }

   list.innerHTML = '';
   filtered.forEach(function(order) {
      var statusClass = order.status === 'Completed' ? 'status-completed' :
                        order.status === 'Ready'     ? 'status-ready'     : 'status-pending';

      var itemsHTML = order.items.map(function(item) {
         return '<div class="shop-order-item">' +
                   '<img src="' + item.img + '" alt="' + item.name + '" onerror="this.src=\'https://placehold.co/60x60?text=Item\'"/>' +
                   '<div class="shop-order-item-info">' +
                      '<div class="shop-item-name">' + item.name + '</div>' +
                      '<div class="shop-item-qty">Qty: ' + item.qty + ' &nbsp;·&nbsp; &#8377;' + (item.price * item.qty).toLocaleString('en-IN') + '</div>' +
                   '</div>' +
                '</div>';
      }).join('');

      var card = document.createElement('div');
      card.className = 'shop-order-card';
      card.id = 'shopcard-' + order.orderId;
      card.innerHTML =
         '<div class="shop-order-header">' +
            '<div>' +
               '<div class="shop-order-id">' + order.orderId + '</div>' +
               '<div class="shop-order-meta">' + order.customerName +
                  (((window._adminSettings || {}).showCustomerPhone && order.customerPhone) ? ' &nbsp;·&nbsp; 📞 ' + order.customerPhone : '') +
                  ' &nbsp;·&nbsp; ' + order.date + '</div>' +
            '</div>' +
            '<div class="shop-order-right">' +
               '<span class="shop-status-badge ' + statusClass + '">' + order.status + '</span>' +
               '<div class="shop-order-total">&#8377;' + order.total.toLocaleString('en-IN') + '</div>' +
            '</div>' +
         '</div>' +
         '<div class="shop-order-items">' + itemsHTML + '</div>' +
         '<div class="shop-order-actions">' +
            (order.status === 'Pending Pickup' ?
               '<button class="shop-btn-ready" onclick="updateOrderStatus(\'' + order.orderId + '\',\'Ready\')">✅ Mark Ready</button>' : '') +
            (order.status === 'Ready' ?
               '<button class="shop-btn-complete" onclick="updateOrderStatus(\'' + order.orderId + '\',\'Completed\')">🏁 Mark Completed</button>' +
               '<button class="shop-btn-pending" onclick="updateOrderStatus(\'' + order.orderId + '\',\'Pending Pickup\')">↩ Back to Pending</button>' : '') +
            (order.status === 'Completed' ?
               '<span class="shop-done-label">✔ Done — collected by customer</span>' : '') +
         '</div>';
      list.appendChild(card);
   });
}

function updateOrderStatus(orderId, newStatus) {
   var order = _db.orders.find(function(o) { return o.orderId === orderId || o.order_id === orderId; });
   if (order) {
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

function lookupOrder() {
   var val = document.getElementById('shopSearchInput').value.trim().toUpperCase();
   if (!val) { renderShopDashboard(); return; }
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
function getMyProducts(email) {
   return (_db.storeProducts || [])
      .filter(function(p) { return p.store_id === email; })
      .map(function(p) {
         return { id: p.id, name: p.name, price: p.price, desc: p.description,
                  img: p.image, badge: p.badge, catKey: p.category,
                  variants: p.variants || undefined };
      });
}
function saveMyProducts(email, arr) {
   var user = (_db.users || []).find(function(u) { return u.email === email; }) || {};
   var storeName = user.storeName || user.name || '';
   var rows = arr.map(function(p) {
      return { id: p.id, name: p.name, price: p.price || 0,
               description: p.desc || '', image: p.img || '',
               category: p.catKey, badge: p.badge || 'New',
               store_id: email, store_name: storeName, variants: p.variants || null };
   });
   _db.storeProducts = (_db.storeProducts || []).filter(function(p) { return p.store_id !== email; }).concat(rows);
   AppDB.deleteStoreProducts(email).then(function() {
      rows.forEach(function(r) { AppDB.upsertProduct(r); });
   });
}

function renderStoreOwnerProducts() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   var prods = getMyProducts(user.email);
   var container = document.getElementById('shopProductList');
   if (!container) return;
   if (!prods.length) {
      container.innerHTML = '<p class="shop-empty">No products yet. Click \u2795 Add Product to get started.</p>';
      return;
   }
   container.innerHTML = prods.map(function(p, idx) {
      return '<div class="shop-prod-card">' +
                '<img src="' + p.img + '" onerror="this.src=\'https://placehold.co/60x60?text=Item\'"/>' +
                '<div class="shop-prod-info">' +
                   '<div class="shop-prod-name">' + p.name + '</div>' +
                   '<div class="shop-prod-meta">\u20b9' + (p.price || 0).toLocaleString('en-IN') + ' \xb7 ' + (p.desc || '') + '</div>' +
                '</div>' +
                '<div class="shop-prod-actions">' +
                   '<button onclick="openStoreProductModal(' + idx + ')">\u270f\ufe0f</button>' +
                   '<button onclick="deleteStoreProduct(' + idx + ')">\ud83d\uddd1</button>' +
                '</div>' +
             '</div>';
   }).join('');
}

var _editProdIdx = -1;

function openStoreProductModal(idx) {
   _editProdIdx = idx;
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var prods = getMyProducts(user.email);
   var p = idx >= 0 ? prods[idx] : null;
   document.getElementById('sp-modal-title').textContent = p ? 'Edit Product' : 'Add Product';
   document.getElementById('sp-name').value  = p ? p.name  : '';
   document.getElementById('sp-price').value = p ? p.price : '';
   document.getElementById('sp-desc').value  = p ? p.desc  : '';
   document.getElementById('sp-img').value   = p ? p.img   : '';
   document.getElementById('sp-badge').value = p ? (p.badge || '') : '';
   document.getElementById('sp-catkey').value = p ? p.catKey : Object.keys(products)[0];
   previewStoreProductImg();
   document.getElementById('shopProductModal').classList.remove('hidden');
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

function saveStoreProduct() {
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var name  = document.getElementById('sp-name').value.trim();
   var price = parseFloat(document.getElementById('sp-price').value) || 0;
   var desc  = document.getElementById('sp-desc').value.trim();
   var img   = document.getElementById('sp-img').value.trim() || 'https://placehold.co/400x300?text=Product';
   var badge = document.getElementById('sp-badge').value.trim() || 'New';
   var catKey = document.getElementById('sp-catkey').value;
   if (!name) { alert('Product name is required.'); return; }
   var prods = getMyProducts(user.email);
   var entry = { id: 'sp_' + user.email.split('@')[0] + '_' + Date.now(), name: name, price: price, desc: desc, img: img, badge: badge, catKey: catKey };
   if (_editProdIdx >= 0) {
      entry.id = prods[_editProdIdx].id; // preserve existing ID
      prods[_editProdIdx] = entry;
   } else {
      prods.push(entry);
   }
   saveMyProducts(user.email, prods);
   closeStoreProductModal();
   renderStoreOwnerProducts();
}

function deleteStoreProduct(idx) {
   if (!confirm('Delete this product?')) return;
   var user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var prods = getMyProducts(user.email);
   prods.splice(idx, 1);
   saveMyProducts(user.email, prods);
   renderStoreOwnerProducts();
}

function switchShopTab(tab) {
   ['orders', 'appointments', 'doctors', 'products'].forEach(function(t) {
      var panel = document.getElementById('shop-panel-' + t);
      var btn   = document.getElementById('shop-tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab);
   });
   if (tab === 'products')     renderStoreOwnerProducts();
   if (tab === 'appointments') renderShopAppointments();
   if (tab === 'doctors')      renderShopDoctors();
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
         html += '<div class="apt-doctors-list" style="margin-top:0.7rem">';
         docs.forEach(function(d) {
            var initials = d.name.replace(/^Dr\.?\s*/i, '').split(' ').map(function(x) { return x[0]; }).slice(0,2).join('').toUpperCase();
            var did = d.id.replace(/'/g, "\\'");
            var daysSummary = summarizeDoctorDays(d.availability);
            html += '<div class="apt-doctor-card">' +
                      '<div class="apt-doctor-avatar">' + initials + '</div>' +
                      '<div class="apt-doctor-info">' +
                         '<div class="apt-doctor-name">' + d.name + '</div>' +
                         '<div class="apt-doctor-spec">' + (d.speciality || '') + '</div>' +
                         '<div class="apt-doctor-qual">' + (d.qual || '') + '</div>' +
                         '<div class="apt-doctor-days">📅 ' + daysSummary + '</div>' +
                      '</div>' +
                      '<div class="apt-doctor-right">' +
                         '<div class="apt-doctor-fee">₹' + (d.fee || 0) + '<span>/visit</span></div>' +
                         '<div style="display:flex;gap:4px">' +
                            '<button class="apt-view-btn" style="padding:5px 10px;font-size:0.78rem" onclick="openAptDoctorModal(\'' + pid + '\',\'' + did + '\')">✏️</button>' +
                            '<button class="apt-view-btn" style="padding:5px 10px;font-size:0.78rem;background:#c62828" onclick="deleteAptDoctor(\'' + pid + '\',\'' + did + '\')">🗑</button>' +
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
      if (!opts.customDate) return true;     // no date chosen yet
      return ymd === opts.customDate;
   }
   if (range === 'range') {
      if (!opts.rangeFrom && !opts.rangeTo) return true;
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

   // Live updates: re-fetch & re-render whenever an appointment row changes anywhere
   _liveSubscribe('shopApts', 'appointments', function() {
      _shopAptsCache = null;
      renderShopAppointments(window._shopAptCurrentFilter);
   });

   // Highlight active filter pill
   ['', 'Confirmed', 'Completed', 'Cancelled'].forEach(function(f) {
      var id = 'apt-tab-' + (f || 'all');
      var btn = document.getElementById(id);
      if (btn) btn.classList.toggle('active', (filterStatus || '') === f);
   });

   if (!_shopAptsCache) {
      list.innerHTML = '<div class="shop-empty">Loading…</div>';
      _shopAptsCache = await AppDB.getAppointmentsByOwner(user.email);
   }
   var all = _shopAptsCache || [];

   // Populate the doctor-filter dropdown from the current cache (preserves selection)
   var docSel = document.getElementById('shopAptDoctorFilter');
   if (docSel) {
      var currentDoc = docSel.value;
      var doctors = Array.from(new Set(all.map(function(a) { return a.doctor_name; }).filter(Boolean))).sort();
      docSel.innerHTML = '<option value="">👨‍⚕️ All doctors</option>' +
         doctors.map(function(d) {
            return '<option value="' + d + '"' + (d === currentDoc ? ' selected' : '') + '>' + d + '</option>';
         }).join('');
   }
   var doctorFilter = (docSel && docSel.value) || '';

   // Apply date range filter (uses appointment date, not booked-at time)
   var df = _readDateFilter('shopAptDateFilter', 'shopAptCustomDate', 'shopAptRangeFrom', 'shopAptRangeTo');
   var dateRange = df.range;
   var searchEl  = document.getElementById('shopAptSearch');
   var searchVal = (searchEl && searchEl.value || '').trim().toLowerCase();
   var dateFiltered = all.filter(function(a) {
      if (doctorFilter && a.doctor_name !== doctorFilter) return false;
      if (!_isDateInRange(a.date, df.range, df)) return false;
      if (searchVal) {
         var hay = ((a.patient_name || '') + ' ' + (a.user_email || '') + ' ' + (a.patient_phone || '')).toLowerCase();
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
   if (!apts.length) {
      var msg = 'No appointments';
      if (filterStatus) msg += ' in "' + filterStatus + '"';
      if (dateRange !== 'all') msg += ' for ' + dateRange === 'today' ? 'today' : 'this ' + dateRange;
      list.innerHTML = '<div class="shop-empty">' + msg + '.</div>';
      return;
   }

   var rows = apts.map(function(a) {
      var status = a.status || 'Confirmed';
      var cls = status === 'Cancelled' ? 'cancelled' : (status === 'Completed' ? 'completed' : 'confirmed');
      // Friendlier labels for the owner — DB still stores 'Completed' / 'Cancelled'
      var statusLabel = status === 'Completed' ? 'Checkup Completed' : status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by Patient'
                      : a.cancelled_by === 'hospital' ? 'by You'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
      }
      var aid = (a.apt_id || '').replace(/'/g, "\\'");
      var canChange = status === 'Confirmed';

      // Fee column — show "(not paid)" hint for pending bookings
      var feeHtml = '<div class="apt-tbl-fee">₹' + (a.fee || 0) + '</div>';
      if (status === 'Confirmed')        feeHtml += '<div class="apt-tbl-fee-tag unpaid">not paid</div>';
      else if (status === 'Completed')   feeHtml += '<div class="apt-tbl-fee-tag paid">paid offline</div>';

      // Booked At — when the customer placed the booking (uses created_at)
      var bookedAt = '';
      if (a.created_at) {
         var dt = new Date(a.created_at);
         if (!isNaN(dt.getTime())) {
            var dStr = dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
            var tStr = dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
            bookedAt = '<div class="apt-tbl-name">' + dStr + '</div><div class="apt-tbl-sub">' + tStr + '</div>';
         }
      }

      var actions = canChange
         ? '<button class="apt-act-btn apt-act-ok"     title="Mark as Completed" onclick="shopSetAptStatus(\'' + aid + '\',\'Completed\')">✅ Complete</button>' +
           '<button class="apt-act-btn apt-act-cancel" title="Cancel this appointment" onclick="shopSetAptStatus(\'' + aid + '\',\'Cancelled\')">✕ Cancel</button>'
         : '<span style="color:#bbb">—</span>';
      return '<tr>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div>' +
                    '<div class="apt-tbl-slot">' + (a.slot || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.doctor_name || '') + '</div>' +
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

async function shopSetAptStatus(aptId, status) {
   if (!confirm('Set this appointment to "' + status + '"?')) return;
   var extra = status === 'Cancelled' ? { cancelled_by: 'hospital' } : null;
   var ok = await AppDB.updateAppointmentStatus(aptId, status, extra);
   if (!ok) { alert('Failed to update.'); return; }
   _shopAptsCache = null;     // force re-fetch
   renderShopAppointments();
}

function logout() {
   sessionStorage.removeItem('loggedInUser');
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
function switchAdminTab(tab) {
   ['products', 'stores', 'appointments', 'settings', 'users'].forEach(function(t) {
      var el  = document.getElementById('tab-' + t);
      var btn = document.getElementById('tab-' + t + '-btn');
      if (el)  el.classList.toggle('hidden', t !== tab);
      if (btn) btn.classList.toggle('active', t === tab);
   });
   if (tab === 'settings')     loadSettingsForm();
   if (tab === 'users')        refreshAndRenderUsers();
   if (tab === 'stores')       renderAdminStores();
   if (tab === 'appointments') renderAptAdmin();
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
      shopAnnouncementText: document.getElementById('set-shopAnnouncementText').value.trim()
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

   // Announcement bar
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
   await loadUserData(user.email);
   document.getElementById('prof-name').value   = user.name   || '';
   document.getElementById('prof-email').value  = user.email  || '';
   document.getElementById('prof-gender').value = user.gender || '';
   document.getElementById('prof-phone').value  = user.phone  || '';
   var storeNameRow = document.getElementById('prof-storename-row');
   if (storeNameRow) {
      if (user.role === 'storeowner' || isAdmin(user.email)) {
         storeNameRow.classList.remove('hidden');
         document.getElementById('prof-storename').value = user.storeName || '';
      }
   }
   const params = new URLSearchParams(window.location.search);
   switchProfileTab(params.get('tab') || 'info');
}

function switchProfileTab(tab) {
   ['info', 'addresses', 'orders', 'appointments', 'wishlist', 'cards'].forEach(t => {
      document.getElementById('ptab-' + t).classList.toggle('hidden', t !== tab);
      document.getElementById('ptab-' + t + '-btn').classList.toggle('active', t === tab);
   });
   if (tab === 'addresses')    renderAddresses();
   if (tab === 'orders')       renderOrders();
   if (tab === 'appointments') renderMyAppointments();
   if (tab === 'wishlist')     renderWishlistTab();
   if (tab === 'cards')        renderCards();
}

function saveProfileInfo() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) return;
   user.name   = document.getElementById('prof-name').value.trim();
   user.gender = document.getElementById('prof-gender').value;
   user.phone  = document.getElementById('prof-phone').value.trim();
   var storeNameEl = document.getElementById('prof-storename');
   if (storeNameEl) { user.storeName = storeNameEl.value.trim(); }
   const users = getUsers();
   const idx = users.findIndex(u => u.email === user.email);
   if (idx !== -1) {
      users[idx].name = user.name;
      users[idx].gender = user.gender;
      users[idx].phone = user.phone;
      if (storeNameEl) users[idx].storeName = user.storeName;
      saveUsers(users);
   }
   sessionStorage.setItem('loggedInUser', JSON.stringify(user));
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
   if (status === 'Ready')     return 'badge-ready';
   if (status === 'Completed') return 'badge-completed';
   return 'badge-pending';
}

function renderOrders() {
   const user   = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const orders = _db.orders.filter(function(o) { return o.customerEmail === user.email; });
   const list   = document.getElementById('ordersList');
   if (!orders.length) { list.innerHTML = '<p class="prof-empty">No orders placed yet.</p>'; return; }

   const statusMap = {};
   _db.orders.forEach(function(o) { statusMap[o.orderId || o.order_id] = o.status; });

   list.innerHTML = orders.slice().reverse().map(o => {
      const liveStatus = statusMap[o.orderId] || o.status || 'Pending Pickup';
      const cls = orderStatusClass(liveStatus);
      return `
      <div class="order-card">
         <div class="order-card-header">
            <div><span class="order-id">${o.orderId}</span> <span class="order-date">${o.date}</span></div>
            <span class="order-badge ${cls}">${liveStatus}</span>
         </div>
         ${o.storeName ? `<div class="order-store-tag">🏪 ${o.storeName}</div>` : ''}
         <div class="order-items">
            ${o.items.map(i => `<div class="order-item"><span>${i.name} × ${i.qty}</span><span>₹${(i.price * i.qty).toLocaleString('en-IN')}</span></div>`).join('')}
         </div>
         <div class="order-footer">
            <span>${o.method === 'Pickup' ? '🛍️ Pickup at store' : 'Paid via ' + o.method}</span>
            <span class="order-total">Total: ₹${o.total.toLocaleString('en-IN')}</span>
         </div>
      </div>`;
   }).join('');
}

// ── MY APPOINTMENTS (profile page) ──
async function renderMyAppointments() {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   var list = document.getElementById('appointmentsList');
   if (!user) { list.innerHTML = '<p class="prof-empty">Please log in to view your appointments.</p>'; return; }
   _liveSubscribe('myApts', 'appointments', renderMyAppointments);
   list.innerHTML = '<p class="prof-empty">Loading…</p>';
   var apts = await AppDB.getAppointments(user.email);
   if (!apts.length) { list.innerHTML = '<p class="prof-empty">No appointments booked yet.</p>'; return; }

   list.innerHTML = apts.map(function(a) {
      var status = a.status || 'Confirmed';
      var isCancellable = status !== 'Cancelled' && status !== 'Completed';
      var cls = status === 'Cancelled' ? 'cancelled' : (status === 'Completed' ? 'completed' : 'confirmed');
      var statusLabel = status;
      if (status === 'Cancelled' && a.cancelled_by) {
         var byLabel = a.cancelled_by === 'customer' ? 'by You'
                      : a.cancelled_by === 'hospital' ? 'by Hospital'
                      : a.cancelled_by === 'admin'   ? 'by Admin' : '';
         if (byLabel) statusLabel = 'Cancelled<br><small style="font-weight:400;opacity:0.85">' + byLabel + '</small>';
      }
      return '<div class="order-card">' +
                '<div class="order-card-header">' +
                   '<div><span class="order-id">' + a.apt_id + '</span> <span class="order-date">' + (a.date || '') + ' · ' + (a.slot || '') + '</span></div>' +
                   '<span class="order-badge ' + cls + '">' + statusLabel + '</span>' +
                '</div>' +
                '<div class="order-store-tag">🏥 ' + (a.provider_name || '') + '</div>' +
                '<div class="order-items">' +
                   '<div class="order-item"><span>👨‍⚕️ ' + (a.doctor_name || '') + '</span><span>' + (a.speciality || '') + '</span></div>' +
                '</div>' +
                '<div class="order-footer">' +
                   '<span>Consultation Fee</span>' +
                   '<span class="order-total">₹' + (a.fee || 0) + '</span>' +
                '</div>' +
                (isCancellable
                   ? '<div style="text-align:right;padding:8px 12px 0"><button class="apt-cancel-btn" style="padding:6px 14px;font-size:0.8rem" onclick="cancelMyAppointment(\'' + a.apt_id.replace(/'/g,"\\'") + '\')">Cancel Appointment</button></div>'
                   : '') +
             '</div>';
   }).join('');
}

async function cancelMyAppointment(aptId) {
   if (!confirm('Cancel this appointment? This cannot be undone.')) return;
   var ok = await AppDB.updateAppointmentStatus(aptId, 'Cancelled', { cancelled_by: 'customer' });
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
