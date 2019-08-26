import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First/First';
import Counter from './components/Counter/Counter'

class  App extends Component {
 render(){
  
    return (
      <div className="App">
        {/* <First name='Hora Krishna Roy' email='rora@gmail.com' address='Mohammadpur'/>
        <First  name='Hora  Roy'  email='rora@gmail.com' address='Mohammadpur'/>
        <First name=' Roy'  email='rora@gmail.com' address='Mohammadpur'/> */}
        <Counter/>
      </div>
    );
  }
}
  
export default App;
