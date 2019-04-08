import React from 'react';
import PropTypes from 'prop-types';



class Article extends React.Component {
    state = {
        visible: false,
    };
    handleReadMoreClck = (e) => {
        e.preventDefault();
        this.setState({visible: true})
    };
    // renderImg = () => {
    // const {pimg} = this.props;
    // };
    render() {
        const {author, title, text, bigText, src, dateAll} = this.props.data;
        const {visible} = this.state;
        return (
            <div className="article">
                <div className="post_title"><span>{title}</span><span className="post_date">{dateAll}</span></div>
                <img className="post_img" src={src} alt={title}/>
                <p className="post_text">{text}</p>
                {/* если не visible то показывай */
                    !visible &&
                    <a onClick={this.handleReadMoreClck} href="#Read more" className="post_read-more">Read more</a>
                }
                {/* если visible than show */
                    visible && <p className="post_big-text">{bigText}</p>
                }
                <p className="post_author">{author}:</p>
            </div>
        )
    }
}
Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        // text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
    })
};


export {Article}
