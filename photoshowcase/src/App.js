import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Leatestphoto from'./components/Leatestphoto';
import './App.css';

class App extends Component {
    render() {
      return (
        <div className="App">
        <Header/>
        <div className="content-block">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Leatest Photo</h2>
                <div className="row">
                  <Leatestphoto/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        </div>
      );
  }
}
export default App;
