import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <div>
            <h1>About Us page</h1>
            <p>This is the react course</p>
            <Outlet name={"Sushant"}/>
            {/* <ProfileClass name={"Sushant class"} /> */}
        </div>
    );
};

export default About;