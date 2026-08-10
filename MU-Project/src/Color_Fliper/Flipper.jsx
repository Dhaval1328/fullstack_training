import "./style.css";

function Flipper() {
  const bg_color = ["red", "blue", "green", "purple", "pink"];

  const changeBackground = () => {
    const index = Math.floor(Math.random() * bg_color.length);
    console.log(bg_color[index]);
  };

  return (<>
    <nav>
        
    </nav>
  </>)
}

export default Flipper;
