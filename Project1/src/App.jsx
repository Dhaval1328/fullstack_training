import Example_1 from "./React_Props/Example_1";
import Props from "./Day-10/Props";

function App() {
  let name = "Dhaval";
  let age = 20;
  let first = "Dhaval";

  return (
    <>
      <Example_1 name={name} age={age} />
      <Props name={first} />
    </>
  );
}

export default App;
