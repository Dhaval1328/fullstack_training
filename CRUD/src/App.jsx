import { Routes, Route } from "react-router-dom";

import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
    </Routes>
  );
}

export default App;
