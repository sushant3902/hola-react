import { useState } from "react";
import Logo from "../assets/image/download.png";
import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
        <img className="logo" alt="food-villa" src={Logo} />
    </a>
);

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useAuth()
    const isOnline = useOnline();

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
            </div>
            <h2>{isOnline ? "online" : "offline"}</h2>
            {isLoggedIn? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
            
        </div>
    )
};


export default Header;