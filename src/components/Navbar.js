import React from 'react';
import logo from '../images/logo.svg'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Notfound from "./Notfound";
import News from './News'
import Blog from './Blog'
import Login from './Login'

function NavRouter() {
    return (
        <Router>
            <React.Fragment>
                <div className="head" id="navigation">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <ul className="nav-bar">
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    {/*<Route exact path="/" component={App}/>*/}
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact component={Notfound}/>
                </Switch>
            </React.Fragment>
        </Router>
    )
}

// class Navbar extends React.Component{
//     render() {
//         return(
//             <div className="head" id="navigation" >
//                 <div className="logo">
//                     <img src={logo} alt="logo"/>
//                 </div>
//                 <ul className="nav-bar">
//                     <li>BlogPosts</li>
//                     <li>News</li>
//                     <li>Login</li>
//                 </ul>
//             </div>
//         )
//     }
// }

export default NavRouter