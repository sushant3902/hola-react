import { useState } from "react";


const useAuth = () => {
    const [isLogin, setIsOnline] = useState(false)


    return [isLogin, setIsOnline];

}

export default useAuth;