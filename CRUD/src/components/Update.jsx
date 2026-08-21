import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/Form.css";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  // Old data get karne ke liye
  useEffect(() => {
    axios
      .get(`https://6a8512e39c451dc67a633df5.mockapi.io/Crud/`)
      .then((response) => {
        setID(response.data.e_id);
        setName(response.data.e_name);
        setEmail(response.data.e_email);
        setPassword(response.data.e_password);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Data update karne ke liye..
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`https://6a8512e39c451dc67a633df5.mockapi.io/Crud/${id}`, {
        e_name: name,
        e_email: email,
        e_password: password,
      })
      .then((response) => {
        console.log(response.data);

        alert("Data Updated Successfully");

        navigate("/read");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form className="form-container" onSubmit={handleUpdate}>
        <h2>Update User</h2>

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

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default Update;
