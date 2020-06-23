import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';
import {MovieDetails} from "../../models/movie-details.model";


@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  movies$: Observable<MovieDetails[]>;
  loaded$: Observable<boolean>;
  viewTable: boolean = true;
  constructor(private store: Store<fromStore.MoviesState>) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(fromStore.getAllMovies);
    this.loaded$ = this.store.select(fromStore.getAllMoviesLoaded);

    this.store.dispatch((new fromStore.LoadMovies([])));
  }

  toggleView(ifTableView){
    this.viewTable = ifTableView;
  }
}
