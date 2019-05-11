import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

declare var randomID: any;
@Injectable({
  providedIn: 'root'
})

export class GameService {

  movies: any;
  apiUrl = `http://www.omdbapi.com/?i=tt03${randomID}&apikey=7eeb20de`;

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
