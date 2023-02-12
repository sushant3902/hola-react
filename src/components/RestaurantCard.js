
import {IMG_CDN_URL} from "../constants";


const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {

    return (
        <div className="border border-gray-50 shadow rounded-md m-4 p-4 w-72 h-80 mx-4">
            <img alt="restaurant" src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
};

export default RestaurantCard;
