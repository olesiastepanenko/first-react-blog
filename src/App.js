import React from 'react';
import './App.css';
import {NavRouter, MainContent} from "./components/Navigation";
import BackToTop from './components/BackToTop'
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
        <div className={`container ${this.state.active ? "active" : ""}`}>
            <NavRouter/>
            <MainContent/>
            <BackToTop className={this.state.toTop}/>
        </div>
    )
}


}
export default App