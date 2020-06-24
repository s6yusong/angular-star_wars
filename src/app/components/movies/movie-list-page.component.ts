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
  tableView$: Observable<boolean>;
  searchKeyWord: string;
  constructor(private store: Store<fromStore.MoviesState>) { }

  ngOnInit(): void {
    this.movies$ = this.store.select(fromStore.getAllMovies);
    this.loaded$ = this.store.select(fromStore.getAllMoviesLoaded);
    this.tableView$ = this.store.select(fromStore.getViewType);
    this.store.dispatch((new fromStore.LoadMovies([])));

    this.store.select(fromStore.getSearchKey).subscribe(data => {
      this.searchKeyWord = data;
    });
  }

  onSaveKeyWord() {
    this.store.dispatch((new fromStore.ChangeSearchKey(this.searchKeyWord)));
  }

  toggleView(ifTableView){
    this.store.dispatch((new fromStore.ToggleView(ifTableView)));
  }
}
