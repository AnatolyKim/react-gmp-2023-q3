import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IApiMovie, IMoviesRequestState } from '../models/movie.interface';

const initialState: IMoviesRequestState = { data: [], totalAmount: 0, status: 'idle', error: null };

export const getMovies = createAsyncThunk<{ data: IApiMovie[], totalAmount: number }, string>(
  'movies/getMovies',
  async (url) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    try {
      const response = await fetch(url, { signal });
      const { data, totalAmount } = await response.json();
  
      return { data, totalAmount };
    } catch (error) {
      console.error(error);

      return { data: [], totalAmount: 0 }
    }
  }
);

export const postMovie = createAsyncThunk<void, IApiMovie>(
  'movies/postMovie',
  async (data: IApiMovie) => {
    try {
      const { title, poster_path, vote_average, release_date, overview, genres, runtime } = data;

      fetch("http://localhost:4000/movies/", {
        method: "POST",
        body: JSON.stringify({ 
          title, 
          poster_path, 
          release_date, 
          overview, 
          genres, 
          runtime: +runtime,
          vote_average: +vote_average
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    } catch (error) {
      console.error(error)
    }
  }
);

export const updateMovie = createAsyncThunk<void, IApiMovie>(
  'movies/updateMovie',
  async (data: IApiMovie) => {
    try {
      fetch("http://localhost:4000/movies/", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    } catch (error) {
      console.error(error)
    }
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getMovies.fulfilled, (state, action: PayloadAction<{ data: IApiMovie[], totalAmount: number }>) => {
        const { data, totalAmount } = action.payload;
        
        state.data = data;
        state.totalAmount = totalAmount;
        state.status = 'succeeded';
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(postMovie.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(postMovie.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(updateMovie.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(updateMovie.rejected, (state) => {
        state.status = 'failed';
      });
  }
})

export default moviesSlice.reducer