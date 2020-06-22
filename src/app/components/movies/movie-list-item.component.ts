import {Component, Input, OnInit} from '@angular/core';
import * as Service from '../../services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input() movieUrl;
  movie;
  constructor(private movieData: Service.MoviesServiceService, private router: Router) { }

  ngOnInit(): void {
    const id = this.getMovieId();
    this.movieData.getMovieDetails(id).subscribe((resonpse) => {
      this.movie = resonpse;
    })
  }

  getMovieId() {
    const chars = this.movieUrl.split('/');
    return chars[chars.length - 2];
  }

  navigateToDetails() {
    this.router.navigate(['/movies/movie-details', this.getMovieId()], { state: this.movie });
  }

}
