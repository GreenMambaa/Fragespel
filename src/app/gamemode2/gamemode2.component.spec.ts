import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemode2Component } from './gamemode2.component';

describe('Gamemode2Component', () => {
  let component: Gamemode2Component;
  let fixture: ComponentFixture<Gamemode2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gamemode2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gamemode2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
