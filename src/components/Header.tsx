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
                        <h1>Title</h1>
                        <p>Paragraph</p>
                        <a href="#0" onClick={this.btnClick} className="btn btn-primary px-4 py-2">Click Me</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;