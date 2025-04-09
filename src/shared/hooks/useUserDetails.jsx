import { useState } from "react";
import { logout as logoutHandler } from "./userLogout";

const getUserDatails = () => {

    const  userDetails = localStorage.getItem('user');
    if(userDetails){
        return JSON.parse(userDetails);
    }else{
        return null;
    }
}

export const useUserDetails = () =>{

    const [userDetails, setUserDetails] = useState(getUserDatails())


    const logout = () => {
        logoutHandler()
    }

    return {
        isLogged: Boolean(userDetails),
        username: userDetails?.username ? userDetails.username : 'Guest',
        logout
    }
}