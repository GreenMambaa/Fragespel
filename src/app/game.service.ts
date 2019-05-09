import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var randomID: any;
@Injectable({
  providedIn: 'root'
})

export class GameService {

  movies: any;
  apiUrl = `http://www.omdbapi.com/?i=tt03${randomID}&apikey=7eeb20de`;

  constructor(private http: HttpClient) { }

  getMovieData(movieID: number) {
    return this.movies = this.http.get(this.apiUrl);
  }

}
