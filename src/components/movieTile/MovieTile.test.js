import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './MovieTile';

describe('MovieTile component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  const movie = {
    imageUrl: 'https://www.example.com/images/movie.jpg',
    name: 'My Movie',
    releaseYear: 2021,
    genres: ['Action', 'Adventure']
  };

  it('renders the movie poster image', () => {
    const { getByAltText } = render(<MovieTile movie={movie} onClick={mockOnClick} />);
    expect(getByAltText('My Movie')).toBeInTheDocument();
  });

  it('renders the movie title and release year', () => {
    const { getByText } = render(<MovieTile movie={movie} onClick={mockOnClick} />);
    expect(getByText('My Movie')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
  });

  it('calls the onClick callback function when the component is clicked', () => {
    const { container } = render(<MovieTile movie={movie} onClick={mockOnClick} />);
    fireEvent.click(container.firstChild);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(movie);
  });
});