import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAreasComponent } from './practice-areas.component';
import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

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

describe('PracticeAreasComponent', () => {
  let component: PracticeAreasComponent;
  let fixture: ComponentFixture<PracticeAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PracticeAreasComponent,
        PracticeMenuMock,
        LocationMock,
        MiniContactMock
      ],
      providers: [
        {provide: ActivatedRoute, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
