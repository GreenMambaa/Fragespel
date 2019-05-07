import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemenu1Component } from './gamemenu1.component';

describe('Gamemenu1Component', () => {
  let component: Gamemenu1Component;
  let fixture: ComponentFixture<Gamemenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gamemenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gamemenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
