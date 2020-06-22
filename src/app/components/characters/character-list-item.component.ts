import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Router } from "@angular/router";
import * as Service from '../../services';
@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit, OnDestroy {
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
