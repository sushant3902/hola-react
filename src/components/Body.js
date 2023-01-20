import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterRestaurant(searchText, restaurants) {
    const filterData = restaurants.filter((res) => {
        return res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    });

    return filterData;
}

const Body = () => {
    // let searchTxt = "KFC";
    const [searchInput, setSearchInput] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllReataurants] = useState([])

    useEffect(() => {
        console.warn("useefect")
        getRestaurants()
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1221043&lng=85.365865&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.warn(json.data.cards[0].data.data)
        setAllReataurants(json?.data?.cards?.[0]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards?.[0]?.data?.data?.cards)
    }

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="" value={searchInput } onChange={(e) => {
                    setSearchInput(e.target.value)
                }} />
                <button className="search-btn" onClick={() => {
                    const data = filterRestaurant(searchInput, allRestaurants);
                    setFilteredRestaurants(data)
                }}>Search</button>
            </div>
            <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant?.data} key={restaurant.data?.id}/>
            })}
            </div>
        </>
    );
};

export default Body;