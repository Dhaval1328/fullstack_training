import "./style.css";

function Flipper() {
  const [bgColor, setBgColor] = useState("white");
  const bg_color = ["red", "blue", "green", "purple", "pink"];

  return (
    <>
      <nav>
        <div className="nav-center">
          <h4>Color Flipper</h4>
          <ul>
            <li>
              <a href="index.html">Simple</a>
            </li>
            <li>
              <a href="hex.html">Hex</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Flipper;
