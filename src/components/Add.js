import React from 'react';
import PropTypes from "prop-types";
// import './App.css';

function getTime() {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var d = new Date();
    var mon = month[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    var dateAll = mon + " " + day + ", " + year;

    return dateAll;
}

class Add extends React.Component {
    state = {
        name: '',
        src: '',
        title: '',
        bigText: '',
        agree: false,
    };

    onClickBtnHandler = (e) => {
        e.preventDefault();
        const {name, title, bigText, src} = this.state;
        // alert(name + '\n' + title)
        const {dateAll} = getTime();
        console.log('clicked');
        this.props.onAddPost({
            id: +new Date(), // в id saved onAddPosts time in ms
            author: name,
            src,
            title,
            bigText,
            dateAll,
        })
    };

    handleChange = (e) => {
        const {id, value} = e.currentTarget;
        this.setState({[id]: value})
    };

    handleCheckboxChange = (e) => {
        this.setState({agree: e.currentTarget.checked})
    };
    // validation that feld name and title are not empty
    validate = (e) => {
        const {name, title, agree} = this.state;
        return name.trim() && title.trim() && agree
    };

    render() {
        const {name, title, bigText, src} = this.state;
        return (
            <div className="add">
                <form className="add-form">
                    <div>
                        <span>Author Name</span>
                        <input
                            type="text"
                            id="name"
                            onChange={this.handleChange}
                            className="add_author"
                            placeholder="Your Name (is Required)"
                            value={name}
                        />
                    </div>
                    <div>
                        <span>Post title</span>
                        <input
                        type="text"
                        id="title"
                        onChange={this.handleChange}
                        className="add_title"
                        placeholder="Post title (is Required)"
                        value={title}
                    /></div>
                    <div>
                        <span>Post Img</span>
                        <input type="url"
                               id="src"
                               onChange={this.handleChange}
                               value={src}
                               src={src}
                               placeholder="The URL of the featured image for your post"/>
                    </div>
                    <div>
                        <span>Post Text</span>
                        <textarea
                        id="bigText"
                        onChange={this.handleChange}
                        className="add_text"
                        placeholder="Post Text (is Required)"
                        value={bigText}
                    /></div>
                    <label className="add_terms_and_cond">
                        <input type="checkbox"
                               onChange={this.handleCheckboxChange}/>
                        Im agree with terms and conditions
                    </label>
                    <button
                        type="submit"
                        className="add_btn"
                        onClick={this.onClickBtnHandler}
                        disabled={!this.validate()}>
                        ADD POST
                    </button>
                </form>
            </div>
        );
    }
}
Add.propTypes = {
    onAddPost: PropTypes.func.isRequired,
};

export {Add}