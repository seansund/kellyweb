import { Injectable } from '@angular/core';
import {Contact} from "../models/LegalIssue";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ContactService {

  constructor() { }

  submitLegalIssue(legalIssue: Contact): Observable<any> {
    console.log("Contact info: ", legalIssue);

    return Observable.create(c => {
      c.next("complete");
      c.complete();
    });
  }
}
