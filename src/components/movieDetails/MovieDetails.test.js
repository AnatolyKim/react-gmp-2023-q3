import React from 'react';
import { render } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails component', () => {
  const movie = {
    imageUrl: 'https://www.example.com/images/movie.jpg',
    name: 'My Movie',
    releaseYear: 2021,
    rating: 'PG-13',
    duration: 120,
    description: 'This is an awesome movie!',
    genres: ['Action', 'Adventure']
  };

  it('renders the poster image', () => {
    const { getByAltText } = render(<MovieDetails movie={movie} />);
    expect(getByAltText('My Movie')).toBeInTheDocument();
  });

  it('renders the movie name', () => {
    const { getByText } = render(<MovieDetails movie={movie} />);
    expect(getByText('My Movie')).toBeInTheDocument();
  });

  it('renders the release year', () => {
    const { getByText } = render(<MovieDetails movie={movie} />);
    expect(getByText('2021')).toBeInTheDocument();
  });

  it('renders the movie rating', () => {
    const { getByText } = render(<MovieDetails movie={movie} />);
    expect(getByText('PG-13')).toBeInTheDocument();
  });

  it('renders the movie duration in hours and minutes format', () => {
    const { getByText } = render(<MovieDetails movie={movie} />);
    expect(getByText('2h 0min')).toBeInTheDocument();
  });

  it('renders the movie description', () => {
    const { getByText } = render(<MovieDetails movie={movie} />);
    expect(getByText('This is an awesome movie!')).toBeInTheDocument();
  });
});