import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import * as Service from '../../services';
@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent implements OnInit {
  @Input() characterUrl;
  character;
  constructor(private characterData: Service.CharacterServiceService, private router: Router) { }

  ngOnInit(): void {
    const id = this.getCharacterIds();
    this.characterData.getCharacter(id).subscribe((resonpse) => {
      this.character = resonpse;
    })
  }

  getCharacterIds() {
    const chars = this.characterUrl.split('/');
    return chars[chars.length - 2];
  }

  navigateToDetails() {
    this.router.navigate(['/characters/character-details', this.getCharacterIds()], { state: this.character });
  }
}
