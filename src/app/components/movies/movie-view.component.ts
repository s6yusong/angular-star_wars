import {Component, Input, OnInit} from '@angular/core';
import {MoviesInterface} from "./interfaces/movies-interface";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  displayedColumns: string[] = ['title', 'director', 'created', 'producer', 'release_date'];
  movieList: MoviesInterface[];
  dataSource;

  @Input() movies;
  @Input() viewTable;

  ngOnInit() {
    this.movieList = [...this.movies];
    this.dataSource = new MatTableDataSource<MoviesInterface>(this.movieList);
  }
}
