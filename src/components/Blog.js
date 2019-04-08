import React from 'react';
import {Add} from "./Add";
import {Posts} from "./Posts";
import Navbar from "./Navbar";

// import postsData from '../public/data/postsData.json'

// if load ing from server src: require('../images/beetle.jpg'),
// const content = [
//     {
//         id: 1, src: require('../images/beetle.jpg'),
//         author: "Lilit",
//         title: "Volkswagen Beetle is Cute",
//         text: "It was in 1948 that Wilhelm Karmann first bought a VW Beetle sedan and converted it into a four-seated convertible. After successfully presenting it at VW in Wolfsburg the Beetle Cabriolet began production in 1949 by Karmann in Osnabrück.",
//         bigText: "The convertible was more than a Beetle with a folding top. To compensate for the strength lost in removing the roof, the sills were reinforced with welded U-channel rails, a transverse beam was fitted below the front edge of the rear seat cushion, and the side cowl-panels below the instrument panel were double-wall. In addition, the lower corners of the door apertures had welded-in curved gussets, and the doors had secondary alignment wedges at the B-pillar.\n" +
//             "\n" +
//             "The top was cabriolet-style with a full inner headliner hiding the folding mechanism and crossbars. In between the two top layers was 1 in (25 mm) of insulation. The rear window was tempered safety glass, and after 1968, heated. Due to the thickness of the top, it remained quite tall when folded. To enable the driver to see over the lowered top, the inside rearview was mounted on an offset pivot. By twisting the mirror 180 degrees on a longitudinal axis, the mirror glass would raise approximately 2 in (5.1 cm).",
//         dateAll: "March 9 2019",
//     },
//     {
//         id: 2, src: require('../images/electric-car.jpg'),
//         author: "Fan",
//         title: "Cost of running an electric car",
//         text: "More powerful, better equipped and with a bigger range than its predecessor, a second-generation of electric cars are showing just how much electric technology has advanced.",
//         bigText: "This year, the latest Nissan Leaf and updated versions of the Renault Zoe and BMW i3 are being joined by a wave of new models.\n" +
//             "\n" +
//             "These include the Jaguar I-Pace, Tesla Model 3 and Audi e-tron, with dozens more electric cars in the pipeline, all promising clean motoring and the end to expensive fuel station stops. The government has just cut its electric car grant but it still provides a £3,500 subsidy towards the cost of a new car. \n" +
//             "\n" +
//             "Manufacturers predict a boom in electric car sales, helped along by rising fuel prices and emission charges - especially for diesel drivers. By 2040, the government has pledged to ban sales of new petrol, diesel and many hybrid cars. Source https://www.buyacar.co.uk",
//         dateAll: "March 20 2019",
//
//     },
//     {
//         id: 3, src: require('../images/navigation.jpg'),
//         author: "Mona",
//         title: "Navigation for Car",
//         text: "An automotive navigation system is part of the automobile controls or a third party add-on used to find direction in an automobile. It typically uses a satellite navigation device to get its position data which is then correlated to a position on a road. When directions are needed routing can be calculated. On the fly traffic information can be used to adjust the route.",
//         bigText: "Dead reckoning using distance data from sensors attached to the drivetrain, a gyroscope and an accelerometer can be used for greater reliability, as GPS signal loss and/or multipath can occur due to urban canyons or tunnels.\n" +
//             "\n" +
//             "Mathematically, automotive navigation is based on the shortest path problem, within graph theory, which examines how to identify the path that best meets some criteria (shortest, cheapest, fastest, etc.) between two points in a large network.",
//         dateAll: "April 2 2019",
//
//     },
// ];



const bannerImg = require('../images/banner.jpg');
const bannerImgDivStyle = {
    top: '0',
    left: '0',
    right: '0',
    // minWidth: '100%',
    height: '300px',
    zIndex: '1',
    display: 'block',
    // position: 'absolute',
    marginBottom: '50px',
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',

};

class Blog extends React.Component {
    state = {
        post: null,
        isLoading: false, // preloader
    };

    static getDerivedStateFromProps(props, state) {
        let nextFilteredPost;
        if (Array.isArray(state.post)) {
            nextFilteredPost = [...state.post];
            nextFilteredPost.forEach((item, index) => {
                if (item.bigText.toLowerCase().indexOf('bla') !== -1) {
                    item.bigText = 'SPAM'
                }
            });
            // console.log(props);
            // console.log(state);
            return {
                filteredPost: nextFilteredPost,
            }
        }
        return null
    }

    componentDidMount() {
        // до fetch делаем isLoading: true, а после назад false
        this.setState({isLoading: true});
        fetch('http://localhost:3000/data/postsData.json ')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // Делаем  Timeout чтобы посмотреть как работает прелоад
                setTimeout(() => {
                    this.setState({isLoading: false, post: data})
                }, 3000)

            })
    }


    handleAddPost = (data) => {
        const nextPost = [data, ...this.state.post];
        console.log('handle ADD');
        this.setState({post: nextPost});
        console.log(this.state);
        console.log(nextPost, 'nextPost')
    };


    render() {
        const {post, isLoading} = this.state;
        return (
            <div>
                <div className="back-img" style={bannerImgDivStyle}/>
                <Navbar/>
                {isLoading && <p>Loading ...</p>}
                {Array.isArray(post) && <Posts data={post}/>}
                <Add onAddPost={this.handleAddPost}/>
            </div>
        )
    }


}

export default Blog;

