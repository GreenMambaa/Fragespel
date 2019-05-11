import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { Location } from '@angular/common';

declare var randomID: any;
@Component({
  selector: 'app-gamemode1',
  templateUrl: './gamemode1.component.html',
  styleUrls: ['./gamemode1.component.css']
})

export class Gamemode1Component implements OnInit {

  @Input() init: number = null;
  public timeCount = 10;

  movieData: object;
  randomID: any;
  highscoreCount: any;
  score = 0;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public location: Location) { }

  ngOnInit() {

    this.gameService.getMovieData().subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    });

    this.startCountdown();

    this.gameService.shareScore.subscribe(score => this.score = score);

  }

  startCountdown() {
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

    } else {
      this.doCountdown();
    }
  }

  updateScore(score: any) {
    this.gameService.updateScore(this.score + 10);
  }

  answer1click(): void {
    this.router.navigateByUrl('/game', { skipLocationChange: true }).then(() => {
    this.router.navigate([decodeURI(this.location.path())]);
    this.randomID = randomID++;
    });
    this.updateScore(this.score);
  }

  answer2click(): void {
    this.router.navigate(['/game']);
    this.updateScore(this.score);
  }

  answer3click(): void {
    location.reload();
    this.highscoreCount = this.highscoreCount + 10;
  }

  answer4click(): void {
    location.reload();
    this.updateScore(this.score);
  }

}
