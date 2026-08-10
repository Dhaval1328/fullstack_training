function Props(props) {
  console.log(props);
  return (
    <>
      <h1>Props:</h1>
      <ul>
        <li>Props Are The Object</li>
      </ul>

      <h1>{props.name}</h1>
    </>
  );
}

export default Props;
