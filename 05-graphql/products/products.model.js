const products = [
  { id: 'redshoe', description: 'Red Shoe', price: 42.12, reviews: [] },
  { id: 'bluejeans', description: 'Blue Jeans', price: 55.55, reviews: [] },
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
  return products.find(product => product.id === productId);
}

function addNewProduct(id, description, price) {
  const newProduct = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);

  if (!product) return;

  const review = { rating, comment };
  product.reviews.push(review);
  return review;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
