import { useEffect, useState } from "react";
import { DEFAULT_QUERIES, Genres, PARAMS } from "../constants/enums";
import { buildQueryString } from "../helpers/utils";

export default function useMoviesApi(params: URLSearchParams) {
  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(Genres.ALL);
  const [moviesCount, setMoviesCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const searchQuery = params.get(PARAMS.SEARCH) || '';
    const searchSorting = params.get(PARAMS.SORT_BY) || DEFAULT_QUERIES.RELEASE_DATE;
    const searchActiveGenre = params.get(PARAMS.FILTER) || Genres.ALL;
    let queryParams = buildQueryString({ limit: '6', searchBy: DEFAULT_QUERIES.TITLE, sortOrder: 'asc', sortBy: searchSorting });
    
    if (searchQuery) {
      queryParams = queryParams.concat(`&${PARAMS.SEARCH}=${searchQuery}`);
    }

    if (searchActiveGenre !== Genres.ALL) {
      queryParams = queryParams.concat(`&${PARAMS.FILTER}=${searchActiveGenre}`);
    }

    setActiveGenre(searchActiveGenre as Genres);

    fetch(`http://localhost:4000/movies?${queryParams}`, { signal })
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.data);
        setMoviesCount(res.totalAmount);
      })
      .catch((err) => console.warn(err));
    
    return () => abortController.abort();
  }, [params]);


  return { movies, moviesCount, activeGenre };
}