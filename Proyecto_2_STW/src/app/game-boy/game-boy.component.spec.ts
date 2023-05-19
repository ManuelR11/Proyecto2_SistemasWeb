import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBOYComponent } from './game-boy.component';

describe('GameBOYComponent', () => {
  let component: GameBOYComponent;
  let fixture: ComponentFixture<GameBOYComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameBOYComponent]
    });
    fixture = TestBed.createComponent(GameBOYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
