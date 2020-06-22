import { Action } from '@ngrx/store'
import { MovieDetails } from '../../models/movie-details.model'

export const LOAD_MOVIES = '[MOVIES] Load Movies';
export const LOAD_MOVIES_FAIL = '[MOVIES] Load Movies Fail';
export const LOAD_MOVIES_SUCCESS = '[MOVIES] Load Movies Success';

export class LoadMovies implements Action{
  readonly type = LOAD_MOVIES;
  constructor(public payload: MovieDetails[]) {}
}

export class LoadMoviesFail implements Action{
  readonly type = LOAD_MOVIES_FAIL;
  constructor(public payload: any) {}
}

export class LoadMoviesSuccess implements Action{
  readonly type = LOAD_MOVIES_SUCCESS;
  constructor(public payload: any) {}
}

export type MoviesAction = LoadMovies | LoadMoviesFail | LoadMoviesSuccess;
