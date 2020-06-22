import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  url="https://swapi.dev/api/people";
  constructor(private http:HttpClient) { }
  getCharacter(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
