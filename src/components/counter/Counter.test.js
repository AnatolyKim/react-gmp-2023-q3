import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';
import { act } from 'react-dom/test-utils';

describe('Counter component', () => {
  it('should render initial value provided in props', () => {
    const { getByText } = render(<Counter count={5} />);
    const countElement = getByText('5');

    expect(countElement).toBeInTheDocument();
  });

  it('should decrement the displayed value when "decrement" button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('<');
    const countElement = getByText('0');

    act(() => {
      userEvent.click(decrementButton);
    });

    expect(countElement).toHaveTextContent('-1');
  });

  it('should increment the displayed value when "increment" button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('>');
    const countElement = getByText('0');

    act(() => {
      userEvent.click(incrementButton);
    });

    expect(countElement).toHaveTextContent('1');
  });
});