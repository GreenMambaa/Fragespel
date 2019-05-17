import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gamemode1',
  templateUrl: './gamemode1.component.html',
  styleUrls: ['./gamemode1.component.css']
})

export class Gamemode1Component implements OnInit {

  @Input() init: number = null;

  public timeCount: number;

  movieData: object;
  score = 0;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public location: Location,
              private http: HttpClient) { }

  randomMovie = Math.floor(Math.random() * 10000);


  question1 = `What year did {{movieData.Title}} release?`;


  getMovieData() {
    return this.http.get(`http://www.omdbapi.com/?i=tt011${this.randomMovie}&apikey=7eeb20de`);
  }

  ngOnInit() {

    this.getMovieData().subscribe(data => {
      this.movieData = data;
    });

    this.startCountdown();

    this.gameService.shareScore.subscribe(score => this.score = score);
  }

  startCountdown() {
    this.timeCount = 10;
    if (this.timeCount && this.timeCount > 0) {
      this.doCountdown();
    }
  }

  doCountdown() {
    setTimeout(() => {
      this.timeCount = this.timeCount - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    if (this.timeCount === 0) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([decodeURI(this.location.path())]);
      });
    } else {
      this.doCountdown();
    }
  }

  updateScore(score: any) {
    this.gameService.updateScore(this.score + 10);
  }

  answer1click(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
    this.updateScore(this.score);
  }

  answer2click(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  answer3click(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  answer4click(): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

}
