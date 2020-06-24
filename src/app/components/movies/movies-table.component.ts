import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesInterface } from './interfaces/movies-interface'
import * as fromStore from "../../store";
import * as Service from '../../services';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'director', 'created', 'producer', 'release_date'];
  dataSource;
  @Input() movies;
  constructor(private utilsService: Service.UtilsService, private store: Store<fromStore.MoviesState>) { }

  ngOnInit() {
    this.store.select(fromStore.getSearchKey).subscribe(key => {
      const fitleredList = this.utilsService.filterMovieList(this.movies, key);
      this.dataSource = new MatTableDataSource<MoviesInterface>(fitleredList);
    });
  }
}
