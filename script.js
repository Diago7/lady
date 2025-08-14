// Product data
const products = [
    {
        id: 1,
        title: "Aishwarya Nair",
        description: "AGE 28",
        price: "FREE",
        image: "image/download%204.jpeg"
    },
    {
        id: 2,
        title: "Ritu Verma",
        description: "AGE 23",
        price: "FREE",
        image: "image/download%207.jpeg"
    },
    {
        id: 3,
        title: "Shreya Iyer",
        description: "AGE 31",
        price: "FREE",
        image: "image/download%20bb.jpeg"
    },
    {
        id: 4,
        title: "Pooja Choudhary",
        description: "AGE 32",
        price: "FREE",
        image: "image/download%20bv.jpeg"
    },
    {
        id: 5,
        title: "JANU",
        description: "AGE 29",
        price: "FREE",
        image: "image/download%20nn.jpeg"
    },
    {
        id: 6,
        title: "Dinith",
        description: "AGE 33",
        price: "FREE",
        image: "image/download.jpeg"
    },
    {
        id: 7,
        title: "Nisha Patel",
        description: "AGE 34",
        price: "FREE",
        image: "image/e%2057.jpeg"
    },
    {
        id: 8,
        title: "Sneha Kapoor",
        description: "AGE 27",
        price: "FREE",
        image: "image/Ramya.jpeg"
    },
    {
        id: 9,
        title: "Priya Reddy",
        description: "AGE 20",
        price: "FREE",
        image: "image/smile%20please.jpeg"
    },
    {
        id: 10,
        title: "Ananya Sharma",
        description: "AGE 33",
        price: "FREE",
        image: "image/pasi.jpeg"
    }
];

// Track click counts for each product
const clickCounts = {};

// AdTerra link (replace with your actual AdTerra link)
const adterraLink = "https://www.profitableratecpm.com/j3bcvy8kt?key=05d73bce16373e962dce820d2ab802e3"; // Replace with your AdTerra link

// Contact details
const contactDetails = {
    phone: "+971 50 123 4567",
    
};

function generateProductHTML(product) {
    return `
        <div class="product-card" onclick="handleProductClick(${product.id})" id="product-${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="fallback-icon" style="display:none;">📦</div>
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-price">${product.price}</div>
            <div class="click-indicator" id="indicator-${product.id}">Click to view details</div>
            <div class="contact-details" id="contact-${product.id}">
                <h3>📞 Contact Us</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <span>📱</span>
                        <span>Phone: ${contactDetails.phone}</span>
                    </div>
                    <div class="contact-item">
                        <span>✉️</span>
                        <span>Email: ${contactDetails.email}</span>
                    </div>
                    <div class="contact-item">
                        <span>💬</span>
                        <span>WhatsApp: ${contactDetails.whatsapp}</span>
                    </div>
                    <div class="contact-item">
                        <span>📍</span>
                        <span>Address: ${contactDetails.address}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => generateProductHTML(product)).join('');
    
    // Initialize click counts
    products.forEach(product => {
        clickCounts[product.id] = 0;
    });
}

function handleProductClick(productId) {
    clickCounts[productId]++;
    const indicator = document.getElementById(`indicator-${productId}`);
    const contactDiv = document.getElementById(`contact-${productId}`);

    if (clickCounts[productId] === 1) {
        // First click - redirect to AdTerra link
        indicator.textContent = "Redirecting to offer...";
        indicator.style.background = "#ff6b6b";
        indicator.style.color = "white";
        
        // Show loading state
        setTimeout(() => {
            window.open(adterraLink, '_blank');
            indicator.textContent = "Click again for contact details";
            indicator.style.background = "#4ecdc4";
        }, 1000);
        
    } else if (clickCounts[productId] === 2) {
        // Second click - show contact details
        indicator.style.display = "none";
        contactDiv.style.display = "block";
        
    } else {
        // Reset after second click
        clickCounts[productId] = 0;
        indicator.style.display = "inline-block";
        indicator.textContent = "Click to view details";
        indicator.style.background = "#f0f0f0";
        indicator.style.color = "#888";
        contactDiv.style.display = "none";
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// Add touch support for mobile devices
document.addEventListener('touchstart', function() {}, true);