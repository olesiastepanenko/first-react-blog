import {Link} from "react-router-dom";
import React from "react";
import {BrandLogosAPI} from "./News";
import Article from './Article'


const newsData = [
    {
        id: 1,
        brand: "Mazda",
        title: "2019 Mazda 3",
        src: "https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/bg_2019_mazda_3_ftq.jpg?itok=aaqPJ9Wr",
        text: "The moody photos released by Mazda make it clear that the new 3 will be sold on its eye-catching looks as the technology underneath, which could mean that the company has a hit on its hands because the car isn't lacking in either department. \n\nIt will use Mazda’s new-fangled internal combustion engine, called SkyActiv-X. It is capable of working like a petrol motor or a diesel, with spark plugs for petrol engine-style combustion, and the ability to switch to diesel-style compression ignition, too. The idea is to offer the economy of a diesel with the smooth nature and lower emissions of a petrol."
    },
    {
        id: 2,
        brand: "Mercedes",
        title: "2019 Mercedes B-Class",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2108_mercedes_b_class_launch_photos.jpg?itok=fgqAiZk5",
        text: "The people carrier, or multi-purpose vehicle, is clinging on for dear life, as drivers flock to SUVs. That’s a shame, because when you ignore image for a moment, people carriers make better family cars and are mostly more affordable to buy and run.\n\nMercedes is sticking it out, and its replacement for the B-Class will go on sale at the end of this year, with the first deliveries arriving in February. It's more sophisticated than ever, with Mercedes' double-widescreen dashboard and more space. Mercedes claims that it should feel sporty to drive, despite the tall shape: the driver sits 9cm higher than in the company's new A-Class."
    },
    {
        id: 3,
        brand: "Mercedes",
        title: "2019 Mercedes CLA",
        src: "https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2019_mercedes_cla_launch_image.jpg?itok=yqcT09OH",
        text: "There's no secret to Mercedes' best-selling A-Class: it's practical and efficient, but also desirable, thanks to its well-finished interior and large dashboard screens - as well as the Mercedes star on the bonnet, of course.\n\nOutside, however, the car's sensible hatchback shape doesn't necessarily stir the emotions. That's the job of the CLA. From the front to the middle, it's similar design to Mercedes A-Class inside and out, but the back half is focused on style, as the roof curves down into the bootlid, which gently kicks up. This makes the silhouette sportier and more elegant. But it does come at a starting price that's expected to approach £30,000"
    },
    {
        id: 4,
        brand: "Peugeot",
        title: "2019 Peugeot 508 SW",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2019_peugeot_508_sw.jpg?itok=iLivXR94",
        text: "Ooh La La - Peugeot’s next large estate car is a bit of a looker. The new 508 SW, which goes on sale in January, trades some of the practicality of the model it succeeds (the 530-litre boot has lost 30 litres) but most buyers are unlikely to care when the car looks so much more arresting.\n\nIt’s part of Peugeot’s attempt to shift its image upmarket a notch or two, and the rest of the interior is more stylish and upmarket than Peugeots of old. Petrol and diesel models will go on sale first, and a plug-in hybrid – like the VW Passat GTE - will be added in the autumn."
    },
    {
        id: 5,
        brand: "Skoda",
        title: "2019 Skoda Scala",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2019_skoda_scala_launch_pic.jpg?itok=FINuawO1",
        text: "Skoda has moved a long way from its budget brand roots - so much so that it has struggled to sell the low-priced Rapid hatchback, with an obviously cheap interior. The information released so far for the Scala, emphasises the use of high-quality interior materials, mood lighting and a large dashboard touchscreen, which should move the car upmarket.\n\nThe 467-litre boot is said to be the largest in the category, giving the car greater capacity than a Volkswagen Golf or Ford Focus, and Skoda claims plenty of passenger room too. if the Scala can offer value-for-money too, it could be a hit."
    },
    {
        id: 6,
        brand: "Toyota",
        title: "2019 Toyota Corolla",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/corolla.jpg?itok=UpR17ggD",
        text: "Slowly but surely, Toyota is shifting its cars on the internationally recognised official excitement scale (okay, we made that up) from ‘Watching paint dry’ to ‘Stepping onto the dancefloor’.\n\nThe new Corolla is efficient, practical and well-built - but now has a decent blend of comfort and agility, which means that it no longer feels like the more lumbering Auris it replaced. There's no longer a diesel option: petrol or petrol-electric hybrid power are the only choices."
    },
    {
        id: 7,
        brand: "Toyota",
        title: "2019 Toyota Camry",
        src: "https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/camryexterior.jpg?itok=zKwF5Ded",
        text: "Another blast from the past in the Toyota stable is the Camry, a name that hasn’t been used in Britain’s Toyota showrooms for nearly 15 years. \n\nThe Camry is coming back to replace the slightly old-hat Toyota Avensis. So expect massive discounts on them soon enough. But back to the Camry. This time around it'll be a hybrid, with a 2.5-litre petrol engine being supplemented by an electric motor."
    },
    {
        id: 8,
        brand: "Ford",
        title: "2019 Ford Focus Active",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2018_ford_focus_active.jpg?itok=rn8QM4yC",
        "text": "For years, you've been able to choose different versions of the same car, based on the type of boot or the number of doors. Now you can choose different heights. If the standard Ford Focus seems a bit too low for you, but you don't want the lofty height of the similarly-sized Ford Kuga, then the Ford Focus Active sits in the middle.\n\nThere's more 30mm space between the bottom of the car and the ground, compared with the standard Focus, so the car's less likely to be scraped on rough dirt tracks or rocky ground. It doesn't come with four wheel drive for optimum performance off road, but does have some clever electronics that can reduce wheelspin when accelerating on a slippery surface."
    },
    {
        id: 9,
        brand: "BMW",
        title: "2019 BMW 3 Series",
        src: "https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/2018_bmw_3_series_front_and_rear_launch_photo.jpg?itok=g75-FKj0",
        text: "When you make one of the world's best medium-sized cars, there's no shame in introducing a new model that offers more of the same. So this year's brand new BMW 3 Series has the brand's familiar design, a similar interior layout and the same promise of a comfortable ride combined with sporty and nimble performance.\n\nIt's slightly larger, bringing more interior space, and the technology has, naturally, been upgraded. For more information, read our guide to the 2019 BMW 3 Series."
    },
    {
        id: 10,
        brand: "Peugeot",
        title: "2019 Peugeot 208",
        src: "https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/pug208frontcity.jpg?itok=xDtU65z3",
        text: "In 2018, small cars got a lot better. The Seat Ibiza, Ford Fiesta and Volkswagen Polo brought new standards of comfort, quietness, quality and technology to the segment, while maintaining relatively affordable prices. Could 2019 see a similar leap forward? That depends on the standard of the new Peugeot 208.\n\nit looks promising from the initial details. It will be available as an electric car, called the e-208, which is set to have a 211 mile range. Of course, there are also petrol and diesel versions. Plus, a GTI in the near future."
    }
];

// const BrandCategory = (props) => {
class BrandCategory extends React.Component {
    state = {
        // brand: '',
        filteredData: null,
        // newsdata: null,
    };
    parseNews = () => {
        // data.filter(obj => obj.id === f)
// this.setState({newsdata:data})
// console.log(data, 'filtered', f, "f");

        // // var arr = [];
        // fetch('http://localhost:3000/data/newsData.json ')
        //     .then(response => {
        //         return response.json()
        //     }).then(newsdata => function () {
        //     console.log(newsdata, 'parse')
        // })
        //         //     .then(newsdata =>
        // //     newsdata.map(({id, brand})=>
        // //     // {
        // //     //     var f = 'Mercedes';
        // //         // newsdata.brand = f ? arr.push(newsdata) : null
        // //         console.log(id, 'id', brand, 'brand'))
        // //     // this.setState({newsdata:arr})
        // //     // console.log(arr);
        // // // }
        // // // )
        //     .catch((error) => {
        //         // handle  errors
        //         console.error(error)
        //     })
    };

    componentDidMount(props) {
        this._isMounted = true;
        const cat = BrandLogosAPI.get(
            parseInt(this.props.match.params.id)
        );
        var filteredData = newsData.filter(obj => obj.brand === cat.name);
        this.setState({filteredData: filteredData});
        console.table(filteredData);

    }


    render() {
        // if (!cat) {
        //     return <div>Sorry, but the brandCategory was not found</div>
        // }
        // const {cat} = this.props;
        // console.log(cat, 'cat in render')
        const {filteredData} = this.state;
        return (
            <div>
                {/*<h1>{filteredData.name} </h1>*/}
                {Array.isArray(filteredData) && <Article data={filteredData}/>}
                <Link to='/news'>Back</Link>
            </div>
        )
    }
};
export default BrandCategory
// export {BrandCategory}

// data.filter(obj => obj.id === f)
// this.setState({newsdata:data})
// console.log(data, 'filtered', f, "f");