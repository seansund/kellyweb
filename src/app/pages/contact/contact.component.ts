import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from "../../models/LegalIssue";

import {State} from "../../models/State";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  states: State[];

  contactForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  stateControl: FormControl;
  zipControl: FormControl;
  phoneControl: FormControl;
  legalIssueControl: FormControl;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.getStates().subscribe(states => {
      this.states = states;
    });

    this.contactForm = new FormGroup({
      'name': this.nameControl = new FormControl('', {
        validators: Validators.minLength(2),
        updateOn: "change"
      }),
      'emailAddress': this.emailControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ], updateOn: "change"
      }),
      'state': this.stateControl = new FormControl('', {
        validators: Validators.minLength(1),
        updateOn: "change"
      }),
      'zip': this.zipControl = new FormControl('', {
        validators: Validators.pattern('[0-9]{5}|[0-9]{9}'),
        updateOn: "change"
      }),
      'phone': this.phoneControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ], updateOn: "change"
      }),
      "legalIssue": this.legalIssueControl = new FormControl('', {
        validators: Validators.required,
        updateOn: "change"
      }),
      'disclaimer': new FormControl('', {
        validators: Validators.required,
        updateOn: "change"
      })
    });
  }

}
