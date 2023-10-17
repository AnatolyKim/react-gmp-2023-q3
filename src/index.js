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
import Dialog from './components/dialog';
import AddMovieForm from './components/addMovieForm';
import { movieLoader } from './loaders/movie.loader';

const postMovieData = (data) => {
  fetch("http://localhost:4000/movies/", {
    method: "POST",
    body: JSON.stringify(parseFormData(data)),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
}

const parseFormData = (data) => {
  const { title, poster_path, vote_average, release_date, overview, genres, runtime } = data;

  return {
    title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average: +vote_average,
    runtime: +runtime
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<App />}>
      <Route path='*' element={<MovieListPage />}>
        <Route path=":movieId" loader={movieLoader} element={<MovieDetails />} />
        <Route path="*" element={<SearchForm onSearch={() => {}} />}>
          <Route path='new' element={
            <Dialog>
              <AddMovieForm onSubmit={postMovieData} genres={['Action', 'Comedy', 'Drama']}></AddMovieForm>
            </Dialog>
          }>
          </Route>
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
