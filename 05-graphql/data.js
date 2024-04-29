const DUMMY_PRODUCTS = [
  { id: 'redshoe', description: 'Red Shoe', price: 42.12 },
  { id: 'bluejeans', description: 'Blue Jeans', price: 55.55 },
];

const DUMMY_ORDERS = [
  {
    date: '2005-05-05',
    subtotal: 90.22,
    items: [
      {
        product: { id: 'redshoe', description: 'Old Red Shoe', price: 45.11 },
        quantity: 2,
      },
    ],
  },
];

module.exports = { DUMMY_PRODUCTS, DUMMY_ORDERS };
