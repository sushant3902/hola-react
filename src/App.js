import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./assets/image/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))
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
            {/* <About />
            <Body />
            <Contact /> */}
            {<Outlet />    /* //a placeholder for body , contact, aboutus */}

            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading</h1>}>
                        <About />
                    </Suspense>),
                children: [
                    {
                        path: "profile",
                        element: <Profile />

                    }
                ]
            }, 
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                <Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>
                )

            }
        ]
    }, 
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)