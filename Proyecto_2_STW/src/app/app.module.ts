import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBOYComponent } from './game-boy/game-boy.component';
import { SnakeComponent } from './snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBOYComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
