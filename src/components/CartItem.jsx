import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    increaseQuantity(item.id);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.id);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <span>${item.price}</span>
      <div className="quantity-control">
        <button className="quantity-btn" onClick={handleDecrease}>-</button>
        <span className="quantity">{item.quantity}</span>
        <button className="quantity-btn" onClick={handleIncrease}>+</button>
      </div>
      <button className="remove-btn" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
