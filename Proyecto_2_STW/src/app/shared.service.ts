import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private hideArcadeDisplay = false;

  getHideArcadeDisplay(): boolean {
    return this.hideArcadeDisplay;
  }

  setHideArcadeDisplay(value: boolean): void {
    this.hideArcadeDisplay = value;
  }

  
}
