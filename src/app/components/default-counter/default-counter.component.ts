import {Component} from '@angular/core';

@Component({
  selector: 'app-default-counter',
  templateUrl: './default-counter.component.html',
  styleUrls: ['./default-counter.component.sass']
})
export class DefaultCounterComponent {
  counter = 0;
  logActions: string[] = [];

  decrement() {
    this.counter--;
    this.logActions.push('DECREMENT');
  }

  increment() {
    this.counter++;
    this.logActions.push('INCREMENT');
  }
}
