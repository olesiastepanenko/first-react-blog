import React from 'react';
import PropTypes from 'prop-types';
import {Article} from "./Article";


class Posts extends React.Component {


    renderPost = () => {
        const {data} = this.props;
        let postTemplate = null;

        if (data.length) {//if is Published -  map

                postTemplate = data.map(function (item) {
                    return <Article key={item.id} data={item} pimg={item.src}/>
                })
            // }
        } else {
            postTemplate = <p>The are no post!!!</p>
        }
        return postTemplate
    };

    render() {
        // // spam
        const {data} = this.props;
        return (
            <div className="post">
                {this.renderPost()}
                <p className={data.length > 0 ? '':"none"}>
                Post articles: {data.length}</p>
            </div>
        )
    }
}

Posts.propTypes = {
    data: PropTypes.array.isRequired
};

export {Posts}