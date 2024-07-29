import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading', () => {
  it('should render correctly', () => {
    render(<Loading />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
