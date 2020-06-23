import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as Service from '../../services';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private moviesData: Service.MoviesServiceService, private utils: Service.UtilsService) { }
  movieDetails;
  characterIds: [];
  errorMsg: string;
  movieSubscribe;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.movieSubscribe = this.moviesData.getMovieDetails(id).subscribe((resonpse) => {
      this.movieDetails = resonpse;
      this.characterIds = this.getCharacterIds(this.movieDetails.characters);
    },  (errorRes) => {
      const { error } = errorRes;
      this.errorMsg = error.detail;
    })
  }
  ngOnDestroy(): void {
    this.movieSubscribe.unsubscribe();
  }

  getCharacterIds(charactersUrls) {
    return charactersUrls.map(url =>  {
      const chars = url.split('/');
      return chars[chars.length - 2];
    });
  }

  getPosterClass(name) {
    return this.utils.getPosterClass(name);
  }

}
