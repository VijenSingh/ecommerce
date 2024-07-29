import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

describe('CartItem', () => {
  const item = { id: 1, title: 'Product 1', price: 100, quantity: 1, image: 'image1.jpg' };

  const cartContextValue = {
    increaseQuantity: vi.fn(),
    decreaseQuantity: vi.fn(),
    removeFromCart: vi.fn(),
  };

  it('should render correctly', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <CartItem item={item} />
      </CartContext.Provider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('should call increaseQuantity when + button is clicked', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <CartItem item={item} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByText('+'));
    expect(cartContextValue.increaseQuantity).toHaveBeenCalledWith(item.id);
  });

  it('should call decreaseQuantity when - button is clicked', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <CartItem item={item} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByText('-'));
    expect(cartContextValue.decreaseQuantity).toHaveBeenCalledWith(item.id);
  });

  it('should call removeFromCart when remove button is clicked', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <CartItem item={item} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByText('Remove'));
    expect(cartContextValue.removeFromCart).toHaveBeenCalledWith(item.id);
  });
});
