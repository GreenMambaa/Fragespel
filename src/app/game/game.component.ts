import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }


  mode1click(): void {
    this.router.navigate(['/game1']);
  }

  mode2click(): void {
    this.router.navigate(['/game2']);
  }

  mode3click(): void {
    this.router.navigate(['/game3']);
  }
}
