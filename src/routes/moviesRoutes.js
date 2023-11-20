import { movieLoader } from "../loaders/movie.loader";
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
      element: <SearchForm onSearch={() => {}}/>,
    },
    {
      path: ':movieId',
      element: <MovieDetails />,
      loader: movieLoader,
      children: [
        {
          path: 'edit',
          element: <EditMovieDialog/>,
        }
      ]
    },
    {
      path: 'new',
      element: <AddMovieDialog/>,
    },
  ],
}
