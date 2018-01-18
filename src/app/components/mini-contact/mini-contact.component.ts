import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contact} from "../../models/LegalIssue";
import {ContactService} from "../../services/contact.service";

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
  legalIssueControl: FormControl;
  disclaimerControl: FormControl;
  formError: boolean;

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.formError = false;

    this.contactForm = new FormGroup({
      'name': this.nameControl = new FormControl('', {
        validators: Validators.minLength(2),
        updateOn: "change"
      }),
      'emailAddress': this.emailControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.email
        ], updateOn: "change"
      }),
      'phone': this.phoneControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{10}')
        ], updateOn: "change"
      }),
      "legalIssue": this.legalIssueControl = new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ], updateOn: "change"
      }),
      'disclaimer': this.disclaimerControl = new FormControl(null,{
        validators: [
          Validators.required,
          Validators.requiredTrue
        ], updateOn: "change"
      })
    });
  }

  submit() {
    this.formError = false;

    if (this.contactForm.valid) {
      let contact: Contact = this.contactForm.value;

      this.service.submitLegalIssue(contact).subscribe(next => {
        console.log("next", next);
      }, error => {
        console.error("Error", error);
      }, () => {
        console.log("Complete");
      });

    } else {
      // display error
      this.formError = true;

      this.contactForm.valueChanges.forEach(value => {
        this.formError = this.contactForm.invalid;
      });
    }
  }

}
