import React, { Component } from 'react'
import './App.css';
import Form from "./components/Form"


const API_KEY ="f9205708fb5230d4db95cc32c6c1f217";


class  App extends Component {
  
  state ={
    recipes: []
  }
  getRecipe = async(e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch
    (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    
    const data = await api_call.json();
    
    console.log(data.recipes[0]);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="app-title">Recipe Search</h1>
        </header>
        <Form getRecipe = {this.getRecipe} /> 
      </div>
    );
  }
}
 
 export default App;
