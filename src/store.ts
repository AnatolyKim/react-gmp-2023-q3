import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit'
import moviesSlice from './store/moviesSlice';
import { useDispatch as useReduxDispatch } from 'react-redux';

type AppDispatch = ThunkDispatch<RootState, null, Action<string>>

export const store = configureStore({
  reducer: {
    movies: moviesSlice
  }
})

export const useDispatch = () => useReduxDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>;