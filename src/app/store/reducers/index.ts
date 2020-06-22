import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromMovies from './movies.reducer'

export interface MoviesState {
  movies: fromMovies.MovieState
}

export const reducers: ActionReducerMap<MoviesState> = {
  movies: fromMovies.reducer
};

export const getMoviesState = createFeatureSelector<MoviesState>('movies');
export const getMovies = createSelector(getMoviesState, (state: MoviesState) => state.movies);
export const getAllMovies = createSelector(getMovies, fromMovies.getMovies);
export const getAllMoviesLoading = createSelector(getMovies, fromMovies.getMovieLoading);
export const getAllMoviesLoaded = createSelector(getMovies, fromMovies.getMovieLoaded);
