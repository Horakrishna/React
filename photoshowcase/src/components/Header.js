import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-auto">
                            <a href="/" className="logo">PhotoShowcase</a>
                        </div>
                        <div className="col-lg-4 my-auto text-center">
                            <div className="main-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/disclainer">Disclainer</a></li>
                                    <li><a href="/credit">Credit</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 my-auto text-right">
                            <form action="">
                                <input type="text" placeholder="Search Keyword"/> 
                                <input type="submit" value="search"/> 
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header;