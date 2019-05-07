import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamemenu1',
  templateUrl: './gamemenu1.component.html',
  styleUrls: ['./gamemenu1.component.css']
})
export class Gamemenu1Component implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor() { }

  ngOnInit() {
  }

}
