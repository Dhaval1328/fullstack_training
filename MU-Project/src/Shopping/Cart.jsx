let cart = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mobile",
    price: 50000,
    quantity: 1,
  },
  {
    id: 3,
    name: "TV",
    price: 50000,
    quantity: 1,
  },
];

function Cart() {
  return (
    <>
      <h1>Cart Page</h1>

      <h2>Laptop</h2>
      <p>Price: 50000</p>
      <p>Quantity</p>
      <button>-</button>
      <button>+</button>
      <button>Remove</button>
    </>
  );
}

export default Cart;
