import React from 'react';
import PropTypes from 'prop-types';
import {Post} from "./Post";


class BlogPosts extends React.Component {


    renderPost = () => {
        const {data} = this.props;
        let postTemplate = null;

        if (data.length) {//if is Published -  map

                postTemplate = data.map(function (item) {
                    return <Post key={item.id} data={item} pimg={item.src}/>
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

BlogPosts.propTypes = {
    data: PropTypes.array.isRequired
};

export {BlogPosts}