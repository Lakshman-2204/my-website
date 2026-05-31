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
   // Restore the product-category row hidden by showBookAppointment
   var cats = document.querySelector('.header-categories');
   if (cats) cats.classList.remove('hidden');
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

function openAptBookModal(catKey, providerId, doctorId) {
   var user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { promptAuth('Please log in or sign up to book an appointment.'); return; }

   var provider = _aptGetProvider(providerId);
   var doctor = _aptGetDoctor(provider, doctorId);
   if (!doctor) return;

   _aptBookCtx = { catKey: catKey, providerId: providerId, doctor: doctor, provider: provider, date: null, slot: null };
   var isTokenMode = doctor.booking_mode === 'token';

   var modeLine = isTokenMode ? ' · 🎟 Token mode' : '';
   document.getElementById('aptBookModalDoc').textContent  = doctor.name + ' · ' + provider.name;
   document.getElementById('aptBookModalSpec').textContent = (doctor.speciality || '') + (doctor.qual ? ' · ' + doctor.qual : '') + modeLine;
   document.getElementById('aptBookModalFee').textContent  = 'Consultation fee: ₹' + (doctor.fee || 0);

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

   // Fetch existing bookings to compute online/offline fill per slot
   var existing = await AppDB.getDoctorBookings(doctor.id, dateStr);
   var onlineCountsBySlot  = {};
   var offlineCountsBySlot = {};
   existing.forEach(function(b) {
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
function _tokenBadgeColor(apt) {
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
async function _checkBookingAbuse(user, doctor, providerId, dateStr) {
   var settings = getAdminSettings();
   var maxPerDoctor    = parseInt(settings.bookingsPerDoctorPerDay,   10) || 3;
   var maxPerCustomer  = parseInt(settings.bookingsPerCustomerPerDay, 10) || 10;
   var noShowThreshold = parseInt(settings.noShowBlockThreshold,      10) || 5;
   var noShowDays      = parseInt(settings.noShowBlockDays,           10) || 30;
   var emailLc         = (user.email || '').toLowerCase();

   var history = await AppDB.getAppointments(emailLc);

   // No-show auto-block (across all providers)
   var cutoffDate = new Date(Date.now() - noShowDays * 24 * 60 * 60 * 1000);
   var cutoffYmd  = cutoffDate.toISOString().slice(0, 10);
   var noShows = history.filter(function(a) {
      return a.status === 'No-show' && (a.date || '') >= cutoffYmd;
   });
   if (noShows.length >= noShowThreshold) {
      return 'Your account has ' + noShows.length + ' unattended appointments in the last ' + noShowDays + ' days. New bookings are restricted. Please contact support.';
   }

   // Per-doctor-per-day cap (active = not cancelled / no-show)
   var activeAtDoctorToday = history.filter(function(a) {
      return a.doctor_id === doctor.id && a.date === dateStr &&
             a.status !== 'Cancelled' && a.status !== 'No-show';
   });
   if (activeAtDoctorToday.length >= maxPerDoctor) {
      return 'You already have ' + activeAtDoctorToday.length + ' booking' + (activeAtDoctorToday.length === 1 ? '' : 's') +
             ' with this doctor on ' + dateStr + '. The maximum allowed per day is ' + maxPerDoctor + '.';
   }

   // Per-customer-per-day cap (across all doctors)
   var allToday = history.filter(function(a) {
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

// Has this appointment's scheduled time come and gone?
// Past date → true; future date → false; today → compare with slot time (token-mode
// bookings have no slot, so they remain "active" all day until the date rolls over).
function _slotPassed(apt) {
   if (!apt || !apt.date) return false;
   var todayYmd = new Date().toISOString().slice(0, 10);
   if (apt.date < todayYmd) return true;
   if (apt.date > todayYmd) return false;
   if (!apt.slot) return false;   // token-mode: day still active
   var now = new Date();
   return (now.getHours() * 60 + now.getMinutes()) >= _hhmmToMin(apt.slot);
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

   // Abuse defenses — caps, no-show block, provider block list
   var abuseError = await _checkBookingAbuse(user, doctor, _aptBookCtx.providerId, _aptBookCtx.date);
   if (abuseError) { alert(abuseError); return; }

   // Re-check ONLINE capacity (only counts online bookings against online cap).
   // Token = total bookings in that slot/day (across online + offline) + 1, so
   // online & offline never share a token number — the owner calls patients
   // in T1, T2, T3 order regardless of how they were booked.
   var caps2 = _doctorCaps(doctor);
   var existing = await AppDB.getDoctorBookings(doctor.id, _aptBookCtx.date);
   var onlineExisting = existing.filter(function(b) { return b.booking_source !== 'offline'; });
   var token;
   if (isTokenMode) {
      if (onlineExisting.length >= caps2.dailyOnline) {
         alert('Sorry — online tokens for this day just got fully booked. Please pick another day or call the hospital.');
         var activeBtnT = document.querySelector('.apt-date-btn.active');
         if (activeBtnT) selectAptDate(_aptBookCtx.date, activeBtnT);
         return;
      }
      token = existing.length + 1;
   } else {
      var inSlotOnline = onlineExisting.filter(function(b) { return b.slot === _aptBookCtx.slot; });
      if (inSlotOnline.length >= caps2.slotOnline) {
         alert('Sorry — online slots for this time just filled up. Please pick another time or call the hospital.');
         var activeBtn = document.querySelector('.apt-date-btn.active');
         if (activeBtn) selectAptDate(_aptBookCtx.date, activeBtn);
         return;
      }
      var inSlotAll = existing.filter(function(b) { return b.slot === _aptBookCtx.slot; });
      token = inSlotAll.length + 1;
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
      fee: _aptBookCtx.doctor.fee,
      status: 'Confirmed',
      token: token,
      booking_source: 'online',
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
   var tokenLine = apt.token ? '<div style="margin-top:6px;font-size:1rem;font-weight:700;color:#1a73e8">🎟 Your token: T' + apt.token + '</div>' : '';
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
      commission_type:  document.getElementById('aptProvCommissionType').value || 'percent',
      commission_value: parseFloat(document.getElementById('aptProvCommissionValue').value) || 0,
      doctors:          existing ? (existing.doctors || []) : []
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
   document.getElementById('aptDocFee').value        = doctor ? (doctor.fee || '') : '';
   document.getElementById('aptDocPhoto').value      = doctor ? (doctor.photo || '') : '';
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
   document.getElementById('aptDoctorModal').classList.remove('hidden');
}

function closeAptDoctorModal() {
   document.getElementById('aptDoctorModal').classList.add('hidden');
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
      fee:                  parseInt(document.getElementById('aptDocFee').value, 10) || 0,
      photo:                document.getElementById('aptDocPhoto').value.trim(),
      booking_mode:         document.getElementById('aptDocBookingMode').value || 'slot',
      slot_duration:        parseInt(document.getElementById('aptDocSlotDuration').value, 10) || 60,
      slot_capacity_online:  Math.max(0, parseInt(document.getElementById('aptDocCapacityOnline').value,  10) || 0),
      slot_capacity_offline: Math.max(0, parseInt(document.getElementById('aptDocCapacityOffline').value, 10) || 0),
      daily_cap_online:      Math.max(0, parseInt(document.getElementById('aptDocDailyCapOnline').value,  10) || 0),
      daily_cap_offline:     Math.max(0, parseInt(document.getElementById('aptDocDailyCapOffline').value, 10) || 0),
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
   ['providers', 'bookings', 'categories'].forEach(function(s) {
      var panel = document.getElementById('apt-sub-' + s);
      var btn   = document.getElementById('apt-subtab-' + s + '-btn');
      if (panel) panel.classList.toggle('hidden', s !== sub);
      if (btn)   btn.classList.toggle('active', s === sub);
   });
   if (sub === 'bookings')   renderAllAppointments();
   if (sub === 'providers')  renderAptAdmin();
   if (sub === 'categories') renderAptCategoriesAdmin();
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

async function renderAllAppointments() {
   var container = document.getElementById('aptAllBookingsContent');
   if (!container) return;
   _liveSubscribe('adminApts', 'appointments', renderAllAppointments);
   if (!container.innerHTML.trim()) container.innerHTML = '<p style="color:#999;text-align:center;padding:40px">Loading…</p>';
   await loadAptCategories();
   var all = await AppDB.getAllAppointments();

   // Populate filter dropdowns from data (preserves selection)
   _fillSelectFromList('adminAptDoctorFilter',   '👨‍⚕️ All staff',     all.map(function(a){return a.doctor_name;}));
   _fillSelectFromList('adminAptProviderFilter', '🏪 All providers',  all.map(function(a){return a.provider_name;}));
   _fillSelectFromList('adminAptCategoryFilter', '🗂 All categories', all.map(function(a){return a.category;}), function(k){
      var m = APT_CAT_META[k]; return m ? (m.icon + ' ' + m.label) : k;
   });

   var search   = ((document.getElementById('adminAptSearch')         || {}).value || '').trim().toLowerCase();
   var docF     =  (document.getElementById('adminAptDoctorFilter')   || {}).value || '';
   var provF    =  (document.getElementById('adminAptProviderFilter') || {}).value || '';
   var catF     =  (document.getElementById('adminAptCategoryFilter') || {}).value || '';
   var statusF  =  (document.getElementById('aptBookingsFilter')      || {}).value || '';
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
      var feeHtml = '<div class="apt-tbl-fee">₹' + (a.fee || 0) + '</div>';
      if (status === 'Confirmed')      feeHtml += '<div class="apt-tbl-fee-tag unpaid">not paid</div>';
      else if (status === 'Completed') feeHtml += '<div class="apt-tbl-fee-tag paid">paid</div>';
      var bookedAt = '';
      if (a.created_at) {
         var dt = new Date(a.created_at);
         if (!isNaN(dt.getTime())) {
            bookedAt = '<div class="apt-tbl-name">' + dt.toLocaleDateString('en-IN', { day:'2-digit', month:'short' }) + '</div>' +
                       '<div class="apt-tbl-sub">' + dt.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }) + '</div>';
         }
      }
      // Admin can print receipt + delete. Complete/Cancel are done by hospital owner or customer.
      var actions =
         '<button class="apt-act-btn" style="background:#1a73e8;color:#fff" onclick="printConsultationReceipt(\'' + aid + '\')" title="Print consultation receipt">🧾 Receipt</button>' +
         '<button class="apt-act-btn" style="background:#555;color:#fff" onclick="deleteAdminAppointment(\'' + aid + '\')" title="Delete (permanent)">🗑 Delete</button>';
      var meta = APT_CAT_META[a.category] || {};
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">T' + a.token + '</span>'
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

   // Try Supabase Auth first — works for OTP-signed-up users AND migrated admins.
   {
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
      } else {
         // Legacy fallback for users still on plaintext in the users table
         // (un-migrated admins, SQL-inserted users). Empty-password OTP rows
         // can never match because we require a non-empty stored password.
         const users = getUsers();
         user = users.find(u => u.email.toLowerCase() === email && u.password && u.password === password) || null;
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
   var ownsProducts = (_db.products || []).some(function(p) { return (p.store_id || '').toLowerCase() === user.email.toLowerCase(); });
   var businessName = '';
   if (myProviders.length > 0) {
      businessName = myProviders.length === 1 ? myProviders[0].name
                                              : myProviders.map(function(p) { return p.name; }).join(' · ');
   } else if (ownsProducts) {
      businessName = user.storeName || user.name || '';
   } else if (isAdmin(user.email)) {
      businessName = 'Admin Dashboard';
   } else {
      businessName = user.storeName || user.name || '';
   }
   // If the user owns nothing yet, default to Appointments view so a brand-new partner
   // (or admin without linked assets) doesn't land on a blank page.
   if (!ownsHospital && !ownsProducts) ownsHospital = true;

   var bizEl = document.getElementById('shopBusinessName');
   if (bizEl) bizEl.textContent = businessName;

   var dashTab   = document.getElementById('shop-tab-dashboard');
   var ordersTab = document.getElementById('shop-tab-orders');
   var aptTab    = document.getElementById('shop-tab-appointments');
   var docTab    = document.getElementById('shop-tab-doctors');
   var schedTab  = document.getElementById('shop-tab-schedule');
   var prodTab   = document.getElementById('shop-tab-products');
   if (dashTab)   dashTab.classList.toggle('hidden',   !ownsHospital);
   if (ordersTab) ordersTab.classList.toggle('hidden', !ownsProducts);
   if (prodTab)   prodTab.classList.toggle('hidden',   !ownsProducts);
   if (aptTab)    aptTab.classList.toggle('hidden',    !ownsHospital);
   if (docTab)    docTab.classList.toggle('hidden',    !ownsHospital);
   if (schedTab)  schedTab.classList.toggle('hidden',  !ownsHospital);

   // Pick the right "staff" label for the doctors tab based on what the owner runs
   // (e.g. Doctors / Stylists / Trainers / Staff). The +Add buttons live inside the panel,
   // not on the tab label.
   if (docTab && ownsHospital) {
      var cats = (myProviders || []).map(function(p) { return p.category; });
      var s    = _staffLabelForCategories(cats);
      docTab.innerHTML = s.icon + ' ' + s.label;
   }

   // Render whichever panel makes sense
   if (ownsProducts) renderShopDashboard();
   // Hospital owners land on Dashboard; product-only owners land on Orders
   var defaultTab = ownsHospital ? 'dashboard' : 'orders';
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
   ['dashboard', 'orders', 'appointments', 'doctors', 'schedule', 'products'].forEach(function(t) {
      var panel = document.getElementById('shop-panel-' + t);
      var btn   = document.getElementById('shop-tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab);
   });
   if (tab === 'dashboard')    renderShopOverview();
   if (tab === 'products')     renderStoreOwnerProducts();
   if (tab === 'appointments') renderShopAppointments();
   if (tab === 'doctors')      renderShopDoctors();
   if (tab === 'schedule')     renderShopSchedule();
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
                         '<div class="apt-doc-footer">' +
                            '<div class="apt-doc-fee">₹' + (d.fee || 0) + '<span>/visit</span></div>' +
                            '<div style="display:flex;gap:4px">' +
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
   ['', 'Confirmed', 'Completed', 'Cancelled', 'No-show'].forEach(function(f) {
      var id = 'apt-tab-' + (f || 'all');
      var btn = document.getElementById(id);
      if (btn) btn.classList.toggle('active', (filterStatus || '') === f);
   });

   if (!_shopAptsCache) {
      list.innerHTML = '<div class="shop-empty">Loading…</div>';
      _shopAptsCache = await AppDB.getAppointmentsByOwner(user.email);
   }
   var all = _shopAptsCache || [];

   // Doctor filter — render as tabs (dynamically populated from existing appointments).
   // Preserves selection across re-renders via window._shopAptDoctorFilter.
   var doctorFilter = window._shopAptDoctorFilter || '';
   var doctorsTabsEl = document.getElementById('shopAptDoctorTabs');
   var uniqueDoctors = Array.from(new Set(all.map(function(a) { return a.doctor_name; }).filter(Boolean))).sort();
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
   // Sort by date → slot → token so owner sees patients in the order they should be called
   apts.sort(function(a, b) {
      if (a.date !== b.date) return (a.date || '').localeCompare(b.date || '');
      if (a.slot !== b.slot) return (a.slot || '').localeCompare(b.slot || '');
      return (a.token || 999) - (b.token || 999);
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
      // Friendlier labels for the owner — DB still stores 'Completed' / 'Cancelled' / 'No-show'
      var statusLabel = status === 'Completed' ? 'Checkup Completed' : status;
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

      // Action buttons depend on status + whether the slot has passed yet.
      // Receipt is available for any non-cancelled booking.
      var receiptBtn = (status !== 'Cancelled')
         ? '<button class="apt-act-btn" style="background:#1a73e8;color:#fff" title="Print consultation receipt" onclick="printConsultationReceipt(\'' + aid + '\')">🧾 Receipt</button>'
         : '';
      var actions;
      if (!canChange) {
         actions = receiptBtn || '<span style="color:#bbb">—</span>';
      } else {
         var slotPassed = _slotPassed(a);
         var completeBtn = slotPassed
            ? '<button class="apt-act-btn apt-act-ok"      title="Mark as Completed" onclick="shopSetAptStatus(\'' + aid + '\',\'Completed\')">✅ Complete</button>'
            : '<button class="apt-act-btn apt-act-ok"      title="Available after the slot time" disabled style="opacity:0.4;cursor:not-allowed">✅ Complete</button>';
         var noshowBtn = slotPassed
            ? '<button class="apt-act-btn apt-act-noshow"  title="Patient did not show up" onclick="shopSetAptStatus(\'' + aid + '\',\'No-show\')">🚫 No-show</button>'
            : '';
         var cancelBtn  = '<button class="apt-act-btn apt-act-cancel" title="Cancel this appointment" onclick="shopSetAptStatus(\'' + aid + '\',\'Cancelled\')">✕ Cancel</button>';
         actions = receiptBtn + completeBtn + noshowBtn + cancelBtn;
      }
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">T' + a.token + '</span>'
         : '<span style="color:#bbb">—</span>';
      var slotCell  = a.slot ? _formatSlot12(a.slot) : '<span style="color:#888;font-size:0.72rem">🎟 Token mode</span>';
      return '<tr>' +
                '<td style="text-align:center">' + tokenCell + '</td>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div>' +
                    '<div class="apt-tbl-slot">' + slotCell + '</div></td>' +
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
   _liveSubscribe('shopDash', 'appointments', renderShopOverview);
   _liveSubscribe('shopDashProvs', 'apt_providers', renderShopOverview);
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
   var todayYmd  = new Date().toISOString().slice(0, 10);
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

      html +=
         '<div class="shop-ov-card">' +
            '<div class="shop-ov-header">' +
               photoBlock +
               '<div style="flex:1;min-width:0">' +
                  '<h2 class="shop-ov-name">' + p.name + '</h2>' +
                  (p.tagline ? '<div class="shop-ov-tagline">' + p.tagline + '</div>' : '') +
                  '<div class="shop-ov-meta">' +
                     (meta.icon || '') + ' ' + (meta.label || '') +
                  '</div>' +
               '</div>' +
            '</div>' +
            '<div class="shop-ov-info">' +
               (p.address ? '<div>📍 ' + p.address + '</div>' : '') +
               (p.timing  ? '<div>🕒 ' + p.timing  + '</div>' : '') +
               (p.phone   ? '<div>📞 <a href="tel:' + p.phone.replace(/\D/g,'') + '">' + p.phone + '</a></div>' : '') +
            '</div>' +
            '<div class="shop-ov-stats">' +
               _statCard('👨‍⚕️', docCount,                'Doctors') +
               _statCard('📅',  todayApts.length,        'Today\'s Bookings') +
               _statCard('⏳',  todayPending.length,     'Pending Today') +
               _statCard('✅',  todayDone.length,        'Completed Today') +
               _statCard('📊',  thisWeek.length,         'This Week') +
               _statCard('💰',  '₹' + monthRevenue.toLocaleString('en-IN'), 'Revenue (Month)') +
            '</div>' +
         '</div>';
   });

   container.innerHTML = html;
}

function _statCard(icon, value, label) {
   return '<div class="shop-ov-stat">' +
             '<div class="shop-ov-stat-icon">' + icon + '</div>' +
             '<div class="shop-ov-stat-val">' + value + '</div>' +
             '<div class="shop-ov-stat-label">' + label + '</div>' +
          '</div>';
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
   ['schedPatientName', 'schedPatientPhone', 'schedPatientEmail', 'schedPatientReason'].forEach(function(id) {
      var el = document.getElementById(id); if (el) el.value = '';
   });
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
      var off = avail.length === 0;
      var click = off ? '' : ' onclick="schedSelectDate(\'' + dateStr + '\', this)"';
      var extra = off ? ' style="opacity:0.35;cursor:not-allowed" title="Doctor unavailable"' : '';
      dateHtml += '<div class="apt-date-btn"' + click + extra + '>' +
                     '<div class="apt-date-day">' + label + '</div>' +
                     '<div class="apt-date-num">' + d.getDate() + ' ' + monthShort + '</div>' +
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
   var offlineExisting = existing.filter(function(b) { return b.booking_source === 'offline'; });
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
   var name  = document.getElementById('schedPatientName').value.trim();
   var phone = document.getElementById('schedPatientPhone').value.trim();
   var email = document.getElementById('schedPatientEmail').value.trim().toLowerCase();
   var reason = document.getElementById('schedPatientReason').value.trim();
   var msg = document.getElementById('schedMsg');
   var setMsg = function(t, ok) { msg.textContent = t; msg.style.color = ok ? '#2e7d32' : '#c62828'; };
   if (!name || !phone) { setMsg('Patient name and phone are required.'); return; }

   // Re-check OFFLINE capacity, but issue tokens from the COMBINED pool so
   // online & offline tokens never collide. Overtime bypasses capacity.
   var existing = await AppDB.getDoctorBookings(ctx.doctor.id, ctx.date);
   var offlineExisting = existing.filter(function(b) { return b.booking_source === 'offline'; });
   var isTokenMode = ctx.doctor.booking_mode === 'token';
   var caps = _doctorCaps(ctx.doctor);
   var token;
   if (ctx.overtime) {
      token = existing.length + 1;   // unique across all sources
   } else if (isTokenMode) {
      if (offlineExisting.length >= caps.dailyOffline) { setMsg('Offline tokens just got full. Please pick another date.'); return; }
      token = existing.length + 1;
   } else {
      var inSlotOffline = offlineExisting.filter(function(b) { return b.slot === ctx.slot; });
      if (inSlotOffline.length >= caps.slotOffline) { setMsg('Offline slot just filled up. Please pick another.'); return; }
      var inSlotAll = existing.filter(function(b) { return b.slot === ctx.slot; });
      token = inSlotAll.length + 1;
   }

   // user_email: real patient email if given, else a walk-in marker tied to phone
   var userEmail = email || ('walkin+' + phone.replace(/\D/g, '') + '@offline.local');

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
      patient_name:   name,
      patient_phone:  phone,
      patient_reason: reason + (ctx.overtime ? ' [Overtime]' : '')
   };
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
      var reason = prompt('Please tell the patient why you\'re cancelling:\n\n(Optional — leave blank if not applicable.)');
      if (reason === null) return;
      extra = { cancelled_by: 'hospital', cancellation_reason: (reason || '').trim() };
   } else if (status === 'Completed') {
      // Completion is only meaningful once the slot has passed
      if (apt && !_slotPassed(apt)) {
         alert('This appointment time hasn\'t passed yet. You can mark it Completed after the slot time.');
         return;
      }
      if (!confirm('Mark this appointment as Completed?')) return;
   } else if (status === 'No-show') {
      if (apt && !_slotPassed(apt)) {
         alert('This appointment time hasn\'t passed yet. No-show can only be marked after the slot.');
         return;
      }
      if (!confirm('Mark this appointment as No-show (patient did not turn up)?')) return;
   } else {
      if (!confirm('Set this appointment to "' + status + '"?')) return;
   }
   var ok = await AppDB.updateAppointmentStatus(aptId, status, extra);
   if (!ok) { alert('Failed to update.'); return; }
   _shopAptsCache = null;
   renderShopAppointments();
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
function switchAdminTab(tab) {
   ['products', 'stores', 'orders', 'appointments', 'billing', 'settings', 'users'].forEach(function(t) {
      var el  = document.getElementById('tab-' + t);
      var btn = document.getElementById('tab-' + t + '-btn');
      if (el)  el.classList.toggle('hidden', t !== tab);
      if (btn) btn.classList.toggle('active', t === tab);
   });
   if (tab === 'settings')     loadSettingsForm();
   if (tab === 'users')        refreshAndRenderUsers();
   if (tab === 'stores')       renderAdminStores();
   if (tab === 'orders')       renderAdminOrders();
   if (tab === 'appointments') renderAptAdmin();
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
   var perProvider = {};   // provider_id → { count, revenue }
   apts.forEach(function(a) {
      if (!providerById[a.provider_id]) return;
      var pid = a.provider_id;
      if (!perProvider[pid]) perProvider[pid] = { count: 0, revenue: 0 };
      perProvider[pid].count   += 1;
      perProvider[pid].revenue += (a.fee || 0);
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
         revenue: revenue, commission: commission, count: count, isAppt: true
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
         revenue: b.revenue, commission: commission, count: b.count, isAppt: false
      });
   });

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
   _liveSubscribe('adminOrders', 'orders', renderAdminOrders);

   await initDB();
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
      var itemCount = (o.items || []).reduce(function(s, it) { return s + (it.qty || 0); }, 0);
      return '<tr>' +
                '<td><div class="apt-tbl-date">' + (o.date || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (o.customerName || '—') + '</div>' +
                    '<div class="apt-tbl-sub">' + (o.customerEmail || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (o.storeName || '<em style="color:#999">Platform</em>') + '</div></td>' +
                '<td style="text-align:center">' + itemCount + '</td>' +
                '<td style="text-align:right;font-weight:600">₹' + (o.total || 0).toLocaleString('en-IN') + '</td>' +
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
      shopAnnouncementText: document.getElementById('set-shopAnnouncementText').value.trim(),
      commissionRate:       parseFloat(document.getElementById('set-commissionRate').value) || 0,
      bookingsPerDoctorPerDay:   parseInt(document.getElementById('set-bookingsPerDoctorPerDay').value,   10) || 3,
      bookingsPerCustomerPerDay: parseInt(document.getElementById('set-bookingsPerCustomerPerDay').value, 10) || 10,
      noShowBlockThreshold:      parseInt(document.getElementById('set-noShowBlockThreshold').value,      10) || 5,
      noShowBlockDays:           parseInt(document.getElementById('set-noShowBlockDays').value,           10) || 30
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
   if (!list.innerHTML.trim()) list.innerHTML = '<p class="prof-empty">Loading…</p>';
   var all = await AppDB.getAppointments(user.email);
   if (!all.length) {
      list.innerHTML = '<p class="prof-empty">No appointments booked yet.</p>';
      return;
   }

   // Populate filter dropdowns from data (preserves current selection)
   _fillSelectFromList('myAptDoctorFilter',   '👨‍⚕️ All doctors',   all.map(function(a){return a.doctor_name;}));
   _fillSelectFromList('myAptHospitalFilter', '🏥 All hospitals',   all.map(function(a){return a.provider_name;}));
   _fillSelectFromList('myAptCategoryFilter', '🗂 All categories',  all.map(function(a){return a.category;}), function(k){
      var m = APT_CAT_META[k]; return m ? (m.icon + ' ' + m.label) : k;
   });

   var search   = ((document.getElementById('myAptSearch')         || {}).value || '').trim().toLowerCase();
   var docF     =  (document.getElementById('myAptDoctorFilter')   || {}).value || '';
   var hospF    =  (document.getElementById('myAptHospitalFilter') || {}).value || '';
   var catF     =  (document.getElementById('myAptCategoryFilter') || {}).value || '';
   var df       = _readDateFilter('myAptDateFilter', 'myAptCustomDate', 'myAptRangeFrom', 'myAptRangeTo');

   var apts = all.filter(function(a) {
      if (docF  && a.doctor_name   !== docF)  return false;
      if (hospF && a.provider_name !== hospF) return false;
      if (catF  && a.category      !== catF)  return false;
      if (!_isDateInRange(a.date, df.range, df)) return false;
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
      var isCancellable = status === 'Confirmed';
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
      var actions = isCancellable
         ? '<button class="apt-act-btn apt-act-cancel" onclick="cancelMyAppointment(\'' + aid + '\')">✕ Cancel</button>'
         : '<span style="color:#bbb">—</span>';
      var meta = APT_CAT_META[a.category] || {};
      var tokenCell = a.token
         ? '<span class="apt-token-badge" style="background:' + _tokenBadgeColor(a) + ';color:#fff">T' + a.token + '</span>'
         : '<span style="color:#bbb">—</span>';
      var slotCell  = a.slot ? _formatSlot12(a.slot) : '<span style="color:#888;font-size:0.72rem">🎟 Token mode</span>';
      return '<tr>' +
                '<td style="text-align:center">' + tokenCell + '</td>' +
                '<td><div class="apt-tbl-date">' + (a.date || '') + '</div><div class="apt-tbl-slot">' + slotCell + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.doctor_name || '') + '</div><div class="apt-tbl-sub">' + (a.speciality || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.provider_name || '') + '</div><div class="apt-tbl-sub">' + (meta.icon || '') + ' ' + (meta.label || a.category || '') + '</div></td>' +
                '<td><div class="apt-tbl-name">' + (a.patient_name || '—') + '</div>' + (a.patient_phone ? '<div class="apt-tbl-sub">' + a.patient_phone + '</div>' : '') + '</td>' +
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

async function cancelMyAppointment(aptId) {
   // Block self-cancel once the appointment time has passed.
   // The customer should contact the hospital directly for late issues.
   var apts = await AppDB.getAppointments((JSON.parse(sessionStorage.getItem('loggedInUser')) || {}).email || '');
   var apt = apts.find(function(a) { return a.apt_id === aptId; });
   if (apt && _slotPassed(apt)) {
      alert('This appointment time has already passed (' + apt.date + (apt.slot ? ' ' + apt.slot : '') + '). Please contact the hospital directly to resolve.');
      return;
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
   var followUpEnd = new Date(createDt.getTime() + 7 * 24 * 60 * 60 * 1000);

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
         '.signblock{text-align:center;margin:22px 8px 0}' +
         '.signline{display:inline-block;border-top:1px solid #000;padding-top:3px;min-width:220px;font-weight:700;font-size:12px}' +
         '.followup{text-align:center;font-size:13px;font-weight:700;padding:8px 0 0;letter-spacing:1px}' +
         '.actions{max-width:780px;margin:14px auto 0;display:flex;gap:8px;justify-content:center}' +
         '.actions button{padding:8px 18px;border:1px solid #000;background:#fff;cursor:pointer;font:inherit}' +
         '.actions button:hover{background:#000;color:#fff}' +
         '@page{size:A4 portrait;margin:0}' +
         '@media print{' +
            '.actions{display:none}' +
            'html,body{margin:0;padding:0;width:210mm;background:#fff}' +
            '.rcpt{width:210mm;height:148.5mm;padding:5mm 10mm;border:none;box-sizing:border-box;page-break-after:always;overflow:hidden}' +
            '.signblock{margin-top:14px}' +
         '}' +
      '</style>' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap">' +
      '</head><body>' +

      '<div class="rcpt">' +
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
               '<div class="row"><div class="lbl">Patient Name</div><div class="sep">:</div><div>' + esc(apt.patient_name || apt.user_email || '') + '</div></div>' +
               '<div class="row"><div class="lbl">Age/Sex</div><div class="sep">:</div><div>' + esc(apt.patient_age ? (apt.patient_age + 'Y(s)' + (apt.patient_sex ? '/' + apt.patient_sex : '')) : '—') + '</div></div>' +
               '<div class="row"><div class="lbl">Relative Name</div><div class="sep">:</div><div>—</div></div>' +
               '<div class="row"><div class="lbl">Address</div><div class="sep">:</div><div>—</div></div>' +
               '<div class="row"><div class="lbl">Referred By</div><div class="sep">:</div><div>—</div></div>' +
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

         '<div class="followup">&lt; Free FOLLOW-UP upto ' + esc(fmtDateOnly(followUpEnd)) + ' &gt;</div>' +
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
