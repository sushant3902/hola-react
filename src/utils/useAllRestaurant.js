import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "../constants";

const useAllRestaurant = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [allRestaurants, setAllReataurants] = useState([])

    useEffect(() => {
        console.warn("useefect")
        getRestaurants()
    }, []);

    async function getRestaurants() {
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const json = await data.json();
        console.warn(json.data.cards)
        const temp = json?.data?.cards
    
        for (const res of temp) {
            if(res?.cardType == "seeAllRestaurants") {
                setAllReataurants(res?.data?.data?.cards)
                setFilteredRestaurants(res?.data?.data?.cards)
                break
            }
            
        }
    }

    return [allRestaurants, filteredRestaurants, setAllReataurants, setFilteredRestaurants]
}

export default useAllRestaurant;