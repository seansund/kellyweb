import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniContactComponent } from './mini-contact.component';

describe('MiniContactComponent', () => {
  let component: MiniContactComponent;
  let fixture: ComponentFixture<MiniContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
