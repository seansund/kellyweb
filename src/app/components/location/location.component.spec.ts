import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, Input} from "@angular/core";

import { LocationComponent } from './location.component';

@Component({
  selector: 'agm-marker',
  template: ''
})
class AgmMarkerMock {
  @Input() latitude: any;
  @Input() longitude: any;
}

@Component({
  selector: 'agm-map',
  template: ''
})
class AgmMapMock {
  @Input() latitude: any;
  @Input() longitude: any;
  @Input() zoom: any;
  marker: AgmMarkerMock;
}

describe('LocationMock', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LocationComponent,
        AgmMapMock,
        AgmMarkerMock
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
