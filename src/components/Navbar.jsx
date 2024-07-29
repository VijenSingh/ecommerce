import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">
        Cart <span className="cart-count">{cartItems.length}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
