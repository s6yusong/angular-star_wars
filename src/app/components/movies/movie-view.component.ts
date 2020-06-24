import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {MoviesInterface} from "./interfaces/movies-interface";
import * as fromStore from "../../store";

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  movieList: MoviesInterface[];
  tableView$: Observable<boolean>;
  constructor(private store: Store<fromStore.MoviesState>) { }
  @Input() movies;

  ngOnInit() {
    this.tableView$ = this.store.select(fromStore.getViewType);
    this.movieList = [...this.movies];
  }
}
