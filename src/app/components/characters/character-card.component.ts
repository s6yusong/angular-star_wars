import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as Service from '../../services';
import {Router} from "@angular/router";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit, OnDestroy {
  @Input() characterUrl;
  character;
  characterSubscribe;
  constructor(private characterData: Service.CharacterServiceService, private router: Router) { }

  ngOnInit(): void {
    const id = this.getCharacterIds();
    this.characterSubscribe = this.characterData.getCharacter(id).subscribe((resonpse) => {
      this.character = resonpse;
    })
  }
  ngOnDestroy(): void{
    this.characterSubscribe.unsubscribe();
  }
  getCharacterIds() {
    const chars = this.characterUrl.split('/');
    return chars[chars.length - 2];
  }

  navigateToDetails() {
    this.router.navigate(['/characters/character-details', this.getCharacterIds()], { state: this.character });
  }

}
