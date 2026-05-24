// ── CART STATE ──
let cart = [];

// ── PRODUCT DATA ──
const products = {
   sofa: {
      title: 'Sofas',
      type: 'regular',
      items: [{
            id: 'sofa1',
            name: 'Royal Velvet Sofa',
            price: 45999,
            desc: '3-seater, velvet finish, solid wood legs',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'sofa2',
            name: 'L-Shape Corner Sofa',
            price: 78500,
            desc: 'Premium fabric, 5-seater L-shape',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'New'
         },
         {
            id: 'sofa3',
            name: 'Leather Recliner Sofa',
            price: 95000,
            desc: 'Genuine leather, reclining feature',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'sofa4',
            name: 'Compact 2-Seater',
            price: 22999,
            desc: 'Space-saving design, microfiber',
            img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   diningTable: {
      title: 'Dining Tables',
      type: 'regular',
      items: [{
            id: 'dt1',
            name: 'Teak Wood Dining Set',
            price: 38500,
            desc: '6-seater, solid teak wood finish',
            img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'dt2',
            name: 'Glass Top Table',
            price: 25999,
            desc: '4-seater, tempered glass, metal legs',
            img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'dt3',
            name: 'Marble Dining Table',
            price: 65000,
            desc: '6-seater, white marble top',
            img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'dt4',
            name: 'Folding Dining Table',
            price: 12500,
            desc: '4-seater foldable, space saving',
            img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   wardrobe: {
      title: 'Wardrobes',
      type: 'regular',
      items: [{
            id: 'w1',
            name: 'Sliding Door Wardrobe',
            price: 42000,
            desc: '3-door sliding, mirror finish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'w2',
            name: 'Wooden 4-Door Wardrobe',
            price: 55000,
            desc: 'Solid sheesham wood, 4 door',
            img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'w3',
            name: 'Walk-in Wardrobe Unit',
            price: 120000,
            desc: 'Modular, customizable layout',
            img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'w4',
            name: 'Compact 2-Door',
            price: 18500,
            desc: '2-door, laminate finish, shelves',
            img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   bedFrame: {
      title: 'Bed Frames',
      type: 'regular',
      items: [{
            id: 'bf1',
            name: 'King Size Wooden Bed',
            price: 35000,
            desc: 'Solid wood, king size, storage',
            img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'bf2',
            name: 'Upholstered Bed',
            price: 48000,
            desc: 'Velvet headboard, queen size',
            img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'bf3',
            name: 'Metal Platform Bed',
            price: 15999,
            desc: 'Modern metal frame, double size',
            img: 'https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'bf4',
            name: 'Poster Bed',
            price: 72000,
            desc: 'Classic 4-poster, teak wood',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },
   whiteMarble: {
      title: 'White Marble',
      type: 'regular',
      items: [{
            id: 'wm1',
            name: 'Statuario White Marble',
            price: 850,
            desc: 'Per sq ft — Premium Italian grade',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'wm2',
            name: 'Makrana White Marble',
            price: 320,
            desc: 'Per sq ft — Pure white, Indian origin',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'wm3',
            name: 'Carrara White Marble',
            price: 1200,
            desc: 'Per sq ft — Fine grey veins',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'wm4',
            name: 'Fantasy White Marble',
            price: 450,
            desc: 'Per sq ft — Mixed veining',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Trending'
         }
      ]
   },
   blackMarble: {
      title: 'Black Marble',
      type: 'regular',
      items: [{
            id: 'bm1',
            name: 'Nero Marquina',
            price: 1100,
            desc: 'Per sq ft — Deep black, white veins',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'bm2',
            name: 'Black Galaxy Marble',
            price: 750,
            desc: 'Per sq ft — Black with gold speckles',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'bm3',
            name: 'Absolute Black Marble',
            price: 500,
            desc: 'Per sq ft — Solid black, mirror polish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'bm4',
            name: 'Black Forest Marble',
            price: 650,
            desc: 'Per sq ft — Dark with green & gold veins',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   italianMarble: {
      title: 'Italian Marble',
      type: 'regular',
      items: [{
            id: 'im1',
            name: 'Botticino Marble',
            price: 1400,
            desc: 'Per sq ft — Beige tones',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'im2',
            name: 'Emperador Dark',
            price: 1600,
            desc: 'Per sq ft — Rich brown, white veins',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'im3',
            name: 'Rosa Perlino',
            price: 1800,
            desc: 'Per sq ft — Pink-rose tones',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Rare'
         },
         {
            id: 'im4',
            name: 'Verde Alpi',
            price: 2000,
            desc: 'Per sq ft — Green marble',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Exclusive'
         }
      ]
   },
   granite: {
      title: 'Granite',
      type: 'regular',
      items: [{
            id: 'gr1',
            name: 'Black Pearl Granite',
            price: 180,
            desc: 'Per sq ft — Dark black, silver sparkle',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'gr2',
            name: 'Kashmir White Granite',
            price: 220,
            desc: 'Per sq ft — White base, grey flecks',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'gr3',
            name: 'Tan Brown Granite',
            price: 160,
            desc: 'Per sq ft — Brown tones, durable',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'gr4',
            name: 'Blue Pearl Granite',
            price: 350,
            desc: 'Per sq ft — Imported, blue shimmer',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },
   hardwood: {
      title: 'Hardwood Flooring',
      type: 'regular',
      items: [{
            id: 'hw1',
            name: 'Oak Hardwood Floor',
            price: 280,
            desc: 'Per sq ft — Natural oak',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'hw2',
            name: 'Teak Wood Flooring',
            price: 420,
            desc: 'Per sq ft — Premium teak',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'hw3',
            name: 'Walnut Wood Floor',
            price: 550,
            desc: 'Per sq ft — Dark walnut',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'hw4',
            name: 'Pine Wood Flooring',
            price: 180,
            desc: 'Per sq ft — Light pine',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   vinyl: {
      title: 'Vinyl Flooring',
      type: 'regular',
      items: [{
            id: 'vn1',
            name: 'Wood-Look Vinyl',
            price: 85,
            desc: 'Per sq ft — Waterproof',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'vn2',
            name: 'Stone-Look Vinyl',
            price: 95,
            desc: 'Per sq ft — Marble-like pattern',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'vn3',
            name: 'Anti-Slip Vinyl',
            price: 110,
            desc: 'Per sq ft — Bathroom safe',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'New'
         },
         {
            id: 'vn4',
            name: 'Commercial Vinyl',
            price: 70,
            desc: 'Per sq ft — Heavy duty',
            img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   ceramicTiles: {
      title: 'Ceramic Tiles',
      type: 'regular',
      items: [{
            id: 'ct1',
            name: 'Glossy White Tiles',
            price: 55,
            desc: 'Per sq ft — 60x60 cm glossy',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'ct2',
            name: 'Wood-Effect Tiles',
            price: 75,
            desc: 'Per sq ft — Plank style',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'ct3',
            name: 'Moroccan Pattern Tiles',
            price: 120,
            desc: 'Per sq ft — Decorative',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'ct4',
            name: 'Anti-Skid Floor Tiles',
            price: 65,
            desc: 'Per sq ft — Slip resistant',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Safe'
         }
      ]
   },
   laminate: {
      title: 'Laminate Flooring',
      type: 'regular',
      items: [{
            id: 'lm1',
            name: 'Oak Laminate',
            price: 95,
            desc: 'Per sq ft — 8mm thick',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'lm2',
            name: 'Walnut Laminate',
            price: 120,
            desc: 'Per sq ft — 12mm thick',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'lm3',
            name: 'Grey Concrete Look',
            price: 110,
            desc: 'Per sq ft — Modern texture',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'lm4',
            name: 'Budget Laminate',
            price: 65,
            desc: 'Per sq ft — 7mm thick',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   wallArt: {
      title: 'Wall Art',
      type: 'regular',
      items: [{
            id: 'wa1',
            name: 'Abstract Canvas Print',
            price: 3500,
            desc: '24x36 inch, framed canvas',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'wa2',
            name: 'Metal Wall Sculpture',
            price: 8500,
            desc: 'Handcrafted metal, 3D design',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'wa3',
            name: 'Wooden Wall Panel',
            price: 6200,
            desc: 'Laser cut wood, geometric',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'New'
         },
         {
            id: 'wa4',
            name: 'Photo Wall Collage',
            price: 1800,
            desc: 'Set of 6 frames, mixed sizes',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   curtains: {
      title: 'Curtains',
      type: 'regular',
      items: [{
            id: 'cu1',
            name: 'Velvet Blackout Curtains',
            price: 4200,
            desc: 'Per pair, 7ft, blackout lining',
            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'cu2',
            name: 'Sheer Linen Curtains',
            price: 2800,
            desc: 'Per pair, light filtering',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'cu3',
            name: 'Printed Cotton Curtains',
            price: 1800,
            desc: 'Floral print, per pair',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'cu4',
            name: 'Motorized Curtains',
            price: 18000,
            desc: 'Smart home, remote control',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Smart'
         }
      ]
   },
   lighting: {
      title: 'Lighting',
      type: 'regular',
      items: [{
            id: 'li1',
            name: 'Crystal Chandelier',
            price: 28000,
            desc: 'K9 crystal, 12-light',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'li2',
            name: 'Modern Pendant Light',
            price: 4500,
            desc: 'Matte black, adjustable height',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'li3',
            name: 'LED Strip Lights',
            price: 1200,
            desc: '5 meter roll, RGB, remote',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'li4',
            name: 'Floor Lamp',
            price: 6800,
            desc: 'Arc design, warm white LED',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Bestseller'
         }
      ]
   },
   rugs: {
      title: 'Rugs',
      type: 'regular',
      items: [{
            id: 'ru1',
            name: 'Persian Wool Rug',
            price: 15500,
            desc: '5x7 ft, hand-knotted wool',
            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'ru2',
            name: 'Modern Geometric Rug',
            price: 6200,
            desc: '4x6 ft, cotton blend',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'ru3',
            name: 'Jute Natural Rug',
            price: 3800,
            desc: '5x7 ft, eco-friendly jute',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'Eco'
         },
         {
            id: 'ru4',
            name: 'Shaggy Fluffy Rug',
            price: 4500,
            desc: '4x6 ft, ultra-soft microfiber',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Cozy'
         }
      ]
   },

   // ── COOL DRINKS ──
   cola: {
      title: 'Cola Drinks',
      type: 'regular',
      items: [{
            id: 'co1',
            name: 'Coca-Cola 2L',
            price: 95,
            desc: 'Classic cola, chilled & fresh',
            img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'co2',
            name: 'Pepsi 2L',
            price: 90,
            desc: 'Bold cola flavour, ice cold',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'co3',
            name: 'Thums Up 2L',
            price: 88,
            desc: 'Strong cola taste, Indian favourite',
            img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80',
            badge: 'Desi Favourite'
         },
         {
            id: 'co4',
            name: 'Diet Coke 500ml',
            price: 40,
            desc: 'Zero sugar, light & refreshing',
            img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
            badge: 'Diet'
         }
      ]
   },
   juice: {
      title: 'Fruit Juices',
      type: 'regular',
      items: [{
            id: 'ju1',
            name: 'Tropicana Orange 1L',
            price: 120,
            desc: '100% orange juice, no added sugar',
            img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
            badge: 'Healthy'
         },
         {
            id: 'ju2',
            name: 'Real Mango Juice 1L',
            price: 110,
            desc: 'Alphonso mango blend, thick & rich',
            img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'ju3',
            name: 'Maaza Mango 600ml',
            price: 45,
            desc: 'Chilled mango drink, smooth',
            img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'ju4',
            name: 'Mixed Fruit Juice 1L',
            price: 130,
            desc: 'Apple, guava, pineapple blend',
            img: 'https://images.unsplash.com/photo-1563746924237-f81d5a53d848?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   energyDrink: {
      title: 'Energy Drinks',
      type: 'regular',
      items: [{
            id: 'en1',
            name: 'Red Bull 250ml',
            price: 125,
            desc: 'Original energy drink, boost focus',
            img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'en2',
            name: 'Monster Energy 500ml',
            price: 160,
            desc: 'Extra strong, original flavour',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Strong'
         },
         {
            id: 'en3',
            name: 'Sting Energy 250ml',
            price: 30,
            desc: 'Affordable energy, berry blast',
            img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'en4',
            name: 'Gatorade 500ml',
            price: 99,
            desc: 'Sports drink, electrolyte replenish',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Sports'
         }
      ]
   },
   sodaWater: {
      title: 'Soda & Water',
      type: 'regular',
      items: [{
            id: 'sw1',
            name: 'Bisleri Water 1L',
            price: 20,
            desc: 'Pure packaged drinking water',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Essential'
         },
         {
            id: 'sw2',
            name: 'Limca Soda 500ml',
            price: 35,
            desc: 'Lemon-lime soda, refreshing',
            img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80',
            badge: 'Refreshing'
         },
         {
            id: 'sw3',
            name: 'Perrier Sparkling 750ml',
            price: 180,
            desc: 'Premium sparkling mineral water',
            img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'sw4',
            name: 'Sprite 2L',
            price: 90,
            desc: 'Lemon-lime fizz, ice cold',
            img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
            badge: 'Popular'
         }
      ]
   },

   // ── MILK ──
   milk: {
      title: 'Fresh Milk',
      type: 'milk',
      items: [{
            id: 'mk1',
            name: 'Amul Full Cream Milk',
            pricePerLitre: 68,
            desc: 'Rich & creamy, full fat',
            img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'mk2',
            name: 'Nandini Toned Milk',
            pricePerLitre: 54,
            desc: 'Low fat, light & fresh',
            img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
            badge: 'Healthy'
         },
         {
            id: 'mk3',
            name: 'Mother Dairy Cow Milk',
            pricePerLitre: 62,
            desc: 'Pure cow milk, pasteurized',
            img: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=400&q=80',
            badge: 'Pure'
         },
         {
            id: 'mk4',
            name: 'Organic A2 Milk',
            pricePerLitre: 95,
            desc: 'Desi cow, naturally organic',
            img: 'https://images.unsplash.com/photo-1571118179534-2dec6b6c0b10?w=400&q=80',
            badge: 'Organic'
         }
      ]
   }
};

// ── QUANTITY TRACKER for product page ──
const pageQty = {};

// ── SHOW PRODUCTS ──
function showProducts(category) {
   const data = products[category];
   if (!data) return;

   document.getElementById('heroSection').classList.add('hidden');
   document.getElementById('productsSection').classList.remove('hidden');
   document.getElementById('productTitle').textContent = data.title;

   const grid = document.getElementById('productsGrid');
   grid.innerHTML = '';

   data.items.forEach(item => {
      pageQty[item.id] = pageQty[item.id] || 1;
      const isMilk = data.type === 'milk';
      const displayPrice = isMilk ?
         `₹${item.pricePerLitre}/litre` :
         `₹${item.price.toLocaleString('en-IN')}`;

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
<img src="${item.img}" alt="${item.name}" loading="lazy"/>
<div class="product-info">
<span class="badge">${item.badge}</span>
<div class="product-name">${item.name}</div>
<div class="product-desc">${item.desc}</div>

${isMilk ? `
<div class="litre-selector">
<label>Select Litres:</label>
<select class="litre-select" id="litre_${item.id}" onchange="updateMilkPrice('${item.id}', ${item.pricePerLitre})">
<option value="0.5">0.5 Litre — ₹${Math.round(item.pricePerLitre * 0.5)}</option>
<option value="1" selected>1 Litre — ₹${item.pricePerLitre}</option>
<option value="2">2 Litres — ₹${item.pricePerLitre * 2}</option>
<option value="3">3 Litres — ₹${item.pricePerLitre * 3}</option>
<option value="5">5 Litres — ₹${item.pricePerLitre * 5}</option>
</select>
</div>` : `
<div class="qty-controls">
<button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
<span class="qty-display" id="qty_${item.id}">1</span>
<button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
</div>`}

<div class="product-footer">
<span class="product-price" id="price_${item.id}">${displayPrice}</span>
<button class="btn-cart" onclick="addToCart('${item.id}', '${category}')">
🛒 Add to Cart
</button>
</div>
</div>
`;
      grid.appendChild(card);
   });

   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

// ── CHANGE QUANTITY ──
function changeQty(id, delta) {
   pageQty[id] = Math.max(1, (pageQty[id] || 1) + delta);
   document.getElementById('qty_' + id).textContent = pageQty[id];
}

// ── UPDATE MILK PRICE DISPLAY ──
function updateMilkPrice(id, pricePerLitre) {
   const litres = parseFloat(document.getElementById('litre_' + id).value);
   const total = Math.round(pricePerLitre * litres);
   document.getElementById('price_' + id).textContent = `₹${total}`;
}

// ── ADD TO CART ──
function addToCart(itemId, category) {
   const data = products[category];
   const item = data.items.find(i => i.id === itemId);
   if (!item) return;

   const isMilk = data.type === 'milk';
   let qty, unitPrice, label;

   if (isMilk) {
      const litreEl = document.getElementById('litre_' + itemId);
      const litres = parseFloat(litreEl ? litreEl.value : 1);
      unitPrice = Math.round(item.pricePerLitre * litres);
      qty = 1;
      label = `${item.name} (${litres}L)`;
   } else {
      qty = pageQty[itemId] || 1;
      unitPrice = item.price;
      label = item.name;
   }

   // Check if already in cart
   const existing = cart.find(c => c.id === itemId + (isMilk ? '_' + document.getElementById('litre_' + itemId)?.value : ''));
   if (existing) {
      existing.qty += qty;
   } else {
      cart.push({
         id: itemId + (isMilk ? '_' + (document.getElementById('litre_' + itemId)?.value || '1') : ''),
         name: label,
         price: unitPrice,
         qty: qty,
         img: item.img
      });
   }

   updateCartUI();
   showToast(`✅ "${label}" added to cart!`);
}

// ── UPDATE CART UI ──
function updateCartUI() {
   const totalItems = cart.reduce((sum, c) => sum + c.qty, 0);
   const totalCost = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

   document.getElementById('cartBadge').textContent = totalItems;
   document.getElementById('cartTotalItems').textContent = totalItems;
   document.getElementById('cartTotalCost').textContent = '₹' + totalCost.toLocaleString('en-IN');

   const cartItemsEl = document.getElementById('cartItems');
   if (cart.length === 0) {
      cartItemsEl.innerHTML = '<div class="cart-empty">🛒 Your cart is empty</div>';
      return;
   }

   cartItemsEl.innerHTML = cart.map(c => `
<div class="cart-item">
<img src="${c.img}" alt="${c.name}"/>
<div class="cart-item-info">
<div class="cart-item-name">${c.name}</div>
<div class="cart-item-price">₹${c.price.toLocaleString('en-IN')} each</div>
<div class="cart-item-qty">
<button class="cart-qty-btn" onclick="changeCartQty('${c.id}', -1)">−</button>
<span style="font-size:0.88rem;font-weight:bold">${c.qty}</span>
<button class="cart-qty-btn" onclick="changeCartQty('${c.id}', 1)">+</button>
<span style="font-size:0.82rem;color:#888;margin-left:4px">
= ₹${(c.price * c.qty).toLocaleString('en-IN')}
</span>
</div>
</div>
<button class="cart-item-remove" onclick="removeFromCart('${c.id}')">🗑</button>
</div>
`).join('');
}

// ── CHANGE QTY IN CART ──
function changeCartQty(id, delta) {
   const item = cart.find(c => c.id === id);
   if (!item) return;
   item.qty = Math.max(1, item.qty + delta);
   updateCartUI();
}

// ── REMOVE FROM CART ──
function removeFromCart(id) {
   cart = cart.filter(c => c.id !== id);
   updateCartUI();
}

// ── SHOW / CLOSE CART ──
function showCart() {
   document.getElementById('cartSidebar').classList.remove('hidden');
   document.getElementById('cartOverlay').classList.remove('hidden');
   updateCartUI();
}

function closeCart() {
   document.getElementById('cartSidebar').classList.add('hidden');
   document.getElementById('cartOverlay').classList.add('hidden');
}

// ── CHECKOUT ──
function checkout() {
   if (cart.length === 0) {
      showToast('⚠️ Your cart is empty!');
      return;
   }
   const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
   alert(`✅ Order placed!\nTotal: ₹${total.toLocaleString('en-IN')}\nThank you for shopping at MyStore!`);
   cart = [];
   updateCartUI();
   closeCart();
}

// ── CLEAR CART ──
function clearCart() {
   cart = [];
   updateCartUI();
}

// ── TOAST ──
function showToast(msg) {
   const toast = document.getElementById('toast');
   toast.textContent = msg;
   toast.classList.remove('hidden');
   setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ── GO HOME ──
function goHome() {
   document.getElementById('heroSection').classList.remove('hidden');
   document.getElementById('productsSection').classList.add('hidden');
}

// ── AUTH ──
function signUp() {
   const name = document.getElementById('signupName').value.trim();
   const email = document.getElementById('signupEmail').value.trim();
   const password = document.getElementById('signupPassword').value;
   const confirm = document.getElementById('signupConfirm').value;
   if (!name || !email || !password || !confirm) {
      alert('Please fill in all fields.');
      return;
   }
   if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
   }
   if (password !== confirm) {
      alert('Passwords do not match.');
      return;
   }
   localStorage.setItem('registeredUser', JSON.stringify({
      name,
      email,
      password
   }));
   alert('Account created! Please login.');
   window.location.href = 'login.html';
}

function login() {
   const email = document.getElementById('loginEmail').value.trim();
   const password = document.getElementById('loginPassword').value;
   const errorMsg = document.getElementById('loginError');
   const savedUser = JSON.parse(localStorage.getItem('registeredUser'));
   if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      errorMsg.classList.remove('hidden');
      return;
   }
   errorMsg.classList.add('hidden');
   localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
   window.location.href = 'home.html';
}

function checkLogin() {
   const user = JSON.parse(localStorage.getItem('loggedInUser'));
   if (!user) {
      window.location.href = 'login.html';
      return;
   }
   document.getElementById('welcomeUser').textContent = 'Hi, ' + user.name;
   document.getElementById('heroGreeting').textContent = 'Welcome, ' + user.name + '!';
}

function logout() {
   localStorage.removeItem('loggedInUser');
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

if (document.getElementById('heroGreeting')) {
   checkLogin();
   updateCartUI();
}
