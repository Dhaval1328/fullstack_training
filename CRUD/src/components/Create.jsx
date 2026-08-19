import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/Form.css";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://6a8512e39c451dc67a633df5.mockapi.io/Crud", {
        e_name: name,
        e_email: email,
        e_password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Data Added Successfully");

        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
      });
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
          onChange={(e) => setName(e.target.value)}
        />

        <label>Enter Your Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Enter Your Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>

        <button type="button" onClick={() => navigate("/read")}>
          View Data
        </button>
      </form>
    </>
  );
}

export default Create;
