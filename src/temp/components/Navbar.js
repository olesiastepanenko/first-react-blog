import React from 'react';
import logo from '../images/logo.svg'
import {Route, Link, BrowserRouter as Router, HashRouter, Switch} from 'react-router-dom'
import Notfound from "./Notfound";
import {News} from './News'
import Blog from './Blog'
import Login from './Login'




//
// const NavRouter = () => (
//     <header>
//                 <div className="head" id="navigation">
//                     <div className="logo">
//                         <Link to='/'>
//                             <img src={logo} alt='logo'/>
//                         </Link>
//                     </div>
//                     <ul className='nav-bar'>
//                         <li>
//                             <Link to='/news'>News</Link>
//                         </li>
//                         <li>
//                             <Link to='/blog'>Blog</Link>
//                         </li>
//                         <li>
//                             <Link to='/login'>Login</Link>
//                         </li>
//                     </ul>
//                 </div>
//     </header>
//
//     );
//
//
// // class Navbar extends React.Component{
// //     render() {
// //         return(
// //             <div className="head" id="navigation" >
// //                 <div className="logo">
// //                     <img src={logo} alt="logo"/>
// //                 </div>
// //                 <ul className="nav-bar">
// //                     <li>BlogPosts</li>
// //                     <li>News</li>
// //                     <li>Login</li>
// //                 </ul>
// //             </div>
// //         )
// //     }
// // }
//
// export {NavRouter}

const NavRouter = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    </header>
)
export {NavRouter}

// это оставляем

const MainContent = () => (
    <main>
        <Switch>
            {/*<Route exact path='/' component={App}/>*/}
            <Route exact path='/news' component={News}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/login' component={Login}/>
            {/*<Route exact component={Notfound}/>*/}
        </Switch>
    </main>
)
export {MainContent}