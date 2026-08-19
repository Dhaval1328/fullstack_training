import { useState } from "react";
import "../Style/Form.css";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name is:", name);
    console.log("Email is:", email);
    console.log("Password is:", password);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Enter Your Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />

        <br />

        <label>Enter Your Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />

        <br />

        <label>Enter Your Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Create;
