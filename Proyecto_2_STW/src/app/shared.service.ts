import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private hideArcadeDisplay = false;
  private hideArcadeDisplay_1 = false;

  getHideArcadeDisplay(): boolean {
    return this.hideArcadeDisplay;
  }

  setHideArcadeDisplay(value: boolean): void {
    this.hideArcadeDisplay = value;
  }

  getHideArcadeDisplay_1(): boolean {
    return this.hideArcadeDisplay_1;
  }

  setHideArcadeDisplay_1(value: boolean): void {
    this.hideArcadeDisplay_1 = value;
  }

  
}
