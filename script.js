// DEFAULT PRODUCTS DATABASE
const DEFAULT_PRODUCTS = {
  // Bots Base Prices
  'bot-league': 7,
  'bot-payment': 6,
  'bot-ai': 4,
  'bot-custom': 9,
  'bot-hosting-lifetime': 4,
  'bot-hosting-1month': 2,
  'bot-host-us-1month': 3,
  'bot-host-us-lifetime': 5,

  // Servers
  'srv-full': 17,
  'srv-roles': 5,
  'srv-custom': 3,

  // MVS items database
  'mvs-items': [
    { id: 'mvs-willow-case', category: 'willow', name: 'Willow Case', price: 20, description: 'Exclusive Willow Case item', badge: 'Case' },
    {
      id: 'mvs-blue-willow-set',
      category: 'willow',
      name: 'Blue Willow Set',
      price: 25,
      description: 'Blue Willow Set weapon skins',
      badge: 'Willow Set',
      options: [
        { id: 'mvs-blue-willow-set', name: 'Full Set', price: 25 },
        { id: 'mvs-blue-willow-gun', name: 'Gun Only (BWG)', price: 23 },
        { id: 'mvs-blue-willow-knife', name: 'Knife Only (BWK)', price: 5 }
      ]
    },
    {
      id: 'mvs-purple-willow-set',
      category: 'willow',
      name: 'Purple Willow Set',
      price: 20,
      description: 'Purple Willow Set weapon skins',
      badge: 'Willow Set',
      options: [
        { id: 'mvs-purple-willow-set', name: 'Full Set', price: 20 },
        { id: 'mvs-purple-willow-gun', name: 'Gun Only (PWG)', price: 19 },
        { id: 'mvs-purple-willow-knife', name: 'Knife Only (PWK)', price: 5 }
      ]
    },
    {
      id: 'mvs-red-willow-set',
      category: 'willow',
      name: 'Red Willow Set',
      price: 14,
      description: 'Red Willow Set weapon skins',
      badge: 'Willow Set',
      options: [
        { id: 'mvs-red-willow-set', name: 'Full Set', price: 14 },
        { id: 'mvs-red-willow-gun', name: 'Gun Only (RWG)', price: 11 },
        { id: 'mvs-red-willow-knife', name: 'Knife Only (RWK)', price: 4 }
      ]
    },
    {
      id: 'mvs-green-willow-set',
      category: 'willow',
      name: 'Green Willow Set',
      price: 11,
      description: 'Green Willow Set weapon skins',
      badge: 'Willow Set',
      options: [
        { id: 'mvs-green-willow-set', name: 'Full Set', price: 11 },
        { id: 'mvs-green-willow-gun', name: 'Gun Only (GWG)', price: 10 },
        { id: 'mvs-green-willow-knife', name: 'Knife Only (GWK)', price: 4 }
      ]
    },

    // Strife
    {
      id: 'mvs-purple-strife-set',
      category: 'strife',
      name: 'Purple Strife Set',
      price: 22,
      description: 'Purple Strife Set configurations',
      badge: 'Strife Set',
      options: [
        { id: 'mvs-purple-strife-set', name: 'Full Set', price: 22 },
        { id: 'mvs-purple-strife-gun', name: 'Gun Only (PSG)', price: 22 },
        { id: 'mvs-purple-strife-knife', name: 'Knife Only (PSK)', price: 4 }
      ]
    },
    {
      id: 'mvs-red-strife-set',
      category: 'strife',
      name: 'Red Strife Set',
      price: 15,
      description: 'Red Strife Set configurations',
      badge: 'Strife Set',
      options: [
        { id: 'mvs-red-strife-set', name: 'Full Set', price: 15 },
        { id: 'mvs-red-strife-gun', name: 'Gun Only (RSG)', price: 13 },
        { id: 'mvs-red-strife-knife', name: 'Knife Only (RSK)', price: 3 }
      ]
    },
    {
      id: 'mvs-green-strife-set',
      category: 'strife',
      name: 'Green Strife Set',
      price: 14,
      description: 'Green Strife Set configurations',
      badge: 'Strife Set',
      options: [
        { id: 'mvs-green-strife-set', name: 'Full Set', price: 14 },
        { id: 'mvs-green-strife-gun', name: 'Gun Only (GSG)', price: 13 },
        { id: 'mvs-green-strife-knife', name: 'Knife Only (GSK)', price: 3 }
      ]
    },
    {
      id: 'mvs-yellow-strife-set',
      category: 'strife',
      name: 'Yellow Strife Set',
      price: 12,
      description: 'Yellow Strife Set configurations',
      badge: 'Strife Set',
      options: [
        { id: 'mvs-yellow-strife-set', name: 'Full Set', price: 12 },
        { id: 'mvs-yellow-strife-gun', name: 'Gun Only (YSG)', price: 11 },
        { id: 'mvs-yellow-strife-knife', name: 'Knife Only (YSK)', price: 3 }
      ]
    },
    { id: 'mvs-white-gold-strife-gun', category: 'strife', name: 'White & Gold Strife Gun', price: 40, description: 'Rare white and gold strife gun', badge: 'Gun' },

    // Fang
    { id: 'mvs-green-fang-gun', category: 'fang', name: 'Green Fang Gun', price: 20, description: 'Rare green fang weapon skins', badge: 'Gun' },
    { id: 'mvs-gray-fang-gun', category: 'fang', name: 'Gray Fang Gun', price: 20, description: 'Rare gray fang weapon skins', badge: 'Gun' },

    // Peppermint
    { id: 'mvs-green-peppermint-set', category: 'peppermint', name: 'Green Peppermint Set', price: 16, description: 'Festive green peppermint bundle', badge: 'Set' },
    { id: 'mvs-purple-peppermint-set', category: 'peppermint', name: 'Purple Peppermint Set', price: 10, description: 'Festive purple peppermint bundle', badge: 'Set' },
    { id: 'mvs-blue-peppermint-set', category: 'peppermint', name: 'Blue Peppermint Set', price: 6, description: 'Festive blue peppermint bundle', badge: 'Set' },
    { id: 'mvs-red-peppermint-set', category: 'peppermint', name: 'Red Peppermint Set', price: 6, description: 'Festive red peppermint bundle', badge: 'Set' },

    // Dragonfire
    {
      id: 'mvs-purple-dragonfire-bundle',
      category: 'dragonfire',
      name: 'Purple Dragonfire Bundle',
      price: 16,
      description: 'Purple Dragonfire sniper and sets',
      badge: 'Bundle',
      options: [
        { id: 'mvs-purple-dragonfire-bundle', name: 'Full Bundle', price: 16 },
        { id: 'mvs-purple-dragonfire-sniper', name: 'Sniper Only', price: 6 },
        { id: 'mvs-purple-dragonfire-set', name: 'Set Only (No Sniper)', price: 15 }
      ]
    },
    {
      id: 'mvs-black-dragonfire-bundle',
      category: 'dragonfire',
      name: 'Black Dragonfire Bundle',
      price: 12,
      description: 'Black Dragonfire sniper and sets',
      badge: 'Bundle',
      options: [
        { id: 'mvs-black-dragonfire-bundle', name: 'Full Bundle', price: 12 },
        { id: 'mvs-black-dragonfire-sniper', name: 'Sniper Only', price: 6 },
        { id: 'mvs-black-dragonfire-set', name: 'Set Only (No Sniper)', price: 10 }
      ]
    },
    {
      id: 'mvs-blue-dragonfire-bundle',
      category: 'dragonfire',
      name: 'Blue Dragonfire Bundle',
      price: 10,
      description: 'Blue Dragonfire sniper and sets',
      badge: 'Bundle',
      options: [
        { id: 'mvs-blue-dragonfire-bundle', name: 'Full Bundle', price: 10 },
        { id: 'mvs-blue-dragonfire-sniper', name: 'Sniper Only', price: 6 },
        { id: 'mvs-blue-dragonfire-set', name: 'Set Only (No Sniper)', price: 8 }
      ]
    },
    {
      id: 'mvs-red-dragonfire-bundle',
      category: 'dragonfire',
      name: 'Red Dragonfire Bundle',
      price: 10,
      description: 'Red Dragonfire sniper and sets',
      badge: 'Bundle',
      options: [
        { id: 'mvs-red-dragonfire-bundle', name: 'Full Bundle', price: 10 },
        { id: 'mvs-red-dragonfire-sniper', name: 'Sniper Only', price: 12 },
        { id: 'mvs-red-dragonfire-set', name: 'Set Only (No Sniper)', price: 8 }
      ]
    },

    // Extras
    {
      id: 'mvs-reef-set',
      category: 'extra',
      name: 'Reef Set',
      price: 15,
      description: 'Exotic Reef set variations',
      badge: 'Extra',
      options: [
        { id: 'mvs-reef-set', name: 'Full Set', price: 15 },
        { id: 'mvs-reef-gun', name: 'Gun Only', price: 13 }
      ]
    },
    { id: 'mvs-rosethorn-set', category: 'extra', name: 'Rosethorn Set', price: 8, description: 'Rosethorn weapon skins pack', badge: 'Extra Set' },
    { id: 'mvs-angel-set', category: 'extra', name: 'Angel Set', price: 8, description: 'Heavenly Angel weapon set', badge: 'Extra Set' },
    { id: 'mvs-pink-flutter-gun', category: 'extra', name: 'Pink Flutter Gun', price: 20, description: 'Custom Pink Flutter skin weapon', badge: 'Extra Gun' },
    { id: 'mvs-pink-nebula-set', category: 'extra', name: 'Pink Nebula Set', price: 25, description: 'Gorgeous Pink Nebula weapon set', badge: 'Extra Set' },
    { id: 'mvs-frostbite-bundle', category: 'extra', name: 'Frostbite Bundle', price: 30, description: 'Chilly Frostbite skins pack', badge: 'Extra Bundle' }
  ]
};

// APPLICATION STATE
let storeDb = {};
let cart = [];
let salesLog = [];
let isAdminLoggedIn = false;
let discountCode = null;

// Authenticator Credentials
const ADMIN_USER = "AamzStore";
const ADMIN_PASS = "AzaanRazaq2013!";

// Document Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Load database from LocalStorage or Set Defaults
  initDatabase();

  // Highlight Active Link in Navbar based on current pathname
  highlightNavbarActiveLink();

  // Render Page Content Safely
  refreshStorefrontPrices();
  renderMvsItems();
  
  // Load & Update Cart
  loadCartState();
  updateCartUI();

  // Lucide icons
  lucide.createIcons();

  // Default Robux calculations if inputs are on page
  if (document.getElementById('calc-robux')) {
    calculatePriceFromRobux();
  }

  // Parse if redirecting back from successful Stripe checkout
  checkStripeSuccessRedirect();

  // Auto-fill active admin view if logged in session-wise
  if (document.getElementById('adminLoginCard')) {
    checkAdminLoginState();
  }
});

// Setup localStorage arrays
function initDatabase() {
  const dbSaved = localStorage.getItem('store_db');
  if (dbSaved) {
    storeDb = JSON.parse(dbSaved);
  } else {
    storeDb = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem('store_db', JSON.stringify(storeDb));
  }

  const logSaved = localStorage.getItem('sales_log');
  if (logSaved) {
    salesLog = JSON.parse(logSaved);
  } else {
    salesLog = [];
    localStorage.setItem('sales_log', JSON.stringify(salesLog));
  }
}

// Sync changes to localStorage
function saveDatabase() {
  localStorage.setItem('store_db', JSON.stringify(storeDb));
}

// Load cart state from localStorage
function loadCartState() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  } else {
    cart = [];
  }
  const savedDiscount = localStorage.getItem('discount_code');
  if (savedDiscount) {
    discountCode = JSON.parse(savedDiscount);
  }
}

// Save cart to localStorage
function saveCartState() {
  localStorage.setItem('cart', JSON.stringify(cart));
  if (discountCode) {
    localStorage.setItem('discount_code', JSON.stringify(discountCode));
  } else {
    localStorage.removeItem('discount_code');
  }
}

// Highlight navbar active link by current filename
function highlightNavbarActiveLink() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    // Check if path matches link page name
    if (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
}

// Refresh Static Pricing (Bots and Servers) values in HTML DOM safely
function refreshStorefrontPrices() {
   // Update Bot Card Prices in HTML (both the big headline price AND the footer "Total:" price)
  setDomText('#price-bot-league', `$${storeDb['bot-league'] ? storeDb['bot-league'].toFixed(2) : '7.00'}`);
  setDomText('#card-price-bot-league', `$${storeDb['bot-league'] ? storeDb['bot-league'].toFixed(2) : '7.00'}`);

  setDomText('#price-bot-payment', `$${storeDb['bot-payment'] ? storeDb['bot-payment'].toFixed(2) : '6.00'}`);
  setDomText('#card-price-bot-payment', `$${storeDb['bot-payment'] ? storeDb['bot-payment'].toFixed(2) : '6.00'}`);

  setDomText('#price-bot-ai', `$${storeDb['bot-ai'] ? storeDb['bot-ai'].toFixed(2) : '4.00'}`);
  setDomText('#card-price-bot-ai', `$${storeDb['bot-ai'] ? storeDb['bot-ai'].toFixed(2) : '4.00'}`);

  setDomText('#price-bot-custom', `$${storeDb['bot-custom'] ? storeDb['bot-custom'].toFixed(2) : '9.00'}`);
  setDomText('#card-price-bot-custom', `$${storeDb['bot-custom'] ? storeDb['bot-custom'].toFixed(2) : '9.00'}`);

  // Update Host banner buttons
  const host1mBtn = document.querySelector('button[onclick*="bot-host-us-1month"]');
  if (host1mBtn && storeDb['bot-host-us-1month']) {
    host1mBtn.innerText = `1 Month — $${storeDb['bot-host-us-1month'].toFixed(2)}`;
  }
  
  const hostLtBtn = document.querySelector('button[onclick*="bot-host-us-lifetime"]');
  if (hostLtBtn && storeDb['bot-host-us-lifetime']) {
    hostLtBtn.innerText = `Lifetime — $${storeDb['bot-host-us-lifetime'].toFixed(2)}`;
  }

  // Update Servers Prices in HTML
  setServerCardPrice('srv-full');
  setServerCardPrice('srv-roles');
  setServerCardPrice('srv-custom');
}

function setDomText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.innerText = text;
}

function setServerCardPrice(srvId) {
  const cardBtn = document.querySelector(`button[onclick*="${srvId}"]`);
  if (cardBtn && storeDb[srvId]) {
    const priceSpan = cardBtn.closest('.card-price-row').querySelector('.price-val');
    if (priceSpan) priceSpan.innerText = `$${storeDb[srvId].toFixed(2)}`;
  }
}

// RENDER MURDER VS SHERIFF DYNAMICALLY
function renderMvsItems() {
  const grid = document.getElementById('mvsItemsGrid');
  if (!grid) return; // Silent return if not on MVS page

  grid.innerHTML = '';
  
  storeDb['mvs-items'].forEach(item => {
    let optionsHtml = '';
    if (item.options) {
      optionsHtml = `
        <div class="mvs-options-list">
          ${item.options.map((opt, index) => {
            return `
              <label class="extra-option" style="margin-bottom: 0.25rem;">
                <input type="radio" name="mvs-opt-${item.id}" value="${opt.id}" ${index === 0 ? 'checked' : ''} onchange="updateMvsCardPrice('${item.id}', ${opt.price})">
                <span>${opt.name} <span>$${opt.price.toFixed(2)}</span></span>
              </label>
            `;
          }).join('')}
        </div>
      `;
    }

    const card = document.createElement('div');
    card.className = `store-card mvs-card mvs-${item.category}`;
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-category', item.category);
    card.setAttribute('data-name', item.name.toLowerCase());
    
    card.innerHTML = `
      <div class="mvs-card-header">
        <span class="mvs-tag bg-blue">${item.badge || 'Weapon'}</span>
        <i data-lucide="sword" style="width:16px; height:16px; opacity:0.4;"></i>
      </div>
      <h3>${item.name}</h3>
      <p class="card-desc" style="font-size: 0.8rem; margin-bottom: 0.5rem;">${item.description || 'Premium weapon item'}</p>
      
      ${optionsHtml}
      
      <div class="card-price-row" style="margin-top: 1rem;">
        <span class="price-val" id="price-mvs-${item.id}">$${item.price.toFixed(2)}</span>
        <button class="btn btn-blue btn-sm" onclick="addMvsToCart('${item.id}')" style="padding:0.4rem 0.8rem; font-size:0.8rem;">
          <i data-lucide="plus"></i> Add
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  lucide.createIcons();
}

function updateMvsCardPrice(itemId, price) {
  const label = document.getElementById(`price-mvs-${itemId}`);
  if (label) {
    label.innerText = `$${price.toFixed(2)}`;
  }
}

// Bot card pricing calculations in HTML view
function updateBotCardPrice(checkbox, botId) {
  const parent = checkbox.closest('.extras-checklist');
  const checkboxes = parent.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(cb => {
    if (cb !== checkbox) cb.checked = false;
  });

  const activeCheckbox = Array.from(checkboxes).find(cb => cb.checked);
  let extraCost = 0;
  if (activeCheckbox) {
    extraCost = activeCheckbox.value === 'lifetime' ? storeDb['bot-hosting-lifetime'] : storeDb['bot-hosting-1month'];
  }

  const basePrice = storeDb[botId];
  const totalPrice = basePrice + extraCost;
  const label = document.getElementById(`price-${botId}`);
  if (label) label.innerText = `$${totalPrice.toFixed(2)}`;
}

// MVS Search filter
function filterMvsItems() {
  const query = document.getElementById('mvsSearch').value.toLowerCase();
  const category = document.getElementById('mvsCategorySelect').value;
  const cards = document.querySelectorAll('.mvs-card');

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    const cardName = card.getAttribute('data-name');
    
    const matchesSearch = cardName.includes(query);
    const matchesCategory = category === 'all' || cardCat === category;

    if (matchesSearch && matchesCategory) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Robux Rate Calculator
function calculatePriceFromRobux() {
  const robuxInput = document.getElementById('calc-robux');
  const usdInput = document.getElementById('calc-usd');
  const totalUsdSpan = document.getElementById('calc-total-usd');
  if (!robuxInput || !usdInput) return;

  const robuxVal = parseFloat(robuxInput.value) || 0;
  const usdVal = robuxVal / 200; // Rate is $1 USD = 200 Robux

  usdInput.value = usdVal.toFixed(2);
  totalUsdSpan.innerText = `$${usdVal.toFixed(2)}`;
}

function calculateRobuxFromPrice() {
  const robuxInput = document.getElementById('calc-robux');
  const usdInput = document.getElementById('calc-usd');
  const totalUsdSpan = document.getElementById('calc-total-usd');
  if (!robuxInput || !usdInput) return;

  const usdVal = parseFloat(usdInput.value) || 0;
  const robuxVal = Math.round(usdVal * 200);

  robuxInput.value = robuxVal;
  totalUsdSpan.innerText = `$${usdVal.toFixed(2)}`;
}

function setCalculatorRobux(amount) {
  const robuxInput = document.getElementById('calc-robux');
  if (robuxInput) {
    robuxInput.value = amount;
    calculatePriceFromRobux();
  }
}

function addCustomRobuxToCart() {
  const robuxInput = document.getElementById('calc-robux');
  if (!robuxInput) return;

  const robux = parseInt(robuxInput.value, 10) || 0;
  if (robux < 200) {
    alert("Minimum Robux purchase is 200.");
    return;
  }

  const price = robux / 200;
  const item = {
    id: 'robux-gamepass',
    qty: robux,
    name: `Roblox Gamepass - ${robux.toLocaleString()} Robux`,
    price: price,
    description: `Robux Gamepass conversion package of R$${robux.toLocaleString()}`,
    quantity: 1
  };

  const existingIdx = cart.findIndex(c => c.id === 'robux-gamepass');
  if (existingIdx !== -1) {
    cart[existingIdx] = item;
  } else {
    cart.push(item);
  }

  saveCartState();
  updateCartUI();
  openCart();
}

// Shopping Cart Logic
function addToCart(id, name, price, description = '') {
  loadCartState(); // reload to sync across tabs
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: 1
    });
  }
  
  saveCartState();
  updateCartUI();
  openCart();
}

function addBotToCart(botId, botName) {
  const label = document.getElementById(`price-${botId}`);
  if (!label) {
    // Fallback: if no price label, just add at base DB price
    const basePrice = storeDb[botId] || 0;
    addToCart(botId, botName, basePrice, 'Base Bot Package');
    return;
  }

  const card = label.closest('.bot-card');
  const checkboxes = card ? card.querySelectorAll('input[type="checkbox"]') : [];
  const checked = Array.from(checkboxes).find(cb => cb.checked);

  // Get base price from storeDb, fallback to parsing the DOM label text
  let basePrice = storeDb[botId];
  if (basePrice === undefined || basePrice === null) {
    const labelText = label.innerText.replace('$', '').trim();
    basePrice = parseFloat(labelText) || 0;
  }

  let id = botId;
  let name = botName;
  let price = basePrice;
  let desc = 'Base Bot Package';

  if (checked) {
    const isLifetime = checked.value === 'lifetime';
    const hostingCost = isLifetime
      ? (storeDb['bot-hosting-lifetime'] || 4)
      : (storeDb['bot-hosting-1month'] || 2);
    id = isLifetime ? `${botId}-hosting-lifetime` : `${botId}-hosting-1month`;
    name = `${botName} (Hosting Included)`;
    price = basePrice + hostingCost;
    desc = isLifetime ? 'Bot setup with Lifetime Hosting package' : 'Bot setup with 1 Month Hosting package';
  }

  addToCart(id, name, price, desc);
}

function addMvsToCart(itemId) {
  const itemData = storeDb['mvs-items'].find(i => i.id === itemId);
  if (!itemData) return;

  let selectedId = itemId;
  let selectedName = itemData.name;
  let selectedPrice = itemData.price;
  let desc = itemData.description || 'Murder Vs Sheriff Set item';

  if (itemData.options) {
    const radios = document.getElementsByName(`mvs-opt-${itemId}`);
    const selectedRadio = Array.from(radios).find(r => r.checked);
    
    if (selectedRadio) {
      selectedId = selectedRadio.value;
      const optionDetails = itemData.options.find(o => o.id === selectedId);
      if (optionDetails) {
        selectedName = `${itemData.name} (${optionDetails.name})`;
        selectedPrice = optionDetails.price;
        desc = `Murder Vs Sheriff weapon skin: ${optionDetails.name}`;
      }
    }
  }

  addToCart(selectedId, selectedName, selectedPrice, desc);
}

function removeFromCart(itemId) {
  loadCartState();
  cart = cart.filter(item => item.id !== itemId);
  saveCartState();
  updateCartUI();
}

// Discount Code Handling
function applyDiscount() {
  const input = document.getElementById('discountInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  // Load admin-created codes from localStorage
  const storedCodes = JSON.parse(localStorage.getItem('discount_codes') || '[]');
  const match = storedCodes.find(c => c.code.toUpperCase() === code);

  if (match) {
    discountCode = match;
    const display = match.type === 'percent'
      ? `${match.value}% off`
      : `$${parseFloat(match.value).toFixed(2)} off`;
    showDiscountFeedback(true, `✅ Code "${match.code}" applied — ${display}!`);
  } else {
    discountCode = null;
    showDiscountFeedback(false, `❌ "${code}" is not a valid discount code.`);
  }

  saveCartState();
  updateCartUI();
}

function showDiscountFeedback(success, message) {
  let feedback = document.getElementById('discountFeedback');
  if (!feedback) {
    feedback = document.createElement('p');
    feedback.id = 'discountFeedback';
    feedback.style.cssText = 'font-size:0.78rem; margin-top:0.4rem; transition: opacity 0.3s;';
    const discountRow = document.querySelector('.discount-row');
    if (discountRow) discountRow.after(feedback);
  }
  feedback.innerText = message;
  feedback.style.color = success ? '#4ade80' : '#f87171';
  feedback.style.opacity = '1';
  setTimeout(() => { feedback.style.opacity = '0'; }, 3500);
}

function applyDiscountFromInput() { applyDiscount(); }

// Update Cart DOM
function updateCartUI() {
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartMsg = document.getElementById('emptyCartMsg');
  const cartTotalVal = document.getElementById('cartTotalVal');
  const cartBadge = document.getElementById('cartBadge');
  const floatingCartCount = document.getElementById('floatingCartCount');
  const floatingCartTotal = document.getElementById('floatingCartTotal');
  const floatingCartBadgeBtn = document.getElementById('floatingCartBadgeBtn');

  if (!cartItemsList) return; // Guard for pages without cart markup if any

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (discountCode) {
    if (discountCode.type === 'percent') {
      totalPrice = totalPrice * (1 - (parseFloat(discountCode.value) / 100));
    } else if (discountCode.type === 'amount') {
      totalPrice = Math.max(0, totalPrice - parseFloat(discountCode.value));
    } else if (discountCode.percent) {
      // Legacy support for old-format discountCode objects
      totalPrice = totalPrice * (1 - discountCode.percent);
    }
  }

  if (cartBadge) cartBadge.innerText = totalQuantity;

  if (cart.length === 0) {
    if (emptyCartMsg) emptyCartMsg.style.display = 'flex';
    cartItemsList.innerHTML = '';
    if (cartTotalVal) cartTotalVal.innerText = '$0.00';
    if (floatingCartBadgeBtn) floatingCartBadgeBtn.classList.remove('visible');
  } else {
    if (emptyCartMsg) emptyCartMsg.style.display = 'none';
    
    cartItemsList.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${item.description || 'Premium Service Item'}</p>
          <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} ${item.quantity > 1 ? `(${item.quantity}x)` : ''}</div>
        </div>
        <button class="remove-cart-item" onclick="removeFromCart('${item.id}')" title="Remove item">
          <i data-lucide="trash-2" style="width:16px; height:16px;"></i>
        </button>
      </div>
    `).join('');

    if (cartTotalVal) cartTotalVal.innerText = `$${totalPrice.toFixed(2)}`;
    
    if (floatingCartCount) floatingCartCount.innerText = totalQuantity;
    if (floatingCartTotal) floatingCartTotal.innerText = `$${totalPrice.toFixed(2)}`;
    if (floatingCartBadgeBtn) floatingCartBadgeBtn.classList.add('visible');
  }

  lucide.createIcons();
}

function toggleCart() {
  const el = document.getElementById('cartOverlay');
  if (el) el.classList.toggle('active');
}
function openCart() {
  const el = document.getElementById('cartOverlay');
  if (el) el.classList.add('active');
}
function closeCart() {
  const el = document.getElementById('cartOverlay');
  if (el) el.classList.remove('active');
}

// Generate clipboard message formatting for Discord Ticket creation
function copyDiscordOrderMessage() {
  loadCartState();
  if (cart.length === 0) {
    alert("Your cart is empty! Add items to create a ticket message.");
    return;
  }

  let subtotal = 0;
  let message = `🛒 **AAMZ.STORE - NEW ORDER TICKET**\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  
  cart.forEach((item, idx) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    message += `🔹 **${item.name}**\n`;
    message += `   • Detail: ${item.description}\n`;
    message += `   • Price: $${item.price.toFixed(2)} ${item.quantity > 1 ? `x${item.quantity}` : ''} = **$${itemTotal.toFixed(2)}**\n\n`;
  });

  if (discountCode) {
    message += `🎟️ **Discount Used:** ${discountCode.code} (${discountCode.percent * 100}% off)\n`;
    subtotal = subtotal * (1 - discountCode.percent);
  }

  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💳 **Total Order Value: $${subtotal.toFixed(2)}**\n`;
  message += `📝 *Please paste this order into your support ticket to claim your delivery.*`;

  navigator.clipboard.writeText(message).then(() => {
    const indicator = document.getElementById('copiedIndicator');
    if (indicator) indicator.style.display = 'block';
    
    // Log Order to Local History
    logSalesOrder(cart, subtotal, 'Discord Ticket');

    setTimeout(() => {
      if (indicator) indicator.style.display = 'none';
    }, 4000);
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
}

// Logging orders to local sales history (Admin View)
function logSalesOrder(cartItems, total, method) {
  const orderId = `AMZ-${Math.floor(10000 + Math.random() * 90000)}`;
  const dateStr = new Date().toLocaleString();
  
  const itemsText = cartItems.map(item => `${item.name} (${item.quantity}x)`).join(', ');
  
  const newOrder = {
    id: orderId,
    date: dateStr,
    items: itemsText,
    method: method,
    total: total
  };

  salesLog.unshift(newOrder);
  localStorage.setItem('sales_log', JSON.stringify(salesLog));
  
  // Clear cart after checkout ticket copied
  cart = [];
  discountCode = null;
  saveCartState();
  updateCartUI();

  // If admin is logged in, refresh stats immediately
  if (isAdminLoggedIn) {
    updateAdminStats();
    renderAdminOrdersTable();
  }
}

// Check if redirecting back from a successful Stripe checkout session
function checkStripeSuccessRedirect() {
  const urlParams = new URLSearchParams(window.location.search);
  const successSessionId = urlParams.get('session_id');
  if (successSessionId && !localStorage.getItem(`logged_${successSessionId}`)) {
    // This is success redirect. Log the order.
    const storedCart = localStorage.getItem('checkout_cart_cache');
    let items = "Stripe Checkout Package";
    let total = 0;
    
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      items = parsed.map(item => `${item.name} (${item.quantity}x)`).join(', ');
      total = parsed.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    
    const newOrder = {
      id: successSessionId.substring(0, 12).toUpperCase(),
      date: new Date().toLocaleString(),
      items: items,
      method: "Stripe",
      total: total
    };
    
    salesLog.unshift(newOrder);
    localStorage.setItem('sales_log', JSON.stringify(salesLog));
    localStorage.setItem(`logged_${successSessionId}`, 'true');
    
    // Clear cart entirely since purchase succeeded
    cart = [];
    discountCode = null;
    saveCartState();
    updateCartUI();

    // Clear cart cache
    localStorage.removeItem('checkout_cart_cache');
  }
}

// Stripe Payment Gateway trigger
async function processStripeCheckout() {
  loadCartState();
  if (cart.length === 0) {
    alert("Please add items to your cart before checking out.");
    return;
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  const originalHtml = checkoutBtn.innerHTML;
  
  // Store cart temporarily to log upon success redirect
  localStorage.setItem('checkout_cart_cache', JSON.stringify(cart));

  try {
    checkoutBtn.disabled = true;
    checkoutBtn.innerHTML = `<i data-lucide="loader" class="animate-spin"></i> Processing Securely...`;
    lucide.createIcons();

    // Call Vercel serverless API session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          qty: item.qty || 0,
          price: item.price, // dynamic price passing to support admin updates
          quantity: item.quantity
        })),
        discount: discountCode
      }),
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Server connection failed.');
    }

    const session = await response.json();
    const stripe = Stripe('pk_live_51Sj4jzIXHbosXk32ywWrKNqysecvP5zLdK2z1vlzfDg0Iu58jTJc5VRVYU0c4Stvgc2bmoBwFrsPB9Gnm9J0nJg900ywGCGPJu');
    
    // Redirect to Stripe checkout
    await stripe.redirectToCheckout({ sessionId: session.id });

  } catch (error) {
    console.error('Checkout error:', error);
    
    const confirmBackup = confirm(
      `Stripe Server Connection Offline.\n\n` +
      `You can complete the purchase via Discord tickets directly!\n\n` +
      `Click OK to copy your order summary to clipboard, open a support ticket, and claim your delivery.`
    );
    
    if (confirmBackup) {
      copyDiscordOrderMessage();
      window.open('https://discord.gg/PuMfsUxKrD', '_blank');
    }
  } finally {
    checkoutBtn.disabled = false;
    checkoutBtn.innerHTML = originalHtml;
    lucide.createIcons();
  }
}


/* ==========================================
   ADMIN PANEL FUNCTIONALITY
   ========================================== */

function checkAdminLoginState() {
  const loggedIn = sessionStorage.getItem('admin_logged_in');
  if (loggedIn === 'true') {
    isAdminLoggedIn = true;
    document.getElementById('adminLoginCard').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    
    updateAdminStats();
    renderAdminOrdersTable();
    renderAdminProductsTable();
  }
}

function attemptAdminLogin() {
  const user = document.getElementById('admin-user').value;
  const pass = document.getElementById('admin-pass').value;
  const errorMsg = document.getElementById('loginErrorMsg');

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    isAdminLoggedIn = true;
    sessionStorage.setItem('admin_logged_in', 'true');
    errorMsg.style.display = 'none';
    
    document.getElementById('adminLoginCard').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';

    updateAdminStats();
    renderAdminOrdersTable();
    renderAdminProductsTable();
  } else {
    errorMsg.style.display = 'block';
  }
}

function adminLogout() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('admin_logged_in');
  document.getElementById('admin-user').value = '';
  document.getElementById('admin-pass').value = '';
  
  document.getElementById('adminLoginCard').style.display = 'block';
  document.getElementById('adminDashboard').style.display = 'none';
}

function updateAdminStats() {
  const statsOrders = document.getElementById('admin-stat-orders');
  const statsRev = document.getElementById('admin-stat-revenue');
  const statsProd = document.getElementById('admin-stat-products');

  if (statsOrders) statsOrders.innerText = salesLog.length;
  
  if (statsRev) {
    const revenue = salesLog.reduce((sum, order) => sum + order.total, 0);
    statsRev.innerText = `$${revenue.toFixed(2)}`;
  }

  if (statsProd) {
    const botCount = 8;
    const srvCount = 3;
    const mvsCount = storeDb['mvs-items'].length;
    statsProd.innerText = botCount + srvCount + mvsCount;
  }
}

function switchAdminTab(tabName) {
  const tabs = ['orders', 'products', 'add-product', 'discounts'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`admin-tab-${t}-content`);
    
    if (btn && content) {
      if (t === tabName) {
        btn.classList.add('active');
        content.style.display = 'block';
      } else {
        btn.classList.remove('active');
        content.style.display = 'none';
      }
    }
  });

  if (tabName === 'discounts') renderDiscountCodesTable();
}

// ── Discount Code Admin Functions ──────────────────────────────────
function handleCreateDiscountCode(event) {
  event.preventDefault();

  const codeInput = document.getElementById('dc-code');
  const typeInput = document.getElementById('dc-type');
  const valueInput = document.getElementById('dc-value');

  const code = codeInput.value.trim().toUpperCase();
  const type = typeInput.value;  // 'percent' or 'amount'
  const value = parseFloat(valueInput.value);

  if (!code || isNaN(value) || value <= 0) {
    alert('Please fill in all fields with valid values.');
    return;
  }

  const storedCodes = JSON.parse(localStorage.getItem('discount_codes') || '[]');
  if (storedCodes.find(c => c.code === code)) {
    alert(`A code called "${code}" already exists. Delete it first.`);
    return;
  }

  storedCodes.push({ code, type, value });
  localStorage.setItem('discount_codes', JSON.stringify(storedCodes));

  // Reset form
  codeInput.value = '';
  valueInput.value = '';

  renderDiscountCodesTable();
}

function renderDiscountCodesTable() {
  const tbody = document.getElementById('discountCodesListBody');
  if (!tbody) return;

  const storedCodes = JSON.parse(localStorage.getItem('discount_codes') || '[]');

  if (storedCodes.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:2rem;">No discount codes yet. Create one above.</td></tr>`;
    return;
  }

  tbody.innerHTML = storedCodes.map((c, idx) => `
    <tr>
      <td style="font-weight:700; color:var(--color-gold); letter-spacing:1px;">${c.code}</td>
      <td style="color:var(--text-muted);">${c.type === 'percent' ? 'Percentage (%)' : 'Fixed Amount ($)'}</td>
      <td style="font-weight:600; color:#fff;">${c.type === 'percent' ? c.value + '%' : '$' + parseFloat(c.value).toFixed(2)}</td>
      <td style="text-align:right;">
        <button class="btn" style="background:rgba(239,68,68,0.15); color:#f87171; border:1px solid rgba(239,68,68,0.3); padding:0.35rem 0.75rem; font-size:0.78rem; border-radius:8px; cursor:pointer;"
          onclick="deleteDiscountCode(${idx})">
          <i data-lucide="trash-2" style="width:13px; height:13px;"></i> Delete
        </button>
      </td>
    </tr>
  `).join('');

  lucide.createIcons();
}

function deleteDiscountCode(idx) {
  const storedCodes = JSON.parse(localStorage.getItem('discount_codes') || '[]');
  storedCodes.splice(idx, 1);
  localStorage.setItem('discount_codes', JSON.stringify(storedCodes));
  renderDiscountCodesTable();
}

function renderAdminOrdersTable() {
  const tbody = document.getElementById('adminOrdersLogBody');
  if (!tbody) return;

  if (salesLog.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">No sales logged yet. Checkouts and Discord copies will list here.</td></tr>`;
    return;
  }

  tbody.innerHTML = salesLog.map(order => `
    <tr>
      <td style="font-weight:700; color:var(--color-cyan);">${order.id}</td>
      <td style="font-size:0.8rem; color:var(--text-muted);">${order.date}</td>
      <td style="max-width:320px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" title="${order.items}">${order.items}</td>
      <td>
        <span class="mvs-tag" style="background:${order.method === 'Stripe' ? 'linear-gradient(135deg, #635bff, #4f46e5)' : 'rgba(0, 242, 254, 0.08)'}; color:#fff; font-size:0.7rem; font-weight:600;">
          ${order.method}
        </span>
      </td>
      <td style="font-family:var(--font-display); font-weight:700; color:#fff;">$${order.total.toFixed(2)}</td>
    </tr>
  `).join('');
}

function renderAdminProductsTable() {
  const tbody = document.getElementById('adminProductsListBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  // 1. Bots
  const botsList = [
    { id: 'bot-league', name: 'League Bot', cat: 'bots', desc: 'Base Pricing' },
    { id: 'bot-payment', name: 'Payment Bot', cat: 'bots', desc: 'Base Pricing' },
    { id: 'bot-ai', name: 'AI Bot', cat: 'bots', desc: 'Base Pricing' },
    { id: 'bot-custom', name: 'Custom Bot', cat: 'bots', desc: 'Base Pricing' },
    { id: 'bot-hosting-lifetime', name: 'Hosting - Lifetime Addon', cat: 'bots', desc: 'Extra Bot configuration' },
    { id: 'bot-hosting-1month', name: 'Hosting - 1 Month Addon', cat: 'bots', desc: 'Extra Bot configuration' },
    { id: 'bot-host-us-1month', name: 'Host Us - 1 Month Package', cat: 'bots', desc: 'Stand-alone hosting' },
    { id: 'bot-host-us-lifetime', name: 'Host Us - Lifetime Package', cat: 'bots', desc: 'Stand-alone hosting' }
  ];

  botsList.forEach(bot => {
    appendProductTableRow(tbody, bot.id, bot.cat, bot.name, bot.desc, storeDb[bot.id], false);
  });

  // 2. Servers
  const srvList = [
    { id: 'srv-full', name: 'Full Server Package', cat: 'servers', desc: 'Complete setup suite' },
    { id: 'srv-roles', name: 'Roles Only Setup', cat: 'servers', desc: 'Permission adjustments' },
    { id: 'srv-custom', name: 'Custom Server Help', cat: 'servers', desc: 'Minor tweaks' }
  ];

  srvList.forEach(srv => {
    appendProductTableRow(tbody, srv.id, srv.cat, srv.name, srv.desc, storeDb[srv.id], false);
  });

  // 3. Murder Vs Sheriff
  storeDb['mvs-items'].forEach(item => {
    if (item.options) {
      item.options.forEach(opt => {
        appendProductTableRow(tbody, opt.id, item.category, `${item.name} (${opt.name})`, `Sub-option of ${item.name}`, opt.price, true, item.id);
      });
    } else {
      appendProductTableRow(tbody, item.id, item.category, item.name, item.description || 'MVS Weapon', item.price, true);
    }
  });

  lucide.createIcons();
}

function appendProductTableRow(tbody, id, category, name, description, price, deleteable, parentId = null) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><span class="badge-cat bc-${category}">${category}</span></td>
    <td style="font-weight:600;">${name}</td>
    <td style="font-size:0.8rem; color:var(--text-muted); max-width:240px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${description}</td>
    <td>
      <input type="number" step="0.01" min="0" value="${price.toFixed(2)}" class="inline-edit-input" id="admin-input-price-${id}">
    </td>
    <td style="text-align:right;">
      <button class="btn-action btn-save" onclick="handleAdminPriceSave('${id}', ${deleteable}, '${parentId}')" title="Save Price">
        <i data-lucide="check"></i>
      </button>
      ${deleteable ? `
        <button class="btn-action btn-delete" onclick="handleAdminProductDelete('${id}', '${parentId}')" style="margin-left:0.5rem;" title="Delete Product">
          <i data-lucide="trash-2"></i>
        </button>
      ` : ''}
    </td>
  `;
  tbody.appendChild(row);
}

// Action: Save Price
function handleAdminPriceSave(productId, isMvs, parentId) {
  const input = document.getElementById(`admin-input-price-${productId}`);
  if (!input) return;

  const newPrice = parseFloat(input.value);
  if (isNaN(newPrice) || newPrice < 0) {
    alert("Please enter a valid price.");
    return;
  }

  if (isMvs) {
    if (parentId && parentId !== 'null' && parentId !== '') {
      const parentProd = storeDb['mvs-items'].find(item => item.id === parentId);
      if (parentProd && parentProd.options) {
        const option = parentProd.options.find(opt => opt.id === productId);
        if (option) {
          option.price = newPrice;
          if (option.name === 'Full Set' || option.name === 'Full Bundle') {
            parentProd.price = newPrice;
          }
        }
      }
    } else {
      const weapon = storeDb['mvs-items'].find(item => item.id === productId);
      if (weapon) {
        weapon.price = newPrice;
      }
    }
  } else {
    storeDb[productId] = newPrice;
  }

  saveDatabase();
  refreshStorefrontPrices();
  renderMvsItems();
  updateAdminStats();
  
  alert("Price updated successfully!");
}

// Action: Delete Weapon Product
function handleAdminProductDelete(productId, parentId) {
  const confirmDelete = confirm("Are you sure you want to delete this listing from the storefront?");
  if (!confirmDelete) return;

  if (parentId && parentId !== 'null' && parentId !== '') {
    const parentProd = storeDb['mvs-items'].find(item => item.id === parentId);
    if (parentProd && parentProd.options) {
      parentProd.options = parentProd.options.filter(opt => opt.id !== productId);
      if (parentProd.options.length === 0) {
        storeDb['mvs-items'] = storeDb['mvs-items'].filter(item => item.id !== parentId);
      }
    }
  } else {
    storeDb['mvs-items'] = storeDb['mvs-items'].filter(item => item.id !== productId);
  }

  saveDatabase();
  renderMvsItems();
  renderAdminProductsTable();
  updateAdminStats();

  alert("Product listing deleted successfully!");
}

// Action: Create Product Submit
function handleNewProductSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('new-prod-name').value;
  const price = parseFloat(document.getElementById('new-prod-price').value);
  const category = document.getElementById('new-prod-category').value;
  const badge = document.getElementById('new-prod-badge').value;
  const desc = document.getElementById('new-prod-desc').value;

  if (isNaN(price) || price < 0) {
    alert("Please enter a valid price.");
    return;
  }

  const newId = `mvs-custom-${Date.now()}`;
  const newProduct = {
    id: newId,
    category: category,
    name: name,
    price: price,
    description: desc,
    badge: badge || 'New'
  };

  if (category === 'bots') {
    storeDb[newId] = price;
  } else if (category === 'servers') {
    storeDb[newId] = price;
  } else {
    storeDb['mvs-items'].push(newProduct);
  }

  saveDatabase();
  renderMvsItems();
  
  document.getElementById('newProductForm').reset();
  
  switchAdminTab('products');
  renderAdminProductsTable();
  updateAdminStats();

  alert(`Listing "${name}" created successfully on storefront!`);
}
