import * as fromMovies from '../actions/movies.action'
import { MovieDetails } from '../../models/movie-details.model'

export interface MovieState {
  data: MovieDetails[];
  loaded: boolean;
  loading: boolean;
};

export const initState: MovieState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initState,
  action: fromMovies.MoviesAction
): MovieState {

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

export const getMovieLoading = (state: MovieState) => state.loading;
export const getMovieLoaded = (state: MovieState) => state.loaded;
export const getMovies = (state: MovieState) => state.data;
