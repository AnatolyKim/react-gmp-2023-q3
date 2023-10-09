import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const header = screen.getByText('Learn react');

  expect(header).toBeInTheDocument();
});
