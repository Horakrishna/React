import React, { Component } from 'react'

 class Product extends Component {
    
    render() {
        //console.log(this.props.items);
        return this.props.items.map((product)=>(
            <li key={product.id}>Product Name:{product.name}</li>
        ))
    }
}
export default Product;