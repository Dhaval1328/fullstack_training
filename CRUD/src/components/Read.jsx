import axios from "axios";
import { useEffect, useState } from "react";

function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://6a8512e39c451dc67a633df5.mockapi.io/Crud")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>User Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.e_name}</td>
              <td>{item.e_email}</td>
              <td>{item.e_password}</td>

              <td>
                <button>Edit</button>
              </td>

              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
