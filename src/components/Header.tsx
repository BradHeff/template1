import React, { Component } from 'react';

class Header extends Component {
    btnClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log("Clicked Header Button");
    }
    render() {
        return (
            <div className="header overlay bg-rules">
                <div className="App-header">
                    <div className="container z-index">
                        <h6 className="text-white text-uppercase">Don’t look further, here is the key</h6>
                        <h1 className="text-white">React Base <span>Template</span></h1>
                        <p className="text-white">Sample template for ReactJS web app</p>
                        <a href="#0" onClick={this.btnClick} className="btn btn-primary px-4 py-2 mt-3">Click Me</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;