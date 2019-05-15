import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

declare var randomID: any;
@Injectable({
  providedIn: 'root'
})

export class GameService {

  movies: any;
  apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${randomPage}&api_key=16903378f40153cb3d5fbc1b776a4aca`;

  private highscoreCount = new BehaviorSubject<any>(0);
  public shareScore = this.highscoreCount.asObservable();

  constructor(private http: HttpClient) { }

  getMovieData() {
    return this.movies = this.http.get(this.apiUrl);
  }

  updateScore(score: any) {
    this.highscoreCount.next(score);
  }

}
