import MovieTile from '../components/movieTile';

export default {
  title: 'App/MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    releaseYear: { control: 'text' },
    name: { control: 'text' },
    imageUrl: { control: 'text' },
  },
};

export const Default = {
  args: {
    movie: {
      imageUrl: '../assets/movie-posters/pulp_fiction.png',
      name: 'Pulp Fiction',
      releaseYear: 2023,
      genres: ['Action', 'Adventure'],
    },
    onClick: (movie) => console.log(movie)
  },
};
