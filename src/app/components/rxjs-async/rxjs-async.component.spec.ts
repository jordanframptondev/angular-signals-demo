import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAsyncComponent } from './rxjs-async.component';

describe('RxjsAsyncComponent', () => {
  let component: RxjsAsyncComponent;
  let fixture: ComponentFixture<RxjsAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsAsyncComponent]
    });
    fixture = TestBed.createComponent(RxjsAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
