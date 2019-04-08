import React from 'react';
import './App.css';
import Blog from "./components/Blog";

//header scroll stuff


class App extends React.Component {
    handleScroll= (event) => {
        console.log('handleScroll invoked');
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
  render() {
    return (
        <React.Fragment>
            <Blog onScroll={this.handleScroll}/>
        </React.Fragment>
    )
  }


}

export default App;

