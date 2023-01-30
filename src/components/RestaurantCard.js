
import { useContext } from "react";
import {IMG_CDN_URL} from "../constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {
    const {user} = useContext(UserContext)

    return (
        <div className="w-56 h-72 p-2 m-2 shadow-lg bg-pink-100">
            <img alt="restaurant" src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
            <p className="font-bold">{user.name}</p>
        </div>
    )
};

export default RestaurantCard;
