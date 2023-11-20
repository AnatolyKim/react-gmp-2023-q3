import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from "react-router-dom";

import MovieTile from './index';

describe('MovieTile component', () => {
  const mockOnClick = jest.fn();
  let component;

  beforeEach(() => {
    component = render(<Router><MovieTile movie={movie} onClick={mockOnClick} /></Router>);
    mockOnClick.mockClear();
  });

  const movie = {
    imageUrl: 'https://www.example.com/images/movie.jpg',
    name: 'My Movie',
    releaseYear: 2021,
    genres: ['Action', 'Adventure']
  };

  it('renders the movie poster image', () => {
    const { getByAltText } = component;
    expect(getByAltText('My Movie')).toBeInTheDocument();
  });

  it('renders the movie title and release year', () => {
    const { getByText } = component;
    expect(getByText('My Movie')).toBeInTheDocument();
    expect(getByText('2021')).toBeInTheDocument();
  });

  it('calls the onClick callback function when the component is clicked', () => {
    const { container } = component;
    fireEvent.click(container.firstChild);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(movie);
  });
});