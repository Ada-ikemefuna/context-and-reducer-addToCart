import React from 'react';
import Product from '../components/Product';
import { CartState } from '../context/CartContext';
import Filters from '../components/Filters';

const Store = () => {
  const {
  state: {products},
  productState: {byStock, byRating, byFastDelivery, sort},
   } = CartState();


  const transformProducts = () => {
    let sortedProducts = products;

    if(sort){
      sortedProducts.sort((a, b) => (
        sort === "lowToHigh"? a.price - b.price: b.price - a.price
      ))
    }

    if(!byStock){
      sortedProducts = sortedProducts.filter((prod) => prod.inStock)
    }
    return sortedProducts;
  }
  
  return (
    <div className='home'>
       <Filters/> 
    <div className="productContainer">
      {transformProducts().map(prod => {
       return <Product prod={prod} key={prod.id}/>
    })};
    </div>
    </div>
  )
}

export default Store










































