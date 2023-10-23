import React from 'react';
import { render } from '@testing-library/react';
import GenreSelect from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('GenreSelect component', () => {
  const genres = ['Action', 'Comedy', 'Drama'];
  const selectedGenres = ['Comedy'];
  const onSelect = jest.fn();

  it('renders all genres passed in props', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} />);
    genres.forEach((genre) => {
      expect(getByLabelText(genre)).toBeInTheDocument();
    });
  });

  it('highlights a selected genres passed in props', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} selectedGenres={selectedGenres} />);

    selectedGenres.forEach((genre) => {
      const selectedGenreCheckbox = getByLabelText(genre);

      expect(selectedGenreCheckbox.checked).toBe(true);
    })
  });

  it('calls "onChange" callback and passes correct genre in arguments', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} selectedGenres={selectedGenres} onSelect={onSelect} />);
    const actionCheckbox = getByLabelText('Action');
    
    act(() => {
      userEvent.click(actionCheckbox);
    })
    
    expect(onSelect).toHaveBeenCalledWith(["Comedy", "Action"]);
  });
});