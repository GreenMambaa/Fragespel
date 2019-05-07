import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemode3Component } from './gamemode3.component';

describe('Gamemode3Component', () => {
  let component: Gamemode3Component;
  let fixture: ComponentFixture<Gamemode3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gamemode3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gamemode3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
