import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }
  getAvatarClass(name) {
    switch (name) {
      case  'Luke Skywalker':
        return 'luke-skywalker-avatar';
      case  'C-3PO':
        return 'c-3po';
      case 'R2-D2':
        return 'r2-d2';
      case 'Obi-Wan Kenobi':
        return 'obi-Wan-Kenobi';
      case 'Yoda':
        return 'yoda';
      case 'Darth Vader':
        return 'darth-vader';
      case 'Anakin Skywalker':
        return 'anakin-skywalker';
      case 'Padmé Amidala':
        return 'dadme-amidala';
      case 'Mace Windu':
        return 'mace-windu';
      case 'Leia Organa':
        return 'leia-organa';
      case 'Chewbacca':
        return 'chewbacca';
      case 'Han Solo':
        return 'han-solo';
      case 'Wedge Antilles':
        return 'wedge-antilles';
      case 'Palpatine':
        return 'palpatine';
      case 'Qui-Gon Jinn':
        return 'qui-gon-jinn';
      case 'Nute Gunray':
        return 'nute-gunray';
      case 'Jabba Desilijic Tiure':
        return 'jabba-desilijic-tiure';
      case 'Jar Jar Binks':
        return 'jar-jar-binks';
      case 'Finis Valorum':
        return 'finis-valorum';
      case 'R4-P17':
        return 'r4-p17';
      case 'Owen Lars':
        return 'owen-lars';
      case 'Wilhuff Tarkin':
        return 'wilhuff-tarkin';
      case 'Beru Whitesun lars':
        return 'beru-whitesun-lars';
      case 'Ayla Secura':
        return 'aayla-secura';
      case 'Ki-Adi-Mundi':
        return 'ki-adi-mundi';
      case 'Kit Fisto':
        return 'kit-fisto';
      default:
        return 'default-avatar';
    }
  }
}
