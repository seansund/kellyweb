import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from "../../models/Contact";

import {State} from "../../models/State";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;
  states: State[];
  nameControl: FormControl;
  emailControl: FormControl;
  stateControl: FormControl;
  zipControl: FormControl;
  phoneControl: FormControl;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.getStates().subscribe(states => {
      this.states = states;
    });

    this.contact = new Contact();
    this.contactForm = new FormGroup({
      'name': this.nameControl = new FormControl('', Validators.minLength(2)),
      'emailAddress': this.emailControl = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      'state': this.stateControl = new FormControl('', Validators.minLength(1)),
      'zip': this.zipControl = new FormControl('', Validators.pattern('[0-9]{5}|[0-9]{9}')),
      'phone': this.phoneControl = new FormControl('', Validators.pattern('[0-9]{10}'))
    });
  }

}
