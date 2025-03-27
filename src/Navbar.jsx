import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { CartContext } from "./CartContext";

export default function Navbar({ user }) {
    const [light, setLight] = useState(true);
    const { cartCount } = useContext(CartContext);

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
                    <li className="nav-item">
                        {user ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">Login</NavLink>}
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
                <Link to="/cart" className="btn btn-nav">
                    Cart ({cartCount})
                </Link>
            </nav>
        </div>
    );
}
