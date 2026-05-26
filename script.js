let cart = [];
const pageQty     = {};
const pageVariant = {}; // itemId -> selected variant index

const products = {
   sofa: {
      title: 'Sofas',
      type: 'regular',
      category: 'Furniture',
      mainCat: 'home',
      items: [{
            id: 'sofa1',
            name: 'Royal Velvet Sofa',
            price: 45999,
            desc: '3-seater, velvet finish',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'sofa2',
            name: 'L-Shape Corner Sofa',
            price: 78500,
            desc: 'Premium fabric, 5-seater',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'New'
         },
         {
            id: 'sofa3',
            name: 'Leather Recliner Sofa',
            price: 95000,
            desc: 'Genuine leather, reclining',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'sofa4',
            name: 'Compact 2-Seater',
            price: 22999,
            desc: 'Space-saving microfiber',
            img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   diningTable: {
      title: 'Dining Tables',
      type: 'regular',
      category: 'Furniture',
      mainCat: 'home',
      items: [{
            id: 'dt1',
            name: 'Teak Wood Dining Set',
            price: 38500,
            desc: '6-seater, solid teak wood',
            img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'dt2',
            name: 'Glass Top Table',
            price: 25999,
            desc: '4-seater, tempered glass',
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
            desc: '4-seater foldable',
            img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   wardrobe: {
      title: 'Wardrobes',
      type: 'regular',
      category: 'Furniture',
      mainCat: 'home',
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
            desc: 'Solid sheesham wood',
            img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'w3',
            name: 'Walk-in Wardrobe Unit',
            price: 120000,
            desc: 'Modular, customizable',
            img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80',
            badge: 'Luxury'
         },
         {
            id: 'w4',
            name: 'Compact 2-Door',
            price: 18500,
            desc: '2-door, laminate finish',
            img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   bedFrame: {
      title: 'Bed Frames',
      type: 'regular',
      category: 'Furniture',
      mainCat: 'home',
      items: [{
            id: 'bf1',
            name: 'King Size Wooden Bed',
            price: 35000,
            desc: 'Solid wood, king size',
            img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'bf2',
            name: 'Upholstered Bed',
            price: 48000,
            desc: 'Velvet headboard, queen',
            img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'bf3',
            name: 'Metal Platform Bed',
            price: 15999,
            desc: 'Modern metal frame',
            img: 'https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'bf4',
            name: 'Poster Bed',
            price: 72000,
            desc: 'Classic 4-poster teak',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },
   whiteMarble: {
      title: 'White Marble',
      type: 'regular',
      category: 'Marbles',
      mainCat: 'home',
      items: [{
            id: 'wm1',
            name: 'Statuario White Marble',
            price: 850,
            desc: 'Per sq ft — Italian grade',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'wm2',
            name: 'Makrana White Marble',
            price: 320,
            desc: 'Per sq ft — Indian origin',
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
      category: 'Marbles',
      mainCat: 'home',
      items: [{
            id: 'bm1',
            name: 'Nero Marquina',
            price: 1100,
            desc: 'Per sq ft — White veins',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'bm2',
            name: 'Black Galaxy Marble',
            price: 750,
            desc: 'Per sq ft — Gold speckles',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'bm3',
            name: 'Absolute Black Marble',
            price: 500,
            desc: 'Per sq ft — Mirror polish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'bm4',
            name: 'Black Forest Marble',
            price: 650,
            desc: 'Per sq ft — Gold veins',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   italianMarble: {
      title: 'Italian Marble',
      type: 'regular',
      category: 'Marbles',
      mainCat: 'home',
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
            desc: 'Per sq ft — Rich brown',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'im3',
            name: 'Rosa Perlino',
            price: 1800,
            desc: 'Per sq ft — Pink-rose',
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
      category: 'Marbles',
      mainCat: 'home',
      items: [{
            id: 'gr1',
            name: 'Black Pearl Granite',
            price: 180,
            desc: 'Per sq ft — Silver sparkle',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'gr2',
            name: 'Kashmir White Granite',
            price: 220,
            desc: 'Per sq ft — Grey flecks',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'gr3',
            name: 'Tan Brown Granite',
            price: 160,
            desc: 'Per sq ft — Brown tones',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'gr4',
            name: 'Blue Pearl Granite',
            price: 350,
            desc: 'Per sq ft — Blue shimmer',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },
   hardwood: {
      title: 'Hardwood Flooring',
      type: 'regular',
      category: 'Flooring',
      mainCat: 'home',
      items: [{
            id: 'hw1',
            name: 'Oak Hardwood Floor',
            price: 280,
            desc: 'Per sq ft — Scratch resistant',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'hw2',
            name: 'Teak Wood Flooring',
            price: 420,
            desc: 'Per sq ft — Water resistant',
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
            desc: 'Per sq ft — Rustic look',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   vinyl: {
      title: 'Vinyl Flooring',
      type: 'regular',
      category: 'Flooring',
      mainCat: 'home',
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
            desc: 'Per sq ft — Marble-like',
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
      category: 'Flooring',
      mainCat: 'home',
      items: [{
            id: 'ct1',
            name: 'Glossy White Tiles',
            price: 55,
            desc: 'Per sq ft — 60x60 cm',
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
      category: 'Flooring',
      mainCat: 'home',
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
      category: 'Decor',
      mainCat: 'home',
      items: [{
            id: 'wa1',
            name: 'Abstract Canvas Print',
            price: 3500,
            desc: '24x36 inch, framed',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'wa2',
            name: 'Metal Wall Sculpture',
            price: 8500,
            desc: 'Handcrafted 3D design',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'wa3',
            name: 'Wooden Wall Panel',
            price: 6200,
            desc: 'Laser cut geometric',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'New'
         },
         {
            id: 'wa4',
            name: 'Photo Wall Collage',
            price: 1800,
            desc: 'Set of 6 frames',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },
   curtains: {
      title: 'Curtains',
      type: 'regular',
      category: 'Decor',
      mainCat: 'home',
      items: [{
            id: 'cu1',
            name: 'Velvet Blackout Curtains',
            price: 4200,
            desc: 'Per pair, 7ft',
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
            desc: 'Smart home remote',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Smart'
         }
      ]
   },
   lighting: {
      title: 'Lighting',
      type: 'regular',
      category: 'Decor',
      mainCat: 'home',
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
            desc: 'Matte black, adjustable',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'li3',
            name: 'LED Strip Lights',
            price: 1200,
            desc: '5 meter, RGB remote',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'li4',
            name: 'Floor Lamp',
            price: 6800,
            desc: 'Arc design, warm LED',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Bestseller'
         }
      ]
   },
   rugs: {
      title: 'Rugs',
      type: 'regular',
      category: 'Decor',
      mainCat: 'home',
      items: [{
            id: 'ru1',
            name: 'Persian Wool Rug',
            price: 15500,
            desc: '5x7 ft, hand-knotted',
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
            desc: '5x7 ft, eco-friendly',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'Eco'
         },
         {
            id: 'ru4',
            name: 'Shaggy Fluffy Rug',
            price: 4500,
            desc: '4x6 ft, microfiber',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Cozy'
         }
      ]
   },
   cola: {
      title: 'Cola Drinks',
      type: 'regular',
      category: 'Cool Drinks',
      mainCat: 'dailyneeds',
      items: [{
            id: 'co1',
            name: 'Coca-Cola 2L',
            price: 95,
            desc: 'Classic cola, chilled',
            img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'co2',
            name: 'Pepsi 2L',
            price: 90,
            desc: 'Bold cola flavour',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'co3',
            name: 'Thums Up 2L',
            price: 88,
            desc: 'Strong Indian cola',
            img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80',
            badge: 'Desi Fav'
         },
         {
            id: 'co4',
            name: 'Diet Coke 500ml',
            price: 40,
            desc: 'Zero sugar, light',
            img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
            badge: 'Diet'
         }
      ]
   },
   juice: {
      title: 'Fruit Juices',
      type: 'regular',
      category: 'Cool Drinks',
      mainCat: 'dailyneeds',
      items: [{
            id: 'ju1',
            name: 'Tropicana Orange 1L',
            price: 120,
            desc: '100% orange, no sugar',
            img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
            badge: 'Healthy'
         },
         {
            id: 'ju2',
            name: 'Real Mango Juice 1L',
            price: 110,
            desc: 'Alphonso mango blend',
            img: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'ju3',
            name: 'Maaza Mango 600ml',
            price: 45,
            desc: 'Smooth mango drink',
            img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'ju4',
            name: 'Mixed Fruit Juice 1L',
            price: 130,
            desc: 'Apple, guava blend',
            img: 'https://images.unsplash.com/photo-1563746924237-f81d5a53d848?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   energyDrink: {
      title: 'Energy Drinks',
      type: 'regular',
      category: 'Cool Drinks',
      mainCat: 'dailyneeds',
      items: [{
            id: 'en1',
            name: 'Red Bull 250ml',
            price: 125,
            desc: 'Original energy boost',
            img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'en2',
            name: 'Monster Energy 500ml',
            price: 160,
            desc: 'Extra strong flavour',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Strong'
         },
         {
            id: 'en3',
            name: 'Sting Energy 250ml',
            price: 30,
            desc: 'Berry blast, affordable',
            img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'en4',
            name: 'Gatorade 500ml',
            price: 99,
            desc: 'Sports electrolytes',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Sports'
         }
      ]
   },
   sodaWater: {
      title: 'Soda & Water',
      type: 'regular',
      category: 'Cool Drinks',
      mainCat: 'dailyneeds',
      items: [{
            id: 'sw1',
            name: 'Bisleri Water 1L',
            price: 20,
            desc: 'Pure packaged water',
            img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80',
            badge: 'Essential'
         },
         {
            id: 'sw2',
            name: 'Limca Soda 500ml',
            price: 35,
            desc: 'Lemon-lime soda',
            img: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&q=80',
            badge: 'Refreshing'
         },
         {
            id: 'sw3',
            name: 'Perrier Sparkling 750ml',
            price: 180,
            desc: 'Premium sparkling water',
            img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'sw4',
            name: 'Sprite 2L',
            price: 90,
            desc: 'Lemon-lime fizz',
            img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&q=80',
            badge: 'Popular'
         }
      ]
   },
   milk: {
      title: 'Fresh Milk',
      type: 'milk',
      category: 'Milk',
      mainCat: 'dailyneeds',
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
            desc: 'Pure cow milk',
            img: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=400&q=80',
            badge: 'Pure'
         },
         {
            id: 'mk4',
            name: 'Organic A2 Milk',
            pricePerLitre: 95,
            desc: 'Desi cow, organic',
            img: 'https://images.unsplash.com/photo-1571118179534-2dec6b6c0b10?w=400&q=80',
            badge: 'Organic'
         }
      ]
   },
   redBricks: {
      title: 'Red Bricks',
      type: 'regular',
      category: 'Bricks',
      mainCat: 'construction',
      items: [{
            id: 'rb1',
            name: 'Standard Red Brick',
            price: 8,
            desc: 'Per piece — 9x4x3 inch',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'rb2',
            name: 'Wire Cut Red Brick',
            price: 10,
            desc: 'Per piece — Smooth finish',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Quality'
         },
         {
            id: 'rb3',
            name: 'Facing Brick',
            price: 15,
            desc: 'Per piece — Decorative',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'rb4',
            name: 'Fire Brick',
            price: 35,
            desc: 'Per piece — Heat resistant',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Special'
         }
      ]
   },
   flybricks: {
      title: 'Fly Ash Bricks',
      type: 'regular',
      category: 'Bricks',
      mainCat: 'construction',
      items: [{
            id: 'fb1',
            name: 'Standard Fly Ash Brick',
            price: 6,
            desc: 'Per piece — Eco friendly',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Eco'
         },
         {
            id: 'fb2',
            name: 'Hollow Fly Ash Brick',
            price: 9,
            desc: 'Per piece — Light weight',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Lightweight'
         },
         {
            id: 'fb3',
            name: 'AAC Block',
            price: 45,
            desc: 'Per piece — Aerated concrete',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'fb4',
            name: 'Solid Fly Ash Brick',
            price: 7,
            desc: 'Per piece — High strength',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Strong'
         }
      ]
   },
   concreteBricks: {
      title: 'Concrete Blocks',
      type: 'regular',
      category: 'Bricks',
      mainCat: 'construction',
      items: [{
            id: 'cb1',
            name: 'Solid Concrete Block',
            price: 55,
            desc: 'Per piece — 400x200x200',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Heavy Duty'
         },
         {
            id: 'cb2',
            name: 'Hollow Concrete Block',
            price: 40,
            desc: 'Per piece — Lightweight',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'cb3',
            name: 'Paving Block',
            price: 25,
            desc: 'Per piece — Interlocking',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Outdoor'
         },
         {
            id: 'cb4',
            name: 'Kerb Stone Block',
            price: 80,
            desc: 'Per piece — Road edging',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Civil'
         }
      ]
   },
   gardenSoil: {
      title: 'Garden Soil',
      type: 'regular',
      category: 'Soil',
      mainCat: 'agriculture',
      items: [{
            id: 'gs1',
            name: 'Premium Garden Soil',
            price: 350,
            desc: 'Per 10kg bag — Nutrient rich',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'gs2',
            name: 'Black Cotton Soil',
            price: 280,
            desc: 'Per 10kg — Deep black',
            img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&q=80',
            badge: 'Rich'
         },
         {
            id: 'gs3',
            name: 'Loamy Garden Soil',
            price: 320,
            desc: 'Per 10kg — Best for plants',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'gs4',
            name: 'Red Laterite Soil',
            price: 200,
            desc: 'Per 10kg — Tropical soil',
            img: 'https://images.unsplash.com/photo-1569880153113-76161b9c0c5a?w=400&q=80',
            badge: 'Natural'
         }
      ]
   },
   cococpeat: {
      title: 'Coco Peat',
      type: 'regular',
      category: 'Soil',
      mainCat: 'agriculture',
      items: [{
            id: 'cp1',
            name: 'Coco Peat Brick 650g',
            price: 120,
            desc: 'Expands to 8L — Washed',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'cp2',
            name: 'Coco Peat Powder 5kg',
            price: 350,
            desc: 'Fine grade, moisture hold',
            img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&q=80',
            badge: 'Bulk'
         },
         {
            id: 'cp3',
            name: 'Coco Peat Mix 10kg',
            price: 550,
            desc: 'Mixed with perlite',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'cp4',
            name: 'Buffered Coco Peat 5kg',
            price: 420,
            desc: 'pH balanced, EC washed',
            img: 'https://images.unsplash.com/photo-1569880153113-76161b9c0c5a?w=400&q=80',
            badge: 'Pro Grade'
         }
      ]
   },
   fertilizer: {
      title: 'Fertilizer Soil',
      type: 'regular',
      category: 'Soil',
      mainCat: 'agriculture',
      items: [{
            id: 'fs1',
            name: 'Vermicompost 5kg',
            price: 250,
            desc: 'Earthworm compost, organic',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Organic'
         },
         {
            id: 'fs2',
            name: 'NPK Fertilizer 1kg',
            price: 180,
            desc: 'Balanced N-P-K ratio',
            img: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'fs3',
            name: 'Neem Cake Powder 2kg',
            price: 160,
            desc: 'Pest repellent, organic',
            img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
            badge: 'Natural'
         },
         {
            id: 'fs4',
            name: 'Bone Meal Fertilizer 1kg',
            price: 220,
            desc: 'High phosphorus, roots',
            img: 'https://images.unsplash.com/photo-1569880153113-76161b9c0c5a?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },
   toysAnimals: {
      title: '3D Printed Animal Toys',
      type: 'regular',
      category: '3D Toys',
      mainCat: 'entertainment',
      items: [{
            id: 'ta1',
            name: '3D Lion Figurine',
            price: 599,
            desc: 'PLA plastic, 15cm tall',
            img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
            badge: 'Popular'
         },
         {
            id: 'ta2',
            name: '3D Dinosaur Set',
            price: 899,
            desc: 'Set of 5, different species',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Kids Fav'
         },
         {
            id: 'ta3',
            name: '3D Elephant Toy',
            price: 450,
            desc: 'Detailed, 12cm figurine',
            img: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=80',
            badge: 'Cute'
         },
         {
            id: 'ta4',
            name: '3D Ocean Animals Set',
            price: 1099,
            desc: 'Whale, dolphin, shark set',
            img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   toysVehicles: {
      title: '3D Printed Vehicle Toys',
      type: 'regular',
      category: '3D Toys',
      mainCat: 'entertainment',
      items: [{
            id: 'tv1',
            name: '3D Racing Car',
            price: 699,
            desc: 'Detailed body, 18cm',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'tv2',
            name: '3D Rocket Ship',
            price: 799,
            desc: 'Space shuttle design',
            img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
            badge: 'Cool'
         },
         {
            id: 'tv3',
            name: '3D Truck Model',
            price: 549,
            desc: 'Articulated, moving parts',
            img: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=80',
            badge: 'Moving'
         },
         {
            id: 'tv4',
            name: '3D Plane Model',
            price: 650,
            desc: 'Boeing style, 25cm span',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'New'
         }
      ]
   },
   toysCustom: {
      title: '3D Custom Prints',
      type: 'regular',
      category: '3D Toys',
      mainCat: 'entertainment',
      items: [{
            id: 'tc1',
            name: 'Custom Name Tag',
            price: 299,
            desc: 'Any name, keychain size',
            img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
            badge: 'Custom'
         },
         {
            id: 'tc2',
            name: 'Mini Portrait Figurine',
            price: 1499,
            desc: 'Your photo as 3D model',
            img: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=80',
            badge: 'Unique'
         },
         {
            id: 'tc3',
            name: 'Custom Logo Stand',
            price: 899,
            desc: 'Business logo display',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Business'
         },
         {
            id: 'tc4',
            name: 'Custom Phone Stand',
            price: 399,
            desc: 'Personalized design',
            img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80',
            badge: 'Useful'
         }
      ]
   },
   hairClips: {
      title: 'Hair Clips',
      type: 'regular',
      category: 'Fancy Items',
      mainCat: 'clothing',
      items: [{
            id: 'hc1',
            name: 'Pearl Hair Clips Set',
            price: 299,
            desc: 'Set of 6, pearl finish',
            img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80',
            badge: 'Trending'
         },
         {
            id: 'hc2',
            name: 'Butterfly Clips Pack',
            price: 199,
            desc: 'Pack of 10, colourful',
            img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&q=80',
            badge: 'Cute'
         },
         {
            id: 'hc3',
            name: 'Gold Claw Clip',
            price: 349,
            desc: 'Large, matte gold finish',
            img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80',
            badge: 'Premium'
         },
         {
            id: 'hc4',
            name: 'Floral Hair Pins Set',
            price: 249,
            desc: 'Set of 8, enamel flowers',
            img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&q=80',
            badge: 'Girly'
         }
      ]
   },
   earrings: {
      title: 'Earrings',
      type: 'regular',
      category: 'Fancy Items',
      mainCat: 'clothing',
      items: [{
            id: 'er1',
            name: 'Gold Hoop Earrings',
            price: 599,
            desc: 'Gold plated, 3cm hoops',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'er2',
            name: 'Pearl Drop Earrings',
            price: 449,
            desc: 'Freshwater pearl, silver',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Elegant'
         },
         {
            id: 'er3',
            name: 'Jhumka Earrings',
            price: 799,
            desc: 'Traditional Indian style',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Ethnic'
         },
         {
            id: 'er4',
            name: 'Crystal Stud Earrings',
            price: 299,
            desc: 'Cubic zirconia, silver',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Sparkling'
         }
      ]
   },
   bangles: {
      title: 'Bangles',
      type: 'regular',
      category: 'Fancy Items',
      mainCat: 'clothing',
      items: [{
            id: 'bg1',
            name: 'Gold Plated Bangles Set',
            price: 899,
            desc: 'Set of 6, 2.6 size',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'bg2',
            name: 'Glass Bangles 12pc',
            price: 199,
            desc: 'Colourful glass, assorted',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Budget'
         },
         {
            id: 'bg3',
            name: 'Silver Kada Bangle',
            price: 1499,
            desc: 'Pure silver, adjustable',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Silver'
         },
         {
            id: 'bg4',
            name: 'Meenakari Bangle',
            price: 650,
            desc: 'Enamel art, rajasthani',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Ethnic'
         }
      ]
   },
   necklaces: {
      title: 'Necklaces',
      type: 'regular',
      category: 'Fancy Items',
      mainCat: 'clothing',
      items: [{
            id: 'nc1',
            name: 'Gold Chain Necklace',
            price: 1299,
            desc: 'Gold plated, 18 inch',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            id: 'nc2',
            name: 'Kundan Necklace Set',
            price: 1899,
            desc: 'Bridal style, with earrings',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Bridal'
         },
         {
            id: 'nc3',
            name: 'Pearl Strand Necklace',
            price: 999,
            desc: 'Simulated pearls, 3 strand',
            img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
            badge: 'Elegant'
         },
         {
            id: 'nc4',
            name: 'Oxidised Silver Necklace',
            price: 749,
            desc: 'Tribal design, adjustable',
            img: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
            badge: 'Boho'
         }
      ]
   }
   // ── DAILY NEEDS ──
   ,groceries: { title: 'Groceries', type: 'regular', category: 'Groceries', mainCat: 'dailyneeds', items: [
      { id: 'gr1', name: 'Basmati Rice', price: 75, variants: [{label:'1 kg',price:75},{label:'5 kg',price:349},{label:'10 kg',price:680}], desc: 'Long grain, premium quality', img: 'https://placehold.co/400x300/e8f5e9/333?text=Basmati+Rice', badge: 'Popular' },
      { id: 'gr2', name: 'Wheat Flour', price: 45, variants: [{label:'1 kg',price:45},{label:'5 kg',price:199},{label:'10 kg',price:380}], desc: 'Chakki fresh atta', img: 'https://placehold.co/400x300/e8f5e9/333?text=Wheat+Flour', badge: 'Fresh' },
      { id: 'gr3', name: 'Refined Cooking Oil', price: 145, variants: [{label:'1 L',price:145},{label:'2 L',price:280},{label:'5 L',price:680}], desc: 'Sunflower oil, refined', img: 'https://placehold.co/400x300/e8f5e9/333?text=Cooking+Oil', badge: 'Daily Use' },
      { id: 'gr4', name: 'Sugar', price: 55, variants: [{label:'1 kg',price:55},{label:'5 kg',price:250},{label:'10 kg',price:485}], desc: 'White granulated sugar', img: 'https://placehold.co/400x300/e8f5e9/333?text=Sugar', badge: 'Essential' },
      { id: 'gr5', name: 'Toor Dal', price: 129, variants: [{label:'500 g',price:67},{label:'1 kg',price:129},{label:'2 kg',price:250}], desc: 'Split pigeon peas', img: 'https://placehold.co/400x300/e8f5e9/333?text=Toor+Dal', badge: 'Protein' },
      { id: 'gr6', name: 'Tea Leaves', price: 99, variants: [{label:'250 g',price:99},{label:'500 g',price:189},{label:'1 kg',price:369}], desc: 'Assam CTC blend', img: 'https://placehold.co/400x300/e8f5e9/333?text=Tea+Leaves', badge: 'Premium' }
   ]},
   vegetables: { title: 'Vegetables & Fruits', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [
      { id: 'vg1', name: 'Potatoes', price: 30, variants: [{label:'500 g',price:16},{label:'1 kg',price:30},{label:'2 kg',price:58}], desc: 'Farm fresh, washed', img: 'https://placehold.co/400x300/f1f8e9/333?text=Potatoes', badge: 'Fresh' },
      { id: 'vg2', name: 'Tomatoes', price: 40, variants: [{label:'500 g',price:22},{label:'1 kg',price:40},{label:'2 kg',price:76}], desc: 'Ripe, juicy tomatoes', img: 'https://placehold.co/400x300/f1f8e9/333?text=Tomatoes', badge: 'Fresh' },
      { id: 'vg3', name: 'Onions', price: 35, variants: [{label:'500 g',price:19},{label:'1 kg',price:35},{label:'2 kg',price:66}], desc: 'Red onions, farm direct', img: 'https://placehold.co/400x300/f1f8e9/333?text=Onions', badge: 'Essential' },
      { id: 'vg4', name: 'Banana (12 pcs)', price: 60, desc: 'Nendran / Robusta variety', img: 'https://placehold.co/400x300/f1f8e9/333?text=Bananas', badge: 'Daily' },
      { id: 'vg5', name: 'Mixed Vegetables (1 kg)', price: 55, desc: 'Carrot, beans, peas, capsicum', img: 'https://placehold.co/400x300/f1f8e9/333?text=Mixed+Vegetables', badge: 'Combo' },
      { id: 'vg6', name: 'Green Chilli (250 g)', price: 25, desc: 'Spicy farm-fresh chillies', img: 'https://placehold.co/400x300/f1f8e9/333?text=Chilli', badge: 'Hot' }
   ]},
   dairy: { title: 'Dairy & Bakery', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [
      { id: 'db1', name: 'Eggs (12 pcs)', price: 90, desc: 'Farm-fresh country eggs', img: 'https://placehold.co/400x300/fff9c4/333?text=Eggs', badge: 'Fresh' },
      { id: 'db2', name: 'Paneer (200 g)', price: 75, desc: 'Soft fresh cottage cheese', img: 'https://placehold.co/400x300/fff9c4/333?text=Paneer', badge: 'Fresh' },
      { id: 'db3', name: 'Butter (100 g)', price: 55, desc: 'Salted / unsalted butter', img: 'https://placehold.co/400x300/fff9c4/333?text=Butter', badge: 'Creamy' },
      { id: 'db4', name: 'Curd (500 g)', price: 45, desc: 'Thick set natural curd', img: 'https://placehold.co/400x300/fff9c4/333?text=Curd', badge: 'Daily' },
      { id: 'db5', name: 'Bread (loaf)', price: 35, desc: 'Whole wheat sandwich bread', img: 'https://placehold.co/400x300/fff9c4/333?text=Bread', badge: 'Fresh' },
      { id: 'db6', name: 'Cheese Slices (10 pcs)', price: 110, desc: 'Processed cheese, melt-ready', img: 'https://placehold.co/400x300/fff9c4/333?text=Cheese', badge: 'Tasty' }
   ]},
   sweets: { title: 'Sweets & Snacks', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [
      { id: 'sw1', name: 'Gulab Jamun (500 g)', price: 149, desc: 'Soft khoya-based, soaked in syrup', img: 'https://placehold.co/400x300/fce4ec/333?text=Gulab+Jamun', badge: 'Sweet' },
      { id: 'sw2', name: 'Besan Ladoo (250 g)', price: 120, desc: 'Ghee-roasted gram flour balls', img: 'https://placehold.co/400x300/fce4ec/333?text=Ladoo', badge: 'Festive' },
      { id: 'sw3', name: 'Mixture (200 g)', price: 60, desc: 'Crispy namkeen mix', img: 'https://placehold.co/400x300/fce4ec/333?text=Mixture', badge: 'Crispy' },
      { id: 'sw4', name: 'Murukku (200 g)', price: 55, desc: 'Rice flour spiral snack', img: 'https://placehold.co/400x300/fce4ec/333?text=Murukku', badge: 'Crunchy' },
      { id: 'sw5', name: 'Jalebi (250 g)', price: 80, desc: 'Crispy fermented batter, syrup-soaked', img: 'https://placehold.co/400x300/fce4ec/333?text=Jalebi', badge: 'Hot' },
      { id: 'sw6', name: 'Halwa (250 g)', price: 90, desc: 'Sooji/Wheat halwa with ghee', img: 'https://placehold.co/400x300/fce4ec/333?text=Halwa', badge: 'Classic' }
   ]},
   // ── CLOTHING ──
   menswear: { title: "Men's Wear", type: 'regular', category: 'Clothing', mainCat: 'clothing', items: [
      { id: 'mw1', name: 'Formal Shirt', price: 499, desc: 'Cotton blend, full sleeve', img: 'https://placehold.co/400x300/e3f2fd/333?text=Formal+Shirt', badge: 'Office' },
      { id: 'mw2', name: 'Casual T-Shirt', price: 249, desc: 'Round neck, pure cotton', img: 'https://placehold.co/400x300/e3f2fd/333?text=T-Shirt', badge: 'Casual' },
      { id: 'mw3', name: 'Formal Trouser', price: 699, desc: 'Regular fit, polyester cotton', img: 'https://placehold.co/400x300/e3f2fd/333?text=Trouser', badge: 'Formal' },
      { id: 'mw4', name: 'Dhoti (5 m)', price: 350, desc: 'Pure cotton, white/color', img: 'https://placehold.co/400x300/e3f2fd/333?text=Dhoti', badge: 'Traditional' },
      { id: 'mw5', name: 'Kurta Pyjama Set', price: 799, desc: 'Festive cotton kurta set', img: 'https://placehold.co/400x300/e3f2fd/333?text=Kurta', badge: 'Festive' },
      { id: 'mw6', name: 'Lungi', price: 199, desc: 'Checked cotton lungi', img: 'https://placehold.co/400x300/e3f2fd/333?text=Lungi', badge: 'Comfort' }
   ]},
   womenswear: { title: "Women's Wear", type: 'regular', category: 'Clothing', mainCat: 'clothing', items: [
      { id: 'ww1', name: 'Cotton Saree', price: 799, desc: 'Handloom cotton, 5.5 m', img: 'https://placehold.co/400x300/f3e5f5/333?text=Cotton+Saree', badge: 'Daily' },
      { id: 'ww2', name: 'Silk Saree', price: 2999, desc: 'Kanjivaram pure silk', img: 'https://placehold.co/400x300/f3e5f5/333?text=Silk+Saree', badge: 'Premium' },
      { id: 'ww3', name: 'Churidar Set', price: 649, desc: 'Cotton churidar with dupatta', img: 'https://placehold.co/400x300/f3e5f5/333?text=Churidar', badge: 'Trendy' },
      { id: 'ww4', name: 'Salwar Kameez', price: 549, desc: 'Printed cotton, 3-piece', img: 'https://placehold.co/400x300/f3e5f5/333?text=Salwar', badge: 'Casual' },
      { id: 'ww5', name: 'Blouse (stitched)', price: 299, desc: 'Cotton saree blouse, all sizes', img: 'https://placehold.co/400x300/f3e5f5/333?text=Blouse', badge: 'Classic' },
      { id: 'ww6', name: 'Nightgown', price: 349, desc: 'Comfortable maxi nightdress', img: 'https://placehold.co/400x300/f3e5f5/333?text=Nightgown', badge: 'Comfort' }
   ]},
   kidswear: { title: "Kids' Wear", type: 'regular', category: 'Clothing', mainCat: 'clothing', items: [
      { id: 'kw1', name: 'School Uniform Set', price: 449, desc: 'Shirt + trouser/skirt', img: 'https://placehold.co/400x300/e8eaf6/333?text=School+Uniform', badge: 'School' },
      { id: 'kw2', name: 'Kids T-Shirt', price: 149, desc: 'Printed cotton, age 3–12', img: 'https://placehold.co/400x300/e8eaf6/333?text=Kids+T-Shirt', badge: 'Fun' },
      { id: 'kw3', name: 'Frock / Dress', price: 299, desc: 'Floral print cotton frock', img: 'https://placehold.co/400x300/e8eaf6/333?text=Frock', badge: 'Cute' },
      { id: 'kw4', name: 'Shorts & T-Shirt Set', price: 249, desc: 'Summer play set, age 4–10', img: 'https://placehold.co/400x300/e8eaf6/333?text=Shorts+Set', badge: 'Play' },
      { id: 'kw5', name: 'Kids Sweater', price: 349, desc: 'Wool blend, warm & soft', img: 'https://placehold.co/400x300/e8eaf6/333?text=Sweater', badge: 'Winter' },
      { id: 'kw6', name: 'Baby Romper Set', price: 199, desc: 'Soft cotton, 3–18 months', img: 'https://placehold.co/400x300/e8eaf6/333?text=Baby+Romper', badge: 'Infant' }
   ]},
   textiles: { title: 'Textiles & Fabric', type: 'regular', category: 'Clothing', mainCat: 'clothing', items: [
      { id: 'tx1', name: 'Cotton Fabric (1 m)', price: 80, desc: 'Plain weave, 44" wide', img: 'https://placehold.co/400x300/f3e5f5/333?text=Cotton+Fabric', badge: 'Per Metre' },
      { id: 'tx2', name: 'Silk Fabric (1 m)', price: 450, desc: 'Pure silk, lustrous finish', img: 'https://placehold.co/400x300/f3e5f5/333?text=Silk+Fabric', badge: 'Premium' },
      { id: 'tx3', name: 'Polyester Fabric (1 m)', price: 50, desc: 'Wrinkle-resistant, easy wash', img: 'https://placehold.co/400x300/f3e5f5/333?text=Polyester', badge: 'Durable' },
      { id: 'tx4', name: 'Khadi Cloth (1 m)', price: 120, desc: 'Handspun, eco-friendly', img: 'https://placehold.co/400x300/f3e5f5/333?text=Khadi', badge: 'Handmade' }
   ]},
   // ── CONSTRUCTION ──
   cement: { title: 'Cement & Concrete', type: 'regular', category: 'Construction', mainCat: 'construction', items: [
      { id: 'cm1', name: 'OPC 53 Grade Cement (50 kg)', price: 420, desc: 'Ordinary Portland Cement, high strength', img: 'https://placehold.co/400x300/fff3e0/333?text=OPC+Cement', badge: 'Bestseller' },
      { id: 'cm2', name: 'PPC Cement (50 kg)', price: 400, desc: 'Portland Pozzolana Cement', img: 'https://placehold.co/400x300/fff3e0/333?text=PPC+Cement', badge: 'Durable' },
      { id: 'cm3', name: 'White Cement (5 kg)', price: 280, desc: 'For finishing & tile joints', img: 'https://placehold.co/400x300/fff3e0/333?text=White+Cement', badge: 'Finish' },
      { id: 'cm4', name: 'M-Sand (1 bag)', price: 65, desc: 'Manufactured sand for plastering', img: 'https://placehold.co/400x300/fff3e0/333?text=M-Sand', badge: 'Quality' }
   ]},
   paint: { title: 'Paints & Coatings', type: 'regular', category: 'Construction', mainCat: 'construction', items: [
      { id: 'pt1', name: 'Interior Emulsion (1 L)', price: 180, desc: 'Smooth finish, washable', img: 'https://placehold.co/400x300/fff3e0/333?text=Interior+Paint', badge: 'Popular' },
      { id: 'pt2', name: 'Exterior Paint (1 L)', price: 220, desc: 'Weather-resistant, UV protected', img: 'https://placehold.co/400x300/fff3e0/333?text=Exterior+Paint', badge: 'Durable' },
      { id: 'pt3', name: 'Wood Paint / Enamel (1 L)', price: 195, desc: 'For doors, windows & furniture', img: 'https://placehold.co/400x300/fff3e0/333?text=Wood+Paint', badge: 'Glossy' },
      { id: 'pt4', name: 'Primer (1 L)', price: 140, desc: 'Water-based wall primer', img: 'https://placehold.co/400x300/fff3e0/333?text=Primer', badge: 'Base Coat' },
      { id: 'pt5', name: 'Waterproofing Coat (1 L)', price: 280, desc: 'Terrace & bathroom waterproofing', img: 'https://placehold.co/400x300/fff3e0/333?text=Waterproofing', badge: 'Protect' }
   ]},
   plumbing: { title: 'Pipes & Plumbing', type: 'regular', category: 'Construction', mainCat: 'construction', items: [
      { id: 'pl1', name: 'PVC Pipe 4" (3 m)', price: 320, desc: 'For drainage & sewage', img: 'https://placehold.co/400x300/fff3e0/333?text=PVC+Pipe', badge: 'Heavy Duty' },
      { id: 'pl2', name: 'CPVC Hot Water Pipe (3 m)', price: 480, desc: 'For hot water plumbing', img: 'https://placehold.co/400x300/fff3e0/333?text=CPVC+Pipe', badge: 'Temp Resistant' },
      { id: 'pl3', name: 'Bathroom Tap (single)', price: 350, desc: 'Chrome-plated brass tap', img: 'https://placehold.co/400x300/fff3e0/333?text=Bathroom+Tap', badge: 'Quality' },
      { id: 'pl4', name: 'Overhead Water Tank (500 L)', price: 2200, desc: 'Sintex/ISI marked, triple layer', img: 'https://placehold.co/400x300/fff3e0/333?text=Water+Tank', badge: 'ISI Mark' },
      { id: 'pl5', name: 'Kitchen Sink (single bowl)', price: 1800, desc: 'Stainless steel, 304 grade', img: 'https://placehold.co/400x300/fff3e0/333?text=Kitchen+Sink', badge: 'Steel' }
   ]},
   doors: { title: 'Doors & Windows', type: 'regular', category: 'Construction', mainCat: 'construction', items: [
      { id: 'dr1', name: 'Teak Wood Door', price: 8500, desc: 'Solid teak, panelled design', img: 'https://placehold.co/400x300/fff3e0/333?text=Teak+Door', badge: 'Premium' },
      { id: 'dr2', name: 'Steel Security Door', price: 6500, desc: 'Double-sheet steel with grille', img: 'https://placehold.co/400x300/fff3e0/333?text=Steel+Door', badge: 'Security' },
      { id: 'dr3', name: 'UPVC Window (3×4 ft)', price: 4500, desc: 'Weatherproof, double glass', img: 'https://placehold.co/400x300/fff3e0/333?text=UPVC+Window', badge: 'Weatherproof' },
      { id: 'dr4', name: 'Flush Door (7×3 ft)', price: 2800, desc: 'HDF core, smooth finish', img: 'https://placehold.co/400x300/fff3e0/333?text=Flush+Door', badge: 'Interior' }
   ]},
   electricals: { title: 'Electrical Supplies', type: 'regular', category: 'Construction', mainCat: 'construction', items: [
      { id: 'el1', name: 'Copper Wire 1.5mm (90 m)', price: 1350, desc: 'ISI certified, FR insulation', img: 'https://placehold.co/400x300/fff3e0/333?text=Copper+Wire', badge: 'ISI Mark' },
      { id: 'el2', name: 'MCB Circuit Breaker', price: 180, desc: '16A / 32A single-pole MCB', img: 'https://placehold.co/400x300/fff3e0/333?text=MCB', badge: 'Safety' },
      { id: 'el3', name: 'Switchboard with Sockets', price: 350, desc: '6-module modular board', img: 'https://placehold.co/400x300/fff3e0/333?text=Switchboard', badge: 'Modular' },
      { id: 'el4', name: 'Concealed Conduit Pipe (3 m)', price: 45, desc: 'PVC conduit for wiring', img: 'https://placehold.co/400x300/fff3e0/333?text=Conduit', badge: 'Essential' }
   ]},
   // ── AGRICULTURE ──
   seeds: { title: 'Seeds & Saplings', type: 'regular', category: 'Agriculture', mainCat: 'agriculture', items: [
      { id: 'sd1', name: 'Tomato Seeds (10 g)', price: 60, desc: 'Hybrid F1, high-yield variety', img: 'https://placehold.co/400x300/e8f5e9/333?text=Tomato+Seeds', badge: 'Hybrid' },
      { id: 'sd2', name: 'Chilli Seeds (5 g)', price: 55, desc: 'Hot variety, disease resistant', img: 'https://placehold.co/400x300/e8f5e9/333?text=Chilli+Seeds', badge: 'Hot' },
      { id: 'sd3', name: 'Paddy Seeds (1 kg)', price: 85, desc: 'Improved variety, high yielding', img: 'https://placehold.co/400x300/e8f5e9/333?text=Paddy+Seeds', badge: 'High Yield' },
      { id: 'sd4', name: 'Coconut Sapling', price: 150, desc: 'West Coast Tall, 1-year-old', img: 'https://placehold.co/400x300/e8f5e9/333?text=Coconut+Sapling', badge: 'Local' },
      { id: 'sd5', name: 'Vegetable Seed Kit', price: 199, desc: '10 varieties — brinjal, beans, spinach…', img: 'https://placehold.co/400x300/e8f5e9/333?text=Seed+Kit', badge: 'Combo' }
   ]},
   farmtools: { title: 'Farming Tools', type: 'regular', category: 'Agriculture', mainCat: 'agriculture', items: [
      { id: 'ft1', name: 'Iron Spade', price: 320, desc: 'Long handle, heavy-duty', img: 'https://placehold.co/400x300/e8f5e9/333?text=Spade', badge: 'Heavy Duty' },
      { id: 'ft2', name: 'Sickle / Koita', price: 180, desc: 'Carbon steel blade, wood handle', img: 'https://placehold.co/400x300/e8f5e9/333?text=Sickle', badge: 'Sharp' },
      { id: 'ft3', name: 'Garden Hoe', price: 250, desc: 'For weeding & soil loosening', img: 'https://placehold.co/400x300/e8f5e9/333?text=Garden+Hoe', badge: 'Tool' },
      { id: 'ft4', name: 'Knapsack Sprayer (16 L)', price: 1200, desc: 'Manual pump, adjustable nozzle', img: 'https://placehold.co/400x300/e8f5e9/333?text=Sprayer', badge: 'Durable' },
      { id: 'ft5', name: 'Watering Can (10 L)', price: 280, desc: 'Galvanised steel with rose nozzle', img: 'https://placehold.co/400x300/e8f5e9/333?text=Watering+Can', badge: 'Garden' }
   ]},
   irrigation: { title: 'Irrigation Equipment', type: 'regular', category: 'Agriculture', mainCat: 'agriculture', items: [
      { id: 'ir1', name: 'Drip Irrigation Kit', price: 2500, desc: 'Covers 100 sq m, complete set', img: 'https://placehold.co/400x300/e8f5e9/333?text=Drip+Kit', badge: 'Water Saving' },
      { id: 'ir2', name: 'Sprinkler Set (4 heads)', price: 850, desc: 'Garden lawn sprinkler system', img: 'https://placehold.co/400x300/e8f5e9/333?text=Sprinkler', badge: 'Efficient' },
      { id: 'ir3', name: 'Water Pump 0.5 HP', price: 3200, desc: 'Mono-block pump for borewell', img: 'https://placehold.co/400x300/e8f5e9/333?text=Water+Pump', badge: 'Powerful' },
      { id: 'ir4', name: 'PVC Suction Pipe (3 m)', price: 220, desc: 'Flexible, for pump connection', img: 'https://placehold.co/400x300/e8f5e9/333?text=Suction+Pipe', badge: 'Flexible' }
   ]},
   // ── KITCHEN & HOUSEHOLD ──
   utensils: { title: 'Utensils & Cookware', type: 'regular', category: 'Kitchen', mainCat: 'kitchen', items: [
      { id: 'ut1', name: 'Pressure Cooker (5 L)', price: 1299, desc: 'Aluminium, ISI certified', img: 'https://placehold.co/400x300/fce4ec/333?text=Pressure+Cooker', badge: 'Bestseller' },
      { id: 'ut2', name: 'Iron Kadai (30 cm)', price: 599, desc: 'Cast iron, seasoned, deep fry', img: 'https://placehold.co/400x300/fce4ec/333?text=Iron+Kadai', badge: 'Cast Iron' },
      { id: 'ut3', name: 'SS Vessels Set (5 pcs)', price: 899, desc: 'Stainless steel containers', img: 'https://placehold.co/400x300/fce4ec/333?text=SS+Vessels', badge: 'Set' },
      { id: 'ut4', name: 'Non-Stick Pan (26 cm)', price: 749, desc: 'PFOA-free coating, induction safe', img: 'https://placehold.co/400x300/fce4ec/333?text=Non-Stick+Pan', badge: 'Healthy' },
      { id: 'ut5', name: 'Idli Maker (4-plate)', price: 499, desc: 'Stainless steel, 16 idli capacity', img: 'https://placehold.co/400x300/fce4ec/333?text=Idli+Maker', badge: 'Traditional' },
      { id: 'ut6', name: 'Tawa (30 cm)', price: 349, desc: 'Iron tawa for chapathi & dosa', img: 'https://placehold.co/400x300/fce4ec/333?text=Tawa', badge: 'Classic' }
   ]},
   plastic: { title: 'Plastic & Steel Items', type: 'regular', category: 'Kitchen', mainCat: 'kitchen', items: [
      { id: 'pk1', name: 'Water Bucket (20 L)', price: 149, desc: 'Heavy-duty plastic, with lid', img: 'https://placehold.co/400x300/e3f2fd/333?text=Bucket', badge: 'Durable' },
      { id: 'pk2', name: 'Storage Container Set (6 pcs)', price: 399, desc: 'Airtight, BPA-free plastic', img: 'https://placehold.co/400x300/e3f2fd/333?text=Containers', badge: 'Airtight' },
      { id: 'pk3', name: 'Plastic Shelf (3-tier)', price: 599, desc: 'Modular, freestanding shelf', img: 'https://placehold.co/400x300/e3f2fd/333?text=Plastic+Shelf', badge: 'Organiser' },
      { id: 'pk4', name: 'Dustbin 10 L', price: 199, desc: 'With lid, swing-top design', img: 'https://placehold.co/400x300/e3f2fd/333?text=Dustbin', badge: 'Hygiene' },
      { id: 'pk5', name: 'SS Water Bottle (1 L)', price: 299, desc: 'Insulated, keeps cold 12 hrs', img: 'https://placehold.co/400x300/e3f2fd/333?text=Water+Bottle', badge: 'Insulated' }
   ]},
   cleaning: { title: 'Cleaning Supplies', type: 'regular', category: 'Kitchen', mainCat: 'kitchen', items: [
      { id: 'cl1', name: 'Coconut Broom', price: 80, desc: 'Natural fiber, long handle', img: 'https://placehold.co/400x300/efebe9/333?text=Broom', badge: 'Natural' },
      { id: 'cl2', name: 'Floor Mop Set', price: 299, desc: 'Spin mop with bucket', img: 'https://placehold.co/400x300/efebe9/333?text=Mop+Set', badge: 'No-Bend' },
      { id: 'cl3', name: 'Phenyl Floor Cleaner (1 L)', price: 89, desc: 'Disinfectant, pine fragrance', img: 'https://placehold.co/400x300/efebe9/333?text=Floor+Cleaner', badge: 'Disinfectant' },
      { id: 'cl4', name: 'Dish Wash Bar', price: 45, desc: 'Lemon-scented, cuts grease', img: 'https://placehold.co/400x300/efebe9/333?text=Dish+Wash', badge: 'Lemon' },
      { id: 'cl5', name: 'Scrub Pad (6 pcs)', price: 60, desc: 'Steel + sponge dual pad', img: 'https://placehold.co/400x300/efebe9/333?text=Scrub+Pad', badge: 'Pack' }
   ]},
   // ── ELECTRONICS ──
   mobile: { title: 'Mobile & Accessories', type: 'regular', category: 'Electronics', mainCat: 'electronics', items: [
      { id: 'mb1', name: 'Budget Smartphone (4G)', price: 7999, desc: '4GB RAM, 64GB storage, dual SIM', img: 'https://placehold.co/400x300/e8eaf6/333?text=Smartphone', badge: 'Value' },
      { id: 'mb2', name: 'Feature Phone', price: 1299, desc: 'Keypad phone, long battery', img: 'https://placehold.co/400x300/e8eaf6/333?text=Feature+Phone', badge: 'Basic' },
      { id: 'mb3', name: 'Mobile Back Cover', price: 149, desc: 'Silicon/TPU, all models', img: 'https://placehold.co/400x300/e8eaf6/333?text=Mobile+Cover', badge: 'Protect' },
      { id: 'mb4', name: 'USB Charger 20W', price: 349, desc: 'Fast charging, Type-C', img: 'https://placehold.co/400x300/e8eaf6/333?text=Charger', badge: 'Fast Charge' },
      { id: 'mb5', name: 'Wired Earphones', price: 249, desc: 'Bass boost, in-ear, with mic', img: 'https://placehold.co/400x300/e8eaf6/333?text=Earphones', badge: 'Bass' },
      { id: 'mb6', name: 'Powerbank 10000 mAh', price: 899, desc: 'Dual USB, LED indicator', img: 'https://placehold.co/400x300/e8eaf6/333?text=Powerbank', badge: '10000mAh' }
   ]},
   appliances: { title: 'Home Appliances', type: 'regular', category: 'Electronics', mainCat: 'electronics', items: [
      { id: 'ap1', name: 'Ceiling Fan (48")', price: 1899, desc: '3-blade, BEE 5-star rated', img: 'https://placehold.co/400x300/e8eaf6/333?text=Ceiling+Fan', badge: 'Energy Star' },
      { id: 'ap2', name: 'Table Fan (12")', price: 999, desc: '3-speed, 360° rotation', img: 'https://placehold.co/400x300/e8eaf6/333?text=Table+Fan', badge: 'Compact' },
      { id: 'ap3', name: 'Mixer Grinder (500 W)', price: 2499, desc: '3 jars, stainless steel blade', img: 'https://placehold.co/400x300/e8eaf6/333?text=Mixer+Grinder', badge: 'Powerful' },
      { id: 'ap4', name: 'Electric Iron (1000 W)', price: 699, desc: 'Steam iron, non-stick soleplate', img: 'https://placehold.co/400x300/e8eaf6/333?text=Electric+Iron', badge: 'Steam' },
      { id: 'ap5', name: 'Electric Kettle (1.5 L)', price: 599, desc: 'Auto shut-off, boil-dry protection', img: 'https://placehold.co/400x300/e8eaf6/333?text=Electric+Kettle', badge: 'Auto Off' }
   ]},
   electrical: { title: 'Electrical Items', type: 'regular', category: 'Electronics', mainCat: 'electronics', items: [
      { id: 'ew1', name: 'LED Bulb 9W', price: 89, desc: 'Cool white, E27 base, 5-year warranty', img: 'https://placehold.co/400x300/e8eaf6/333?text=LED+Bulb', badge: 'Energy Saver' },
      { id: 'ew2', name: 'LED Tube Light 20W (4 ft)', price: 249, desc: 'Bright white, slim design', img: 'https://placehold.co/400x300/e8eaf6/333?text=Tube+Light', badge: 'Bright' },
      { id: 'ew3', name: 'Extension Board (4 plug)', price: 299, desc: '2 m cord, surge protection', img: 'https://placehold.co/400x300/e8eaf6/333?text=Extension+Board', badge: 'Surge Safe' },
      { id: 'ew4', name: 'Voltage Stabilizer (2 kVA)', price: 1799, desc: 'For TV & fridge, auto cut-off', img: 'https://placehold.co/400x300/e8eaf6/333?text=Stabilizer', badge: 'Protection' }
   ]},
   // ── RELIGIOUS ──
   pooja: { title: 'Pooja & Devotional', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [
      { id: 'pj1', name: 'Brass Diya Set (6 pcs)', price: 349, desc: 'Traditional oil lamp set', img: 'https://placehold.co/400x300/fff8e1/333?text=Brass+Diya', badge: 'Auspicious' },
      { id: 'pj2', name: 'Agarbatti (100 sticks)', price: 65, desc: 'Sandalwood & rose fragrance', img: 'https://placehold.co/400x300/fff8e1/333?text=Agarbatti', badge: 'Fragrant' },
      { id: 'pj3', name: 'Camphor Tablets (50 pcs)', price: 45, desc: 'Pure camphor for aarti', img: 'https://placehold.co/400x300/fff8e1/333?text=Camphor', badge: 'Pure' },
      { id: 'pj4', name: 'Ganesha Idol (Brass, 4")', price: 599, desc: 'Handcrafted brass idol', img: 'https://placehold.co/400x300/fff8e1/333?text=Ganesha+Idol', badge: 'Handcrafted' },
      { id: 'pj5', name: 'Pooja Thali Set', price: 449, desc: 'Steel thali with accessories', img: 'https://placehold.co/400x300/fff8e1/333?text=Pooja+Thali', badge: 'Complete' },
      { id: 'pj6', name: 'Kumkum & Vibhuti Pack', price: 55, desc: 'Holy ash + kumkum combo', img: 'https://placehold.co/400x300/fff8e1/333?text=Kumkum+Vibhuti', badge: 'Devotional' }
   ]},
   festival: { title: 'Festival & Occasions', type: 'regular', category: 'Daily Needs', mainCat: 'dailyneeds', items: [
      { id: 'fv1', name: 'LED String Lights (10 m)', price: 249, desc: 'Diwali lights, multi-color', img: 'https://placehold.co/400x300/fff8e1/333?text=String+Lights', badge: 'Festive' },
      { id: 'fv2', name: 'Rangoli Colors (12 shades)', price: 120, desc: 'Bright, non-toxic powder', img: 'https://placehold.co/400x300/fff8e1/333?text=Rangoli+Colors', badge: 'Vibrant' },
      { id: 'fv3', name: 'Flower Garland (2 m)', price: 80, desc: 'Marigold & rose, artificial', img: 'https://placehold.co/400x300/fff8e1/333?text=Garland', badge: 'Decoration' },
      { id: 'fv4', name: 'Floating Diyas (10 pcs)', price: 99, desc: 'Clay diyas for water festival', img: 'https://placehold.co/400x300/fff8e1/333?text=Floating+Diyas', badge: 'Traditional' }
   ]},
   flowers: { title: 'Flowers', type: 'regular', category: 'Daily Needs', mainCat: 'flowers', items: [
      { id: 'fl1', name: 'Jasmine Garland (1 m)', price: 30, desc: 'Fresh mallipoo, fragrant', img: 'https://placehold.co/400x300/f9fbe7/333?text=Jasmine', badge: 'Fresh' },
      { id: 'fl2', name: 'Marigold Garland (2 m)', price: 50, desc: 'Bright saamanthi, ideal for pooja', img: 'https://placehold.co/400x300/fff9c4/333?text=Marigold', badge: 'Pooja' },
      { id: 'fl3', name: 'Rose Bunch (10 stems)', price: 80, desc: 'Mixed colours, long-stemmed', img: 'https://placehold.co/400x300/fce4ec/333?text=Roses', badge: 'Gift' },
      { id: 'fl4', name: 'Lotus Flowers (5 pcs)', price: 60, desc: 'Fresh pink lotus for abhishekam', img: 'https://placehold.co/400x300/fce4ec/333?text=Lotus', badge: 'Sacred' },
      { id: 'fl5', name: 'Chrysanthemum Bunch', price: 40, desc: 'Vennila sevanthi, temple favourite', img: 'https://placehold.co/400x300/fffde7/333?text=Chrysanthemum', badge: 'Temple' },
      { id: 'fl6', name: 'Mixed Flower Basket', price: 150, desc: 'Seasonal mix for home & pooja', img: 'https://placehold.co/400x300/f3e5f5/333?text=Flower+Basket', badge: 'Seasonal' },
      { id: 'fl7', name: 'Tulsi Plants (pot)', price: 35, desc: 'Holy basil, fresh potted plant', img: 'https://placehold.co/400x300/e8f5e9/333?text=Tulsi+Plant', badge: 'Holy' },
      { id: 'fl8', name: 'Banana Leaves (pack of 10)', price: 25, desc: 'Fresh leaves for serving & pooja', img: 'https://placehold.co/400x300/e8f5e9/333?text=Banana+Leaves', badge: 'Natural' }
   ]},
   // ── HEALTH & BEAUTY ──
   medicines: { title: 'Medicines & First Aid', type: 'regular', category: 'Health', mainCat: 'health', items: [
      { id: 'md1', name: 'Paracetamol 500mg (10 tabs)', price: 15, desc: 'Fever & pain relief', img: 'https://placehold.co/400x300/e0f2f1/333?text=Paracetamol', badge: 'OTC' },
      { id: 'md2', name: 'Antacid Tablets (strip)', price: 25, desc: 'For acidity & heartburn', img: 'https://placehold.co/400x300/e0f2f1/333?text=Antacid', badge: 'Relief' },
      { id: 'md3', name: 'Cough Syrup (100 ml)', price: 75, desc: 'Dry & wet cough relief', img: 'https://placehold.co/400x300/e0f2f1/333?text=Cough+Syrup', badge: 'OTC' },
      { id: 'md4', name: 'First Aid Kit', price: 349, desc: 'Band-aid, antiseptic, bandage', img: 'https://placehold.co/400x300/e0f2f1/333?text=First+Aid+Kit', badge: 'Complete' },
      { id: 'md5', name: 'Antiseptic Cream (20 g)', price: 55, desc: 'For cuts, wounds, burns', img: 'https://placehold.co/400x300/e0f2f1/333?text=Antiseptic+Cream', badge: 'Healing' },
      { id: 'md6', name: 'Vitamin C Tablets (30 tabs)', price: 120, desc: '500mg, immunity support', img: 'https://placehold.co/400x300/e0f2f1/333?text=Vitamin+C', badge: 'Immunity' }
   ]},
   personalcare: { title: 'Personal Care', type: 'regular', category: 'Health', mainCat: 'health', items: [
      { id: 'pc1', name: 'Bathing Soap (4 bars)', price: 95, desc: 'Moisturising, aloe vera', img: 'https://placehold.co/400x300/e0f2f1/333?text=Soap', badge: 'Moisturising' },
      { id: 'pc2', name: 'Shampoo (400 ml)', price: 175, desc: 'Anti-dandruff / hair fall control', img: 'https://placehold.co/400x300/e0f2f1/333?text=Shampoo', badge: 'Anti-Dandruff' },
      { id: 'pc3', name: 'Toothpaste (200 g)', price: 89, desc: 'Fluoride, cavity protection', img: 'https://placehold.co/400x300/e0f2f1/333?text=Toothpaste', badge: 'Protection' },
      { id: 'pc4', name: 'Coconut Hair Oil (200 ml)', price: 110, desc: 'Pure cold-pressed, 100% natural', img: 'https://placehold.co/400x300/e0f2f1/333?text=Hair+Oil', badge: 'Natural' },
      { id: 'pc5', name: 'Face Moisturiser (50 ml)', price: 149, desc: 'SPF 15, light non-greasy', img: 'https://placehold.co/400x300/e0f2f1/333?text=Face+Cream', badge: 'SPF 15' },
      { id: 'pc6', name: 'Dettol Antiseptic (100 ml)', price: 85, desc: 'Multi-use liquid antiseptic', img: 'https://placehold.co/400x300/e0f2f1/333?text=Dettol', badge: 'Trusted' }
   ]},
   // ── STATIONERY ──
   books: { title: 'Books', type: 'regular', category: 'Stationery', mainCat: 'stationery', items: [
      { id: 'bk1', name: 'Lined Notebook A4 (5 pcs)', price: 95, desc: '200 pages, ruled, durable cover', img: 'https://placehold.co/400x300/efebe9/333?text=Notebook', badge: 'Pack' },
      { id: 'bk2', name: 'Drawing Book (50 pages)', price: 55, desc: 'A3 size, thick cartridge paper', img: 'https://placehold.co/400x300/efebe9/333?text=Drawing+Book', badge: 'A3' },
      { id: 'bk3', name: 'English Dictionary', price: 199, desc: 'Oxford pocket dictionary', img: 'https://placehold.co/400x300/efebe9/333?text=Dictionary', badge: 'Reference' },
      { id: 'bk4', name: 'Story Book (Tamil/English)', price: 149, desc: 'Children\'s illustrated story book', img: 'https://placehold.co/400x300/efebe9/333?text=Story+Book', badge: 'Kids' }
   ]},
   schoolsupplies: { title: 'School Supplies', type: 'regular', category: 'Stationery', mainCat: 'stationery', items: [
      { id: 'ss1', name: 'Pen Pack (10 pcs)', price: 45, desc: 'Ball point, blue / black', img: 'https://placehold.co/400x300/efebe9/333?text=Pen+Pack', badge: 'Smooth' },
      { id: 'ss2', name: 'Pencil Pack (12 pcs)', price: 35, desc: 'HB grade, pre-sharpened', img: 'https://placehold.co/400x300/efebe9/333?text=Pencil+Pack', badge: 'HB' },
      { id: 'ss3', name: 'Geometry Box', price: 120, desc: 'Compass, protractor, scale & more', img: 'https://placehold.co/400x300/efebe9/333?text=Geometry+Box', badge: 'Complete' },
      { id: 'ss4', name: 'Color Pencils (24 shades)', price: 99, desc: 'Smooth blend, vibrant colors', img: 'https://placehold.co/400x300/efebe9/333?text=Color+Pencils', badge: '24 Colors' },
      { id: 'ss5', name: 'School Bag (medium)', price: 499, desc: 'Water-resistant, padded back', img: 'https://placehold.co/400x300/efebe9/333?text=School+Bag', badge: 'Ergonomic' }
   ]},
   // ── SPORTS & GAMES ──
   games: { title: 'Sports & Games', type: 'regular', category: 'Entertainment', mainCat: 'entertainment', items: [
      { id: 'gm1', name: 'Carrom Board (full size)', price: 1499, desc: '29"×29", polished striker', img: 'https://placehold.co/400x300/fce4ec/333?text=Carrom+Board', badge: 'Family' },
      { id: 'gm2', name: 'Chess Set', price: 349, desc: 'Wooden board with pieces', img: 'https://placehold.co/400x300/fce4ec/333?text=Chess+Set', badge: 'Classic' },
      { id: 'gm3', name: 'Cricket Bat (Kashmir willow)', price: 799, desc: 'Full size, grade 3 willow', img: 'https://placehold.co/400x300/fce4ec/333?text=Cricket+Bat', badge: 'Sport' },
      { id: 'gm4', name: 'Football (size 5)', price: 499, desc: 'PU leather, match quality', img: 'https://placehold.co/400x300/fce4ec/333?text=Football', badge: 'Outdoor' },
      { id: 'gm5', name: 'Badminton Set (4 rackets)', price: 899, desc: '4 rackets + 3 shuttlecocks', img: 'https://placehold.co/400x300/fce4ec/333?text=Badminton', badge: 'Set' },
      { id: 'gm6', name: 'Ludo & Snake-Ladder (2-in-1)', price: 199, desc: 'Rollable mat, includes dice', img: 'https://placehold.co/400x300/fce4ec/333?text=Ludo', badge: 'Family Fun' }
   ]}
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
// Apply admin product overrides saved via Admin Panel
(function () {
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   Object.entries(products).forEach(([, cat]) => {
      cat.items.forEach(item => {
         const o = ov[item.id];
         if (!o) return;
         if (o.img)  item.img  = o.img;
         if (o.name) item.name = o.name;
         if (o.desc) item.desc = o.desc;
         if (o.price !== undefined) {
            if (cat.type === 'milk') item.pricePerLitre = o.price;
            else item.price = o.price;
         }
         if (o.storeId)   item.storeId   = o.storeId;
         if (o.storeName) item.storeName = o.storeName;
      });
   });
})();
// Load admin-added custom products
(function () {
   const newItems = JSON.parse(localStorage.getItem('adminNewItems') || '[]');
   newItems.forEach(ni => {
      if (products[ni.catKey] && !products[ni.catKey].items.find(i => i.id === ni.id)) {
         products[ni.catKey].items.push({ id: ni.id, name: ni.name, price: ni.price, desc: ni.desc, img: ni.img, badge: ni.badge || 'New', storeId: ni.storeId || null, storeName: ni.storeName || null, variants: ni.variants || undefined });
      }
   });
})();
// ── DEMO STORE SEED ──
// Bumping version forces re-seed on all browsers that had a stale flag.
// Products are always written so they survive partial localStorage clears.
(function seedDemoStores() {
   if (localStorage.getItem('demoSeed_v8')) return;
   ['v1','v2','v3','v4','v5','v6','v7'].forEach(function(v) { localStorage.removeItem('demoSeed_' + v); });

   var users = JSON.parse(localStorage.getItem('users') || '[]');

   var stores = [
      {
         email: 'sharma@mystore.demo', name: 'Sharma Ji', storeName: 'Sharma General Stores', storeType: 'general',
         products: [
            { id: 'sharma_001', catKey: 'groceries',  name: 'Basmati Rice',        price: 60,  variants: [{label:'1 kg',price:60},{label:'5 kg',price:285},{label:'10 kg',price:550}], desc: 'Premium long grain basmati rice',     img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400', badge: 'Best Seller' },
            { id: 'sharma_002', catKey: 'groceries',  name: 'Chakki Atta',         price: 42,  variants: [{label:'1 kg',price:42},{label:'5 kg',price:180},{label:'10 kg',price:340}], desc: 'Fresh stone-ground whole wheat flour', img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400', badge: 'Fresh' },
            { id: 'sharma_003', catKey: 'groceries',  name: 'Sunflower Oil',       price: 130, variants: [{label:'1 L',price:130},{label:'2 L',price:250},{label:'5 L',price:620}],    desc: 'Pure refined sunflower cooking oil',   img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400', badge: 'Popular' },
            { id: 'sharma_004', catKey: 'groceries',  name: 'Sugar',               price: 48,  variants: [{label:'1 kg',price:48},{label:'5 kg',price:220}],                           desc: 'Fine grain white sugar',               img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400', badge: 'Daily Need' },
            { id: 'sharma_005', catKey: 'groceries',  name: 'Tata Salt',           price: 22,  variants: [{label:'1 kg',price:22},{label:'2 kg',price:42}],                            desc: 'Iodized vacuum evaporated salt',       img: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=400', badge: 'Essential' },
            { id: 'sharma_006', catKey: 'groceries',  name: 'Tata Tea Premium',    price: 110, variants: [{label:'250 g',price:110},{label:'500 g',price:210},{label:'1 kg',price:400}],desc: 'Strong CTC leaf tea blend',            img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', badge: 'Popular' },
            { id: 'sharma_007', catKey: 'groceries',  name: 'Ariel Detergent',     price: 199, variants: [{label:'1 kg',price:199},{label:'2 kg',price:375}],                          desc: 'Advanced washing powder',              img: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=400', badge: 'Home' },
            { id: 'sharma_008', catKey: 'vegetables', name: 'Fresh Tomatoes',      price: 20,  variants: [{label:'500 g',price:20},{label:'1 kg',price:35},{label:'2 kg',price:65}],   desc: 'Farm fresh ripe red tomatoes',         img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', badge: 'Fresh' },
            { id: 'sharma_009', catKey: 'vegetables', name: 'Fresh Onions',        price: 28,  variants: [{label:'1 kg',price:28},{label:'2 kg',price:55}],                            desc: 'Fresh red onions from farm',           img: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400', badge: 'Daily Need' },
            { id: 'sharma_010', catKey: 'vegetables', name: 'Fresh Potatoes',      price: 32,  variants: [{label:'1 kg',price:32},{label:'2 kg',price:60}],                            desc: 'Farm fresh potatoes',                  img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', badge: 'Daily Need' },
            { id: 'sharma_011', catKey: 'vegetables', name: 'Fresh Carrots',       price: 18,  variants: [{label:'250 g',price:18},{label:'500 g',price:30}],                          desc: 'Crunchy orange carrots',               img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400', badge: 'Fresh' },
            { id: 'sharma_012', catKey: 'vegetables', name: 'Green Chillies',      price: 10,  variants: [{label:'100 g',price:10},{label:'250 g',price:18}],                          desc: 'Fresh spicy green chillies',           img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400', badge: 'Spicy' },
            { id: 'sharma_017', catKey: 'groceries',  name: 'Amul Butter',         price: 60,  variants: [{label:'100 g',price:60},{label:'500 g',price:255}],                         desc: 'Fresh pasteurised butter',             img: '', badge: 'Fresh' },
            { id: 'sharma_018', catKey: 'dairy',      name: 'Amul Milk',           price: 16,  variants: [{label:'500 ml',price:16},{label:'1 L',price:28},{label:'2 L',price:54}],    desc: 'Full cream pasteurised milk',          img: '', badge: 'Fresh' },
            { id: 'sharma_019', catKey: 'dairy',      name: 'Amul Curd',           price: 25,  variants: [{label:'200 g',price:25},{label:'400 g',price:42},{label:'500 g',price:50}], desc: 'Thick set natural curd',               img: '', badge: 'Daily' },
            { id: 'sharma_020', catKey: 'dairy',      name: 'Farm Eggs',           price: 88,  variants: [{label:'6 pcs',price:46},{label:'12 pcs',price:88},{label:'30 pcs',price:210}],desc:'White eggs, farm fresh batch',         img: '', badge: 'Fresh' },
            { id: 'sharma_021', catKey: 'dairy',      name: 'Paneer',              price: 72,  variants: [{label:'200 g',price:72},{label:'400 g',price:140}],                         desc: 'Soft fresh cottage cheese',            img: '', badge: 'Fresh' },
            { id: 'sharma_022', catKey: 'cola',       name: 'Thums Up',            price: 22,  variants: [{label:'250 ml',price:22},{label:'600 ml',price:38},{label:'2 L',price:89}], desc: 'Strong desi cola, chilled',            img: '', badge: 'Desi Fav' },
            { id: 'sharma_023', catKey: 'cola',       name: 'Coca Cola',           price: 22,  variants: [{label:'250 ml',price:22},{label:'600 ml',price:38},{label:'2 L',price:85}], desc: 'Classic refreshing cola',              img: '', badge: 'Classic' },
            { id: 'sharma_024', catKey: 'cola',       name: 'Limca',               price: 20,  variants: [{label:'250 ml',price:20},{label:'600 ml',price:35}],                        desc: 'Lemon-lime refreshing soda',           img: '', badge: 'Refreshing' },
            { id: 'sharma_025', catKey: 'juice',      name: 'Maaza Mango',         price: 20,  variants: [{label:'200 ml',price:20},{label:'600 ml',price:42}],                        desc: 'Smooth mango drink',                   img: '', badge: 'Popular' },
            { id: 'sharma_026', catKey: 'juice',      name: 'Real Mixed Fruit',    price: 25,  variants: [{label:'200 ml',price:25},{label:'1 L',price:110}],                          desc: 'Apple & guava blend',                  img: '', badge: 'Healthy' },
            { id: 'sharma_027', catKey: 'energyDrink',name: 'Red Bull',            price: 118, variants: [{label:'250 ml',price:118},{label:'473 ml',price:195}],                      desc: 'Original energy boost',                img: '', badge: 'Popular' },
            { id: 'sharma_028', catKey: 'energyDrink',name: 'Sting Energy',        price: 28,  variants: [{label:'250 ml',price:28},{label:'500 ml',price:50}],                        desc: 'Berry blast, affordable energy',       img: '', badge: 'Budget' },
            { id: 'sharma_029', catKey: 'sodaWater',  name: 'Bisleri Water',       price: 10,  variants: [{label:'500 ml',price:10},{label:'1 L',price:20},{label:'2 L',price:38}],    desc: 'Pure packaged drinking water',         img: '', badge: 'Essential' },
            { id: 'sharma_030', catKey: 'sodaWater',  name: 'Sprite',              price: 20,  variants: [{label:'250 ml',price:20},{label:'600 ml',price:35},{label:'2 L',price:80}], desc: 'Lemon-lime fizz, refreshing',          img: '', badge: 'Refreshing' },
            { id: 'sharma_031', catKey: 'sweets',     name: 'Murukku',             price: 30,  variants: [{label:'100 g',price:30},{label:'200 g',price:52}],                          desc: 'Crispy rice flour spiral snack',       img: '', badge: 'Crunchy' },
            { id: 'sharma_032', catKey: 'sweets',     name: 'Mixture',             price: 30,  variants: [{label:'100 g',price:30},{label:'200 g',price:55}],                          desc: 'Classic crispy namkeen mix',           img: '', badge: 'Crispy' }
         ]
      },
      {
         email: 'kapoor@mystore.demo', name: 'Kapoor Ji', storeName: 'Kapoor General Stores', storeType: 'general',
         products: [
            { id: 'kapoor_001', catKey: 'groceries',  name: 'Parle-G Biscuits',     price:  40, variants: [{label:'200 g',price:40},{label:'500 g',price:85},{label:'1 kg',price:160}], desc: 'Classic glucose biscuits',         img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', badge: 'Popular' },
            { id: 'kapoor_002', catKey: 'groceries',  name: 'Maggi Noodles',        price:  14, variants: [{label:'1 pack',price:14},{label:'4 pack',price:52},{label:'12 pack',price:130}],desc:'2-minute masala noodles',        img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400', badge: 'Snack' },
            { id: 'kapoor_003', catKey: 'groceries',  name: 'Amul Butter',          price:  62, variants: [{label:'100 g',price:62},{label:'500 g',price:250}],                           desc: 'Fresh pasteurised butter',         img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400', badge: 'Fresh' },
            { id: 'kapoor_004', catKey: 'groceries',  name: 'Whole Wheat Bread',    price:  45, desc: 'Soft sandwich bread loaf',                                                          img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400', badge: 'Fresh' },
            { id: 'kapoor_005', catKey: 'groceries',  name: 'Farm Fresh Eggs',      price:  46, variants: [{label:'6 pcs',price:46},{label:'12 pcs',price:90},{label:'30 pcs',price:215}],  desc: 'White eggs, farm fresh',          img: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400', badge: 'Daily Need' },
            { id: 'kapoor_006', catKey: 'groceries',  name: 'Lays Chips',           price:  20, variants: [{label:'1 pack',price:20},{label:'3 pack',price:55},{label:'Variety Pack',price:150}],desc:'Flavoured potato chips',    img: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400', badge: 'Snack' },
            { id: 'kapoor_007', catKey: 'groceries',  name: 'Tropicana Orange',     price:  30, variants: [{label:'200 ml',price:30},{label:'1 L',price:120}],                              desc: '100% fruit juice, no added sugar', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400', badge: 'Healthy' },
            { id: 'kapoor_008', catKey: 'groceries',  name: 'Nescafé Classic',      price: 245, variants: [{label:'100 g',price:245},{label:'200 g',price:460}],                           desc: 'Instant coffee granules',          img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', badge: 'Morning Must' },
            { id: 'kapoor_009', catKey: 'vegetables', name: 'Spinach (Palak)',      price:  14, variants: [{label:'250 g',price:14},{label:'500 g',price:25}],                              desc: 'Fresh tender green spinach leaves',img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400', badge: 'Fresh' },
            { id: 'kapoor_010', catKey: 'vegetables', name: 'Mixed Capsicum',       price:  35, variants: [{label:'250 g',price:35},{label:'500 g',price:65}],                              desc: 'Red, green & yellow capsicum mix', img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400', badge: 'Fresh' },
            { id: 'kapoor_011', catKey: 'vegetables', name: 'Fresh Cabbage',        price:  30, desc: 'Fresh tender cabbage head',                                                          img: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400', badge: 'Fresh' },
            { id: 'kapoor_012', catKey: 'vegetables', name: 'Brinjal (Baingan)',    price:  16, variants: [{label:'250 g',price:16},{label:'500 g',price:28}],                              desc: 'Fresh purple brinjal',             img: 'https://images.unsplash.com/photo-1634467524884-897d0af5e104?w=400', badge: 'Fresh' },
            { id: 'kapoor_013', catKey: 'vegetables', name: 'Fresh Tomatoes',       price:  16, variants: [{label:'500 g',price:16},{label:'1 kg',price:30},{label:'2 kg',price:56}],      desc: 'Juicy tomatoes, daily fresh stock',img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400', badge: 'Daily Stock' },
            { id: 'kapoor_014', catKey: 'vegetables', name: 'Onions',               price:  13, variants: [{label:'500 g',price:13},{label:'1 kg',price:25},{label:'2 kg',price:48}],      desc: 'Fresh red onions',                 img: 'https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=400', badge: 'Daily Need' },
            { id: 'kapoor_015', catKey: 'vegetables', name: 'Potatoes',             price:  15, variants: [{label:'500 g',price:15},{label:'1 kg',price:29},{label:'2 kg',price:55}],      desc: 'Farm fresh potatoes',              img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400', badge: 'Daily Need' },
            { id: 'kapoor_016', catKey: 'groceries',  name: 'Tata Salt',            price:  20, variants: [{label:'1 kg',price:20},{label:'2 kg',price:38}],                               desc: 'Iodized vacuum evaporated salt',   img: '', badge: 'Essential' },
            { id: 'kapoor_018', catKey: 'dairy',      name: 'Nandini Toned Milk',   price:  14, variants: [{label:'500 ml',price:14},{label:'1 L',price:26},{label:'2 L',price:50}],       desc: 'Fresh toned milk, daily delivery', img: '', badge: 'Fresh' },
            { id: 'kapoor_019', catKey: 'dairy',      name: 'Dahi',                 price:  22, variants: [{label:'200 g',price:22},{label:'400 g',price:40},{label:'1 kg',price:95}],     desc: 'Thick set curd, creamy texture',   img: '', badge: 'Daily' },
            { id: 'kapoor_020', catKey: 'dairy',      name: 'Paneer',               price:  68, variants: [{label:'200 g',price:68},{label:'400 g',price:130}],                            desc: 'Soft cottage cheese, fresh batch', img: '', badge: 'Fresh' },
            { id: 'kapoor_021', catKey: 'dairy',      name: 'Cheese Slices',        price:  58, variants: [{label:'5 pcs',price:58},{label:'10 pcs',price:108}],                           desc: 'Processed cheese, melt-ready',     img: '', badge: 'Tasty' },
            { id: 'kapoor_022', catKey: 'cola',       name: 'Pepsi',                price:  20, variants: [{label:'250 ml',price:20},{label:'600 ml',price:36},{label:'2 L',price:85}],    desc: 'Bold cola flavour, chilled',       img: '', badge: 'Popular' },
            { id: 'kapoor_023', catKey: 'cola',       name: 'Sprite',               price:  20, variants: [{label:'250 ml',price:20},{label:'600 ml',price:36},{label:'2 L',price:80}],    desc: 'Clear lemon-lime soda',            img: '', badge: 'Refreshing' },
            { id: 'kapoor_024', catKey: 'cola',       name: 'Mountain Dew',         price:  20, variants: [{label:'250 ml',price:20},{label:'600 ml',price:36}],                           desc: 'Citrus blast energy soda',         img: '', badge: 'Trendy' },
            { id: 'kapoor_025', catKey: 'juice',      name: 'Tropicana Orange',     price:  30, variants: [{label:'200 ml',price:30},{label:'1 L',price:120}],                             desc: '100% orange juice, no sugar added',img: '', badge: 'Healthy' },
            { id: 'kapoor_026', catKey: 'juice',      name: 'Real Guava Juice',     price:  25, variants: [{label:'200 ml',price:25},{label:'1 L',price:108}],                             desc: 'Guava nectar, refreshing',         img: '', badge: 'Fresh' },
            { id: 'kapoor_027', catKey: 'energyDrink',name: 'Monster Energy',       price: 145, variants: [{label:'250 ml',price:89},{label:'500 ml',price:145}],                          desc: 'Extra strong energy drink',        img: '', badge: 'Strong' },
            { id: 'kapoor_028', catKey: 'energyDrink',name: 'Gatorade',             price:  55, variants: [{label:'250 ml',price:55},{label:'500 ml',price:95}],                           desc: 'Sports electrolyte drink',         img: '', badge: 'Sports' },
            { id: 'kapoor_029', catKey: 'sodaWater',  name: 'Kinley Water',         price:  10, variants: [{label:'500 ml',price:10},{label:'1 L',price:20}],                              desc: 'Pure packaged drinking water',     img: '', badge: 'Essential' },
            { id: 'kapoor_030', catKey: 'sodaWater',  name: 'Limca',                price:  20, variants: [{label:'250 ml',price:20},{label:'600 ml',price:35}],                           desc: 'Lemon-lime soda, refreshing',      img: '', badge: 'Refreshing' },
            { id: 'kapoor_031', catKey: 'sweets',     name: 'Besan Ladoo',          price:  55, variants: [{label:'100 g',price:55},{label:'250 g',price:110}],                            desc: 'Ghee-roasted gram flour balls',    img: '', badge: 'Festive' },
            { id: 'kapoor_032', catKey: 'sweets',     name: 'Namkeen Mix',          price:  28, variants: [{label:'100 g',price:28},{label:'200 g',price:55}],                             desc: 'Crispy assorted snack mix',        img: '', badge: 'Crispy' }
         ]
      },
      {
         email: 'varma@mystore.demo', name: 'Varma Ji', storeName: 'Varma Electronics', storeType: 'electronics',
         products: [
            { id: 'varma_001', catKey: 'electronics', name: 'Boat Bassheads Earphones',   price: 299,  desc: 'Bass boost wired earphones with mic',       img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400', badge: 'Popular' },
            { id: 'varma_002', catKey: 'electronics', name: 'Power Bank 10000mAh',        price: 799,  desc: 'Fast charge portable power bank',            img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400', badge: 'Must Have' },
            { id: 'varma_003', catKey: 'electronics', name: 'USB-C Braided Cable 1m',     price: 149,  desc: 'Fast charge & data transfer cable',          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400', badge: 'Durable' },
            { id: 'varma_004', catKey: 'electronics', name: 'LED Desk Lamp',              price: 450,  desc: 'Flexible neck energy saving LED lamp',       img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400', badge: 'Eco' },
            { id: 'varma_005', catKey: 'electronics', name: 'Table Fan 400mm',            price: 1200, desc: 'Powerful 3-speed table fan',                 img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', badge: 'Summer Must' },
            { id: 'varma_006', catKey: 'electronics', name: '4-Socket Extension Board',   price: 350,  desc: 'With surge protection & master switch',     img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400', badge: 'Safety' },
            { id: 'varma_007', catKey: 'electronics', name: 'Bluetooth Mini Speaker',     price: 599,  desc: 'Portable waterproof wireless speaker',       img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', badge: 'Hot' },
            { id: 'varma_008', catKey: 'electronics', name: 'LED Bulb 9W Pack of 4',      price: 280,  desc: 'Cool white energy-efficient LED bulbs',      img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400', badge: 'Eco' },
            { id: 'varma_009', catKey: 'electronics', name: '18W Fast Charger Adapter',   price: 199,  desc: 'Universal USB fast charging wall adapter',   img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400', badge: 'Fast Charge' },
            { id: 'varma_010', catKey: 'electronics', name: 'Tempered Glass Screen Guard',price:  99,  desc: 'Universal tempered glass screen protector', img: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400', badge: 'Protect' },
            { id: 'varma_011', catKey: 'electronics', name: 'Smart LED Strip 5m',         price: 499,  desc: 'RGB colour changing LED strip with remote',  img: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400', badge: 'Trendy' },
            { id: 'varma_012', catKey: 'electronics', name: 'Wireless Mouse',             price: 349,  desc: '2.4GHz silent wireless optical mouse',       img: '', badge: 'Work From Home' }
         ]
      },
      {
         email: 'ram@mystore.demo', name: 'Ram', storeName: 'Ram Stores', storeType: 'general',
         products: [
            { id: 'ram_001', catKey: 'groceries',   name: 'Amul Gold Milk 1L',           price:  30,  desc: 'Full cream standardised milk',               img: '', badge: 'Daily' },
            { id: 'ram_002', catKey: 'groceries',   name: 'Bournvita 500g',               price: 230,  desc: 'Chocolate malt health drink',                img: '', badge: 'Popular' },
            { id: 'ram_003', catKey: 'groceries',   name: 'Horlicks 500g',                price: 275,  desc: 'Malted milk health drink',                   img: '', badge: 'Health' },
            { id: 'ram_004', catKey: 'groceries',   name: 'Nescafe Gold 100g',            price: 285,  desc: 'Premium instant coffee granules',            img: '', badge: 'Premium' },
            { id: 'ram_005', catKey: 'groceries',   name: 'Complan 500g',                 price: 295,  desc: 'Complete planned food nutrition drink',      img: '', badge: 'Nutrition' },
            { id: 'ram_006', catKey: 'groceries',   name: 'Surf Excel 2kg',               price: 310,  desc: 'Advanced stain removal detergent',           img: '', badge: 'Home' },
            { id: 'ram_007', catKey: 'vegetables',  name: 'Fresh Coriander 100g',         price:  15,  desc: 'Fresh green coriander leaves',               img: '', badge: 'Fresh' },
            { id: 'ram_008', catKey: 'vegetables',  name: 'Ginger 100g',                  price:  22,  desc: 'Fresh ginger root, aromatic',                img: '', badge: 'Fresh' },
            { id: 'ram_009', catKey: 'vegetables',  name: 'Garlic 100g',                  price:  35,  desc: 'Fresh garlic bulbs',                         img: '', badge: 'Essential' },
            { id: 'ram_010', catKey: 'vegetables',  name: 'Lemons 6 pcs',                 price:  30,  desc: 'Fresh juicy lemons',                         img: '', badge: 'Fresh' },
            { id: 'ram_011', catKey: 'vegetables',  name: 'Fresh Peas 250g',              price:  38,  desc: 'Tender green peas, farm fresh',              img: '', badge: 'Seasonal' },
            { id: 'ram_012', catKey: 'vegetables',  name: 'Curry Leaves 50g',             price:  10,  desc: 'Fresh fragrant curry leaves',                img: '', badge: 'Aromatic' },
            { id: 'ram_013', catKey: 'dairy',       name: 'Amul Ghee 500ml',              price: 300,  desc: 'Pure cow ghee, rich aroma',                  img: '', badge: 'Pure' },
            { id: 'ram_014', catKey: 'dairy',       name: 'Amul Paneer 400g',             price: 140,  desc: 'Soft fresh cottage cheese block',            img: '', badge: 'Fresh' },
            { id: 'ram_015', catKey: 'dairy',       name: 'Amul Cheese Slices 200g',      price:  95,  desc: 'Processed cheese slices, 10 pieces',         img: '', badge: 'Tasty' },
            { id: 'ram_016', catKey: 'dairy',       name: 'Britannia Bread 400g',         price:  45,  desc: 'Soft sandwich bread loaf',                   img: '', badge: 'Fresh' },
            { id: 'ram_017', catKey: 'sweets',      name: 'Kaju Katli 250g',              price: 280,  desc: 'Premium cashew barfi, festive pack',         img: '', badge: 'Premium' },
            { id: 'ram_018', catKey: 'sweets',      name: 'Soan Papdi 250g',              price: 120,  desc: 'Flaky cardamom sweet, box pack',             img: '', badge: 'Classic' },
            { id: 'ram_019', catKey: 'cola',        name: 'Coca Cola 600ml',              price:  38,  desc: 'Classic refreshing cola drink',              img: '', badge: 'Chilled' },
            { id: 'ram_020', catKey: 'cola',        name: 'Pepsi 600ml',                  price:  36,  desc: 'Bold refreshing cola flavour',               img: '', badge: 'Popular' },
            { id: 'ram_021', catKey: 'juice',       name: 'Frooti Mango 200ml',           price:  20,  desc: 'Fresh & juicy mango drink',                  img: '', badge: 'Kids Fav' },
            { id: 'ram_022', catKey: 'juice',       name: 'Tropicana Mixed Fruit 1L',     price: 125,  desc: 'Mixed fruit juice blend',                    img: '', badge: 'Healthy' },
            { id: 'ram_023', catKey: 'sodaWater',   name: 'Bisleri Water 500ml',          price:  15,  desc: 'Pure packaged drinking water',               img: '', badge: 'Essential' },
            { id: 'ram_024', catKey: 'sodaWater',   name: 'Aquafina 1L',                  price:  20,  desc: 'Purified drinking water',                    img: '', badge: 'Pure' }
         ]
      }
   ];

   stores.forEach(function(s) {
      // Add user account if not present
      if (!users.find(function(u) { return u.email === s.email; })) {
         users.push({ email: s.email, name: s.name, storeName: s.storeName, storeType: s.storeType || 'general', role: 'storeowner', password: 'demo1234', blocked: false });
      } else {
         var idx = users.findIndex(function(u) { return u.email === s.email; });
         users[idx].storeName  = s.storeName;
         users[idx].storeType  = s.storeType || 'general';
         users[idx].role       = 'storeowner';
      }
      // Always write products so they're available even after partial clears
      localStorage.setItem('myProducts_' + s.email, JSON.stringify(s.products));
   });
   localStorage.setItem('users', JSON.stringify(users));
   localStorage.setItem('demoSeed_v8', '1');
})();

// Load store-owner products from myProducts_${email} for each store-owner user
(function () {
   var users = JSON.parse(localStorage.getItem('users') || '[]');
   users.forEach(function(u) {
      if (u.role !== 'storeowner') return;
      var storeProds = JSON.parse(localStorage.getItem('myProducts_' + u.email) || '[]');
      var storeName  = u.storeName || u.name;
      storeProds.forEach(function(p) {
         if (!products[p.catKey]) return;
         if (products[p.catKey].items.find(function(i) { return i.id === p.id; })) return;
         products[p.catKey].items.push({
            id: p.id, name: p.name, price: p.price, desc: p.desc,
            img: p.img, badge: p.badge || 'New',
            storeId: u.email, storeName: storeName,
            variants: p.variants || undefined
         });
      });
   });
})();

// ── MAIN CATEGORY DEFINITIONS ──
const MAIN_CATS = {
   dailyneeds:    { label: '🛒 Daily Needs',    icon: '🛒', keys: ['groceries','vegetables','dairy','sweets','cola','juice','energyDrink','sodaWater','milk','pooja','festival'] },
   flowers:       { label: '🌸 Flowers',         icon: '🌸', keys: ['flowers'] },
   home:          { label: '🏠 Home & Living',   icon: '🏠', keys: ['sofa','diningTable','wardrobe','bedFrame','whiteMarble','blackMarble','italianMarble','granite','hardwood','vinyl','ceramicTiles','laminate','wallArt','curtains','lighting','rugs'] },
   construction:  { label: '🏗️ Construction',   icon: '🏗️', keys: ['redBricks','flybricks','concreteBricks','cement','paint','plumbing','doors','electricals'] },
   clothing:      { label: '👕 Clothing',        icon: '👕', keys: ['menswear','womenswear','kidswear','textiles','hairClips','earrings','bangles','necklaces'] },
   agriculture:   { label: '🌾 Agriculture',     icon: '🌾', keys: ['gardenSoil','cococpeat','fertilizer','seeds','farmtools','irrigation'] },
   kitchen:       { label: '🍳 Kitchen',         icon: '🍳', keys: ['utensils','plastic','cleaning'] },
   electronics:   { label: '💡 Electronics',     icon: '💡', keys: ['mobile','appliances','electrical'] },
   health:        { label: '💊 Health & Beauty', icon: '💊', keys: ['medicines','personalcare'] },
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
      document.getElementById('searchDropdown').classList.remove('show');
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
   const wl = wlUser ? getWishlist(wlUser.email) : [];
   const inWL = wl.some(w => w.id === item.id);

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
<div class="card-color-top" style="background:${topBg}">
  <div class="card-color-name">${shortName}</div>
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
   if (!user) { showToast('Please login to add items to cart.'); return; }

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

   var personalKey  = 'orders_' + user.email;
   var personalOrds = JSON.parse(localStorage.getItem(personalKey) || '[]');
   var allOrders    = JSON.parse(localStorage.getItem('allOrders') || '[]');
   var createdOrders = [];

   groupKeys.forEach(function(key) {
      var grp     = groups[key];
      var orderId = genId();
      var total   = grp.items.reduce(function(s, c) { return s + c.price * c.qty; }, 0);
      var items   = grp.items.map(function(c) { return { id: c.id, name: c.name, price: c.price, qty: c.qty, img: c.img }; });

      personalOrds.unshift({ orderId: orderId, date: dateStr, items: items, total: total, method: 'Pickup', status: 'Pending Pickup', storeId: grp.storeId, storeName: grp.storeName });
      allOrders.unshift({
         orderId: orderId, date: dateStr, timestamp: now.getTime(),
         customerName: user.name, customerEmail: user.email, customerPhone: user.phone || '',
         items: items, total: total, status: 'Pending Pickup',
         storeId: grp.storeId, storeName: grp.storeName
      });
      createdOrders.push({ orderId: orderId, storeName: grp.storeName, storeId: grp.storeId, items: items, total: total, date: dateStr });
   });

   localStorage.setItem(personalKey, JSON.stringify(personalOrds));
   localStorage.setItem('allOrders', JSON.stringify(allOrders));

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

   // Save order to localStorage
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (user) {
      const total = parseFloat(amount.replace(/[₹,]/g, '')) || 0;
      const order = {
         orderId: 'ORD-' + Date.now(),
         date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
         items: cart.map(c => ({ name: c.name, qty: c.qty, price: c.price })),
         total, method, status: 'Confirmed'
      };
      const orders = JSON.parse(localStorage.getItem('orders_' + user.email) || '[]');
      orders.push(order);
      localStorage.setItem('orders_' + user.email, JSON.stringify(orders));

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
                  cards.push({ last4, expiry: exp, nameOnCard: name, brand });
                  saveCardsData(user.email, cards);
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
   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   const allCat = document.getElementById('cat-all');
   if (allCat) allCat.classList.add('active');
   var storesBtn = document.querySelector('.header-stores-btn');
   if (storesBtn) storesBtn.classList.remove('active');
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
function getUsers() {
   return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
   localStorage.setItem('users', JSON.stringify(users));
}

function signUp() {
   const name     = document.getElementById('signupName').value.trim();
   const email    = document.getElementById('signupEmail').value.trim();
   const password = document.getElementById('signupPassword').value;
   const confirm  = document.getElementById('signupConfirm').value;
   const roleEl   = document.querySelector('input[name="userRole"]:checked');
   const role     = roleEl ? roleEl.value : 'customer';
   if (!name || !email || !password || !confirm) { alert('Please fill in all fields.'); return; }
   if (password.length < 6) { alert('Password must be at least 6 characters.'); return; }
   if (password !== confirm) { alert('Passwords do not match.'); return; }
   const users = getUsers();
   if (users.find(u => u.email === email)) {
      alert('An account with this email already exists. Please login.');
      window.location.href = 'login.html';
      return;
   }
   users.push({ name, email, password, role });
   saveUsers(users);
   // Save role separately so it survives any array operations
   localStorage.setItem('role_' + email, role);
   alert('Account created! Please login.');
   window.location.href = 'login.html';
}

function login() {
   const email    = document.getElementById('loginEmail').value.trim().toLowerCase();
   const password = document.getElementById('loginPassword').value;
   const errorMsg = document.getElementById('loginError');
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
   // Store owner → shopowner.html
   if (user.role === 'storeowner') { window.location.href = 'shopowner.html'; return; }
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
   ['all', 'customers', 'storeowners', 'blocked'].forEach(function(f) {
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
   var statsEl = document.getElementById('userStatsBar');
   if (statsEl) {
      statsEl.innerHTML =
         '<span>👥 Total: <strong>' + allNonAdmin.length + '</strong></span>' +
         '<span>✅ Active: <strong>' + activeCount + '</strong></span>' +
         '<span>🚫 Blocked: <strong>' + blockedCount + '</strong></span>';
   }

   // Apply category filter
   var filtered = allNonAdmin.slice();
   if (filter === 'customers')   filtered = filtered.filter(function(u) { return u.role !== 'storeowner'; });
   if (filter === 'storeowners') filtered = filtered.filter(function(u) { return u.role === 'storeowner'; });
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

   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');

   var html = '';
   filtered.forEach(function(u) {
      var initial    = (u.name || u.email).charAt(0).toUpperCase();
      var roleLabel  = u.role === 'storeowner' ? 'Store Owner' : 'Customer';
      var roleClass  = u.role === 'storeowner' ? 'badge-owner' : 'badge-customer';
      var statusCls  = u.blocked ? 'status-blocked' : 'status-active';
      var statusLbl  = u.blocked ? '🚫 Blocked' : '✅ Active';
      var blockLbl   = u.blocked ? '✅ Unblock' : '🚫 Block';
      var blockCls   = u.blocked ? 'um-btn-unblock' : 'um-btn-block';
      var blockFn    = u.blocked ? 'unblockUser' : 'blockUser';
      var orderCount = allOrders.filter(function(o) { return o.userEmail === u.email; }).length;
      var meta       = orderCount + ' order' + (orderCount !== 1 ? 's' : '');
      if (u.phone) meta += ' · ' + u.phone;

      html +=
         '<div class="um-user-card' + (u.blocked ? ' um-card-blocked' : '') + '">' +
            '<div class="um-avatar">' + initial + '</div>' +
            '<div class="um-user-info">' +
               '<div class="um-user-name">' +
                  (u.name || '(No name)') +
                  ' <span class="um-badge ' + roleClass + '">' + roleLabel + '</span>' +
                  ' <span class="um-status ' + statusCls + '">' + statusLbl + '</span>' +
               '</div>' +
               '<div class="um-user-email">' + u.email + '</div>' +
               '<div class="um-user-meta">' + meta + '</div>' +
            '</div>' +
            '<div class="um-actions">' +
               '<button class="um-btn um-btn-view"   onclick="showUserDetail(\'' + u.email + '\')">👁 Profile</button>' +
               '<button class="um-btn ' + blockCls + '" onclick="' + blockFn + '(\'' + u.email + '\')">' + blockLbl + '</button>' +
               '<button class="um-btn um-btn-delete" onclick="deleteUser(\'' + u.email + '\')">🗑 Delete</button>' +
            '</div>' +
         '</div>';
   });
   container.innerHTML = html;
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
   if (!confirm('Permanently delete the account for:\n' + email + '\n\nThis cannot be undone. All their data (addresses, orders) will also be removed.')) return;
   var users = getUsers();
   users = users.filter(function(u) { return u.email !== email; });
   saveUsers(users);
   localStorage.removeItem('role_' + email);
   localStorage.removeItem('addresses_' + email);
   localStorage.removeItem('orders_' + email);
   // Remove their entries from the shared orders list
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
   allOrders = allOrders.filter(function(o) { return o.userEmail !== email; });
   localStorage.setItem('allOrders', JSON.stringify(allOrders));
   // Force logout if this user is currently in session
   var lu = JSON.parse(sessionStorage.getItem('loggedInUser') || 'null');
   if (lu && lu.email.toLowerCase() === email.toLowerCase()) {
      sessionStorage.removeItem('loggedInUser');
   }
   showAdminToast('🗑 Account deleted: ' + email);
   renderUserList(_currentUserFilter);
}

function showUserDetail(email) {
   var users = getUsers();
   var u = users.find(function(x) { return x.email === email; });
   if (!u) return;

   var addresses = JSON.parse(localStorage.getItem('addresses_' + email) || '[]');
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
   var userOrders = allOrders.filter(function(o) { return o.customerEmail === email; });

   var roleLabel   = u.role === 'storeowner' ? 'Store Owner' : 'Customer';
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
   if (!user) { window.location.href = 'login.html'; return; }

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
      { name: 'Admin', email: 'g.ramkumar3127@gmail.com',    password: 'Gsggrl@703662', isAdmin: true },
      { name: 'Admin', email: 'lakshmankumar586@gmail.com',  password: 'Lucky@123',     isAdmin: true }
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
   const addresses = JSON.parse(localStorage.getItem('addresses_' + email) || '[]');
   if (!addresses.length) {
      el.innerHTML = '📍 <span>Add Address</span>';
   } else {
      const def = addresses.find(a => a.isDefault) || addresses[0];
      el.innerHTML = `🏠 <strong>HOME</strong> ${def.city || def.line} ›`;
   }
}

function toggleUserMenu(e) {
   e.stopPropagation();
   document.getElementById('userDropdown').classList.toggle('open');
}

document.addEventListener('click', function () {
   const dd = document.getElementById('userDropdown');
   if (dd) dd.classList.remove('open');
});

function checkShopOwnerLogin() {
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
   var nameEl = document.getElementById('shopOwnerName');
   if (nameEl) nameEl.textContent = user.name;
   var storeBtn = document.getElementById('shopViewStoreBtn');
   if (storeBtn && isAdmin(user.email)) storeBtn.classList.remove('hidden');
   loadSiteSettings();
   renderShopDashboard();
   switchShopTab('orders');
   // Auto-refresh if admin enabled it
   var s = getAdminSettings();
   if (s.autoRefreshOrders) {
      setInterval(function() { renderShopDashboard(window._shopCurrentFilter); }, 30000);
   }
}

function renderShopDashboard(filterStatus) {
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
   var list = document.getElementById('shopOrderList');
   if (!list) return;

   // Filter to store-owner's own orders if not admin
   var loggedUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (loggedUser && !isAdmin(loggedUser.email)) {
      allOrders = allOrders.filter(function(o) { return o.storeId === loggedUser.email; });
   }

   // Update stats
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
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
   var order = allOrders.find(function(o) { return o.orderId === orderId; });
   if (order) {
      order.status = newStatus;
      localStorage.setItem('allOrders', JSON.stringify(allOrders));
      // Sync status to customer's personal order store so their profile page shows latest
      var personalKey = 'orders_' + order.customerEmail;
      var personalOrders = JSON.parse(localStorage.getItem(personalKey) || '[]');
      var personalOrder = personalOrders.find(function(o) { return o.orderId === orderId; });
      if (personalOrder) {
         personalOrder.status = newStatus;
         localStorage.setItem(personalKey, JSON.stringify(personalOrders));
      }
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
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
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
   // reuse renderShopDashboard logic inline by temporarily replacing allOrders
   var backup = localStorage.getItem('allOrders');
   localStorage.setItem('allOrders', JSON.stringify(filtered));
   renderShopDashboard();
   localStorage.setItem('allOrders', backup);
}

// ── SHOP OWNER: PRODUCT MANAGEMENT ──
function getMyProducts(email) { return JSON.parse(localStorage.getItem('myProducts_' + email) || '[]'); }
function saveMyProducts(email, arr) { localStorage.setItem('myProducts_' + email, JSON.stringify(arr)); }

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
   ['orders', 'products'].forEach(function(t) {
      var panel = document.getElementById('shop-panel-' + t);
      var btn   = document.getElementById('shop-tab-' + t);
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab);
   });
   if (tab === 'products') renderStoreOwnerProducts();
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
   var allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
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
                '<button class="admin-store-view-btn" onclick="switchAdminTab(\'products\');filterAdminProductsByStore(' + storeIdJs + ',\'' + storeNameJs + '\')">🛍️ View Products</button>' +
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

function initAdmin() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user || !isAdmin(user.email)) { window.location.href = 'login.html'; return; }
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
   var ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
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
            var displayImg   = o.img  || item.img;
            var displayName  = o.name || item.name;
            var rawPrice     = o.price !== undefined ? o.price : (item.price || item.pricePerLitre || 0);
            var displayPrice = rawPrice.toLocaleString('en-IN');
            var displayDesc  = o.desc || item.desc || '';
            var modified     = !isCustom && !!ov[item.id];

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
                                '<div class="admin-card-price">&#8377;' + displayPrice + '</div>' +
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
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   const o  = ov[itemId] || {};
   _editId  = itemId;
   document.getElementById('modalTitle').textContent  = 'Edit: ' + item.name;
   document.getElementById('modalImgUrl').value  = o.img  || item.img;
   document.getElementById('modalName').value    = o.name || item.name;
   document.getElementById('modalPrice').value   = o.price !== undefined ? o.price : (item.price || item.pricePerLitre);
   document.getElementById('modalDesc').value    = o.desc || item.desc;
   document.getElementById('modalBadge').value   = o.badge || item.badge || '';
   document.getElementById('modalPreviewImg').src = o.img  || item.img;
   document.getElementById('catSelectRow').classList.add('hidden');
   document.getElementById('badgeRow').classList.remove('hidden');
   document.getElementById('adminBtnSave').textContent  = '💾 Save Changes';
   document.getElementById('adminBtnReset').classList.remove('hidden');
   // Hide variants toggle in edit mode (variants not editable after creation)
   document.getElementById('variantsToggleRow').classList.add('hidden');
   document.getElementById('variantsSectionRow').classList.add('hidden');
   document.getElementById('modalHasVariants').checked = false;
   document.getElementById('modalPriceRow').classList.remove('hidden');
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
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   var sel = document.getElementById('modalStoreOwner');
   var storeId   = sel ? sel.value : '';
   var storeName = storeId ? getStoreName(storeId) : '';
   ov[_editId] = {
      img:       document.getElementById('modalImgUrl').value.trim(),
      name:      document.getElementById('modalName').value.trim(),
      price:     parseFloat(document.getElementById('modalPrice').value),
      desc:      document.getElementById('modalDesc').value.trim(),
      badge:     document.getElementById('modalBadge').value.trim(),
      storeId:   storeId,
      storeName: storeName
   };
   localStorage.setItem('adminProductOverrides', JSON.stringify(ov));
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
      const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
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
   const items = JSON.parse(localStorage.getItem('adminNewItems') || '[]');
   items.push(newItem);
   localStorage.setItem('adminNewItems', JSON.stringify(items));
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
   let items = JSON.parse(localStorage.getItem('adminNewItems') || '[]');
   items = items.filter(i => i.id !== id);
   localStorage.setItem('adminNewItems', JSON.stringify(items));
   // Remove from in-memory products immediately
   Object.values(products).forEach(function(cat) {
      cat.items = cat.items.filter(function(i) { return i.id !== id; });
   });
   renderAdminGrid();
   showAdminToast('🗑️ Product deleted.');
}

function resetProductEdit() {
   if (!_editId) return;
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   delete ov[_editId];
   localStorage.setItem('adminProductOverrides', JSON.stringify(ov));
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
   ['products', 'stores', 'settings', 'users'].forEach(function(t) {
      var el  = document.getElementById('tab-' + t);
      var btn = document.getElementById('tab-' + t + '-btn');
      if (el)  el.classList.toggle('hidden', t !== tab);
      if (btn) btn.classList.toggle('active', t === tab);
   });
   if (tab === 'settings') loadSettingsForm();
   if (tab === 'users')    renderUserList('all');
   if (tab === 'stores')   renderAdminStores();
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

function getAdminSettings() {
   return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
}

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
   localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
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
function initProfile() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { window.location.href = 'login.html'; return; }
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
   ['info', 'addresses', 'orders', 'wishlist', 'cards'].forEach(t => {
      document.getElementById('ptab-' + t).classList.toggle('hidden', t !== tab);
      document.getElementById('ptab-' + t + '-btn').classList.toggle('active', t === tab);
   });
   if (tab === 'addresses') renderAddresses();
   if (tab === 'orders')    renderOrders();
   if (tab === 'wishlist')  renderWishlistTab();
   if (tab === 'cards')     renderCards();
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

function getAddresses(email) { return JSON.parse(localStorage.getItem('addresses_' + email) || '[]'); }
function saveAddressesData(email, arr) { localStorage.setItem('addresses_' + email, JSON.stringify(arr)); }

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
   const orders = JSON.parse(localStorage.getItem('orders_' + user.email) || '[]');
   const list   = document.getElementById('ordersList');
   if (!orders.length) { list.innerHTML = '<p class="prof-empty">No orders placed yet.</p>'; return; }

   // Build a live status map from allOrders (shop owner updates land here first)
   const allOrders  = JSON.parse(localStorage.getItem('allOrders') || '[]');
   const statusMap  = {};
   allOrders.forEach(o => { statusMap[o.orderId] = o.status; });

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

// ── WISHLIST ──
function getWishlist(email)          { return JSON.parse(localStorage.getItem('wishlist_' + email) || '[]'); }
function saveWishlistData(email, arr) { localStorage.setItem('wishlist_' + email, JSON.stringify(arr)); }

function toggleWishlist(itemId, catKey, btn) {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   if (!user) { alert('Please log in to use Wishlist.'); return; }
   const wl = getWishlist(user.email);
   const idx = wl.findIndex(w => w.id === itemId);
   if (idx >= 0) {
      wl.splice(idx, 1);
      if (btn) { btn.textContent = '🤍'; btn.classList.remove('wished'); btn.title = 'Add to Wishlist'; }
      showToast('Removed from Wishlist');
   } else {
      const cat  = products[catKey];
      const item = cat && cat.items.find(i => i.id === itemId);
      if (item) wl.push({ id: item.id, catKey, name: item.name, price: item.price || item.pricePerLitre, img: item.img, desc: item.desc, badge: item.badge });
      if (btn) { btn.textContent = '❤️'; btn.classList.add('wished'); btn.title = 'Remove from Wishlist'; }
      showToast('❤️ Added to Wishlist!');
   }
   saveWishlistData(user.email, wl);
}

function renderWishlistTab() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const wl   = user ? getWishlist(user.email) : [];
   const container = document.getElementById('wishlistItems');
   if (!wl.length) { container.innerHTML = '<p class="prof-empty">No items in wishlist yet.<br>Click 🤍 on any product to add it.</p>'; return; }
   container.innerHTML = wl.map(item => `
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
      </div>`).join('');
}

function removeFromWishlistTab(itemId) {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const wl   = getWishlist(user.email).filter(w => w.id !== itemId);
   saveWishlistData(user.email, wl);
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
function getSavedCards(email)       { return JSON.parse(localStorage.getItem('savedCards_' + email) || '[]'); }
function saveCardsData(email, arr)  { localStorage.setItem('savedCards_' + email, JSON.stringify(arr)); }

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

function saveCard() {
   const number = document.getElementById('card-number').value.replace(/\s/g, '');
   const expiry = document.getElementById('card-expiry').value.trim();
   const name   = document.getElementById('card-name').value.trim();
   if (number.length < 12 || !expiry || !name) { alert('Please fill in Card Number, Expiry and Name.'); return; }
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const cards = getSavedCards(user.email);
   const last4 = number.slice(-4);
   const brand = getCardBrand(number);
   if (cards.some(c => c.last4 === last4 && c.expiry === expiry)) { alert('This card is already saved.'); return; }
   cards.push({ last4, expiry, nameOnCard: name, brand });
   saveCardsData(user.email, cards);
   closeCardModal();
   renderCards();
   showProfileToast('✅ Card saved! CVV will be asked at payment time.');
}

function deleteCard(idx) {
   if (!confirm('Remove this card?')) return;
   const user  = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const cards = getSavedCards(user.email);
   cards.splice(idx, 1);
   saveCardsData(user.email, cards);
   renderCards();
   showProfileToast('🗑️ Card removed.');
}

// ── SAVED CARDS IN PAYMENT MODAL ──
let _selectedSavedCard = -1;

function loadSavedCardsInPayment() {
   const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
   const container = document.getElementById('savedCardsInPayment');
   if (!container || !user) return;
   const cards = getSavedCards(user.email);
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
