const productList = document.getElementById('productList');

const products = [
  { name: 'Product A', price: 100, quality: 8 },
  { name: 'Product B', price: 80, quality: 9 },
  { name: 'Product C', price: 120, quality: 7 },
];

// Find the cheapest and highest quality products
const cheapestProduct = products.reduce((prev, current) => (prev.price < current.price ? prev : current));
const highestQualityProduct = products.reduce((prev, current) => (prev.quality > current.quality ? prev : current));

// Display products
products.forEach(product => {
  const productDiv = document.createElement('div');

  productDiv.innerHTML = `
    <div class="product-info">
      <h2>${product.name}</h2>
      <p>Quality: ${product.quality}</p>
    </div>
    <div class="price">$${product.price}</div>
  `;

  if (product === cheapestProduct) {
    productDiv.classList.add('cheapest');
  }

  if (product === highestQualityProduct) {
    productDiv.classList.add('highest-quality');
  }

  productList.appendChild(productDiv);
});
