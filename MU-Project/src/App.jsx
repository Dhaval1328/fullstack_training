import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Loginform from "./Day-14/Loginform";
import Form2 from "./Day-14/Form2";
import Review from "./Review/Review";
import Cart from "./Shopping/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />

        <Route path="/about" element={<h1>About Page</h1>} />

        <Route path="/projects" element={<h1>Projects Page</h1>} />

        <Route path="/contact" element={<h1>Contact Page</h1>} />

        <Route path="/login" element={<Loginform />} />

        <Route path="/register" element={<Form2 />} />

        <Route path="/review" element={<Review />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
