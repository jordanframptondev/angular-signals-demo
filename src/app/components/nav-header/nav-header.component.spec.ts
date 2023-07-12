import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderComponent } from './nav-header.component';
import {RouterTestingModule} from "@angular/router/testing";

describe('NavHeaderComponent', () => {
  let component: NavHeaderComponent;
  let fixture: ComponentFixture<NavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ NavHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
