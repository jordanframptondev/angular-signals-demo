import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, map, Subject, Subscription, takeUntil} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-rxjs-counter',
  templateUrl: './rxjs-counter.component.html',
  styleUrls: ['./rxjs-counter.component.sass']
})
export class RxjsCounterComponent {
  logActions = new BehaviorSubject<string[]>([]);
  count = new BehaviorSubject<number>(0);

  increment() {
    this.count.next(this.count.value + 1);
    this.logActions.next([...this.logActions.value, 'INCREMENT']);
    console.log("count: ", this.count.value);
  }

  decrement() {
    this.count.next(this.count.value - 1);
    this.logActions.next([...this.logActions.value, 'DECREMENT']);
    console.log("count: ", this.count.value);
  }
}
