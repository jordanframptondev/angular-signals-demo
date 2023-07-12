import {computed, effect, Injectable, signal} from '@angular/core';
import {ajax} from "rxjs/internal/ajax/ajax";
import {BehaviorSubject, first, map, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeUserService {

  //SIGNAL
  newRandomUser = signal<any>(null);
  newRandomName = signal<string>("");
  userHistoryLog = signal<string[]>([]);

  //BEHAVIOR SUBJECT
  newRandomUser$ = new BehaviorSubject<object>({});
  newRandomName$ = new BehaviorSubject<string>("");
  userHistoryLog$ = new BehaviorSubject<string[]>([]);

  constructor() {
    effect(() => {
      console.log("Random Name: ", this.newRandomName());
    });

  }

  async fetchRandomUser() {
    const response = await fetch("https://random-data-api.com/api/v2/users?size=1");
    const user = await response.json();
    console.log(user);
    return user
  }

  getRandomUser$(): Observable<any> {
    return ajax("https://random-data-api.com/api/v2/users?size=1")
      .pipe(map((response) => {
        const user = response.response;
        console.log(user);
        return user;
      }));
  }

  signalFetchRandomUser$() {
    ajax("https://random-data-api.com/api/v2/users?size=1")
      .pipe(take(1))
      .subscribe((response) => {
        const user: any = response.response;
        this.newRandomUser.set(user);
        this.newRandomName.set(`${user?.first_name} ${user?.last_name}`);
        this.userHistoryLog.mutate((oldHistoryLog) => {
          if (this.newRandomName() !== '') {
            oldHistoryLog.unshift(this.newRandomName())
          }
        });
      });
  }

  rxjsFetchRandomUser$() {
    return ajax("https://random-data-api.com/api/v2/users?size=1")
      .pipe(take(1))
      .subscribe((response) => {
        const user: any = response.response;
        this.newRandomUser$.next(user);
        this.newRandomName$.next(`${user?.first_name} ${user?.last_name}`);
        if (this.newRandomName$.value !== '') {
          this.userHistoryLog$.next([this.newRandomName$.value, ...this.userHistoryLog$.value]);
        }
      });
  }
}
