import {Component, Input, OnInit} from '@angular/core';
import {CharacterServiceService} from "./character-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() characterUrl;
  character;
  constructor(private characterData: CharacterServiceService, private router: Router) { }

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
