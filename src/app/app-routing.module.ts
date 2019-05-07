import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { Gamemode1Component } from './gamemode1/gamemode1.component';
import { Gamemode2Component } from './gamemode2/gamemode2.component';
import { Gamemode3Component } from './gamemode3/gamemode3.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'game', component: GameComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'game1', component: Gamemode1Component },
  { path: 'game2', component: Gamemode2Component },
  { path: 'game3', component: Gamemode3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
