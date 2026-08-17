import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/ElectroMart.jpg" alt="ElectroMart Logo" />
      </div>

      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/projects">Projects</a>
        </li>

        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="auth-buttons">
        <a href="/login" className="login-btn">
          Login
        </a>

        <a href="/register" className="register-btn">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
