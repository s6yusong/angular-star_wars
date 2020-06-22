import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'

import * as moviesAction from '../actions/movies.action'
import * as Service from '../../services';
import { map, catchError, switchMap } from "rxjs/operators";
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class MoviesEffect {
  constructor(private actions$: Actions, private movieService: Service.MoviesServiceService) {}
  movies;
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(moviesAction.LOAD_MOVIES),
    switchMap(() => {
      return this.movieService.getMovies().pipe(
        map(moviesRespose => {
          this.movies = moviesRespose;
          return new moviesAction.LoadMoviesSuccess(this.movies.results)
        },
        catchError(error => of(new moviesAction.LoadMoviesFail(error)))
      ))
    })
  )
}
