import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { CharacterServiceService } from './character-service.service'

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private characterData: CharacterServiceService, private activatedRoute: ActivatedRoute) { }
  characterDetail;
  ngOnInit(): void {
    if (Object.keys(window.history.state).length > 1) {
      this.characterDetail = window.history.state;
    } else {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.characterData.getCharacter(id).subscribe((resonpse) => {
        this.characterDetail = resonpse;
      })
    }
  }

}
