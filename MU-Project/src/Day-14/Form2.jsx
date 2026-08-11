import { useState } from "react";
import "./Form.css";

function Form2() {
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

  const handlSubmit = (e) => {
    e.preventDefault();

    console.log("Name is :", name);
    console.log("Email is :", email);
    console.log("Password is :", password);
  };

  return (
    <>
      <form className="form-container" onSubmit={handlSubmit}>
        <h2>Register</h2>

        <label htmlFor="">Enter Your Name :</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleName}
        />

        <br></br>

        <label htmlFor="">Enter Your Email :</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />

        <br></br>

        <label htmlFor="">Enter Your Password :</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />

        <br></br>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form2;
