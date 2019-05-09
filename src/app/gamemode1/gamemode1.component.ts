import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
@Component({
  selector: 'app-gamemode1',
  templateUrl: './gamemode1.component.html',
  styleUrls: ['./gamemode1.component.css']
})
export class Gamemode1Component implements OnInit {

  movieData: object;

  constructor(private gameService: GameService) { }

  ngOnInit() {

    this.gameService.getMovieData().subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    });

  }

}
