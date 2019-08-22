import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col col-auto my-auto">
                            <a href="/" className="logo">PhotoShowcase</a>
                        </div>
                        <div className="col my-auto text-right">
                            <div className="main-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/disclainer">Disclainer</a></li>
                                    <li><a href="/credit">Credit</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;