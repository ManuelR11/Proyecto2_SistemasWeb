import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private sharedService: SharedService) {}

  navigateToSnake() {
    this.sharedService.setHideArcadeDisplay(true);
  }  
}
