import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


//Config Driven UI
const config = [
    {
        type: "carousal",
        cards:[
            {
                offerName: "50% off",
            },
            {
                offerName: "No Delivery Charge"
            }
        ]
    }, 
    {
        type: "restaurants",
        cards:[
            {
                name: "Burger King",
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk",
                cusines:["Burgers", "American"],
                rating: "4.2"
            },
            {
                name: "KFC",
                image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Offers_yqoiuk",
                cusines:["Burgers", "American"],
                rating: "4.2"
            },
            
        ]

    }
];

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)