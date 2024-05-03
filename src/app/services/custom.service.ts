export class CustomService {
  counter = 0;
  
  increaseCounter = () => {
    this.counter++;
  }

  decreaseCounter = () => {
    this.counter--;
  }
}
