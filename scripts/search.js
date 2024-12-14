document.getElementById("search-bar").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  document.getElementById("product-list").innerHTML = "";
  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    document.getElementById("product-list").appendChild(productCard);
  });
});
