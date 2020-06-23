import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {MoviesInterface} from "./interfaces/movies-interface";
import {MatTableDataSource} from "@angular/material/table";
import * as fromStore from "../../store";

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  displayedColumns: string[] = ['title', 'director', 'created', 'producer', 'release_date'];
  movieList: MoviesInterface[];
  dataSource;
  tableView$: Observable<boolean>;
  constructor(private store: Store<fromStore.MoviesState>) { }
  @Input() movies;
  @Input() viewTable;

  ngOnInit() {
    this.tableView$ = this.store.select(fromStore.getViewType);
    this.movieList = [...this.movies];
    this.dataSource = new MatTableDataSource<MoviesInterface>(this.movieList);
  }
}
