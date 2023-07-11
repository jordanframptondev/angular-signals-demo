import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.sass']
})
export class SignalCounterComponent {
  actions = signal<string[]>([])
  counter = signal(0);

  increment() {
    this.counter.update((oldCounter) => {
      return oldCounter + 1
    });
    this.actions.update((oldActionList) => [...oldActionList, 'INCREMENT']);
  }

  decrement() {
    this.counter.update((oldCounter) => {
      return oldCounter + 1
    });
    this.actions.mutate((oldActionList) => oldActionList.push('DECREMENT'));
  }
}
