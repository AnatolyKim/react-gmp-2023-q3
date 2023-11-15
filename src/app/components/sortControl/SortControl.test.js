import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './index';

describe('SortControl component', () => {
  const mockOnSelectionChange = jest.fn();

  beforeEach(() => {
    mockOnSelectionChange.mockClear();
  });

  it('renders the Sort by label', () => {
    const { getByLabelText } = render(<SortControl currentSelection="release-date" onSelectionChange={mockOnSelectionChange} />);
    expect(getByLabelText(/sort by/i)).toBeInTheDocument();
  });

  it('displays the current selection in the select control', () => {
    const { getByDisplayValue } = render(<SortControl currentSelection="release-date" onSelectionChange={mockOnSelectionChange} />);
    expect(getByDisplayValue(/release date/i)).toBeInTheDocument();
  });

  it('calls the onSelectionChange callback function when a new selection is made', () => {
    const { getByLabelText } = render(<SortControl currentSelection="release-date" onSelectionChange={mockOnSelectionChange} />);
    fireEvent.change(getByLabelText(/sort by/i), { target: { value: 'title' } });
    expect(mockOnSelectionChange).toHaveBeenCalledTimes(1);
    expect(mockOnSelectionChange).toHaveBeenCalledWith('title');
  });
});