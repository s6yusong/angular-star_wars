import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as Service from '../../services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit, OnDestroy {

  @Input() movieUrl;
  movie;
  movieSubscribe;
  constructor(private movieData: Service.MoviesServiceService, private router: Router) { }

  ngOnInit(): void {
    const id = this.getMovieId();
    this.movieSubscribe = this.movieData.getMovieDetails(id).subscribe((resonpse) => {
      this.movie = resonpse;
    })
  }

  ngOnDestroy(): void {
    this.movieSubscribe.unsubscribe();
  }

  getMovieId() {
    const chars = this.movieUrl.split('/');
    return chars[chars.length - 2];
  }

  navigateToDetails() {
    this.router.navigate(['/movies/movie-details', this.getMovieId()], { state: this.movie });
  }

}
