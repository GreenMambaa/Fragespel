import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemode1Component } from './gamemode1.component';

describe('Gamemode1Component', () => {
  let component: Gamemode1Component;
  let fixture: ComponentFixture<Gamemode1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gamemode1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gamemode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
