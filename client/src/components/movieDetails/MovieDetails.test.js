import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MovieDetails from './index';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

describe('MovieDetails component', () => {
  const movie = {
    poster_path: 'https://www.example.com/images/movie.jpg',
    title: 'My Movie',
    release_date: '2022_01_05',
    vote_average: 8.7,
    runtime: 120,
    overview: 'This is an awesome movie!',
    genres: ['Action', 'Adventure']
  };

  const routes = [
    {
      path: "/",
      element: <MovieDetails />,
      loader: () => movie,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
    initialIndex: 1,
  });

  beforeEach(() => {
    render(<RouterProvider router={router} />);
  });


  it('renders the poster image', async () => {
    await waitFor(() => screen.getByAltText("My Movie"));

    expect(screen.getByAltText("My Movie")).toBeInTheDocument();
  });

  it('renders the movie name', async () => {
    await waitFor(() => screen.getByText("My Movie"));

    expect(screen.getByText('My Movie')).toBeInTheDocument();
  });

  it('renders the release year', async () => {
    await waitFor(() => screen.getByText("2022"));

    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  it('renders the movie rating', async () => {
    await waitFor(() => screen.getByText("8.7"));

    expect(screen.getByText('8.7')).toBeInTheDocument();
  });

  it('renders the movie duration in hours and minutes format', async () => {
    await waitFor(() => screen.getByText("2h 0min"));

    expect(screen.getByText("2h 0min")).toBeInTheDocument();
  });

  it('renders the movie description', async () => {
    await waitFor(() => screen.getByText('This is an awesome movie!'));

    expect(screen.getByText('This is an awesome movie!')).toBeInTheDocument();
  });
});