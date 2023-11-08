import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('SearchForm component', () => {
  const initialQuery = 'test query';
  const onSearch = jest.fn();

  it('renders an input with the value equal to initial value passed in props', () => {
    const { getByDisplayValue } = render(<SearchForm initialQuery={initialQuery} />);

    expect(getByDisplayValue(initialQuery)).toBeInTheDocument();
  });

  it('calls "onSearch" prop with submitted search query', () => {
    const { getByPlaceholderText, getByText } = render(<SearchForm onSearch={onSearch} />);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const submitButton = getByText('Submit');
    const query = 'Fantasy movies';

    act(() => {
      userEvent.type(searchInput, query);
      userEvent.click(submitButton);
    });


    expect(onSearch).toHaveBeenCalledWith(query);
  });

  it('calls "onSearch" prop when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(<SearchForm onSearch={onSearch} />);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const query = 'Fantasy movies';

    act(() => {
      userEvent.type(searchInput, query);
      userEvent.type(searchInput, '{Enter}');
    });

    expect(onSearch).toHaveBeenCalledWith(query);
  });
});