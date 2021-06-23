import React from "react"
import Login from "./Login";
import Profile from "./Profile";


function View(props) {
   const isLoggedIn = props.isLoggedIn;

   if (isLoggedIn) {
    return (
        <Profile isLoggedIn={true}/>
    )
}
    return (
        <Login isLoggedIn={false}/>
    )              
}


export default View
