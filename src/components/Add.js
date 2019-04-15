import React from 'react';
import Scroll from 'react-scroll'
import PropTypes from "prop-types";
// import './App.css';

function getTime(d) {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = month[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    return date;
}

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            src: '',
            title: '',
            text: '',
            fullText: '',
            bigText: '',
            date: '',
            agree: false,
        };
    }


    onClickBtnHandler = (e) => {
        e.preventDefault();
        const {name, title, text, bigText, src} = this.state;

        let d = new Date();
        const date = getTime(d);
        // console.log('dateAll', date);
        this.props.onAddPost({
            id: +d, // в id saved onAddPosts time in ms
            author: name,
            src,
            title,
            text,
            bigText,
            date,
        });
        // clear input in addFrom
        this.setState({name: '', title: '', fullText: '', src: ''});
        // Scroll to Post after add new Post
        Scroll.animateScroll.scrollTo(300);

    };

    handleChange = (e) => {
        e.preventDefault();
        const {id, value} = e.currentTarget;
        if (id === "bigText") {
            this.setState({fullText: value});
            // it looking in str between 300 and 350 for ". "
            // and than split it for text and bigText
            let tempSlice = value.slice(300, 350);
            let index = tempSlice.indexOf(". ") + 301;
            let textSlice = value.slice(0, index);
            let bigTextRest = value.slice(index + 1, );
            this.setState({text: textSlice});
            this.setState({bigText: bigTextRest})
        } else {
            this.setState({[id]: value})
        }

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
        return (
            <div className="add">
                <form className="add-form" onSubmit={this.handleSubmit}>
                    <div>
                        <span>Author Name</span>
                        <input
                            type="text"
                            id="name"
                            onChange={this.handleChange}
                            className="add_author"
                            placeholder="Your Name (is Required)"
                            value={this.state.name}
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
                        value={this.state.title}
                    /></div>
                    <div>
                        <span>Post Img</span>
                        <input type="url"
                               id="src"
                               className="add_url"
                               onChange={this.handleChange}
                               value={this.state.src}
                               placeholder="The URL of the featured image for your post"/>
                    </div>
                    <div>
                        <span>Post Text</span>
                        <textarea
                        id="bigText"
                        onChange={this.handleChange}
                        className="add_text"
                        placeholder="Post Text (is Required)"
                        value={this.state.fullText}
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