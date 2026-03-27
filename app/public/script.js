const products = [
    { id: 1, name: "Chocolate Chip", price: 2.50 },
    { id: 2, name: "Oatmeal Raisin", price: 2.00 },
    { id: 3, name: "Sugar Cookie", price: 1.75 }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = cart.map(item => `
        <li>
            ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </li>
    `).join('');
    cartCount.innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

async function checkout() {
    if (cart.length === 0) {
        document.getElementById('checkout-message').innerText = "Your cart is empty!";
        return;
    }

    const orderData = {
        items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });
        const result = await response.json();
        document.getElementById('checkout-message').innerText = result.message;
        cart = [];
        updateCartDisplay();
    } catch (err) {
        document.getElementById('checkout-message').innerText = "Error placing order. Try again.";
    }
}

document.getElementById('checkout-btn').addEventListener('click', checkout);
displayProducts();
