import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {
    const { user } = useContext(UserContext)
    return (
        <div className="bg-purple-500">
            <p className="p-4 text-center">This site is developed by {user.name} - {user.email}</p>
        </div>
    )
}


export default Footer;