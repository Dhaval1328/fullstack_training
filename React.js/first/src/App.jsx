import { useState } from "react";
function App() {
  const [count, setcount] = useState(0);

  function decrement() {
    setcount(count - 1);
  }
  function increment() {
    setcount(count + 1);
  }
  function reset() {
    setcount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
