// import React from 'react';
// import images from '../images'

const logos = [
    { id: 0, name: 'BMW', src: require('../images/logo/bmw.jpg')},
    { id: 1, name: 'Ford', src: require('../images/logo/ford.jpg') },
    { id: 2, name: 'Mazda', src: require('../images/logo/mazda.jpg')},
    { id: 3, name: 'Mercedes', src: require('../images/logo/mercedes.jpg') },
    { id: 4, name: 'Peugeot', src: require('../images/logo/peugeot.jpg')},
    { id: 5, name: 'Skoda', src: require('../images/logo/skoda.jpg')},
    { id: 6, name: 'Toyota', src: require('../images/logo/toyota.jpg')},
];


function carLogoLoader() {
    return logos;
}

export default carLogoLoader;