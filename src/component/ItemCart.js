import React, {Component} from 'react'
import {Link,} from 'react-router-dom';
import './itemCart.css'
import '../App.css';
class ItemCart extends Component{
  render(){
    console.log('itemCart this props imgURL',this.props.imgUrl )
    return (
      <Link to={`/items/${this.props.id}`}>
        <div className = "itemCart" >
            <img className = " img-fluid" src={this.props.imgUrl} />
            <p>title: {this.props.title}</p>
            <p>price: {this.props.price} FRS CFA</p>
            <p>Location : {this.props.location}</p>
            <p>Condition: {this.props.condition} </p>
          
        </div>
      </Link>
    )
  }
}

export default ItemCart;
