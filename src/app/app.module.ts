import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamewindowComponent } from './gamewindow/gamewindow.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { Gamemenu1Component } from './gamemenu1/gamemenu1.component';
import { Gamemenu2Component } from './gamemenu2/gamemenu2.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamewindowComponent,
    NavComponent,
    FooterComponent,
    Gamemenu1Component,
    Gamemenu2Component,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
