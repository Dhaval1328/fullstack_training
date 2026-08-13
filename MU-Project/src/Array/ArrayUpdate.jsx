import { useState } from "react";

function ArrayUpdate() {
  const [arr, setArr] = useState([10, 20, 30, 40]);

  //   const updateArray = () => {
  //     setArr([50, 60, 70, 80]);
  //   };

  const updateArray = () => {
    setArr((data) => [...data, 50]);
  };

  return (
    <>
      <ul>
        {arr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>

      <button onClick={updateArray}>Update Array</button>
    </>
  );
}

export default ArrayUpdate;
