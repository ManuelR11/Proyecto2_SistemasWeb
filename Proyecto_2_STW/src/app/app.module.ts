import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBOYComponent } from './game-boy/game-boy.component';
import { SnakeComponent } from './snake/snake.component';
import { MenuComponent } from './menu/menu.component';
import { TetrisComponent } from './tetris/tetris.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBOYComponent,
    SnakeComponent,
    MenuComponent,
    TetrisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
