import {Component, signal} from '@angular/core';
import {FakeUserService} from "../../services/fake-user/fake-user.service";

@Component({
  selector: 'app-signal-async',
  templateUrl: './signal-async.component.html',
  styleUrls: ['./signal-async.component.sass']
})
export class SignalAsyncComponent {

  randomName = this.fakeUserService.newRandomName;
  userHistory = this.fakeUserService.userHistoryLog;

  constructor(private fakeUserService: FakeUserService) {
  }

  getRandomUser() {
    this.fakeUserService.signalFetchRandomUser$();
  }
}
