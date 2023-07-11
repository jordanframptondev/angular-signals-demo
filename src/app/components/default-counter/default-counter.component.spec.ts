import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCounterComponent } from './default-counter.component';

describe('CounterComponent', () => {
  let component: DefaultCounterComponent;
  let fixture: ComponentFixture<DefaultCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultCounterComponent]
    });
    fixture = TestBed.createComponent(DefaultCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
