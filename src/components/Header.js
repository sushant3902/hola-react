import { useContext, useState } from "react";
import Logo from "../assets/image/download.png";
import { Link } from "react-router-dom";
import useAuth from "../utils/useAuth";
import useOnline from "../utils/useOnline";
import Online from "../assets/image/online.png";
import UserContext from "../utils/UserContext";

const Title = () => (
    <a href="/">
        <img className="h-28 p-2" alt="food-villa" src={Logo} />
    </a>
);
const onlineText = <div className="flex w-24 justify-center items-center"><img className="w-6 h-6" src={Online}/> <p className="text-green-900">online</p></div>;

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useAuth()
    const isOnline = useOnline();

    const {user} = useContext(UserContext)

    return (
        <div className="flex justify-between bg-pink-100 shadow-md sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10 ">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">Cart</li>
                    <li className="px-2">
                        <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
            {isOnline ? onlineText : "offline"}
            {isLoggedIn? <Link to={"/logout"}  className="bg-red-300 text-white text-center font-bold p-3 my-8 mx-1 rounded-md w-28" onClick={() => setIsLoggedIn(false)}>Logout</Link> : <Link to={"/login"} className="bg-purple-900 text-white text-center font-bold p-3 my-8 mr-1 rounded-md w-28" onClick={() => setIsLoggedIn(true)}>Login</Link>}
            
        </div>
    )
};


export default Header;