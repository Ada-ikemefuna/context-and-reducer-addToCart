import React from 'react';
import { useDispatchCart } from './CartContext';

const Product = ({product}) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({type: "ADD", item})
  }
  return (
    <div>
        <div className="card">
            <img src={product.image} alt="a pic" />
            <div className="product_info">
                <h1 className="head">{product.head}</h1>
                <h2 className="price">${product.price}</h2>
                <p className="desc">{product.title}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add Item</button>
            <hr />
        </div>
    </div>
  )
}

export default Product;