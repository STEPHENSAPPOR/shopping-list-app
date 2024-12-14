let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart)); 
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart)); 
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartBadge = document.getElementById("cart-badge");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item.name} x${item.quantity} 
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItems.appendChild(listItem);

    total += item.price * item.quantity;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  cartBadge.textContent = cart.length; 
}

updateCart(); 

document.getElementById("checkout-button").addEventListener("click", () => {
  alert("Checkout process initiated! (This feature is a placeholder.)");
});
