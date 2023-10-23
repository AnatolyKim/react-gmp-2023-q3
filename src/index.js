import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieListPage from './pages/movieListPage'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MovieDetails from './components/movieDetails';
import SearchForm from './components/searchForm';
import { movieLoader } from './loaders/movie.loader';
import AddMovieDialog from './components/addMovieDialog';
import MovieService from './services/movieService';
import EditMovieDialog from './components/editMovieDialog';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route path='*' element={<MovieListPage />}>
        <Route path=":movieId" loader={movieLoader} element={<MovieDetails />}>
          <Route path="edit" element={<EditMovieDialog service={MovieService}/>}/>
        </Route>
        <Route path="*" element={<SearchForm onSearch={() => {}} />}>
          <Route path='new' element={<AddMovieDialog service={MovieService}/>} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
