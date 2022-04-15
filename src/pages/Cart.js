import React from 'react';
import { useCart, useDispatchCart } from '../components/CartContext';


const Cart = () => {
  return (
    <div>
       <strong>Cart</strong>
        {/*
        <div className="card">
            <img src={product.image} alt="a pic" />
            <div className="product_info">
                <h1 className="head">{product.head}</h1>
                <h2 className="price">$</h2>
                <p className="desc">{product.title}</p>
            </div>
            <button onClick={() => removeFromCart(index)}>Remove Item</button>
            <hr />
        </div> */}
    </div>
  )
};


export default Cart;