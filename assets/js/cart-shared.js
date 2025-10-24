// Shared Cart Functionality for U-Health Website

// Function to add a product to the cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(name + " has been added to your cart!");

    updateCartCount();  // Update cart count on the icon
}

// Function to update the cart count in the cart icon
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Redirect to the cart page (adjust path based on current page location)
function redirectToCart() {
    // Check if we're in a subfolder (pages/) or root
    if (window.location.pathname.includes('/pages/')) {
        window.location.href = 'cart.html';
    } else {
        window.location.href = 'pages/cart.html';
    }
}

// Initialize cart count when page loads
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});
