import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ProductItem from './ProductItem';
import { CartContext } from '../context/CartContext';

describe('ProductItem', () => {
  const product = { id: 1, title: 'Test Product', price: 100, image: 'image.jpg' };

  const cartContextValue = {
    addToCart: vi.fn(),
  };

  it('should render correctly', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <ProductItem product={product} />
      </CartContext.Provider>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  it('should call addToCart when Add to Cart button is clicked', () => {
    render(
      <CartContext.Provider value={cartContextValue}>
        <ProductItem product={product} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByText('Add to Cart'));
    expect(cartContextValue.addToCart).toHaveBeenCalledWith(product);
  });
});
