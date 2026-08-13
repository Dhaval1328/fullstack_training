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

      {cart.map((data) => {
        return (
          <li key={data.id}>
            <h2>{data.name}</h2>

            <p>Price: ₹{data.price}</p>

            <p>Quantity: {data.quantity}</p>

            <button>-</button>
            <button>+</button>
            <button>Remove</button>
          </li>
        );
      })}
    </>
  );
}

export default Cart;
