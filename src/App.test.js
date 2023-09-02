import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react header', () => {
  render(<App />);
  const header = screen.getByText(/learn react/i);
  expect(header).toBeInTheDocument();
});
