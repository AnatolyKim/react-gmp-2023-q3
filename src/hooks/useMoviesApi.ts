import { useEffect, useState } from "react";
import { DEFAULT_QUERIES, Genres, PARAMS } from "../constants/enums";
import { buildQueryString } from "../helpers/utils";
import { useSelector } from "react-redux";
import { RootState, useDispatch } from "../store";
import { getMovies } from "../store/moviesSlice";

export default function useMoviesApi(params: URLSearchParams) {
  const dispatch = useDispatch();
  const { data: movies, totalAmount: moviesCount } = useSelector((state: RootState) => state.movies);
  const [activeGenre, setActiveGenre] = useState(Genres.ALL);

  useEffect(() => {
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
    dispatch(getMovies(`http://localhost:4000/movies?${queryParams}`))
  }, [params, dispatch]);


  return { movies, moviesCount, activeGenre };
}