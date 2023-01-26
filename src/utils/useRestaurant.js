import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU_URL+resId)
        const json = await data.json()
        setRestaurant(json?.data)
        console.warn("data", json?.data)
    }

    return restaurant;

}

export default useRestaurant;