import { fireEvent, render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchForm from './index';

describe('SearchForm component', () => {
  const initialQuery = 'test query';
  const onSearch = jest.fn();;

  it('renders an input with the value equal to initial value passed in props', () => {
    const { getByDisplayValue } = render(<Router><SearchForm initialQuery={initialQuery} /></Router>);

    expect(getByDisplayValue(initialQuery)).toBeInTheDocument();
  });

  it('calls "onSearch" prop with submitted search query', async () => {
    const { getByPlaceholderText, getByText } = render(<Router><SearchForm onSearch={onSearch} /></Router>);
    const searchInput = getByPlaceholderText('What do you want to watch?');
    const submitButton = getByText('Submit');
    const query = 'Fantasy movies';

    act(() => {
      fireEvent.change(searchInput, { target: { value: query} });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledWith(query);
    })
  });
});