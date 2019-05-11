import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { ScoreComponent } from './score/score.component';
import { GameComponent } from './game/game.component';
import { GameService } from './game.service';
import { Gamemode1Component } from './gamemode1/gamemode1.component';
import { Gamemode2Component } from './gamemode2/gamemode2.component';
import { Gamemode3Component } from './gamemode3/gamemode3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    ScoreComponent,
    GameComponent,
    Gamemode1Component,
    Gamemode2Component,
    Gamemode3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
