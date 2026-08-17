import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    quantity: 1,
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    quantity: 1,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>

              <p>Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>Subtotal: ₹{item.price * item.quantity}</p>

              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span style={{ margin: "0 15px" }}>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>

              <br />
              <br />

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}
