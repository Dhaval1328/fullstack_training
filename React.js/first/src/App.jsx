import React from "react";

function App() {
  const h1 = React.createRoot("h1", null, "This Is First Component");
  return <div>{h1}</div>;
}

export default App;
