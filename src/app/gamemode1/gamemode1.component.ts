import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gamemode1',
  templateUrl: './gamemode1.component.html',
  styleUrls: ['./gamemode1.component.css']
})

export class Gamemode1Component implements OnInit {

  movieData: object;

  constructor(private gameService: GameService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              public location: Location) { }

  ngOnInit() {

    this.gameService.getMovieData(2).subscribe(data => {
      this.movieData = data;
      console.log(this.movieData);
    });

  }

  answer1click(): void {
    this.router.navigateByUrl('/game1', { skipLocationChange: true }).then(() => {
    this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  answer2click(): void {
    this.router.navigate(['/game']);
  }

  answer3click(): void {
    location.reload();
  }

  answer4click(): void {
    location.reload();
  }

}
