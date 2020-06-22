import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  url="https://swapi.dev/api/films/";
  urlCharater="https://swapi.dev/api/people";
  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get(this.url);
  }
  getMovieDetails(id) {
    return this.http.get(`${this.url}${id}`);
  }
  getCharaters() {
    return this.http.get(`${this.urlCharater}`);
  }
}
