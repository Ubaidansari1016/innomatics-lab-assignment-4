// script.js
let cart = [];
let total = 0;

function addToCart(button) {
    const product = button.parentElement;
    const productName = product.getAttribute('data-name');
    const productPrice = parseFloat(product.getAttribute('data-price'));

    cart.push({ name: productName, price: productPrice });
    total += productPrice;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear the cart display
    cartItems.innerHTML = '';

    // Add each item to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update the total price
    totalElement.textContent = total.toFixed(2);
}