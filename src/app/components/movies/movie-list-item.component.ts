import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as Service from '../../services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit, OnDestroy {

  @Input() movieId;
  movie;
  movieSubscribe;
  constructor(private movieData: Service.MoviesServiceService, private router: Router) { }

  ngOnInit(): void {
    this.movieSubscribe = this.movieData.getMovieDetails(this.movieId).subscribe((resonpse) => {
      this.movie = resonpse;
    })
  }

  ngOnDestroy(): void {
    this.movieSubscribe.unsubscribe();
  }

  navigateToDetails(id) {
    this.router.navigate(['/movies/movie-details', id], { state: this.movie });
  }

}
