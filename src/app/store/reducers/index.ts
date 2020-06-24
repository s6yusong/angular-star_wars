import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromMovies from './movies.reducer'
import * as fromView from './viewType.reducer'

export interface MoviesState {
  movies: fromMovies.MoviesState,
  view: fromView.ViewState
}

export const reducers: ActionReducerMap<MoviesState> = {
  movies: fromMovies.reducer,
  view: fromView.reducer
};

// load movie data
export const getMoviesState = createFeatureSelector<MoviesState>('movies');
export const getMovies = createSelector(getMoviesState, (state: MoviesState) => state.movies);
export const getAllMovies = createSelector(getMovies, fromMovies.getMovies);
export const getAllMoviesLoading = createSelector(getMovies, fromMovies.getMovieLoading);
export const getAllMoviesLoaded = createSelector(getMovies, fromMovies.getMovieLoaded);


//change view type
export const getViewTypeState = createFeatureSelector<MoviesState>('view');
export const getViewState = createSelector(getViewTypeState, (state: MoviesState) => state.view);
export const getViewType = createSelector(getViewState, fromView.getViewType);
export const getSearchKey = createSelector(getViewState, fromView.getSearchKey);
