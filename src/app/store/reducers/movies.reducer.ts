import * as fromMovies from '../actions/movies.action'
import { MovieDetails } from '../../models/movie-details.model'

export interface MoviesState {
  data: MovieDetails[];
  loaded: boolean;
  loading: boolean;
};

export const initState: MoviesState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initState,
  action: fromMovies.MoviesAction
): MoviesState {

  switch ((action.type)) {
    case fromMovies.LOAD_MOVIES: {
      return {
        ...state,
        loading: true
      }
    }
    case fromMovies.LOAD_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }
    case fromMovies.LOAD_MOVIES_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      }
    }
  }
  return state;
}

export const getMovieLoading = (state: MoviesState) => state.loading;
export const getMovieLoaded = (state: MoviesState) => state.loaded;
export const getMovies = (state: MoviesState) => state.data;
