import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import BrandCategory from "./BrandCategory";
import '../News.css';
import {bannerNewsImgDivStyle} from '../Constatns'

const BrandLogosAPI ={
    logos: [
        { id: 0, name: 'BMW', src: require('../images/logo/bmw.jpg')},
        { id: 1, name: 'Ford', src: require('../images/logo/ford.jpg') },
        { id: 2, name: 'Mazda', src: require('../images/logo/mazda.jpg')},
        { id: 3, name: 'Mercedes', src: require('../images/logo/mercedes.jpg') },
        { id: 4, name: 'Peugeot', src: require('../images/logo/peugeot.jpg')},
        { id: 5, name: 'Skoda', src: require('../images/logo/skoda.jpg')},
        { id: 6, name: 'Toyota', src: require('../images/logo/toyota.jpg')},
    ],


    all: function () {return this.logos;},
    get: function(b) {
        const isBrandlogo = p => p.id === b;
        return this.logos.find(isBrandlogo)
    },

};
export {BrandLogosAPI}



// The Roster component matches one of two different routes
// depending on the full pathname
const News = () => (
    <Switch>
        <Route exact path='/news' component={FullNews}/>
        <Route exact path='/news/:id' component={BrandCategory}/>
    </Switch>
);



const FullNews = () => (
    <React.Fragment>
        <div className="back-img" style={bannerNewsImgDivStyle}/>
        <div className="list-imgs">
            {
                BrandLogosAPI.all().map(b => (
                    <div className="cont-img" key={b.id}>
                        <Link to={`/news/${b.id}`}><img className="car-logo" src={b.src} alt={b.name}/></Link>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
);
export {News}

