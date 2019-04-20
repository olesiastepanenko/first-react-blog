import React from 'react';
import NewsCategory from "./NewsCategory";
import carLogoLoader from './Logoimages'
import '../News.css';
// import { Route, Link } from 'react-router-dom'

// import {Router, Route, Link, RouteHandler} from 'react-router';
const bannerNewsImg = require('../images/newsBack.jpg');
const bannerNewsImgDivStyle = {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    // minWidth: '100vw',
    height: '300px',
    zIndex: '1',
    display: 'block',
    // position: 'absolute',
    marginBottom: '50px',
    backgroundImage: `url(${bannerNewsImg})`,
    backgroundSize: 'cover',
    transition: '0.5s ease all',

};


class News extends React.Component{
    state = {
        logos: []
    };
    async componentDidMount() {
        this._isMounted = true;
        const logos = carLogoLoader();
        this.setState({logos})
    };
    componentWillUnmount () {
        this._isMounted = false;
    };
    // renderCetegory = () => {
    //     let brandsTemplate;
    //     if (log.length) {
    //         brandsTemplate = data.map(function (brand) {
    //             <image ></image>
    //         })
    //
    //     }
    //
    // };
render() {
        const {logos} = this.state;
    return (
        <React.Fragment>
            <div className="back-img" style={bannerNewsImgDivStyle}/>
            <div className="content-wrapper">
                <h1>New cars in 2019</h1>
                <div className="brands">
                    {logos.map(({id, name, src}) => <img className="car-logo" key={id} id={name} src={src} alt={name}/>)}
                </div>
            </div>
        </React.Fragment>

    )
}
}

export default News