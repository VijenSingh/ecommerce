import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, totalValue } = useContext(CartContext);

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="total">
        Total: ${totalValue.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
