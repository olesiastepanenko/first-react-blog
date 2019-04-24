import React from 'react';
import logo from '../logo.svg'
import {Route, Link, Switch} from 'react-router-dom'
import {News} from './News'
import Blog from "./Blog";
import Login from "./Login";

// The Header creates links, navigate
// between routes.

const NavRouter = () => (
    <header>
                <div className="head" id="navigation">
                    <div className="logo">
                        <Link to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <ul className='nav-bar'>
                        <li>
                            <Link to='/news'>News</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </div>
    </header>

    );
export {NavRouter}



const MainContent = () => (
    <React.Fragment>
        <Switch>
            {/*<Route exact path='/' component={Home}/>*/}
            <Route path='/news' component={News}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </React.Fragment>
)
export {MainContent}