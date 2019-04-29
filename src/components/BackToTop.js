import React from 'react';
import { Link} from 'react-scroll'


class BackToTop extends React.Component{

    render() {

        return (
        <div className={`top_button  ${this.props.className}`}>
            <Link  to="root"
                  spy={true} smooth={true} duration={500}>
                To top<span className="lnr lnr-arrow-up"/>
            </Link>

        </div>
        )
    }
}

export default BackToTop
