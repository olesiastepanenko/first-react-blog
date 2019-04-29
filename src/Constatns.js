const bannerNewsImg = require('./images/newsBack.jpg');
const bannerNewsImgDivStyle = {
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    // minWidth: '100vw',
    height: '300px',
    zIndex: '1',
    display: 'block',
    position: 'absolute',
    // marginBottom: '50px',
    backgroundImage: `url(${bannerNewsImg})`,
    backgroundSize: 'cover',
    transition: '0.5s ease all',

};
const bannerImg = require('./images/banner.jpg');
const bannerImgDivStyle = {
    top: '0',
    left: '0',
    right: '0',
    // minWidth: '100%',
    height: '300px',
    zIndex: '1',
    display: 'block',
    position: 'absolute',
    // marginBottom: '50px',
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    transition: '0.5s ease all',

};

const loginImgCover = require('./images/expensive-British.jpg');
const loginImgCoverStyle = {
    // top: '0',
    // left: '0',
    // right: '0',
    // // minWidth: '100%',
    // height: '300px',
    // zIndex: '1',
    // display: 'block',
    // position: 'absolute',
    // marginBottom: '50px',
    backgroundImage: `url(${loginImgCover})` ,
    // backgroundSize: 'cover',
    // transition: '0.5s ease all',

};

export {bannerImgDivStyle, bannerNewsImgDivStyle, loginImgCoverStyle}
