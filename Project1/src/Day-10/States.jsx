import { useState } from "react";

function States() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  useState();
  return (
    <>
      <h1>----------State----------</h1>
      <ul>
        <li>
          State is the data that can be change over time on the basis of some
          eventor action.
        </li>
      </ul>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default States;
