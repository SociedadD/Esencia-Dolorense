const products = [
    {
        id: 1,
        name: "Maceton Grande",
        category: "talavereado",
        size: "Diámetro: 20cm / Alto: 18cm",
        price: 300,
        image: "Maceton.G.A.jpg",
        description: "Maceta artesanal pintada a mano con motivos florales tradicionales de Talavera. Ideal para espacios interiores y exteriores.",
        colors: [
            { name: "Perfil Azul", image: "Maceton.G.A.jpg" },
            { name: "Relieve Azul", image: "Maceton.G.RA.jpg" },
            { name: "Perfil Rojo", image: "Maceton.G.R.jpg" },
            { name: "Perfil Naranja", image: "Maceton.G.N.jpg" }
        
        ],
        features: ["Barro horneado a alta temperatura", "Esmalte libre de plomo", "Resistente a la intemperie"]
    },
    {
        id: 2,
        name: "Maceta 40cm",
        category: "talavereado",
        size: "Diámetro: 20cm / Alto: 18cm",
        price: 300,
        image: "Maceta40cm.A.jpg",
        description: "Maceta artesanal pintada a mano con motivos florales tradicionales de Talavera. Ideal para espacios interiores y exteriores.",
        colors: [
            { name: "Perfil Azul", image: "Maceta40cm.A.jpg" },
            { name: "Relieve Azul", image: "Maceta40cm.RA.jpg" },
            { name: "Perfil Rojo", image: "Maceta40cm.R.jpg" },
            { name: "Perfil Naranja", image: "Maceta40cm.N.jpg" }
        
        ],
        features: ["Barro horneado a alta temperatura", "Esmalte libre de plomo", "Resistente a la intemperie"]
    },
    {
        id: 3,
        name: "Maceta Gelatina Grande",
        category: "talavereado",
        size: "Diámetro: 20cm / Alto: 18cm",
        price: 300,
        image: "MacetaGelatina.G.A.jpg",
        description: "Maceta artesanal pintada a mano con motivos florales tradicionales de Talavera. Ideal para espacios interiores y exteriores.",
        colors: [
            { name: "Perfil Azul", image: "MacetaGelatina.G.A.jpg" },
            { name: "Relieve Azul", image: "MacetaGelatina.G.RA.jpg" },
            { name: "Perfil Rojo", image: "MacetaGelatina.G.R.jpg" },
            { name: "Perfil Naranja", image: "MacetaGelatina.G.N.jpg" }
        
        ],
        features: ["Barro horneado a alta temperatura", "Esmalte libre de plomo", "Resistente a la intemperie"]
    },
    {
        id: 4,
        name: "Maceta Molcajete",
        category: "talavereado",
        size: "Diámetro: 20cm / Alto: 18cm",
        price: 300,
        image: "MacetaMolcajete.A.png",
        description: "Maceta artesanal pintada a mano con motivos florales tradicionales de Talavera. Ideal para espacios interiores y exteriores.",
        colors: [
            { name: "Perfil Azul", image: "MacetaMolcajete.A.png" },
            { name: "Relieve Azul", image: "" },
            { name: "Perfil Rojo", image: "MacetaMolcajete.R.jpg" },
            { name: "Perfil Naranja", image: "" }
        
        ],
        features: ["Barro horneado a alta temperatura", "Esmalte libre de plomo", "Resistente a la intemperie"]
    },
    {
        id: 5,
        name: "Porta Garrafon",
        category: "talavereado",
        size: "Diámetro: 20cm / Alto: 18cm",
        price: 300,
        image: "Garrafon.A.jpg",
        description: "Maceta artesanal pintada a mano con motivos florales tradicionales de Talavera. Ideal para espacios interiores y exteriores.",
        colors: [
            { name: "Perfil Azul", image: "Garrafon.A.jpg" },
            { name: "Relieve Azul", image: "Garrafon.RA.jpg" },
            { name: "Perfil Rojo", image: "" },
            { name: "Perfil Naranja", image: "" },
            { name: "Relieve Negro", image: "Garrafon.N.jpg"},
        
        ],
        features: ["Barro horneado a alta temperatura", "Esmalte libre de plomo", "Resistente a la intemperie"]
    },
    {
        id: 6,
        name: "Juego de Maceta...",
        category: "liso",
        size: "Diámetro: 18cm / Alto: 15cm",
        price: 250,
        image: "",
        description: "Maceta de acabado liso mate con diseño minimalista. Perfecta para suculentas y plantas pequeñas.",
        colors: [
            { name: "Verde olivo", image: "JuegoMaceta1.jpg" },
            { name: "Negro Barro", image: "" }
        ],
        features: ["Acabado liso artesanal", "Incluye orificio de drenaje", "Diseño minimalista"]
    },
   
    {
        id: 7,
        name: "Maceta Caliz",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaCaliz.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Brillante", image: "" },
            { name: "Negro Mate", image: ""},
            { name: "Blanco Brillante", image: "MacetaCaliz.B.B.jpg"},
            { name: "Blanco Mate", image: ""}
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 8,
        name: "Maceta Robert Reposando",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaRobert.R.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaRobert.R.B.B.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 9,
        name: "Maceta Robert Angel",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaRobert.A.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaRobert.A.B.B.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 10,
        name: "Maceta Robert Meditando",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaRobert.M.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaRobert.M.B.B.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 11,
        name: "Maceta Robert Leyendo",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaRobert.L.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaRobert.L.B.B.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 12,
        name: "Maceta Robert Tranquilo",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaRobert.C.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaRobert.T.B.B.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 13,
        name: "Juego de Jardinera Bañera",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "JuegoJardinera.B.N.M.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Mate", image: "JuegoJardinera.B.N.M.jpg" }
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

     {
        id: 14,
        name: "Maceta Durango Grande",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaDurango.G.N.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Brillante", image: "MacetaDurango.G.N.B.jpg" },
            { name: "Verde Olivo Mate", image: "MacetaDurango.G.V.M.jpg"}
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 15,
        name: "Maceta Nido",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaNido.N.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Brillante", image: "MacetaNido.N.B.jpg" },
            { name: "Morado Brillante", image: "MacetaNido.M.B.jpg"},
            { name: "Rosa Brillante", image: "MacetaNido.R.B.jpg"}
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 16,
        name: "Juego Maceta Prisma",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "JuegoPrisma.N.M.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Mate", image: "MacetaNido.N.M.jpg" },
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 17,
        name: "Maceta Queso Rayado",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaQueso.R.N.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Brillante", image: "MacetaQueso.R.N.B.jpg"},
            { name: "Negro Mate", image: "MacetaQueso.R.N.M.jpg"},
            { name: "Blanco Brillante", image: "MacetaQueso.R.B.B.jpg" },
            { name: "Arena", image: "MacetaQueso.R.A.jpg"}
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 18,
        name: "Juego Bola Larga",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "JuegoBolaLarga.M.V.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Verde Olivo", image: "JuegoBolaLarga.M.V.jpg" },
            { name: "Negro Mate", image: "MacetaQueso.R.N.M.jpg"},
            { name: "Negro Brillante", image: "MacetaQueso.R.N.B.jpg"},
            { name: "Arena", image: "MacetaQueso.R.A.jpg"}
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

    {
        id: 19,
        name: "Maceta Cilindro Grande",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaCilindro.G.B.B.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Blanco Brillante", image: "MacetaCilindro.G.B.B.jpg"},
            { name: "Gris Brillante", image: "MacetaCilindro.G.G.B.jpg"},
            { name: "Arena", image: "MacetaCilindro.G.A.jpg" },
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    },

     {
        id: 20,
        name: "Maceta Cilindro Rayado",
        category: "liso",
        size: "Diámetro: 15cm / Alto: 12cm",
        price: 200,
        image: "MacetaCilindro.R.N.M.jpg",
        description: "Pieza clásica en barro terracota que resalta la belleza natural de cualquier planta.",
        colors: [
            { name: "Negro Mate", image: "MacetaCilindro.R.N.M.jpg" },
        ],
        features: ["Material 100% poroso que favorece las raíces", "Estilo rústico tradicional"]
    }
];

let cart = [];

// Elementos del DOM
const sideMenu = document.getElementById('side-menu');
const backdrop = document.getElementById('backdrop');
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const cartToggle = document.getElementById('cart-toggle');
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

// --- NAVEGACIÓN Y MENÚ LATERAL ---
function toggleMenu() {
    sideMenu.classList.toggle('open');
    backdrop.classList.toggle('show');
}

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    backdrop.classList.remove('show');
});

// Cambiar de Sección
function navigateTo(sectionId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.menu-links a').forEach(a => a.classList.remove('active'));

    const targetSection = document.getElementById(`sec-${sectionId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const activeLink = document.querySelector(`.menu-links a[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Cerrar menú si está abierto
    sideMenu.classList.remove('open');
    backdrop.classList.remove('show');
}

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        navigateTo(section);
    });
});

cartToggle.addEventListener('click', () => navigateTo('carrito'));

// --- RENDERIZADO DE PRODUCTOS Y FILTROS ---
function renderProducts(items) {
    productsGrid.innerHTML = '';
    if (items.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">No se encontraron productos.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p style="font-size: 0.8rem; color: #666;">${product.size}</p>
            <p class="price">$${product.price} MXN</p>
            <button class="btn-primary btn-add-direct">Agregar al carrito</button>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-add-direct')) {
                e.stopPropagation();
                addToCart(product.id);
            } else {
                openProductDetail(product.id);
            }
        });

        productsGrid.appendChild(card);
    });
}

// Filtro por categoría
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.getAttribute('data-filter');
        if (filter === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filter);
            renderProducts(filtered);
        }
    });
});

// Buscador por nombre
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
});

// --- LÓGICA DEL CARRITO CON SOPORTE DE COLOR ---
function addToCart(productId, selectedColor = null, selectedImage = null) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let colorToUse = selectedColor;
    let imageToUse = selectedImage || product.image;

    // Si se agrega directo desde el catálogo general, tomar el primer color por defecto
    if (!colorToUse) {
        if (product.colors && product.colors.length > 0) {
            colorToUse = typeof product.colors[0] === 'object' ? product.colors[0].name : product.colors[0];
            imageToUse = typeof product.colors[0] === 'object' ? product.colors[0].image : product.image;
        } else {
            colorToUse = "Único";
        }
    }

    // Buscar si existe el mismo producto CON EL MISMO COLOR en el carrito
    const existingIndex = cart.findIndex(item => item.id === productId && item.selectedColor === colorToUse);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            selectedColor: colorToUse,
            image: imageToUse,
            qty: 1
        });
    }
    updateCartUI();
}

// Modificar cantidad usando el índice exacto en el carrito
function updateQuantity(cartIndex, delta) {
    if (cart[cartIndex]) {
        cart[cartIndex].qty += delta;
        if (cart[cartIndex].qty <= 0) {
            cart.splice(cartIndex, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = totalItems;

    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';

    let totalPrice = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align: center;">El carrito está vacío.</p>';
    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price * item.qty;
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div>
                        <h4>${item.name}</h4>
                        <p style="font-size: 0.85rem; color: #555; margin: 2px 0;">Color: <strong>${item.selectedColor}</strong></p>
                        <p style="font-weight: bold; color: var(--primary-color);">$${item.price} MXN</p>
                    </div>
                </div>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            `;
            container.appendChild(itemElement);
        });
    }

    document.getElementById('cart-total').innerText = totalPrice;
}

// --- ENVÍO DE PEDIDO VÍA WHATSAPP ---
function sendOrderToWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega algunos productos antes de realizar el pedido.");
        return;
    }

    const phoneNumber = "524151404380"; 

    let message = "¡Hola Esencia Dolorense! 🌿 Me gustaría realizar el siguiente pedido:\n\n";

    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `• ${item.name} (Color: ${item.selectedColor}) (x${item.qty}) - $${subtotal} MXN\n`;
    });

    message += `\n*Total a pagar:* $${total} MXN\n`;
    message += "Quedo a la espera de sus datos para acordar la entrega y el pago. ¡Muchas gracias!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Inicialización de la vista
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    const checkoutBtn = document.querySelector('#sec-carrito .btn-primary');
    if (checkoutBtn) {
        checkoutBtn.setAttribute('onclick', 'sendOrderToWhatsApp()');
    }
});

// --- LÓGICA DE LA SECCIÓN DETALLE ---
let selectedProductId = null;

function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    selectedProductId = product.id;

    const detailImg = document.getElementById('detail-img');
    detailImg.src = product.image;
    detailImg.alt = product.name;
    document.getElementById('detail-name').innerText = product.name;
    document.getElementById('detail-price').innerText = `$${product.price} MXN`;
    document.getElementById('detail-size').innerText = product.size;
    document.getElementById('detail-description').innerText = product.description || "Sin descripción disponible.";

    // Llenar selector de colores asociando la imagen de cada opción
    const colorSelect = document.getElementById('detail-color-select');
    colorSelect.innerHTML = '';
    
    if (product.colors && product.colors.length > 0) {
        product.colors.forEach(colorObj => {
            const opt = document.createElement('option');
            if (typeof colorObj === 'object') {
                opt.value = colorObj.name;
                opt.textContent = colorObj.name;
                opt.setAttribute('data-image', colorObj.image);
            } else {
                opt.value = colorObj;
                opt.textContent = colorObj;
                opt.setAttribute('data-image', product.image);
            }
            colorSelect.appendChild(opt);
        });
    } else {
        colorSelect.innerHTML = `<option value="Único" data-image="${product.image}">Único disponible</option>`;
    }

    // Llenar lista de características
    const featuresList = document.getElementById('detail-features-list');
    featuresList.innerHTML = '';
    if (product.features && product.features.length > 0) {
        product.features.forEach(feat => {
            const li = document.createElement('li');
            li.textContent = feat;
            featuresList.appendChild(li);
        });
    }

    navigateTo('detalle');
}

// Cambio dinámico de imagen al seleccionar color en la vista detalle
const detailColorSelect = document.getElementById('detail-color-select');
if (detailColorSelect) {
    detailColorSelect.addEventListener('change', (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const newImgSrc = selectedOption.getAttribute('data-image');
        const detailImg = document.getElementById('detail-img');

        if (newImgSrc && detailImg) {
            detailImg.style.opacity = '0.3';
            setTimeout(() => {
                detailImg.src = newImgSrc;
                detailImg.style.opacity = '1';
            }, 150);
        }
    });
}

// Botón volver al catálogo
document.getElementById('btn-volver-catalogo').addEventListener('click', () => {
    navigateTo('tienda');
});

// Botón agregar al carrito con variante de color e imagen seleccionada
document.getElementById('detail-add-btn').addEventListener('click', () => {
    if (selectedProductId) {
        const colorSelect = document.getElementById('detail-color-select');
        const selectedOption = colorSelect.options[colorSelect.selectedIndex];
        
        const colorName = colorSelect.value;
        const colorImg = selectedOption ? selectedOption.getAttribute('data-image') : null;

        addToCart(selectedProductId, colorName, colorImg);
        alert(`¡Añadido al carrito en color: ${colorName}!`);
    }
});