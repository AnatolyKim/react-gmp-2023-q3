import MovieDetails from '../components/movieDetails';

export default {
  title: 'App/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    releaseYear: { control: 'text' },
    name: { control: 'text' },
    imageUrl: { control: 'text' },
    rating: { control: 'number' },
    duration: { control: 'number' },
    description: { control: 'text' },
  },
};

export const Default = {
  args: {
    movie: {
      imageUrl: '../assets/movie-posters/pulp_fiction.png',
      name: 'Pulp Fiction',
      releaseYear: 2023,
      genres: ['Action', 'Adventure'],
      rating: 8.9,
      duration: 154,
      description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny."
    },
  },
};
