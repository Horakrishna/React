import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
 class App extends Component {
  state ={
    siteTitle  :'This is React Site Title',
    products    :[
      {
        id :10,
        name:'shirt',
        desc:"This is Shirt",
      },
      {
        id :112,
        name:'pant',
        desc:"This is pant",
      },
      {
        id :13,
        name:'T-shirt',
        desc:"This is T-shirt",
      },
      {
        id :11,
        name:'shoe',
        desc:"This is shoe",
      },
      {
        id :14,
        name:'shirt',
        desc:"This is Shirt",
      }
    ],
    inputText:''
  }
  testHandle =(e) =>{
    //this.setState({inputText: e.target.value});
    console.log(e);
  }
  render() {
    return (
      <div>
       
        <Header/>
        <h3 className='text-center'>{this.state.siteTitle}</h3>
        <h3>Products</h3>
        {
        /* {
          this.state.products.map((product) => (
            <li key={product.id}>ID:{product.id} Name:{product.name} Desc:{product.desc}</li>
          ))
        } */}

        <Product items={this.state.products}/>
        <form action="">
          <input type="text" placeholder='Write your text' onChange={this.testHandle}/>
        </form>
      </div>
    )
  }
}
export default App;