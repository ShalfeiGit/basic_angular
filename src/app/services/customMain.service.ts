import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomMainService {
  counter = 0;
  
  increaseCounter = () => {
    this.counter++;
  }

  decreaseCounter = () => {
    this.counter--;
  }
}
