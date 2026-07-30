/* ==========================================================================
   VAZHA ILAI (வாழை இலை) - BANANA LEAF RESTAURANT APPLICATION ENGINE
   Pure Vanilla JS - Zero APIs - LocalStorage State Management
   ========================================================================== */

// --- INITIAL 20 TAMIL INSPIRED MENU ITEMS ---
const INITIAL_MENU = [
  {
    id: 1,
    tamilName: "சாம்பார் சாதம்",
    englishName: "Signature Sambar Sadam",
    category: "meals",
    price: 120,
    status: "In Stock",
    stockQty: 45,
    description: "Traditional rice slow-cooked with drumstick, small onions, ghee & hand-ground sambar spices.",
    calories: "340 kcal",
    diet: "Pure Veg • Ghee",
    emojiIcon: "🍲"
  },
  {
    id: 2,
    tamilName: "பூண்டு ரசம் சாதம்",
    englishName: "Poondu Rasam Sadam",
    category: "meals",
    price: 110,
    status: "In Stock",
    stockQty: 30,
    description: "Steaming hot rice infused with crushed country garlic, black pepper, tamarind & digestive herbs.",
    calories: "280 kcal",
    diet: "Immunity Boost",
    emojiIcon: "🥣"
  },
  {
    id: 3,
    tamilName: "அரிசி பருப்பு சாதம்",
    englishName: "Kongu Arisi Paruppu Sadam",
    category: "meals",
    price: 130,
    status: "In Stock",
    stockQty: 25,
    description: "Famous Kongu region delicacy made with red rice, toor dal, cumin & tempered in cow ghee.",
    calories: "380 kcal",
    diet: "Kongu Special",
    emojiIcon: "🌾"
  },
  {
    id: 4,
    tamilName: "மதுரை ஜிகர்தண்டா",
    englishName: "Madurai Special Jigarthanda",
    category: "beverages",
    price: 90,
    status: "In Stock",
    stockQty: 50,
    description: "Cooling royal drink crafted with almond gum (badam pisin), nannari syrup, thick condensed milk & basundi ice cream.",
    calories: "240 kcal",
    diet: "Madurai Icon",
    emojiIcon: "🍨"
  },
  {
    id: 5,
    tamilName: "புட்டு & கடலைக்கறி",
    englishName: "Puttu & Kadala Curry",
    category: "tiffin",
    price: 115,
    status: "In Stock",
    stockQty: 20,
    description: "Steamed red rice puttu layered with fresh grated coconut served with spicy black chickpea curry.",
    calories: "310 kcal",
    diet: "High Protein",
    emojiIcon: "🥥"
  },
  {
    id: 6,
    tamilName: "நெய் ரவா கேசரி",
    englishName: "Ghee Rava Kesari",
    category: "sweets",
    price: 75,
    status: "In Stock",
    stockQty: 40,
    description: "Melt-in-mouth roasted semolina pudding laced with saffron, pure cow ghee, cashews & raisins.",
    calories: "260 kcal",
    diet: "Traditional Sweet",
    emojiIcon: "🍮"
  },
  {
    id: 7,
    tamilName: "இளநீர் பாயாசம்",
    englishName: "Elaneer Tender Coconut Payasam",
    category: "sweets",
    price: 95,
    status: "In Stock",
    stockQty: 18,
    description: "Exquisite sweet dessert prepared with fresh tender coconut water, soft coconut pulp & cardamoms.",
    calories: "210 kcal",
    diet: "Chef's Signature",
    emojiIcon: "🌴"
  },
  {
    id: 8,
    tamilName: "தாளித்த மோர்",
    englishName: "Spicy Moru / Buttermilk",
    category: "beverages",
    price: 40,
    status: "In Stock",
    stockQty: 60,
    description: "Churned churned country curd seasoned with mustard, curry leaves, green chillies & fresh ginger.",
    calories: "60 kcal",
    diet: "Probiotic Digest",
    emojiIcon: "🥛"
  },
  {
    id: 9,
    tamilName: "மாம்பழ லஸ்ஸி",
    englishName: "Fresh Mango Lassi",
    category: "beverages",
    price: 70,
    status: "In Stock",
    stockQty: 35,
    description: "Rich blended thick yoghurt crafted with fresh Alphonso mango pulp & subtle cardamom powder.",
    calories: "180 kcal",
    diet: "Summer Favorite",
    emojiIcon: "🥭"
  },
  {
    id: 10,
    tamilName: "கொத்து பரோட்டா",
    englishName: "Vegetable Kothu Parotta",
    category: "tiffin",
    price: 140,
    status: "In Stock",
    stockQty: 22,
    description: "Shredded layered parottas wok-tossed with farm vegetables, onions, curry leaves & aromatic salna.",
    calories: "450 kcal",
    diet: "Street Special",
    emojiIcon: "🫓"
  },
  {
    id: 11,
    tamilName: "செட்டிநாடு காளான் பிரியாணி",
    englishName: "Chettinad Mushroom Biryani",
    category: "meals",
    price: 180,
    status: "In Stock",
    stockQty: 15,
    description: "Seeraga samba rice dum-cooked with tender button mushrooms & fiery Chettinad stone-ground spices.",
    calories: "410 kcal",
    diet: "Seeraga Samba",
    emojiIcon: "🥘"
  },
  {
    id: 12,
    tamilName: "பூண்டு காரக்குழம்பு சாதம்",
    englishName: "Kara Kuzhambu Sadam",
    category: "meals",
    price: 125,
    status: "In Stock",
    stockQty: 28,
    description: "Tangy tamarind curry cooked with whole small garlic cloves & sesame oil, mixed with hot rice.",
    calories: "320 kcal",
    diet: "Tangy & Spicy",
    emojiIcon: "🧄"
  },
  {
    id: 13,
    tamilName: "பொடி இட்லி",
    englishName: "Ghee Podi Mini Idli (14 pcs)",
    category: "tiffin",
    price: 90,
    status: "In Stock",
    stockQty: 40,
    description: "Bite-sized fluffy steamed rice cakes tossed generously in spicy roasted gun powder & warm cow ghee.",
    calories: "290 kcal",
    diet: "Classic Tiffin",
    emojiIcon: "⚪"
  },
  {
    id: 14,
    tamilName: "மெது வடை",
    englishName: "Crispy Medu Vada (2 pcs)",
    category: "tiffin",
    price: 60,
    status: "In Stock",
    stockQty: 35,
    description: "Crispy golden lentil donuts spiced with crushed peppercorns & ginger, served with coconut chutney.",
    calories: "220 kcal",
    diet: "Crispy Snack",
    emojiIcon: "🍩"
  },
  {
    id: 15,
    tamilName: "நெய் ரோஸ்ட் தோசை",
    englishName: "Crispy Ghee Roast Dosa",
    category: "tiffin",
    price: 110,
    status: "In Stock",
    stockQty: 50,
    description: "Thin paper-crisp fermented crepe roasted with pure cow ghee, served with 3 chutneys & sambar.",
    calories: "350 kcal",
    diet: "All-Time Favorite",
    emojiIcon: "🌙"
  },
  {
    id: 16,
    tamilName: "ஆப்பம் & தேங்காய் பால்",
    englishName: "Appam with Coconut Milk",
    category: "tiffin",
    price: 100,
    status: "In Stock",
    stockQty: 20,
    description: "Bowl-shaped soft fermented rice pancake with crisp lacy edges served with sweetened cardamom coconut milk.",
    calories: "270 kcal",
    diet: "Gentle Digest",
    emojiIcon: "🍳"
  },
  {
    id: 17,
    tamilName: "மதுரை பருத்தி பால்",
    englishName: "Madurai Paruthi Paal",
    category: "beverages",
    price: 50,
    status: "In Stock",
    stockQty: 30,
    description: "Traditional herbal health drink made from cotton seed milk, raw palm jaggery, dry ginger & cardamom.",
    calories: "140 kcal",
    diet: "Heritage Tonic",
    emojiIcon: "🥛"
  },
  {
    id: 18,
    tamilName: "கார குழி பணியாரம்",
    englishName: "Kara Kuzhi Paniyaram (6 pcs)",
    category: "tiffin",
    price: 85,
    status: "In Stock",
    stockQty: 25,
    description: "Crispy outer & soft inner rice dumplings tempered with mustard, onions & green chillies.",
    calories: "230 kcal",
    diet: "Traditional Dumpling",
    emojiIcon: "🧆"
  },
  {
    id: 19,
    tamilName: "தயிர் சாதம்",
    englishName: "Thayir Sadam & Mango Pickle",
    category: "meals",
    price: 80,
    status: "In Stock",
    stockQty: 40,
    description: "Soothing set curd rice seasoned with mustard seeds, pomegranate seeds, grapes & spicy home mango pickle.",
    calories: "250 kcal",
    diet: "Comfort Food",
    emojiIcon: "🥣"
  },
  {
    id: 20,
    tamilName: "கும்பகோணம் டிகிரி காபி",
    englishName: "Kumbakonam Filter Degree Coffee",
    category: "beverages",
    price: 35,
    status: "In Stock",
    stockQty: 100,
    description: "Strong aromatic decoction brewed in brass filter, mixed with frothy full-cream cows milk & jaggery/sugar.",
    calories: "90 kcal",
    diet: "Iconic Brew",
    emojiIcon: "☕"
  }
];

// --- APP STATE ---
let state = {
  menu: JSON.parse(localStorage.getItem('vazha_menu')) || INITIAL_MENU,
  cart: JSON.parse(localStorage.getItem('vazha_cart')) || [],
  user: JSON.parse(localStorage.getItem('vazha_user')) || null,
  role: 'customer', // 'customer' or 'staff'
  discountCode: null,
  discountPercent: 0,
  reservations: JSON.parse(localStorage.getItem('vazha_reservations')) || [
    { id: 'VI-RES-101', name: 'Sundaram Murugan', phone: '9840123456', date: '2026-07-27', time: '01:00 PM', guests: 4, style: 'Traditional Floor Leaf', status: 'Confirmed' }
  ],
  orders: JSON.parse(localStorage.getItem('vazha_orders')) || [
    { id: '#VI-901', items: [{ name: 'சாம்பார் சாதம்', qty: 2, price: 120 }], total: 252, status: 'Preparing', type: 'Dine-In', time: '12:30 PM' }
  ],
  queue: JSON.parse(localStorage.getItem('vazha_queue')) || [
    { token: 'Q-101', name: 'Ramanathan', party: 3, status: 'Waiting' },
    { token: 'Q-102', name: 'Devi & Family', party: 5, status: 'Waiting' }
  ],
  collabs: JSON.parse(localStorage.getItem('vazha_collabs')) || [
    { name: 'Chennai Foodie Vlog', platform: 'YouTube', handle: '@chennaifoodie', followers: 45000, status: 'Approved' }
  ]
};

// Save helper
function saveState() {
  localStorage.setItem('vazha_menu', JSON.stringify(state.menu));
  localStorage.setItem('vazha_cart', JSON.stringify(state.cart));
  localStorage.setItem('vazha_user', JSON.stringify(state.user));
  localStorage.setItem('vazha_reservations', JSON.stringify(state.reservations));
  localStorage.setItem('vazha_orders', JSON.stringify(state.orders));
  localStorage.setItem('vazha_queue', JSON.stringify(state.queue));
  localStorage.setItem('vazha_collabs', JSON.stringify(state.collabs));
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateCartUI();
  updateUserAuthUI();
  setupEventListeners();
  updateQueueDisplay();
  initPortionPredictor();
});

// --- SMART HUNGER & FOOD WASTE PREDICTOR ---
function initPortionPredictor() {
  const hungerBtns = document.querySelectorAll('.hunger-btn');
  const dinerBtns = document.querySelectorAll('.diner-btn');
  const recTitle = document.getElementById('recTitle');
  const recAdvice = document.getElementById('recAdvice');
  const wasteHeadline = document.getElementById('wasteHeadline');
  const wasteSubtext = document.getElementById('wasteSubtext');
  const autoAddBtn = document.getElementById('autoAddComboBtn');

  if (!hungerBtns.length || !recTitle) return;

  let currentHunger = 'mid';
  let currentDiner = 'adults';

  const predictions = {
    'light-adults': {
      title: '1 Set Ghee Roast Dosa + Kumbakonam Degree Coffee',
      advice: '💡 <strong>Advisor Note:</strong> Perfectly light & refreshing. <em>Avoid ordering another full plate of rice!</em>',
      waste: '140g of rice',
      comboIds: [15, 20],
      subtext: 'Ordering extra meals when slightly hungry leads to ~140g cooked rice waste.'
    },
    'light-kids': {
      title: 'Ghee Podi Mini Idli + Fresh Mango Lassi',
      advice: '💡 <strong>Kid Note:</strong> Soft, digestive & nutritious portion for children.',
      waste: '120g of food',
      comboIds: [13, 9],
      subtext: 'Kids usually leave half-eaten heavy meals. This combo is 100% portion matched!'
    },
    'light-seniors': {
      title: 'Poondu Rasam Sadam + Spicy Moru',
      advice: '💡 <strong>Senior Note:</strong> Light, digestive & soothing for stomach wellness.',
      waste: '160g of rice',
      comboIds: [2, 8],
      subtext: 'Warm rasam is light on digestion and avoids evening stomach heaviness.'
    },
    'mid-adults': {
      title: 'Signature Sambar Sadam + Spicy Moru (OR Ghee Roast Dosa + Coffee)',
      advice: '💡 <strong>Advisor Note:</strong> Optimal balanced meal! <em>Avoid ordering an extra side dish.</em>',
      waste: '180g of rice',
      comboIds: [1, 8],
      subtext: 'You may waste ~180g of rice (worth ₹90) if you order 2 full main courses!'
    },
    'mid-kids': {
      title: 'Appam with Sweet Coconut Milk + Medu Vada',
      advice: '💡 <strong>Kid Note:</strong> Delicately sweet & easy to finish completely.',
      waste: '150g of food',
      comboIds: [16, 14],
      subtext: 'Appam & Coconut milk provides energy without food wastage.'
    },
    'mid-seniors': {
      title: 'Arisi Paruppu Sadam + Thayir Sadam & Pickle',
      advice: '💡 <strong>Senior Note:</strong> Traditional comfort meal with herbal digestive spices.',
      waste: '170g of rice',
      comboIds: [3, 19],
      subtext: 'Balanced protein & curd rice prevents nighttime acid reflux.'
    },
    'high-adults': {
      title: 'Chettinad Mushroom Biryani + Rasam Sadam + Rava Kesari',
      advice: '💡 <strong>Feast Note:</strong> Grand 3-course banana leaf feast. Enjoy wholeheartedly!',
      waste: '50g (Low Risk)',
      comboIds: [11, 2, 6],
      subtext: 'High hunger level matched! High appetite means zero food waste.'
    },
    'high-kids': {
      title: 'Vegetable Kothu Parotta + Elaneer Payasam',
      advice: '💡 <strong>High Energy:</strong> Perfect treat for active hungry kids!',
      waste: '90g of food',
      comboIds: [10, 7],
      subtext: 'Tasty kothu parotta keeps kids happy with sweet payasam to finish.'
    },
    'high-seniors': {
      title: 'Kongu Arisi Paruppu Sadam + Ghee Podi Idli + Degree Coffee',
      advice: '💡 <strong>Traditional Feast:</strong> Warm, satisfying & easy on digestion.',
      waste: '80g of food',
      comboIds: [3, 13, 20],
      subtext: 'Nourishing protein combo for hearty senior appetite.'
    }
  };

  function updatePrediction() {
    const key = `${currentHunger}-${currentDiner}`;
    const p = predictions[key] || predictions['mid-adults'];

    recTitle.textContent = p.title;
    recAdvice.innerHTML = p.advice;
    wasteHeadline.textContent = `You may waste ~${p.waste} if you over-order!`;
    wasteSubtext.textContent = p.subtext;

    if (autoAddBtn) {
      autoAddBtn.onclick = () => {
        p.comboIds.forEach(id => addToCart(id));
        showToast(`Auto-added portion combo to cart! 🌾 Save Food, Save Money.`);
      };
    }
  }

  hungerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      hungerBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentHunger = e.currentTarget.dataset.hunger;
      updatePrediction();
    });
  });

  dinerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      dinerBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentDiner = e.currentTarget.dataset.diner;
      updatePrediction();
    });
  });

  updatePrediction();
}

// --- MENU RENDERER ---
function renderMenu(category = 'all', searchQuery = '') {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = state.menu.filter(item => {
    const matchesCat = category === 'all' || item.category === category;
    const matchesSearch = item.tamilName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--color-muted-text);">
      <p style="font-size: 1.5rem; margin-bottom: 10px;">🍃</p>
      <p>No dishes found matching your search. Try another query!</p>
    </div>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'dish-card';

    let badgeClass = 'badge-instock';
    if (item.status === 'Low Stock') badgeClass = 'badge-lowstock';
    if (item.status === 'Out of Stock') badgeClass = 'badge-outstock';

    const isOut = item.status === 'Out of Stock';

    card.innerHTML = `
      <div class="dish-image-header">
        <span class="dish-emoji-icon">${item.emojiIcon}</span>
        <span class="stock-badge ${badgeClass}">${item.status}</span>
        <span class="diet-tag">${item.diet}</span>
      </div>
      <div class="dish-body">
        <h3 class="dish-tamil-title">${item.tamilName}</h3>
        <span class="dish-english-title">${item.englishName}</span>
        <p class="dish-desc">${item.description}</p>
        <div class="dish-footer">
          <span class="dish-price">₹${item.price}</span>
          <button class="btn btn-sm ${isOut ? 'btn-outline-dark' : 'btn-green'}" 
            ${isOut ? 'disabled' : ''} 
            onclick="addToCart(${item.id})">
            <i class="fa-solid fa-plus"></i> ${isOut ? 'Sold Out' : 'Add to Leaf'}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- CART MANAGEMENT ---
window.addToCart = function(dishId) {
  const item = state.menu.find(m => m.id === dishId);
  if (!item || item.status === 'Out of Stock') return;

  const existing = state.cart.find(c => c.id === dishId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: item.id, tamilName: item.tamilName, englishName: item.englishName, price: item.price, qty: 1 });
  }

  saveState();
  updateCartUI();
  showToast(`Added "${item.tamilName}" to your cart! 🍃`);
};

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const cartList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const taxEl = document.getElementById('cartTax');
  const totalEl = document.getElementById('cartTotal');

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (countEl) countEl.textContent = totalQty;

  if (!cartList) return;
  cartList.innerHTML = '';

  if (state.cart.length === 0) {
    cartList.innerHTML = `<div style="text-align:center; padding:50px 20px; color:var(--color-muted-text);">
      <p style="font-size:3rem; margin-bottom:10px;">🍃</p>
      <p style="font-family:var(--font-tamil); font-weight:700;">உங்கள் கூடை காலியாக உள்ளது</p>
      <p style="font-size:0.85rem;">Your banana leaf cart is empty. Add some delicious items!</p>
    </div>`;
    subtotalEl.textContent = '₹0';
    discountEl.textContent = '-₹0';
    taxEl.textContent = '₹0';
    totalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;

  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.tamilName}</h4>
        <p>₹${item.price} × ${item.qty} = ₹${itemTotal}</p>
      </div>
      <div class="cart-qty-controls">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    `;
    cartList.appendChild(row);
  });

  const discountAmount = Math.round(subtotal * (state.discountPercent / 100));
  const taxable = subtotal - discountAmount;
  const tax = Math.round(taxable * 0.05); // 5% GST
  const grandTotal = taxable + tax;

  subtotalEl.textContent = `₹${subtotal}`;
  discountEl.textContent = `-₹${discountAmount}`;
  taxEl.textContent = `₹${tax}`;
  totalEl.textContent = `₹${grandTotal}`;
}

window.changeQty = function(id, delta) {
  const item = state.cart.find(c => c.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(c => c.id !== id);
  }
  saveState();
  updateCartUI();
};

// --- AUTHENTICATION ENGINE ---
function updateUserAuthUI() {
  const textEl = document.getElementById('userAuthText');
  if (!textEl) return;

  if (state.user) {
    textEl.textContent = state.user.name.split(' ')[0];
  } else {
    textEl.textContent = 'Sign In';
  }
}

// --- STAFF DASHBOARD RENDERER ---
function renderStaffDashboard() {
  const body = document.getElementById('inventoryTableBody');
  if (!body) return;

  body.innerHTML = '';
  let outCount = 0;

  state.menu.forEach(item => {
    if (item.status === 'Out of Stock') outCount++;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>#${item.id}</td>
      <td><strong>${item.tamilName}</strong> <br><small>${item.englishName}</small></td>
      <td style="text-transform:capitalize;">${item.category}</td>
      <td>₹${item.price}</td>
      <td>${item.stockQty} pcs</td>
      <td>
        <span class="stock-badge ${item.status === 'In Stock' ? 'badge-instock' : 'badge-outstock'}">
          ${item.status}
        </span>
      </td>
      <td>
        <button class="stock-toggle-btn ${item.status === 'In Stock' ? 'btn-terracotta' : 'btn-green'}"
          onclick="toggleStockStatus(${item.id})">
          ${item.status === 'In Stock' ? 'Mark Out of Stock' : 'Mark Available'}
        </button>
      </td>
    `;
    body.appendChild(tr);
  });

  // Update Stats
  const outEl = document.getElementById('statOutOfStock');
  if (outEl) outEl.textContent = `${outCount} Items`;

  // Render Orders List
  renderStaffOrders();
  renderStaffReservations();
  renderStaffQueue();
  renderStaffCollabs();
}

window.toggleStockStatus = function(id) {
  const item = state.menu.find(m => m.id === id);
  if (!item) return;

  item.status = item.status === 'In Stock' ? 'Out of Stock' : 'In Stock';
  saveState();
  renderStaffDashboard();
  renderMenu();
  showToast(`Updated "${item.tamilName}" stock to ${item.status}!`);
};

function renderStaffOrders() {
  const list = document.getElementById('staffOrdersList');
  if (!list) return;
  list.innerHTML = '';

  state.orders.forEach(ord => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.style.padding = '16px';
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
        <strong>Token ${ord.id} (${ord.type})</strong>
        <span class="dash-badge badge-live">${ord.status}</span>
      </div>
      <p style="font-size:0.85rem;">Items: ${ord.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</p>
      <p style="font-weight:800; color:var(--color-leaf-primary); margin-top:8px;">Total: ₹${ord.total}</p>
      <div style="margin-top:10px; display:flex; gap:6px;">
        <button class="btn btn-sm btn-green" onclick="updateOrderStatus('${ord.id}', 'Ready')">Mark Ready</button>
        <button class="btn btn-sm btn-outline-dark" onclick="updateOrderStatus('${ord.id}', 'Completed')">Complete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

window.updateOrderStatus = function(id, newStatus) {
  const ord = state.orders.find(o => o.id === id);
  if (ord) {
    ord.status = newStatus;
    saveState();
    renderStaffOrders();
    showToast(`Order ${id} marked as ${newStatus}!`);
  }
};

function renderStaffReservations() {
  const list = document.getElementById('staffReservationsList');
  if (!list) return;
  list.innerHTML = '';

  state.reservations.forEach(r => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.style.padding = '16px';
    card.style.marginBottom = '12px';
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <strong>${r.name} (${r.phone})</strong>
        <span class="dash-badge badge-live">${r.status}</span>
      </div>
      <p style="font-size:0.85rem; margin-top:6px;">📅 ${r.date} at ${r.time} • 👥 ${r.guests} Guests • 🪑 ${r.style}</p>
    `;
    list.appendChild(card);
  });
}

function renderStaffQueue() {
  const list = document.getElementById('staffQueueList');
  if (!list) return;
  list.innerHTML = '';

  state.queue.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.style.padding = '14px';
    card.style.marginBottom = '10px';
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="font-size:1.1rem; color:var(--color-leaf-primary);">${q.token}</strong> — ${q.name} (${q.party} guests)
        </div>
        <button class="btn btn-sm btn-gold" onclick="callQueueToken(${idx})">Seat Next</button>
      </div>
    `;
    list.appendChild(card);
  });
}

window.callQueueToken = function(index) {
  const seated = state.queue.splice(index, 1)[0];
  saveState();
  renderStaffQueue();
  updateQueueDisplay();
  showToast(`Called token ${seated.token} (${seated.name}) to table!`);
};

function renderStaffCollabs() {
  const list = document.getElementById('staffCollabsList');
  if (!list) return;
  list.innerHTML = '';

  state.collabs.forEach(c => {
    const card = document.createElement('div');
    card.className = 'dash-card';
    card.style.padding = '14px';
    card.style.marginBottom = '10px';
    card.innerHTML = `
      <div>
        <strong>${c.name}</strong> (${c.platform}) — <code>${c.handle}</code>
        <p style="font-size:0.8rem; color:var(--color-muted-text);">Followers: ${c.followers.toLocaleString()} • Status: <span style="color:green; font-weight:700;">${c.status}</span></p>
      </div>
    `;
    list.appendChild(card);
  });
}

// --- QUEUE DISPLAY FOR CUSTOMER ---
function updateQueueDisplay() {
  const countEl = document.getElementById('queueCount');
  const waitEl = document.getElementById('queueEstWait');

  if (countEl) countEl.textContent = state.queue.length;
  if (waitEl) waitEl.textContent = `~${state.queue.length * 6}m`;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, isError = false) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  const iconEl = document.getElementById('toastIcon');

  if (!toast) return;

  msgEl.textContent = message;
  iconEl.className = isError ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check';
  toast.style.borderLeftColor = isError ? 'var(--color-terracotta)' : 'var(--color-turmeric)';

  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Category tabs
  const catTabs = document.querySelectorAll('.cat-tab');
  catTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      catTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.dataset.cat;
      const search = document.getElementById('menuSearchInput').value;
      renderMenu(cat, search);
    });
  });

  // Search input
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeCat = document.querySelector('.cat-tab.active').dataset.cat;
      renderMenu(activeCat, e.target.value);
    });
  }

  // Cart Drawer toggles
  const cartOverlay = document.getElementById('cartOverlay');
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');

  if (openCartBtn && cartOverlay) {
    openCartBtn.addEventListener('click', () => cartOverlay.classList.add('active'));
  }
  if (closeCartBtn && cartOverlay) {
    closeCartBtn.addEventListener('click', () => cartOverlay.classList.remove('active'));
  }

  // Coupon code
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  if (applyCouponBtn) {
    applyCouponBtn.addEventListener('click', () => {
      const code = document.getElementById('couponInput').value.trim().toUpperCase();
      const msg = document.getElementById('couponMsg');
      if (code === 'TAMIL10') {
        state.discountPercent = 10;
        msg.textContent = '🎉 10% Tamil Culture Discount Applied!';
        msg.style.color = 'var(--color-leaf-primary)';
      } else {
        msg.textContent = 'Invalid code. Try TAMIL10 for 10% off!';
        msg.style.color = 'var(--color-terracotta)';
      }
      updateCartUI();
    });
  }

  // Checkout -> Bill Receipt
  const checkoutBtn = document.getElementById('checkoutBtn');
  const receiptModal = document.getElementById('receiptModal');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your cart is empty!', true);
        return;
      }
      cartOverlay.classList.remove('active');
      generateReceipt();
      receiptModal.classList.add('active');
    });
  }

  const closeReceiptModal = document.getElementById('closeReceiptModal');
  const finishOrderBtn = document.getElementById('finishOrderBtn');
  if (closeReceiptModal) closeReceiptModal.addEventListener('click', () => receiptModal.classList.remove('active'));
  if (finishOrderBtn) {
    finishOrderBtn.addEventListener('click', () => {
      receiptModal.classList.remove('active');
      state.cart = [];
      state.discountPercent = 0;
      saveState();
      updateCartUI();
      showToast('Order completed! Thank you for dining with us. 🍃');
    });
  }

  // Table Reservation Form
  const resForm = document.getElementById('tableReservationForm');
  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newRes = {
        id: `VI-RES-${Math.floor(1000 + Math.random() * 9000)}`,
        name: document.getElementById('resName').value,
        phone: document.getElementById('resPhone').value,
        date: document.getElementById('resDate').value,
        time: document.getElementById('resTime').value,
        guests: document.getElementById('resGuests').value,
        style: document.getElementById('resStyle').value,
        status: 'Confirmed'
      };
      state.reservations.unshift(newRes);
      saveState();
      resForm.reset();
      showToast(`Table Reserved! Token: ${newRes.id}. We look forward to serving you! 🌿`);
    });
  }

  // Live Queue Form
  const queueForm = document.getElementById('joinQueueForm');
  if (queueForm) {
    queueForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const token = `Q-${Math.floor(100 + Math.random() * 900)}`;
      const name = document.getElementById('queueName').value;
      const party = document.getElementById('queueParty').value;

      state.queue.push({ token, name, party, status: 'Waiting' });
      saveState();
      updateQueueDisplay();
      
      const resBox = document.getElementById('queueTokenResult');
      resBox.innerHTML = `🎉 Token <strong>${token}</strong> Issued for ${name}! Please stay nearby.`;
      resBox.classList.remove('hidden');
      queueForm.reset();
      showToast(`Joined Queue! Your Token is ${token}`);
    });
  }

  // Creator Collab Form
  const collabForm = document.getElementById('creatorCollabForm');
  if (collabForm) {
    collabForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('collabName').value;
      const platform = document.getElementById('collabPlatform').value;
      const handle = document.getElementById('collabHandle').value;
      const followers = parseInt(document.getElementById('collabFollowers').value);

      state.collabs.push({ name, platform, handle, followers, status: 'Under Review' });
      saveState();

      const msg = document.getElementById('collabStatusMsg');
      msg.innerHTML = `✅ Thank you ${name}! Your collaboration request is received. We will send tasting passes to ${handle}.`;
      msg.classList.remove('hidden');
      collabForm.reset();
      showToast('Collab application submitted!');
    });
  }

  // Express Delivery Modal & Form
  const openDeliveryModalBtn = document.getElementById('openDeliveryModalBtn');
  const deliveryModal = document.getElementById('deliveryModal');
  const closeDeliveryModal = document.getElementById('closeDeliveryModal');

  if (openDeliveryModalBtn && deliveryModal) {
    openDeliveryModalBtn.addEventListener('click', () => deliveryModal.classList.add('active'));
  }
  if (closeDeliveryModal && deliveryModal) {
    closeDeliveryModal.addEventListener('click', () => deliveryModal.classList.remove('active'));
  }

  const expressDeliveryForm = document.getElementById('expressDeliveryForm');
  if (expressDeliveryForm) {
    expressDeliveryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      deliveryModal.classList.remove('active');
      showToast('Express Delivery Order Confirmed! Live tracking active.');
      expressDeliveryForm.reset();
    });
  }

  // Role Toggle (Customer <-> Staff)
  const roleToggleBtn = document.getElementById('roleToggleBtn');
  const exitStaffBtn = document.getElementById('exitStaffBtn');
  const customerView = document.getElementById('customerView');
  const staffView = document.getElementById('staffView');
  const roleToggleText = document.getElementById('roleToggleText');

  function switchToStaff() {
    state.role = 'staff';
    customerView.classList.add('hidden');
    staffView.classList.remove('hidden');
    roleToggleText.textContent = 'Customer View';
    renderStaffDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchToCustomer() {
    state.role = 'customer';
    staffView.classList.add('hidden');
    customerView.classList.remove('hidden');
    roleToggleText.textContent = 'Staff Login';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (roleToggleBtn) {
    roleToggleBtn.addEventListener('click', () => {
      if (state.role === 'customer') {
        switchToStaff();
      } else {
        switchToCustomer();
      }
    });
  }
  if (exitStaffBtn) exitStaffBtn.addEventListener('click', switchToCustomer);

  // Staff Sub-tabs
  const staffTabs = document.querySelectorAll('.staff-tab');
  staffTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      staffTabs.forEach(t => t.classList.remove('active'));
      const targetTab = e.currentTarget.dataset.stafftab;
      e.currentTarget.classList.add('active');

      document.querySelectorAll('.staff-tab-content').forEach(c => c.classList.remove('active'));
      const contentEl = document.getElementById(`staffTab${targetTab.charAt(0).toUpperCase() + targetTab.slice(1)}`);
      if (contentEl) contentEl.classList.add('active');
    });
  });

  // AUTH MODAL LOGIC
  const authModal = document.getElementById('authModal');
  const authModalBtn = document.getElementById('authModalBtn');
  const closeAuthModal = document.getElementById('closeAuthModal');

  if (authModalBtn && authModal) {
    authModalBtn.addEventListener('click', () => authModal.classList.add('active'));
  }
  if (closeAuthModal && authModal) {
    closeAuthModal.addEventListener('click', () => authModal.classList.remove('active'));
  }

  const authTabSignIn = document.getElementById('authTabSignIn');
  const authTabSignUp = document.getElementById('authTabSignUp');
  const signInContainer = document.getElementById('signInContainer');
  const signUpContainer = document.getElementById('signUpContainer');

  if (authTabSignIn && authTabSignUp) {
    authTabSignIn.addEventListener('click', () => {
      authTabSignIn.classList.add('active');
      authTabSignUp.classList.remove('active');
      signInContainer.classList.remove('hidden');
      signUpContainer.classList.add('hidden');
    });
    authTabSignUp.addEventListener('click', () => {
      authTabSignUp.classList.add('active');
      authTabSignIn.classList.remove('active');
      signUpContainer.classList.remove('hidden');
      signInContainer.classList.add('hidden');
    });
  }

  // Quick Demos
  const demoCustomerBtn = document.getElementById('demoCustomerBtn');
  const demoStaffBtn = document.getElementById('demoStaffBtn');
  if (demoCustomerBtn) {
    demoCustomerBtn.addEventListener('click', () => {
      document.getElementById('loginEmail').value = 'guest@vazhailai.com';
      document.getElementById('loginPassword').value = 'guest123';
    });
  }
  if (demoStaffBtn) {
    demoStaffBtn.addEventListener('click', () => {
      document.getElementById('loginEmail').value = 'staff@vazhailai.com';
      document.getElementById('loginPassword').value = 'admin123';
    });
  }

  // Sign In Form Submit
  const signInForm = document.getElementById('signInForm');
  if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      if (email.includes('staff')) {
        state.user = { name: 'Staff Admin', email, role: 'staff' };
        authModal.classList.remove('active');
        saveState();
        updateUserAuthUI();
        switchToStaff();
        showToast('Logged in as Staff Admin!');
      } else {
        state.user = { name: 'Valued Guest', email, role: 'customer' };
        authModal.classList.remove('active');
        saveState();
        updateUserAuthUI();
        showToast('Welcome to Vazha Ilai! 🍃');
      }
    });
  }

  // Google Login Simulation
  const googleLoginBtn = document.getElementById('googleLoginBtn');
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => {
      state.user = { name: 'Anand Kumar (Google)', email: 'anand.google@gmail.com', role: 'customer' };
      authModal.classList.remove('active');
      saveState();
      updateUserAuthUI();
      showToast('Signed in with Google OAuth simulation! 🍃');
    });
  }

  // OTP Send Simulation
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  if (sendOtpBtn) {
    sendOtpBtn.addEventListener('click', () => {
      const hint = document.getElementById('otpHint');
      hint.textContent = '⚡ Simulated OTP Code: 5821';
      hint.style.color = 'var(--color-leaf-primary)';
      document.getElementById('regOtp').value = '5821';
      showToast('OTP sent! Entered code 5821 automatically for demo.');
    });
  }
}

// --- GENERATE RECEIPT ---
function generateReceipt() {
  const token = `#VI-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleString();

  document.getElementById('billToken').textContent = token;
  document.getElementById('billDate').textContent = dateStr;

  const tbody = document.getElementById('billItemsBody');
  tbody.innerHTML = '';

  let subtotal = 0;
  state.cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.tamilName}</td>
      <td>${item.qty}</td>
      <td align="right">₹${itemTotal}</td>
    `;
    tbody.appendChild(tr);
  });

  const discount = Math.round(subtotal * (state.discountPercent / 100));
  const taxable = subtotal - discount;
  const tax = Math.round(taxable * 0.05);
  const grandTotal = taxable + tax;

  document.getElementById('billSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('billDiscount').textContent = `-₹${discount}`;
  document.getElementById('billTax').textContent = `₹${tax}`;
  document.getElementById('billGrandTotal').textContent = `₹${grandTotal}`;

  // Add order to state
  state.orders.unshift({
    id: token,
    items: [...state.cart.map(c => ({ name: c.tamilName, qty: c.qty, price: c.price }))],
    total: grandTotal,
    status: 'Preparing',
    type: 'Dine-In',
    time: new Date().toLocaleTimeString()
  });
  saveState();
}
