import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gamemode1',
  templateUrl: './gamemode1.component.html',
  styleUrls: ['./gamemode1.component.css']
})

export class Gamemode1Component implements OnInit {

  movieData: object;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.gameService.getMovieData(2).subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    });

  }

  Answer1click(): void {
    this.router.navigate(['/game1']);
  }

  Answer2click(): void {
    this.router.navigate(['/game1']);
  }

  Answer3click(): void {
    this.router.navigate(['/game1']);
  }

  Answer4click(): void {
    this.router.navigate(['/game1']);
  }

}
