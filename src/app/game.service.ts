import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

declare var randomID: any;
@Injectable({
  providedIn: 'root'
})

export class GameService {

  private highscoreCount = new BehaviorSubject<any>(0);
  public shareScore = this.highscoreCount.asObservable();

  constructor(private http: HttpClient) { }

  updateScore(score: any) {
    this.highscoreCount.next(score);
  }

}
