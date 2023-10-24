import MovieForm from '../components/movieForm';

export default {
  title: 'App/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' }
  },
};

export const Default = {
  args: { 
    initialMovieInfo: {
      imageUrl: '../assets/movie-posters/pulp_fiction.png',
      name: 'Pulp Fiction',
      releaseYear: 1994,
      genres: ['Action', 'Adventure'],
      rating: 8.9,
      duration: 154,
      url: 'https://movie-url.com',
      description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny."
    }, 
    genreInfo: {
      genres: ['Action', 'Adventure'], 
      selectedGenre: ['Action']
    }, 
    header: 'Edit Movie', 
    onSubmit: (movie) => console.log(movie) 
  },
};
