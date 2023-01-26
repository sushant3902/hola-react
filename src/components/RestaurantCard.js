
import {IMG_CDN_URL} from "../constants";
[
    "Pizzas"
]


const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravelString}) => {
    return (
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} mins</h4>
        </div>
    )
};

export default RestaurantCard;
