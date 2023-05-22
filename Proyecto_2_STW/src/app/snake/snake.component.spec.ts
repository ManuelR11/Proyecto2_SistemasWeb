import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeComponent } from './snake.component';

describe('SnakeComponent', () => {
  let component: SnakeComponent;
  let fixture: ComponentFixture<SnakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnakeComponent]
    });
    fixture = TestBed.createComponent(SnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SnakeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'snakeGame1938web'`, () => {
    const fixture = TestBed.createComponent(SnakeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('snakeGame1938web');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SnakeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('snakeGame1938web app is running!');
  });
});
