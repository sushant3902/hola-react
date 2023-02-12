
import {IMG_CDN_URL} from "../constants";


const FoodItem = ({name, description, cloudinaryImageId, price}) => {

    return (
        <div className="border border-gray-50 shadow rounded-md m-4 p-4 w-72 h-80 mx-4">
            <img alt="restaurant" src={cloudinaryImageId?.length > 0 ? IMG_CDN_URL+cloudinaryImageId : ""} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees {price/100}</h4>
        </div>
    )
};

export default FoodItem;
