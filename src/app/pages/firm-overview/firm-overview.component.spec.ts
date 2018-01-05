import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmOverviewComponent } from './firm-overview.component';
import {Component} from "@angular/core";

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

describe('FirmOverviewComponent', () => {
  let component: FirmOverviewComponent;
  let fixture: ComponentFixture<FirmOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FirmOverviewComponent,
        LocationMock,
        MiniContactMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
