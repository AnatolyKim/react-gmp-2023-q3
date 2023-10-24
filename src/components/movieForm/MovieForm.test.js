import { render, screen, fireEvent } from '@testing-library/react';

import MovieForm from './index';

const mockInitialMovieInfo = {
  name: 'Test Movie',
  url: 'https://example.com/movie',
  releaseYear: 2021,
  rating: 4.5,
  duration: '1h 30min',
  description: 'A test movie.',
};

const mockGenreInfo = {
  genres: ['Action', 'Thriller','Comedy',],
  selectedGenre: 'Thriller',
};

const mockOnSubmit = jest.fn();

describe('MovieForm', () => {
  it('renders movie form with initial data', () => {
    render(<MovieForm initialMovieInfo={mockInitialMovieInfo} genreInfo={mockGenreInfo} onSubmit={mockOnSubmit} />);

    expect(screen.getByText('Edit Movie')).toBeInTheDocument();
    expect(screen.getByLabelText('Movie Title')).toHaveValue('Test Movie');
    expect(screen.getByLabelText('Movie URL')).toHaveValue('https://example.com/movie');
    expect(screen.getByLabelText('Release Date')).toHaveValue(2021);
    expect(screen.getByLabelText('Rating')).toHaveValue(4.5);
    expect(screen.getByLabelText('Runtime')).toHaveValue('1h 30min');
    expect(screen.getByLabelText('Overview')).toHaveValue('A test movie.');
  });

  it('submits movie form data', () => {
    render(<MovieForm initialMovieInfo={{}} genreInfo={mockGenreInfo} onSubmit={mockOnSubmit} />);

    const titleInput = screen.getByLabelText('Movie Title');
    fireEvent.change(titleInput, { target: { value: 'New Test Movie' } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("{\"title\":\"New Test Movie\",\"director\":\"\",\"year\":\"\",\"rating\":\"\",\"runtime\":\"\"}");
  });
});