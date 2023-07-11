import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAsyncComponent } from './signal-async.component';

describe('SignalAsyncComponent', () => {
  let component: SignalAsyncComponent;
  let fixture: ComponentFixture<SignalAsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalAsyncComponent]
    });
    fixture = TestBed.createComponent(SignalAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
