import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  highscoreCount: any;
  score = 0;

  constructor(private router: Router,
              private gameService: GameService) { }

  ngOnInit() {

  this.gameService.shareScore.subscribe(score => this.score = score);

  }

}
