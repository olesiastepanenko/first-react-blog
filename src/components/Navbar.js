import React from 'react';
import logo from '../images/logo.svg'



class Navbar extends React.Component{

    render() {
        return(
            <div className="head" id="navigation">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="nav-bar">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </div>
        )
    }
}

export default Navbar