import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from "../../models/Contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.contact = new Contact();
    this.contactForm = new FormGroup({

    });
  }

}
