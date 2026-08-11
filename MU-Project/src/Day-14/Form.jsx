import { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  return (
    <>
      <label htmlFor="">Enter Name :</label>
      <input type="text" value={name} onChange={} />
    </>
  );
}

export default Form;
