import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  url="https://swapi.dev/api/films/";
  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get<any>(this.url);
  }
  getMovieDetails(id) {
    return this.http.get<any>(`${this.url}${id}`);
  }
}
