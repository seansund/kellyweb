import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmOverviewComponent } from './firm-overview.component';

describe('FirmOverviewComponent', () => {
  let component: FirmOverviewComponent;
  let fixture: ComponentFixture<FirmOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmOverviewComponent ]
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
