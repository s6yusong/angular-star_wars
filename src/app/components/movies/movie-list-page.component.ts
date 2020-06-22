import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store'
import { MoviesServiceService } from './services/movies-service.service';
import {MovieDetails} from "../../models/movie-details.model";


@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.css']
})
export class MovieListPageComponent implements OnInit {
  movies$: Observable<MovieDetails[]>;
  constructor(private moviesData: MoviesServiceService, private store: Store<fromStore.MoviesState>) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(fromStore.getAllMovies);
    this.store.dispatch((new fromStore.LoadMovies([])));
  }
}
