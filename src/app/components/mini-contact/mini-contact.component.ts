import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mini-contact',
  templateUrl: './mini-contact.component.html',
  styleUrls: ['./mini-contact.component.less']
})
export class MiniContactComponent implements OnInit {
  contactForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  phoneControl: FormControl;
  descriptionControl: FormControl;

  constructor() { }

  ngOnInit() {
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
      'phone': this.phoneControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ], updateOn: "change"
      }),
      'description': this.descriptionControl = new FormControl('', {
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
