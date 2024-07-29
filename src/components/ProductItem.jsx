import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
