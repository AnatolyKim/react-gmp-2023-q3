import { movieLoader } from "../loaders/movie.loader";
import MovieService from "../services/movieService";
import MovieListPage from "../pages/movieListPage";
import SearchForm from "../components/searchForm";
import MovieDetails from "../components/movieDetails";
import EditMovieDialog from "../components/editMovieDialog";
import AddMovieDialog from "../components/addMovieDialog";

export const moviesRoutes = {
  path: '',
  element: <MovieListPage />,
  children: [
    {
      path: '',
      element: <SearchForm />,
    },
    {
      path: ':movieId',
      element: <MovieDetails />,
      loader: movieLoader,
      children: [
        {
          path: 'edit',
          element: <EditMovieDialog service={MovieService}/>,
        }
      ]
    },
    {
      path: 'new',
      element: <AddMovieDialog service={MovieService}/>,
    },
  ],
}
