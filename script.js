// --- BASE DE DATOS (DATA) ---
const menuData = {
    clasicas: [
        { id: 'c1', name: 'Americana', type: 'pizza', prices: { Personal: 9, Mediana: 18, Familiar: 22, Extra: 28 }, img: 'images/americana.jpg' },
        { id: 'c2', name: 'Pepperoni', type: 'pizza', prices: { Personal: 12, Mediana: 21, Familiar: 28, Extra: 32 }, img: 'images/pepperoni.jpg' },
        { id: 'c3', name: 'Mozzarella', type: 'pizza', prices: { Personal: 8, Mediana: 16, Familiar: 21, Extra: 26 }, img: 'images/mozarella.jpg' },
        { id: 'c4', name: 'Fugazza', type: 'pizza', prices: { Personal: 8, Mediana: 17, Familiar: 20, Extra: 27 }, img: 'images/fugazza.jpg' },
        { id: 'c5', name: 'Hawaiana', type: 'pizza', prices: { Personal: 10, Mediana: 21, Familiar: 28, Extra: 32 }, img: 'images/hawaiana.jpg' },
        { id: 'c6', name: 'Vegetariana', type: 'pizza', prices: { Personal: 10, Mediana: 20, Familiar: 26, Extra: 30 }, img: 'images/vegetariana.jpg' }
    ],
    especiales: [
        { id: 'e1', name: 'Hawaiana Chicken', type: 'pizza', prices: { Personal: 12, Mediana: 23, Familiar: 30, Extra: 35 }, img: 'images/hawaianachicken.jpg' },
        { id: 'e2', name: 'Full Meat', type: 'pizza', prices: { Personal: 13, Mediana: 25, Familiar: 30, Extra: 36 }, img: 'images/fullmeat.jpg' },
        { id: 'e3', name: 'Gourmet', type: 'pizza', prices: { Personal: 12, Mediana: 23, Familiar: 28, Extra: 24 }, img: 'images/gourmet.jpg' },
        { id: 'e4', name: 'La Favorita', type: 'pizza', prices: { Personal: 12, Mediana: 23, Familiar: 28, Extra: 33 }, img: 'images/favorita.jpg' },
        { id: 'e5', name: 'Suprema', type: 'pizza', prices: { Personal: 13, Mediana: 25, Familiar: 30, Extra: 36 }, img: 'images/suprema.jpg' },
        { id: 'e6', name: 'Brava', type: 'pizza', prices: { Personal: 12, Mediana: 23, Familiar: 30, Extra: 34 }, img: 'images/brava.jpg' }
    ],
    pastas: [
        { id: 'p1', name: 'Lasagna', type: 'pasta', prices: { Rossini: 17, Alfredo: 17, Tucocarne: 17 }, img: 'images/lasagna.jpg' },
        { id: 'p2', name: 'Fettuccini', type: 'pasta', prices: { Rossini: 17, Alfredo: 17, Tucocarne: 17 }, img: 'images/fettuccini.jpg' },
        { id: 'p3', name: 'Macarrón', type: 'pasta', prices: { Rossini: 17, Alfredo: 17, Tucocarne: 17 }, img: 'images/macarron.jpg' },
        { id: 'p4', name: 'Spaghetti', type: 'pasta', prices: { Rossini: 17, Alfredo: 17, Tucocarne: 17 }, img: 'images/spaghetti.png' },
        { id: 'p5', name: 'Porción de pan al ajo', type: 'simple', price: 5, img: 'images/panalajo.jpg' }
    ],
    promociones: [
        { id: 'pr1', name: 'Promo Familiar', type: 'promo', price: 50, img: 'images/promocion1.jpg' },
        { id: 'pr2', name: 'Promo Pareja', type: 'promo', price: 55, img: 'images/promocion2.jpg' },
        { id: 'pr3', name: 'Promo Personal', type: 'promo', price: 30, img: 'images/promocion3.jpg' },
        { id: 'pr4', name: 'Mega Fiesta', type: 'promo', price: 65, img: 'images/promocion4.jpg' },
        { id: 'pr5', name: 'Promo Lunch', type: 'promo', price: 30, img: 'images/promocion5.jpg' },
        { id: 'pr6', name: 'Promo Duo', type: 'promo', price: 33, img: 'images/promocion6.jpg' },
        { id: 'pr7', name: 'Promo Amigos', type: 'promo', price: 43, img: 'images/promocion7.jpg' }
    ],
    bebidas: [
        { id: 'b1', name: 'Inca Cola', type: 'bebida', prices: { 'Personal': 4.90, '1 Litro': 8.90, '1.5 Litros': 11.90 }, img: 'images/inca1LT.jpg' },
        { id: 'b2', name: 'Coca Cola', type: 'bebida', prices: { 'Personal': 4.90, '1 Litro': 8.90, '1.5 Litros': 11.90 }, img: 'images/coca1LT.jpg' }
    ]
};

// --- ESTADO Y LOCAL STORAGE ---
let cart = JSON.parse(localStorage.getItem('megaPizza_cart')) || [];
let selectedPaymentMethod = null;
let currentUser = JSON.parse(localStorage.getItem('megaPizza_user')) || null;
let registeredUsers = JSON.parse(localStorage.getItem('megaPizza_users')) || [];
let currentSelection = null;
let currentAuthMode = 'login'; 

// --- PERSONALIZACIÓN DE PIZZA (CASCOS RELLENOS E INGREDIENTES) ---
const crustOptions = [
    { key: 'ninguno', label: 'Borde clásico', price: 0 },
    { key: 'queso', label: 'Casco relleno de queso', price: 4 },
    { key: 'ajo', label: 'Casco relleno de ajo y queso', price: 5 }
];

const extraIngredients = [
    { key: 'queso_extra', label: 'Extra queso', price: 3 },
    { key: 'champinones', label: 'Champiñones', price: 2 },
    { key: 'aceitunas', label: 'Aceitunas', price: 2 },
    { key: 'jamon', label: 'Jamón', price: 3 },
    { key: 'tocino', label: 'Tocino', price: 3 },
    { key: 'cebolla', label: 'Cebolla', price: 1.5 },
    { key: 'pimiento', label: 'Pimiento', price: 1.5 }
];

// --- ESTADO DEL PEDIDO (SEGUIMIENTO) ---
let orders = JSON.parse(localStorage.getItem('megaPizza_orders')) || [];
let ordersRefreshInterval = null;

const ORDER_STAGES = [
    { key: 'recibido', label: 'Recibido', icon: 'fa-receipt', minMinutes: 0 },
    { key: 'preparacion', label: 'En preparación', icon: 'fa-kitchen-set', minMinutes: 1 },
    { key: 'camino', label: 'En camino', icon: 'fa-motorcycle', minMinutes: 4 },
    { key: 'entregado', label: 'Entregado', icon: 'fa-circle-check', minMinutes: 9 }
];

// --- IMÁGENES FALLBACK ---
const placeholders = {
    pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500',
    pasta: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500',
    bebida: 'https://images.unsplash.com/photo-1543253687-c59975b7191f?w=500',
    promo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    cart: 'https://cdn-icons-png.flaticon.com/512/706/706164.png'
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todas las secciones al inicio
    renderAllSections(); 
    updateCartUI();
    checkSession();
});

// --- RENDERIZADO Y BUSCADOR ---
const container = document.getElementById('menu-container');

function getAllItems() {
    return [
        ...menuData.clasicas, ...menuData.especiales, ...menuData.pastas, 
        ...menuData.promociones, ...menuData.bebidas
    ];
}

function renderAllSections() {
    // Llama a la función de renderizado inicial sin filtros
    renderMenu(menuData);
}

function renderMenu(data) {
    container.innerHTML = '';
    
    // Lista de categorías y sus títulos
    const categories = [
        { key: 'clasicas', title: 'Pizzas Clásicas' },
        { key: 'especiales', title: 'Pizzas Especiales' },
        { key: 'pastas', title: 'Pastas' },
        { key: 'promociones', title: 'Promociones' },
        { key: 'bebidas', title: 'Bebidas' }
    ];

    categories.forEach(cat => {
        if (data[cat.key] && data[cat.key].length > 0) {
            renderSection(cat.title, cat.key, data[cat.key]);
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = `<section class="category-section"><p style="text-align:center; padding: 50px; font-size:1.2rem; color:#888;">
        No se encontraron productos con ese nombre.</p></section>`;
    }
}


/**
 * Función principal para filtrar productos basado en la búsqueda.
 */
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = {
        clasicas: [],
        especiales: [],
        pastas: [],
        promociones: [],
        bebidas: []
    };

    if (searchTerm === '') {
        // Si el campo está vacío, renderiza el menú completo
        renderMenu(menuData);
        return;
    }

    // Recorre todas las categorías y filtra los elementos
    for (const category in menuData) {
        filteredData[category] = menuData[category].filter(item => 
            item.name.toLowerCase().includes(searchTerm)
        );
    }

    // Renderiza solo los resultados filtrados
    renderMenu(filteredData);
}


function renderSection(title, id, items) {
    let html = `<section id="${id}" class="category-section">
        <h2 class="category-title">${title}</h2>
        <div class="grid-products">`;
    
    items.forEach(item => {
        let priceDisplay = '';
        if(item.type === 'simple' || item.type === 'promo') {
            priceDisplay = `S/. ${item.price.toFixed(2)}`;
        } else {
            const prices = Object.values(item.prices);
            const minPrice = Math.min(...prices);
            priceDisplay = `Desde S/. ${minPrice.toFixed(2)}`;
        }
        const fallback = placeholders[item.type] || placeholders.pizza;

        html += `
            <div class="card">
                <img src="${item.img}" class="card-img" alt="${item.name}" onerror="this.src='${fallback}'">
                <div class="card-body">
                    <div>
                        <h3 class="card-title">${item.name}</h3>
                        <p class="card-price">${priceDisplay}</p>
                    </div>
                    <button class="btn btn-add" onclick="prepareAdd('${item.id}', '${id}')">
                        AGREGAR <i class="fas fa-plus-circle"></i>
                    </button>
                </div>
            </div>`;
    });
    html += `</div></section>`;
    container.innerHTML += html;
}

// --- LÓGICA DE MODAL PRODUCTO ---
function prepareAdd(itemId, categoryKey) {
    const item = getAllItems().find(i => i.id === itemId);
    if (!item) return;

    if (!currentUser) {
        alert("Debes iniciar sesión para agregar productos al carrito.");
        openLoginModal();
        return;
    }

    currentSelection = { item: item, option: null, basePrice: 0, price: 0, crust: 'ninguno', crustLabel: null, crustPrice: 0, extras: [] };
    
    const modal = document.getElementById('modal-product');
    const title = document.getElementById('modal-title');
    const optionsContainer = document.getElementById('modal-options');
    const customizerContainer = document.getElementById('modal-customizer');
    const priceDisplay = document.getElementById('modal-display-price');
    const desc = document.getElementById('modal-desc');

    title.innerText = item.name;
    optionsContainer.innerHTML = '';

    if(item.prices) {
        desc.innerText = (item.type === 'pizza' || item.type === 'bebida') ? 'Selecciona el tamaño:' : 'Selecciona la salsa:';
        const keys = Object.keys(item.prices);
        currentSelection.basePrice = item.prices[keys[0]];
        currentSelection.option = keys[0];

        keys.forEach((key, index) => {
            const price = item.prices[key];
            const isChecked = index === 0 ? 'checked' : '';
            optionsContainer.innerHTML += `
                <label class="radio-option">
                    <span>
                        <input type="radio" name="prod_opt" value="${key}" data-price="${price}" ${isChecked} onchange="updateSelection(this)">
                        ${key}
                    </span>
                    <span>S/. ${price.toFixed(2)}</span>
                </label>`;
        });
    } else {
        desc.innerText = '';
        currentSelection.basePrice = item.price;
        currentSelection.option = 'Único';
        optionsContainer.innerHTML = '<p style="color:var(--primary); font-weight:bold;">¡Excelente elección!</p>';
    }

    // Configurador de personalización: solo para pizzas
    if (item.type === 'pizza') {
        customizerContainer.classList.remove('hidden');
        customizerContainer.innerHTML = buildCustomizerHTML();
    } else {
        customizerContainer.classList.add('hidden');
        customizerContainer.innerHTML = '';
    }

    recalcPrice();
    modal.style.display = 'flex';
}

function buildCustomizerHTML() {
    let html = `<div class="customizer-section">
        <h4><i class="fas fa-sliders"></i> Personaliza tu pizza</h4>
        <p class="customizer-subtitle">Casco relleno</p>
        <div class="crust-options">`;

    crustOptions.forEach((c, index) => {
        html += `
            <label class="radio-option">
                <span>
                    <input type="radio" name="crust_opt" value="${c.key}" data-price="${c.price}" data-label="${c.label}" ${index === 0 ? 'checked' : ''} onchange="updateCrust(this)">
                    ${c.label}
                </span>
                <span>${c.price > 0 ? '+S/. ' + c.price.toFixed(2) : 'Gratis'}</span>
            </label>`;
    });

    html += `</div>
        <p class="customizer-subtitle">Ingredientes adicionales</p>
        <div class="extra-options">`;

    extraIngredients.forEach(e => {
        html += `
            <label class="extra-chip">
                <input type="checkbox" value="${e.key}" data-price="${e.price}" data-label="${e.label}" onchange="toggleExtra(this)">
                <span>${e.label}</span> <small>+S/. ${e.price.toFixed(2)}</small>
            </label>`;
    });

    html += `</div></div>`;
    return html;
}

function updateSelection(radio) {
    currentSelection.basePrice = parseFloat(radio.dataset.price);
    currentSelection.option = radio.value;
    recalcPrice();
}

function updateCrust(radio) {
    currentSelection.crust = radio.value;
    currentSelection.crustPrice = parseFloat(radio.dataset.price);
    currentSelection.crustLabel = radio.value === 'ninguno' ? null : radio.dataset.label;
    recalcPrice();
}

function toggleExtra(checkbox) {
    const key = checkbox.value;
    if (checkbox.checked) {
        currentSelection.extras.push({ key: key, label: checkbox.dataset.label, price: parseFloat(checkbox.dataset.price) });
    } else {
        currentSelection.extras = currentSelection.extras.filter(e => e.key !== key);
    }
    recalcPrice();
}

function recalcPrice() {
    const extrasTotal = currentSelection.extras.reduce((sum, e) => sum + e.price, 0);
    currentSelection.price = currentSelection.basePrice + (currentSelection.crustPrice || 0) + extrasTotal;
    document.getElementById('modal-display-price').innerText = `S/. ${currentSelection.price.toFixed(2)}`;
}

function confirmAddToCart() {
    if(!currentSelection.item) return;
    
    const newItem = {
        id: currentSelection.item.id + '-' + Date.now(),
        name: currentSelection.item.name,
        option: currentSelection.option,
        crust: currentSelection.crustLabel || null,
        extras: currentSelection.extras.map(e => e.label),
        price: currentSelection.price,
        img: currentSelection.item.img
    };

    cart.push(newItem);
    saveCart();
    updateCartUI();
    closeModal('modal-product');
    
    const cartBtnIcon = document.querySelector('.fa-shopping-cart');
    cartBtnIcon.style.color = '#2ecc71';
    setTimeout(() => cartBtnIcon.style.color = 'var(--dark)', 500);
}

// --- LÓGICA DEL CARRITO (PERSISTENTE) ---
function saveCart() {
    localStorage.setItem('megaPizza_cart', JSON.stringify(cart));
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

function renderCartContent() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    
    if(cart.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 20px; color: #888;">El carrito está vacío</p>';
        totalEl.innerText = 'S/. 0.00';
        return;
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const fallback = placeholders.cart;
        const crustStr = item.crust ? `<br><small>${item.crust}</small>` : '';
        const extrasStr = (item.extras && item.extras.length) ? `<br><small>+ ${item.extras.join(', ')}</small>` : '';
        container.innerHTML += `
            <div class="cart-item">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:5px;" onerror="this.src='${fallback}'">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span>${item.option}${crustStr}${extrasStr}</span>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div>S/. ${item.price.toFixed(2)}</div>
                    <div class="btn-remove" style="color:red; font-size:0.8rem; cursor:pointer;" onclick="removeFromCart(${index})">Eliminar</div>
                </div>
            </div>`;
    });
    totalEl.innerText = `S/. ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderCartContent();
}

function openCartModal() {
    renderCartContent();
    document.getElementById('modal-cart').style.display = 'flex';
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.toggle('selected', opt.dataset.method === method);
    });
    document.getElementById('payment-error').classList.add('hidden');
}

const paymentMethodLabels = {
    yape: 'Yape',
    plin: 'Plin',
    tarjeta: 'Tarjeta',
    efectivo: 'Efectivo'
};

function checkout() {
    if (!currentUser) {
        alert("Debes iniciar sesión para finalizar tu pedido.");
        openLoginModal();
        return;
    }
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    if (!selectedPaymentMethod) {
        document.getElementById('payment-error').classList.remove('hidden');
        return;
    }
    const userName = currentUser ? currentUser.name : 'Cliente';
    const paymentLabel = paymentMethodLabels[selectedPaymentMethod];
    const newOrder = createOrder();
    alert(`¡Gracias por tu compra, ${userName}! El total es ${document.getElementById('cart-total-price').innerText}, pagado con ${paymentLabel}. Tu pedido ${newOrder.id} será procesado. Puedes seguir su estado en "Mis Pedidos".`);

    cart = [];
    saveCart();
    updateCartUI();
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    closeModal('modal-cart');
    openOrdersModal();
}

// --- LÓGICA DE ESTADO DEL PEDIDO (SEGUIMIENTO) ---
function saveOrders() {
    localStorage.setItem('megaPizza_orders', JSON.stringify(orders));
}

function createOrder() {
    const order = {
        id: 'PED-' + Date.now().toString().slice(-6),
        userEmail: currentUser.email,
        date: new Date().toISOString(),
        items: cart.map(i => ({ name: i.name, option: i.option, crust: i.crust, extras: i.extras, price: i.price })),
        total: cart.reduce((sum, i) => sum + i.price, 0),
        payment: selectedPaymentMethod
    };
    orders.unshift(order);
    saveOrders();
    return order;
}

function getOrderStage(order) {
    const elapsedMinutes = (Date.now() - new Date(order.date).getTime()) / 60000;
    let current = ORDER_STAGES[0];
    for (const stage of ORDER_STAGES) {
        if (elapsedMinutes >= stage.minMinutes) current = stage;
    }
    return current;
}

function openOrdersModal() {
    if (!currentUser) {
        alert("Debes iniciar sesión para ver tus pedidos.");
        openLoginModal();
        return;
    }
    renderOrders();
    document.getElementById('modal-orders').style.display = 'flex';

    if (ordersRefreshInterval) clearInterval(ordersRefreshInterval);
    ordersRefreshInterval = setInterval(renderOrders, 5000);
}

function renderOrders() {
    const container = document.getElementById('orders-list-container');
    if (!currentUser) { container.innerHTML = ''; return; }

    const userOrders = orders.filter(o => o.userEmail === currentUser.email);

    if (userOrders.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px; color:#888;">Todavía no tienes pedidos.</p>';
        return;
    }

    container.innerHTML = userOrders.map(order => {
        const stage = getOrderStage(order);
        const stageIndex = ORDER_STAGES.findIndex(s => s.key === stage.key);
        const dateStr = new Date(order.date).toLocaleString('es-PE', { dateStyle: 'short', timeStyle: 'short' });

        const stepsHtml = ORDER_STAGES.map((s, idx) => {
            const stepHtml = `
                <div class="order-step ${idx <= stageIndex ? 'done' : ''} ${idx === stageIndex ? 'current' : ''}">
                    <div class="order-step-icon"><i class="fas ${s.icon}"></i></div>
                    <span>${s.label}</span>
                </div>`;
            const lineHtml = idx < ORDER_STAGES.length - 1 ? `<div class="order-step-line ${idx < stageIndex ? 'done' : ''}"></div>` : '';
            return stepHtml + lineHtml;
        }).join('');

        const itemsHtml = order.items.map(i => {
            const crustStr = i.crust ? `<br><small>${i.crust}</small>` : '';
            const extrasStr = (i.extras && i.extras.length) ? `<br><small>+ ${i.extras.join(', ')}</small>` : '';
            return `<div class="order-item-line">${i.name} (${i.option})${crustStr}${extrasStr} — S/. ${i.price.toFixed(2)}</div>`;
        }).join('');

        return `
            <div class="order-card">
                <div class="order-card-header">
                    <div><strong>${order.id}</strong><br>${dateStr}</div>
                    <span class="order-status-badge">${stage.label}</span>
                </div>
                <div class="order-steps">${stepsHtml}</div>
                <div class="order-items">${itemsHtml}</div>
                <div class="order-footer">
                    <span>Pago: ${paymentMethodLabels[order.payment] || order.payment}</span>
                    <strong>Total: S/. ${order.total.toFixed(2)}</strong>
                </div>
            </div>`;
    }).join('');
}

// --- LÓGICA DE REGISTRO / LOGIN (PERSISTENTE) ---

function showAuthForm(mode) {
    currentAuthMode = mode;
    document.getElementById('login-form').classList.toggle('hidden', mode !== 'login');
    document.getElementById('register-form').classList.toggle('hidden', mode !== 'register');
    document.getElementById('showLogin').classList.toggle('active', mode === 'login');
    document.getElementById('showRegister').classList.toggle('active', mode === 'register');
    document.getElementById('auth-title').innerText = mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta';
    
    document.getElementById('login-error').innerText = '';
    document.getElementById('register-error').innerText = '';
}

function checkSession() {
    if(currentUser) {
        updateUserUI(currentUser.name);
    }
}

function openLoginModal() {
    if(!currentUser) {
        showAuthForm('login');
        document.getElementById('modal-login').style.display = 'flex';
    } else {
        if(confirm(`¿Deseas cerrar sesión, ${currentUser.name}?`)) {
            logout();
        }
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const address = document.getElementById('registerAddress').value.trim(); // NUEVA LÍNEA: Obtener dirección
    const password = document.getElementById('registerPassword').value;
    const errorEl = document.getElementById('register-error');

    if (registeredUsers.some(u => u.email === email)) {
        errorEl.innerText = "Error: Este correo ya está registrado.";
        return;
    }

    // Guardar la dirección en el objeto de usuario
    registeredUsers.push({ name, email, address, password }); 
    localStorage.setItem('megaPizza_users', JSON.stringify(registeredUsers));
    
    alert(`¡Registro exitoso! Hola ${name}. Ahora puedes iniciar sesión.`);
    showAuthForm('login');
    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = password;
}

// **Asegúrate de mantener el resto de tu script.js sin cambios.**

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorEl = document.getElementById('login-error');

    const user = registeredUsers.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('megaPizza_user', JSON.stringify(currentUser));
        updateUserUI(user.name);
        closeModal('modal-login');
    } else {
        errorEl.innerText = "Error: Credenciales inválidas. ¿Necesitas registrarte?";
    }
}

function updateUserUI(name) {
    const userBtn = document.getElementById('userName');
    userBtn.innerText = `Hola, ${name}`;
    userBtn.style.color = 'var(--primary)';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('megaPizza_user');
    document.getElementById('userName').innerText = "Ingresar";
    document.getElementById('userName').style.color = "";
    alert("Has cerrado sesión. ¡Vuelve pronto!");
}

// --- UTILIDADES DE MODALES ---
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    if (id === 'modal-orders' && ordersRefreshInterval) {
        clearInterval(ordersRefreshInterval);
        ordersRefreshInterval = null;
    }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        if (event.target.id === 'modal-orders' && ordersRefreshInterval) {
            clearInterval(ordersRefreshInterval);
            ordersRefreshInterval = null;
        }
    }
}