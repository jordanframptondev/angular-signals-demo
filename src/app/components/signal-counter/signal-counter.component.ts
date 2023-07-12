import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-counter',
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.sass']
})
export class SignalCounterComponent {
  actions = signal<string[]>([])
  count = signal(0);

  increment() {
    this.count.update((oldCounter) => {
      return oldCounter + 1
    });
    this.actions.update((oldActionList) => [...oldActionList, 'INCREMENT']);
  }

  decrement() {
    this.count.update((oldCounter) => oldCounter - 1);
    this.actions.mutate((oldActionList) => oldActionList.push('DECREMENT'));
  }
}
