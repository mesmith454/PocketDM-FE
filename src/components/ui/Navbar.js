import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '1pxpx',
    margin: '0 6px 6px',
    background: 'orange',
    textDecoration: 'none',
    color: 'white',
  }

class Navbar extends React.Component {
    render() {
        return (
            <div>
                 {/* if logged in I want this to render a logout button instead */}
                <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkblue'}}>Login</NavLink>

                <br></br>
                <br></br>

                <NavLink to="/profile" exact style={link} activeStyle={{ background: 'darkblue'}}>My Campaigns</NavLink>
                
                <br></br>
                <br></br>
                
                <NavLink to="/campaignform" exact style={link} activeStyle={{ background: 'darkblue'}}>Create a Campaign</NavLink>
            </div>
        )
    }
}

export default Navbar;