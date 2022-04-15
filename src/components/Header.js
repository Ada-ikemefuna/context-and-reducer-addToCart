import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Header = () => {
  const item = useCart();
  return (
    <div>
        <section className="header">
            <Link to="/">
            <h1>Store</h1>
            </Link>
            
            <Link to="/cart">
            <h1>Cart({item.length})</h1>
            </Link>
            
        </section>
    </div>
  )
}

export default Header;