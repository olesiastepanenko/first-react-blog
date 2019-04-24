import React from 'react';
// import NewsCategory from "./NewsCategory";
// import {BrandLogosAPI} from './Logoimages'
import '../News.css';
import {Route, Link, BrowserRouter as Router, HashRouter, Switch} from 'react-router-dom'

// const NewsCategory = ({ match }) =>
//     console.log(match);
    // <p>Requested Param: {match.params.brandsName}</p>;


// const bannerNewsImg = require('../images/newsBack.jpg');
// const bannerNewsImgDivStyle = {
//     top: '0',
//     left: '0',
//     right: '0',
//     bottom: '0',
//     // minWidth: '100vw',
//     height: '300px',
//     zIndex: '1',
//     display: 'block',
//     // position: 'absolute',
//     marginBottom: '50px',
//     backgroundImage: `url(${bannerNewsImg})`,
//     backgroundSize: 'cover',
//     transition: '0.5s ease all',
//
// };
//
// const BrandLogosAPI ={
//     logos: [
//         { number: 0, name: 'BMW', src: require('../images/logo/bmw.jpg')},
//         { number: 1, name: 'Ford', src: require('../images/logo/ford.jpg') },
//         { number: 2, name: 'Mazda', src: require('../images/logo/mazda.jpg')},
//         { number: 3, name: 'Mercedes', src: require('../images/logo/mercedes.jpg') },
//         { number: 4, name: 'Peugeot', src: require('../images/logo/peugeot.jpg')},
//         { number: 5, name: 'Skoda', src: require('../images/logo/skoda.jpg')},
//         { number: 6, name: 'Toyota', src: require('../images/logo/toyota.jpg')},
//     ],
//
//
//     all: function () {return this.logos;},
//     get: function(id) {
//         const isBrandlogo = p => p.number === id
//         return this.logos.find(isBrandlogo)
//     },
//
// };
//
// const News = () => (
//     <Switch>
//         <Route exact path='/news' component={FullNews}/>
//         <Route exact path='/news/:number' component={BrandCategory}/>
//     </Switch>
// );
//
// const BrandCategory = (props) => {
//     console.log(props);
//     const cat = BrandLogosAPI.get(
//         parseInt(props.match.params.number)
//
//     );
//     console.log("hello");
//     if (!cat) {
//         return <div>Sorry, but the brandCategory was not found</div>
//     }
//     return (
//         <div>
//             <h1>{cat.name} (#{cat.number})</h1>
//             <Link to='/news'>Back</Link>
//         </div>
//     )
// };
// const FullNews = () => (
//     <div>
//         <ul>
//             {
//                 BrandLogosAPI.all().map(b => (
//                     <li key={b.number}>
//                         <Link to={`/news/${b.number}`}>{b.name}</Link>
//                     </li>
//                 ))
//             }
//         </ul>
//     </div>
// );
//
// export {News}

// export {BrandCategory}

// class News extends React.Component{
//     // state = {
//     //     logos: []
//     // };
//     // async componentDidMount() {
//     //     this._isMounted = true;
//         // const logos = carLogoLoader();
//     //     this.setState({logos})
//     // };
//     // componentWillUnmount () {
//     //     this._isMounted = false;
//     // };
//     // renderCetegory = () => {
//     //     let brandsTemplate;
//     //     if (log.length) {
//     //         brandsTemplate = data.map(function (brand) {
//     //             <image ></image>
//     //         })
//     //
//     //     }
//     //
//     // };
//
// render() {
//         // const {logos} = this.state;
//         // console.log(this.props)
//     return (
//         <React.Fragment>
//             <div className="back-img" style={bannerNewsImgDivStyle}/>
//             <div className="content-wrapper">
//                 <h1>New cars in 2019</h1>
//                 <div className="brands">
//                     {/*{logos.map(({id, name, src}) =>*/}
//                             {/*<Link to={`/news/${name}`} key={id}><img className="car-logo" id={name} src={src} alt={name}/>*/}
//                             {/*</Link>*/}
//                                 {/*// {`/users/${user.id}`}*/}
//                         {/*)}*/}
//                     {
//                         BrandLogosAPI.all().map(b => (
//                             <li key={b.number}>
//                                 <Link to={`/news/${b.number}`}>{b.name}</Link>
//                             </li>
//                         ))
//                     }
//                 </div>
//                 <Switch>
//                 <Route path="/news/:number" component={BrandCategory}/>
//                 </Switch>
//             </div>
//         </React.Fragment>
//
//     )
//
// }
// }
//
// export default News


// export {FullNews}



const BrandLogosAPI ={
    logos: [
        { number: 0, name: 'BMW'},
        { number: 1, name: 'Ford'},
        { number: 2, name: 'Mazda'},
        { number: 3, name: 'Mercedes' },
        { number: 4, name: 'Peugeot'},
        { number: 5, name: 'Skoda'},
        { number: 6, name: 'Toyota'},
    ],


    all: function () {return this.logos;},
    get: function(id) {
        const isBrandlogo = p => p.number === id
        return this.logos.find(isBrandlogo)
    },

}
// The Roster component matches one of two different routes
// depending on the full pathname
const News = () => (
    <Switch>
        <Route exact path='/news' component={FullNews}/>
        <Route exact path='/news/:number' component={BrandCategory}/>
    </Switch>
)


const BrandCategory = (props) => {
    console.log(props)
    const cat = BrandLogosAPI.get(
        parseInt(props.match.params.number)

    )
    console.log("hello")
    if (!cat) {
        return <div>Sorry, but the brandCategory was not found</div>
    }
    return (
        <div>
            <h1>{cat.name} (#{cat.number})</h1>
            <Link to='/news'>Back</Link>
        </div>
    )
}
const FullNews = () => (
    <div>
        <ul>
            {
                BrandLogosAPI.all().map(b => (
                    <li key={b.number}>
                        <Link to={`/news/${b.number}`}>{b.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)
export {News}

