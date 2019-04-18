import React from 'react';
import './App.css';
// import Blog from "./components/Blog";
import NavRouter from "./components/Navbar";
import BackToTop from "./components/BackToTop";


// //header scroll stuff
// const bannerImg = require('../images/banner.jpg');
// const bannerImgDivStyle = {
//     top: '0',
//     left: '0',
//     right: '0',
//     // minWidth: '100%',
//     height: '300px',
//     zIndex: '1',
//     display: 'block',
//     // position: 'absolute',
//     marginBottom: '50px',
//     backgroundImage: `url(${bannerImg})`,
//     backgroundSize: 'cover',
//     transition: '0.5s ease all',

// };

class App extends React.Component {
    state = {
        active: false, // if scrolled more than 100px
        toTop: "",
    };
    addActiveClass = () => {
        this.setState({active:true})
    };
    addToTopClass = () => {
        this.setState({toTop: "top"})
    };
    toggleScroll= (event) => {
        // console.log('scrolled', window.scrollY);
        if (window.scrollY > 100) {
            this.addActiveClass();
            if (window.scrollY > 100) {
                this.addToTopClass();
            } else {
                this.setState({toTop:""})
            }
        } else {
            this.setState({active:false, toTop:""})
        }
    };
    componentDidMount() {
        window.addEventListener('scroll', this.toggleScroll);

    };
    componentWillUnmount() {
        window.removeEventListener("scroll", this.toggleScroll);
    }
        render() {
    return (
        <div className={this.state.active ? "active" : ""} >
            <NavRouter/>
            <BackToTop className={this.state.toTop}/>
        </div>
    )
  }


}

export default App;

