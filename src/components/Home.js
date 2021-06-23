import React from "react";

import './Home.css';

import View from "./View"
import TitleCard from "./TitleCard"
import Menu from "./ui/Menu"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: {},
        };
    }

   render() {
        return (
            <div className="wrapper">
                <div className="leftColumn">
                    <div className="logo">
                        <img src="./ran.png" height="180px" alt="i broked" />
                        
                    </div>
                    <div className="Menu">
                        <Menu />
                    </div>
                </div>

                <div className="rightColumn"> 
                    <div className="titleCard">
                        <TitleCard />
                    </div>
            
                    <div className="view">
                        <View />
                        
                    </div>
                </div> 
            </div>
        )
    }
};


export default Home;