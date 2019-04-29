import React from 'react';
// import {loginImgCoverStyle} from '../Constatns'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pass: '',
            hello: '',
        }
    };

    onClickLogInButton = (e) => {
        e.preventDefault();
        // name = Admin, pass = 12345
        const {name, pass} = this.state;
        if (name === 'Admin' && pass === '12345') {
            return this.setState({hello:'welcome'})
        } else {
            return this.setState({hello:'error', name:'Wrong name', pass: 'Wrong pass'})
        }
    };

    handleCheckNameAndPass = (e) => {
        e.preventDefault();
        // take ID from Input feld
        const {id, value} = e.currentTarget;
        this.setState({[id]: value})
    };


    render() {
        return (
            <React.Fragment>
                <img className="full_page_img" src={require('../images/expensive-British.png')} alt="Back img"/>
                <form className="login_form">
                    <div className={`login_feld ${(this.state.hello === "welcome") ? "welcome" : (this.state.hello === "error") ? "error" : ""}`}>
                        <input
                            type="text"
                            id="name"
                            className="auth-input"
                            placeholder="Your Name"
                            onChange={this.handleCheckNameAndPass}
                            value={this.state.name}
                        />
                    </div>
                    <div className={`login_feld ${(this.state.hello === "welcome") ? "welcome" : (this.state.hello === "error") ? "error" : ""}`}>
                        <input
                            type="text"
                            id="pass"
                            className="auth-input"
                            placeholder="Your Password"
                            onChange={this.handleCheckNameAndPass}
                            value={this.state.pass}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="add_btn"
                            onClick={this.onClickLogInButton}>
                            LOGIN
                        </button>
                    </div>
                </form>
            </React.Fragment>

        )
    }
}

export default Login