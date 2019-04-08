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
        // // спам
        const {data} = this.props;
        return (
            <div className="post">
                {this.renderPost()}

                <strong onClick={this.handleCounter} className={'post_count'}>
                    Post articles: {data.length}</strong> : null
                data.length ? <strong>
                Post articles: {data.length}</strong> : null
            </div>
        )
    }
}

Posts.propTypes = {
    data: PropTypes.array.isRequired
};

export {Posts}