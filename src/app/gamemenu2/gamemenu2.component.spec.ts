import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamemenu2Component } from './gamemenu2.component';

describe('Gamemenu2Component', () => {
  let component: Gamemenu2Component;
  let fixture: ComponentFixture<Gamemenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gamemenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gamemenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
