import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchForm component', () => {
  const initialQuery = 'test query';
  const onSearch = jest.fn();

  it('renders an input with the value equal to initial value passed in props', () => {
    const { getByDisplayValue } = render(<Router><SearchForm initialQuery={initialQuery} /></Router>);

    expect(getByDisplayValue(initialQuery)).toBeInTheDocument();
  });

  it('calls "onSearch" prop with submitted search query', () => {
    const { getByPlaceholderText, getByText } = render(<Router><SearchForm onSearch={onSearch} /></Router>);
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
    const { getByPlaceholderText } = render(<Router><SearchForm onSearch={onSearch}/></Router>);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const query = 'Fantasy movies';

    act(() => {
      userEvent.type(searchInput, query);
      userEvent.type(searchInput, '{Enter}');
    });

    expect(onSearch).toHaveBeenCalledWith(query);
  });
});