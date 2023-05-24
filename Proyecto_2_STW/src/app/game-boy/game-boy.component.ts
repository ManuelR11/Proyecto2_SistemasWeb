import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'game-boy',
  templateUrl: './game-boy.component.html',
  styleUrls: ['./game-boy.component.css']
})
export class GameBOYComponent {
  constructor(private sharedService: SharedService) {}

  get hideArcadeDisplay(): boolean {
    return this.sharedService.getHideArcadeDisplay();
  }

  get hideArcadeDisplay_1(): boolean {
    return this.sharedService.getHideArcadeDisplay_1();
  }
}
