import { use, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Navbar() {
  const [light, setLight] = useState(true);
  const { user } = use(UserContext);

  function handleToggleTheme() {
    const newValue = !light;
    setLight(newValue);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        SuperM
      </Link>
      <nav className="nav-wrapper">
        <button className="theme-switcher" onClick={handleToggleTheme}>
          <img
            src={light ? "/light.svg" : "/dark.svg"}
            width="24"
            height="24"
            alt={light ? "Light theme" : "Dark theme"}
          />
        </button>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <li className="nav-item">
              <NavLink to="/profile">Profile</NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
        <Link to="/cart" className="btn btn-nav">
          Cart (0)
        </Link>
      </nav>
    </div>
  );
}