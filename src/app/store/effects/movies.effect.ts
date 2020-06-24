import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'

import * as moviesAction from '../actions/movies.action'
import * as Service from '../../services';
import { map, catchError, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs/internal/observable/of';
import {Store} from "@ngrx/store";
import * as fromStore from "../index";

@Injectable()
export class MoviesEffect {
  constructor(private actions$: Actions, private movieService: Service.MoviesServiceService, private store$: Store<fromStore.MoviesState>) {}
  movies;
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(moviesAction.LOAD_MOVIES),
    withLatestFrom(this.store$.select(state => state.movies)),
    switchMap(([action, state]) => {
      //not fetch query if movie data already loaded
      // @ts-ignore
      const {data, loaded} = state;
      if (!loaded) {
        return this.movieService.getMovies().pipe(
          map(moviesRespose => {
              this.movies = moviesRespose;
              return new moviesAction.LoadMoviesSuccess(this.movies.results)
            },
            catchError(error => of(new moviesAction.LoadMoviesFail(error)))
          ))
      } else {
        return of(new moviesAction.LoadMoviesSuccess(data));
      }
    })
  )
}
