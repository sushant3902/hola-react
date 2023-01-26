import { useState, useEffect } from "react";

const Profile = (props) => {
    const [userInfo, setUserInfo] = useState({
        userInfo : {
            name: "",
            location: ""
        }
    });

    useEffect(() => {
        (async () => {
            const user = await fetch("https://api.github.com/users/sushant3902")
            const json = await user.json();
            setUserInfo(json)
            console.warn("aa", json)
        })()
    }, [])

    return (
        <div>
            <h2>Profile Component</h2>
            <img src={userInfo?.avatar_url} />
            <h2>Name: {userInfo?.name}</h2>
            <h2>Location: {userInfo?.location}</h2>
        </div>
    )
}

export default Profile;