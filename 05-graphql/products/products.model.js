const products = [
  { id: 'redshoe', description: 'Red Shoe', price: 42.12 },
  { id: 'bluejeans', description: 'Blue Jeans', price: 55.55 },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(minPrice, maxPrice) {
  return products.filter(
    product => product.price >= minPrice && product.price <= maxPrice
  );
}

function getProductById(productId) {
  console.log('productId:', productId);
  return products.find(product => product.id === productId);
}

module.exports = { getAllProducts, getProductsByPrice, getProductById };
