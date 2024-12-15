const products = [
  
  {
    id: 4,
    name: "Strawberry Cheesecake",
    price: 9.50,
    description: "Classic cheesecake with a strawberry topping.",
    image: "./assets/images/image-strawberry-cheesecake-thumbnail.jpg"
  },
  {
    id: 5,
    name: "Chocolate Croissant",
    price: 4.50,
    description: "Buttery croissant filled with rich chocolate.",
    image: "./assets/images/image-chocolate-croissant-thumbnail.jpg"
  },
  {
    id: 6,
    name: "Fruit Tart",
    price: 10.00,
    description: "Colorful tart topped with fresh fruit.",
    image: "./assets/images/image-fruit-tart-thumbnail.jpg"
  },
  {
    id: 1,
    name: "Waffle with Berries",
    price: 6.50,
    description: "Delicious waffles topped with fresh berries.",
    image: "./assets/images/image-waffle-thumbnail.jpg"
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    price: 7.00,
    description: "Rich crème brûlée with a hint of vanilla bean.",
    image: "./assets/images/image-creme-brulee-thumbnail.jpg"
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    price: 8.00,
    description: "Assorted macarons in delightful flavors.",
    image: "./assets/images/image-macaron-thumbnail.jpg"
  },
];


function renderProducts(productsList) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ''; 

  productsList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
}

renderProducts(products);

function sortProducts(criteria) {
  const sortedProducts = [...products].sort((a, b) => {
    if (criteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (criteria === 'price') {
      return a.price - b.price;
    }
  });
  renderProducts(sortedProducts);
}
