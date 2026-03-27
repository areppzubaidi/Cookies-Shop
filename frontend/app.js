// Product Data
const products = [
    {
        name: "Chocolate Chip Delight",
        price: "$4.99",
        description: "Classic cookie with premium chocolate chips",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
    },
    {
        name: "Oatmeal Raisin Bliss",
        price: "$4.49",
        description: "Healthy oats with sweet raisins",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
    },
    {
        name: "Double Chocolate Dream",
        price: "$5.49",
        description: "For the ultimate chocolate lover",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
    },
    {
        name: "White Chocolate Macadamia",
        price: "$5.99",
        description: "Creamy white chocolate with crunchy nuts",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
    },
    {
        name: "Peanut Butter Perfection",
        price: "$4.99",
        description: "Rich peanut butter flavor",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
    },
    {
        name: "Snickerdoodle",
        price: "$4.49",
        description: "Cinnamon sugar coated classic",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
    }
];

// Load products on home page
if (document.getElementById('product-grid')) {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
        `;
        productGrid.appendChild(productCard);
    });
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Handle contact form submission
if (document.getElementById('contactForm')) {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon. 🍪';
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.color = '#155724';
        form.reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.style.backgroundColor = '';
        }, 5000);
    });
}
