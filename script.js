// ── PRODUCT DATA ──
const products = {

   sofa: {
      title: 'Sofas',
      items: [{
            name: 'Royal Velvet Sofa',
            price: '₹45,999',
            desc: '3-seater, velvet finish, solid wood legs',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'L-Shape Corner Sofa',
            price: '₹78,500',
            desc: 'Premium fabric, 5-seater L-shape',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'New'
         },
         {
            name: 'Leather Recliner Sofa',
            price: '₹95,000',
            desc: 'Genuine leather, reclining feature',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Compact 2-Seater',
            price: '₹22,999',
            desc: 'Space-saving design, microfiber',
            img: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   diningTable: {
      title: 'Dining Tables',
      items: [{
            name: 'Teak Wood Dining Set',
            price: '₹38,500',
            desc: '6-seater, solid teak wood finish',
            img: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Glass Top Table',
            price: '₹25,999',
            desc: '4-seater, tempered glass, metal legs',
            img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Marble Dining Table',
            price: '₹65,000',
            desc: '6-seater, white marble top',
            img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Folding Dining Table',
            price: '₹12,500',
            desc: '4-seater foldable, space saving',
            img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   wardrobe: {
      title: 'Wardrobes',
      items: [{
            name: 'Sliding Door Wardrobe',
            price: '₹42,000',
            desc: '3-door sliding, mirror finish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Wooden 4-Door Wardrobe',
            price: '₹55,000',
            desc: 'Solid sheesham wood, 4 door',
            img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Walk-in Wardrobe Unit',
            price: '₹1,20,000',
            desc: 'Modular, customizable layout',
            img: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80',
            badge: 'Luxury'
         },
         {
            name: 'Compact 2-Door',
            price: '₹18,500',
            desc: '2-door, laminate finish, shelves',
            img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   bedFrame: {
      title: 'Bed Frames',
      items: [{
            name: 'King Size Wooden Bed',
            price: '₹35,000',
            desc: 'Solid wood, king size, storage',
            img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Upholstered Bed',
            price: '₹48,000',
            desc: 'Velvet headboard, queen size',
            img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Metal Platform Bed',
            price: '₹15,999',
            desc: 'Modern metal frame, double size',
            img: 'https://images.unsplash.com/photo-1536437075651-01d675529a6b?w=400&q=80',
            badge: 'Budget'
         },
         {
            name: 'Poster Bed',
            price: '₹72,000',
            desc: 'Classic 4-poster, teak wood',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },

   whiteMarble: {
      title: 'White Marble',
      items: [{
            name: 'Statuario White Marble',
            price: '₹850/sq ft',
            desc: 'Premium Italian grade, glossy finish',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Makrana White Marble',
            price: '₹320/sq ft',
            desc: 'Pure white, Indian origin',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Carrara White Marble',
            price: '₹1,200/sq ft',
            desc: 'Fine grey veins, luxury finish',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Luxury'
         },
         {
            name: 'Fantasy White Marble',
            price: '₹450/sq ft',
            desc: 'Mixed veining, polished surface',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Trending'
         }
      ]
   },

   blackMarble: {
      title: 'Black Marble',
      items: [{
            name: 'Nero Marquina',
            price: '₹1,100/sq ft',
            desc: 'Deep black, white veins, imported',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Black Galaxy Marble',
            price: '₹750/sq ft',
            desc: 'Black with gold speckles',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Absolute Black Marble',
            price: '₹500/sq ft',
            desc: 'Solid black, mirror polish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Black Forest Marble',
            price: '₹650/sq ft',
            desc: 'Dark with green & gold veins',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'New'
         }
      ]
   },

   italianMarble: {
      title: 'Italian Marble',
      items: [{
            name: 'Botticino Marble',
            price: '₹1,400/sq ft',
            desc: 'Beige tones, elegant veining',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Luxury'
         },
         {
            name: 'Emperador Dark',
            price: '₹1,600/sq ft',
            desc: 'Rich brown, white veins',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Rosa Perlino',
            price: '₹1,800/sq ft',
            desc: 'Pink-rose tones, rare find',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Rare'
         },
         {
            name: 'Verde Alpi',
            price: '₹2,000/sq ft',
            desc: 'Green marble, luxury interiors',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Exclusive'
         }
      ]
   },

   granite: {
      title: 'Granite',
      items: [{
            name: 'Black Pearl Granite',
            price: '₹180/sq ft',
            desc: 'Dark black, silver sparkle',
            img: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Kashmir White Granite',
            price: '₹220/sq ft',
            desc: 'White base, grey & pink flecks',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Popular'
         },
         {
            name: 'Tan Brown Granite',
            price: '₹160/sq ft',
            desc: 'Brown tones, durable surface',
            img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=80',
            badge: 'Budget'
         },
         {
            name: 'Blue Pearl Granite',
            price: '₹350/sq ft',
            desc: 'Imported, blue shimmer finish',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Premium'
         }
      ]
   },

   hardwood: {
      title: 'Hardwood Flooring',
      items: [{
            name: 'Oak Hardwood Floor',
            price: '₹280/sq ft',
            desc: 'Natural oak, scratch resistant',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Teak Wood Flooring',
            price: '₹420/sq ft',
            desc: 'Premium teak, water resistant',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Walnut Wood Floor',
            price: '₹550/sq ft',
            desc: 'Dark walnut, luxury finish',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'Luxury'
         },
         {
            name: 'Pine Wood Flooring',
            price: '₹180/sq ft',
            desc: 'Light pine, rustic look',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   vinyl: {
      title: 'Vinyl Flooring',
      items: [{
            name: 'Wood-Look Vinyl',
            price: '₹85/sq ft',
            desc: 'Realistic wood texture, waterproof',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Stone-Look Vinyl',
            price: '₹95/sq ft',
            desc: 'Marble-like pattern, durable',
            img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Anti-Slip Vinyl',
            price: '₹110/sq ft',
            desc: 'Textured surface, bathroom safe',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'New'
         },
         {
            name: 'Commercial Vinyl',
            price: '₹70/sq ft',
            desc: 'Heavy duty, office & shop use',
            img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   ceramicTiles: {
      title: 'Ceramic Tiles',
      items: [{
            name: 'Glossy White Tiles',
            price: '₹55/sq ft',
            desc: '60x60 cm, glossy finish',
            img: 'https://images.unsplash.com/photo-1615971677499-5467cbab01b0?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Wood-Effect Tiles',
            price: '₹75/sq ft',
            desc: 'Plank style, natural wood look',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Moroccan Pattern Tiles',
            price: '₹120/sq ft',
            desc: 'Decorative pattern, handcrafted',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Anti-Skid Floor Tiles',
            price: '₹65/sq ft',
            desc: 'Matt finish, slip resistant',
            img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80',
            badge: 'Safe'
         }
      ]
   },

   laminate: {
      title: 'Laminate Flooring',
      items: [{
            name: 'Oak Laminate',
            price: '₹95/sq ft',
            desc: '8mm thick, AC4 rating',
            img: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Walnut Laminate',
            price: '₹120/sq ft',
            desc: '12mm thick, premium finish',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Grey Concrete Look',
            price: '₹110/sq ft',
            desc: 'Modern concrete texture',
            img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Budget Laminate',
            price: '₹65/sq ft',
            desc: '7mm thick, easy install',
            img: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   wallArt: {
      title: 'Wall Art',
      items: [{
            name: 'Abstract Canvas Print',
            price: '₹3,500',
            desc: '24x36 inch, framed canvas',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Metal Wall Sculpture',
            price: '₹8,500',
            desc: 'Handcrafted metal, 3D design',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Wooden Wall Panel',
            price: '₹6,200',
            desc: 'Laser cut wood, geometric',
            img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            badge: 'New'
         },
         {
            name: 'Photo Wall Collage',
            price: '₹1,800',
            desc: 'Set of 6 frames, mixed sizes',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Budget'
         }
      ]
   },

   curtains: {
      title: 'Curtains',
      items: [{
            name: 'Velvet Blackout Curtains',
            price: '₹4,200',
            desc: 'Per pair, 7ft, blackout lining',
            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            badge: 'Bestseller'
         },
         {
            name: 'Sheer Linen Curtains',
            price: '₹2,800',
            desc: 'Per pair, light filtering',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Printed Cotton Curtains',
            price: '₹1,800',
            desc: 'Floral print, per pair',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'Budget'
         },
         {
            name: 'Motorized Curtains',
            price: '₹18,000',
            desc: 'Smart home, remote control',
            img: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80',
            badge: 'Smart'
         }
      ]
   },

   lighting: {
      title: 'Lighting',
      items: [{
            name: 'Crystal Chandelier',
            price: '₹28,000',
            desc: 'K9 crystal, 12-light, dining room',
            img: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80',
            badge: 'Luxury'
         },
         {
            name: 'Modern Pendant Light',
            price: '₹4,500',
            desc: 'Matte black, adjustable height',
            img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'LED Strip Lights',
            price: '₹1,200',
            desc: '5 meter roll, RGB, remote',
            img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80',
            badge: 'Budget'
         },
         {
            name: 'Floor Lamp',
            price: '₹6,800',
            desc: 'Arc design, warm white LED',
            img: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=400&q=80',
            badge: 'Bestseller'
         }
      ]
   },

   rugs: {
      title: 'Rugs',
      items: [{
            name: 'Persian Wool Rug',
            price: '₹15,500',
            desc: '5x7 ft, hand-knotted wool',
            img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
            badge: 'Premium'
         },
         {
            name: 'Modern Geometric Rug',
            price: '₹6,200',
            desc: '4x6 ft, cotton blend',
            img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
            badge: 'Trending'
         },
         {
            name: 'Jute Natural Rug',
            price: '₹3,800',
            desc: '5x7 ft, eco-friendly jute',
            img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
            badge: 'Eco'
         },
         {
            name: 'Shaggy Fluffy Rug',
            price: '₹4,500',
            desc: '4x6 ft, ultra-soft microfiber',
            img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
            badge: 'Cozy'
         }
      ]
   }
};

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
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
<img src="${item.img}" alt="${item.name}" loading="lazy"/>
<div class="product-info">
<span class="badge">${item.badge}</span>
<div class="product-name">${item.name}</div>
<div class="product-desc">${item.desc}</div>
<div class="product-footer">
<span class="product-price">${item.price}</span>
<button class="btn-cart" onclick="addToCart('${item.name}')">Add to Cart</button>
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

// ── GO BACK HOME ──
function goHome() {
   document.getElementById('heroSection').classList.remove('hidden');
   document.getElementById('productsSection').classList.add('hidden');
}

// ── ADD TO CART ──
function addToCart(name) {
   const toast = document.getElementById('toast');
   toast.textContent = `✅ "${name}" added to cart!`;
   toast.classList.remove('hidden');
   setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ── SIGN UP ──
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

// ── LOGIN ──
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

// ── PROTECT HOME PAGE ──
function checkLogin() {
   const user = JSON.parse(localStorage.getItem('loggedInUser'));
   if (!user) {
      window.location.href = 'login.html';
      return;
   }
   document.getElementById('welcomeUser').textContent = 'Hi, ' + user.name;
   document.getElementById('heroGreeting').textContent = 'Welcome, ' + user.name + '!';
}

// ── LOGOUT ──
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
}
