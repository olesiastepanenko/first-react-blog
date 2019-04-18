import React from 'react';
import Scroll from 'react-scroll'


class BackToTop extends React.Component{
    scrollToTop= () => {
        Scroll.animateScroll.scrollToTop();
    };
    render() {

        return (
            <div className={`top_button ${this.props.className}`}>
                <a href="#" onClick={this.scrollToTop}> To top<span className="lnr lnr-arrow-up"/></a>
            </div>
        )
    }
}

export default BackToTop