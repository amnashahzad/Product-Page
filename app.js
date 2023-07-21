// Shopping cart data
let cartItems = [];

// Function to add an item to the cart
function addToCart(productName, price) {
  cartItems.push({ productName, price });
  updateCart();
}

// Function to update the shopping cart display
function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  cartItemsElement.innerHTML = '';

  let total = 0;
  cartItems.forEach((item) => {
    cartItemsElement.innerHTML += `<li>${item.productName} - $${item.price.toFixed(2)}</li>`;
    total += item.price;
  });

  cartTotalElement.innerText = `$${total.toFixed(2)}`;
}

// Function to simulate the checkout process (clears the cart)
function checkout() {
  cartItems = [];
  updateCart();
  alert('Thank you for your purchase!');
}
