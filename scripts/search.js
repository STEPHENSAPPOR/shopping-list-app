document.getElementById("search-bar").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  renderProducts(filteredProducts);
});
