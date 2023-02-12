import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./assets/image/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Login = lazy(() => import("./components/Login"))
const About = lazy(() => import("./components/About"))
const Instamart = lazy(() => import("./components/Instamart"))
const Logout = lazy(() => import("./components/Logout"))

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
    const [user, setUser] = useState({
        name: "Sushant Singh",
        email: "sushant@gmail.com"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider
                value={{user: user, setUser: setUser}}
            >
                <Header />
                {/* <About />
                <Body />
                <Contact /> */}
                {<Outlet />    /* //a placeholder for body , contact, aboutus */}

                <Footer />
            </UserContext.Provider>
        </Provider>
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
                        element: <ProfileClass />

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

            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element:(
                    <Suspense fallback={<h2>..-Loading</h2>}>
                        <Login />
                    </Suspense>
                )
            },
            {
                path: "/logout",
                element: (
                    <Suspense fallback={<h2>Loading</h2>} >
                        <Logout />
                    </Suspense>
                )
            }
        ]
    }, 
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)