import React from 'react';
// import {Router, Route, Link, RouteHandler} from 'react-router';
const bannerNewsImg = require('../images/mercedesgla.jpg');
const bannerNewsImgDivStyle = {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    // minWidth: '100vw',
    minHeight: '100%',
    // zIndex: '1',
    display: 'block',
    // position: 'absolute',
    marginBottom: '50px',
    backgroundImage: `url(${bannerNewsImg})`,
    backgroundSize: 'cover',
    transition: '0.5s ease all',

};

class News extends React.Component{
render() {
    return (
        <div className="back-img" style={bannerNewsImgDivStyle}>NEWS ARE HERE!!!</div>
    )
}
}

export default News