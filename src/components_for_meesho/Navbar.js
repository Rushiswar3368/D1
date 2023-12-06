import { Link } from "react-router-dom";
export function Navbar() {
  return (
    <div class="navbar">
      <Link class="navbar-brand" to="/">
        Brand Name
      </Link>
      <div class="nav">
        <Link class="nav-link" to="/home">
          Home
        </Link>
        <Link class="nav-link" to="/about">
          About
        </Link>
        <Link class="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
