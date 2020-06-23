import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesInterface } from './interfaces/movies-interface'

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'director', 'created', 'producer', 'release_date'];
  dataSource;

  @Input() movies;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<MoviesInterface>(this.movies);
  }

}
