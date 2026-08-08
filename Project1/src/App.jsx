import Example_1 from "./React_Props/Example_1";

function App() {
  let name = "Dhaval";
  let age = 20;

  return (
    <>
      <Example_1 name={name} age={age} />
    </>
  );
}

export default App;
