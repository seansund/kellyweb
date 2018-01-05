import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {Component} from "@angular/core";

@Component({
  selector: 'app-practice-menu',
  template: ''
})
class PracticeMenuMock {
}

@Component({
  selector: 'app-location',
  template: ''
})
class LocationMock {
}

@Component({
  selector: 'app-mini-contact',
  template: ''
})
class MiniContactMock {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        PracticeMenuMock,
        LocationMock,
        MiniContactMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
