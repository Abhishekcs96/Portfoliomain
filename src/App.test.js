import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log('test');
  render(<App />);
  const linkElement = screen.getByText(/Hey There!/i);
  expect(linkElement).toBeInTheDocument();
});
