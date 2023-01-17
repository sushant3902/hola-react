import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterRestaurant(searchText, restaurants) {
    const filterData = restaurants.filter((res) => {
        return res.data.data.name.includes(searchText)
    });

    return filterData;
}

const Body = () => {
    // let searchTxt = "KFC";
    const [searchInput, setSearchInput] = useState("")
    const [restaurants, setReataurants] = useState(restaurantList)
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="" value={searchInput } onChange={(e) => {
                    setSearchInput(e.target.value)
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterRestaurant(searchInput, restaurants);
                    console.warn("data", data)
                    setReataurants(data)
                }}>Search</button>
            </div>
            <div className="restaurant-list">
            {restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
            })}
            </div>
        </>
    );
};

export default Body;