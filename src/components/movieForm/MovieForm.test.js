import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import MovieForm from './index';

describe('MovieForm', () => {
  const onSubmit = jest.fn();
  const genres = ['Action', 'Comedy', 'Drama'];
  const movieInfo = {
    id: 1,
    title: 'Test Movie',
    poster_path: 'https://example.com/movie.jpg',
    release_date: '2021-01-01',
    vote_average: 7.5,
    runtime: 120,
    overview: 'This is a test movie',
    genres: ['Action', 'Comedy']
  };

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('should render the form header', () => {
    render(<MovieForm onSubmit={onSubmit} genres={genres} />);

    expect(screen.getByText('Edit Movie')).toBeInTheDocument();
  });

  it('should render form inputs with initial values', () => {
    render(<MovieForm onSubmit={onSubmit} genres={genres} movieInfo={movieInfo} />);

    expect(screen.getByLabelText('Movie Title')).toHaveValue('Test Movie');
    expect(screen.getByLabelText('Poster URL')).toHaveValue('https://example.com/movie.jpg');
    expect(screen.getByLabelText('Release Date')).toHaveValue('2021-01-01');
    expect(screen.getByLabelText('Rating')).toHaveValue(7.5);
    expect(screen.getByLabelText('Runtime')).toHaveValue(120);
    expect(screen.getByLabelText('Overview')).toHaveValue('This is a test movie');
  });

  it('should show an error message when a required field is empty', async () => {
    render(<MovieForm onSubmit={onSubmit} genres={genres} movieInfo={{}} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    act(() => {
      fireEvent.click(submitButton);
    })

    await waitFor(() => {
      expect(screen.getByText('Title is required')).toBeInTheDocument();
      expect(screen.getByText('Poster URL is required')).toBeInTheDocument();
      expect(screen.getByText('Genres are required')).toBeInTheDocument();
      expect(screen.getByText('Release date is required')).toBeInTheDocument();
      expect(screen.getByText('Overview is required')).toBeInTheDocument();
    })

  });

  it('should trigger the onSubmit function', async () => {
    render(<MovieForm onSubmit={onSubmit} genres={genres} movieInfo={movieInfo} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });

    act(() => {
      fireEvent.click(submitButton);
    })

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({
        id: 1,
        title: 'Test Movie',
        poster_path: 'https://example.com/movie.jpg',
        release_date: '2021-01-01',
        vote_average: 7.5,
        runtime: 120,
        overview: 'This is a test movie',
        genres: ['Action', 'Comedy']
      });
    })
  });
});