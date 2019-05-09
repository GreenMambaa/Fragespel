import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiMovieUrl = 'http://www.omdbapi.com/?s=batman&apikey=7eeb20de';
  movies: any;

  constructor(private http: HttpClient) { }

  getMovieData() {
    return this.movies = this.http.get(this.apiMovieUrl);
  }
}
