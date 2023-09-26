import React from 'react';
import { render } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import userEvent from '@testing-library/user-event';

describe('GenreSelect component', () => {
  const genres = ['Action', 'Comedy', 'Drama'];
  const selectedGenre = 'Comedy';
  const onSelect = jest.fn();

  it('renders all genres passed in props', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} />);
    genres.forEach((genre) => {
      expect(getByLabelText(genre)).toBeInTheDocument();
    });
  });

  it('highlights a selected genre passed in props', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} selectedGenre={selectedGenre} />);
    const selectedGenreCheckbox = getByLabelText(selectedGenre);

    expect(selectedGenreCheckbox.checked).toBe(true);
  });

  it('calls "onChange" callback and passes correct genre in arguments', () => {
    const { getByLabelText } = render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);
    const actionCheckbox = getByLabelText('Action');
    
    userEvent.click(actionCheckbox);
    
    expect(onSelect).toHaveBeenCalledWith('Action');
  });
});