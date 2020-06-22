import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesInterface } from './interfaces/movies-interface'

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'director', 'created', 'producer', 'release_date'];
  movieList: MoviesInterface[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() movies;

  ngOnInit() {
    this.movieList = [...this.movies];
    this.dataSource = new MatTableDataSource<MoviesInterface>(this.movieList);
    this.dataSource.paginator = this.paginator;
  }

}
