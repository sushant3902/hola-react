import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useAllRestaurant from "../utils/useAllRestaurant";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [searchInput, setSearchInput] = useState("")
    const [allRestaurants, filteredRestaurants, setAllReataurants, setFilteredRestaurants] = useAllRestaurant()

    const {user, setUser} = useContext(UserContext)

    const isOnline = useOnline()
    if(!isOnline){
        return <h1>Your are not connected to the internet</h1>
    }

    return (allRestaurants?.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container p-5 bg-pink-100 my-5">
                <input type="text" className="search-input p-2 outline-none" placeholder="" value={searchInput } onChange={(e) => {
                    setSearchInput(e.target.value)
                }} />
                <button className="p-2 bg-purple-900 hover:bg-gray-500 text-white rounded-sm" onClick={() => {
                    const data = filterData(searchInput, allRestaurants);
                    setFilteredRestaurants(data)
                }}>Search</button>
                <input className="m-2 p-2" value={user.name} onChange={(e) => {
                    setUser({
                        ...user,
                        name: e.target.value
                    })
                }}/>
                <input className="m-2 p-2" value={user.email} onChange={(e) => {
                    setUser({
                        ...user,
                        email: e.target.value
                    })
                }}/>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants?.length === 0 ? <h1>No matching restaurant</h1> : (
            filteredRestaurants.map((restaurant) => {
                return (
                    <Link to={"/restaurant/"+ restaurant?.data?.id} key={restaurant.data?.id}>
                        <RestaurantCard {...restaurant?.data} />
                    </Link>
                )
            }))}
            </div>
        </>
    );
};

export default Body;