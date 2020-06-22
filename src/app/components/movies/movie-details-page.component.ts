import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as Service from '../../services';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesData: Service.MoviesServiceService) { }
  movieDetails;
  characterIds: [];
  errorMsg: string;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.moviesData.getMovieDetails(id).subscribe((resonpse) => {
      this.movieDetails = resonpse;
      this.characterIds = this.getCharacterIds(this.movieDetails.characters);
    },  (errorRes) => {
      const { error } = errorRes;
      this.errorMsg = error.detail;
    })
  }

  getCharacterIds(charactersUrls) {
    return charactersUrls.map(url =>  {
      const chars = url.split('/');
      return chars[chars.length - 2];
    });
  }

  getPosterClass(name) {
    switch (name) {
      case  'A New Hope':
        return 'a-new-hope';
      case  'The Empire Strikes Back':
        return 'the-empire-strikes-back';
      case 'Return of the Jedi':
        return 'return-of-the-jedi';
      case 'The Phantom Menace':
        return 'the-phantom-menace';
      case 'Attack of the Clones':
        return 'attack-of-the-clones';
      default:
        return 'revenge-of-the-sith';
    }
  }

}
