import React, {Component} from 'react'
class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <div className="col text-center">
                        <h2>Lorem ipsum dolor</h2>
                        <h3>+017485447875</h3>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Youtube</a></li>
                            <li><a href="/">Linkin</a></li>
                            <li><a href="/">google</a></li>
                        </ul>
                    </div>
                    <div className="copyright-text text-center">
                        <p>Lorem ipsum dolor.</p>
                    </div>
                </div>
            </footer>
        )
            
    }
}

export default Footer;