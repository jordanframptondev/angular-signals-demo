import {Component} from '@angular/core';

@Component({
  selector: 'app-default-counter',
  templateUrl: './default-counter.component.html',
  styleUrls: ['./default-counter.component.sass']
})
export class DefaultCounterComponent {
  logActions: string[] = [];
  count = 0;

  increment() {
    this.count++;
    this.logActions.push('INCREMENT');
  }

  decrement() {
    this.count--;
    this.logActions.push('DECREMENT');
  }
}
