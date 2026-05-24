let cart = [];
const pageQty = {};

const products = {
   sofa: {
      title: 'Sofas',
      type: 'regular',
      category: 'Furniture',
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
      });
   });
})();

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
      cats.forEach(({
         catKey,
         catData
      }) => {
         catData.items.forEach(item => renderCard({
            ...item,
            type: catData.type
         }, catKey, grid));
      });
   });

   window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
   grid.innerHTML = '';
   data.items.forEach(item => renderCard({
      ...item,
      type: data.type
   }, category, grid));
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

// ── RENDER SINGLE CARD ──
function renderCard(item, catKey, grid) {
   pageQty[item.id] = pageQty[item.id] || 1;
   const isMilk = item.type === 'milk';
   const displayPrice = isMilk ?
      `₹${item.pricePerLitre}/litre` :
      `₹${item.price.toLocaleString('en-IN')}`;

   const card = document.createElement('div');
   card.className = 'product-card';
   card.id = 'card_' + item.id;
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
 <option value="0.5">0.5 Litre — ₹${Math.round(item.pricePerLitre*0.5)}</option>
 <option value="1" selected>1 Litre — ₹${item.pricePerLitre}</option>
 <option value="2">2 Litres — ₹${item.pricePerLitre*2}</option>
 <option value="3">3 Litres — ₹${item.pricePerLitre*3}</option>
 <option value="5">5 Litres — ₹${item.pricePerLitre*5}</option>
 </select>
 </div>` : `
 <div class="qty-controls">
 <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
 <span class="qty-display" id="qty_${item.id}">${pageQty[item.id]}</span>
 <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
 </div>`}
 <div class="product-footer">
 <span class="product-price" id="price_${item.id}">${displayPrice}</span>
 <button class="btn-cart" onclick="addToCart('${item.id}','${catKey}')"> Add</button>
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

// ── ADD TO CART ──
function addToCart(itemId, catKey) {
   const data = products[catKey];
   const item = data.items.find(i => i.id === itemId);
   if (!item) return;

   const isMilk = data.type === 'milk';
   let qty, unitPrice, label, cartId;

   if (isMilk) {
      const litreEl = document.getElementById('litre_' + itemId);
      const litres = parseFloat(litreEl ? litreEl.value : 1);
      unitPrice = Math.round(item.pricePerLitre * litres);
      qty = 1;
      label = `${item.name} (${litres}L)`;
      cartId = itemId + '_' + litres;
   } else {
      qty = pageQty[itemId] || 1;
      unitPrice = item.price;
      label = item.name;
      cartId = itemId;
   }

   const existing = cart.find(c => c.id === cartId);
   if (existing) {
      existing.qty += qty;
   } else {
      cart.push({
         id: cartId,
         name: label,
         price: unitPrice,
         qty,
         img: item.img
      });
   }

   updateCartUI();
   showToast(` "${label}" added to cart!`);
}

// ── CART UI ──
function updateCartUI() {
   const totalItems = cart.reduce((s, c) => s + c.qty, 0);
   const totalCost = cart.reduce((s, c) => s + c.price * c.qty, 0);

   document.getElementById('cartBadge').textContent = totalItems;
   document.getElementById('cartTotalItems').textContent = totalItems;
   document.getElementById('cartTotalCost').textContent = '₹' + totalCost.toLocaleString('en-IN');

   const el = document.getElementById('cartItems');
   if (cart.length === 0) {
      el.innerHTML = '<div class="cart-empty"> Your cart is empty</div>';
      return;
   }
   el.innerHTML = cart.map(c => `
 <div class="cart-item">
 <img src="${c.img}" alt="${c.name}"/>
 <div class="cart-item-info">
 <div class="cart-item-name">${c.name}</div>
 <div class="cart-item-price">₹${c.price.toLocaleString('en-IN')} each</div>
 <div class="cart-item-qty">
 <button class="cart-qty-btn" onclick="changeCartQty('${c.id}',-1)">−</button>
 <span style="font-size:0.88rem;font-weight:bold">${c.qty}</span>
 <button class="cart-qty-btn" onclick="changeCartQty('${c.id}',1)">+</button>
 <span style="font-size:0.82rem;color:#888;margin-left:4px">= ₹${(c.price*c.qty).toLocaleString('en-IN')}</span>
 </div>
 </div>
 <button class="cart-item-remove" onclick="removeFromCart('${c.id}')"> </button>
 </div>
 `).join('');
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

// ── CHECKOUT → RAZORPAY ──
function checkout() {
   if (cart.length === 0) {
      showToast(' Your cart is empty!');
      return;
   }
   closeCart();
   const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
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
function goHome() {
   document.getElementById('heroSection').classList.remove('hidden');
   document.getElementById('productsSection').classList.add('hidden');
   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   const allCat = document.getElementById('cat-all');
   if (allCat) allCat.classList.add('active');
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
   grid.innerHTML = '';
   Object.entries(products).forEach(([catKey, catData]) => {
      if (catData.category === groupName) {
         catData.items.forEach(item => renderCard({
            ...item,
            type: catData.type
         }, catKey, grid));
      }
   });
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
}

function catClick(cat) {
   document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
   const el = document.getElementById('cat-' + cat);
   if (el) el.classList.add('active');
   const categoryMap = {
      furniture: 'Furniture',
      marbles: 'Marbles',
      flooring: 'Flooring',
      decor: 'Decor',
      drinks: 'Cool Drinks',
      milk: 'Milk',
      bricks: 'Bricks',
      soil: 'Soil',
      toys: '3D Toys',
      fancy: 'Fancy Items'
   };
   if (cat === 'all') {
      showAllProducts();
   } else if (categoryMap[cat]) {
      showByCategory(categoryMap[cat]);
   }
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
   const users = getUsers();
   if (users.find(u => u.email === email)) {
      alert('An account with this email already exists. Please login.');
      window.location.href = 'login.html';
      return;
   }
   users.push({ name, email, password });
   saveUsers(users);
   alert('Account created! Please login.');
   window.location.href = 'login.html';
}

function login() {
   const email = document.getElementById('loginEmail').value.trim();
   const password = document.getElementById('loginPassword').value;
   const errorMsg = document.getElementById('loginError');
   const users = getUsers();
   const user = users.find(u => u.email === email && u.password === password);
   if (!user) {
      errorMsg.classList.remove('hidden');
      return;
   }
   errorMsg.classList.add('hidden');
   localStorage.setItem('loggedInUser', JSON.stringify(user));
   window.location.href = 'home.html';
}

function checkLogin() {
   let user = JSON.parse(localStorage.getItem('loggedInUser'));
   if (!user) {
      window.location.href = 'login.html';
      return;
   }
   // Always re-fetch from users array so latest flags (like isAdmin) are picked up
   const fresh = getUsers().find(u => u.email === user.email);
   if (fresh) user = fresh;
   // Keep session in sync
   localStorage.setItem('loggedInUser', JSON.stringify(user));
   document.getElementById('welcomeUser').textContent = user.name;
   document.getElementById('heroGreeting').textContent = 'Welcome, ' + user.name + '!';
   const header = document.getElementById('userDropdownName');
   if (header) header.textContent = '👋 Hi, ' + user.name;
   updateAddressDisplay(user.email);
   if (user.isAdmin) {
      const adminLink = document.getElementById('adminPanelLink');
      if (adminLink) adminLink.classList.remove('hidden');
   }
}

function seedAdmin() {
   let users = getUsers();
   // Remove old placeholder admin
   users = users.filter(u => u.email !== 'admin@mystore.com');
   const existing = users.find(u => u.email === 'g.ramkumar3127@gmail.com');
   if (existing) {
      // Ensure isAdmin flag is set even if account was created via normal signup
      existing.isAdmin = true;
      existing.password = 'Gsggrl@703662';
   } else {
      users.push({ name: 'Admin', email: 'g.ramkumar3127@gmail.com', password: 'Gsggrl@703662', isAdmin: true });
   }
   saveUsers(users);
}

function updateAddressDisplay(email) {
   const el = document.getElementById('headerAddress');
   if (!el) return;
   const addresses = JSON.parse(localStorage.getItem('addresses_' + email) || '[]');
   if (addresses.length === 0) {
      el.innerHTML = '📍 <span>Add Address</span>';
   } else {
      const first = addresses[0];
      el.innerHTML = `🏠 <strong>${first.label || 'HOME'}</strong> ${first.line} &gt;`;
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

// Seed admin first so isAdmin flag is ready before checkLogin reads it
seedAdmin();

if (document.getElementById('heroGreeting')) {
   checkLogin();
   updateCartUI();
   const si = document.getElementById('searchInput');
   if (si) si.value = '';
}

// ── ADMIN PANEL ──
let _editId = null;

function initAdmin() {
   const user = JSON.parse(localStorage.getItem('loggedInUser'));
   if (!user || !user.isAdmin) { window.location.href = 'login.html'; return; }
   document.getElementById('adminUserName').textContent = user.name;
   renderAdminGrid();
}

function renderAdminGrid() {
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   const container = document.getElementById('adminContent');
   container.innerHTML = '';
   Object.entries(products).forEach(([catKey, catData]) => {
      const section = document.createElement('div');
      section.className = 'admin-section';
      section.innerHTML = `<h2 class="admin-section-title">${catData.category} — ${catData.title}</h2>`;
      const grid = document.createElement('div');
      grid.className = 'admin-product-grid';
      catData.items.forEach(item => {
         const o = ov[item.id] || {};
         const displayImg = o.img || item.img;
         const displayName = o.name || item.name;
         const displayPrice = (o.price !== undefined ? o.price : (item.price || item.pricePerLitre)).toLocaleString('en-IN');
         const displayDesc = o.desc || item.desc;
         const modified = !!ov[item.id];
         const card = document.createElement('div');
         card.className = 'admin-product-card' + (modified ? ' modified' : '');
         card.innerHTML = `
            <div class="admin-card-img-wrap">
               <img src="${displayImg}" alt="${displayName}" loading="lazy"
                    onerror="this.src='https://placehold.co/200x140?text=No+Image'"/>
               ${modified ? '<span class="admin-modified-badge">Modified</span>' : ''}
            </div>
            <div class="admin-card-info">
               <div class="admin-card-name">${displayName}</div>
               <div class="admin-card-price">₹${displayPrice}</div>
               <div class="admin-card-desc">${displayDesc}</div>
            </div>
            <button class="admin-edit-btn" onclick="openEditModal('${item.id}','${catKey}')">✏️ Edit</button>`;
         grid.appendChild(card);
      });
      section.appendChild(grid);
      container.appendChild(section);
   });
}

function openEditModal(itemId, catKey) {
   const cat = products[catKey];
   const item = cat.items.find(i => i.id === itemId);
   if (!item) return;
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   const o = ov[itemId] || {};
   _editId = itemId;
   document.getElementById('modalTitle').textContent = 'Edit: ' + item.name;
   document.getElementById('modalImgUrl').value = o.img || item.img;
   document.getElementById('modalName').value = o.name || item.name;
   document.getElementById('modalPrice').value = o.price !== undefined ? o.price : (item.price || item.pricePerLitre);
   document.getElementById('modalDesc').value = o.desc || item.desc;
   document.getElementById('modalPreviewImg').src = o.img || item.img;
   document.getElementById('editModal').classList.remove('hidden');
}

function previewModalImg() {
   const url = document.getElementById('modalImgUrl').value.trim();
   if (url) document.getElementById('modalPreviewImg').src = url;
}

function saveProductEdit() {
   if (!_editId) return;
   const ov = JSON.parse(localStorage.getItem('adminProductOverrides') || '{}');
   ov[_editId] = {
      img:   document.getElementById('modalImgUrl').value.trim(),
      name:  document.getElementById('modalName').value.trim(),
      price: parseFloat(document.getElementById('modalPrice').value),
      desc:  document.getElementById('modalDesc').value.trim()
   };
   localStorage.setItem('adminProductOverrides', JSON.stringify(ov));
   closeEditModal();
   renderAdminGrid();
   showAdminToast('✅ Saved! Changes will appear in the store.');
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
   _editId = null;
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
