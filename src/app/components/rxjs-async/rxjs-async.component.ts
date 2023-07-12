import {Component, OnDestroy, OnInit} from '@angular/core';
import {FakeUserService} from "../../services/fake-user/fake-user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rxjs-async',
  templateUrl: './rxjs-async.component.html',
  styleUrls: ['./rxjs-async.component.sass']
})
export class RxjsAsyncComponent implements OnInit, OnDestroy {

  randomName: string = "";
  userHistoryList: string[] = [];
  randomNameSubscription = new Subscription();
  userHistoryListSubscription = new Subscription();

  constructor(public fakeUserService: FakeUserService) {
  }

  ngOnInit() {
    this.randomNameSubscription = this.fakeUserService.newRandomName$.subscribe((name) => this.randomName = name);
    this.userHistoryListSubscription = this.fakeUserService.userHistoryLog$.subscribe((historyList) => this.userHistoryList = historyList);
  }

  getRandomUser() {
    this.fakeUserService.rxjsFetchRandomUser$().subscribe();
  }

  ngOnDestroy() {
    this.randomNameSubscription.unsubscribe();
    this.userHistoryListSubscription.unsubscribe();
  }
}
