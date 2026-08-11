import { useState } from "react";
import "./Form.css";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlSubmit = (e) => {
    e.preventDefault();

    console.log("Email is :", email);
    console.log("Password is :", password);
  };

  return (
    <>
      <form className="form-container" onSubmit={handlSubmit}>
        <h2>Login</h2>

        <label>Enter Your Email :</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />

        <br />

        <label>Enter Your Password :</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />

        <br />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Loginform;
