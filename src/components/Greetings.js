import React from "react"
import Profile from "./Profile"
import Login from "./Login"


function Greetings(props){
    if (props.isLoggedIn) {
        return (
            <Profile />
        )
    }
        return (
            <Login />
        )       
}


export default Greetings;