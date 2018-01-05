import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Component} from "@angular/core";

import { ContactComponent } from './contact.component';
import { StateService } from "../../services/state.service";

@Component({
  selector: 'app-location',
  template: ''
})
class LocationMock {
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
        LocationMock
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        StateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
