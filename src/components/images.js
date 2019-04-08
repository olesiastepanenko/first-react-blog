// import React from 'react';
// import images from '../images'

const images = [
    { id: 1, src: require('../images/beetle.jpg') },
    { id: 2, src: require('../images/electric-car.jpg') },
    { id: 3, src: require('../images/navigation.jpg')},
];


function imageLoader() {
    return images;
}

export default imageLoader;