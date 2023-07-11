import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsVsSignalsPageComponent } from './rxjs-vs-signals-page.component';

describe('RxjsVsSignalsPageComponent', () => {
  let component: RxjsVsSignalsPageComponent;
  let fixture: ComponentFixture<RxjsVsSignalsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsVsSignalsPageComponent]
    });
    fixture = TestBed.createComponent(RxjsVsSignalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
