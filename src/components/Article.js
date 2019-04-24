import React from 'react';
import PropTypes from 'prop-types';
import {bannerNewsImgDivStyle} from '../Constatns'
class Article extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="content-wrapper">
                <div className="back-img" style={bannerNewsImgDivStyle}/>
                {data.map(({title, src, id, text}) =>
                    <div className="article" key={id}>
                        <div className="post_title">{title}</div>
                        <img className="post_img" src={src} alt={title}/>
                        <p className="post_text">{text}</p>
                    </div>
                )
                }
            </div>

        )
    }


}

Article.propTypes = {
    data: PropTypes.array.isRequired
};

export default Article
