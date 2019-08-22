import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from  './components/pages/About';
import Disclainer from  './components/pages/Disclainer';
import Credit from  './components/pages/Credit';
import Leatestphoto from'./components/Leatestphoto';
import './App.css';

class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
            <Header/>
            <div className="content-block">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Route extra path="/" render= {props =>(
                        <Leatestphoto/>
                     )}/>
                    <Route path="/about" component={About}/>
                    <Route path="/Disclainer" component={Disclainer}/>
                    <Route path="/credit" component={Credit}/>
                  
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </Router>
        
      );
  }
}
export default App;
