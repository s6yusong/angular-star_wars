import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { CharacterServiceService } from '../../services/character-service.service'
import {MovieListItemComponent} from "../movies/movie-list-item.component";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private characterData: CharacterServiceService, private activatedRoute: ActivatedRoute) { }
  @ViewChild(MovieListItemComponent)
  private item: MovieListItemComponent;
  characterDetail: Object;
  errorMsg: string;
  ngOnInit(): void {
    if (Object.keys(window.history.state).length > 1) {
      this.characterDetail = window.history.state;
    } else {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.characterData.getCharacter(id).subscribe((resonpse) => {
        this.characterDetail = resonpse;
      },  (errorRes) => {
        const { error } = errorRes;
        this.errorMsg = error.detail;
      })
    }
  }

}
